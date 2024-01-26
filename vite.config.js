import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styled from '@emotion/styled';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/reddit-clone/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      stylus: {
        use: [styled],
      },
    },
  },
})

