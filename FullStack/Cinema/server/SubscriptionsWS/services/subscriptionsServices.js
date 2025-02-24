import * as subscriptionsDbRepo from "../repositories/subscriptionDbRepo.js";

export const addSubscription = (subscription) => {
    return subscriptionsDbRepo.addSubscription(subscription);
};

export const getSubscriptions = () => {
    return subscriptionsDbRepo.getSubscriptions();
};