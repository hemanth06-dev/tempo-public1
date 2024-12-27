import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutGrid, BarChart2, Users } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: LayoutGrid },
    { name: "Statistics", path: "/stats", icon: BarChart2 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-[1512px] mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Badminton Hub</span>
            </div>

            <div className="flex items-center space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-primary hover:bg-secondary",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
