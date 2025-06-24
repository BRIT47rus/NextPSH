'use client';
// import { getMenu } from '@/api/menu';
import { Button, Htag, P, Rating, Tag } from '@/components';
import { Menu } from './components/menu';

// import { Metadata } from 'next';
import { useState } from 'react';

// export const metadata: Metadata = {
//     title: 'Мой проект',
//     description: 'Первый проект на nextJS',
// };

export default function Home() {
    const [rating, setRating] = useState<number>(4);
    return (
        <main>
            <Htag tag="h1">Заголовок</Htag>
            <Button appearance="primary" arrow="right">
                Button
            </Button>
            <Button appearance="ghost" arrow="down">
                Button
            </Button>
            <P size="l">big</P>
            <P size="m">midle</P>
            <P size="s">small</P>
            <Tag size="s">Маленький</Tag>
            <Tag size="m" color="primary">
                Мало
            </Tag>
            <Tag size="s" color="green">
                Мало
            </Tag>
            <Tag color="red">Мало</Tag>
            <Rating rating={rating} isEditable seRating={setRating} />
            <Menu />
        </main>
    );
}
