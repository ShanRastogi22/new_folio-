import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export default function contact() {
  return (
    <footer id='contact'className={styles.container}>
        <div className={styles.text}>
        <h2>
     Contact
        </h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}><img src={getImageUrl('contact/emailIcon.png')} alt='Email icon' />
        <a href="mailto:shanrastogi57@gmail.com">Gmail.com</a>
        </li>
        <li className={styles.link}><img src={getImageUrl('contact/linkedinIcon.png')} alt='linkedin icon' />
        <a href="https://www.linkedin.com/in/shantanu-rastogi-837668258/">Linkedin</a>
        </li>
        <li className={styles.link}><img src={getImageUrl('contact/githubIcon.png')} alt='Email icon' />
        <a href="https://github.com/ShanRastogi22">GitHub</a>
        </li>
      </ul>
    </footer>
  )
}
