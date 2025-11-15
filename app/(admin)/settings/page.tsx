"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-muted-foreground mt-1">Configure your email, API keys, and other integrations</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Tabs defaultValue="email" className="w-full">
            <div className="border-b overflow-x-auto scrollbar-hide">
              <TabsList className="inline-flex justify-start rounded-none bg-transparent p-0 h-auto min-w-full">
                <TabsTrigger 
                  value="email" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 whitespace-nowrap flex-shrink-0"
                >
                  Email Configuration
                </TabsTrigger>
                <TabsTrigger 
                  value="api-keys" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 whitespace-nowrap flex-shrink-0"
                >
                  API Keys
                </TabsTrigger>
                <TabsTrigger 
                  value="integrations" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 whitespace-nowrap flex-shrink-0"
                >
                  Integrations
                </TabsTrigger>
                <TabsTrigger 
                  value="account" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 whitespace-nowrap flex-shrink-0"
                >
                  Account
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-4 sm:p-8">
              <TabsContent value="email" className="mt-0">
                <div className="space-y-8">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Email Service Provider</h3>
                      <p className="text-sm text-muted-foreground">Configure your email service to send newsletters</p>
                    </div>
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="provider">Provider</Label>
                        <select id="provider" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option>SendGrid</option>
                          <option>Resend</option>
                          <option>SMTP</option>
                          <option>Amazon SES</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email-api-key">API Key</Label>
                        <div className="relative">
                          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                          </svg>
                          <Input id="email-api-key" type="password" className="pl-10" placeholder="Enter your email service API key" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="from-email">From Email</Label>
                          <Input id="from-email" type="email" placeholder="noreply@yourdomain.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="from-name">From Name</Label>
                          <Input id="from-name" placeholder="News Sphere" />
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                        <input type="checkbox" id="verify-domain" className="mt-0.5 rounded border-input" />
                        <div className="flex-1">
                          <Label htmlFor="verify-domain" className="text-sm font-medium block mb-1 cursor-pointer">
                            Verify domain for better deliverability
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            Verify your domain to improve email deliverability and avoid spam filters
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">SMTP Configuration</h3>
                      <p className="text-sm text-muted-foreground">Alternative email sending method using SMTP</p>
                    </div>
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="smtp-host">SMTP Host</Label>
                          <Input id="smtp-host" placeholder="smtp.example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="smtp-port">SMTP Port</Label>
                          <Input id="smtp-port" type="number" placeholder="587" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="smtp-username">SMTP Username</Label>
                        <Input id="smtp-username" placeholder="your-email@example.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="smtp-password">SMTP Password</Label>
                        <Input id="smtp-password" type="password" placeholder="Enter SMTP password" />
                      </div>

                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="smtp-tls" className="rounded border-input" />
                        <Label htmlFor="smtp-tls" className="text-sm cursor-pointer">
                          Use TLS/SSL encryption
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t">
                    <Button variant="outline" className="w-full sm:w-auto">Test Connection</Button>
                    <Button className="w-full sm:w-auto">Save Email Settings</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="api-keys" className="mt-0">
                <div className="space-y-8">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">OpenAI API</h3>
                      <p className="text-sm text-muted-foreground">Used for AI-powered content generation and summarization</p>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="openai-key">API Key</Label>
                        <div className="relative">
                          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <Input id="openai-key" type="password" className="pl-10" placeholder="sk-..." />
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenAI Platform</a></span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Gemini API</h3>
                      <p className="text-sm text-muted-foreground">Used for formatting newsletter content into HTML email templates</p>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="gemini-key">API Key</Label>
                        <div className="relative">
                          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <Input id="gemini-key" type="password" className="pl-10" placeholder="Enter your Gemini API key" />
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Get your API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google AI Studio</a></span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Lingo API</h3>
                      <p className="text-sm text-muted-foreground">Used for automatic translation of newsletter content</p>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="lingo-key">API Key</Label>
                        <div className="relative">
                          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                          </svg>
                          <Input id="lingo-key" type="password" className="pl-10" placeholder="Enter your Lingo API key" />
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Get your API key from <a href="https://lingo.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lingo Platform</a></span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Apify API <span className="text-sm font-normal text-muted-foreground">(Optional)</span></h3>
                      <p className="text-sm text-muted-foreground">Used for web scraping content from sources. Leave empty to use built-in scraper.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="apify-token">API Token</Label>
                        <Input id="apify-token" type="password" placeholder="Enter your Apify API token" />
                      </div>
                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Get your API token from <a href="https://console.apify.com/account/integrations" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apify Console</a></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t">
                    <Button variant="outline" className="w-full sm:w-auto">Test APIs</Button>
                    <Button className="w-full sm:w-auto">Save API Keys</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="integrations" className="mt-0">
                <div className="space-y-8">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Webhook Configuration</h3>
                      <p className="text-sm text-muted-foreground">Receive real-time notifications about campaign events</p>
                    </div>
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="webhook-url">Webhook URL</Label>
                        <div className="relative">
                          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          <Input id="webhook-url" className="pl-10" placeholder="https://your-domain.com/webhook" />
                        </div>
                      </div>
                      <div className="p-4 bg-muted rounded-lg border">
                        <p className="text-sm font-medium mb-2">Supported Events</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Campaign sent
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Newsletter opened
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Link clicked
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Campaign failed
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="webhook-enabled" className="rounded border-input" />
                        <Label htmlFor="webhook-enabled" className="text-sm cursor-pointer">
                          Enable webhook notifications
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t">
                    <Button variant="outline" className="w-full sm:w-auto">Test Webhook</Button>
                    <Button className="w-full sm:w-auto">Save Webhook Settings</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="account" className="mt-0">
                <div className="space-y-8">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Profile Information</h3>
                      <p className="text-sm text-muted-foreground">Update your personal information</p>
                    </div>
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Doe" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="account-email">Email</Label>
                        <Input id="account-email" type="email" placeholder="john@example.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input id="organization" placeholder="Your Company Name" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Change Password</h3>
                      <p className="text-sm text-muted-foreground">Update your password to keep your account secure</p>
                    </div>
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" placeholder="Enter current password" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" placeholder="Enter new password" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Preferences</h3>
                      <p className="text-sm text-muted-foreground">Customize your application experience</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg border">
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-1">Email Notifications</p>
                          <p className="text-xs text-muted-foreground">Receive email updates about your campaigns</p>
                        </div>
                        <input type="checkbox" className="rounded border-input" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg border">
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-1">Dark Mode</p>
                          <p className="text-xs text-muted-foreground">Use dark theme for the interface</p>
                        </div>
                        <input type="checkbox" className="rounded border-input" />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg border">
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-1">Interface Language</p>
                          <p className="text-xs text-muted-foreground">Choose your preferred language</p>
                        </div>
                        <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>Hindi</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t">
                    <Button variant="outline" className="w-full sm:w-auto">Cancel</Button>
                    <Button className="w-full sm:w-auto">Save Changes</Button>
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
