import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HomeIcon,
  MapPin,
  Minus,
  Plus,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";
import img1 from "@/assets/image1.png";
import img2 from "@/assets/image2.png";
import Footer from "@/components/Footer";
import pro1 from "@/assets/profile1.png";
import pro2 from "@/assets/profile2.png";
import pro3 from "@/assets/profile3.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react";


function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      className="bg-white rounded-lg border overflow-hidden"
      variants={scaleUp}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.button
        className="w-full p-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: "rgba(0, 128, 0, 0.05)" }}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <motion.div className="text-[#008000] flex-shrink-0" initial={false} animate={{ rotate: isOpen ? 180 : 0 }}>
          {isOpen ? (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <Minus className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <Plus className="h-5 w-5" />
            </motion.div>
          )}
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function TestimonialsCarouselComponent() {
  const testimonials = [
    {
      text: "CorperConnect saved me so much stress! I found affordable housing near my PPA within days of being posted. The landlord was already verified by other corps members.",
      name: "Chioma A.",
      location: "Serving in Lagos State",
      image: pro1,
    },
    {
      text: "The location reviews were incredibly helpful. I knew exactly what to expect at my orientation camp and found a great community of corps members in my area.",
      name: "Emeka O.",
      location: "Served in Kaduna State",
      image: pro2,
    },
    {
      text: "As a female corps member, safety was my priority. CorperConnect helped me find secure housing and connect with other female corps members in my area for support.",
      name: "Amina B.",
      location: "Serving in Rivers State",
      image: pro3,
    },
    {
      text: "The community support feature connected me with corps members who helped me navigate the local transportation system and find the best places to eat.",
      name: "Tunde K.",
      location: "Serving in Oyo State",
      image: pro2,
    },
    {
      text: "I was anxious about my posting, but the survival tips from past corps members made my transition smooth. Found great accommodation within my budget too!",
      name: "Fatima M.",
      location: "Serving in Kano State",
      image: pro3,
    },
    {
      text: "The verified housing listings saved me from scammers. I connected with a landlord through CorperConnect and secured a great place before even arriving.",
      name: "David E.",
      location: "Served in Enugu State",
      image: pro2,
    },
    {
      text: "Being posted to a rural area was challenging, but CorperConnect helped me find other corps members nearby. We now share transportation to our monthly clearance.",
      name: "Grace O.",
      location: "Serving in Plateau State",
      image: pro1,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  // Track window width for responsive display
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Determine how many items to show based on screen size
  const itemsToShow = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3

  useEffect(() => {
    const maxIndex = Math.max(0, testimonials.length - itemsToShow)

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length, itemsToShow])

  return (
    <div className="relative">
      <motion.div
        className="flex gap-8 pb-12"
        animate={{
          x:
            windowWidth < 768
              ? `-${currentIndex * 100}%`
              : windowWidth < 1024
                ? `-${currentIndex * 50}%`
                : `-${currentIndex * (100 / 3)}%`,
        }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        ref={carouselRef}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="min-w-[calc(100%-2rem)] md:min-w-[calc(50%-1.5rem)] lg:min-w-[calc(33.333%-1.5rem)] p-6 rounded-xl border bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mb-6 text-gray-600">"{testimonial.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                <img src={testimonial.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Carousel indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.max(1, testimonials.length - (itemsToShow - 1)) }).map((_, index) => (
          <motion.button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${currentIndex === index ? "bg-[#008000]" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <motion.button
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md text-[#008000] z-10"
        onClick={() => {
          const maxIndex = Math.max(0, testimonials.length - itemsToShow)
          setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ChevronLeft className="h-5 w-5" />
      </motion.button>
      <motion.button
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md text-[#008000] z-10"
        onClick={() => {
          const maxIndex = Math.max(0, testimonials.length - itemsToShow)
          setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ChevronRight className="h-5 w-5" />
      </motion.button>
    </div>
  )
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const slideIn = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const slideRight = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.main
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main className="flex-1">
            {/* Hero Section */}
            <section id="home" className="py-12 border-b overflow-hidden">
              <div className="container mx-auto items-center grid gap-8 md:grid-cols-2 px-4">
                <motion.div
                  className="space-y-6 md:space-y-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                >
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left"
                    variants={fadeIn}
                  >
                    Find Verified Housing & Connect with Fellow Corps Members
                  </motion.h1>

                  <motion.p className="text-lg text-gray-600 text-center md:text-left" variants={fadeIn}>
                    Navigate your NYSC service year with confidence using our community-driven platform for verified
                    housing, shared experiences, and location reviews.
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    variants={staggerContainer}
                  >
                    <motion.div variants={fadeIn}>
                      <Link to="/dashboard/locations">
                        <motion.button
                          className="bg-[#008000] hover:bg-[#228B22] text-white px-6 py-3 rounded-md text-sm font-medium cursor-pointer w-full"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Explore Locations
                        </motion.button>
                      </Link>
                    </motion.div>
                    <motion.div variants={fadeIn}>
                      <Link to="/dashboard/housing">
                        <motion.button
                          className="border border-gray-300 bg-white hover:bg-gray-200 px-6 py-3 rounded-md text-sm font-medium cursor-pointer w-full"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Find Housing Now
                        </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="relative rounded-xl overflow-hidden h-[300px] md:h-[500px] lg:h-[600px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideRight}
                >
                  <motion.img
                    src={img1}
                    alt="Corps members finding housing"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                  />
                </motion.div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-center mb-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                >
                  How can CorperConnect help during your service year?
                </motion.h2>

                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                >
                  {[
                    {
                      icon: <HomeIcon className="h-6 w-6" />,
                      title: "Verified Housing Options",
                      description:
                        "Find safe, affordable housing options verified by other corps members in your service location.",
                    },
                    {
                      icon: <MapPin className="h-6 w-6" />,
                      title: "Location Reviews",
                      description:
                        "Get insights on orientation camps, PPAs, and NYSC offices from those who've been there.",
                    },
                    {
                      icon: <Users className="h-6 w-6" />,
                      title: "Community Support",
                      description:
                        "Connect with fellow corps members in your area for advice, support, and friendship.",
                    },
                    {
                      icon: <Star className="h-6 w-6" />,
                      title: "Survival Tips",
                      description:
                        "Access practical advice and tips from current and past corps members to thrive during your service.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-start gap-3 p-6 rounded-lg border cursor-pointer"
                      variants={scaleUp}
                      whileHover={{
                        y: -10,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-2 rounded-full bg-emerald-100 text-[#008000]">{feature.icon}</div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-16 md:py-24 bg-slate-50">
              <div className="container mx-auto px-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                    Ready to make your NYSC experience better?
                  </h2>
                  <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Join thousands of corps members already using CorperConnect to find housing and build community
                    during their service year.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    className="relative rounded-xl overflow-hidden h-[400px] md:h-[600px] lg:h-[700px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideIn}
                  >
                    <motion.img
                      src={img2}
                      alt="Corps members finding housing"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5 }}
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                  >
                    {[
                      {
                        step: 1,
                        title: "Create your account",
                        description:
                          "Sign up with your email and verify your NYSC status to join our trusted community.",
                      },
                      {
                        step: 2,
                        title: "Find your location",
                        description:
                          "Search for your service state, local government, or specific areas to find relevant information.",
                      },
                      {
                        step: 3,
                        title: "Explore housing options",
                        description:
                          "Browse verified housing listings, read reviews, and connect with landlords or current tenants.",
                      },
                      {
                        step: 4,
                        title: "Connect with the community",
                        description:
                          "Join location-based groups to share experiences and get support from fellow corps members.",
                      },
                    ].map((step, index) => (
                      <motion.div key={index} className="flex gap-4" variants={fadeIn}>
                        <motion.div
                          className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008000] text-white flex items-center justify-center font-medium"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.step}
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-16 md:py-24 overflow-hidden">
              <div className="container mx-auto px-4">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-center mb-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                >
                  What Corps Members Say About Us
                </motion.h2>

                <TestimonialsCarouselComponent />
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-emerald-50">
              <div className="container mx-auto px-4">
                <motion.div
                  className="max-w-3xl mx-auto text-center space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                >
                  <h2 className="text-2xl md:text-3xl font-bold">Start your NYSC journey with confidence</h2>
                  <p className="text-lg text-gray-600">
                    Join CorperConnect today and connect with thousands of corps members across Nigeria.
                  </p>

                  <motion.div
                    className="max-w-md mx-auto p-6 bg-white rounded-xl border shadow-sm"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Create your free account</h3>
                    <form className="space-y-4">
                      <div className="grid gap-2">
                        <label htmlFor="fullName" className="text-sm font-medium">
                          Full Name
                        </label>
                        <motion.input
                          type="text"
                          id="fullName"
                          placeholder="Enter your full name"
                          className="w-full px-3 py-2 border rounded-md"
                          whileFocus={{ scale: 1.01, borderColor: "#008000" }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>

                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <motion.input
                          type="email"
                          id="email"
                          placeholder="your.email@example.com"
                          className="w-full px-3 py-2 border rounded-md"
                          whileFocus={{ scale: 1.01, borderColor: "#008000" }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>

                      <div className="grid gap-2">
                        <label htmlFor="stateOfDeployment" className="text-sm font-medium">
                          State of Deployment
                        </label>
                        <motion.select
                          id="stateOfDeployment"
                          className="w-full px-3 py-2 border rounded-md"
                          whileFocus={{ scale: 1.01, borderColor: "#008000" }}
                          transition={{ duration: 0.2 }}
                        >
                          <option value="">Select your state</option>
                          <option value="lagos">Lagos</option>
                          <option value="abuja">Abuja</option>
                          <option value="rivers">Rivers</option>
                          <option value="kaduna">Kaduna</option>
                          {/* Add more states */}
                        </motion.select>
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full bg-[#008000] hover:bg-[#228B22] text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Sign Up Free
                      </motion.button>

                      <p className="text-xs text-center text-gray-600">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </form>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-center mb-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                >
                  Why Choose CorperConnect?
                </motion.h2>

                <motion.div
                  className="grid md:grid-cols-2 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                >
                  {[
                    {
                      icon: <Shield className="h-6 w-6" />,
                      title: "Verified Listings",
                      description:
                        "All housing listings are verified by our team and reviewed by corps members who have lived there, ensuring safety and accuracy.",
                    },
                    {
                      icon: <Users className="h-6 w-6" />,
                      title: "Community-Driven",
                      description:
                        "Built by corps members for corps members, our platform focuses on creating supportive communities in every service location.",
                    },
                    {
                      icon: <MapPin className="h-6 w-6" />,
                      title: "Location-Based Insights",
                      description:
                        "Get detailed information about your service location, from transportation options to essential services and local tips.",
                    },
                    {
                      icon: <ArrowRight className="h-6 w-6" />,
                      title: "Completely Free",
                      description:
                        "Access all our core features at no cost. We're committed to supporting corps members throughout their service year.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      variants={fadeIn}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="flex-shrink-0 p-2 rounded-full bg-emerald-100 text-[#008000] h-fit"
                        whileHover={{ scale: 1.2, backgroundColor: "#008000", color: "#ffffff" }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 bg-slate-50">
              <div className="container mx-auto px-4">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-center mb-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                >
                  Frequently Asked Questions
                </motion.h2>

                <motion.div
                  className="max-w-3xl mx-auto space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                >
                  {[
                    {
                      question: "What is CorperConnect?",
                      answer:
                        "CorperConnect is a platform designed specifically for NYSC corps members to find verified housing, share experiences, and connect with fellow corps members in their service locations.",
                    },
                    {
                      question: "How do you verify housing listings?",
                      answer:
                        "We verify listings through a combination of physical visits by our team, documentation checks, and reviews from corps members who have previously lived there or are currently residing at the location.",
                    },
                    {
                      question: "Is CorperConnect available in all states?",
                      answer:
                        "Yes, CorperConnect is available across all 36 states and the FCT. However, the density of listings and community members varies by location, with more urban areas typically having more options.",
                    },
                    {
                      question: "How do I verify my NYSC status?",
                      answer:
                        "After signing up, you'll be prompted to upload a photo of your NYSC call-up letter or ID card. Our team will verify this information within 24 hours to activate your full account.",
                    },
                    {
                      question: "Can I list my own accommodation?",
                      answer:
                        "Yes! If you're a corps member with a spare room or know of good accommodation options, you can create a listing. All listings go through our verification process before being published.",
                    },
                    {
                      question: "Do I need to pay to use CorperConnect?",
                      answer:
                        "No, CorperConnect is completely free for all corps members. We believe in supporting your service year journey without adding financial burden.",
                    },
                    {
                      question: "How quickly can I find housing through CorperConnect?",
                      answer:
                        "Many corps members find suitable housing within 1-2 weeks of joining. In popular areas with many listings, you might find options within days.",
                    },
                  ].map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
                  ))}
                </motion.div>
              </div>
            </section>
          </main>
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  )
}
