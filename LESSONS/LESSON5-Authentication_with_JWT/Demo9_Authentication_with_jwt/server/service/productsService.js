import jwt from 'jsonwebtoken';

export const verifyToken = (token) => {
  const res = {success: false, content: "Falied to authenticate token"};
  jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (!err) {
      res.success = true
      res.content = [{name: "Car"}, {name: "Phone"}];
    }
  });

  return res;
};