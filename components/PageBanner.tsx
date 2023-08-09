import Image from "next/image";

export default function PageBanner() {

  return (
    <div className="banner">
      {Array.from({ length: 40 }, (_, index) => (
        <div key={index} className={"inline-flex gap-5 m-3"}>
          <Image src={"/svg/JZ2023-Item-Bracket.svg"} alt={"bracket"} width={30} height={30}/>
          <Image src={"/svg/JZ2023-Item-Tilde.svg"} alt={"tilde"} width={30} height={30}/>
          <Image src={"/svg/JZ2023-Character-Wheely-cropped.svg"} alt={"Wheely"} width={60} height={60} className={"wheely"}/>
          <Image src={"/svg/JZ2023-Item-Heart.svg"} alt={"Heart"} width={30} height={30}/>
          <Image src={"/svg/JZ2023-Item-Et.svg"} alt={"Et"} width={30} height={30}/>
          <Image src={"/svg/JZ2023-Item-Exclaim.svg"} alt={"Exclaim"} width={30} height={30}/>
        </div>
      ))}
    </div>
  )
}
