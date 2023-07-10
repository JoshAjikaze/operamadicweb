import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // "app/*": ["src/app/*"],
      'pages': path.resolve(__dirname, './src/pages'),
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),


      // 'app-redux': path.resolve(__dirname, './src/app-redux'),
      // 'app-redux': path.resolve(__dirname, './src/app-redux'),
      // 'app-redux': path.resolve(__dirname, './src/app-redux'),



    },
  },
  plugins: [react()],
})