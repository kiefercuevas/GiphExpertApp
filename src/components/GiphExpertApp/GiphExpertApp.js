import React, { useState } from 'react';
import { AddComponent } from './AddComponent';
import { GiphGrid } from './GiphGrid';

const GiphExpertApp = () => {

  const [categories, setCategories] = useState(['Goku'])

  return (
    <>
      <h2>GiphExpertApp</h2>
      <AddComponent setCategories={setCategories} />
      <hr />
      <div>
        {categories.map(category => <GiphGrid key={category} category={category} />)}
      </div>
    </>
  );

}

export default GiphExpertApp;