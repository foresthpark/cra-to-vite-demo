import axios from "axios";
import { useQuery } from "react-query";

const fetchSearchGif = async (search) => {
  const fetchData = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
      q: search,
    },
  });

  return fetchData.data.data;
};

const useSearchGif = (search) => {
  return useQuery(["searchGif", search], () => fetchSearchGif(search), {
    enabled: !!search,
  });
};

export default useSearchGif;
