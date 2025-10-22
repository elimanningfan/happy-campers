import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeaturedRVs } from "@/lib/rv-data";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Users, Calendar, ArrowRight, Check, Phone, Mail, Clock, Shield, Award, Compass } from "lucide-react";

export default function OptionAPage() {
  const featuredRVs = getFeaturedRVs();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Stats */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/scraped-images/rv-desert-highway-winding-road-mountains-bend-rentals.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">RV Rentals Bend Oregon</span>
              <span className="block text-secondary mt-2">Start Your Adventure Here</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-100">
              Premium motorhomes for exploring the Pacific Northwest, National Parks, and beyond.
              Your convenient Bend starting point for unlimited nationwide adventures.
            </p>
            <div className="mx-auto mt-8 max-w-md sm:flex sm:justify-center gap-4">
              <Link href="/rvs">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Available RVs
                </Button>
              </Link>
              <Link href="/inquiry">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative bg-white/95 backdrop-blur border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary">10+</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">Premium RVs</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary">2023-2024</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">Model Years</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary">130+</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">Nearby Campgrounds</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary">24/7</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">Emergency Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rent an RV? Universal Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Rent an RV?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the freedom and flexibility of RV travel without the commitment of ownership
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Easy Travel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No airport hassles, flight schedules, or hotel check-ins. Drive on your schedule with complete freedom to change plans mid-trip.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Luxury Accommodations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Full kitchens, private bathrooms, comfortable beds, and entertainment systems. All the comforts of home on wheels.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Freedom & Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Take your RV almost anywhere. Wake up at the beach, explore national parks, or visit wine country - all at your own pace.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Cost Advantage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Especially for families and longer trips, RV rentals are more economical than multiple hotel rooms and restaurant meals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured RVs */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Premium Fleet
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              2023-2024 luxury motorhomes ready for your adventure
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredRVs.map((rv) => (
              <Card key={rv.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={rv.images[0]}
                    alt={rv.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    From ${rv.pricePerDay}/night
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{rv.name}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Sleeps {rv.sleeps}
                    </span>
                    <span>{rv.type}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {rv.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {rv.highlights.slice(0, 2).map((highlight, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <div className="px-6 pb-6">
                  <Link href={`/rvs/${rv.slug}`} className="w-full">
                    <Button className="w-full" variant="outline">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/rvs">
              <Button size="lg">
                View All RVs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Where Will You Go? Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Where Will You Go?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your Bend starting point opens up unlimited destinations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/scraped-images/oregon-coast-sunset-rock-formation-haystack-beach.png"
                  alt="Oregon Coast"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Pacific Northwest</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Oregon Coast (3 hours)
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Portland & Columbia Gorge
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Washington State
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Willamette Valley Wine Country
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/scraped-images/teton-mountains-sunset-snow-peaks-wyoming-rv-destination.png"
                  alt="National Parks"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>National Parks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Crater Lake National Park
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Yellowstone & Grand Teton
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Yosemite National Park
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Grand Canyon & Southwest
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/scraped-images/cascade-mountains-highway-forest-snow-peaks-oregon-scenic-route.png"
                  alt="Festivals and Events"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Festivals & Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Oregon Jamboree Music Festival
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    4Peaks Music Festival
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Mt. Bachelor & Mt. Hood Skiing
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Harvest Hosts Network Access
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 font-semibold">
              130+ campgrounds within driving distance, thousands nationwide
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Happy Campers */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Happy Campers RV Rentals?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your trusted partner for RV adventures from Bend, Oregon
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Award className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Premium Fleet</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                All 2023-2024 model year motorhomes from trusted brands like Entegra, Winnebago, and Forest River. Luxury amenities, modern features, and impeccable maintenance.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Bend Location Advantage</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Easy pickup at our Boyd Acres facility. Central to I-5 & Highway 97. Quick access to coast, mountains, and desert. Perfect starting point for any direction.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Expert Support</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Comprehensive walkthrough training before departure. 24/7 emergency roadside assistance. Friendly team ready to answer questions anytime.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Flexible Booking</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Easy online reservations. Flexible cancellation policies. Seasonal pricing to fit your budget. Extended trip discounts available.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Full Insurance Options</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Comprehensive insurance packages available. Coverage for in-state and out-of-state travel. Peace of mind for your entire journey.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Compass className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Harvest Hosts Partnership</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Access to 5,000+ wineries, farms, breweries, and attractions. Free overnight stays at unique locations nationwide. Included with rentals.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transparent Seasonal Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              All-inclusive rates with no hidden fees
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-6 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase">Winter</p>
                <p className="mt-2 text-xs text-gray-600">Nov - Mar</p>
                <p className="mt-4 text-3xl font-bold text-primary">$200-250</p>
                <p className="text-sm text-gray-500">per night</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase">Spring</p>
                <p className="mt-2 text-xs text-gray-600">Apr - May</p>
                <p className="mt-4 text-3xl font-bold text-primary">$230-275</p>
                <p className="text-sm text-gray-500">per night</p>
              </div>
              <div className="p-6 text-center bg-primary/5">
                <p className="text-sm font-semibold text-primary uppercase">Summer</p>
                <p className="mt-2 text-xs text-gray-600">Jun - Sep</p>
                <p className="mt-4 text-3xl font-bold text-primary">$220-300</p>
                <p className="text-sm text-gray-500">per night</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase">Fall</p>
                <p className="mt-2 text-xs text-gray-600">October</p>
                <p className="mt-4 text-3xl font-bold text-primary">$230-275</p>
                <p className="text-sm text-gray-500">per night</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Rates vary by RV size and features. Multi-night discounts available.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about RV rentals from Bend
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How far can I take an RV rental from Bend?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Our RVs can travel anywhere in the continental United States and Canada! Many customers drive to California, Washington, National Parks in Wyoming and Utah, and beyond. We offer unlimited mileage options for extended trips.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What's included with your RV rentals?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                All rentals include: comprehensive orientation/walkthrough, basic kitchen supplies, linens and towels, camping chairs, RV toilet paper, cleaning supplies, and 24/7 emergency roadside assistance. Generator usage and mileage vary by rental package.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Can I take the RV to California, Washington, or Canada?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Absolutely! Our RVs are equipped for travel throughout North America. Many popular routes include the California coast (Highway 1), Seattle and Olympic Peninsula, Canadian Rockies, and cross-country road trips. Just let us know your travel plans.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How much does an RV rental cost?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Rates range from $200-300 per night depending on season, RV size, and amenities. Winter rates start at $200/night, peak summer ranges $220-300/night. Multi-night stays and extended trip discounts available. View our fleet for specific pricing.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Do I need special insurance for out-of-state travel?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                We offer comprehensive insurance packages that cover you for travel throughout the USA and Canada. Our insurance options include liability, collision, and comprehensive coverage suitable for interstate and international travel.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Do I need RV driving experience?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                No experience necessary! We provide a thorough orientation covering all systems, driving tips, and operation. Our team walks you through everything before you leave. Most renters feel comfortable after the first hour on the road.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What are your mileage policies?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                We offer flexible mileage packages including unlimited mileage options for longer trips. Standard rentals include generous mileage allowances with affordable per-mile rates for overages. Contact us to customize your mileage package.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What if I have a problem during my trip?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                We provide 24/7 emergency roadside assistance with every rental. Call our emergency line anytime for technical support, roadside help, or operational questions. We're here to ensure your trip goes smoothly.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Start Your RV Adventure?
            </h2>
            <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
              Browse our premium fleet of 2023-2024 motorhomes and discover where your journey will take you
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rvs">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  View Available RVs
                </Button>
              </Link>
              <Link href="/inquiry">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                  Request a Quote
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+15416405045" className="hover:text-secondary transition-colors">
                    541-640-5045
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:Kristina@BeaverCoachSales.com" className="hover:text-secondary transition-colors">
                    Kristina@BeaverCoachSales.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>62955 Boyd Acres Rd, Bend, OR 97701</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-white/90">
                <Clock className="h-5 w-5" />
                <span>Mon-Fri 8am-5pm | Closed Weekends</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
