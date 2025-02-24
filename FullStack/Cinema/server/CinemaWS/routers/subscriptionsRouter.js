import express from "express";
import axios from "axios";

const router = express.Router();

// Entry point: http://localhost:3000/subscriptions

router.get("/movies", async (req, res) => {
	const url = "http://localhost:3001/movies/get";

	const resp = await axios.get(url);
	res.send(resp.data);
});

router.get("/members", async (req, res) => {
	const url = "http://localhost:3001/members/get";

	const resp = await axios.get(url);
	res.send(resp.data);
});

router.get("/subscriptions", async (req, res) => {
	const url = "http://localhost:3001/subscriptions/get";

	const resp = await axios.get(url);
	res.send(resp.data);
});

export default router;
