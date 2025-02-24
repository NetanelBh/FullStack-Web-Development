import membersModel from "../models/membersModel.js";

export const addMember = (member) => {
  const newMember = membersModel(member);

  return newMember.save();
};

export const getMembers = () => {
  return membersModel.find();
};
