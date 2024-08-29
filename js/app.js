// Variables globales

const btnSearch = document.getElementById('btnSearch')
const inputsearch = document.getElementById('searchartist')
let playlist = null

btnSearch.addEventListener('click', () => {
    const artist = inputsearch.value
    if(artist.trim().length > 0){
        searcArtist(artist)
    }
})

const searcArtist = async (name) => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${name}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '0b5b96f182msh5249495fbd653ddp1d8eb6jsn839d36067752',
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}

}