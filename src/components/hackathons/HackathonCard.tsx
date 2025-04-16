
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Hackathon } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPin, Globe } from "lucide-react";

interface HackathonCardProps {
  hackathon: Hackathon;
}

export function HackathonCard({ hackathon }: HackathonCardProps) {
  const formattedStartDate = format(new Date(hackathon.startDate), "MMM d, yyyy");
  const formattedEndDate = format(new Date(hackathon.endDate), "MMM d, yyyy");
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-40">
        <img
          src={hackathon.imageUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"}
          alt={hackathon.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="font-semibold text-xl text-white">{hackathon.name}</h3>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3 gap-4">
          <div className="flex items-center">
            <CalendarIcon className="h-3.5 w-3.5 mr-1.5" />
            <span>
              {formattedStartDate} - {formattedEndDate}
            </span>
          </div>
          
          {hackathon.location.isRemote ? (
            <div className="flex items-center">
              <Globe className="h-3.5 w-3.5 mr-1.5" />
              <span>Remote</span>
            </div>
          ) : (
            <div className="flex items-center">
              <MapPin className="h-3.5 w-3.5 mr-1.5" />
              <span>
                {hackathon.location.city}, {hackathon.location.country}
              </span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {hackathon.description}
        </p>
      </CardContent>
      
      <CardFooter className="bg-gray-50 px-6 py-4">
        <div className="flex items-center justify-between w-full">
          <Link to={`/hackathons/${hackathon.id}`}>
            <Button variant="outline">View Details</Button>
          </Link>
          <Link to={`/profiles?hackathon=${hackathon.id}`}>
            <Button className="bg-hackathon">Find Teammates</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
