let IS_PROD = true;

const server = IS_PROD
  ? "https://meetchat-808p.onrender.com"
  : "http://localhost:8000";

export default server;
