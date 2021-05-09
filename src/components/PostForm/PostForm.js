import styles from './PostForm.module.scss'

const PostForm = () => {
  return(
    <form>
      <textarea name="content" className={styles.postTextArea}></textarea>
      <button className={styles.postButton}>Add New Post</button>
    </form>
  )
}

export default PostForm