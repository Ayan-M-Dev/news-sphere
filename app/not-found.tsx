import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, Smile } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Animated Emoji 404 */}
        <div className="relative">
          <div className="text-9xl md:text-[12rem] font-bold leading-none select-none flex items-center justify-center gap-2 md:gap-4">
            <div
              className="inline-block animate-bounce"
              style={{ animationDelay: "0s" }}
            >
              4
            </div>
            <div className="inline-block animate-wiggle">
              <span className="text-8xl md:text-[10rem] block">😕</span>
            </div>
            <div
              className="inline-block animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              4
            </div>
          </div>

          {/* Floating emojis around 404 */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-10 text-4xl animate-float-1">
              🤔
            </div>
            <div className="absolute top-20 right-20 text-4xl animate-float-2">
              🧐
            </div>
            <div className="absolute bottom-20 left-20 text-4xl animate-float-3">
              😅
            </div>
            <div className="absolute bottom-10 right-10 text-4xl animate-float-4">
              🤷
            </div>
            <div
              className="absolute top-1/2 left-5 text-3xl animate-pulse"
              style={{ animationDelay: "0.7s" }}
            >
              🔍
            </div>
            <div
              className="absolute top-1/2 right-5 text-3xl animate-pulse"
              style={{ animationDelay: "1.2s" }}
            >
              💭
            </div>
          </div>
        </div>

        {/* Funny Message */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Oops! This page went on vacation! 🏖️
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Looks like this page packed its bags and left without leaving a
            forwarding address.
          </p>
          <p className="text-base text-muted-foreground/80">
            Don&apos;t worry, it happens to the best of us! 😊
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/login">
              <Search className="w-4 h-4" />
              Try Login
            </Link>
          </Button>
        </div>

        {/* Fun Footer Message */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Smile className="w-4 h-4" />
            Remember: Even the best websites have their off days!
            <span className="ml-1">✨</span>
          </p>
        </div>
      </div>
    </div>
  );
}
