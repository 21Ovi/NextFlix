export const getCommonVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = `youtube.googleapis.com/youtube/v3`;

    const response = await fetch(
      `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
    );

    const data = await response.json();
    console.log(data);

    if (data?.error) {
      console.error("Youtube API Error", data.error);
      return [];
    }

    return data.items.map((item) => {
      const id = item?.id?.videoId || item.id;

      const snippit = item.snippet;
      return {
        title: snippit.title,
        imgUrl: snippit.thumbnails.high.url,
        id,
        description: snippit.description,
        publishedAt: snippit.publishedAt,
        channelTitle: snippit.channelTitle,
        channelTitle: snippit.channelTitle,
        statistics: item.statistics ? item.statistics : { viewCount: 0 },
      };
    });
  } catch (err) {
    console.error("Something went wrong with video library", error);
    return [];
  }
};

export const getVideos = (searchQueary) => {
  const URL = `search?part=snippet&type=video&q=${searchQueary}`;

  return getCommonVideos(URL);
};

export const getPopularVideos = () => {
  const URL =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US";
  return getCommonVideos(URL);

  // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc
};

export const getYoutubeVideoById = (videoId) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;
  return getCommonVideos(URL);
};
