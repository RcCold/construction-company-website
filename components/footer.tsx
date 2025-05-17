import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Construction Co.</h3>
            <p className="mb-4 text-gray-400">
              Building excellence since 2000. Quality construction services for residential and commercial projects.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 transition-colors hover:text-yellow-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-yellow-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-yellow-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-yellow-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 transition-colors hover:text-yellow-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Our Services</h3>
            <ul className="space-y-2">
              {[
                { href: "/services#residential", label: "Residential Construction" },
                { href: "/services#commercial", label: "Commercial Projects" },
                { href: "/services#renovations", label: "Renovations" },
                { href: "/services#architectural", label: "Architectural Design" },
                { href: "/services#interior", label: "Interior Design" },
              ].map((service, i) => (
                <li key={i}>
                  <Link href={service.href} className="text-gray-400 transition-colors hover:text-yellow-400">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-gray-400">
                  123 Construction Ave
                  <br />
                  Building City, BC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-yellow-500" />
                <Link href="tel:+1234567890" className="text-gray-400 transition-colors hover:text-yellow-400">
                  +123 456 7890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-yellow-500" />
                <Link
                  href="mailto:info@constructionco.com"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  info@constructionco.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Construction Co. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-gray-400 transition-colors hover:text-yellow-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-400 transition-colors hover:text-yellow-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
