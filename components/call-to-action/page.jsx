export default function CallToAction() {
  return (
    <section className="section bg-primary text-primary-content">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="font-heading text-3xl md:text-4xl">
            Ready to start your English journey?
          </h2>
          <p className="opacity-90 text-base max-w-lg">
            Join hundreds of learners improving their fluency and confidence with Teachin House.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/trial" className="btn btn-cta btn-lg bg-base-100 text-base-content border-none shadow-soft">
            Book a Free Trial
          </a>
          <a href="/level-test" className="btn btn-outline btn-lg border-base-100 text-base-100 hover:bg-base-100 hover:text-primary-content">
            Take a Level Test
          </a>
        </div>
      </div>
    </section>
  );
}
