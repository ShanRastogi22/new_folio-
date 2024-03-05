import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm $H@N</h1>
      <p className={styles.description}>I'm a full-stack developer with 5 years of experience
        Node.js, React out if you'd like to learn more!
      </p>
      <a href="mailto:shanrastogi@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl('hero/heroImage.png')} alt="hero Image to me" className={styles.heroImg}/>
      <div className={styles.topBlur}/> 
      <div className={styles.bottomBlur}/> 
    </section>
  )
}
