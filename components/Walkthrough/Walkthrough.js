import Image from 'next/image'
import image2 from '../../public/images/image2.png'
import image3 from '../../public/images/image3.png'
import image4 from '../../public/images/image4.png'
import browse from '../../public/images/browse.svg'
import choose from '../../public/images/choose.svg'
import enjoy from '../../public/images/enjoy.svg'
import styles from './Walkthrough.module.scss'

export default function Walkthrough() {
    return (
        <div className={styles.walkthrough}>
        <div className={[styles.card1, styles.card].join(" ")}>
          <div className={styles.inner}>
            <Image className={styles.image} src={image4} alt="img" />
            <div className={styles.description}>
              <Image className={styles.icon} src={browse} alt="Browse"/>
              <h3> 1—BROWSE</h3>
            </div>
              <p>Browse our tech catalog with more than 20 top tech products</p>
          </div>
        </div>
        <div className={[styles.card2, styles.card].join(" ")}>
          <div className={styles.inner}>
            <Image className={styles.image} src={image2} alt="img" />
            <div className={styles.description}>
              <Image className={styles.icon} src={choose} alt="Choose"/>
              <h3> 2—CHOOSE</h3>
            </div>
            <p>Exchange your hard earned AeroPoints for the item you want</p>
          </div>
        </div>
        <div className={[styles.card3, styles.card].join(" ")}>
          <div className={styles.inner}>
            <Image className={styles.image} src={image3} alt="img" />
            <div className={styles.description}>
              <Image className={styles.icon} src={enjoy} alt="Enjoy"/>
              <h3> 3—ENJOY!</h3>
            </div>
            <p>All done, you can relax! We’ll take care of delivery of your tech item!</p>
          </div>
        </div>
      </div>
    )
}