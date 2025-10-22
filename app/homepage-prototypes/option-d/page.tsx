import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeaturedRVs } from "@/lib/rv-data";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, MapPin, Users, Calendar, Phone, Mail, Clock, Shield, Award, Compass, TrendingUp, Heart } from "lucide-react";

export default function OptionDPage() {
  const featuredRVs = getFeaturedRVs();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero - Freedom Angle */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/original-happy-campers/rv-ocean-view-adirondack-chairs-pacific-shores-oregon-coast.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              RV Rentals Bend Oregon
            </h1>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-secondary">
              Your Adventure Starts Here
            </h2>
            <p className="mt-6 text-xl text-gray-100 leading-relaxed">
              Luxury motorhomes for the Oregon Coast, National Parks, wine country, and wherever the road takes you
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-white/90 text-lg">
              <MapPin className="h-6 w-6 text-secondary" />
              <span className="font-semibold">Unlimited destinations. One convenient pickup location.</span>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/rvs">
                <Button size="lg" className="text-lg">
                  Browse Our Fleet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/inquiry">
                <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Map graphic overlay */}
        <div className="relative bg-white/95 backdrop-blur py-8 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Your Central Oregon Starting Point
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>3 hours to Oregon Coast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>4 hours to Portland</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Central to I-5 & Highway 97</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The RV Rental Difference - 4 Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The RV Rental Difference
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Why thousands choose RV adventures over traditional travel
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center border-2">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Compass className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Travel Your Way</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                No flight schedules or hotel check-ins. No rushing to catch connections. Travel on your timeline with complete freedom to explore.
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Comfort Everywhere</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Full kitchen, private bathroom, comfortable beds - all on wheels. Home comfort in the most beautiful locations.
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Spontaneous Freedom</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Found an amazing spot? Stay longer. Want to change your route? Go for it. RV travel adapts to your desires.
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Cost Effective</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Especially for families and extended trips. One rental replaces hotels, restaurants, and entertainment costs.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured RVs */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Premium Fleet
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              2023-2024 luxury motorhomes from trusted brands
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredRVs.map((rv) => (
              <Card key={rv.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-56 w-full">
                  <Image
                    src={rv.images[0]}
                    alt={rv.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ${rv.pricePerDay}/night
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{rv.name}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Sleeps {rv.sleeps}
                    </span>
                    <span>•</span>
                    <span>{rv.type}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {rv.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {rv.highlights.slice(0, 2).map((highlight, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Link href={`/rvs/${rv.slug}`}>
                    <Button className="w-full" variant="outline">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/rvs">
              <Button size="lg">
                View All Available RVs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Routes from Bend */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular Routes from Bend
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Proven itineraries to inspire your journey
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/scraped-images/oregon-coast-sunset-rock-formation-haystack-beach.png"
                  alt="Oregon Coast Loop"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Oregon Coast Loop</CardTitle>
                <CardDescription>3-5 days • 400-600 miles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Bend → Newport → Cannon Beach → Tillamook → Lincoln City → Bend. Explore lighthouses, tide pools, coastal towns, and stunning ocean views.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Beaches</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Lighthouses</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Seafood</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/scraped-images/teton-mountains-sunset-snow-peaks-wyoming-rv-destination.png"
                  alt="National Parks Circuit"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>National Parks Circuit</CardTitle>
                <CardDescription>7-10 days • 1,200-1,500 miles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Bend → Crater Lake → Redwood National Park → Lassen Volcanic → Bend. Or go northeast to Yellowstone and Grand Teton. Epic scenery guaranteed.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">Mountains</span>
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">Wildlife</span>
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">Hiking</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/scraped-images/cascade-mountains-highway-forest-snow-peaks-oregon-scenic-route.png"
                  alt="Pacific Northwest Explorer"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Pacific Northwest Explorer</CardTitle>
                <CardDescription>5-7 days • 800-1,000 miles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Bend → Portland → Columbia River Gorge → Mt. St. Helens → Seattle → Olympic Peninsula → Bend. Mountains, waterfalls, and urban adventures.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">Cities</span>
                  <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">Waterfalls</span>
                  <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">Mountains</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/scraped-images/oregon-wine-country-rv-trips-vineyard-illustration.png"
                  alt="California Wine Country"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>California Wine Country</CardTitle>
                <CardDescription>7-10 days • 1,000-1,400 miles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Bend → Willamette Valley → Napa Valley → Sonoma → Oregon Coast → Bend. Wine tasting, farm-to-table dining, and Harvest Hosts stays.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-full">Wine</span>
                  <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-full">Culinary</span>
                  <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-full">Scenic</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center p-6 bg-gray-50 rounded-lg">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Or Create Your Own Route - You're in Control
            </p>
            <p className="text-gray-600">
              These are just suggestions. With our flexible rental terms and unlimited mileage options, you can design your perfect adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Why Rent From Happy Campers - 5 Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Rent From Happy Campers?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your trusted RV rental partner in Bend, Oregon
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2">
              <CardHeader>
                <Award className="w-10 h-10 text-primary mb-3" />
                <CardTitle>Modern Fleet</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-3">Only 2023-2024 luxury motorhomes from Entegra, Winnebago, and Forest River.</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Premium build quality
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Latest safety features
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Meticulously maintained
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <MapPin className="w-10 h-10 text-primary mb-3" />
                <CardTitle>No Hassle Logistics</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-3">Easy Bend pickup and return with flexible scheduling.</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Convenient Boyd Acres location
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Simple pickup process
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Flexible rental periods
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-3" />
                <CardTitle>True Support</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-3">Comprehensive training and 24/7 assistance throughout your journey.</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Full walkthrough orientation
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    24/7 emergency line
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Expert advice anytime
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Compass className="w-10 h-10 text-primary mb-3" />
                <CardTitle>Travel Freedom</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-3">Unlimited mileage options and freedom to travel anywhere.</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    USA & Canada travel
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Unlimited mileage packages
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Route flexibility
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-3" />
                <CardTitle>Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-3">Clear seasonal rates with no hidden fees or surprises.</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Seasonal pricing structure
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    All-inclusive packages
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Extended trip discounts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Heart className="w-10 h-10 text-primary mb-3" />
                <CardTitle>Local Expertise</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-3">Central Oregon locals who know the best routes and hidden gems.</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Route recommendations
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Campground suggestions
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Harvest Hosts access
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seasonal Pricing Table */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Seasonal Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Transparent rates that fit your budget
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden border">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-8 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Winter</p>
                <p className="mt-2 text-xs text-gray-600">Nov - Mar</p>
                <p className="mt-6 text-4xl font-bold text-primary">$200-250</p>
                <p className="text-sm text-gray-500 mt-1">per night</p>
                <p className="mt-4 text-xs text-gray-600">Perfect for ski trips</p>
              </div>
              <div className="p-8 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Spring</p>
                <p className="mt-2 text-xs text-gray-600">Apr - May</p>
                <p className="mt-6 text-4xl font-bold text-primary">$230-275</p>
                <p className="text-sm text-gray-500 mt-1">per night</p>
                <p className="mt-4 text-xs text-gray-600">Wildflowers blooming</p>
              </div>
              <div className="p-8 text-center bg-primary/5">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">Summer</p>
                <p className="mt-2 text-xs text-gray-600">Jun - Sep</p>
                <p className="mt-6 text-4xl font-bold text-primary">$220-300</p>
                <p className="text-sm text-gray-500 mt-1">per night</p>
                <p className="mt-4 text-xs text-gray-600">Peak adventure season</p>
              </div>
              <div className="p-8 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Fall</p>
                <p className="mt-2 text-xs text-gray-600">October</p>
                <p className="mt-6 text-4xl font-bold text-primary">$230-275</p>
                <p className="text-sm text-gray-500 mt-1">per night</p>
                <p className="mt-4 text-xs text-gray-600">Beautiful foliage</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3 text-center">What's Included:</h3>
            <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Comprehensive orientation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Kitchen supplies & utensils</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Linens & towels</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Camping chairs</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                <span>24/7 emergency support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Harvest Hosts access</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>Multi-night discounts available. Contact us for extended trip quotes.</p>
          </div>
        </div>
      </section>

      {/* FAQ + Blog Preview Combo */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How far can I travel with your RVs?</h3>
                  <p className="text-gray-600 text-sm">
                    Anywhere in the continental USA and Canada! We offer unlimited mileage options for extended trips.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What's your cancellation policy?</h3>
                  <p className="text-gray-600 text-sm">
                    We offer flexible cancellation up to 30 days before your rental date. Contact us for specific terms.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Do you provide training for first-time renters?</h3>
                  <p className="text-gray-600 text-sm">
                    Yes! Every rental includes comprehensive walkthrough covering all systems, driving tips, and operation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can I take the RV to National Parks?</h3>
                  <p className="text-gray-600 text-sm">
                    Absolutely! Our RVs are perfect for national park adventures. We can recommend the best campgrounds.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What insurance options do you offer?</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive packages including liability, collision, and comprehensive coverage for USA & Canada travel.
                  </p>
                </div>
              </div>
            </div>

            {/* Blog Preview Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Travel Inspiration</h2>
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Best RV Routes from Bend, Oregon</CardTitle>
                    <CardDescription>Planning • 5 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Discover the most scenic and rewarding RV routes starting from Central Oregon, from coastal loops to mountain adventures.
                    </p>
                    <Link href="/blog" className="text-primary hover:text-primary/80 text-sm font-semibold">
                      Read More →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Oregon Coast Campground Guide</CardTitle>
                    <CardDescription>Destinations • 8 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Our top picks for RV campgrounds along the Oregon Coast, from rugged northern beaches to sunny southern shores.
                    </p>
                    <Link href="/blog" className="text-primary hover:text-primary/80 text-sm font-semibold">
                      Read More →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">First-Time RV Renter Guide</CardTitle>
                    <CardDescription>Tips & Tricks • 6 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Everything first-timers need to know: driving tips, camping etiquette, packing lists, and insider advice.
                    </p>
                    <Link href="/blog" className="text-primary hover:text-primary/80 text-sm font-semibold">
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Browse our premium fleet, choose your dates, and hit the open road. Your unforgettable journey begins in Bend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/rvs">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Browse Available RVs
              </Button>
            </Link>
            <Link href="/inquiry">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                Request Your Quote
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="flex flex-col items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+15416405045" className="hover:text-secondary transition-colors">
                  541-640-5045
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:Kristina@BeaverCoachSales.com" className="hover:text-secondary transition-colors text-sm">
                  Kristina@BeaverCoachSales.com
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">62955 Boyd Acres Rd, Bend, OR 97701</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-white/90">
              <Clock className="h-5 w-5" />
              <span>Mon-Fri 8am-5pm | Closed Weekends</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
