"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CampaignViewPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="p-4 md:p-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4 md:mb-6 overflow-x-auto">
        <Link
          href="/campaigns"
          className="hover:text-foreground transition-colors whitespace-nowrap"
        >
          Campaigns
        </Link>
        <svg
          className="w-4 h-4 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="text-foreground font-medium whitespace-nowrap">
          Weekly AI Newsletter
        </span>
      </nav>

      {/* Campaign Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">Weekly AI Newsletter</h1>
            <Badge variant="success">Active</Badge>
          </div>
          <p className="text-muted-foreground">
            Weekly newsletter covering AI news and technology updates
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit
          </Button>
          <Button variant="outline">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            Pause
          </Button>
        </div>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Contacts</p>
                <p className="text-2xl font-bold mt-1">342</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-xs md:text-sm text-muted-foreground truncate">
                  Newsletters Sent
                </p>
                <p className="text-xl md:text-2xl font-bold mt-1">24</p>
              </div>
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 ml-2">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-xs md:text-sm text-muted-foreground truncate">
                  Open Rate
                </p>
                <p className="text-xl md:text-2xl font-bold mt-1">68%</p>
              </div>
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 ml-2">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-xs md:text-sm text-muted-foreground truncate">
                  Click Rate
                </p>
                <p className="text-xl md:text-2xl font-bold mt-1">12%</p>
              </div>
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 ml-2">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Card>
        <CardContent className="p-0">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="border-b overflow-x-auto">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="upcoming"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 whitespace-nowrap"
                >
                  Upcoming Newsletter
                </TabsTrigger>
                <TabsTrigger
                  value="scraped"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 whitespace-nowrap"
                >
                  Scraped Content
                </TabsTrigger>
                <TabsTrigger
                  value="activity"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 whitespace-nowrap"
                >
                  Activity
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 whitespace-nowrap"
                >
                  Campaign Settings
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6">
              <TabsContent value="upcoming" className="mt-0">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    AI-Generated Content Options
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Review and select one of the AI-generated newsletter
                    options. If no selection is made, the system will
                    automatically choose Option 1.
                  </p>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((option) => (
                    <Card
                      key={option}
                      className="border-2 hover:border-primary/50 transition-colors"
                    >
                      <CardContent className="pt-4 md:pt-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Badge variant="secondary">Option {option}</Badge>
                              <span className="text-sm text-muted-foreground">
                                Generated 2 hours ago
                              </span>
                            </div>
                            <h4 className="font-semibold mb-2">
                              {option === 1 &&
                                "Latest AI Breakthroughs: GPT-5 Rumors and Industry Impact"}
                              {option === 2 &&
                                "AI Weekly Digest: Machine Learning Advances and Real-World Applications"}
                              {option === 3 &&
                                "Tech News Roundup: AI Developments Shaping the Future"}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                              {option === 1 &&
                                "This week's newsletter covers the latest rumors about GPT-5, new AI research breakthroughs, and how these developments are impacting various industries. Includes expert analysis and predictions."}
                              {option === 2 &&
                                "A comprehensive overview of recent machine learning advances, featuring practical applications, case studies, and insights from leading AI researchers and practitioners."}
                              {option === 3 &&
                                "Your weekly dose of AI and tech news, featuring the most important developments, startup funding rounds, and technological innovations that matter."}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>Topics: AI News, Tech</span>
                              <span>•</span>
                              <span>
                                Estimated length:{" "}
                                {option === 1
                                  ? "5 min read"
                                  : option === 2
                                  ? "7 min read"
                                  : "4 min read"}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button size="sm">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Approve
                            </Button>
                            <Button variant="outline" size="sm">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                              Reject
                            </Button>
                            <Button variant="ghost" size="sm">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                              Preview
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="scraped" className="mt-0">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Scraped Content
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Content scraped from your configured sources. Review and
                    approve or reject items with feedback.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "OpenAI Announces New Model",
                      source: "TechCrunch",
                      date: "2 hours ago",
                      topic: "AI News",
                    },
                    {
                      title: "Machine Learning Breakthrough",
                      source: "MIT News",
                      date: "5 hours ago",
                      topic: "Tech",
                    },
                    {
                      title: "AI in Healthcare Advances",
                      source: "Wired",
                      date: "1 day ago",
                      topic: "AI News",
                    },
                  ].map((item, idx) => (
                    <Card key={idx}>
                      <CardContent className="pt-4 md:pt-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary">{item.topic}</Badge>
                              <span className="text-xs text-muted-foreground">
                                {item.source}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                •
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {item.date}
                              </span>
                            </div>
                            <h4 className="font-semibold mb-2">{item.title}</h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              Recent developments in artificial intelligence
                              have shown significant progress in various
                              domains...
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button size="sm">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Approve
                            </Button>
                            <Button variant="outline" size="sm">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                              Reject
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="activity" className="mt-0">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Newsletter Activity
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    View all newsletters sent from this campaign and their
                    performance metrics.
                  </p>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Subject</TableHead>
                          <TableHead>Language</TableHead>
                          <TableHead>Recipients</TableHead>
                          <TableHead>Open Rate</TableHead>
                          <TableHead>Click Rate</TableHead>
                          <TableHead>Sent At</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            subject: "Weekly AI Newsletter - Dec 15",
                            language: "English",
                            recipients: 342,
                            openRate: "68%",
                            clickRate: "12%",
                            sentAt: "2 days ago",
                          },
                          {
                            subject: "Weekly AI Newsletter - Dec 8",
                            language: "English",
                            recipients: 340,
                            openRate: "72%",
                            clickRate: "15%",
                            sentAt: "9 days ago",
                          },
                          {
                            subject: "Weekly AI Newsletter - Dec 1",
                            language: "English",
                            recipients: 338,
                            openRate: "65%",
                            clickRate: "10%",
                            sentAt: "16 days ago",
                          },
                        ].map((newsletter, idx) => (
                          <TableRow key={idx}>
                            <TableCell>
                              <div className="font-medium">
                                {newsletter.subject}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary">
                                {newsletter.language}
                              </Badge>
                            </TableCell>
                            <TableCell>{newsletter.recipients}</TableCell>
                            <TableCell>
                              <span className="text-green-600 font-medium">
                                {newsletter.openRate}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className="text-primary font-medium">
                                {newsletter.clickRate}
                              </span>
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {newsletter.sentAt}
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="mt-0">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Campaign Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          Campaign Name
                        </p>
                        <p>Weekly AI Newsletter</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          Frequency
                        </p>
                        <p>Weekly</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          Topics
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="secondary">AI News</Badge>
                          <Badge variant="secondary">Tech</Badge>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          Style Preference
                        </p>
                        <p>Professional, Informative</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Source URLs</h3>
                    <div className="space-y-2">
                      {[
                        "https://techcrunch.com/ai",
                        "https://mit.edu/news/ai",
                        "https://wired.com/ai",
                      ].map((url, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 bg-muted rounded-lg"
                        >
                          <span className="text-sm">{url}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="shrink-0"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
