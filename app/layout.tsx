import '../styles/global.css';

import type { Metadata } from 'next'

const siteTitle = "Ricardo Yasuda, software developer"

export const metadata: Metadata = {
  title: siteTitle,
  description: 'Ricardo Yasuda, software developer and engineering manager',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: siteTitle,
    images: [
      {
        url: `https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  }
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}