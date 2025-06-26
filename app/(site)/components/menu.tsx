// import { getMenu } from '@/api/menu';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import styles from './menu.module.css';
import ProductIcon from './icons/product.svg';
import HeadIcon from './icons/head.svg';
import BookIcon from './icons/book.svg';
import CloudIcon from './icons/cloud.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import classNames from 'classnames';
// import { getMenu } from '@/api/menu';
import { useSidebarCTX } from './Sidebar/Sidebar';

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

export function Menu() {
    // const menuM = await getMenu(0);
    const menuM = useSidebarCTX();

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((menu) => (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            <div
                                className={classNames(
                                    styles.firstLevel
                                    //      {
                                    //     [styles.firstLevelActive]:
                                    //         menu.id === menuM[id],
                                    // }
                                )}
                            >
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </a>
                        {buildSecondLevel(menu)}
                    </div>
                ))}
            </>
        );
    };
    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={classNames(styles.secondBlock)}>
                {menuM &&
                    menuM.map((m) => (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondCategory}>
                                {m._id.secondCategory}
                            </div>
                            <div
                                className={classNames(styles.secondLevelBlock, {
                                    [styles.secondBlockOpen]: m.isOpened,
                                })}
                            >
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    ))}
            </div>
        );
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return pages.map((p) => (
            <a
                href={`/${route}/${p.alias}`}
                key={route}
                className={classNames(styles.fithLevel, {
                    [styles.fithLevelActive]: false,
                })}
            >
                {p.category}
            </a>
        ));
    };

    return <div className={styles.menu}>{buildFirstLevel()}</div>;
}
