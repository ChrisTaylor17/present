import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WalletProvider } from '@/components/ui/wallet-provider'
import { Navigation } from '@/components/ui/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CONSILIENCE - AI-Powered Solana DAPP',
  description: 'Find meaningful connections through AI matching, chat with AI assistance, and create NFTs on Solana blockchain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider>
          <Navigation />
          {children}
        </WalletProvider>
      </body>
    </html>
  )
}