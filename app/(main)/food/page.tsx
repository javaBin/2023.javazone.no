import { Title } from '@/components/title/Title'
import { Section } from '@/components/section/Section'
import Image from 'next/image'
import { ReactNode } from 'react'

const PartnerLogo = ({ src, alt }: { src: string; alt: string }) => (
  <Image className="mx-auto my-0 filter invert sepia mb-4" src={src} alt={alt} width={100} height={30} />
)

const FoodEntry = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-dark-blue-background text-center p-4 m-4 rounded-md shadow-2xl">
      {children}
    </div>
  )
}

export default function Page() {
  return (
    <article>
      <Title type="big-title">Food at JavaZone 🍔</Title>
      <Section>
        <p>
          Welcome to the JavaZone culinary circus that promises to tantalize your taste buds and
          satisfy your cravings throughout the conference. We have carefully curated a selection of
          eight restaurants that will be serving a diverse array of mouthwatering dishes, ensuring
          that attendees with various preferences and allergies can enjoy their meals to the
          fullest.
        </p>
      </Section>
      <Section>
        <FoodEntry>
          <PartnerLogo src={'/logos/webstep.svg'} alt={'Webstep logo'} />
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Pulled Beef Taco</Title>
            <p className="text-2xl">with pickled cabbage and chipotle mayo</p>
            <p className="text-xl mb-4">(egg, mustard, celery, gluten, wheat)</p>
            <p className="text-xl">Please ask the chefs for gluten free option and/or vegan mayo</p>
          </div>
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Nachos</Title>
            <p className="text-2xl">with chili cheese and salsa picante</p>
            <p className="text-xl">(milk)</p>
          </div>
        </FoodEntry>
        <FoodEntry>
          <PartnerLogo src={'/logos/kodemaker.svg'} alt={'Kodemaker logo'} />
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Korean BBQ Pork Skewers</Title>
            <p className="text-2xl">with marinated rice, kimchi and chili mayo</p>
            <p className="text-xl">(egg, mustard, soy, celery, fish)</p>
          </div>
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Sushi Bowl</Title>
            <p className="text-2xl">with spicy salmon, marinated rice, edamame, pomegranate, wasabi mayo and broken ponzu</p>
            <p className="text-xl">(fish, soy, gluten, wheat, egg, mustard)</p>
          </div>
        </FoodEntry>
        <FoodEntry>
          <PartnerLogo src={'/logos/netcompany.svg'} alt={'Netcompany logo'} />
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Pulled Goat Sliders</Title>
            <p className="text-2xl">with grilled corn cream and pickled kale</p>
            <p className="text-xl mb-4">(milk, gluten, wheat)</p>
            <p className="text-xl">Please ask the chefs for gluten free option</p>
          </div>
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Grilled Corn on the Cob</Title>
            <p className="text-2xl">with dried chili, cilantro, lime and honey mayo</p>
            <p className="text-xl">(egg, mustard, gluten, wheat)</p>
          </div>
        </FoodEntry>
        <FoodEntry>
          <PartnerLogo src={'/logos/bekk.svg'} alt={'Bekk logo'} />
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Mac & Cheese</Title>
            <p className="text-2xl">with samba sausage</p>
            <p className="text-xl">(gluten, milk, wheat, pork)</p>
          </div>
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Popcorn</Title>
            <p className="text-2xl">with herbs, salt and smoked bacon</p>
            <p className="text-xl">(pork)</p>
          </div>
        </FoodEntry>
        <FoodEntry>
          <PartnerLogo src={'/logos/systek.svg'} alt={'Systek logo'} />
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Empanadas</Title>
            <p className="text-2xl">with cheddar cheese and steak or creamed spinach</p>
            <p className="text-xl">(egg, mustard, gluten, wheat)</p>
          </div>
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Loaded Hot Dog</Title>
            <p className="text-2xl">Wiener sausage in a bun loaded with cheddar cheese, pickles, onion and smoked paprika</p>
            <p className="text-xl mb-8">(pork, egg, mustard, lactose, gluten, wheat)</p>
            <p className="text-xl">Please ask the chefs for a gluten free bun</p>
          </div>
        </FoodEntry>
        <FoodEntry>
          <PartnerLogo src={'/logos/capgemini.svg'} alt={'Capgemini logo'} />
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Doughnuts</Title>
            <p className="text-2xl">freshly made with different flavors</p>
            <p className="text-xl">(egg, nuts, gluten, wheat)</p>
          </div>
          <div className="mb-8">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Cotton Candy</Title>
            <p className="text-2xl">with raspberry flavor</p>
          </div>
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Cake Pops:</Title>
            <p className="text-2xl">Carrot Cake</p>
            <p className="text-xl mb-4">(gluten, wheat, milk, egg)</p>
            <p className="text-2xl">Red velvet cake</p>
            <p className="text-xl mb-4">(gluten, wheat, milk, egg, soy)</p>
            <p className="text-2xl">Brownies</p>
            <p className="text-xl mb-4">(gluten, wheat, milk, egg, soy)</p>
          </div>
        </FoodEntry>
        <FoodEntry>
          <PartnerLogo src={'/logos/accenture.svg'} alt={'Accenture logo'} />
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Hot Daal - lentil stew</Title>
            <p className="text-2xl">with coconut, cilantro and green chili</p>
          </div>
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Samosa</Title>
            <p className="text-2xl">with Birds Eye chili sauce and mango</p>
            <p className="text-xl">(gluten, wheat)</p>
          </div>
          <div className="mb-8">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Chana Masala</Title>
            <p className="text-2xl">with rice and vegan Raita</p>
            <p className="text-xl">(mustard, celery)</p>
          </div>
          <div className="mb-4">
            <p className="text-xl">Marinated olives</p>
            <p className="text-xl">Focaccia (gluten, wheat) & Vegan mayo (mustard)</p>
            <p className="text-xl">Bean and lemon salad</p>
            <p className="text-xl">Cauliflower salad with pomegranate</p>
            <p className="text-xl">Grilled pumpkin with lentils and lovage</p>
            <p className="text-xl">Kale salad with apple vinaigrette</p>
            <p className="text-xl">Green salad with balsamic vinegar and olive oil</p>
            <p className="text-xl">Salt baked potatoes with vegan oil (mustard)</p>
          </div>
        </FoodEntry>
        <FoodEntry>
          <PartnerLogo src={'/logos/knowit.svg'} alt={'Knowit logo'} />
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Korean Corn Dog</Title>
            <p className="text-2xl">with honey mustard and gochujang</p>
            <p className="text-xl">(egg, gluten, wheat)</p>
          </div>
          <div className="mb-4">
            <Title className="font-['Noto-Serif-Bold'] mb-0.5">Soft Ice</Title>
            <p className="text-2xl">served with belgian waffle and various toppings</p>
            <p className="text-xl">(egg, gluten, wheat, lactose)</p>
          </div>
        </FoodEntry>
      </Section>
      <Section>
        <p>
          For attendees with allergies or dietary restrictions, rest assured that each restaurant is
          committed to providing a safe and enjoyable dining experience. Our chefs are well-versed
          in accommodating gluten, nut, dairy, and other common allergies. Simply inform the
          restaurant staff of your dietary needs, and they will guide you through the menu or offer
          personalized suggestions.
        </p>
      </Section>
      <Section>
        <p>Take a look at this interview with our head chef below!</p>
        <video controls>
          <source src="/videos/food.mp4" type="video/mp4" />
        </video>
      </Section>
      <Section>
        <p>
          As you savor these delicious dishes, take comfort in knowing that we have taken every
          measure to make your dining experience during the conference not only flavorful but also
          sustainable and inclusive. Bon appétit!
        </p>
      </Section>
    </article>
  )
}
