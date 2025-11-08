import './globals.css'

export const metadata = {
  title: 'Rare & Fine Books',
  description: 'Curated collection of fine books',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}