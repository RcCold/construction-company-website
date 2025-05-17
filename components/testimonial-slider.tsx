"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/images/testimonial1.jpg",
      content:
        "Working with Construction Co. was a fantastic experience. They transformed our outdated home into a modern masterpiece. Their attention to detail and commitment to quality exceeded our expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      image: "/images/testimonial2.jpg",
      content:
        "As a business owner, I needed a reliable contractor for our new office space. Construction Co. delivered on time and within budget. Their team was professional and responsive throughout the entire process.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Real Estate Developer",
      image: "/images/testimonial3.jpg",
      content:
        "I've worked with many construction companies over the years, and Construction Co. stands out for their professionalism and quality of work. They're now our go-to contractor for all development projects.",
      rating: 4,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <section className="bg-gray-900 py-16 md:py-24" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
          What Our Clients Say
        </h2>

        <div className="relative mx-auto max-w-4xl">
          {/* Testimonial Slide */}
          <div className="overflow-hidden rounded-lg bg-white p-8 shadow-lg">
            <div className="flex flex-col items-center md:flex-row md:items-start">
              <div className="mb-6 flex flex-shrink-0 flex-col items-center md:mb-0 md:mr-8">
                <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-center text-xl font-bold">{testimonials[currentIndex].name}</h3>
                <p className="text-center text-gray-600">{testimonials[currentIndex].role}</p>
                <div className="mt-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[currentIndex].rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div>
                <blockquote className="text-lg italic text-gray-700">"{testimonials[currentIndex].content}"</blockquote>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-md transition-colors hover:bg-yellow-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-3 w-3 rounded-full ${i === currentIndex ? "bg-yellow-500" : "bg-white/50"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-md transition-colors hover:bg-yellow-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
