import React from 'react';
import { GiphGridItem } from './GiphGridItem';
import { useFechGiphs } from '../../hooks/useFechGiphs';


export const GiphGrid = ({ category }) => {

  const { isLoading, data: giphs } = useFechGiphs(category);

  return (
    <div style={{ height: "100%" }}>
      <h2>{category}</h2>
      <div className="flex-row">

        {isLoading && "Cargando..."}
        {giphs.map(giph => <GiphGridItem key={giph.id} {...giph} />)}

      </div>
      <hr />
    </div>
  );

}
