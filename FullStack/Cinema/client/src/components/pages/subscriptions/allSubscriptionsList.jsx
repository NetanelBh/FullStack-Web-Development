import styles from "./allSubscriptionsList.module.css";

import Card from "../../UI/card/card";
import SubscriptionsListItem from "./subscriptionsListItem";

import { useSelector } from "react-redux";

const AllSubscriptionsList = ({ subscriptions }) => {
	const allMembers = useSelector((state) => state.members.members);

	return (
		<ul className={styles.all_subscriptions_list_ul}>
			{subscriptions.map((subscription) => {
				const member = allMembers.find((member) => member._id === subscription.memberId);
				const subscriptionData = {...member, movies: subscription.movies};
				console.log(subscriptionData);
				
				
				return (
					<Card key={subscription._id} className="general_card">
						<SubscriptionsListItem subscription={subscription} />
					</Card>
				);
			})}
		</ul>
	);
};

export default AllSubscriptionsList;
