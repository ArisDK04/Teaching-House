"use client";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Maria Lopez",
    country: "Spain",
    photo: "/students/maria.jpg",
    quote:
      "Teachin House gave me the confidence to speak English at work. The teachers are amazing and the classes are fun!",
    course: "Business English",
  },
  {
    id: "t2",
    name: "Ahmed Khan",
    country: "Pakistan",
    photo: "/students/ahmed.jpg",
    quote:
      "I passed my IELTS exam with a 7.5 thanks to the focused strategies and constant feedback from my teacher.",
    course: "IELTS Intensive",
  },
  {
    id: "t3",
    name: "Sofia Rossi",
    country: "Italy",
    photo: "/students/sofia.jpg",
    quote:
      "I love the conversation clubs! They helped me meet people from around the world and improve my fluency.",
    course: "Conversation Club",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-base-100">
      <div className="container-page space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <span className="chip">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl">What our students say</h2>
          <p className="text-base text-base-content/80 prose-max mx-auto">
            Hear from learners who’ve improved their English and achieved their goals.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="card bg-base-100 border border-base-300 shadow-soft h-full"
            >
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={t.photo} alt={t.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs opacity-70">{t.country}</div>
                  </div>
                </div>

                <p className="text-sm italic opacity-90">“{t.quote}”</p>

                <div className="mt-4">
                  <span className="badge badge-outline">{t.course}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/testimonials" className="btn btn-primary btn-cta">
            Read more stories
          </a>
        </div>
      </div>
    </section>
  );
}
