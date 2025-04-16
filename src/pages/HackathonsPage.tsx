
import RootLayout from "@/components/layout/RootLayout";
import { HackathonCard } from "@/components/hackathons/HackathonCard";
import { hackathons } from "@/data/mockData";

const HackathonsPage = () => {
  return (
    <RootLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Hackathons</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hackathons.map(hackathon => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} />
          ))}
        </div>
      </div>
    </RootLayout>
  );
};

export default HackathonsPage;
