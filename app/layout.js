export const metadata = {
  title: "G'day Tacos - South Central LA's Aussie-Mexican Fusion",
  description: "The best tacos with an Aussie twist in South Central Los Angeles",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>{children}</body>
    </html>
  )
}
