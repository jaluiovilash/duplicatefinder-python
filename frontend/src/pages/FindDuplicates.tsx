import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Upload,
  Download,
  Loader2,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function FindDuplicates() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (
        selectedFile.name.endsWith(".xlsx") ||
        selectedFile.name.endsWith(".xls")
      ) {
        setFile(selectedFile);
        setIsComplete(false);
        setDownloadUrl(null);
        toast({
          title: "File selected",
          description: `${selectedFile.name} is ready to process`,
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please select an Excel file (.xlsx or .xls)",
          variant: "destructive",
        });
      }
    }
  };

  const handleProcess = async () => {
    if (!file) return;

    setIsProcessing(true);

    // Simulate API call to Python backend
    // In production, replace this with actual API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      setDownloadUrl("/path/to/processed/file.xlsx"); // Replace with actual URL

      toast({
        title: "Processing complete!",
        description: "Your deduplicated file is ready for download",
      });
    }, 3000);
  };

  const handleDownload = () => {
    // In production, trigger actual file download
    toast({
      title: "Download started",
      description: "Your processed file is being downloaded",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Find Duplicates</h1>
        <p className="mt-2 text-muted-foreground">
          Upload an Excel file to detect and remove duplicate student entries
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle>Upload File</CardTitle>
            <CardDescription>
              Select an Excel file (.xlsx) containing student data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/20 p-12 transition-colors hover:bg-muted/30">
              <Upload className="mb-4 h-12 w-12 text-muted-foreground" />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Button variant="outline" asChild>
                  <span>
                    <FileSpreadsheet className="mr-2 h-4 w-4" />
                    Choose File
                  </span>
                </Button>
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".xlsx,.xls"
                className="hidden"
                onChange={handleFileChange}
              />
              <p className="mt-2 text-sm text-muted-foreground">
                Supports .xlsx and .xls files
              </p>
            </div>

            {file && (
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <FileSpreadsheet className="h-8 w-8 text-primary" />
                <div className="flex-1">
                  <p className="font-medium text-foreground">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
            )}

            <Button
              onClick={handleProcess}
              disabled={!file || isProcessing || isComplete}
              className="w-full"
              size="lg"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : isComplete ? (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Complete
                </>
              ) : (
                "Process File"
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle>Processing Results</CardTitle>
            <CardDescription>
              Download your deduplicated file once processing is complete
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!isProcessing && !isComplete && (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border p-12 text-center">
                <p className="text-muted-foreground">
                  Upload and process a file to see results
                </p>
              </div>
            )}

            {isProcessing && (
              <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-muted/20 p-12 text-center">
                <Loader2 className="mb-4 h-12 w-12 animate-spin text-primary" />
                <p className="font-medium text-foreground">
                  Processing your file...
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Detecting duplicates based on phone, email, and Aadhaar
                </p>
              </div>
            )}

            {isComplete && (
              <div className="space-y-4">
                <div className="flex flex-col items-center justify-center rounded-lg border border-success bg-success/10 p-8 text-center">
                  <CheckCircle2 className="mb-4 h-12 w-12 text-success" />
                  <p className="font-medium text-foreground">
                    Processing Complete!
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Found and removed duplicate entries
                  </p>
                </div>

                <div className="space-y-3 rounded-lg border border-border bg-card p-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Total records
                    </span>
                    <span className="font-medium text-foreground">456</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Duplicates found
                    </span>
                    <span className="font-medium text-warning">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Clean records
                    </span>
                    <span className="font-medium text-success">433</span>
                  </div>
                </div>

                <Button onClick={handleDownload} className="w-full" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Processed File
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Info Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Detection Criteria</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Duplicates are identified using phone number, email, and Aadhaar
              card number
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-info">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Processing Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Average processing time is 2-3 seconds per 1000 records
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-success">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your files are processed securely and not stored on our servers
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
