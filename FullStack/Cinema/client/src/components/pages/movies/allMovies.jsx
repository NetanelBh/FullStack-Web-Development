import styles from "./allMovies.module.css";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AllMoviesList from "./allMoviesList";
import PacmanLoading from "../../UI/loading/pacmanLoading";
import { moviesActions } from "../../store/slices/moviesSlice";
import { membersActions } from "../../store/slices/membersSlice";
import { employeesActions } from "../../store/slices/employeesSlice";
import { subscriptionsActions } from "../../store/slices/subscriptionsSlice";

import { isShowPermission } from "../../utils/moviesPermissions";

const DB_EMPLOYEES_URL = "http://localhost:3000/employees/db";
const PERMISSIONS_FILE_URL = "http://localhost:3000/permissions";
const EMP_DATA_FILE_URL = "http://localhost:3000/employees/file";
const MOVIES_URL = "http://localhost:3000/subscriptions/movies";
const MEMBERS_URL = "http://localhost:3000/subscriptions/members";
const SUBSCRIPTIONS_URL = "http://localhost:3000/subscriptions/subscriptions";

const AllMovies = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [searchCharacters, setSearchCharacters] = useState("");
	const dispatch = useDispatch();

	const movies = useSelector((state) => state.movies.movies);
	const members = useSelector((state) => state.members.members);
	const allEmployees = useSelector((state) => state.employees.employees);
	const subscriptions = useSelector((state) => state.subscriptions.subscriptions);

	// Remove the last saved movieId from the edit ID page(after navigate back to this page).
	localStorage.removeItem("movieId");
	// Remove the last saved subscriptionId(if we come back to this page from the edit subscriptions when click on back)
	localStorage.removeItem("subscriptionId");

	const createEmployeesList = useCallback((employees, permissions, employeeData) => {
		const employeesList = employees.data.map((emp) => {
			const empObj = {
				username: emp.username,
				id: emp._id,
			};

			// Get the permissions of the employee from the permissions file
			permissions.data.permissions.forEach((empPerm) => {
				if (empPerm.id === emp._id) {
					empObj["permissions"] = [...empPerm.permissions];
				}
			});

			// Get the employee data from the employees jsom file
			employeeData.data.employees.forEach((empData) => {
				if (empData.id === emp._id) {
					empObj["name"] = empData.firstName + " " + empData.lastName;
					empObj["createdDate"] = empData.createdDate;
					empObj["sessionTimeOut"] = empData.sessionTimeOut;
				}
			});

			return empObj;
		});

		dispatch(employeesActions.load({ employees: employeesList, readFromDb: false }));
	}, []);

	useEffect(() => {
		// When navigate back from other page, remove the characters from the search bar(when delete it will no find it)
		setSearchCharacters("");
	}, [movies.length]);

	useEffect(() => {
		if (allEmployees.length === 0 || allEmployees.readFromDb) {
			const fetchEmployeesData = async () => {
				try {
					setIsLoading(true);
					const empResp = axios.get(DB_EMPLOYEES_URL);
					const permResp = axios.get(PERMISSIONS_FILE_URL);
					const employeeDataResp = axios.get(EMP_DATA_FILE_URL);

					// Waiting for all requests to get their responses
					const [employees, permissions, employeeData] = await Promise.all([
						empResp,
						permResp,
						employeeDataResp,
					]);

					// Create the employees list to store in redux only if all the requested url returned with corrrect data
					if (employees.status && permissions.status && employeeData.status) {
						createEmployeesList(employees.data, permissions.data, employeeData.data);
					}
				} catch (error) {
					console.log(error.message);
				}
				setIsLoading(false);
			};

			fetchEmployeesData();
		}
	}, [createEmployeesList, allEmployees.readFromDb]);

	// Fetch the data about the subscriptions
	const fetchSubscriptionsData = useCallback(async () => {
		try {
			setIsLoading(true);
			const moviesResp = (await axios.get(MOVIES_URL)).data;

			if (moviesResp.status) {
				dispatch(moviesActions.load(moviesResp.data));
			}
			const membersResp = (await axios.get(MEMBERS_URL)).data;

			if (membersResp.status) {
				dispatch(membersActions.load(membersResp.data));
			}
			const subscriptionsResp = (await axios.get(SUBSCRIPTIONS_URL)).data;

			if (subscriptionsResp.status) {
				dispatch(subscriptionsActions.load(subscriptionsResp.data));
			}

			setIsLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	// Fetch the data only once
	useEffect(() => {
		// Should use condition because when using navigate, react will run the effect again regardless the dependencies
		if (movies.length === 0 && members.length === 0 && subscriptions.length === 0) {
			fetchSubscriptionsData();
		}
	}, [fetchSubscriptionsData]);

	const findMovieHandler = (event) => {
		setSearchCharacters(event.target.value);
	};

	// Filter the movies list according to the user search
	let filteredMovies = [...movies];
	if (searchCharacters !== "") {
		filteredMovies = movies.filter((movie) => {
			return movie.name.toLocaleLowerCase().startsWith(searchCharacters.toLocaleLowerCase());
		});
	}

	// Get the id of the loged in user from the local storage
	const employeeId = sessionStorage.getItem("id");
	const viewPermission = "View Movies";
	// Check if there is permission to user to see the movies list with the registered subscriptions
	const showMoviePermission = isShowPermission(allEmployees, employeeId, viewPermission);

	return (
		<>
			{showMoviePermission && !isLoading && (
				<div className={styles.all_movies_search}>
					<label htmlFor="search">Find Movie:</label>
					<input id="search" type="text" onChange={findMovieHandler} value={searchCharacters} />
				</div>
			)}

			{showMoviePermission && (
				<div id="list_container">
					{isLoading && <PacmanLoading color="#87a2ff" />}
					{!isLoading && <AllMoviesList movies={filteredMovies} />}
					{!isLoading && filteredMovies.length === 0 && (
						<p className={styles.all_movies_no_movies}>No movies to Show</p>
					)}
				</div>
			)}

			{!showMoviePermission && (
				<div id="list_container">
					<p className={styles.all_movies_no_movies}>No permission to show the movies</p>
				</div>
			)}
		</>
	);
};

export default AllMovies;
