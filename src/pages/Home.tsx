import Navbar from "@/components/layout/Navbar";
import LeftSidebar from "@/components/home/LeftSidebar";
import RightSidebar from "@/components/home/RightSidebar";
import FeedPost from "@/components/home/FeedPost";

const Home = () => {
  const posts = [
    {
      author: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      timestamp: "2 hours ago",
      helpAction: "₹2,50,000 Donation to Old Age Home",
      description: "Proud to contribute to 'Sunshine Senior Care' - a verified 80G registered trust. This donation will provide medical care and daily necessities for 50 elderly residents for 6 months. Tax certificate received and filed.",
      points: 2500,
      likes: 342,
      comments: 67,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop",
      badge: "80G Verified"
    },
    {
      author: "TechCorp Foundation",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=techcorp",
      timestamp: "1 day ago",
      helpAction: "₹5,00,000 Education Sponsorship Program",
      description: "Sponsored complete education (tuition, books, uniforms) for 100 underprivileged children through 'Education For All Trust'. 80G tax exemption certificate provided. Making education accessible to those who need it most.",
      points: 5000,
      likes: 892,
      comments: 156,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
      badge: "Corporate Partner"
    },
    {
      author: "Dr. Rajesh Kumar",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh",
      timestamp: "2 days ago",
      helpAction: "Free Medical Camp - 200+ Patients Treated",
      description: "Organized a comprehensive health camp in rural area through 'HealthCare Foundation' (80G registered). Provided free consultations, medicines, and diagnostic tests. ₹1,50,000 worth of medical aid distributed. Official documentation and tax benefit certificate issued.",
      points: 1500,
      likes: 534,
      comments: 89,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
      badge: "Healthcare Hero"
    },
    {
      author: "Green Earth Initiative",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=green",
      timestamp: "3 days ago",
      helpAction: "₹3,00,000 Environmental Conservation Project",
      description: "Funded tree plantation drive and water conservation project through verified NGO 'EcoWarriors Trust'. 5000 trees planted and 3 water harvesting systems installed. Complete 80G documentation provided for tax benefits.",
      points: 3000,
      likes: 678,
      comments: 112,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop",
      badge: "Environment Champion"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Sidebar */}
          <aside className="lg:col-span-3">
            <LeftSidebar />
          </aside>

          {/* Main Feed */}
          <main className="lg:col-span-6">
            <div className="space-y-4">
              {posts.map((post, index) => (
                <FeedPost key={index} {...post} />
              ))}
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3">
            <RightSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Home;
