import express from "express";
import axios from "axios";

const router = express.Router();

// Entry point: http://localhost:3000/subscriptions

router.get("/movies", async (req, res) => {
	try {
		const url = "http://localhost:3001/movies/get";
		const resp = await axios.get(url);
		if (resp.status) {
			res.send({ status: true, data: resp.data });
		} else {
			res.send({ status: false, data: "No movies found" });
		}
	} catch (error) {
		res.send({ status: false, data: error.message });
	}
});

export default router;
