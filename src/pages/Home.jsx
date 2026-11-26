import Carousel from '../components/Carousel.jsx'
import ServiceAgents from '../components/ServiceAgents.jsx'
import Services from '../components/Services.jsx'
import WhyUs from '../components/WhyUs.jsx'

export default function Home() {
  return (
    <section className="">
      <Carousel />

      <p className="mt-12">
        At Northland Controls and Automation we look after the machines and
        systems that keep farms, factories and food producers running. That
        includes the machine that keeps faulting, the process someone has to
        keep checking, and the system nobody else has managed to get working. We
        find the problem, fix it properly, and make it more reliable than it was
        before.
      </p>

      <Services />
      <WhyUs />
      <ServiceAgents />
    </section>
  )
}
