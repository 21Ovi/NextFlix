import jwt from "jsonwebtoken";

import { findVideoIdByUser, updateStats } from "../../lib/db/hasura";

export default async function stats(req, resp) {
  if (req.method === "POST") {
    try {
      const token = req.cookies.token;
      if (!token) {
        resp.status(403).send({});
      } else {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.issuer;
        const videoId = req.query.videoId;
        const doesStatsExist = await findVideoIdByUser(token, userId, videoId);

        if (doesStatsExist) {
          const response = await updateStats(token, {
            userId,
            watched: false,
            videoId: "4zH5iYM4wJo",
            favourited: 0,
          });
          resp.send({ msg: "It works!", response });
        } else {
          resp.send({ msg: "It works!", decodedToken, doesStatsExist });
        }
      }
    } catch (error) {
      console.error("Error occoured /stats", error);
      resp.status(500).send({ done: false, error: error?.message });
    }
  }
}
