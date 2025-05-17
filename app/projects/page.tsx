import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  const categories = ["All", "Residential", "Commercial", "Renovation", "Interior Design"]

  const projects = [
    {
      title: "Luxury Villa",
      category: "Residential",
      location: "Beverly Hills, CA",
      description: "A modern 5-bedroom luxury villa with swimming pool, home theater, and smart home technology.",
      image: "/images/project1.jpg",
    },
    {
      title: "Office Complex",
      category: "Commercial",
      location: "Downtown Metro",
      description: "A 10-story office building with sustainable design features and collaborative workspaces.",
      image: "/images/project2.jpg",
    },
    {
      title: "Modern Apartment",
      category: "Residential",
      location: "Riverside Heights",
      description: "Contemporary apartment complex with 50 units featuring modern amenities and green spaces.",
      image: "/images/project3.jpg",
    },
    {
      title: "Restaurant Renovation",
      category: "Renovation",
      location: "Harbor District",
      description: "Complete renovation of a historic building into a modern fine dining restaurant.",
      image: "/images/project4.jpg",
    },
    {
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "Business Park",
      description: "State-of-the-art corporate headquarters with innovative design and sustainable features.",
      image: "/images/project5.jpg",
    },
    {
      title: "Luxury Condo Interior",
      category: "Interior Design",
      location: "Skyline Towers",
      description: "High-end interior design for a penthouse condo with custom furnishings and smart home integration.",
      image: "/images/project6.jpg",
    },
    {
      title: "Historic Home Restoration",
      category: "Renovation",
      location: "Heritage District",
      description:
        "Careful restoration of a 100-year-old historic home, preserving original features while adding modern amenities.",
      image: "/images/project7.jpg",
    },
    {
      title: "Shopping Mall",
      category: "Commercial",
      location: "Eastside",
      description: "Modern shopping center with 50 retail spaces, food court, and entertainment facilities.",
      image: "/images/project8.jpg",
    },
    {
      title: "Beach House",
      category: "Residential",
      location: "Coastal Shores",
      description: "Contemporary beach house designed to withstand coastal conditions while maximizing ocean views.",
      image: "/images/project9.jpg",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/images/projects-hero.jpg" alt="Our projects" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">Our Projects</h1>
            <p className="text-xl text-gray-300">
              Explore our portfolio of completed projects showcasing our expertise and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category, i) => (
              <button
                key={i}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  i === 0 ? "bg-yellow-500 text-black" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium text-black">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="mb-3 text-sm text-yellow-600">{project.location}</p>
                  <p className="mb-4 text-gray-700">{project.description}</p>
                  <Link
                    href={`/projects/${i}`}
                    className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-500"
                  >
                    View Project Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "25+", label: "Years Experience" },
              { number: "50+", label: "Team Members" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-yellow-500">{stat.number}</p>
                <p className="text-lg text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">Ready to Start Your Project?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Contact us today to discuss your project needs and how we can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-yellow-500 px-6 py-3 font-medium text-black transition-colors hover:bg-yellow-400"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
