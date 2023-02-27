import Image from "next/image";
import Link from "next/link";
import cameraImg from '../../public/img/opt3.jpg'
import portraitImg from '../../public/img/portrait.webp'
import landscapeImg from '../../public/img/landscape.webp'
import instagramImg from '../../public/img/Instagram.jpg'
import instagramImg2 from '../../public/img/Instagram2.jpg'
import instagramImg3 from '../../public/img/Instagram3.jpg'
import instagramImg4 from '../../public/img/Instagram4.jpg'
import instagramImg5 from '../../public/img/Instagram5.jpg'
import instagramImg6 from '../../public/img/Instagram6.jpg'
import Layout from "@/components/layout"
import styles from "../styles/portfolio.module.css"


export default function Portfolio() {
  return (
    <>
      <Layout>
        <main className="container">
          <div className={styles.heading}>
            <Image
              src={cameraImg}
              alt={"Camera canon"}
              width={650}
              height={650}
              className={styles.headingImg}
            />

            <div className={styles.heading__wrapper}>
              <h1 className={styles.heading__title}> My</h1>
              <h1 className={styles.heading__title}> Portfolio</h1>
              <p>I am specialized in different fields of Photography:</p>
              <p>Landscape, Portraits and working on exploring more</p>
              <p>
                Below you will find the pictures, now let&apos;s start to
                discover my work together!
              </p>
            </div>
          </div>

          <div className={styles.portfolio__container}>
            <div className={styles.portfolio__wrapper}>
              <h2 className={styles.portfolio__heading}>Portrait </h2>
              <h2 className={styles.portfolio__span}>Photography </h2>
              <p className={styles.portfolio__text}>
                I created a section exclusively dedicated to Portrait
                Photography. I collected the very best pictures taken during my
                time in collage. You can have a look by clicking the button
                below.
              </p>
            </div>
            <Image className={styles.portfolio__img} src={portraitImg} alt={'Portrait photography'} width={450} height={300}/>
          </div>
          <div className={styles.portfolio__btn}>
            <Link href="/portfolio/portrait">View more</Link>
          </div>
          <span className={styles.portfolio__divider}></span>
          <div className={styles.portfolio__container}>
            <div className={styles.portfolio__wrapper}>
              <h2 className={styles.portfolio__heading}> Landscape </h2>
              <p className={styles.portfolio__text}>
                I believe that landscape photography can transport us to new
                places, inspire us, and connect us with nature in a way that few
                other art forms can. Whether I&apos;m hiking through rugged mountain
                ranges, wandering through lush forests, or exploring rugged
                coastlines, I&apos;m always searching for that perfect moment when
                light, weather, and landscape come together Enjoy exploring my
                portfolio as much as I&apos;ve enjoyed creating it.
              </p>
            </div>
            <Image className={styles.portfolio__img} src={landscapeImg} alt={'Landscape photography'} width={450} height={300} />
          </div>
          
          <div className={styles.portfolio__btn}>
            <Link href="/portfolio/landscape">View more</Link>
          </div>
          
          <span className={styles.portfolio__divider}></span>
        </main>
        <div className={styles.portfolio__instagram}>
          <h2>Follow me on Instagram </h2>
          <div className={styles.instagram__wrapper}>

            <Image className={styles.instagram__img} src={instagramImg} alt={'Instagram photography'} width={450} height={450}/>
            <Image className={styles.instagram__img} src={instagramImg2} alt={'Instagram photography'} width={450} height={450}/>
            <Image className={styles.instagram__img} src={instagramImg3} alt={'Instagram photography'} width={450} height={450}/>
            <Image className={styles.instagram__img} src={instagramImg4} alt={'Instagram photography'} width={450} height={450}/>
            <Image className={styles.instagram__img} src={instagramImg5} alt={'Instagram photography'} width={450} height={450}/>
            <Image className={styles.instagram__img} src={instagramImg6} alt={'Instagram photography'} width={450} height={450}/>
            <div className={styles.instagram__link}>
              <Link href="https://www.instagram.com/thomasmurrayphotography/">thomasmurrayphotography</Link>
            </div>
          </div>
          <span className={styles.portfolio__divider}></span>
        </div>
      </Layout>
    </>
  );
}
