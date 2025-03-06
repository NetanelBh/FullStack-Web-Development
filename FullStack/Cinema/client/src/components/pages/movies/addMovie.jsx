import styles from './addMovie.module.css';

import { useRef } from 'react';

import Input from '../../genericComp/input';
import Button from '../../UI/button/button';

const AddMovie = () => {
  const movieNameRef = useRef();
  const genresRef = useRef();
  const imageRef = useRef();
  const premieredRef = useRef();

  const saveMovieHandler = (event) => {};

  const cancelHandler = () => {};

  return (
    <form onSubmit={saveMovieHandler} className={styles.add_movie_form_container}>
      <Input title="Name" type='text' className="" value="" ref={movieNameRef}/>
      <Input title="Genres" type='text' className="" value="" ref={genresRef}/>
      <Input title="Image URL" type='text' className="" value="" ref={imageRef}/>
      <Input title="Premiered" type='text' className="" value="" ref={premieredRef}/>

      <div className={styles.add_movie_actions}>
        <Button className={styles.add_movie_button} text="Save" type="submit"/>
        <Button className={styles.add_movie_button} text="Cancle" type="button" onClick={cancelHandler}/>
      </div>
    </form>
  )
}

export default AddMovie