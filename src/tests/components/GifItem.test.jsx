import {render, screen} from '@testing-library/react'
import { GifItem } from '../../components';
describe('Tests for <GifItem />', () => { 
    const title = 'One Punch';
    const url = 'http://one-punch.com/saitama.jpg';
    const shareLink = 'http://one-punch.giphy.com/saitama.jpg';
    test('should return a snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url} shareLink={shareLink}/>);
        expect(container).toMatchSnapshot();
     });

     test('should display the image with the url as src and title as alt', () => { 
        render(<GifItem title={title} url={url} shareLink={shareLink}/>);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        // Esta manera es mas limpia y mas elegante que la de arriba:
        const {src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should display the title of the gif inside an H3', () => { 
        render(<GifItem title={title} url={url} shareLink={shareLink} />);
        expect(screen.getByRole('heading',{level: 3}).innerHTML).toBe(title);
     });
 })