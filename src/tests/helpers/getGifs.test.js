import { getGifs } from "../../helpers/getGifs";

describe( 'Testing getGifs helper', () => {

    test(' should fetch 10 elements', async () => {
        const gifs = await getGifs('sailor moon');

        expect( gifs.length).toBe(10);
        
    });

    test(' should fetch 0 elements each time no argument is being declared', async () => {
        const gifs = await getGifs('');

        expect( gifs.length).toBe(0);
        
    });
});