import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeaturedRVs, rvData } from "@/lib/rv-data";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Shield, Phone, MapPin, Clock, TrendingUp, Users, DollarSign } from "lucide-react";

export default function OptionCPage() {
  const allRVs = rvData;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero - Direct Value Prop */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Premium RV Rentals in Bend, Oregon
              </h1>
              <p className="mt-6 text-2xl text-green-100 font-medium">
                Drive anywhere. Return here. It's that simple.
              </p>

              {/* 4 Bold USPs */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                  <p className="text-white font-bold text-lg">10+ Luxury</p>
                  <p className="text-green-100 text-sm">Motorhomes Ready</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                  <p className="text-white font-bold text-lg">Unlimited</p>
                  <p className="text-green-100 text-sm">Mileage Options</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                  <p className="text-white font-bold text-lg">From $200/Night</p>
                  <p className="text-green-100 text-sm">All-Inclusive</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                  <p className="text-white font-bold text-lg">Travel West</p>
                  <p className="text-green-100 text-sm">Coast & Beyond</p>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/rvs" className="flex-1">
                  <Button size="lg" variant="secondary" className="w-full text-lg">
                    Check Availability
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/inquiry" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full text-lg bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                    Get Instant Quote
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 flex flex-wrap gap-4 items-center text-white/90 text-sm">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Full Insurance</span>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/original-happy-campers/class-a-motorhome-driving-oregon-highway-forest.jpg"
                alt="Premium RV Rentals Bend Oregon"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Trip Planner Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quick Trip Estimator</h2>
            <p className="text-gray-600">Get an instant sense of your adventure</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Users className="inline h-4 w-4 mr-1" />
                  Travelers
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>2 people</option>
                  <option>4 people</option>
                  <option>6 people</option>
                  <option>8+ people</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Duration
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Weekend (2-3 nights)</option>
                  <option>Week (4-7 nights)</option>
                  <option>Extended (8-14 nights)</option>
                  <option>Long-term (15+ nights)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Destination
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Oregon Coast</option>
                  <option>National Parks</option>
                  <option>Wine Country</option>
                  <option>Multi-state Tour</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <Link href="/rvs">
              <Button size="lg" className="w-full text-lg">
                Show Me Available RVs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured RVs - Expanded Grid with Availability */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Available RVs
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Book online in minutes - no back and forth needed
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allRVs.slice(0, 6).map((rv) => (
              <Card key={rv.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={rv.images[0]}
                    alt={rv.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      ${rv.pricePerDay}/night
                    </span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Available Now
                    </span>
                  </div>
                  {rv.pricePerDay <= 275 && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-secondary text-white px-2 py-1 rounded text-xs font-semibold">
                        Best Value
                      </span>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-1">{rv.name}</CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <span className="font-semibold text-primary">Sleeps {rv.sleeps}</span>
                    <span className="text-sm">{rv.length} • {rv.type}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                      <Check className="h-3 w-3" />
                      Unlimited Mileage
                    </span>
                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                      <Check className="h-3 w-3" />
                      Full Kitchen
                    </span>
                  </div>
                  <Link href={`/rvs/${rv.slug}`}>
                    <Button className="w-full" size="sm">
                      View Details & Book
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/rvs">
              <Button size="lg" variant="outline">
                View All {allRVs.length} Available RVs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Logistics Bar */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900 text-sm">Unlimited Mileage</p>
              <p className="text-xs text-gray-600 mt-1">Options Available</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900 text-sm">Full Insurance</p>
              <p className="text-xs text-gray-600 mt-1">Available</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900 text-sm">24/7 Support</p>
              <p className="text-xs text-gray-600 mt-1">Roadside Assistance</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900 text-sm">Travel All 50 States</p>
              <p className="text-xs text-gray-600 mt-1">Plus Canada</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900 text-sm">Easy Bend Pickup</p>
              <p className="text-xs text-gray-600 mt-1">Quick Orientation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Clear, Upfront Pricing
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              No surprises. No hidden fees. Just great rates.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-6 text-white">
                <div className="text-center">
                  <div className="text-sm font-semibold uppercase tracking-wider mb-2">Winter</div>
                  <div className="text-4xl font-bold mb-1">$200-250</div>
                  <div className="text-sm opacity-90">per night</div>
                  <div className="text-xs opacity-75 mt-2">Nov - Mar</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold uppercase tracking-wider mb-2">Spring</div>
                  <div className="text-4xl font-bold mb-1">$230-275</div>
                  <div className="text-sm opacity-90">per night</div>
                  <div className="text-xs opacity-75 mt-2">Apr - May</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg py-4 -my-4">
                  <div className="text-sm font-semibold uppercase tracking-wider mb-2">Summer</div>
                  <div className="text-4xl font-bold mb-1">$220-300</div>
                  <div className="text-sm opacity-90">per night</div>
                  <div className="text-xs opacity-75 mt-2">Jun - Sep</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold uppercase tracking-wider mb-2">Fall</div>
                  <div className="text-4xl font-bold mb-1">$230-275</div>
                  <div className="text-sm opacity-90">per night</div>
                  <div className="text-xs opacity-75 mt-2">October</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h3 className="text-white font-semibold mb-4 text-center">What's Included:</h3>
                <div className="grid md:grid-cols-3 gap-3 text-white text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span>Comprehensive orientation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span>Kitchen & bedding supplies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span>24/7 emergency support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span>Harvest Hosts access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span>Camping chairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span>Cleaning supplies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Extended trip discounts available. Contact us for custom quotes.
            </p>
            <Link href="/inquiry">
              <Button size="lg">
                Get Your Custom Quote
                <DollarSign className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion - 5 Critical Questions */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quick Answers
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Everything you need to know before booking
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-lg shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50">
                <h3 className="font-semibold text-gray-900">Can I take the RV out of Oregon?</h3>
                <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Absolutely! Our RVs can travel anywhere in the continental USA and Canada. Many customers explore the Oregon Coast, California, Washington, National Parks, and beyond. We offer unlimited mileage options for longer trips.
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50">
                <h3 className="font-semibold text-gray-900">What's included in the rental price?</h3>
                <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Every rental includes: comprehensive walkthrough training, basic kitchen supplies, linens and towels, camping chairs, RV toilet paper, cleaning supplies, and 24/7 roadside assistance. Optional add-ons available.
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50">
                <h3 className="font-semibold text-gray-900">Do I need RV experience?</h3>
                <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                No experience needed! We provide thorough orientation covering all systems, driving tips, and operation. Our team walks you through everything. Most first-time renters feel comfortable within the first hour on the road.
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50">
                <h3 className="font-semibold text-gray-900">What insurance do I need for long trips?</h3>
                <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                We offer comprehensive insurance packages covering travel throughout USA and Canada. Options include liability, collision, and comprehensive coverage. We'll help you choose the right protection for your journey.
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50">
                <h3 className="font-semibold text-gray-900">What are your mileage policies?</h3>
                <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                We offer flexible mileage packages including unlimited mileage options for extended trips. Standard rentals include generous mileage allowances with affordable per-mile rates for overages. Contact us to customize your package.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Book your RV in minutes and start your adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/rvs">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Check Availability
              </Button>
            </Link>
            <Link href="/inquiry">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                Get Instant Quote
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row gap-6 justify-center text-white text-sm">
              <a href="tel:+15416405045" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-5 w-5" />
                <span>541-640-5045</span>
              </a>
              <a href="mailto:Kristina@BeaverCoachSales.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <span>Kristina@BeaverCoachSales.com</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>62955 Boyd Acres Rd, Bend, OR 97701</span>
              </span>
            </div>
            <div className="mt-4 text-white/90 text-sm">
              Mon-Fri 8am-5pm | Closed Weekends
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
