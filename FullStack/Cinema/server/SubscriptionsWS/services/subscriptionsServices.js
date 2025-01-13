import * as subscriptionsDbRepo from "../repositories/subscriptionDbRepo.js";

export const addSubscription = (subscription) => {
    return subscriptionsDbRepo.addSubscription(subscription);
};