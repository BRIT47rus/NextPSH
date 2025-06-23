import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import styles from './layout.module.css';
const inter = Open_Sans({ subsets: ['latin'] });

export const metadata = {
    title: 'Главная',
    description: 'Мой первый проект на NextJS',
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <div className={styles.wrapper}>
                    <Header className={styles.header} />
                    <Sidebar className={styles.sidebar} />
                    <div className={styles.body}>{children}</div>
                    <Footer className={styles.footer} />
                </div>
            </body>
        </html>
    );
}
