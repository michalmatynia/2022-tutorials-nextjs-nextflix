export const getCommonVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${YOUTUBE_API_KEY}
    `);

    console.log("dsdsd", response);

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
  const URL = `/search?part=snippet&maxResults=9&&q=${searchQuery}`;
  await getCommonVideos(URL);
};
