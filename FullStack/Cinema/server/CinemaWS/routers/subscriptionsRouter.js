import express from "express";
import axios from "axios";

const router = express.Router();

// Entry point: http://localhost:3000/subscriptions

router.get("/movies", async (req, res) => {
	const url = "http://localhost:3001/movies/get";

	const resp = await axios.get(url);
	res.send(resp.data);
});

router.post("/movie/add", async (req, res) => {
	const url = "http://localhost:3001/movies/add";
	const movie = req.body;
	
	try {
		const resp = await axios.post(url, movie);
		
		res.send({ status: true, data: resp.data });
	} catch (error) {
		res.send({ status: false, data: error.message });
	}
});

router.put("/movie/update", async (req, res) => {
	const url = "http://localhost:3001/movies/update";
    const movie = req.body;
	
    try {
        const resp = await axios.put(url, movie);
        
        res.send({ status: true, data: resp.data });
    } catch (error) {
        res.send({ status: false, data: error.message });
    }
});

router.delete("/movie/delete/:id", async (req, res) => {
	const id = req.params.id;
	const url = `http://localhost:3001/movies/delete/${id}`;
	try {
		const resp = await axios.delete(url);
		if (resp.status) {
			res.send({ status: true, data: "Movie deleted successfully" });
		} else {
			res.send({ status: false, data: "Failed to delete movie" });
		}
	} catch (error) {
		res.send({ status: false, data: error.message });
	}
	
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
