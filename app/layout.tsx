import { Urbanist } from "next/font/google";
import './globals.css'
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Urbanist({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={font.className}>{children}</body>
    </html>
  )
}
