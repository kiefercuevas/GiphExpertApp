
export const getGiphs = async (category, limit = 10, key = "u5wlRHaam3byXJYl1xZOMQiFhF9BsaHo") => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${key}`;
  const res = await fetch(url);
  const { data } = await res.json();

  const giphs = data.map(img => ({
    id: img.id,
    img: img.images.original.url,
    title: img.title
  }));

  return giphs;
}