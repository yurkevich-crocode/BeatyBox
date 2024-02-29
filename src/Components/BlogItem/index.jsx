import styles from "./BlogItem.module.scss";

const BlogItem = ({ img_path, text, title }) => {
  return (
    <div className={styles["blog-item"]}>
      <div className={styles["blog-item__img-wrapper"]}>
        <img src={img_path} alt="" />
      </div>
      <div className={styles["blog-item__text-wrapper"]}>
        <p className={styles["blog-item__title"]}>{title}</p>
        <p className={styles["blog-item__text"]}>{text}</p>
      </div>
    </div>
  );
};

export default BlogItem;
