import { NextResponse } from 'next/server'

const data = [

  {
    "homepageUrl": "https://www.vegvesen.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2020/logos/vegvesen.svg",
    "name": "Statens vegvesen"
  },
  {
    "homepageUrl": "https://www.systek.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/systek.svg",
    "name": "Systek"
  },
  {
    "homepageUrl": "https://www.storebrand.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2020/logos/storebrand.png",
    "name": "Storebrand"
  },
  {
    "homepageUrl": "https://www.redhat.com/en",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/redhat.svg",
    "name": "Redhat"
  },
  {
    "homepageUrl": "https://www.knowit.no",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/knowit.svg",
    "name": "Knowit Objectnet AS"
  },
  {
    "homepageUrl": "https://www.soprasteria.no/om-sopra-steria",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/soprasteria.svg",
    "name": "Sopra Steria"
  },
  {
    "homepageUrl": "https://www.accenture.com/no-en",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/accenture.svg",
    "name": "Accenture AS"
  },
  {
    "homepageUrl": "https://www.nav.no/no/Person",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/nav.svg",
    "name": "NAV"
  },
  {
    "homepageUrl": "https://www.miles.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/miles.svg",
    "name": "Miles"
  },
  {
    "homepageUrl": "https://www.kantega.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2020/logos/kantega.png",
    "name": "Kantega AS"
  },
  {
    "homepageUrl": "https://www.fremtind.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/fremtind.svg",
    "name": "Fremtind Forsikring AS"
  },
  {
    "homepageUrl": "https://www.finn.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/finn.svg",
    "name": "FINN.no"
  },
  {
    "homepageUrl": "https://schibsted.com/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/schibsted.png",
    "name": "Schibsted"
  },
  {
    "homepageUrl": "https://www.dnb.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/dnb.svg",
    "name": "DNB"
  },
  {
    "homepageUrl": "https://www.tietoevry.com/no/",
    "logoUrl": "https://javazone-assets.s3.eu-west-1.amazonaws.com/2022/logos/tietoevry.svg",
    "name": "TietoEVRY AS"
  }, // TODO: TANET END
  {
    "homepageUrl": "https://www.statnett.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/statnett.svg",
    "name": "Statnett SF"
  },
  {
    "homepageUrl": "https://www.jpro.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/jpro.svg",
    "name": "JProfessionals AS"
  },
  {
    "homepageUrl": "https://www.sparebank1.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/sparebank1.svg",
    "name": "SpareBank 1 Banksamarbeidet"
  },
  {
    "homepageUrl": "https://scienta.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/scienta.svg",
    "name": "Scienta"
  },
  {
    "homepageUrl": "https://enso.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/enso.svg",
    "name": "Konsulentselskapet Enso AS"
  },
  {
    "homepageUrl": "https://scelto.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/scelto.svg",
    "name": "Scelto AS"
  },
  {
    "homepageUrl": "https://www.tripletex.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/tripletex.svg",
    "name": "Tripletex"
  },
  {
    "homepageUrl": "https://www.politiet.no/om/organisasjonen/sarorganene/pit/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2022/logos/politiet.svg",
    "name": "Politiets IT-enhet"
  },
  {
    "homepageUrl": "https://www.oslo.kommune.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/oslo_kommune.svg",
    "name": "Oslo Origo"
  },
  {
    "homepageUrl": "https://www.webstep.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2022/logos/webstep.svg",
    "name": "Webstep AS"
  },
  {
    "homepageUrl": "https://bouvet.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/bouvet.svg",
    "name": "Bouvet Norge AS"
  },
  {
    "homepageUrl": "https://computas.com/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/computas.svg",
    "name": "Computas"
  },
  {
    "homepageUrl": "https://www.gjensidige.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/gjensidige.svg",
    "name": "Gjensidige Forsikring"
  },
  {
    "homepageUrl": "https://www.skatteetaten.no/person/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/skatteetaten.svg",
    "name": "Skatteetaten"
  },
  {
    "homepageUrl": "https://github.com/tolletaten/javazone2021",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/toll.svg",
    "name": "Tolletaten"
  },
  {
    "homepageUrl": "https://uptimeconsulting.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/uptime.svg",
    "name": "Uptime Consulting"
  }, // TODO: Ellaoui
  {
    "homepageUrl": "https://eika.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/eika.svg",
    "name": "Eika Gruppen AS"
  },
  {
    "homepageUrl": "https://www.capgemini.com/no-no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/capgemini.svg",
    "name": "Capgemini Norge AS"
  },
  {
    "homepageUrl": "https://embriq.no",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/embriq.svg",
    "name": "EmbriQ"
  },
  {
    "homepageUrl": "https://bekk.no",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/bekk.svg",
    "name": "Bekk Consulting AS"
  },
  {
    "homepageUrl": "https://cloudberries.no",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/cloudberries.svg",
    "name": "Cloudberries"
  },
  {
    "homepageUrl": "https://ruter.no",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/ruter.svg",
    "name": "Ruter"
  },
  {
    "homepageUrl": "https://mastercard.com",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2019/logos/mastercard.svg",
    "name": "Mastercard Payment Services Norway AS"
  },
  {
    "homepageUrl": "https://www.kodemaker.no",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2022/logos/kodemaker.svg",
    "name": "Kodemaker"
  },
  {
    "homepageUrl": "https://www.variant.no",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2022/logos/variant.svg",
    "name": "Variant"
  },
  {
    "homepageUrl": "https://www.dfindconsulting.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2022/logos/dfind.svg",
    "name": "Dfind"
  },
  {
    "homepageUrl": " https://www.postennorge.no/",
    "logoUrl": "https://d3o108dy577i1m.cloudfront.net/2022/logos/postenbring.svg",
    "name": "Posten Bring"
  }
]

export async function GET() {
  return NextResponse.json(data)
}
