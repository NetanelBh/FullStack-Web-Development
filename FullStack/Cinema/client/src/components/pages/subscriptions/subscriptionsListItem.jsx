import styles from "./subscriptionsListItem.module.css";

import { useSelector } from "react-redux";

import Card from "../../UI/card/card";
import Button from "../../UI/button/button";
import { isShowPermission } from "../../utils/moviesPermissions";

const SubscriptionsListItem = ({ subscription }) => {
    console.log(subscription);
    
	const allEmployees = useSelector((state) => state.employees.employees);

    const employeeId = localStorage.getItem("id");
    const editPermission = "Update Subscription";
	const deletePermission = "Delete Subscriptions";

    const editSubscriptionHandler = () => {};

    const deleteSubscriptionHandler = () => {};

    // Determine whether the employee has the permissin to edit or remove movies
        const isEditPermission = isShowPermission(allEmployees, employeeId, editPermission);
        const isDeletePermission = isShowPermission(allEmployees, employeeId, deletePermission);

	return (
		<li className={styles.all_subs_list_item}>
			<p className={styles.all_subs_list_item_name}>{subscription.name}</p>
			<p className={styles.all_subs_list_item_details}>{subscription.email}</p>
			<p className={styles.all_subs_list_item_details}>{subscription.city}</p>

			<div className={styles.all_subs_list_item_actions}>
				<Button
					className={isEditPermission ? styles.all_subs_list_item_actions_edit : styles.no_permission}
					text="Edit"
					type="button"
					onClick={editSubscriptionHandler}
				/>
				<Button
					className={isDeletePermission ? styles.all_subs_list_item_actions_delete : styles.no_permission}
					text="Delete"
					type="button"
					onClick={deleteSubscriptionHandler}
				/>
			</div>

            <Card className={`generic_card ${styles.all_subs_list_item_movies_card}`}>
                <p className={styles.all_subs_list_item_movies_header}>Movies Watched</p>
            </Card>
		</li>
	);
};

export default SubscriptionsListItem;
