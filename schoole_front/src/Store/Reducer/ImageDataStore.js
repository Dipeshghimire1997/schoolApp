let images_info = [
  { type: "carousel", Address: "../../Assets/Images/c1.jpg" },
  { type: "carousel", Address: "../../Assets/Images/c2.jpg" },
  { type: "carousel", Address: "../../Assets/Images/c3.jpg" },
  { type: "carousel", Address: "../../Assets/Images/c4.jpg" },
  { type: "carousel", Address: "../../Assets/Images/c5.jpg" },
  { type: "carousel", Address: "../../Assets/Images/c6.jpg" },
];
let insState = {
  image: images_info,
};
let ImageDataStore = (state = insState, actions) => {
  switch (actions.type) {
    case "GET_IMAGES_Carousel":
      return state;
    default:
      return state;
  }
};
export default ImageDataStore;
