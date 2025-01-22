import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*класс Tailwind antialiased, который сглаживает шрифт. Этот класс необязательно использовать  */}
      <body className={`${inter.className} antialised`}>{children}</body> 
    </html>
  );
}
