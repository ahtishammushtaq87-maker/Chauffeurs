import "dotenv/config";
import "./db/seed.js";
import app from "./app.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Swift Chauffeurs API listening on http://localhost:${PORT}`);
});
