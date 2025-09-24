"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

const cards = [
  { title: "Expert Team", desc: "Skilled professionals delivering innovative solutions tailored to your business", icon: "🌞", accent: "bg-yellow-100" },
  { title: "Quality First", desc: "We ensure top-notch standards in every project we deliver", icon: "🏅", accent: "bg-purple-100" },
  { title: "On-Time Delivery", desc: "Punctual project execution without compromising quality", icon: "⏰", accent: "bg-pink-100" },
  { title: "Customer-Centric", desc: "We listen, understand, and design around your needs", icon: "💙", accent: "bg-gray-100" },
  { title: "Cutting-Edge Tech", desc: "Latest tools & technologies to give you a competitive edge", icon: "💻", accent: "bg-green-100" },
  { title: "Affordable Solutions", desc: "Premium results that fit your budget", icon: "💲", accent: "bg-red-100" },
];

export default function CardGrid() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleArrows, setVisibleArrows] = useState([]);

  useEffect(() => {
    // Animate cards and arrows step by step
    cards.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, i]);

        // show arrow AFTER the card (except last card)
        if (i > 0) {
          setTimeout(() => {
            setVisibleArrows((prev) => [...prev, i]); // arrow index = destination card
          }, 300); // delay after card appears
        }
      }, i * 600); // slower timing so arrow appears naturally
    });
  }, []);

  return (
    <section className="relative py-16">
      {/* Heading */}
      <div className="text-center mb-12 heading-section">
        <h2 className="text-3xl font-bold text-gray-900">
          Why Choose Upsurge Media
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We deliver exceptional IT services that drive digital transformation and
          <br />
         business growth through innovative solutions and expert support.
        </p>
      </div>

      {/* Arrow Layer (behind cards) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none arrows-layer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="5"
            refY="2.5"
            orient="auto"
          >
            <polygon points="0 0, 5 2.5, 0 5" fill="#6b7280" />
          </marker>
        </defs>

        {/* 1 → 2 */}
        {visibleArrows.includes(1) && (
          <path
            d="M 320 40 C 990 250, 650 150, 900 200"
            className="arrow-path"
            markerEnd="url(#arrowhead)"
          />
        )}

        {/* 2 → 3 */}
        {visibleArrows.includes(2) && (
          <path
            d="M 800 220 C 300 320, 500 300, 400 400"
            className="arrow-path"
            markerEnd="url(#arrowhead)"
          />
        )}

        {/* 3 → 4 */}
        {visibleArrows.includes(3) && (
          <path
            d="M 440 420 C 550 470, 650 370, 800 420"
            className="arrow-path"
            markerEnd="url(#arrowhead)"
          />
        )}

        {/* 4 → 5 */}
        {visibleArrows.includes(4) && (
          <path
            d="M 800 440 C 750 560, 500 520, 400 600"
            className="arrow-path"
            markerEnd="url(#arrowhead)"
          />
        )}

        {/* 5 → 6 */}
        {visibleArrows.includes(5) && (
          <path
            d="M 400 620 C 550 670, 650 570, 800 650"
            className="arrow-path"
            markerEnd="url(#arrowhead)"
          />
        )}
      </svg>

      {/* Cards */}
      <div className="flex flex-col space-y-20 max-w-5xl mx-auto relative z-10">
        {Array.from({ length: 3 }).map((_, row) => (
          <div key={row} className="card-row">
            {cards.slice(row * 2, row * 2 + 2).map((c, i) => {
              const index = row * 2 + i;
              const isVisible = visibleCards.includes(index);

              return (
                <div
                  key={c.title}
                  className={`w-[260px] opacity-0 relative z-20
                    ${isVisible ? (i === 0 ? "fade-left" : "fade-right") : ""}`}
                >
                  <Card {...c} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
