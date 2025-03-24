import subscriptionModel from "../models/subscriptionsModel.js";

export const addSubscription = (subscription) => {
  const newSubscription = subscriptionModel(subscription);

  return newSubscription.save();
};

export const getSubscriptions = () => {
  return subscriptionModel.find();
};

export const updateSubscriptions = (subscriptions) => {
   // Per each subscription create an update query to wait for all of them to finish when update the DB in the repo
	const updatedSubscriptions = subscriptions.map((sub) =>
		subscriptionModel.findOneAndUpdate({ memberId: sub.memberId }, { movies: sub.movies }, {new: true})
	);

  const res = Promise.all(updatedSubscriptions);
  return res;
};
