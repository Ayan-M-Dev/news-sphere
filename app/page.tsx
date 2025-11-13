import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-lg">
              LL
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">Locale Letter</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Multilingual Newsletter
            <span className="block text-primary-600 dark:text-primary-400">Campaigns Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Create, localize, and send personalized newsletters to global audiences with AI-powered content generation and automatic translation.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button variant="primary" size="lg">Start Free Trial</Button>
            </Link>
            <Button variant="outline" size="lg">Watch Demo</Button>
          </div>
        </section>
        
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Auto Translation</h3>
              <p className="text-gray-600 dark:text-gray-400">Automatically translate newsletters to your contacts' languages using Lingo</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">AI-Powered Content</h3>
              <p className="text-gray-600 dark:text-gray-400">Generate engaging newsletter content from your sources using OpenAI</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Analytics & Insights</h3>
              <p className="text-gray-600 dark:text-gray-400">Track performance by language, region, and engagement metrics</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 Locale Letter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

