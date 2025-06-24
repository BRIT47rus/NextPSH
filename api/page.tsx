import { API } from '@/app/(site)/api';

export async function getPage(alias: string) {
    const res = await fetch(API.topPage.byAlias + alias);
    if (!res.ok) {
        return null;
    }
    return res.json();
}
