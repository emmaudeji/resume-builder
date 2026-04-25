"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
 
import { Sparkles, FileText, BarChart, Wand2, Menu } from "lucide-react";
// import { useState } from "react";
import Link from "next/link";

export default function LandingPage() {
  // const [open, setOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Navbar   />
      <Hero />
      <Logos />
      <Features />
      <Demo />
      <Templates />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

/* ================= NAVBAR ================= */
export function Navbar( ) {
  return (
    <div className="fixed top-0 w-full backdrop-blur border-b z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="font-bold text-lg">Resume Geek</div>

        <div className="hidden md:flex gap-6 items-center">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#templates">Templates</a>
          <Link href={'/guest-builder'}><Button>Create Resume</Button></Link>
        </div>

        <button className="md:hidden" >
          <Menu />
        </button>
      </div>

      {/* {open && (
        <div className="md:hidden p-4 space-y-4 border-t">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#templates">Templates</a>
          <Button className="w-full">Create Resume</Button>
        </div>
      )} */}
    </div>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Build a{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Job-Winning
            </span>{" "}
            Resume
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            AI-powered, ATS-optimized resumes that get you interviews faster.
          </p>

          <div className="mt-8 flex gap-4">
            <Button size="lg">Create Resume</Button>
            <Button variant="outline" size="lg">See Templates</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-purple-500/10"
        >
          <div className="bg-background p-6 rounded-xl shadow">
            <p className="font-semibold">Jane Developer</p>
            <p className="text-sm text-muted-foreground">Frontend Engineer</p>
            <div className="mt-4 space-y-2">
              <div className="h-3 bg-muted rounded" />
              <div className="h-3 bg-muted rounded w-5/6" />
              <div className="h-3 bg-muted rounded w-4/6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= LOGOS ================= */
function Logos() {
  return (
    <section className="py-12 text-center text-sm text-muted-foreground">
      Trusted by professionals worldwide
    </section>
  );
}

/* ================= FEATURES ================= */
function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Powerful Features</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {features.map((f, i) => (
            <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }}>
              <Card className="rounded-2xl hover:shadow-xl transition">
                <CardContent className="p-6">
                  <f.icon className="mb-4 text-primary" />
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= DEMO ================= */
function Demo() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">See It In Action</h2>
        <div className="mt-10 p-8 rounded-3xl bg-background shadow">
          <p className="text-muted-foreground">Live resume preview coming here</p>
        </div>
      </div>
    </section>
  );
}

/* ================= TEMPLATES ================= */
function Templates() {
  return (
    <section id="templates" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Beautiful Templates</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="h-64 rounded-2xl" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Loved by Job Seekers</h2>
        <p className="mt-4 text-muted-foreground">I got interviews within a week!</p>
      </div>
    </section>
  );
}

/* ================= PRICING ================= */
function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Simple Pricing</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="p-6">
            <h3 className="font-semibold">Free</h3>
            <p className="text-2xl font-bold mt-2">$0</p>
          </Card>

          <Card className="p-6 border-primary">
            <h3 className="font-semibold">Pro</h3>
            <p className="text-2xl font-bold mt-2">$9/mo</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ================= CTA ================= */
function CTA() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-bold">Start Building Now</h2>
      <Button className="mt-6">Create Resume</Button>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Resume Geek
    </footer>
  );
}

const features = [
  { icon: Sparkles, title: "AI Writer", description: "Generate resumes instantly" },
  { icon: BarChart, title: "ATS Score", description: "Optimize for recruiters" },
  { icon: FileText, title: "Templates", description: "Modern designs" },
  { icon: Wand2, title: "Cover Letters", description: "Auto-generate letters" },
];
