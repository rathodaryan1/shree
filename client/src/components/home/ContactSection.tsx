import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { companyInfo, services } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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

// ✅ Validation Schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  service: z.string().optional(),
  message: z.string().optional(),

});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  // ✅ Netlify submission (instead of apiRequest)
  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...values,
        }).toString(),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "We'll get back to you as soon as possible!",
        });
        form.reset();
        setIsSubmitted(true);
      } else {
        throw new Error("Network error");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about our services or want to request a quote? Fill
              out the form and our team will get back to you as soon as
              possible.
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                <h3 className="font-roboto font-bold text-xl text-green-700 mb-2">
                  Thank You for Your Message!
                </h3>
                <p className="text-green-600">
                  We've received your inquiry and will contact you shortly.
                </p>
                <Button
                  className="mt-4 bg-primary hover:bg-red-700"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                {/* ✅ Netlify requires hidden form-name field */}
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="w-full px-4 py-3 border border-gray-300 rounded-md"
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
                          <FormLabel className="text-gray-700 font-medium">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your email"
                              type="email"
                              className="w-full px-4 py-3 border border-gray-300 rounded-md"
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
                        <FormLabel className="text-gray-700 font-medium">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your phone number"
                            type="tel"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ✅ Service dropdown restored */}
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Service Interested In
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem
                                key={service.id}
                                value={service.title}
                              >
                                {service.title}
                              </SelectItem>
                            ))}
                            <SelectItem value="other">Other</SelectItem>
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
                        <FormLabel className="text-gray-700 font-medium">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your requirements"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-red-700 text-white px-6 py-3"
                  >
                    Submit Request
                  </Button>
                </form>
              </Form>
            )}
          </div>

          {/* ✅ Right side info same as before */}
          <div>
            <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-6">
              Contact Information
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-start mb-6">
                <MapPin className="text-primary shrink-0 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-roboto font-bold text-lg mb-2">
                    Office Address
                  </h3>
                  <p className="text-gray-600">{companyInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <Phone className="text-primary shrink-0 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-roboto font-bold text-lg mb-2">Phone</h3>
                  <p className="text-gray-600">
                    <a
                      href={`tel:+91${companyInfo.phone1}`}
                      className="hover:text-primary"
                    >
                      +91 {companyInfo.phone1}
                    </a>
                    <br />
                    <a
                      href={`tel:+91${companyInfo.phone2}`}
                      className="hover:text-primary"
                    >
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary shrink-0 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-roboto font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="hover:text-primary"
                    >
                      {companyInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
  <div className="flex items-start mb-4">
    <Clock className="text-primary shrink-0 text-xl mt-1 mr-4" />
    <h3 className="font-roboto font-bold text-lg">Business Hours</h3>
  </div>

  {/* ✅ New 24x7 format */}
  <div className="ml-9 mt-2">
    <p className="text-gray-700 font-medium">Open 24 Hours - 7 Days a Week</p>
  </div>

  <div className="mt-4 pt-4 border-t border-gray-200 ml-9">
    <p className="text-primary font-medium">
      24/7 Emergency Service Available
    </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
