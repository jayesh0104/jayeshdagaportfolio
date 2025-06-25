// These styles apply to every route in the application
import './globals.css'
 
export const metadata = {
  title: 'Jayesh Daga | Portfolio',
  description: 'UI/UX Designer Portfolio',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#FAF8F6] overflow-x-hidden'>{children}</body>
    </html>
  )
}