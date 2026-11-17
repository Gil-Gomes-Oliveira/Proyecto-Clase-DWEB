// Vite prepara los módulos para el navegador y genera la versión de producción.
import { defineConfig } from 'vite';
// Este complemento integra React y actualiza la vista al guardar componentes.
import react from '@vitejs/plugin-react';

// Exportamos la configuración que Vite leerá al arrancar.
export default defineConfig({
  plugins: [react()],
});
