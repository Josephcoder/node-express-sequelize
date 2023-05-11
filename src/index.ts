import { createApp } from "./app";
import { PORT } from "./config";
import connection from "./config/config";

(async () => {
  connection
    .sync()
    .then(() => {
      console.log("Database successfully connected");
    })
    .catch((err) => {
      console.log("Error", err);
    });

  const app = createApp();

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
})();
