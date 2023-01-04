import { getGifs } from "../../helpers/getGifs"

describe('Tests for getGifs.js', () => { 
    const category = 'One Punch';
    test('should return a gifs array', async () => { 
        const gifs = await getGifs(category);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String), //Va a esperar cualquier tipo de string
            title: expect.any(String),
            url: expect.any(String),
            shareLink: expect.any(String)
        })

    })
})