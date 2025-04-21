import jwt from "jsonwebtoken";

const authenticationCheck = (req, res, next) => {    
	try {
		if (req.headers.authorization) {            
			const token = req.headers.authorization.split(" ")[1];
            console.log("token= " + token);
            
            // Verify the token with the same hash key used to create it
            const decode = jwt.verify(token, process.env.HASH_KEY);
            console.log("decode= " + decode._id);
            
            // If the token is valid, call the next middleware
            next();
		} else {
			res.send({ status: false, data: "No token provided" });
		}
	} catch (error) {
        console.log("token expired");
        
		res.send({ status: false, data: "Invalid token" });
	}
};

export default authenticationCheck;
