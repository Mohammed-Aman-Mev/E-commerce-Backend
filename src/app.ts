import express from "express";

import userRoute from "./Routes/usernew.js";

const app = express();
const port = 8000;

app.use("/api/v1/user", userRoute);

app.listen(port, () => {
  console.log(`server express is working on port:${port}`);
});
