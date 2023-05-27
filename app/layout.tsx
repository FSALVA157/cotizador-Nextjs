export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body>
        <h1>Barra Principal</h1>      
        {children}
      </body>
    </html>
  )
}
