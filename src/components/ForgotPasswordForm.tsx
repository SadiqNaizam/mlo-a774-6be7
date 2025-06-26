import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define the validation schema using Zod
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

// Simulate an API call for sending a password reset link
const sendPasswordResetEmail = async (email: string): Promise<{ success: boolean }> => {
  console.log(`Sending password reset email to: ${email}`);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In a real app, you would make an API call here.
  // We'll randomly simulate success or failure for demonstration.
  if (Math.random() > 0.1) { // 90% success rate
    return { success: true };
  } else {
    throw new Error("Failed to send email. Please try again later.");
  }
};

export const ForgotPasswordForm: React.FC = () => {
  console.log("ForgotPasswordForm loaded");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => sendPasswordResetEmail(values.email),
    onSuccess: () => {
      toast.success("Password reset link sent!", {
        description: "If an account with that email exists, you will receive a reset link shortly.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast.error("An error occurred", {
        description: error.message || "Something went wrong.",
      });
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Forgot Your Password?</CardTitle>
        <CardDescription>
          No problem. Enter your email address and we'll send you a link to reset it.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="email" 
                        placeholder="name@example.com" 
                        {...field}
                        className="pl-10" 
                        disabled={mutation.isPending}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={mutation.isPending}>
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Reset Link"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="link" asChild>
          <Link to="/">Back to login</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ForgotPasswordForm;