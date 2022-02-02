import React, { useContext, useState } from "react";
import { CoinsContext } from "../../context/coinsContext";
import Image from 'next/image'
import Icon from '@mdi/react'
import aerocard from '../../public/images/aerocard.svg'
import coinIcon from '../../public/images/coin-icon.svg'
import styles from './Coins.module.scss'
import { mdiChevronDown } from '@mdi/js'
import icon from '../../public/images/redeem-icon.svg'

function Coins() {
    const {coins, addCoins} = useContext(CoinsContext)
    const [showDropdown, setShowDropdown] = useState(0)
    const actualCoins = coins;

    function toggleDropdown (){
      let dropdown = document.getElementById('dropdownContent');
      if (showDropdown == 0){
        dropdown.style = 'display:block';
        setShowDropdown(1)
      } else{
        dropdown.style = 'display:none';
        setShowDropdown(0)
      }
    }

    const [selectedMount, setSelectedMount] = useState(0)
    function handleCoins(mount){
      setSelectedMount(mount);
    }
    return (
      <div>
        <div className={styles.coins} onClick={toggleDropdown} >
          <Image className={styles.coinIcon} src={coinIcon} alt='coin-icon' />
          <span className={styles.mount}>{actualCoins}</span>
          <Icon className={styles.dropdown} path={mdiChevronDown} color="#8FA3BF"/>
        </div>
        <div id='dropdownContent' className={styles.dropdownContent}>
          <h6>Add Balance</h6>
          <Image className={styles.aerocard} src={aerocard} alt="Aerocard" />
          <ul className={styles.coinsBtn}>
            <li className={selectedMount == 1000 ? styles.active : styles.aeroBtn} onClick={() =>handleCoins(1000)}> <span>1000</span> </li>
            <li className={selectedMount == 5000 ? styles.active : styles.aeroBtn} onClick={() => handleCoins(5000)}> <span>5000</span> </li>
            <li className={selectedMount == 7500 ? styles.active : styles.aeroBtn} onClick={() => handleCoins(7500)}> <span>7500</span> </li>
          </ul>
          <button className={styles.addCoinsBtn} onClick={() => addCoins(selectedMount)}> <Image className={styles.image} src={icon} alt='icon'/> Add Points </button>
        </div>
      </div>
    )
}

export default Coins
