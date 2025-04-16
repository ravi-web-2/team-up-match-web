
// Skill type definition
export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  name: string;
  level: SkillLevel;
}

// Location type
export interface Location {
  city?: string;
  country?: string;
  isRemote?: boolean;
}

// Hackathon type
export interface Hackathon {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: Location;
  url?: string;
  imageUrl?: string;
}

// User profile type
export interface UserProfile {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  skills: Skill[];
  location: Location;
  interestedHackathons: string[]; // Array of hackathon IDs
  github?: string;
  linkedin?: string;
  portfolio?: string;
  contactEmail?: string;
}

// Message type
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

// Filter options for searching users
export interface UserFilterOptions {
  skills?: string[];
  location?: {
    city?: string;
    country?: string;
    isRemote?: boolean;
  };
  hackathonId?: string;
}
