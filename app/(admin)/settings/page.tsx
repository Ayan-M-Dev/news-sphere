"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Tabs, { Tab, TabPanel } from "@/components/ui/Tabs";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("email");

  return (
    <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Settings</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Configure your email, API keys, and other integrations</p>
          </div>

          <Card padding="none">
            <Tabs>
              <Tab
                id="email"
                label="Email Configuration"
                isActive={activeTab === "email"}
                onClick={() => setActiveTab("email")}
              />
              <Tab
                id="api-keys"
                label="API Keys"
                isActive={activeTab === "api-keys"}
                onClick={() => setActiveTab("api-keys")}
              />
              <Tab
                id="integrations"
                label="Integrations"
                isActive={activeTab === "integrations"}
                onClick={() => setActiveTab("integrations")}
              />
              <Tab
                id="account"
                label="Account"
                isActive={activeTab === "account"}
                onClick={() => setActiveTab("account")}
              />
            </Tabs>

            <div className="p-8">
              <TabPanel id="email-panel" isActive={activeTab === "email"}>
                <div className="space-y-8">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Email Service Provider</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Configure your email service to send newsletters</p>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Provider
                        </label>
                        <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
                          <option>SendGrid</option>
                          <option>Resend</option>
                          <option>SMTP</option>
                          <option>Amazon SES</option>
                        </select>
                      </div>

                      <Input
                        label="API Key"
                        type="password"
                        placeholder="Enter your email service API key"
                        icon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                          </svg>
                        }
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="From Email"
                          type="email"
                          placeholder="noreply@yourdomain.com"
                        />
                        <Input
                          label="From Name"
                          placeholder="Locale Letter"
                        />
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg">
                        <input type="checkbox" id="verify-domain" className="mt-0.5 rounded border-gray-300" />
                        <div className="flex-1">
                          <label htmlFor="verify-domain" className="text-sm font-medium text-gray-900 dark:text-gray-100 block mb-1">
                            Verify domain for better deliverability
                          </label>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Verify your domain to improve email deliverability and avoid spam filters
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">SMTP Configuration</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Alternative email sending method using SMTP</p>
                    </div>
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="SMTP Host"
                          placeholder="smtp.example.com"
                        />
                        <Input
                          label="SMTP Port"
                          type="number"
                          placeholder="587"
                        />
                      </div>

                      <Input
                        label="SMTP Username"
                        placeholder="your-email@example.com"
                      />

                      <Input
                        label="SMTP Password"
                        type="password"
                        placeholder="Enter SMTP password"
                      />

                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="smtp-tls" className="rounded border-gray-300" />
                        <label htmlFor="smtp-tls" className="text-sm text-gray-700 dark:text-gray-300">
                          Use TLS/SSL encryption
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <Button variant="outline">Test Connection</Button>
                    <Button variant="primary">Save Email Settings</Button>
                  </div>
                </div>
              </TabPanel>

              <TabPanel id="api-keys-panel" isActive={activeTab === "api-keys"}>
                <div className="space-y-8">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">OpenAI API</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Used for AI-powered content generation and summarization</p>
                    </div>
                    <div className="space-y-4">
                      <Input
                        label="API Key"
                        type="password"
                        placeholder="sk-..."
                        icon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        }
                      />
                      <div className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">OpenAI Platform</a></span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Gemini API</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Used for formatting newsletter content into HTML email templates</p>
                    </div>
                    <div className="space-y-4">
                      <Input
                        label="API Key"
                        type="password"
                        placeholder="Enter your Gemini API key"
                        icon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        }
                      />
                      <div className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Get your API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Google AI Studio</a></span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Lingo API</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Used for automatic translation of newsletter content</p>
                    </div>
                    <div className="space-y-4">
                      <Input
                        label="API Key"
                        type="password"
                        placeholder="Enter your Lingo API key"
                        icon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                          </svg>
                        }
                      />
                      <div className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Get your API key from <a href="https://lingo.dev" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Lingo Platform</a></span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Apify API <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Optional)</span></h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Used for web scraping content from sources. Leave empty to use built-in scraper.</p>
                    </div>
                    <div className="space-y-4">
                      <Input
                        label="API Token"
                        type="password"
                        placeholder="Enter your Apify API token"
                      />
                      <div className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Get your API token from <a href="https://console.apify.com/account/integrations" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Apify Console</a></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <Button variant="outline">Test APIs</Button>
                    <Button variant="primary">Save API Keys</Button>
                  </div>
                </div>
              </TabPanel>

              <TabPanel id="integrations-panel" isActive={activeTab === "integrations"}>
                <div className="space-y-8">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Webhook Configuration</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Receive real-time notifications about campaign events</p>
                    </div>
                    <div className="space-y-5">
                      <Input
                        label="Webhook URL"
                        placeholder="https://your-domain.com/webhook"
                        icon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        }
                      />
                      <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Supported Events</p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Campaign sent
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Newsletter opened
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Link clicked
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Campaign failed
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="webhook-enabled" className="rounded border-gray-300" />
                        <label htmlFor="webhook-enabled" className="text-sm text-gray-700 dark:text-gray-300">
                          Enable webhook notifications
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <Button variant="outline">Test Webhook</Button>
                    <Button variant="primary">Save Webhook Settings</Button>
                  </div>
                </div>
              </TabPanel>

              <TabPanel id="account-panel" isActive={activeTab === "account"}>
                <div className="space-y-8">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Profile Information</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Update your personal information</p>
                    </div>
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="First Name"
                          placeholder="John"
                        />
                        <Input
                          label="Last Name"
                          placeholder="Doe"
                        />
                      </div>

                      <Input
                        label="Email"
                        type="email"
                        placeholder="john@example.com"
                      />

                      <Input
                        label="Organization"
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Change Password</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Update your password to keep your account secure</p>
                    </div>
                    <div className="space-y-5">
                      <Input
                        label="Current Password"
                        type="password"
                        placeholder="Enter current password"
                      />

                      <Input
                        label="New Password"
                        type="password"
                        placeholder="Enter new password"
                      />

                      <Input
                        label="Confirm New Password"
                        type="password"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Preferences</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Customize your application experience</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Email Notifications</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Receive email updates about your campaigns</p>
                        </div>
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Dark Mode</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Use dark theme for the interface</p>
                        </div>
                        <input type="checkbox" className="rounded border-gray-300" />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Interface Language</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Choose your preferred language</p>
                        </div>
                        <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>Hindi</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <Button variant="outline">Cancel</Button>
                    <Button variant="primary">Save Changes</Button>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Card>
    </div>
  );
}
