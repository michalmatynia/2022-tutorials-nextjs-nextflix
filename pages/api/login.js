export default async function login(req, res) {
  if (req.method === "POST") {
    try {
      const auth = req.headers;
      const token = auth ? auth.substr(7) : "";
      res.send({ done: true });
    } catch (err) {
      console.error("Something went wrong");
      res.status(500).send({ done: false });
    }
  } else {
    res.send({ done: false });
  }
}
