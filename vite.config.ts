import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), ssr()],
  css: {
    modules: {
      localsConvention: 'camelCase', 
      scopeBehaviour: 'local',
      generateScopedName: '[name]__[local]__[hash:base64:5]', 
    }
  }
}

export default config
