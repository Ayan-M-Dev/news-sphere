import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function NewCampaignPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Create New Campaign</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Set up a new newsletter campaign with topics, sources, and style preferences</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Campaign Details</h3>
            <div className="space-y-4">
              <Input label="Campaign Name" placeholder="e.g., Weekly AI Newsletter" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Frequency</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <Input label="Schedule Time" type="time" />
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Topics & Sources</h3>
              <Button variant="outline" size="sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Topic
              </Button>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <Input label="Topic Name" placeholder="e.g., AI News" className="mb-0" />
                  <button className="text-red-600 hover:text-red-700 dark:text-red-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2 mb-3">
                  <Input placeholder="Source URL (RSS or Blog)" />
                  <Button variant="ghost" size="sm">+ Add Another Source</Button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Content Style</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <option>Brief Summary</option>
                    <option>Long-form</option>
                    <option>Bullet Points</option>
                  </select>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Select Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <input type="checkbox" className="rounded border-gray-300" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">All Contacts</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">1,247 contacts</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <input type="checkbox" className="rounded border-gray-300" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">India Region</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">342 contacts</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <input type="checkbox" className="rounded border-gray-300" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">USA Region</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">456 contacts</p>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="flex gap-3">
            <Button variant="primary" className="flex-1">Create Campaign</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

