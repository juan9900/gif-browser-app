import { render, screen, fireEvent } from "@testing-library/react"
import { GifBrowserApp } from "../GifBrowserApp"

describe('tests for gifBrowserApp', () => { 
    const categories = ['saitama'];
    test('should return a header title', () => { 
        render(<GifBrowserApp/>);
        expect(screen.getAllByRole('heading',{level:1})).toBeTruthy();
     });

     test('should add a category', () => {
        render(<GifBrowserApp/>);

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        // type inside the input
        fireEvent.change(input, {target:{value:'world cup'}});

        // submit the form
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading',{level: 2}).length).toBeGreaterThan(1);

     })

     test(`shouldn't add a category`, () => {
        render(<GifBrowserApp/>);

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        // type inside the input
        fireEvent.change(input, {target:{value:'vertical'}});

        // submit the form
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading',{level: 2}).length).toBe(1);

     })

 })