import '@/app/ui/global.css';
import { inter, dancingScript } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        {/*antialiased是Tailwind抗锯齿效果*/}
        <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
