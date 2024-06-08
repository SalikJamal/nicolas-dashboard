import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ToastProvider from "@/providers/toast-provider"
import ModalProvider from "@/providers/modal-provider"
import "@/styles/globals.css"
import "@/styles/prosemirror.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nicolas Dashboard",
  description: "Clerk Elements Sandbox"
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
