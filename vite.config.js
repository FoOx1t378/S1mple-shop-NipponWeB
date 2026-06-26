import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/имя-вашего-репозитория/', // ЗДЕСЬ пишите имя репозитория в гитхабе в слэшах!
})

