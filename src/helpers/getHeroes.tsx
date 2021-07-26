export const getHeroes = async() => {
    const myHeaders = new Headers();
    myHeaders.append('origin', 'localhost:3000');
    myHeaders.append('x-requested-with', '*');
    const myInit = { method: 'GET',
        headers: myHeaders,
        mode: 'cors',
    cache: 'default'};
    const url = 'https://cors-anywhere.herokuapp.com/akabab.github.io/superhero-api/api/all.json'
    // @ts-ignore
    const myRequest = new Request(url, myInit);
    const resp = await fetch(myRequest)
    let {data} = await resp.json()
    console.log(data);

    if(data === undefined){
        data = [];
    }

    const heroes = data.map((heroe: any) => {
        return {
            id: heroe.id,
            name: heroe.name,
            fullname: heroe.biography.fullname,
            image: heroe.images.sm
        }
    })
    return heroes;
}
