// https://courses-top.ru/api/top-page/find
export const API = {
    topPage: {
        find: process.env.NEXT_PUBLIC_DAMAIN + '/api/top-page/find',
        byAlias: process.env.NEXT_PUBLIC_DAMAIN + '/api/top-page/byAlias/',
    },
    product: {
        find: process.env.NEXT_PUBLIC_DAMAIN + '/api/product/find',
    },
    review: {
        createDemo: process.env.NEXT_PUBLIC_DAMAIN + '/api/review/create-demo',
    },
};
