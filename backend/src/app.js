import express from "express";
import cors from "cors";

const app = express();


//middlewares
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));


//routes
app.get("/", (req, res) => {
  res.send("Roommate Manager API Running...");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy"
  });
});

export default app;