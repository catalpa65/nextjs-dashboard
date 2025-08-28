import '@/app/ui/global.css';
import {inter, dancingScript} from '@/app/ui/fonts';
import {Metadata} from 'next';
export const experimental_ppr = true;

export const metadata: Metadata = {
    title: 'Acme Dashboard',
    description: 'The official Next.js Course Dashboard, built with App Router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        {/*
          antialiased是Tailwind抗锯齿效果
        */}
        <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
