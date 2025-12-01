import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Info,
  Upload,
  FileSpreadsheet,
  CheckCircle2,
  Download,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    color: "primary",
    title: "Step 1 — Upload Your File",
    description: (
      <>
        Select your student data Excel file (<strong>.xlsx</strong> or{" "}
        <strong>.xls</strong>). Ensure it includes <strong>Phone Number</strong>
        , <strong>Email</strong>, and <strong>Aadhaar</strong> columns for
        accurate duplicate detection.
      </>
    ),
  },
  {
    icon: FileSpreadsheet,
    color: "warning",
    title: "Step 2 — Process the Data",
    description: (
      <>
        Click <strong>Process File</strong>. The system scans for duplicates
        automatically. A progress bar shows real-time processing.
      </>
    ),
  },
  {
    icon: CheckCircle2,
    color: "success",
    title: "Step 3 — Review Results",
    description: (
      <>
        After processing, you’ll get a summary showing{" "}
        <strong>total records</strong>, <strong>duplicates found</strong>, and{" "}
        <strong>clean entries</strong>.
      </>
    ),
  },
  {
    icon: Download,
    color: "info",
    title: "Step 4 — Download Clean File",
    description: (
      <>
        Click <strong>Download Processed File</strong> to get your cleaned Excel
        sheet with duplicates removed.
      </>
    ),
  },
];

export default function HowToUse() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold text-foreground">How to Use</h1>
        <p className="mt-2 text-muted-foreground">
          Follow these simple steps to use the Duplicate Finder Dashboard
          efficiently.
        </p>
      </header>

      {/* Steps */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ icon: Icon, color, title, description }, idx) => (
          <Card key={idx} className={`border-l-4 border-l-${color}`}>
            <CardHeader className="flex flex-col items-center text-center">
              <Icon className={`h-10 w-10 text-${color} mb-3`} aria-hidden />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Info Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Important Notes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Info className="h-5 w-5" aria-hidden /> Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Supports only Excel files (.xlsx / .xls).</li>
              <li>
                Detects duplicates using <b>Phone Number</b>, <b>Email</b>, and{" "}
                <b>Aadhaar</b>.
              </li>
              <li>
                Files are processed securely — <b>no data is stored</b> on
                servers.
              </li>
              <li>
                Processing speed: approx. <b>2–3 seconds per 30,000 records</b>.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-success">
              <CheckCircle2 className="h-5 w-5" aria-hidden /> Quick Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Rename your columns properly:</strong> ensure headers
                exactly match the required ones.
              </li>
              <li>Remove unnecessary rows before uploading.</li>
              <li>Keep file size below 10MB for optimal performance.</li>
              <li>You can re-upload updated data anytime for rechecking.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Required Columns */}
        <Card className="border-l-4 border-l-warning md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <FileSpreadsheet className="h-5 w-5" aria-hidden /> Required
              Column Names
            </CardTitle>
            <CardDescription>
              Use these <strong>exact column names</strong> in your Excel file.
              <br />
              <span className="text-destructive font-medium">
                ⚠️ Do not rename, remove, or modify — names must match exactly.
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-6 space-y-1 text-sm text-foreground">
              <li>Sr</li>
              <li>Name as per Document (e.g., Leaving Certificate)</li>
              <li>Birth Date</li>
              <li>Application No.</li>
              <li>Program</li>
              <li>Student Phone 1</li>
              <li>Student Phone 2</li>
              <li>Whatsapp No.</li>
              <li>Email</li>
              <li>Email Alternate</li>
              <li>Emergency Contact No.</li>
              <li>Father Mobile No.</li>
              <li>Mother Mobile No.</li>
              <li>Guardian Mobile No.</li>
              <li>Aadhaar Card No.</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
