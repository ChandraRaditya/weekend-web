import axios from "axios";

export const getTestimonialData = async () => {
  try {
    const res = await axios.get(
      "https://wknd-take-home-challenge-api.herokuapp.com/testimonial"
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getTipsData = async () => {
  try {
    const res = await axios.get(
      "https://wknd-take-home-challenge-api.herokuapp.com/help-tips"
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
