import styles from "./editSubscription.module.css";

import { useSelector } from "react-redux";
import { useRef } from "react";

import Input from "../../genericComp/input";
// TODO: DELETE THE SUBSCRIPTION ID AFTER UPDATE OR CANCLE FROM LOCALSTORAGE

const EditSubscription = () => {
	const subscriptionId = localStorage.getItem("subscriptionId");
	const members = useSelector((state) => state.members.members);
	
  const clickedSubscription = members.find((member) => member._id === subscriptionId);
  
  const nameRef = useRef(clickedSubscription.name);
  const emailRef = useRef(clickedSubscription.email);
  const cityRef = useRef(clickedSubscription.city);

	return (
		<>
			<h1 id={styles.header}>Edit Member: {clickedSubscription.name}</h1>
			<form id="form_container">
				<Input title="Name" type="text" className={styles.edit_subscription_input} value={nameRef.current} ref={nameRef} />
				<Input title="Email" type="text" className={styles.edit_subscription_input} value={emailRef.current} ref={emailRef} />
				<Input title="City" type="text" className={styles.edit_subscription_input} value={cityRef.current} ref={cityRef} />

			</form>
		</>
	);
};

export default EditSubscription;
