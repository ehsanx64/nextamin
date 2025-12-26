import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import Navbar from './Navbar'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

const whitney = localFont({
    src: [
        {
            path: '../../public/fonts/Whitney/whitneybook.otf',
            weight: '400',
            style: 'normal',
        }
    ],
})

export const metadata = {
    title: 'nextamin',
    description: 'Next.js Application',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={whitney.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    <div className=' bg-background text-foreground dark:bg-foreground'>
                        <Navbar />

                        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[80vh]">
                            <div className="px-2 py-4">
                                {children}
                            </div>
                        </main>

                        <footer className="bg-blue-900 text-white">
                            <div className="bg-blue-900 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="px-2 py-4 text-center">
                                    <p>Copyright &copy; 2025</p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </ThemeProvider>

            </body>
        </html>
    )
}
