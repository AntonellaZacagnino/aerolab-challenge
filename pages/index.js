import Head from 'next/head'
import Image from 'next/image'
import Icon from '@mdi/react'
import { mdiArrowDownThin, mdiGithub } from '@mdi/js'
import image1 from '../public/images/image1.png'
import logo from '../public/images/logo.svg'
import styles from '../styles/Home.module.scss'
import Coins from '../components/Coins/Coins'
import  ProductsList  from '../components/ProductsList/ProducstList'
import Walkthrough from '../components/Walkthrough/Walkthrough'
import Filters from '../components/Filters/Filters'
import { Link } from 'react-scroll';


function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aerolab Challenge </title>
      </Head>

      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <Coins />
      </nav>
      <div className={styles.landing}>
        <div className={styles.title}>
          <span>EXPLORE THE</span>
          <h1 className={styles.mainTitle}><span>TECH</span> ZONE</h1>
          <p>Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.</p>
          <Link activeClass="active" to="container" spy={true} smooth={true} offset={50} duration={500} className={styles.buttonPrimary}> 
            <span>VIEW ALL PRODUCTS</span>
            <Icon className={styles.icon} path={mdiArrowDownThin} />
          </Link>
        </div>
        <div >
          <Image className={styles.image} src={image1} alt="banner" height={795} width={897} />
          <div className={styles.imageBG} />
        </div>
        <div className={styles.landingBG}/>
      </div>
      <Walkthrough />

      <main name='container' className={styles.main}>
        <div>
          <h2><span>TECH</span> PRODUCTS</h2>
        </div>
        <Filters />
        <div>
          <ProductsList  />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/AntonellaZacagnino/aerolab-challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
         <Icon color="#8FA3BF" size={1} path={mdiGithub} /> 
         <span>View this repository </span>
        </a>
      </footer>
    </div>
  )

}

export default Home;