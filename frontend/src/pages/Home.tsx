import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, AlertTriangle, Calendar } from "lucide-react";

const statsData = [
  {
    title: "Total Files Processed",
    value: "1,234",
    icon: FileText,
    trend: "+12.5%",
    color: "text-info",
  },
  {
    title: "Total Duplicates Found",
    value: "89",
    icon: AlertTriangle,
    trend: "-5.3%",
    color: "text-warning",
  },
  {
    title: "2025 Admissions",
    value: "456",
    icon: Users,
    trend: "+23.1%",
    color: "text-success",
  },
  {
    title: "2024 Admissions",
    value: "778",
    icon: Calendar,
    trend: "+8.7%",
    color: "text-primary",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome Back!</h1>
        <p className="mt-2 text-muted-foreground">
          Here's an overview of your duplicate detection system
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.title}
              className="transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={cn("h-5 w-5", stat.color)} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  <span className={stat.trend.startsWith("+") ? "text-success" : "text-destructive"}>
                    {stat.trend}
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Files this week</span>
              <span className="font-semibold text-foreground">87</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Duplicates resolved</span>
              <span className="font-semibold text-foreground">34</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Average processing time</span>
              <span className="font-semibold text-foreground">2.3s</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Success rate</span>
              <span className="font-semibold text-foreground">98.7%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 mt-2 rounded-full bg-success" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">students_2025.xlsx processed</p>
                <p className="text-xs text-muted-foreground">5 duplicates found • 2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 mt-2 rounded-full bg-success" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">admissions_jan.xlsx processed</p>
                <p className="text-xs text-muted-foreground">3 duplicates found • 15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 mt-2 rounded-full bg-success" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">batch_2024.xlsx processed</p>
                <p className="text-xs text-muted-foreground">12 duplicates found • 1 hour ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
