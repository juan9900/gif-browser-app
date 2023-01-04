import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Tests in hook useFetchGifs', () => { 

    test('should return initial state', () => { 
        const { result } = renderHook(()=> useFetchGifs('one punch'));

        const {gifList, isLoading} = result.current;

        expect(gifList.length).toBe(0);
        expect(isLoading).toBeTruthy();
        
     })

     test('should return an array of images and isLoading false', async () => { 
        const {result} = renderHook(()=> useFetchGifs('one punch'));
        await waitFor(
            () => expect(result.current.gifList.length).toBeGreaterThan(0)
        );

        const {gifList, isLoading} = result.current;
        expect(gifList.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

      })
 })