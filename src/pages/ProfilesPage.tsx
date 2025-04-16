
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import { TeammateFinder } from "@/components/filters/TeammateFinder";
import { UserProfileCard } from "@/components/profiles/UserProfileCard";
import { users, hackathons } from "@/data/mockData";
import { UserProfile, UserFilterOptions } from "@/types";

const ProfilesPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredUsers, setFilteredUsers] = useState<UserProfile[]>(users);
  
  // Apply filters when search params change
  useEffect(() => {
    let result = [...users];
    
    // Filter by skills
    const skillsParam = searchParams.get("skills");
    if (skillsParam) {
      const skills = skillsParam.split(",");
      result = result.filter(user => 
        user.skills.some(skill => skills.includes(skill.name))
      );
    }
    
    // Filter by country
    const countryParam = searchParams.get("country");
    if (countryParam) {
      result = result.filter(user => 
        user.location.country === countryParam
      );
    }
    
    // Filter by remote preference
    const remoteParam = searchParams.get("remote");
    if (remoteParam === "true") {
      result = result.filter(user => user.location.isRemote);
    }
    
    // Filter by hackathon interest
    const hackathonParam = searchParams.get("hackathon");
    if (hackathonParam) {
      result = result.filter(user => 
        user.interestedHackathons.includes(hackathonParam)
      );
    }
    
    setFilteredUsers(result);
  }, [searchParams]);
  
  return (
    <RootLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Find Teammates</h1>
        
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Filters sidebar */}
          <div className="lg:col-span-1">
            <TeammateFinder />
          </div>
          
          {/* User profiles */}
          <div className="lg:col-span-3">
            {filteredUsers.length === 0 ? (
              <div className="bg-white p-8 text-center rounded-lg border">
                <h3 className="text-xl font-medium mb-2">No matches found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters to find more teammates
                </p>
              </div>
            ) : (
              <div>
                <p className="mb-4 text-gray-600">Found {filteredUsers.length} potential teammates</p>
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredUsers.map(user => (
                    <UserProfileCard key={user.id} profile={user} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default ProfilesPage;
