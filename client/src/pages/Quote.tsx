import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Quote() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Get a Quote - Shree Enterprise";
  }, []);

  if (isSubmitted) {
    return (
      <div className="py-8 text-center max-w-xl mx-auto">
        <h3 className="text-green-700 font-bold text-xl mb-2">
          ✅ Thank You for Your Quote Request!
        </h3>
        <p className="text-green-600 mb-4">
          We've received your request and will contact you within 24-48 hours.
        </p>
        <Button
          className="bg-primary hover:bg-red-700"
          onClick={() => setIsSubmitted(false)}
        >
          Request Another Quote
        </Button>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Request a Quote</h1>

        <form
          name="quote"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={() => setIsSubmitted(true)}
          className="space-y-6 bg-white shadow p-6 rounded-lg"
        >
          <input type="hidden" name="form-name" value="quote" />
          <input type="hidden" name="bot-field" />

          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Input type="text" name="phone" placeholder="Your Phone" required />
          <Input type="text" name="service" placeholder="Service Required" />
          <Textarea
            name="message"
            placeholder="Tell us about your requirements"
            rows={4}
            required
          />

          <Button
            type="submit"
            className="bg-primary hover:bg-red-700 text-white w-full sm:w-auto"
          >
            Request Free Quote
          </Button>
        </form>
      </div>
    </div>
  );
}
