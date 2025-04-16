
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Search, User, Users } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Users className="h-6 w-6 text-hackathon" />
          <span className="text-xl font-bold">HackMate</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:underline">Home</Link>
          <Link to="/profiles" className="text-sm font-medium hover:underline">Find Teammates</Link>
          <Link to="/hackathons" className="text-sm font-medium hover:underline">Hackathons</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/messages">
            <Button variant="outline" size="icon">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Messages</span>
            </Button>
          </Link>
          <Link to="/search">
            <Button variant="outline" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
