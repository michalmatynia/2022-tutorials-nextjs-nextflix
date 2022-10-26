import videoTestData from "../data/videos.json";

const fetchVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

  const response = await fetch(`${BASE_URL}/${url}&key=${YOUTUBE_API_KEY}`);

  return await response.json();
};

export const getCommonVideos = async (url) => {
  try {
    const isDev = process.env.DEVELOPMENT;
    const data = isDev ? videoTestData : await fetchVideos(url);

    if (data?.error) {
      console.error("Youtube API Error", data.error);
      return [];
    }

    return data?.items.map((item) => {
      const id = item.id?.videoId || item.id;

      const snippet = item.snippet;

      return {
        title: snippet?.title,
        imgUrl: snippet.thumbnails.high.url,
        id,
        description: snippet.description,
        publishTime: snippet.publishedAt,
        channelTitle: snippet.channelTitle,
        statistics: item.statistics ? item.statistics : { viewCount: 0 },
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

export const getYoutubeVideoById = async (videoId) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;
  return await getCommonVideos(URL);
};
