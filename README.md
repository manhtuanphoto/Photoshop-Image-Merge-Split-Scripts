# Photoshop Image Merge & Split Scripts

A collection of Photoshop scripts for splitting and merging images automatically.

[Vietnamese version below](#phiên-bản-tiếng-việt) | [Scroll to Vietnamese](#phiên-bản-tiếng-việt)

---

## 📋 Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)
  - [Image Merge Script](#1-image-merge-script)
  - [Image Split Script](#2-image-split-script)
- [Requirements](#requirements)
- [License](#license)

---

## ✨ Features

### Merge Script
- Merge 6 images into one large 12000×12000 image
- Preserve aspect ratio with white padding
- Select 6 files at once
- Preview arrangement before merging
- Maximum quality output

### Split Script
- Automatically split images into 6 parts (2 rows × 3 columns)
- Process multiple images in batch
- Maintain highest JPEG quality
- Auto-create output folder
- Support all Photoshop-compatible formats

---

## 🚀 Installation

1. Download the scripts:
   - `merge_image.jsx` - For merging images
   - `split_image.jsx` - For splitting images

2. Place scripts in Photoshop's scripts folder:
   - **Windows**: `C:\Program Files\Adobe\Adobe Photoshop [Version]\Presets\Scripts\`
   - **Mac**: `Applications/Adobe Photoshop [Version]/Presets/Scripts/`

3. Restart Photoshop

4. Access scripts via:
   - **File → Scripts → Browse...** (select .jsx file)
   - Or if placed in Scripts folder: **File → Scripts → [Script Name]**

---

## 📖 Scripts

### 1. Image Merge Script

Merge 6 images into one large image (12000×12000 pixels).

#### How to Use:

1. Prepare 6 images with dimensions around **4000×6000 pixels**
   - **IMPORTANT**: Images must be in **portrait orientation** (Width: 4000px, Height: 6000px)
   - Exact dimensions can vary slightly (e.g., 4000×5997, 4000×5999)
   - Script will fit images with white padding if needed
   - ⚠️ **Note**: The final merged image will be 12000×12000px only if input images are exactly 4000px wide × 6000px tall

2. Run the script: **File → Scripts → merge_image**

3. Select 6 images at once:
   - Hold **Ctrl** (Windows) or **Cmd** (Mac) while clicking to select multiple files
   - Files will be sorted alphabetically by name

4. Confirm the arrangement:
   - Script shows which image goes where
   - Click OK to proceed or Cancel to reselect

5. Choose save location and filename

#### Image Arrangement:

Images are arranged in 2 rows × 3 columns:
```
[Image 1] [Image 2] [Image 3]
[Image 4] [Image 5] [Image 6]
```

**Note**: Images are sorted alphabetically, so name your files accordingly:
- Good naming: `img01.jpg`, `img02.jpg`, `img03.jpg`, `img04.jpg`, `img05.jpg`, `img06.jpg`
- Also works: `a.jpg`, `b.jpg`, `c.jpg`, `d.jpg`, `e.jpg`, `f.jpg`

#### Image Fitting:

The script preserves aspect ratio:
- If image is smaller: adds white padding to reach 4000×6000
- If image is larger: scales down proportionally, then adds padding
- **No distortion** - original proportions maintained

#### Output:
- Single JPEG file at 12000×12000 pixels
- Maximum quality (Quality level 12)
- Total file size varies based on content

**⚠️ Important Note About Dimensions:**
- To get exactly 12000×12000px output, input images must be **4000px (width) × 6000px (height)**
- Portrait orientation is required (taller than wide)
- If images are landscape or have different dimensions, the output will still be 12000×12000px but with white padding around each image section

---

### 2. Image Split Script

Split each image into 6 equal parts arranged in 2 rows and 3 columns.

#### How to Use:

1. Run the script: **File → Scripts → split_image**
2. Select the folder containing your images
3. Script will:
   - Create a `splitted` subfolder
   - Process all compatible images
   - Save 6 parts for each image

#### Output Format:

For an image named `photo.jpg`, the script creates:
```
📁 Original Folder/
├── 📸 photo.jpg (original)
├── 📁 splitted/
    ├── 📸 photo_01.jpg (top-left)
    ├── 📸 photo_02.jpg (top-center)
    ├── 📸 photo_03.jpg (top-right)
    ├── 📸 photo_04.jpg (bottom-left)
    ├── 📸 photo_05.jpg (bottom-center)
    └── 📸 photo_06.jpg (bottom-right)
```

#### Grid Layout:
```
[photo_01] [photo_02] [photo_03]
[photo_04] [photo_05] [photo_06]
```

#### Supported Input Formats:
- JPEG (.jpg, .jpeg)
- PNG (.png)
- BMP (.bmp)
- TIFF (.tiff, .tif)
- PSD (.psd)
- GIF (.gif)
- WebP (.webp)
- RAW formats (.raw, .cr2, .nef, .arw, .dng)

---

## 💻 Requirements

- Adobe Photoshop CS6 or later
- Sufficient RAM for processing large images (recommended 8GB+)
- For merge script: source images should be around 4000×6000 pixels

---

## 🎯 Tips

### For Split Script:
- Works with any image size - automatically divides into 6 equal parts
- Process entire folders at once
- Original files remain untouched

### For Merge Script:
- Name your files with numbers or letters to control arrangement order
- Verify the preview before confirming
- Images can be slightly different sizes - script handles this automatically
- For best results, use images with similar dimensions

---

## 📝 License

MIT License - Feel free to use and modify for your needs.

---

## 🐛 Troubleshooting

**Script doesn't appear in menu:**
- Make sure .jsx file is in the correct Scripts folder
- Restart Photoshop after adding scripts

**"Support of format index" error:**
- This has been fixed in the latest version
- Make sure you're using the updated script

**Merge script says images are wrong size:**
- Check that images are approximately 4000×6000 pixels
- Script allows ±50px variance in width and 5990-6010px in height

**Out of memory errors:**
- Close other programs
- Try processing fewer/smaller images
- Increase Photoshop's memory allocation in Preferences

---

# Phiên bản Tiếng Việt

# Photoshop Scripts - Chia và Ghép Ảnh

Bộ công cụ scripts Photoshop để chia và ghép ảnh tự động.

---

## 📋 Mục Lục
- [Tính Năng](#tính-năng)
- [Cài Đặt](#cài-đặt)
- [Các Scripts](#các-scripts)
  - [Script Chia Ảnh](#1-script-chia-ảnh)
  - [Script Ghép Ảnh](#2-script-ghép-ảnh)
- [Yêu Cầu Hệ Thống](#yêu-cầu-hệ-thống)
- [Bản Quyền](#bản-quyền)

---

## ✨ Tính Năng

### Script Chia Ảnh
- Tự động chia ảnh thành 6 phần (2 hàng × 3 cột)
- Xử lý hàng loạt nhiều ảnh cùng lúc
- Giữ chất lượng JPEG cao nhất
- Tự động tạo thư mục lưu kết quả
- Hỗ trợ mọi định dạng ảnh mà Photoshop mở được

### Script Ghép Ảnh
- Ghép 6 ảnh thành 1 ảnh lớn 12000×12000 pixel
- Giữ nguyên tỉ lệ ảnh, thêm viền trắng nếu cần
- Chọn 6 file cùng lúc
- Xem trước cách sắp xếp trước khi ghép
- Xuất ra với chất lượng tối đa

---

## 🚀 Cài Đặt

1. Tải về các scripts:
   - `split_image.jsx` - Script chia ảnh
   - `merge_image.jsx` - Script ghép ảnh

2. Đặt file script vào thư mục Scripts của Photoshop:
   - **Windows**: `C:\Program Files\Adobe\Adobe Photoshop [Phiên bản]\Presets\Scripts\`
   - **Mac**: `Applications/Adobe Photoshop [Phiên bản]/Presets/Scripts/`

3. Khởi động lại Photoshop

4. Sử dụng script qua:
   - **File → Scripts → Browse...** (chọn file .jsx)
   - Hoặc nếu đã đặt trong thư mục Scripts: **File → Scripts → [Tên Script]**

---

## 📖 Các Scripts

### 1. Script Chia Ảnh

Chia mỗi ảnh thành 6 phần bằng nhau theo lưới 2 hàng và 3 cột.

#### Cách Sử Dụng:

1. Chạy script: **File → Scripts → split_image**
2. Chọn thư mục chứa ảnh cần chia
3. Script sẽ:
   - Tạo thư mục con `splitted`
   - Xử lý tất cả ảnh trong folder
   - Lưu 6 phần cho mỗi ảnh

#### Định Dạng Đầu Ra:

Với ảnh có tên `photo.jpg`, script sẽ tạo:
```
📁 Thư mục gốc/
├── 📸 photo.jpg (ảnh gốc)
├── 📁 splitted/
    ├── 📸 photo_01.jpg (trên-trái)
    ├── 📸 photo_02.jpg (trên-giữa)
    ├── 📸 photo_03.jpg (trên-phải)
    ├── 📸 photo_04.jpg (dưới-trái)
    ├── 📸 photo_05.jpg (dưới-giữa)
    └── 📸 photo_06.jpg (dưới-phải)
```

#### Sơ Đồ Lưới:
```
[photo_01] [photo_02] [photo_03]
[photo_04] [photo_05] [photo_06]
```

#### Định Dạng Đầu Vào Được Hỗ Trợ:
- JPEG (.jpg, .jpeg)
- PNG (.png)
- BMP (.bmp)
- TIFF (.tiff, .tif)
- PSD (.psd)
- GIF (.gif)
- WebP (.webp)
- Định dạng RAW (.raw, .cr2, .nef, .arw, .dng)

---

### 2. Script Ghép Ảnh

Ghép 6 ảnh thành 1 ảnh lớn (12000×12000 pixels).

#### Cách Sử Dụng:

1. Chuẩn bị 6 ảnh có kích thước khoảng **4000×6000 pixels**
   - **QUAN TRỌNG**: Ảnh phải ở **chế độ dọc** (Chiều rộng: 4000px, Chiều cao: 6000px)
   - Kích thước có thể sai số nhỏ (ví dụ: 4000×5997, 4000×5999)
   - Script sẽ tự động thêm viền trắng nếu cần
   - ⚠️ **Lưu ý**: File sau khi ghép sẽ có kích thước đúng 12000×12000px chỉ khi ảnh đầu vào có đúng kích thước 4000px rộng × 6000px cao

2. Chạy script: **File → Scripts → merge_image**

3. Chọn 6 ảnh cùng lúc:
   - Giữ phím **Ctrl** (Windows) hoặc **Cmd** (Mac) khi click để chọn nhiều file
   - Các file sẽ được sắp xếp theo thứ tự bảng chữ cái

4. Xác nhận cách sắp xếp:
   - Script hiển thị ảnh nào sẽ đặt ở vị trí nào
   - Nhấn OK để tiếp tục hoặc Cancel để chọn lại

5. Chọn nơi lưu file và đặt tên

#### Cách Sắp Xếp Ảnh:

Ảnh được sắp xếp theo lưới 2 hàng × 3 cột:
```
[Ảnh 1] [Ảnh 2] [Ảnh 3]
[Ảnh 4] [Ảnh 5] [Ảnh 6]
```

**Lưu ý**: Ảnh được sắp xếp theo tên file (A-Z), vì vậy hãy đặt tên file phù hợp:
- Đặt tên tốt: `img01.jpg`, `img02.jpg`, `img03.jpg`, `img04.jpg`, `img05.jpg`, `img06.jpg`
- Cũng được: `a.jpg`, `b.jpg`, `c.jpg`, `d.jpg`, `e.jpg`, `f.jpg`

#### Xử Lý Kích Thước:

Script giữ nguyên tỉ lệ ảnh:
- Nếu ảnh nhỏ hơn: thêm viền trắng để đủ 4000×6000
- Nếu ảnh lớn hơn: thu nhỏ theo tỉ lệ, sau đó thêm viền trắng
- **Không làm méo ảnh** - giữ nguyên tỉ lệ gốc

#### Kết Quả:
- 1 file JPEG kích thước 12000×12000 pixels
- Chất lượng tối đa (Quality level 12)
- Dung lượng file tùy thuộc vào nội dung ảnh

**⚠️ Lưu Ý Quan Trọng Về Kích Thước:**
- Để có kết quả chính xác 12000×12000px, ảnh đầu vào phải có kích thước **4000px (rộng) × 6000px (cao)**
- Ảnh phải ở chế độ dọc (chiều cao lớn hơn chiều rộng)
- Nếu ảnh ở chế độ ngang hoặc có kích thước khác, file đầu ra vẫn sẽ là 12000×12000px nhưng có viền trắng xung quanh mỗi phần ảnh

---

## 💻 Yêu Cầu Hệ Thống

- Adobe Photoshop CS6 trở lên
- RAM đủ để xử lý ảnh lớn (khuyến nghị 8GB+)
- Với script ghép ảnh: ảnh nguồn nên có kích thước khoảng 4000×6000 pixels

---

## 🎯 Mẹo Sử Dụng

### Với Script Chia Ảnh:
- Hoạt động với mọi kích thước ảnh - tự động chia thành 6 phần bằng nhau
- Xử lý cả thư mục ảnh cùng lúc
- Ảnh gốc không bị thay đổi

### Với Script Ghép Ảnh:
- Đặt tên file có số hoặc chữ cái để kiểm soát thứ tự sắp xếp
- Kiểm tra xem trước trước khi xác nhận
- Ảnh có thể khác kích thước một chút - script tự xử lý
- Để có kết quả tốt nhất, dùng ảnh có kích thước tương tự nhau

---

## 📝 Bản Quyền

Giấy phép MIT - Tự do sử dụng và chỉnh sửa theo nhu cầu.

---

## 🐛 Xử Lý Lỗi

**Script không hiện trong menu:**
- Đảm bảo file .jsx đã đặt đúng thư mục Scripts
- Khởi động lại Photoshop sau khi thêm scripts

**Lỗi "Support of format index":**
- Lỗi này đã được sửa trong phiên bản mới nhất
- Đảm bảo bạn đang dùng script đã cập nhật

**Script ghép báo ảnh sai kích thước:**
- Kiểm tra ảnh có kích thước khoảng 4000×6000 pixels
- Script cho phép sai số ±50px về chiều rộng và 5990-6010px về chiều cao

**Lỗi hết bộ nhớ:**
- Đóng các chương trình khác
- Thử xử lý ít ảnh hơn hoặc ảnh nhỏ hơn
- Tăng bộ nhớ cấp phát cho Photoshop trong Preferences

---

## 👨‍💻 Đóng Góp

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc pull request.

## 📧 Liên Hệ

Nếu có vấn đề hoặc câu hỏi, vui lòng tạo issue trên GitHub.

---

**Chúc bạn sử dụng hiệu quả! / Happy editing!** 🎨
