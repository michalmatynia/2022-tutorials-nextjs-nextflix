export const getCommonVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

    const response = await fetch(`${BASE_URL}/${url}&key=${YOUTUBE_API_KEY}`);

    // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY] HTTP/1.1

    const data = await response.json();

    if (data?.error) {
      console.error("Youtube API Error", data.error);
      return [];
    }

    return data?.items.map((item) => {
      const id = item.id?.videoId || item.id;

      return {
        title: item?.snippet?.title,
        imgUrl: item?.snippet.thumbnails.high.url,
        id,
      };
    });
  } catch (err) {
    console.error("Something is wrong", err);
    return [];
  }
};

export const getVideos = async (searchQuery) => {
  const URL = `search?part=snippet&maxResults=9&regionCode=PL&q=${searchQuery}`;
  return await getCommonVideos(URL);
};

export const getPopularVideos = async (searchQuery) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=9&regionCode=PL&q=${searchQuery}&chart=mostPopular`;
  return await getCommonVideos(URL);
};
