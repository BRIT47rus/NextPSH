import './globals.css';
import { Open_Sans } from 'next/font/google';

const inter = Open_Sans({ subsets: ['latin'] });

export const metadata = {
    title: 'Проект',
    description: 'Мой первый проект на NextJS',
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
