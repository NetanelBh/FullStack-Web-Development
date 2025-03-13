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
		const resp = (await axios.post(url, movie)).data;
		if (resp.status) {
			res.send({ status: resp.status, data: resp });
		} else {
			res.send({ status: resp.status, data: "Can't add a movie"});
		}
	} catch (error) {
		res.send({ status: false, data: error.message });
	}
});

router.put("/movie/update", async (req, res) => {
	const url = "http://localhost:3001/movies/update";
    const movie = req.body;
	
    try {
        const resp = (await axios.put(url, movie)).data;
        if (resp.status) {
			res.send({ status: resp.status, data: resp });
		} else {
			res.send({ status: resp.status, data: "Can't update a movie" });
		}
    } catch (error) {
        res.send({ status: false, data: error.message });
    }
});

router.delete("/movie/delete/:id", async (req, res) => {
	const id = req.params.id;
	const url = `http://localhost:3001/movies/delete/${id}`;
	try {
		const resp = (await axios.delete(url)).data;
		if (resp.status) {
			res.send({ status: resp.status, data: "Movie deleted successfully" });
		} else {
			res.send({ status: resp.status, data: "Failed to delete movie" });
		}
	} catch (error) {
		res.send({ status: false, data: error.message });
	}
	
});

router.get("/members", async (req, res) => {
	const url = "http://localhost:3001/members/get";

	try {
		const resp = (await axios.get(url)).data;	
		if (resp.status) {
			res.send({status: resp.status, data: resp})
		} else {
			res.send({status: resp.status, data: "Can't fetch members data."});
		}
	} catch (error) {
		res.send({status: false, data: error.message});
	}
	
});

router.put("/member/update", async (req, res) => {
	const url = "http://localhost:3001/members/update";
	const member = req.body;
	
	try {
		const resp = (await axios.put(url, member)).data;
		if (resp.status) {
			res.send(resp);
		} else {
			res.send({status: resp.status, data: "Can't update member"});
		}
	} catch (error) {
		res.send({status: false, data: error.message});
	}
});

router.get("/subscriptions", async (req, res) => {
	const url = "http://localhost:3001/subscriptions/get";

	try {
		const resp = (await axios.get(url)).data;
		if (resp.status) {
			res.send({status: resp.status, data: resp});
		} else {
			res.send({status: resp.status, data: "No subscriptions found"});
		}
	} catch (error) {
		res.send()
	}
});

router.post('/subscription/update/:id', async (req, res) => {
	const url = "http://localhost:3001/subscriptions/update";
});

export default router;
