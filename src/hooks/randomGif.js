import axios from "axios";
import { useQuery } from "react-query";

const fetchRandomGif = async () => {
  const fetchData = await axios.get("https://api.giphy.com/v1/gifs/random", {
    params: {
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
    },
  });

  return fetchData.data.data;
};

const useRandomGif = () => {
  return useQuery("randomGif", fetchRandomGif);
};

export default useRandomGif;
