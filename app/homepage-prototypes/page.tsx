import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, FileText, Image as ImageIcon, Target, Map } from "lucide-react";

export default function PrototypesIndex() {
  const prototypes = [
    {
      id: "option-a",
      title: "Option A: SEO Content Hub",
      description: "Comprehensive information, answer all questions, rank for long-tail queries",
      sections: 8,
      words: "~2000 words",
      philosophy: "Maximum keyword coverage and FAQ-heavy content",
      icon: FileText,
      color: "bg-blue-500",
      pros: ["Maximum SEO", "Comprehensive FAQ", "Shows travel possibilities"],
      cons: ["Content-heavy", "Long scroll", "More dev time"],
    },
    {
      id: "option-b",
      title: "Option B: Adventure Showcase",
      description: "Inspire with destinations, emotional connection, visual storytelling",
      sections: 6,
      words: "~1200 words",
      philosophy: "Visual-first with destination inspiration",
      icon: ImageIcon,
      color: "bg-purple-500",
      pros: ["Inspiring", "Visual impact", "Social sharing"],
      cons: ["Less keyword density", "Needs quality photos", "Lighter info"],
    },
    {
      id: "option-c",
      title: "Option C: Conversion Machine",
      description: "Remove friction, fast path to booking, action-oriented",
      sections: 5,
      words: "~900 words",
      philosophy: "Streamlined, fast, conversion-focused",
      icon: Target,
      color: "bg-green-500",
      pros: ["Fast conversion", "Mobile optimized", "Clear pricing"],
      cons: ["Less SEO content", "Less storytelling", "May feel salesy"],
    },
    {
      id: "option-d",
      title: "Option D: Freedom Focused",
      description: "Balance SEO + UX, emphasize unlimited travel possibilities",
      sections: 7,
      words: "~1500 words",
      philosophy: "Best of both worlds - SEO without Bend-centric trap",
      icon: Map,
      color: "bg-orange-500",
      pros: ["Balanced SEO/UX", "Shows travel freedom", "Educational"],
      cons: ["Medium length", "Requires route content"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-primary to-primary/80 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold sm:text-5xl">
                Homepage Prototypes
              </h1>
              <p className="mt-4 text-xl text-green-100">
                Review 4 different strategic approaches for the Happy Campers homepage
              </p>
              <p className="mt-2 text-sm text-green-200">
                These are standalone prototypes for design and copy review - not connected to the main site
              </p>
            </div>
          </div>
        </div>

        {/* Prototypes Grid */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {prototypes.map((prototype) => {
              const Icon = prototype.icon;
              return (
                <Card key={prototype.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`${prototype.color} rounded-lg p-3 text-white`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{prototype.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {prototype.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-gray-600">
                      <p><strong>Philosophy:</strong> {prototype.philosophy}</p>
                      <p><strong>Sections:</strong> {prototype.sections} sections</p>
                      <p><strong>Content:</strong> {prototype.words}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="font-semibold text-green-700 mb-1">Pros:</p>
                        <ul className="space-y-0.5">
                          {prototype.pros.map((pro, i) => (
                            <li key={i} className="text-gray-600">✓ {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-orange-700 mb-1">Cons:</p>
                        <ul className="space-y-0.5">
                          {prototype.cons.map((con, i) => (
                            <li key={i} className="text-gray-600">⚠ {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link href={`/homepage-prototypes/${prototype.id}`} className="block">
                      <Button className="w-full" size="lg">
                        View Prototype
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Reference */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Quick Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Aspect</th>
                      <th className="text-center p-2">Option A</th>
                      <th className="text-center p-2">Option B</th>
                      <th className="text-center p-2">Option C</th>
                      <th className="text-center p-2">Option D</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">SEO Strength</td>
                      <td className="text-center p-2">🟢🟢🟢🟢🟢</td>
                      <td className="text-center p-2">🟢🟢🟢⚪⚪</td>
                      <td className="text-center p-2">🟢🟢⚪⚪⚪</td>
                      <td className="text-center p-2">🟢🟢🟢🟢⚪</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Inspiration</td>
                      <td className="text-center p-2">🟢🟢⚪⚪⚪</td>
                      <td className="text-center p-2">🟢🟢🟢🟢🟢</td>
                      <td className="text-center p-2">🟢🟢⚪⚪⚪</td>
                      <td className="text-center p-2">🟢🟢🟢🟢⚪</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Conversion Focus</td>
                      <td className="text-center p-2">🟢🟢🟢⚪⚪</td>
                      <td className="text-center p-2">🟢🟢🟢⚪⚪</td>
                      <td className="text-center p-2">🟢🟢🟢🟢🟢</td>
                      <td className="text-center p-2">🟢🟢🟢🟢⚪</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Travel Freedom</td>
                      <td className="text-center p-2">🟢🟢🟢⚪⚪</td>
                      <td className="text-center p-2">🟢🟢🟢🟢🟢</td>
                      <td className="text-center p-2">🟢🟢🟢🟢⚪</td>
                      <td className="text-center p-2">🟢🟢🟢🟢🟢</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Mobile UX</td>
                      <td className="text-center p-2">🟢🟢🟡⚪⚪</td>
                      <td className="text-center p-2">🟢🟢🟢🟢⚪</td>
                      <td className="text-center p-2">🟢🟢🟢🟢🟢</td>
                      <td className="text-center p-2">🟢🟢🟢⚪⚪</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Notes */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>📝 All prototypes use real content and your original images</p>
            <p className="mt-1">🔗 Not linked to main navigation - standalone review pages</p>
            <p className="mt-1">💡 Feel free to mix and match elements from different options</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
