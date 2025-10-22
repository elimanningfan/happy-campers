import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeaturedRVs } from "@/lib/rv-data";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Mountain, Waves, Wine, Music, TreePine, Phone, Mail, Clock } from "lucide-react";

export default function OptionBPage() {
  const featuredRVs = getFeaturedRVs();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Aspirational */}
      <section className="relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/original-happy-campers/pacific-shores-motorcoach-resort-aerial-oregon-coast-rv-park.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            The Places You'll Go
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-2xl text-gray-100">
            Luxury RV rentals in Bend, Oregon - Your gateway to epic adventures
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/90 text-lg">
            <span>Oregon Coast</span>
            <span>•</span>
            <span>Yellowstone</span>
            <span>•</span>
            <span>Wine Country</span>
            <span>•</span>
            <span>Redwoods</span>
          </div>
          <div className="mt-12">
            <Link href="/rvs">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trip Inspiration Grid - Visual First */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Where Will Your Adventure Take You?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Limitless destinations from your Bend starting point
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Coastal Escapes */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80">
                <Image
                  src="/images/original-happy-campers/adirondack-chairs-lighthouse-view-oregon-coast-rv-camping.jpg"
                  alt="Coastal Escapes"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <Waves className="h-5 w-5" />
                    <span className="text-sm uppercase tracking-wider">3 hours west</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Coastal Escapes</h3>
                  <p className="text-white/90 text-sm">
                    Oregon and California coastlines, lighthouses, tide pools, and sandy beaches
                  </p>
                </div>
              </div>
            </div>

            {/* Mountain Adventures */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80">
                <Image
                  src="/images/scraped-images/cascade-mountains-highway-forest-snow-peaks-oregon-scenic-route.png"
                  alt="Mountain Adventures"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <Mountain className="h-5 w-5" />
                    <span className="text-sm uppercase tracking-wider">Year-round</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mountain Adventures</h3>
                  <p className="text-white/90 text-sm">
                    Cascades, Rockies, Mt. Bachelor skiing, alpine lakes, and mountain hiking
                  </p>
                </div>
              </div>
            </div>

            {/* Desert Wandering */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80">
                <Image
                  src="/images/scraped-images/rv-desert-highway-winding-road-mountains-bend-rentals.png"
                  alt="Desert Wandering"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <TreePine className="h-5 w-5" />
                    <span className="text-sm uppercase tracking-wider">High Desert</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Desert Wandering</h3>
                  <p className="text-white/90 text-sm">
                    Oregon high desert, Utah red rocks, painted hills, and wide open spaces
                  </p>
                </div>
              </div>
            </div>

            {/* National Parks */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80">
                <Image
                  src="/images/scraped-images/teton-mountains-sunset-snow-peaks-wyoming-rv-destination.png"
                  alt="National Parks"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <Mountain className="h-5 w-5" />
                    <span className="text-sm uppercase tracking-wider">Epic Journeys</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">National Parks</h3>
                  <p className="text-white/90 text-sm">
                    Crater Lake, Yellowstone, Yosemite, Grand Canyon, and countless more
                  </p>
                </div>
              </div>
            </div>

            {/* Festival Season */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80">
                <Image
                  src="/images/scraped-images/rv-camping-music-festival-oregon-events.jpg"
                  alt="Festival Season"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <Music className="h-5 w-5" />
                    <span className="text-sm uppercase tracking-wider">Summer Events</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Festival Season</h3>
                  <p className="text-white/90 text-sm">
                    Music festivals, harvest celebrations, sporting events, and gatherings
                  </p>
                </div>
              </div>
            </div>

            {/* Wine & Culinary */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80">
                <Image
                  src="/images/scraped-images/oregon-wine-country-rv-trips-vineyard-illustration.png"
                  alt="Wine & Culinary Tours"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <Wine className="h-5 w-5" />
                    <span className="text-sm uppercase tracking-wider">Taste & Explore</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Wine & Culinary Tours</h3>
                  <p className="text-white/90 text-sm">
                    Willamette Valley, Napa, Sonoma, craft breweries, and farm-to-table experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured RVs - Pick Your Travel Style */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Pick Your Travel Style
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              From nimble camper vans to spacious family motorhomes
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredRVs.map((rv) => (
              <Card key={rv.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-64 w-full">
                  <Image
                    src={rv.images[0]}
                    alt={rv.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      From ${rv.pricePerDay}/night
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    {rv.sleeps <= 4 ? (
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Weekend Warriors
                      </span>
                    ) : (
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Extended Journeys
                      </span>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{rv.name}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="font-semibold text-primary">Sleeps {rv.sleeps}</span>
                    <span>•</span>
                    <span>{rv.type}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {rv.description}
                  </p>
                  <Link href={`/rvs/${rv.slug}`}>
                    <Button className="w-full" variant="default">
                      Explore This RV
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/rvs">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Complete Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Your Journey Starts in Bend */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Your Journey Starts in Bend
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Perfectly positioned in Central Oregon, Bend is your ideal basecamp for adventures in every direction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Waves className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">3 hours to the Oregon Coast</h3>
                    <p className="text-gray-600">Sandy beaches, lighthouses, and coastal charm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Wine className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">4 hours to Portland</h3>
                    <p className="text-gray-600">Wine country, Columbia Gorge, and urban adventures</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mountain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">5 hours to California</h3>
                    <p className="text-gray-600">Redwoods, Shasta, and beyond</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Easy access to major routes
                </p>
                <p className="text-gray-600">
                  Interstate 5, Highway 97, and Highway 20 are all within easy reach. Pick up your RV and head anywhere - the Pacific Northwest and beyond are waiting.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/scraped-images/beaver-coach-sales-aerial-view-rv-dealership-bend-oregon.png"
                alt="Bend Oregon RV Rentals Location"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey Stories */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Real Adventures, Real Memories
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Stories from Happy Campers customers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/original-happy-campers/happy-family-forest-portrait-rv-camping-bend-oregon-closeup.jpg"
                  alt="Craig Family"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>The Craig Family</CardTitle>
                <CardDescription>7-Day Oregon Coast Adventure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "We spent a week exploring the Oregon Coast from Cannon Beach to the Redwoods. The RV was perfect for our family of four - spacious, comfortable, and gave us the freedom to stop whenever we wanted."
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>Portland to San Francisco coastal route</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/original-happy-campers/couple-relaxing-rv-campsite-firepit-bend-oregon.jpg"
                  alt="Couple at campsite"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Sarah & Mike</CardTitle>
                <CardDescription>12-Day Yellowstone Trip</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Our Yellowstone and Grand Teton adventure was incredible! The Happy Campers team gave us great route suggestions and the RV handled the mountain roads beautifully. We even extended our trip by three days!"
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>Yellowstone family adventure</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/original-happy-campers/woman-campfire-coffee-rv-morning-bend-oregon.jpg"
                  alt="Wine Country Trip"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Jennifer & Tom</CardTitle>
                <CardDescription>5-Day Wine Country Weekend</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "The perfect wine country getaway! We toured Willamette Valley wineries and used the Harvest Hosts partnership to stay at several vineyards. It was luxurious and so much better than hotel hopping."
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>Oregon wine country weekend</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA: Where Will You Go? */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/scraped-images/newmar-class-a-rv-open-highway-desert-rolling-hills.png')`,
            }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Where Will You Go?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            The open road is calling. Browse our luxury RV fleet and start planning your unforgettable adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/rvs">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Explore Our Fleet
              </Button>
            </Link>
            <Link href="/inquiry">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                Request a Quote
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row gap-6 justify-center text-white items-center">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+15416405045" className="hover:text-secondary transition-colors">
                  541-640-5045
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:Kristina@BeaverCoachSales.com" className="hover:text-secondary transition-colors">
                  Kristina@BeaverCoachSales.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Bend, Oregon</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-white/90">
              <Clock className="h-5 w-5" />
              <span>Mon-Fri 8am-5pm</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
