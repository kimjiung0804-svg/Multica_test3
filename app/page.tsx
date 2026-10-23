import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Introduction Section */}
      <section className="mb-12 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">John Doe – Photographer</h1>
        <p className="text-lg mb-2">
          Capturing moments with a refined, understated aesthetic. I specialize in portrait and landscape photography.
        </p>
        <Button asChild>
          <a href="#contact" className="mt-4 inline-block">Get In Touch</a>
        </Button>
      </section>

      {/* Gallery Section */}
      <section className="mb-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-medium mb-6 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Placeholder images – replace the src URLs with your own photos */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Image
              key={i}
              src={`https://picsum.photos/seed/${i}/600/400`}
              alt="Portfolio placeholder"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-medium mb-4 text-center">Pricing</h2>
        <p className="text-center mb-6 text-sm text-gray-600 dark:text-gray-400">
          Below is a placeholder pricing table. Update the rows with your actual packages and rates.
        </p>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border p-2 text-left">Package</th>
              <th className="border p-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Basic Session</td>
              <td className="border p-2">$200</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="border p-2">Extended Shoot</td>
              <td className="border p-2">$350</td>
            </tr>
            <tr>
              <td className="border p-2">Full Day Coverage</td>
              <td className="border p-2">$600</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-medium mb-4">Contact</h2>
        <p className="mb-2">Email: <a href="mailto:john.doe@example.com" className="underline">john.doe@example.com</a></p>
        <p>Feel free to reach out for inquiries, bookings, or collaborations.</p>
      </section>

      {/* Footer – dark mode toggle hint */}
      <div className="font-mono text-xs text-muted-foreground mt-8 text-center">
        (Press <kbd>d</kbd> to toggle dark mode)
      </div>
    </main>
  );
}
