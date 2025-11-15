import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function NewslettersPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Newsletters</h2>
        <p className="text-foreground mt-1">
          View all sent newsletters and their performance
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
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
            <TableBody>
              {[
                {
                  campaign: "Weekly AI Newsletter",
                  contact: "Rajesh Kumar",
                  language: "Hindi",
                  subject: "AI Updates - This Week",
                  status: "sent",
                  sentAt: "2 days ago",
                },
                {
                  campaign: "Weekly AI Newsletter",
                  contact: "Maria Garcia",
                  language: "Spanish",
                  subject: "Actualizaciones de IA - Esta Semana",
                  status: "opened",
                  sentAt: "2 days ago",
                },
                {
                  campaign: "EdTech Updates",
                  contact: "John Smith",
                  language: "English",
                  subject: "EdTech Weekly Digest",
                  status: "clicked",
                  sentAt: "5 days ago",
                },
              ].map((newsletter, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <div className="font-medium">{newsletter.campaign}</div>
                  </TableCell>
                  <TableCell>{newsletter.contact}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{newsletter.language}</Badge>
                  </TableCell>
                  <TableCell className="text-foreground">
                    {newsletter.subject}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        newsletter.status === "clicked"
                          ? "success"
                          : newsletter.status === "opened"
                          ? "secondary"
                          : "default"
                      }
                    >
                      {newsletter.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {newsletter.sentAt}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Preview
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
