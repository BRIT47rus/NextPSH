import ProductIcon from './icons/product.svg';
import HeadIcon from './icons/head.svg';
import BookIcon from './icons/book.svg';
import CloudIcon from './icons/cloud.svg';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
export const firstLevelMenu: FirstLevelMenuItem[] = [
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
