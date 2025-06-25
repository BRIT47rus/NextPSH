import { API } from '@/app/(site)/api';
import { MenuItem } from '@/interfaces/menu.interface';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
    const res = await fetch(API.topPage.find, {
        method: 'POST',
        body: JSON.stringify({
            firstCategory,
        }),
        headers: new Headers({ 'content-type': 'application/json' }),
    });

    if (!res.ok) {
        console.error(
            `Failed to fetch menu for category ${firstCategory}: ${res.status} ${res.statusText}`
        );
        return []; // Возвращаем пустой массив в случае ошибки
    }
    return res.json();
}
