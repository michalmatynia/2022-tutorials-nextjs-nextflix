import jwt from "jsonwebtoken";
import { findVideoIdByUser } from "../../lib/db/hasura";

export default async function stats(req, res) {
  if (req.method === "POST") {
    try {
      const token = req.cookies.token;
      if (!token) {
        res.status(403).send({});
      } else {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const userId = "did:ethr:0x33f9B5f73dD008531069710b46a06d6193eb6472";
        const videoId = "_29dLT6OMTU";
        const findVideoId = await findVideoIdByUser(token, userId, videoId);

        res.send({ msg: "Workss" });
      }
    } catch (err) {
      res.status(500).send({ done: false, error: err?.message });
    }
  }
}
