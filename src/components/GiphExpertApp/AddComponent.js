import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddComponent = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState("");

  const changeText = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      setCategories(prevCategories => prevCategories.includes(inputValue) ? prevCategories : [inputValue, ...prevCategories]);
      setInputValue("");
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={changeText}
      />
    </form>
  )
}


AddComponent.propTypes = {
  setCategories: PropTypes.func.isRequired
}

