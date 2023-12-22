import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Ensure .tsx files are included as valid extensions
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
})
