// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://minseob22.github.io/hahnAudioLab"
      : "",
};
