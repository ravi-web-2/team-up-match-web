
import { Hackathon, UserProfile } from "@/types";

// Mock hackathon data
export const hackathons: Hackathon[] = [
  {
    id: "h1",
    name: "Global Hack Week",
    description: "Join the largest global hackathon with participants from over 100 countries working on innovative solutions for real-world problems.",
    startDate: "2025-05-15",
    endDate: "2025-05-22",
    location: { isRemote: true },
    url: "https://example.com/global-hack",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: "h2",
    name: "TechCrunch Disrupt Hackathon",
    description: "Build amazing products in 24 hours with top engineers and designers at TechCrunch Disrupt's annual hackathon.",
    startDate: "2025-06-10",
    endDate: "2025-06-11",
    location: { city: "San Francisco", country: "USA" },
    url: "https://example.com/techcrunch-hack",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: "h3",
    name: "AI for Good Hackathon",
    description: "Create AI-powered solutions to address urgent social and environmental challenges.",
    startDate: "2025-07-05",
    endDate: "2025-07-07",
    location: { isRemote: true },
    url: "https://example.com/ai-good",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    id: "h4",
    name: "Blockchain Innovation Hackathon",
    description: "Build decentralized applications that solve real problems using blockchain technology.",
    startDate: "2025-08-20",
    endDate: "2025-08-22",
    location: { city: "Berlin", country: "Germany" },
    url: "https://example.com/blockchain-hack",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }
];

// Mock user profile data
export const users: UserProfile[] = [
  {
    id: "u1",
    name: "Alex Johnson",
    bio: "Full-stack developer with 3 years of experience. Passionate about creating user-friendly applications and solving complex problems.",
    avatar: "https://i.pravatar.cc/150?img=1",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Node.js", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "MongoDB", level: "Advanced" }
    ],
    location: { city: "San Francisco", country: "USA" },
    interestedHackathons: ["h1", "h2"],
    github: "https://github.com/alexj",
    linkedin: "https://linkedin.com/in/alexj",
    portfolio: "https://alexj.dev"
  },
  {
    id: "u2",
    name: "Sophia Chen",
    bio: "UX/UI designer focused on creating intuitive and accessible user experiences. Looking for hackathons to collaborate with developers.",
    avatar: "https://i.pravatar.cc/150?img=5",
    skills: [
      { name: "Figma", level: "Expert" },
      { name: "UI Design", level: "Expert" },
      { name: "User Research", level: "Advanced" },
      { name: "HTML/CSS", level: "Intermediate" }
    ],
    location: { city: "Toronto", country: "Canada" },
    interestedHackathons: ["h1", "h3"],
    portfolio: "https://sophiac.design"
  },
  {
    id: "u3",
    name: "Marcus Williams",
    bio: "Backend developer specializing in distributed systems and cloud architecture. Seeking teammates for AI and blockchain hackathons.",
    avatar: "https://i.pravatar.cc/150?img=3",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "AWS", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "Machine Learning", level: "Intermediate" }
    ],
    location: { isRemote: true },
    interestedHackathons: ["h3", "h4"],
    github: "https://github.com/marcusw",
    linkedin: "https://linkedin.com/in/marcusw"
  },
  {
    id: "u4",
    name: "Priya Patel",
    bio: "Mobile app developer with focus on React Native and Flutter. Enjoys building cross-platform solutions for emerging markets.",
    avatar: "https://i.pravatar.cc/150?img=8",
    skills: [
      { name: "React Native", level: "Expert" },
      { name: "Flutter", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Firebase", level: "Intermediate" }
    ],
    location: { city: "Bangalore", country: "India" },
    interestedHackathons: ["h1", "h2", "h3"],
    github: "https://github.com/priyap",
    portfolio: "https://priyap.dev"
  },
  {
    id: "u5",
    name: "David Kim",
    bio: "Data scientist passionate about AI ethics and responsible innovation. Looking for multidisciplinary teams to build socially beneficial projects.",
    avatar: "https://i.pravatar.cc/150?img=12",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "Machine Learning", level: "Expert" },
      { name: "Data Visualization", level: "Advanced" },
      { name: "Natural Language Processing", level: "Advanced" }
    ],
    location: { city: "Seoul", country: "South Korea" },
    interestedHackathons: ["h3"],
    github: "https://github.com/davidk",
    linkedin: "https://linkedin.com/in/davidk"
  },
  {
    id: "u6",
    name: "Emma Wilson",
    bio: "Web3 developer focusing on smart contracts and decentralized applications. Eager to collaborate on blockchain innovation projects.",
    avatar: "https://i.pravatar.cc/150?img=9",
    skills: [
      { name: "Solidity", level: "Expert" },
      { name: "Ethereum", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Web3.js", level: "Advanced" }
    ],
    location: { city: "Berlin", country: "Germany" },
    interestedHackathons: ["h4"],
    github: "https://github.com/emmaw",
    linkedin: "https://linkedin.com/in/emmaw"
  }
];

// Mock messages between users
export const messages = [
  {
    id: "m1",
    senderId: "u1",
    receiverId: "u2",
    content: "Hey Sophia! I saw your profile and I'm also interested in the Global Hack Week. Would you be interested in collaborating?",
    timestamp: "2025-04-10T10:30:00Z",
    isRead: true
  },
  {
    id: "m2",
    senderId: "u2",
    receiverId: "u1",
    content: "Hi Alex! Thanks for reaching out. I'd definitely be interested. What kind of project did you have in mind?",
    timestamp: "2025-04-10T11:15:00Z",
    isRead: true
  },
  {
    id: "m3",
    senderId: "u3",
    receiverId: "u5",
    content: "Hello David! I noticed we're both interested in the AI for Good Hackathon. I specialize in backend systems and see you're a data scientist. Want to team up?",
    timestamp: "2025-04-11T09:45:00Z",
    isRead: false
  }
];
