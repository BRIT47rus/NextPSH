import { Button, Htag } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Мой проект',
    description: 'Первый проект на nextJS',
};
export default function Home() {
    return (
        <>
            hello
            <Htag tag="h1">Заголовок</Htag>
            <Button appearance="primary">Button</Button>
            <Button appearance="ghost">Button</Button>
        </>
    );
}
