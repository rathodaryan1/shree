import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { services } from "@/lib/data";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const quoteFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Please provide some details about your requirements" }),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export default function Quote() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Set the page title
  useEffect(() => {
    document.title = "Get a Quote - Shree Enterprise";
  }, []);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: QuoteFormValues) => {
      const response = await apiRequest("POST", "/api/contact", values);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Sent",
        description: "We'll get back to you with a quote as soon as possible!",
        variant: "default",
      });
      form.reset();
      setIsSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: QuoteFormValues) {
    mutate(values);
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-roboto font-bold mb-4">Request a Quote</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get a personalized quote for your fire safety requirements. Our team will analyze your needs and provide a competitive price estimate.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                <h3 className="font-roboto font-bold text-xl text-green-700 mb-2">
                  Thank You for Your Quote Request!
                </h3>
                <p className="text-green-600 mb-4">
                  We've received your request and will prepare a detailed quote for you within 24-48 hours.
                </p>
                <Button 
                  className="mt-4 bg-primary hover:bg-red-700" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Request Another Quote
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-roboto font-bold mb-6">Your Quote Details</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your email" 
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Phone</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your phone number" 
                              type="tel"
                              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Service Required</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map(service => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.title}
                                </SelectItem>
                              ))}
                              <SelectItem value="other">Other / Multiple Services</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your requirements in detail (building type, square footage, specific needs, etc.)" 
                              rows={5}
                              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="bg-primary hover:bg-red-700 text-white font-roboto font-medium px-6 py-3 w-full sm:w-auto"
                      disabled={isPending}
                    >
                      {isPending ? "Submitting..." : "Request Free Quote"}
                    </Button>
                  </form>
                </Form>
              </>
            )}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-roboto font-bold mb-4">Why Request a Quote from Shree Enterprise?</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Detailed assessment of your specific fire safety needs</li>
              <li>Transparent pricing with no hidden costs</li>
              <li>Customized solutions tailored to your property</li>
              <li>Competitive rates with maximum value</li>
              <li>Prompt response within 24-48 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}