import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Tests in <GifGrid />', () => { 
    const category = 'One Punch';
    const gifs = [
        {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: '123',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
        }
    ]


    test('should display loading initially', () => { 
        //Hay que decirle al test suite como va a funcionar el hook
        //Este objeto es lo que vamos a simular que esta retornando el hook
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...')).toBeTruthy();
     })

     test('should display items when images are loaded from useFetchGifs', () => { 
        
        useFetchGifs.mockReturnValue({
            gifList:gifs,
            isLoading: false
        });
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBeGreaterThan(0);

      })
 })