import { useEffect, useState } from "react";
import Hero1 from "../assets/Hero1.jpg";
import banner2 from "../assets/Hero3.jpg";
import banner3 from "../assets/Hero4.jpg";
import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    img: Hero1,
    title: "Luxury on the Move",
    subtitle:
      "Explore breathtaking destinations with premium travel experiences designed for unforgettable memories.",
  },
  {
    img: banner2,
    title: "Your Next Adventure Starts Here",
    subtitle:
      "Book dream vacations, discover hidden gems, and travel the world with TripPartner.",
  },
  {
    img: banner3,
    title: "Travel Smarter, Stay Longer",
    subtitle:
      "Plan your perfect getaway with curated tours, seamless support, and unmatched comfort.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = slides[currentIndex];

  return (
    <section className="relative overflow-hidden">
      <div
        className="relative h-[650px] bg-cover bg-center md:h-[720px] lg:h-[820px]"
        style={{ backgroundImage: `url(${activeSlide.img})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/20" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Plane size={18} />
              <span className="text-sm font-medium">Trusted by Thousands of Travelers</span>
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              {activeSlide.title}
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              {activeSlide.subtitle}
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/tours"
                className="rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-emerald-700"
              >
                Explore Tours
              </Link>

              <Link
                to="/about"
                className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-slate-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${index === currentIndex ? "bg-emerald-400" : "bg-white/60"}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden w-full max-w-6xl -translate-x-1/2 px-6 lg:block">
        <div className="grid grid-cols-4 gap-6 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold text-white">50K+</h2>
            <p className="mt-2 text-sm text-slate-200">Happy Travelers</p>
          </div>

          <div className="text-center text-white">
            <h2 className="text-3xl font-bold text-white">120+</h2>
            <p className="mt-2 text-sm text-slate-200">Destinations</p>
          </div>

          <div className="text-center text-white">
            <h2 className="text-3xl font-bold text-white">4.9★</h2>
            <p className="mt-2 text-sm text-slate-200">Customer Rating</p>
          </div>

          <div className="text-center text-white">
            <h2 className="text-3xl font-bold text-white">24/7</h2>
            <p className="mt-2 text-sm text-slate-200">Travel Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;