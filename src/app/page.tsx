import HeroSlider     from '@/components/HeroSlider'
import Stats          from '@/components/Stats'
import ForWhom        from '@/components/ForWhom'
import Sectors        from '@/components/Sectors'
import WhyVisit       from '@/components/WhyVisit'
import AmbassadorsAlt from '@/components/AmbassadorsAlt'
import Program        from '@/components/Program'
import Partners       from '@/components/Partners'
import News           from '@/components/News'
import CtaBanner      from '@/components/CtaBanner'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Stats />
      <ForWhom />
      <Sectors />
      <WhyVisit />
      <AmbassadorsAlt />
      <Program />
      <Partners />
      <News />
      <CtaBanner />
    </>
  )
}
