import styles from './PostForm.module.scss'

const PostForm = () => {
  return(
    <form>
      <textarea className={styles.postsTextArea}></textarea>
      <button className={styles.postsButton}>Add New Post</button>
    </form>
  )
}

export default PostForm