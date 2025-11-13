"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Table, { TableHeader, TableRow, TableHead, TableCell } from "@/components/ui/Table";
import Tabs, { Tab, TabPanel } from "@/components/ui/Tabs";

export default function CampaignViewPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("upcoming");
  return (
    <div className="p-4 md:p-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
        <Link href="/campaigns" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
          Campaigns
        </Link>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-900 dark:text-gray-100 font-medium">Weekly AI Newsletter</span>
      </nav>

      {/* Campaign Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Weekly AI Newsletter</h1>
            <Badge variant="success">Active</Badge>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Weekly newsletter covering AI news and technology updates</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit
          </Button>
          <Button variant="outline" size="md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            Pause
          </Button>
        </div>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Contacts</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">342</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Newsletters Sent</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">24</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Open Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">68%</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Click Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">12%</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Card padding="none">
        <div className="border-b border-gray-200 dark:border-gray-800">
          <div className="flex overflow-x-auto">
            <Tab id="upcoming" label="Upcoming Newsletter" isActive={activeTab === "upcoming"} onClick={() => setActiveTab("upcoming")} />
            <Tab id="scraped" label="Scraped Content" isActive={activeTab === "scraped"} onClick={() => setActiveTab("scraped")} />
            <Tab id="activity" label="Activity" isActive={activeTab === "activity"} onClick={() => setActiveTab("activity")} />
            <Tab id="settings" label="Campaign Settings" isActive={activeTab === "settings"} onClick={() => setActiveTab("settings")} />
          </div>
        </div>

        {/* Upcoming Newsletter Tab */}
        <TabPanel id="upcoming-panel" isActive={activeTab === "upcoming"}>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">AI-Generated Content Options</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Review and select one of the AI-generated newsletter options. If no selection is made, the system will automatically choose Option 1.
                </p>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((option) => (
                  <Card key={option} className="border-2 border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="info">Option {option}</Badge>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Generated 2 hours ago</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          {option === 1 && "Latest AI Breakthroughs: GPT-5 Rumors and Industry Impact"}
                          {option === 2 && "AI Weekly Digest: Machine Learning Advances and Real-World Applications"}
                          {option === 3 && "Tech News Roundup: AI Developments Shaping the Future"}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {option === 1 && "This week's newsletter covers the latest rumors about GPT-5, new AI research breakthroughs, and how these developments are impacting various industries. Includes expert analysis and predictions."}
                          {option === 2 && "A comprehensive overview of recent machine learning advances, featuring practical applications, case studies, and insights from leading AI researchers and practitioners."}
                          {option === 3 && "Your weekly dose of AI and tech news, featuring the most important developments, startup funding rounds, and technological innovations that matter."}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
                          <span>Topics: AI News, Tech</span>
                          <span>•</span>
                          <span>Estimated length: {option === 1 ? "5 min read" : option === 2 ? "7 min read" : "4 min read"}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="primary" size="sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Approve
                        </Button>
                        <Button variant="outline" size="sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Reject
                        </Button>
                        <Button variant="ghost" size="sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Preview
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabPanel>

        {/* Scraped Content Tab */}
        <TabPanel id="scraped-panel" isActive={activeTab === "scraped"}>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Scraped Content</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Content scraped from your configured sources. Review and approve or reject items with feedback.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "OpenAI Announces New Model", source: "TechCrunch", date: "2 hours ago", topic: "AI News" },
                  { title: "Machine Learning Breakthrough", source: "MIT News", date: "5 hours ago", topic: "Tech" },
                  { title: "AI in Healthcare Advances", source: "Wired", date: "1 day ago", topic: "AI News" },
                ].map((item, idx) => (
                  <Card key={idx} className="border border-gray-200 dark:border-gray-800">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="info" size="sm">{item.topic}</Badge>
                          <span className="text-xs text-gray-500 dark:text-gray-500">{item.source}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-500">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-500">{item.date}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          Recent developments in artificial intelligence have shown significant progress in various domains...
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="primary" size="sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Approve
                        </Button>
                        <Button variant="outline" size="sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Reject
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabPanel>

        {/* Activity Tab */}
        <TabPanel id="activity-panel" isActive={activeTab === "activity"}>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Newsletter Activity</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  View all newsletters sent from this campaign and their performance metrics.
                </p>
              </div>

              <Card padding="none">
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
                  <tbody>
                    {[
                      { subject: "Weekly AI Newsletter - Dec 15", language: "English", recipients: 342, openRate: "68%", clickRate: "12%", sentAt: "2 days ago" },
                      { subject: "Weekly AI Newsletter - Dec 8", language: "English", recipients: 340, openRate: "72%", clickRate: "15%", sentAt: "9 days ago" },
                      { subject: "Weekly AI Newsletter - Dec 1", language: "English", recipients: 338, openRate: "65%", clickRate: "10%", sentAt: "16 days ago" },
                    ].map((newsletter, idx) => (
                      <TableRow key={idx}>
                        <TableCell>
                          <div className="font-medium text-gray-900 dark:text-gray-100">{newsletter.subject}</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="info" size="sm">{newsletter.language}</Badge>
                        </TableCell>
                        <TableCell>{newsletter.recipients}</TableCell>
                        <TableCell>
                          <span className="text-green-600 dark:text-green-400 font-medium">{newsletter.openRate}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-blue-600 dark:text-blue-400 font-medium">{newsletter.clickRate}</span>
                        </TableCell>
                        <TableCell className="text-gray-600 dark:text-gray-400">{newsletter.sentAt}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </div>
          </TabPanel>

        {/* Campaign Settings Tab */}
        <TabPanel id="settings-panel" isActive={activeTab === "settings"}>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Campaign Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Campaign Name</label>
                    <div className="text-gray-900 dark:text-gray-100">Weekly AI Newsletter</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Frequency</label>
                    <div className="text-gray-900 dark:text-gray-100">Weekly</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Topics</label>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="info">AI News</Badge>
                      <Badge variant="info">Tech</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Style Preference</label>
                    <div className="text-gray-900 dark:text-gray-100">Professional, Informative</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Source URLs</h3>
                <div className="space-y-2">
                  {["https://techcrunch.com/ai", "https://mit.edu/news/ai", "https://wired.com/ai"].map((url, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="text-sm text-gray-900 dark:text-gray-100">{url}</span>
                      <Button variant="ghost" size="sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </TabPanel>
      </Card>
    </div>
  );
}

