/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/DW653BmS7Z0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

poppins({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CarouselImage1 from "../../public/images/carousel-image-1.jpg";
import CarouselImage2 from "../../public/images/carousel-image-2.jpg";
import CarouselImage3 from "../../public/images/carousel-image-3.jpg";
import CarouselImage4 from "../../public/images/carousel-image-4.jpg";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Testimonials } from "./testimonials";
import { ContactForm } from "./ContactForm";

export function LandingPageV2() {
  const COMPANYNAME = "Wise Concreting Services";

  const submitContactForm = async (formData) => {
    "use server";
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      console.error('Please fill in all fields');
      return;
    }

    console.log('Submitting contact form:', name, email, message);

    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/19599392/2ud6nyz/', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
        return false;
      }

    } catch (error) {
      console.error('Error submitting contact form:', error);
      return false;
    }
    return true;
  };

  return (
    <div key="1" className="flex flex-col min-h-[100dvh] dark:bg-gray-950">
      <header className="bg-gray-950 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center" href="#">
            <ConstructionIcon className="h-6 w-6 text-white" />
            <span className="ml-2 text-lg font-semibold text-white">
              {COMPANYNAME}
            </span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-400"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-400"
              href="#"
            >
              Portfolio
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-400"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-400"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
          <Button variant="primary" className="text-neutral-400">
            Get a Quote
          </Button>
        </div>
      </header>
      <main className="flex-1 dark:bg-gray-950 dark:text-gray-400">
        <section className="w-full">
          <Carousel className="w-full max-w-[1200px] mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Image
                  width={1200}
                  alt="Concrete work"
                  className="aspect-[3/1] object-cover rounded-md"
                  src={CarouselImage1}
                  placeholder="blur"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  width={1200}
                  alt="Concrete work"
                  className="aspect-[3/1] object-cover rounded-md"
                  src={CarouselImage2}
                  placeholder="blur"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  width={1200}
                  alt="Concrete work"
                  className="aspect-[3/1] object-cover rounded-md"
                  src={CarouselImage3}
                  placeholder="blur"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  width={1200}
                  alt="Concrete work"
                  className="aspect-[3/1] object-cover rounded-md"
                  src={CarouselImage4}
                  placeholder="blur"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 dark:bg-gray-950 dark:text-gray-400"
        >
          <div className="flex-col items-center">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10 m-auto">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Services
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a wide range of concrete services to meet your
                  construction needs.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
                <div className="flex flex-col items-center gap-2">
                  <TruckIcon className="w-24 h-24" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Concrete Delivery</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      We deliver high-quality ready-mix concrete to your
                      construction site.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ConstructionIcon className="w-24 h-24" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Concrete Mixing</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our state-of-the-art mixing equipment ensures uniform and
                      consistent concrete.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ConstructionIcon className="w-24 h-24" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Paving Services</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Let us handle your concrete paving projects, from
                      sidewalks to driveways.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ConstructionIcon className="w-24 h-24" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Finishing Expertise</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our skilled finishers can create the perfect surface
                      texture for your concrete.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 dark:bg-gray-950 dark:text-gray-400"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <ContactForm submitContactForm={submitContactForm} />
              <div>
                <h2 className="text-3xl font-bold text-gray-400">
                  Leave a Review
                </h2>
                <p className="mt-4 text-gray-400">
                  We&apos;d love to hear your thoughts on our services.
                </p>
                <form className="mt-8 space-y-4">
                  <div>
                    <Label className="text-gray-400" htmlFor="review-name">
                      Name
                    </Label>
                    <Input
                      className="bg-gray-800 text-white"
                      id="review-name"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-400" htmlFor="review-email">
                      Email
                    </Label>
                    <Input
                      className="bg-gray-800 text-white"
                      id="review-email"
                      required
                      type="email"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-400" htmlFor="review">
                      Review
                    </Label>
                    <Textarea
                      className="bg-gray-800 text-white"
                      id="review"
                      required
                      rows={4}
                    />
                  </div>
                  <Button
                    className="text-gray-400"
                    type="submit"
                    variant="outline"
                  >
                    Submit Review
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 md:px-24">
          <Testimonials />
        </section>
      </main>
      <footer className="bg-gray-800 dark:bg-gray-950 dark:text-gray-400">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2024 {COMPANYNAME}. All rights reserved.
          </p>
          <nav className="flex space-x-4">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-400"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-400"
              href="#"
            >
              Terms
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-400"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function ConstructionIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  );
}
function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}
