import { Button, Htag, P } from '@/components';
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
            <Button appearance="primary" arrow="right">
                Button
            </Button>
            <Button appearance="ghost" arrow="down">
                Button
            </Button>
            <P size="l">big</P>
            <P size="m">midle</P>
            <P size="s">small</P>
        </>
    );
}
