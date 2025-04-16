
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { UserFilterOptions } from "@/types";
import { hackathons } from "@/data/mockData";
import { Filter, X } from "lucide-react";

// List of common skills for filter options
const COMMON_SKILLS = [
  "React", "JavaScript", "TypeScript", "Node.js", "Python", 
  "UI Design", "UX Research", "Flutter", "React Native", "AWS",
  "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Machine Learning",
  "Data Science", "Blockchain", "Solidity", "Firebase"
];

// List of common countries for filter options
const COMMON_COUNTRIES = [
  "USA", "Canada", "Germany", "UK", "India", "Australia", "Singapore", "Japan", "South Korea", "Brazil"
];

export function TeammateFinder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<UserFilterOptions>({
    skills: [],
    location: {
      country: "",
      isRemote: false
    },
    hackathonId: ""
  });
  
  // Initialize filters from URL params
  useEffect(() => {
    const skillsParam = searchParams.get("skills");
    const countryParam = searchParams.get("country");
    const remoteParam = searchParams.get("remote");
    const hackathonParam = searchParams.get("hackathon");
    
    setFilters({
      skills: skillsParam ? skillsParam.split(",") : [],
      location: {
        country: countryParam || "",
        isRemote: remoteParam === "true"
      },
      hackathonId: hackathonParam || ""
    });
  }, [searchParams]);
  
  // Update URL when filters change
  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (filters.skills && filters.skills.length > 0) {
      params.set("skills", filters.skills.join(","));
    }
    
    if (filters.location?.country) {
      params.set("country", filters.location.country);
    }
    
    if (filters.location?.isRemote) {
      params.set("remote", "true");
    }
    
    if (filters.hackathonId) {
      params.set("hackathon", filters.hackathonId);
    }
    
    setSearchParams(params);
  };
  
  const resetFilters = () => {
    setFilters({
      skills: [],
      location: {
        country: "",
        isRemote: false
      },
      hackathonId: ""
    });
    setSearchParams({});
  };
  
  const toggleSkill = (skill: string) => {
    setFilters(prev => {
      const currentSkills = prev.skills || [];
      const newSkills = currentSkills.includes(skill) 
        ? currentSkills.filter(s => s !== skill)
        : [...currentSkills, skill];
        
      return {
        ...prev,
        skills: newSkills
      };
    });
  };
  
  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Find Teammates
        </h2>
        <Button variant="outline" size="sm" onClick={resetFilters} className="flex items-center gap-1.5">
          <X className="h-3.5 w-3.5" />
          <span>Reset</span>
        </Button>
      </div>
      
      <div className="space-y-5">
        {/* Skills filter */}
        <div>
          <Label className="mb-2 block">Skills</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {COMMON_SKILLS.map(skill => (
              <div 
                key={skill} 
                className={`
                  px-3 py-1.5 text-sm rounded-full cursor-pointer border transition-colors
                  ${filters.skills?.includes(skill) 
                    ? 'bg-hackathon text-white border-hackathon' 
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'}
                `}
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        {/* Location filter */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="country">Country</Label>
            <Select 
              value={filters.location?.country || ""} 
              onValueChange={(value) => setFilters(prev => ({
                ...prev, 
                location: { ...prev.location, country: value }
              }))}
            >
              <SelectTrigger id="country">
                <SelectValue placeholder="Any country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any country</SelectItem>
                {COMMON_COUNTRIES.map(country => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remote" 
              checked={filters.location?.isRemote || false}
              onCheckedChange={(checked) => setFilters(prev => ({
                ...prev, 
                location: { ...prev.location, isRemote: checked === true }
              }))}
            />
            <Label htmlFor="remote" className="text-sm font-normal cursor-pointer">
              Remote only
            </Label>
          </div>
        </div>
        
        {/* Hackathon filter */}
        <div>
          <Label htmlFor="hackathon">Hackathon Interest</Label>
          <Select 
            value={filters.hackathonId || ""} 
            onValueChange={(value) => setFilters(prev => ({
              ...prev, 
              hackathonId: value
            }))}
          >
            <SelectTrigger id="hackathon">
              <SelectValue placeholder="Any hackathon" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any hackathon</SelectItem>
              {hackathons.map(hackathon => (
                <SelectItem key={hackathon.id} value={hackathon.id}>{hackathon.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <Button className="w-full" onClick={applyFilters}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
