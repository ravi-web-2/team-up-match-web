
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HackathonCard } from "@/components/hackathons/HackathonCard";
import { UserProfileCard } from "@/components/profiles/UserProfileCard";
import RootLayout from "@/components/layout/RootLayout";
import { hackathons, users } from "@/data/mockData";
import { Search, Users, Calendar, ArrowRight } from "lucide-react";

const Index = () => {
  // Get featured hackathons and users
  const featuredHackathons = hackathons.slice(0, 2);
  const featuredUsers = users.slice(0, 3);
  
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hackathon to-hackathon-light py-16 px-4 md:px-6 text-white">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Find Your Perfect Hackathon Teammates</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Connect with developers, designers, and innovators who share your passion for building amazing projects at hackathons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/profiles">
              <Button size="lg" className="bg-white text-hackathon hover:bg-gray-100 gap-2">
                <Search className="h-4 w-4" />
                Find Teammates
              </Button>
            </Link>
            <Link to="/hackathons">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 gap-2">
                <Calendar className="h-4 w-4" />
                Explore Hackathons
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Hackathons */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Upcoming Hackathons</h2>
            <Link to="/hackathons" className="text-hackathon font-medium flex items-center gap-1 hover:underline">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredHackathons.map(hackathon => (
              <HackathonCard key={hackathon.id} hackathon={hackathon} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Teammates */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Teammates</h2>
            <Link to="/profiles" className="text-hackathon font-medium flex items-center gap-1 hover:underline">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredUsers.map(user => (
              <UserProfileCard key={user.id} profile={user} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="bg-hackathon-light rounded-full p-4 mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Create Your Profile</h3>
              <p className="text-gray-600">
                Showcase your skills, experience, and hackathon interests to stand out.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-hackathon rounded-full p-4 mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Find Teammates</h3>
              <p className="text-gray-600">
                Search for teammates with complementary skills and shared interests.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-hackathon-accent rounded-full p-4 mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Join Hackathons</h3>
              <p className="text-gray-600">
                Team up and participate in exciting hackathons together.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/profiles">
              <Button size="lg" className="bg-hackathon">Get Started Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default Index;
