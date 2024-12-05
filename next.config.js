module.exports = {
  basePath: '', // 필요한 리포지토리 경로를 설정
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? ""
      : "",
};
