import {
  ArrowRight,
  HomeIcon,
  MapPin,
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-12  border-b">
          <div className="container mx-auto items-center grid gap-8 md:grid-cols-2 px-4">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                Find Verified Housing & Connect with Fellow Corps Members
              </h1>

              <p className="text-lg text-gray-600 text-center md:text-left">
                Navigate your NYSC service year with confidence using our
                community-driven platform for verified housing, shared
                experiences, and location reviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/dashboard">
                  <button className="bg-[#008000] hover:bg-[#228B22] text-white px-6 py-3 rounded-md text-sm font-medium cursor-pointer w-full">
                    Find Housing Now
                  </button>
                </Link>
                <Link to="/dashboard">
                  <button className="border border-gray-300 bg-white hover:bg-gray-200 px-6 py-3 rounded-md text-sm font-medium cursor-pointer w-full">
                    Explore Locations
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[500px] lg:h-[600px]">
              <img
                src={img1}
                alt="Corps members finding housing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              How can CorperConnect help during your service year?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-start gap-3 p-6 rounded-lg border cursor-pointer">
                <div className="p-2 rounded-full bg-emerald-100 text-[#008000]">
                  <HomeIcon className="h-6 w-6 " />
                </div>
                <h3 className="text-lg font-semibold">
                  Verified Housing Options
                </h3>
                <p className="text-gray-600">
                  Find safe, affordable housing options verified by other corps
                  members in your service location.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 p-6 rounded-lg border cursor-pointer">
                <div className="p-2 rounded-full bg-emerald-100 text-[#008000]">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Location Reviews</h3>
                <p className="text-gray-600">
                  Get insights on orientation camps, PPAs, and NYSC offices from
                  those who've been there.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 p-6 rounded-lg border cursor-pointer">
                <div className="p-2 rounded-full bg-emerald-100 text-[#008000]">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Community Support</h3>
                <p className="text-gray-600">
                  Connect with fellow corps members in your area for advice,
                  support, and friendship.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 p-6 rounded-lg border cursor-pointer">
                <div className="p-2 rounded-full bg-emerald-100 text-[#008000]">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Survival Tips</h3>
                <p className="text-gray-600">
                  Access practical advice and tips from current and past corps
                  members to thrive during your service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Ready to make your NYSC experience better?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Join thousands of corps members already using CorperConnect to
              find housing and build community during their service year.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[600px] lg:h-[700px]">
                <img
                  src={img2}
                  alt="Corps members finding housing"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008000] text-white flex items-center justify-center font-medium">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Create your account
                    </h3>
                    <p className="text-gray-600">
                      Sign up with your email and verify your NYSC status to
                      join our trusted community.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008000] text-white flex items-center justify-center font-medium">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Find your location
                    </h3>
                    <p className="text-gray-600">
                      Search for your service state, local government, or
                      specific areas to find relevant information.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008000] text-white flex items-center justify-center font-medium">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Explore housing options
                    </h3>
                    <p className="text-gray-600">
                      Browse verified housing listings, read reviews, and
                      connect with landlords or current tenants.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008000] text-white flex items-center justify-center font-medium">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Connect with the community
                    </h3>
                    <p className="text-gray-600">
                      Join location-based groups to share experiences and get
                      support from fellow corps members.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What Corps Members Say About Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border bg-white">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-600">
                  "CorperConnect saved me so much stress! I found affordable
                  housing near my PPA within days of being posted. The landlord
                  was already verified by other corps members."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200">
                    <img src={pro1} alt="" />
                  </div>
                  <div>
                    <p className="font-medium">Chioma A.</p>
                    <p className="text-sm text-gray-600">
                      Serving in Lagos State
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border bg-white">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-600">
                  "The location reviews were incredibly helpful. I knew exactly
                  what to expect at my orientation camp and found a great
                  community of corps members in my area."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200">
                    <img src={pro2} alt="" />
                  </div>
                  <div>
                    <p className="font-medium">Emeka O.</p>
                    <p className="text-sm text-gray-600">
                      Served in Kaduna State
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border bg-white">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-600">
                  "As a female corps member, safety was my priority.
                  CorperConnect helped me find secure housing and connect with
                  other female corps members in my area for support."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200">
                    <img src={pro3} alt="" />
                  </div>
                  <div>
                    <p className="font-medium">Amina B.</p>
                    <p className="text-sm text-gray-600">
                      Serving in Rivers State
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Start your NYSC journey with confidence
              </h2>
              <p className="text-lg text-gray-600">
                Join CorperConnect today and connect with thousands of corps
                members across Nigeria.
              </p>

              <div className="max-w-md mx-auto p-6 bg-white rounded-xl border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Create your free account
                </h3>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="fullName" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="stateOfDeployment"
                      className="text-sm font-medium"
                    >
                      State of Deployment
                    </label>
                    <select
                      id="stateOfDeployment"
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="">Select your state</option>
                      <option value="lagos">Lagos</option>
                      <option value="abuja">Abuja</option>
                      <option value="rivers">Rivers</option>
                      <option value="kaduna">Kaduna</option>
                      {/* Add more states */}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#008000] hover:bg-[#228B22] text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    Sign Up Free
                  </button>

                  <p className="text-xs text-center text-gray-600">
                    By signing up, you agree to our Terms of Service and Privacy
                    Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Choose CorperConnect?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 p-2 rounded-full bg-emerald-100 text-[#008000] h-fit">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Verified Listings
                  </h3>
                  <p className="text-gray-600">
                    All housing listings are verified by our team and reviewed
                    by corps members who have lived there, ensuring safety and
                    accuracy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 p-2 rounded-full bg-emerald-100 text-[#008000] h-fit">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Community-Driven
                  </h3>
                  <p className="text-gray-600">
                    Built by corps members for corps members, our platform
                    focuses on creating supportive communities in every service
                    location.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 p-2 rounded-full bg-emerald-100 text-[#008000] h-fit">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Location-Based Insights
                  </h3>
                  <p className="text-gray-600">
                    Get detailed information about your service location, from
                    transportation options to essential services and local tips.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 p-2 rounded-full bg-emerald-100 text-[#008000] h-fit">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Completely Free
                  </h3>
                  <p className="text-gray-600">
                    Access all our core features at no cost. We're committed to
                    supporting corps members throughout their service year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">
                  What is CorperConnect?
                </h3>
                <p className="text-gray-600">
                  CorperConnect is a platform designed specifically for NYSC
                  corps members to find verified housing, share experiences, and
                  connect with fellow corps members in their service locations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">
                  How do you verify housing listings?
                </h3>
                <p className="text-gray-600">
                  We verify listings through a combination of physical visits by
                  our team, documentation checks, and reviews from corps members
                  who have previously lived there or are currently residing at
                  the location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">
                  Is CorperConnect available in all states?
                </h3>
                <p className="text-gray-600">
                  Yes, CorperConnect is available across all 36 states and the
                  FCT. However, the density of listings and community members
                  varies by location, with more urban areas typically having
                  more options.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">
                  How do I verify my NYSC status?
                </h3>
                <p className="text-gray-600">
                  After signing up, you'll be prompted to upload a photo of your
                  NYSC call-up letter or ID card. Our team will verify this
                  information within 24 hours to activate your full account.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">
                  Can I list my own accommodation?
                </h3>
                <p className="text-gray-600">
                  Yes! If you're a corps member with a spare room or know of
                  good accommodation options, you can create a listing. All
                  listings go through our verification process before being
                  published.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </main>
  );
}
