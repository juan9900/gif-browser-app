import {useState} from 'react';
import { AddCategory } from './components';
import { GifGrid } from './components';

export const GifBrowserApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories(prev => [newCategory, ...prev]);
    }
    return (
        <>
            {/* titulo */}
            <h1 className='app-title'>Gif Browser App</h1>

            {/* input */}
            {/* <button onClick={onAddCategory}>Add category</button> */}
            <AddCategory 
            // onAddCategory={setCategories}
                onNewCategory={ (value) => onAddCategory(value)}
            />

            {/* listado de gifs */}
            {categories.length < 1 ? <h2>Enter the term you want to search!</h2> : 
                <ul>
                    {categories.map((category,index) => (
                        <GifGrid key={category} category={category}/>
                    ))
                    }
                </ul>
            }
            {/* gif item */}
        </>
    )
}
