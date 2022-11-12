const API_KEY = 'LsoNqri62zRep4edNaJ0XCk1SjRxAJdl';

export const getGifs = async (category) => {
    try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=15`);
        const {data} = await response.json();
        // console.log(data);
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.fixed_height.url
        }));
        console.log(gifs);
        return gifs;
        // setGifList(prev => data.images.preview_gif.url, ...prev);
    }catch(e){
        console.log(e);
        return 'Error retrieving gifs';
    }
    
}

