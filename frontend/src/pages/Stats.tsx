import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const yearlyData = [
  { year: "2023", duplicates: 1520, total: 26502 },
  { year: "2024", duplicates: 2226, total: 21034 },
  { year: "2025", duplicates: 1493, total: 30456 },
];

const monthlyData = [
  { month: "Jan", duplicates: 12 },
  { month: "Feb", duplicates: 18 },
  { month: "Mar", duplicates: 15 },
  { month: "Apr", duplicates: 22 },
  { month: "May", duplicates: 19 },
  { month: "Jun", duplicates: 74 },
];

export default function Stats() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics & Statistics</h1>
        <p className="mt-2 text-muted-foreground">
          Visualize duplicate trends across different years
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Year-wise Duplicate Analysis</CardTitle>
            <CardDescription>Comparison of duplicates found per year</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="year" 
                  className="text-xs text-muted-foreground"
                />
                <YAxis className="text-xs text-muted-foreground" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="duplicates" 
                  fill="hsl(var(--primary))" 
                  name="Duplicates Found"
                  radius={[8, 8, 0, 0]}
                />
                <Bar 
                  dataKey="total" 
                  fill="hsl(var(--info))" 
                  name="Total Records"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Trend</CardTitle>
            <CardDescription>Duplicates detected over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="month" 
                  className="text-xs text-muted-foreground"
                />
                <YAxis className="text-xs text-muted-foreground" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="duplicates" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  name="Duplicates"
                  dot={{ fill: "hsl(var(--primary))", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-l-4 border-l-success">
          <CardHeader>
            <CardTitle className="text-lg">Best Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">2025</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Lowest duplicate rate at 14.7%
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-warning">
          <CardHeader>
            <CardTitle className="text-lg">Needs Attention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">2023</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Highest duplicate rate at 16.3%
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-info">
          <CardHeader>
            <CardTitle className="text-lg">Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">-8.2%</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Reduction in duplicates year-over-year
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
