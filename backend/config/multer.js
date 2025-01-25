const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Pastikan folder utama ada
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Konfigurasi penyimpanan file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = 'uploads/barang/';
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
    cb(null, folder); // Simpan file ke folder barang
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext); // Nama file unik
  },
});

// Filter file (hanya menerima gambar)
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowedExtensions = ['.jpg', '.jpeg', '.png'];
  if (file.mimetype.startsWith('image/') && allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Hanya file gambar dengan ekstensi .jpg, .jpeg, atau .png yang diizinkan!'), false);
  }
};

// Inisialisasi Multer
const upload = multer({ 
  storage, 
  fileFilter, 
  limits: { fileSize: 2 * 1024 * 1024 } // Maksimal 2MB
});

module.exports = upload;
