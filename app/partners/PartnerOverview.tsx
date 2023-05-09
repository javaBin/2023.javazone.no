import { partners } from '../api/partners/partners'
import '../../styles/globals.css'

export default function PartnerOverview() {
  return (
    <section className="block bg-[#033E4F] p-4">
      <h1 className="text-2xl text-center uppercase my-4">Partners in 2023</h1>
      <div className="flex flex-wrap justify-center gap-1.5">
        {partners.map((partner) => {
          return (
            <a key={partner.name} href={partner.homepageUrl}>
              <img
                className="h-16 w-40 hover:scale-[1.2]"
                src={partner.logoUrl}
                alt={partner.name}
              ></img>
            </a>
          )
        })}
      </div>
    </section>
  )
}
