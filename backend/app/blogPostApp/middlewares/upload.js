
import multer from "multer";

// Store uploaded files temporarily in memory
const storage = multer.memoryStorage();

// Allow only specific image types
const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(
            new Error("Only JPG, PNG and WEBP images are allowed"),
            false
        );
    }
};

// Multer configuration
const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB
    },
    fileFilter,
});

export default upload;
