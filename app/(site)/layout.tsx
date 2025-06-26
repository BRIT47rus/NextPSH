import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Sidebar from './components/Sidebar/Sidebar';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import styles from './layout.module.css';
import { FunctionComponent, JSX } from 'react';
import Layout from '../(auth)/layout';
import {
    IAppContext,
    AppContextProvider,
} from './components/context/app.context';
import { Sidebar } from './components/Sidebar/Sidebar';
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

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
    Component: FunctionComponent<T>
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider
                menu={props.menu}
                firstCategory={props.firstCategory}
            >
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};
