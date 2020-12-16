import React from 'react';

export const GiphGridItem = ({ img, title, id }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={img} alt={title} />
      <div className="container">
        <p><b>{title}</b></p>
      </div>
    </div>
  )
}
