import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Construction site"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Building Your Future, <span className="text-yellow-400">Brick by Brick</span>
            </h1>
            <p className="mb-8 text-xl text-gray-200">
              Quality construction services you can rely on for residential and commercial projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center rounded-md bg-yellow-500 px-6 py-3 font-medium text-black transition-colors hover:bg-yellow-400"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Who We Are</h2>
              <p className="mb-6 text-lg text-gray-700">
                Construction Co. is a trusted name in the construction industry, known for delivering excellence in both
                residential and commercial projects. Our team of professionals works with precision and care to make
                your dreams a reality.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "25+ years of industry experience",
                  "Certified and skilled professionals",
                  "Commitment to quality and safety",
                  "On-time project delivery",
                  "Transparent pricing with no hidden costs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-yellow-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center font-medium text-yellow-600 hover:text-yellow-500"
              >
                Learn More About Us
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <Image src="/images/about-image.jpg" alt="Construction team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              We offer comprehensive construction solutions tailored to meet your specific needs and vision.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Residential Construction",
                description: "We build homes tailored to your dreams with attention to detail and quality materials.",
                image: "/images/residential.jpg",
              },
              {
                title: "Commercial Projects",
                description: "Modern solutions for business spaces designed for functionality and aesthetic appeal.",
                image: "/images/commercial.jpg",
              },
              {
                title: "Renovations",
                description: "Transform your existing spaces with our expert renovation and remodeling services.",
                image: "/images/renovation.jpg",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mb-4 text-gray-700">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-500"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-md bg-yellow-500 px-6 py-3 font-medium text-black transition-colors hover:bg-yellow-400"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Take a look at some of our recent work that showcases our expertise and attention to detail.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Luxury Villa",
                location: "Beverly Hills, CA",
                image: "/images/project1.jpg",
              },
              {
                title: "Office Complex",
                location: "Downtown Metro",
                image: "/images/project2.jpg",
              },
              {
                title: "Modern Apartment",
                location: "Riverside Heights",
                image: "/images/project3.jpg",
              },
            ].map((project, i) => (
              <div key={i} className="group relative h-80 overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="mb-1 text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-300">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md border border-yellow-500 bg-transparent px-6 py-3 font-medium text-yellow-600 transition-colors hover:bg-yellow-500 hover:text-black"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Contact us today for a free consultation and quote. Let's bring your vision to life together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-yellow-500 px-6 py-3 font-medium text-black transition-colors hover:bg-yellow-400"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="tel:+1234567890"
              className="inline-flex items-center rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Call: +123 456 7890
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
