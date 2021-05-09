import Head from 'next/head';

import Bio from '../components/Bio';
import Post from '../components/Post';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      <Bio
        headshot="https://pbs.twimg.com/profile_images/1284323790692978689/TXV_s_Sd_400x400.jpg"
        name="Mauricio Mikulski"
        tagline="Helping others to learn by doing!"
        role="Student Developer @dwlove"
      />

        <ul className={styles.posts}>
          <li>
            <Post
              content="Hey, I'm a new post!" date="06/05/2021" />
          </li>
          <li>
            <Post
              content="Este é um novo post de teste no meu projeto de posts de mensagens."            
              date="04/05/2021"
            />
          </li>
          <li>
            <Post
              content="Este é um novo post de teste no meu projeto de posts de mensagens."            
              date="04/05/2021"
            />
          </li>
          <li>
            <Post
              content="Este é um novo post de teste no meu projeto de posts de mensagens."            
              date="04/05/2021"
            />
          </li>
        </ul>

        <form>
          <textarea className={styles.postsTextArea}></textarea>
          <button className={styles.postsButton}>Add New Post</button>
        </form>

      </main>        
    </div>
  )
}
