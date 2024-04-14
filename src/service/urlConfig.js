import axios from "axios";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NCIsIkhldEhhblN0cmluZyI6IjA4LzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTgyNTc1MzYwMDAwMCIsIm5iZiI6MTY5NTkyMDQwMCwiZXhwIjoxNzI1OTAxMjAwfQ.OKsfWEoxxNGCfaW1Y-0XJaFv5CZv6A2aoWlqLkFT-TA";
export const MA_NHOM = "GP09";

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
  },
});
