import { getMenu } from '@/api/menu';

export async function Menu() {
    const menu = await getMenu(0);

    return (
        <main>
            <div>{JSON.stringify(menu)}</div>
            {/* <div>{menu[0]._id.secondCategory}</div> */}
        </main>
    );
}
