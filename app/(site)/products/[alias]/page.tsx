import { getPage } from '@/api/page';
import { Metadata } from 'next';
// import { notFound } from 'next/navigation';
import React from 'react';
export const metadate: Metadata = {
    title: 'Продукты',
};
const PageProducts = async ({ params }: { params: { alias: string } }) => {
    const page = await getPage(params.alias);
    if (!page) {
        // notFound();
        return <h1>ПРодукты</h1>;
    }

    return (
        <div>
            Продукты
            <div>{page.title}</div>
        </div>
    );
};

export default PageProducts;
