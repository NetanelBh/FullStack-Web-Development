import subscriptionModel from "../models/subscriptionsModel.js";

export const addSubscription = (subscription) => {
  const newSubscription = subscriptionModel(subscription);

  return newSubscription.save();
};

export const getSubscriptions = () => {
  return subscriptionModel.find();
};
