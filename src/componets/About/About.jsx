import styles from './About.module.css'
import {getImageUrl} from "../../utils"


export default function About() {
  return (
    <section>
        <h2>About</h2>
        <img src={getImageUrl("about/aboutImage.png")} alt="img" />
        <ul>
            <li>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursorIcon" />
                <div>
                    <h3>Frontend Developer</h3>
                    <p>
                        I'm a frontend developer with experince in bui and optimized sites
                    </p>
                </div>

            </li>
        </ul>
    </section>
  )
}
