import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public', 'images');
const outputDir = path.join(__dirname, 'public', 'images_optimized');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Read input directory
fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading input directory:', err);
        return;
    }

    files.forEach(file => {
        // Only process image files
        if (!file.match(/\.(jpg|jpeg|png|webp|tiff|tif)$/i)) return;

        const inputFile = path.join(inputDir, file);

        // Ensure consistent output extension (e.g., .jpg)
        const outputFilename = path.parse(file).name + '.jpg';
        const outputFile = path.join(outputDir, outputFilename);

        console.log(`Processing: ${file} -> ${outputFilename}`);

        sharp(inputFile)
            .resize({ width: 2500, withoutEnlargement: true }) // Max width 2500px
            .jpeg({ quality: 90, mozjpeg: true }) // High quality
            .toFile(outputFile)
            .then(info => {
                const sizeMB = (info.size / 1024 / 1024).toFixed(2);
                console.log(`✅ Optimized ${file}: ${sizeMB} MB`);
            })
            .catch(err => {
                console.error(`❌ Error processing ${file}:`, err);
            });
    });
});
