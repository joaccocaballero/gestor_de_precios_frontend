import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Gestor de Precios",
  description: "Provisión Carla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
