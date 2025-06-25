// import { getMenu } from '@/api/menu';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import styles from './menu.module.css';
import ProductIcon from './icons/product.svg';
import HeadIcon from './icons/head.svg';
import BookIcon from './icons/book.svg';
import CloudIcon from './icons/cloud.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import classNames from 'classnames';

const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: 'courses',
        name: 'Курсы',
        icon: <ProductIcon />,
        id: TopLevelCategory.Courses,
    },
    {
        route: 'services',
        name: 'Сервисы',
        icon: <HeadIcon />,
        id: TopLevelCategory.Services,
    },
    {
        route: 'books',
        name: 'Книги',
        icon: <BookIcon />,
        id: TopLevelCategory.Books,
    },
    {
        route: 'products',
        name: 'Продукты',
        icon: <CloudIcon />,
        id: TopLevelCategory.Products,
    },
];

export async function Menu() {
    // const menu = await getMenu(0);

    const builFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((menu) => (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            <div
                                className={classNames(styles.firstLevel, {
                                    [styles.firstLevelActive]:
                                        menu.id === firstCategory,
                                })}
                            >
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </a>
                    </div>
                ))}
            </>
        );
    };
    const builSecondLevel = () => {};
    const builThirdLevel = () => {};

    return <div className={styles.menu}>{builFirstLevel()}</div>;
}
