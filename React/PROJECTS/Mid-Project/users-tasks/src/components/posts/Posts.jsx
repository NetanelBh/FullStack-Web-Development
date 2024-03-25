import styles from "./Posts.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import PostListItem from "./PostListItem";

const Posts = ({ posts, userId }) => {
  return (
    <>
      <div className={styles.header}>
        <h3>Todos - User {userId}</h3>
        <Button type="button" title="Add" className={styles.btn} />
      </div>
      {posts.length > 0 && (
        <Card className={styles.main_container}>
          <ul className={styles.post_list}>
            {posts.map((post) => (
              <PostListItem post={post} key={post.id} />
            ))}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Posts;
