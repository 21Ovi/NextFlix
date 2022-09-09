export default async function login(req, res) {
  if (req.method === "POST") {
    try {
      res.send({ done: true });
    } catch (err) {
      console.error("Something went wrong logging in");
      res.status(500).send({ done: false });
    }
  } else {
    res.send({ done: false });
  }
}
