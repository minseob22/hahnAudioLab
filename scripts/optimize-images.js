const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/img';
const outputDir = 'public/img/optimized';

// 출력 디렉터리가 없으면 생성
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 입력 디렉터리의 파일 읽기 및 최적화
fs.readdir(inputDir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const inputFile = path.join(inputDir, file);
    const outputFile = path.join(outputDir, file);

    sharp(inputFile)
    .webp({ quality: 60 }) // WebP 형식으로 변환하며 품질 60
    .toFile(outputFile.replace('.jpg', '.webp'), (err, info) => {
        if (err) {
        console.error(`Error optimizing ${file}:`, err);
        } else {
        console.log(`Optimized ${file}:`, info);
        }
    });
  });
});
