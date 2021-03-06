const getDataApi = () => {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((item, index) => {
        return {
          movie: item.movie,
          poster: item.poster,
          quote: item.full_line,
          year: item.year,
          director: item.director,
          audio: item.audio,
          id: index,
        };
      });
      console.log(cleanData);
      return cleanData;
    });
};

export default getDataApi;
