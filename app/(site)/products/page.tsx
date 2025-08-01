// import Image from 'next/image';
// import styles from './page.module.css';
import { Metadata } from 'next';
import { getMenu } from '@/api/menu';
import { Menu } from '../components/menu';

// export const metadata: Metadata = {
// 	title: 'Исправленные данные',
// }

export async function generateMetadata(): Promise<Metadata> {
    // ...
    return {
        title: 'ComputedMeta',
    };
}

// const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
// 	firstCategory: 0
// });

export default async function Home() {
    const menu = await getMenu(0);

    return (
        <main>
            {menu.length}
            Главная страница
            <Menu />
        </main>
    );
}
