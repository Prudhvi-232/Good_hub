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
      helpAction: "Organized Community Food Drive",
      description: "Successfully collected and distributed food to 50+ families in need. Thank you to everyone who participated!",
      points: 250,
      likes: 142,
      comments: 23,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop",
      badge: "Gold Helper"
    },
    {
      author: "Mike Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
      timestamp: "5 hours ago",
      helpAction: "Teaching Session at Local School",
      description: "Spent the afternoon teaching coding to underprivileged kids. Their enthusiasm was incredible!",
      points: 150,
      likes: 98,
      comments: 15,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
    },
    {
      author: "Emily Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      timestamp: "Yesterday",
      helpAction: "Blood Donation Camp",
      description: "Organized a blood donation camp that collected 100+ units. Every drop counts!",
      points: 200,
      likes: 234,
      comments: 45,
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop",
      badge: "Healthcare Hero"
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
