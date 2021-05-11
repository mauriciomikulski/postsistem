import styles from './PostForm.module.scss'

const PostForm = () => {
  return(
    <form>
      <textarea name="content" className={styles.formContent} placeholder="Text here..."></textarea>
      <button className={styles.formButton}>Add New Post</button>
    </form>
  )
}

export default PostForm;