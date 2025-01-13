import getWebMembars from "../repositories/membersWebRepo.js";
import * as membersDbRepo from "../repositories/membersDbRepo.js";

export const getMembersFromWeb = (url) => { 
    return getWebMembars(url);
};

export const addMember = (member) => { 
    return membersDbRepo.addMember(member);
};