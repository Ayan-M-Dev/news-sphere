import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Table, { TableHeader, TableRow, TableHead, TableCell } from "@/components/ui/Table";

export default function CampaignsPage() {
    return (
        <div className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Campaigns</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Create and manage your newsletter campaigns</p>
                </div>
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    New Campaign
                </Button>
            </div>

            <Card padding="none">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Campaign Name</TableHead>
                            <TableHead>Topics</TableHead>
                            <TableHead>Frequency</TableHead>
                            <TableHead>Contacts</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Last Run</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <tbody>
                        {[
                            { name: "Weekly AI Newsletter", topics: ["AI News", "Tech"], frequency: "Weekly", contacts: 342, status: "active", lastRun: "2 days ago" },
                            { name: "EdTech Updates", topics: ["Education", "Technology"], frequency: "Bi-weekly", contacts: 189, status: "active", lastRun: "5 days ago" },
                            { name: "SaaS Insights", topics: ["SaaS", "Business"], frequency: "Monthly", contacts: 156, status: "paused", lastRun: "1 week ago" },
                        ].map((campaign, idx) => (
                            <TableRow key={idx}>
                                <TableCell>
                                    <div className="font-medium text-gray-900 dark:text-gray-100">{campaign.name}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-2 flex-wrap">
                                        {campaign.topics.map((topic, i) => (
                                            <Badge key={i} variant="info" size="sm">{topic}</Badge>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell>{campaign.frequency}</TableCell>
                                <TableCell>{campaign.contacts}</TableCell>
                                <TableCell>
                                    <Badge variant={campaign.status === "active" ? "success" : "warning"}>
                                        {campaign.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-gray-600 dark:text-gray-400">{campaign.lastRun}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Link href="/campaigns/view/1">
                                            <Button variant="ghost" size="sm">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </Button>
                                        </Link>
                                        <Button variant="ghost" size="sm">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </div>
    );
}

