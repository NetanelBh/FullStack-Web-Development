import membersModel from "../models/membersModel.js";

export const addMember = (member) => {
  const newMember = membersModel(member);

  return newMember.save();
};
