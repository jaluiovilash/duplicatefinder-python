import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BarChart3,
  FileSearch,
  LogIn,
  LogOut,
  BadgeInfo,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { title: "Home", path: "/", icon: Home },
  { title: "Stats", path: "/stats", icon: BarChart3 },
  { title: "Find Duplicates", path: "/find-duplicates", icon: FileSearch },
  { title: "How To Use", path: "/How-to-use", icon: BadgeInfo },
];

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-30 h-screen w-64 border-r border-border bg-card shadow-md">
        <div className="flex h-16 items-center border-b border-border px-6">
          <FileSearch className="mr-3 h-6 w-6 text-primary" />
          <h1 className="text-lg font-bold text-foreground">FindMyDuplicate</h1>
        </div>

        <nav className="space-y-1 p-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col pl-64">
        {/* Top Navbar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-card px-8 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">Dashboard</h2>

          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
