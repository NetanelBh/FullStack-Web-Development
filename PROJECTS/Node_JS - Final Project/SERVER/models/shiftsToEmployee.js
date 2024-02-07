import {Schema, model} from 'mongoose';

const schema = new Schema({
  shiftId: {type: String, required: true},
  employeeId: [{type: String, required: true}],
});

const WorkSchedule = new model('workSchedule', schema, 'workSchedule');

export default WorkSchedule;