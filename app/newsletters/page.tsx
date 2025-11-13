import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Table, { TableHeader, TableRow, TableHead, TableCell } from "@/components/ui/Table";

export default function NewslettersPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Newsletters</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">View all sent newsletters and their performance</p>
          </div>
          
          <Card padding="none">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Language</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Sent At</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <tbody>
                {[
                  { campaign: "Weekly AI Newsletter", contact: "Rajesh Kumar", language: "Hindi", subject: "AI Updates - This Week", status: "sent", sentAt: "2 days ago" },
                  { campaign: "Weekly AI Newsletter", contact: "Maria Garcia", language: "Spanish", subject: "Actualizaciones de IA - Esta Semana", status: "opened", sentAt: "2 days ago" },
                  { campaign: "EdTech Updates", contact: "John Smith", language: "English", subject: "EdTech Weekly Digest", status: "clicked", sentAt: "5 days ago" },
                ].map((newsletter, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <div className="font-medium text-gray-900 dark:text-gray-100">{newsletter.campaign}</div>
                    </TableCell>
                    <TableCell>{newsletter.contact}</TableCell>
                    <TableCell>
                      <Badge variant="info" size="sm">{newsletter.language}</Badge>
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">{newsletter.subject}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          newsletter.status === "clicked" ? "success" : 
                          newsletter.status === "opened" ? "info" : 
                          "default"
                        }
                      >
                        {newsletter.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">{newsletter.sentAt}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">Preview</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </Card>
        </main>
      </div>
    </div>
  );
}

