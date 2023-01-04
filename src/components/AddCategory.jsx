import {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const searchTerm = (inputValue.charAt(0).toUpperCase() + inputValue.substring(1).toLowerCase()).trim();
        if(searchTerm.length <= 1) return;
        onNewCategory(searchTerm);
        setInputValue('');

    }
    return (
        <>
            <form aria-label='form' onSubmit={onSubmitForm}>
                <input type="text" 
                    placeholder='Search for Gifs'
                    onChange={onInputChange}
                    value={inputValue}/>
            </form>
        </>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}