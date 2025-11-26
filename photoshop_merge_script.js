// Script Photoshop - Ghép 6 ảnh thành 1 ảnh 12000x12000 (2 hàng x 3 cột)

// Hàm chính
function main() {
    try {
        // Chọn 6 file ảnh
        var selectedFiles = selectImageFiles();
        
        if (selectedFiles.length !== 6) {
            alert("Vui lòng chọn đúng 6 file ảnh!");
            return;
        }
        
        // Kiểm tra kích thước ảnh
        if (!validateImageSizes(selectedFiles)) {
            return;
        }
        
        // Chọn nơi lưu và tên file
        var saveFile = File.saveDialog("Chọn nơi lưu file ghép:", "*.jpg");
        
        if (saveFile == null) {
            alert("Không có file nào được chọn để lưu!");
            return;
        }
        
        // Ghép ảnh
        var mergedDoc = mergeImages(selectedFiles);
        
        // Lưu file
        saveJPEG(mergedDoc, saveFile);
        
        // Đóng document
        mergedDoc.close(SaveOptions.DONOTSAVECHANGES);
        
        alert("Đã ghép và lưu ảnh thành công!");
        
    } catch (error) {
        alert("Lỗi: " + error.message);
    }
}

// Hàm chọn 6 file ảnh cùng lúc
function selectImageFiles() {
    alert("Chọn 6 file ảnh cùng lúc.\n" +
          "Thứ tự sắp xếp sẽ là:\n" +
          "• Theo tên file (A-Z)\n" +
          "• Ghép theo thứ tự: 2 hàng x 3 cột");
    
    var files = File.openDialog("Chọn 6 file ảnh (giữ Ctrl để chọn nhiều file):", "*.jpg;*.jpeg;*.png;*.bmp;*.tiff;*.tif;*.psd", true);
    
    if (files == null || files.length == 0) {
        alert("Không có file nào được chọn!");
        return [];
    }
    
    if (files.length !== 6) {
        alert("Bạn đã chọn " + files.length + " file.\nVui lòng chọn đúng 6 file!");
        return [];
    }
    
    // Sắp xếp file theo tên để đảm bảo thứ tự nhất quán
    files.sort(function(a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
    
    // Hiển thị thứ tự sắp xếp để user xác nhận
    var fileList = "Thứ tự ghép ảnh sẽ là:\n";
    for (var i = 0; i < files.length; i++) {
        var positions = ["Hàng 1 - Cột 1", "Hàng 1 - Cột 2", "Hàng 1 - Cột 3", 
                        "Hàng 2 - Cột 1", "Hàng 2 - Cột 2", "Hàng 2 - Cột 3"];
        fileList += (i + 1) + ". " + files[i].name + " → " + positions[i] + "\n";
    }
    
    var confirm = window.confirm(fileList + "\nTiếp tục?");
    
    if (!confirm) {
        return [];
    }
    
    return files;
}

// Hàm kiểm tra kích thước ảnh
function validateImageSizes(files) {
    var targetWidth = 4000;
    var targetHeightMin = 5990;
    var targetHeightMax = 6010;
    
    for (var i = 0; i < files.length; i++) {
        try {
            var doc = app.open(files[i]);
            var width = doc.width.as("px");
            var height = doc.height.as("px");
            
            doc.close(SaveOptions.DONOTSAVECHANGES);
            
            // Kiểm tra kích thước (cho phép sai số nhỏ)
            if (Math.abs(width - targetWidth) > 50 || 
                height < targetHeightMin || height > targetHeightMax) {
                
                alert("File " + files[i].name + " có kích thước " + width + "x" + height + 
                      "\nKhông phù hợp với yêu cầu (khoảng 4000x6000)");
                return false;
            }
            
        } catch (error) {
            alert("Không thể mở file: " + files[i].name);
            return false;
        }
    }
    
    return true;
}

// Hàm ghép 6 ảnh thành 1 ảnh lớn
function mergeImages(files) {
    try {
        // Tạo document mới 12000x12000
        var newDoc = app.documents.add(UnitValue(12000, "px"), UnitValue(12000, "px"), 300, "Merged Image");
        
        // Vị trí của từng ảnh trong lưới 2x3
        var positions = [
            {x: 0, y: 0},        // Hàng trên - trái
            {x: 4000, y: 0},     // Hàng trên - giữa  
            {x: 8000, y: 0},     // Hàng trên - phải
            {x: 0, y: 6000},     // Hàng dưới - trái
            {x: 4000, y: 6000},  // Hàng dưới - giữa
            {x: 8000, y: 6000}   // Hàng dưới - phải
        ];
        
        // Đặt từng ảnh vào vị trí tương ứng
        for (var i = 0; i < files.length; i++) {
            // Mở ảnh
            var sourceDoc = app.open(files[i]);
            
            // Thay vì resize, ta sẽ tạo canvas 4000x6000 và đặt ảnh vào giữa
            var processedDoc = fitImageToCanvas(sourceDoc, 4000, 6000);
            sourceDoc.close(SaveOptions.DONOTSAVECHANGES);
            
            // Copy toàn bộ ảnh đã xử lý
            processedDoc.selection.selectAll();
            processedDoc.selection.copy();
            processedDoc.close(SaveOptions.DONOTSAVECHANGES);
            
            // Chuyển sang document đích
            app.activeDocument = newDoc;
            
            // Paste ảnh
            newDoc.paste();
            
            // Di chuyển layer vừa paste đến vị trí đúng
            var pastedLayer = newDoc.activeLayer;
            pastedLayer.translate(UnitValue(positions[i].x, "px"), UnitValue(positions[i].y, "px"));
        }
        
        // Flatten image
        newDoc.flatten();
        
        return newDoc;
        
    } catch (error) {
        throw new Error("Lỗi khi ghép ảnh: " + error.message);
    }
}

// Hàm fit ảnh vào canvas 4000x6000 mà không làm biến dạng
function fitImageToCanvas(sourceDoc, targetWidth, targetHeight) {
    try {
        var currentWidth = sourceDoc.width.as("px");
        var currentHeight = sourceDoc.height.as("px");
        
        // Tạo document mới với kích thước chuẩn và nền trắng
        var newDoc = app.documents.add(
            UnitValue(targetWidth, "px"), 
            UnitValue(targetHeight, "px"), 
            sourceDoc.resolution, 
            "Fitted Image",
            NewDocumentMode.RGB,
            DocumentFill.WHITE
        );
        
        // Tính toán scale để fit ảnh vào canvas mà không làm biến dạng
        var scaleWidth = targetWidth / currentWidth;
        var scaleHeight = targetHeight / currentHeight;
        var scale = Math.min(scaleWidth, scaleHeight); // Chọn scale nhỏ hơn để giữ nguyên tỉ lệ
        
        // Tính kích thước mới sau khi scale
        var newWidth = currentWidth * scale;
        var newHeight = currentHeight * scale;
        
        // Resize ảnh gốc theo tỉ lệ
        if (scale !== 1) {
            sourceDoc.resizeImage(UnitValue(newWidth, "px"), UnitValue(newHeight, "px"));
        }
        
        // Copy ảnh gốc
        sourceDoc.selection.selectAll();
        sourceDoc.selection.copy();
        
        // Paste vào document mới
        app.activeDocument = newDoc;
        newDoc.paste();
        
        // Tính toán vị trí để đặt ảnh ở giữa
        var offsetX = (targetWidth - newWidth) / 2;
        var offsetY = (targetHeight - newHeight) / 2;
        
        // Di chuyển ảnh về giữa
        var pastedLayer = newDoc.activeLayer;
        pastedLayer.translate(UnitValue(offsetX, "px"), UnitValue(offsetY, "px"));
        
        // Flatten image
        newDoc.flatten();
        
        return newDoc;
        
    } catch (error) {
        throw new Error("Lỗi khi fit ảnh vào canvas: " + error.message);
    }
}

// Hàm lưu JPEG với chất lượng cao nhất của Photoshop
function saveJPEG(doc, saveFile) {
    try {
        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;                                    // Maximum quality (1-12)
        jpegOptions.embedColorProfile = true;                        // Embed color profile
        jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;  // Standard baseline
        jpegOptions.matte = MatteType.NONE;                         // No matte
        jpegOptions.scans = 3;                                      // Progressive scans for better quality
        
        doc.saveAs(saveFile, jpegOptions, true, Extension.LOWERCASE);
        
    } catch (error) {
        throw new Error("Lỗi khi lưu file: " + error.message);
    }
}

// Chạy script
main();