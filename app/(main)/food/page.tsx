import { Title } from '@/components/title/Title'
import { Section } from '@/components/section/Section'

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
