'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, Users, Heart, MapPin, ArrowRight, Building2, Coffee } from "lucide-react";
import Link from "next/link";

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
}

const jobPositions: JobPosition[] = [
  {
    title: "Senior Digital Marketing Strategist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Content Marketing Manager",
    department: "Content",
    location: "New York",
    type: "Full-time"
  },
  {
    title: "SEO Specialist",
    department: "SEO",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Social Media Manager",
    department: "Social",
    location: "London",
    type: "Full-time"
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-600 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Be part of a team that's reshaping the future of digital marketing. 
            We're always looking for talented individuals to join our mission.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-purple-600">Why Join Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Great Culture</h3>
              <p className="text-muted-foreground">
                Join a diverse team of passionate individuals who support and inspire each other.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Amazing Benefits</h3>
              <p className="text-muted-foreground">
                Comprehensive healthcare, flexible PTO, and professional development opportunities.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Flexible working hours and remote options to help you maintain a healthy balance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      {/*
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Current Openings</h2>
          
          <div className="grid gap-6">
            {jobPositions.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/careers/${job.title.toLowerCase().replace(/ /g, '-')}`}>
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">Don't See the Right Role?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always looking for talented individuals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button className="bg-purple-600" size="lg">
            Submit Your Resume
          </Button>
        </div>
      </section>
    </div>
  );
}