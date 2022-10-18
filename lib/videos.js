import videoData from "../data/videos.json";

export const getVideos = async () => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=disney&key=[YOUR_API_KEY] HTTP/1.1

  const response =
    await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&&q=disney&key=${YOUTUBE_API_KEY}
  `);

  console.log(response);
  const data = await response.json();

  return data?.items.map((item) => {
    return {
      title: item?.snippet?.title,
      imgUrl: item?.snippet.thumbnails.high.url,
      id: item?.id?.videoId,
    };
  });
};
