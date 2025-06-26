import React from "react";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// A simple SVG Google Icon component to avoid adding new dependencies
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Google</title>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.62 1.9-5.63 1.9-4.75 0-8.58-3.9-8.58-8.62s3.83-8.62 8.58-8.62c2.7 0 4.52.98 5.6 2.02l2.6-2.6C18.4 1.16 15.76 0 12.48 0 5.88 0 .04 5.84.04 12.98s5.84 12.98 12.44 12.98c3.34 0 6.08-1.1 8.16-3.26 2.16-2.16 2.86-5.2 2.86-8.56 0-.76-.08-1.48-.2-2.16H12.48z" />
  </svg>
);

const SocialAuthButtons: React.FC = () => {
  console.log("SocialAuthButtons loaded");

  const handleSocialLogin = (provider: 'google' | 'github') => {
    // In a real app, this would trigger the OAuth flow.
    // For this example, we'll just log to the console.
    console.log(`Initiating ${provider} login...`);
    // You could also use a toast to inform the user
    // e.g., toast({ title: "Redirecting...", description: `Redirecting to ${provider} for authentication.` });
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" type="button" onClick={() => handleSocialLogin('google')}>
          <GoogleIcon className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button variant="outline" type="button" onClick={() => handleSocialLogin('github')}>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default SocialAuthButtons;