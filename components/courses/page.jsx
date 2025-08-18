"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const COURSES = [
  {
    id: "gen-eng",
    title: "General English",
    slug: "general-english",
    category: "Adults",
    level: "Beginner",
    duration: "8 weeks",
    format: "Online / In-person",
    blurb: "Build grammar, vocabulary, and confidence for everyday life.",
  },
  {
    id: "conv-club",
    title: "Conversation Club",
    slug: "conversation-club",
    category: "Adults",
    level: "Intermediate",
    duration: "Ongoing",
    format: "Evenings · In-person",
    blurb: "Weekly speaking practice with real-life topics and teacher feedback.",
  },
  {
    id: "biz-eng",
    title: "Business English",
    slug: "business-english",
    category: "Adults",
    level: "Upper-Intermediate",
    duration: "6 weeks",
    format: "Online",
    blurb: "Meetings, emails, presentations, and negotiation language.",
  },
  {
    id: "ielts",
    title: "IELTS Intensive",
    slug: "ielts-prep",
    category: "Exams",
    level: "Upper-Intermediate",
    duration: "6 weeks",
    format: "Online / In-person",
    blurb: "Strategies for Listening, Reading, Writing, and Speaking + mock tests.",
  },
  {
    id: "toefl",
    title: "TOEFL Booster",
    slug: "toefl-prep",
    category: "Exams",
    level: "Advanced",
    duration: "5 weeks",
    format: "Online",
    blurb: "Targeted skills, timed practice, and score-maximizing techniques.",
  },
  {
    id: "kids",
    title: "Kids & Teens",
    slug: "kids-teens",
    category: "Kids",
    level: "Beginner",
    duration: "10 weeks",
    format: "Weekends · In-person",
    blurb: "Project-based learning, games, and pronunciation for young learners.",
  },
];

const CATEGORIES = ["All", "Adults", "Exams", "Kids"];

export default function Courses() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(() => {
    if (filter === "All") return COURSES;
    return COURSES.filter((c) => c.category === filter);
  }, [filter]);

  return (
    <section id="courses" className="section bg-base-100">
      <div className="container-page space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="chip">Courses</span>
            <h2 className="font-heading text-3xl md:text-4xl mt-3">Find your perfect program</h2>
            <p className="text-base text-base-content/80 mt-2 prose-max">
              Learn at your level and pace — from everyday English to exam preparation.
            </p>
          </div>

          {/* Filter */}
          <div className="join self-start">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={[
                  "btn btn-sm join-item",
                  filter === cat ? "btn-primary" : "btn-outline",
                ].join(" ")}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((c) => (
            <article
              key={c.id}
              className="card card-bordered bg-base-100 shadow-soft border-base-300"
            >
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl">{c.title}</h3>
                  <span className="badge badge-outline">{c.category}</span>
                </div>

                <p className="text-sm opacity-80">{c.blurb}</p>

                <ul className="mt-2 text-sm grid grid-cols-2 gap-2">
                  <li className="border border-base-300 rounded-lg px-3 py-2">
                    <div className="opacity-70 text-xs">Level</div>
                    <div className="font-medium">{c.level}</div>
                  </li>
                  <li className="border border-base-300 rounded-lg px-3 py-2">
                    <div className="opacity-70 text-xs">Duration</div>
                    <div className="font-medium">{c.duration}</div>
                  </li>
                  <li className="border border-base-300 rounded-lg px-3 py-2 col-span-2">
                    <div className="opacity-70 text-xs">Format</div>
                    <div className="font-medium">{c.format}</div>
                  </li>
                </ul>

                <div className="card-actions mt-4">
                  <Link href={`/courses/${c.slug}`} className="btn btn-primary btn-cta">
                    View details
                  </Link>
                  <Link href={`/enroll?course=${c.slug}`} className="btn btn-outline">
                    Enroll
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div className="rounded-2xl border border-strong bg-base-100 shadow-soft p-5 md:p-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-heading text-lg md:text-xl">Not sure where to start?</h3>
            <p className="text-sm opacity-80">Take our 2-minute level test and get a personalized course plan.</p>
          </div>
          <div className="flex gap-2">
            <Link href="/level-test" className="btn btn-primary btn-cta">Take level test</Link>
            <Link href="/trial" className="btn btn-outline">Book a free trial</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
