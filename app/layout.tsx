import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Lucas Gonçalves | Tênis, Beach Tennis e Padel",description:"Seu jogo. Seu ritmo. Sua evolução. Aulas de tênis, beach tennis e padel com Lucas Gonçalves."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}