import express from 'express';

const app = express();

const port = process.env.PORT || 1111;

// connecting the server
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
