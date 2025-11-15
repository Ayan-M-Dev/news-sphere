import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewCampaignPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Create New Campaign</h2>
        <p className="text-muted-foreground mt-1">Set up a new newsletter campaign with topics, sources, and style preferences</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="campaign-name">Campaign Name</Label>
                  <Input id="campaign-name" placeholder="e.g., Weekly AI Newsletter" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Frequency</Label>
                    <select id="frequency" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Bi-weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="schedule-time">Schedule Time</Label>
                    <Input id="schedule-time" type="time" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Topics & Sources</CardTitle>
                <Button variant="outline" size="sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Topic
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="topic-name">Topic Name</Label>
                      <Input id="topic-name" placeholder="e.g., AI News" />
                    </div>
                    <button className="text-destructive hover:text-destructive/90 ml-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-2 mb-3">
                    <Input placeholder="Source URL (RSS or Blog)" />
                    <Button variant="ghost" size="sm">+ Add Another Source</Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content-style">Content Style</Label>
                    <select id="content-style" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>Brief Summary</option>
                      <option>Long-form</option>
                      <option>Bullet Points</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Select Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <input type="checkbox" className="rounded border-input" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">All Contacts</p>
                    <p className="text-xs text-muted-foreground">1,247 contacts</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <input type="checkbox" className="rounded border-input" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">India Region</p>
                    <p className="text-xs text-muted-foreground">342 contacts</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <input type="checkbox" className="rounded border-input" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">USA Region</p>
                    <p className="text-xs text-muted-foreground">456 contacts</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex gap-3">
            <Button className="flex-1">Create Campaign</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

