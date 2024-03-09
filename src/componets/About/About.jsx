import styles from './About.module.css'
import {getImageUrl} from "../../utils"


export default function About() {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="img" className={styles.contentImg}/>
        <ul className={styles.aboutItems}>
            <li className={styles.liItmes}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursorIcon" />
                <div  className={styles.des}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I'm a frontend developer with experince in bui and optimized sites
                    </p>
                </div>

            </li>
            <li className={styles.liItmes}>
                <img src={getImageUrl("about/serverIcon.png")} alt="serverIcon" />
                <div className={styles.des}>
                    <h3>Backend Developer</h3>
                    <p>
                        I have experince developing fast and optimized back-end system and APIs
                    </p>
                </div>
            </li>
            <li className={styles.liItmes}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="ui Icon" />
                <div  className={styles.des}>
                    <h3>UI Designer</h3>
                    <p>
                        I have designed multiple laning pages and have vreated design systems as well
                    </p>
                </div>

            </li>
        </ul>
        </div>
    </section>
  )
}
