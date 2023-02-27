import Link from "next/link"
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
        <div className={styles.footer__thomasInfo}>
          <p>All pictures are copyright of </p>
          <h3> Thomas Murray </h3>
          <p>Photographer | Halifax N.S.</p>
        </div>
        <ul className={styles.footer__list}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/bio"}>Bio</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>

        <div className={styles.davedev}>
          <Link href="https://davedev.ca/" className={styles.link}>
            {" "}
           Created by Davedev
          </Link>
          <p className={styles.copy}>
            All rights reserved {new Date().getFullYear()}
          </p>
        </div>
      
    </footer>
  );
}
