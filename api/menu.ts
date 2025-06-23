export async function getMenu(firstCategory: number) {
    const res = await fetch(API.topPage.find, {
        method: 'POST',
        body: JSON.stringify({
            firstCategory,
        }),
        headers: new Headers({ 'content-type': 'application/json' }),
    });
    return res.json();
}
