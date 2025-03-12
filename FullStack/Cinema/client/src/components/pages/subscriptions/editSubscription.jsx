import styles from "./editSubscription.module.css";

import { useSelector } from "react-redux";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../genericComp/input";
import Button from "../../UI/button/button";

const EditSubscription = () => {
	const subscriptionId = localStorage.getItem("subscriptionId");
	const members = useSelector((state) => state.members.members);
  const navigate = useNavigate();

	const clickedSubscription = members.find((member) => member._id === subscriptionId);

	const nameRef = useRef(clickedSubscription.name);
	const emailRef = useRef(clickedSubscription.email);
	const cityRef = useRef(clickedSubscription.city);

  const updateHandler = () => {
    // TODO: CREATE EDITED MEMBER AND UPDATE HIS DATA IN DB AND REDUX

    // Remove the subscriptionId from the local storage because we redirect to other page after the save
    localStorage.removeItem("subscriptionId");
  };

  const cancelHandler = () => {
    localStorage.removeItem("subscriptionId");
    navigate("/layout/WebContentLayout/subscriptions/all");
  };

	return (
		<>
			<h1 id={styles.header}>Edit Member: {clickedSubscription.name}</h1>
			<form id="form_container">
				<Input
					title="Name"
					type="text"
					className={styles.edit_subscription_input}
					value={nameRef.current}
					ref={nameRef}
				/>
				<Input
					title="Email"
					type="text"
					className={styles.edit_subscription_input}
					value={emailRef.current}
					ref={emailRef}
				/>
				<Input
					title="City"
					type="text"
					className={styles.edit_subscription_input}
					value={cityRef.current}
					ref={cityRef}
				/>

				<div id="action_buttons">
					<Button className={styles.edit_subscription_button} text="Update" type="text" onClick={updateHandler} />
					<Button className={styles.edit_subscription_button} text="Cancel" type="text" onClick={cancelHandler} />
				</div>
			</form>
		</>
	);
};

export default EditSubscription;
