// src/mocks/server.js
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// 불러온 handler들을 통해 모킹 서버를 설정
export const server = setupWorker(...handlers);