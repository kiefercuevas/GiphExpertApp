import { useState, useEffect } from 'react';
import { getGiphs } from '../Providers/GiphProvider';

export const useFechGiphs = (category) => {

  const [giphs, setGiphs] = useState({
    data: [],
    isLoading: true
  });

  useEffect(() => {

    getGiphs(category).then(imgs => {
      setGiphs({
        data: imgs,
        isLoading: false
      })
    });

  }, [category]);

  return giphs;
}
