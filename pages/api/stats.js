import jwt from "jsonwebtoken";

import {
  findVideoIdByUser,
  insertStats,
  updateStats,
} from "../../lib/db/hasura";

export default async function stats(req, resp) {
  if (req.method === "POST") {
    try {
      const token = req.cookies.token;
      if (!token) {
        resp.status(403).send({});
      } else {
        const { videoId, favourited, watched = true } = req.body;
        if (videoId) {
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
          const userId = decodedToken.issuer;
          const findVideo = await findVideoIdByUser(token, userId, videoId);
          const doesStatsExist = findVideo?.length > 0;
          if (doesStatsExist) {
            const response = await updateStats(token, {
              watched,
              userId,
              videoId,
              favourited,
            });
            resp.send({ data: response });
          } else {
            const response = await insertStats(token, {
              watched,
              userId,
              videoId,
              favourited,
            });
            resp.send({ data: response });
          }
        }
      }
    } catch (error) {
      console.error("Error occoured /stats", error);
      resp.status(500).send({ done: false, error: error?.message });
    }
  } else {
    try {
      const token = req.cookies.token;
      if (!token) {
        resp.status(403).send({});
      } else {
        const { videoId, favourited, watched = true } = req.body;
        if (videoId) {
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
          const userId = decodedToken.issuer;
          const findVideo = await findVideoIdByUser(token, userId, videoId);
          const doesStatsExist = findVideo?.length > 0;
          if (doesStatsExist) {
            resp.send(findVideo);
          } else {
            resp.status(404);
            resp.send({ user: null, msg: "Video not found" });
          }
        }
      }
    } catch (error) {
      console.error("Error occoured /stats", error);
      resp.status(500).send({ done: false, error: error?.message });
    }
  }
}
