import { Schema, model} from 'mongoose';

const schema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
});

const User = new model('User', schema);

export default User;