export default async function stats(req, resp) {
  if (req.method === "POST") {
    console.log({ cookies: req.cookies });
    try {
      if (!req.cookies.token) {
        resp.status(403).send({});
      } else {
        resp.send({ msg: "It works!" });
      }
    } catch (error) {
      console.error("Error occoured /stats", error);
      resp.status(500).send({ done: false, error: error?.message });
    }
  }
}
