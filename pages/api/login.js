export default async function login(req, res) {
  if (req.method === "POST") {
    try {
      const auth = req.headers.authorization;
      const token = auth ? auth.substr(7) : "";
      console.log(token);
      res.send({ done: true });
      // invoke magic
    } catch (err) {
      console.error("Something went wrong logging in");
      res.status(500).send({ done: false });
    }
  } else {
    res.send({ done: false });
  }
}
