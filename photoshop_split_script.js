// Script Photoshop - Chia ảnh thành 6 phần (2 hàng x 3 cột)

// Hàm chính
function main() {
    try {
        // Chọn folder chứa ảnh JPEG
        var sourceFolder = Folder.selectDialog("Chọn folder chứa file JPEG:");
        
        if (sourceFolder == null) {
            alert("Không có folder nào được chọn!");
            return;
        }
        
        // Chọn folder đích để lưu ảnh đã chia
        var destinationFolder = Folder.selectDialog("Chọn folder để lưu ảnh đã chia:");
        
        if (destinationFolder == null) {
            alert("Không có folder đích nào được chọn!");
            return;
        }
        
        // Lấy danh sách file JPEG
        var jpegFiles = sourceFolder.getFiles("*.jpg");
        var jpegFiles2 = sourceFolder.getFiles("*.jpeg");
        
        // Ghép hai mảng lại
        var allJpegFiles = jpegFiles.concat(jpegFiles2);
        
        if (allJpegFiles.length == 0) {
            alert("Không tìm thấy file JPEG nào trong folder đã chọn!");
            return;
        }
        
        // Xử lý từng file
        for (var i = 0; i < allJpegFiles.length; i++) {
            processImage(allJpegFiles[i], destinationFolder);
        }
        
        alert("Đã xử lý xong " + allJpegFiles.length + " file!");
        
    } catch (error) {
        alert("Lỗi: " + error.message);
    }
}

// Hàm xử lý một ảnh
function processImage(imageFile, destinationFolder) {
    try {
        // Mở file ảnh
        var doc = app.open(imageFile);
        
        // Lấy kích thước ảnh gốc
        var originalWidth = doc.width.as("px");
        var originalHeight = doc.height.as("px");
        
        // Tính kích thước mỗi phần (chia 3 cột, 2 hàng)
        var partWidth = Math.floor(originalWidth / 3);
        var partHeight = Math.floor(originalHeight / 2);
        
        // Lấy tên file (không có extension)
        var fileName = imageFile.name.replace(/\.[^\.]+$/, '');
        
        // Chia ảnh thành 6 phần
        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 3; col++) {
                // Tính toán vị trí crop
                var x = col * partWidth;
                var y = row * partHeight;
                
                // Tạo bản copy của document
                var newDoc = doc.duplicate();
                
                // Định nghĩa vùng crop
                var cropBounds = [
                    UnitValue(x, "px"),           // left
                    UnitValue(y, "px"),           // top
                    UnitValue(x + partWidth, "px"), // right
                    UnitValue(y + partHeight, "px") // bottom
                ];
                
                // Crop ảnh
                newDoc.crop(cropBounds);
                
                // Tạo tên file mới (01, 02, 03, 04, 05, 06)
                var partNumber = (row * 3 + col + 1);
                var partNumberStr = (partNumber < 10) ? "0" + partNumber : partNumber.toString();
                var newFileName = fileName + partNumberStr + ".jpg";
                
                // Lưu file
                var saveFile = new File(destinationFolder + "/" + newFileName);
                saveJPEG(newDoc, saveFile);
                
                // Đóng document mới
                newDoc.close(SaveOptions.DONOTSAVECHANGES);
            }
        }
        
        // Đóng document gốc
        doc.close(SaveOptions.DONOTSAVECHANGES);
        
    } catch (error) {
        alert("Lỗi khi xử lý file " + imageFile.name + ": " + error.message);
    }
}

// Hàm lưu JPEG với chất lượng cao nhất
function saveJPEG(doc, saveFile) {
    try {
        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12; // Chất lượng cao nhất (1-12)
        jpegOptions.embedColorProfile = true;
        jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        jpegOptions.matte = MatteType.NONE;
        
        doc.saveAs(saveFile, jpegOptions, true, Extension.LOWERCASE);
        
    } catch (error) {
        alert("Lỗi khi lưu file: " + error.message);
    }
}

// Chạy script
main();