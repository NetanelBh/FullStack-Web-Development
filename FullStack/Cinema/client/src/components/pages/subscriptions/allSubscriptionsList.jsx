import styles from "./allSubscriptionsList.module.css";

import Card from "../../UI/card/card";
import SubscriptionsListItem from "./subscriptionsListItem";

const AllSubscriptionsList = ({ subscriptions }) => {
	return (
		<ul>
			{subscriptions.map((subscription) => {
                console.log(subscription);
                
				<Card key={subscription._id} className="general_card">
					<SubscriptionsListItem subscription={subscription} />
				</Card>;
			})}
		</ul>
	);
};

export default AllSubscriptionsList;
