export let HomePageAction = () => {
  return (dispatch) => {
    dispatch({ type: "GET_IMAGES_Carousel" });
  };
};
