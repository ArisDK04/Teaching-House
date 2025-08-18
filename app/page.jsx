import Hero from '#/components/hero/page';
import AboutUs from '#/components/about-us/page';
import Courses from '#/components/courses/page';
import Testimonials from '#/components/testimonials/page';
import CallToAction from '#/components/call-to-action/page';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Courses />
      <Testimonials />
      <CallToAction />
    </>
  );
}
