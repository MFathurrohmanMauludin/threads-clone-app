import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from 'next';
import { Inter } from "next/font/google";

import Topbar from '@/components/shared/Topbar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RigthSidebar from '@/components/shared/RightSidebar';
import Bottombar from '@/components/shared/Bottombar';

export const metadata = {
  title: 'Threads',
  description: 'A Next.Js 13 Meta Threads Application'
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Topbar />

          <main>
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>
            <RigthSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
