import styles from "../../styles/Home.module.css";
import Link from "next/link"

export default function Mainnav(){
    return( 
        <nav className={styles.nav}>
      <ul>
        <li>
          Home
        </li>
        <Link href="/about">
        <a>
        <li>
          About us 
        </li></a></Link>
        <li>
          Contact
        </li>
        <li>
          Blog
        </li>
      </ul>
  
      </nav>);
}