import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/search",
  params: {
    part: "snippet,id",
    regionCode: "US",
    maxResults: "100",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": "cecfc33adbmsh48737162716761fp19a8eejsnd9a7bbabf029",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const getYoutubeAPIData = (searchQuery = "javascript") => {
  const apiOptions = {
    ...options,
    params: {
      ...options.params,
      q: searchQuery,
    },
  };

  return axios.request(apiOptions);
};
