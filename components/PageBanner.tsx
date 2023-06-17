import styles from './pageBanner.module.css';
import Image from "next/image";

type Props = {}

export default function PageBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerSlider}>
        <Image src={"/svg/JZ2023-Item-Bracket.svg"} alt={"bracket"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Item-Tilde.svg"} alt={"tilde"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Character-Wheely-cropped.svg"} alt={"Wheely"} width={60} height={60} className={styles.wheely}/>
        <Image src={"/svg/JZ2023-Item-Heart.svg"} alt={"Heart"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Item-Et.svg"} alt={"Et"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Item-Exclaim.svg"} alt={"Exclaim"} width={30} height={30}/>
      </div>
      <div className={styles.bannerSlider}>
        <Image src={"/svg/JZ2023-Item-Bracket.svg"} alt={"bracket"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Item-Tilde.svg"} alt={"tilde"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Character-Wheely-cropped.svg"} alt={"Wheely"} width={60} height={60} className={styles.wheely}/>
        <Image src={"/svg/JZ2023-Item-Heart.svg"} alt={"Heart"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Item-Et.svg"} alt={"Et"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Item-Exclaim.svg"} alt={"Exclaim"} width={30} height={30}/>
      </div>
      <div className={styles.bannerSlider}>
        <Image src={"/svg/JZ2023-Item-Bracket.svg"} alt={"bracket"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Item-Tilde.svg"} alt={"tilde"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Character-Wheely-cropped.svg"} alt={"Wheely"} width={60} height={60} className={styles.wheely}/>
        <Image src={"/svg/JZ2023-Item-Heart.svg"} alt={"Heart"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Item-Et.svg"} alt={"Et"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Item-Exclaim.svg"} alt={"Exclaim"} width={30} height={30}/>
      </div>
      <div className={styles.bannerSlider}>
        <Image src={"/svg/JZ2023-Item-Bracket.svg"} alt={"bracket"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Item-Tilde.svg"} alt={"tilde"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Character-Wheely-cropped.svg"} alt={"Wheely"} width={60} height={60} className={styles.wheely}/>
        <Image src={"/svg/JZ2023-Item-Heart.svg"} alt={"Heart"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Item-Et.svg"} alt={"Et"} width={30} height={30}/>
        <Image src={"/svg/JZ2023-Item-Exclaim.svg"} alt={"Exclaim"} width={30} height={30}/>
      </div>
    </div>
  )
}
