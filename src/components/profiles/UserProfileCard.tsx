
import { Link } from "react-router-dom";
import { UserProfile } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeList } from "@/components/ui/badge-list";
import { MessageSquare, MapPin, Globe } from "lucide-react";

interface UserProfileCardProps {
  profile: UserProfile;
}

export function UserProfileCard({ profile }: UserProfileCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={profile.avatar}
            alt={`${profile.name}'s avatar`}
            className="rounded-full h-16 w-16 object-cover border"
          />
          <div>
            <h3 className="font-semibold text-xl">{profile.name}</h3>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              {profile.location.isRemote ? (
                <div className="flex items-center">
                  <Globe className="h-3.5 w-3.5 mr-1.5" />
                  <span>Remote</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1.5" />
                  <span>
                    {profile.location.city}, {profile.location.country}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{profile.bio}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-1.5">Skills</h4>
          <BadgeList 
            items={profile.skills.map(skill => `${skill.name} (${skill.level})`)} 
            variant="outline" 
          />
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 px-6 py-4">
        <div className="flex items-center justify-between w-full">
          <Link to={`/profile/${profile.id}`}>
            <Button variant="outline">View Profile</Button>
          </Link>
          <Link to={`/messages/new?to=${profile.id}`}>
            <Button className="flex items-center gap-1.5">
              <MessageSquare className="h-4 w-4" />
              <span>Message</span>
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
