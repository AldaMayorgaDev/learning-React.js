import { useState } from 'react';
import {PropTypes} from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //console.log("event", event);
    //console.log("inputValue", inputValue);

    if(inputValue.trim().length <=1) return;
    


    //setCategoriesProp(categories=>[inputValue, ...categories]);
    setInputValue('');
    onNewCategory(inputValue.trim())

   
  };
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        placeholder="Buscar Gifs 🔍"
        type="text"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};


AddCategory.propTypes ={
  onNewCategory: PropTypes.func.isRequired,
};