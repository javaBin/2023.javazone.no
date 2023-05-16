import { partners } from '../api/partners/partners'
import '../../styles/globals.css'

/**
 *     width: 100vw;
 *     margin-left: calc(-50vw + 50%);
 *     margin-right: calc(-50vw + 50%);
 * */
export default function PartnerOverview() {
  return (
    <section className="block w-screen bg-[#FED12D] p-4 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]">
      <h1 className="text-2xl text-center text-black uppercase my-4">Partners in 2023</h1>
      <div className="flex flex-wrap justify-center gap-1.5">
        {[...partners]
          .sort(() => Math.random() - 0.5)
          .map((partner) => {
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
