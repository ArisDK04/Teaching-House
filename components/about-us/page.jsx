"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="section bg-base-100">
      <div className="container-page grid gap-10 lg:gap-16 lg:grid-cols-[1.1fr,1fr] items-start">
        {/* Left: Story + Values */}
        <div className="space-y-8">
          {/* Eyebrow + Title */}
          <div className="space-y-3">
            <span className="chip">About us</span>
            <h2 className="font-heading text-3xl md:text-4xl text-base-content">
              Helping learners speak with confidence since <span className="text-primary font-extrabold">2016</span>.
            </h2>
            <p className="text-base text-base-content/80 prose-max">
              Teachin House is a community-driven English school focused on real-life communication.
              We combine certified teachers, small groups, and flexible schedules to help you
              progress faster — whether you’re preparing for IELTS, growing your career, or starting
              from zero.
            </p>
          </div>

          {/* Values */}
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="p-4 rounded-xl border border-base-300 bg-base-100 shadow-soft">
              <div className="text-primary font-semibold">Certified Teachers</div>
              <p className="text-sm opacity-80 mt-1">CELTA/TESOL-certified instructors with years of experience.</p>
            </li>
            <li className="p-4 rounded-xl border border-base-300 bg-base-100 shadow-soft">
              <div className="text-primary font-semibold">Small Groups</div>
              <p className="text-sm opacity-80 mt-1">Learn faster with personalized feedback and real practice.</p>
            </li>
            <li className="p-4 rounded-xl border border-base-300 bg-base-100 shadow-soft">
              <div className="text-primary font-semibold">Flexible & Hybrid</div>
              <p className="text-sm opacity-80 mt-1">Morning, evening, online, and in-person options.</p>
            </li>
            <li className="p-4 rounded-xl border border-base-300 bg-base-100 shadow-soft">
              <div className="text-primary font-semibold">Exam Focus</div>
              <p className="text-sm opacity-80 mt-1">Proven prep for IELTS, TOEFL, and Cambridge exams.</p>
            </li>
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <a href="/trial" className="btn btn-primary btn-cta">Book a free trial</a>
            <a href="/level-test" className="btn btn-outline">Take a level test</a>
          </div>
        </div>

        {/* Right: Media + Stats + Team highlights */}
        <div className="space-y-6">
          {/* Collage / main image */}
          <div className="relative rounded-2xl overflow-hidden border border-base-300 shadow-soft aspect-[4/3]">
            {/* Replace with your own photos */}
            <Image
              src="https://images.unsplash.com/photo-1523246191811-8fa7f6d1d0f5?q=80&w=1600&auto=format&fit=crop"
              alt="Our English class in session"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            {/* Floating badge */}
            <div className="absolute bottom-3 left-3 bg-base-100/90 backdrop-blur rounded-xl px-3 py-2 border border-base-300 shadow-soft">
              <span className="text-xs">Next event: <strong className="text-primary">Conversation Club Fri 7pm</strong></span>
            </div>
          </div>

          {/* Stats */}
          <ul className="grid grid-cols-3 gap-3">
            <li className="p-4 text-center rounded-xl bg-base-100 border border-strong shadow-soft">
              <div className="text-2xl font-bold text-primary">10k+</div>
              <div className="text-xs opacity-70">Lessons</div>
            </li>
            <li className="p-4 text-center rounded-xl bg-base-100 border border-base-300 shadow-soft">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-xs opacity-70">Exam success</div>
            </li>
            <li className="p-4 text-center rounded-xl bg-base-100 border border-base-300 shadow-soft">
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-xs opacity-70">Nationalities</div>
            </li>
          </ul>

          {/* Team preview */}
          <div className="rounded-2xl border border-base-300 bg-base-100 p-4 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-heading text-lg">Meet the team</h3>
              <a href="/about#team" className="link text-primary">See all</a>
            </div>
            <ul className="grid grid-cols-3 gap-3">
              {/* Card 1 */}
              <li className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 rounded">
                    <img src="/team/anna.jpg" alt="Anna - Academic Director" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Anna</div>
                  <div className="text-xs opacity-70">Academic Director</div>
                </div>
              </li>
              {/* Card 2 */}
              <li className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 rounded">
                    <img src="/team/james.jpg" alt="James - IELTS Specialist" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold">James</div>
                  <div className="text-xs opacity-70">IELTS Specialist</div>
                </div>
              </li>
              {/* Card 3 */}
              <li className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 rounded">
                    <img src="/team/sofia.jpg" alt="Sofia - Kids Program Lead" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Sofia</div>
                  <div className="text-xs opacity-70">Kids Program Lead</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
