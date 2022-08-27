export const getCommonVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = `youtube.googleapis.com/youtube/v3`;

    const response = await fetch(
      `https://${BASE_URL}/${url}/&key=${YOUTUBE_API_KEY}`
    );

    // `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US`;

    const data = await response.json();
    console.log(data);

    if (data?.error) {
      console.error("Youtube API Error", data.error);
      return [];
    }

    return data.items.map((item) => {
      const id = item?.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
      };
    });
  } catch (err) {
    console.error("Something went wrong with video library", error);
    return [];
  }
};

export const getVideos = (searchQueary) => {
  const URL = `search?part=snippet&type=video&maxResults=25&q=${searchQueary}`;

  return getCommonVideos(URL);
};
