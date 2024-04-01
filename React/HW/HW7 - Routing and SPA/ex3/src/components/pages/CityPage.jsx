import styles from "./CityPage.module.css";

import Button from "../UI/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const CityPage = () => {
  const data = useLocation();
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("");

  const selectCityHandler = (event) => {
    if(event.target.value === 'Choose City') {
      setSelectedCity("");
      return;
    }
    setSelectedCity(event.target.value);
  };

  const nextClickHandler = () => {
    const UpdatedData = {...data.state, city: selectedCity};
    navigate('/details', {state: UpdatedData});
  };

  return (
    <div className={styles.container}>
      <select className={styles.select} onChange={selectCityHandler}>
        <option value='city'>Choose City</option>
        <option value='Holon'>Holon</option>
        <option value='Haifa'>Haifa</option>
        <option value='Tel-Aviv'>Tel-Aviv</option>
        <option value='Ramla'>Ramla</option>
        <option value='Ashdod'>Ashdod</option>
        <option value='Ramat-Gan'>Ramat-Gan</option>
      </select>

      <Button
        type="button"
        title="Next"
        className={styles.btn}
        onClick={nextClickHandler}
      />
    </div>
  );
};

export default CityPage;
