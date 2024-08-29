import app from "./app";

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received.");
  console.log("Closing server.");
  server.close((err) => {
    console.log("Server closed.");
    // eslint-disable-next-line no-process-exit
    process.exit(err ? 1 : 0);
  });
});
