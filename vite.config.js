import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Plugin to handle paths containing '#' character in directory names
const fixHashPathPlugin = () => {
  const rootDir = process.cwd();
  return {
    name: 'fix-hash-path',
    enforce: 'pre',
    resolveId(id, importer) {
      if (id.startsWith('/src/') || id.startsWith('./src/') || id === '/src/main.jsx') {
        const cleanId = id.replace(/^\.?\//, '');
        const fullPath = path.resolve(rootDir, cleanId);
        if (fs.existsSync(fullPath)) {
          return fullPath;
        }
      }
      return null;
    },
    load(id) {
      // If it points to an existing file in our project directory
      const cleanPath = id.split('?')[0];
      if (fs.existsSync(cleanPath) && fs.statSync(cleanPath).isFile()) {
        const content = fs.readFileSync(cleanPath, 'utf-8');
        return content;
      }
      return null;
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [fixHashPathPlugin(), react()],
  root: process.cwd(),
  server: {
    port: 3000,
    open: false,
    host: true
  },
  preview: {
    port: 3000,
    open: false,
    host: true
  }
})
