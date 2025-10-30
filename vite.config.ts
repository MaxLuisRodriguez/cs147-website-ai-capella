import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use Stanford path when building for Stanford, otherwise use GitHub Pages path
  base: mode === 'stanford'
    ? '/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/'
    : '/cs147-website-ai-capella/',
}))
