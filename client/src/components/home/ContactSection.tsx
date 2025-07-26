import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { companyInfo, services } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="py-12 md:py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our services or want to request a quote? Fill out the form and our team will get back to you as soon as possible.
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
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={() => setIsSubmitted(true)}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <Input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                />

                <Input
                  type="text"
                  name="service"
                  placeholder="Service Interested In"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                />

                <Textarea
                  name="message"
                  placeholder="Tell us about your requirements"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                />

                <Button
                  type="submit"
                  className="bg-primary hover:bg-red-700 text-white font-roboto font-medium px-6 py-3"
                >
                  Submit Request
                </Button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-6">Contact Information</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-start mb-6">
                <MapPin className="text-primary shrink-0 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-roboto font-bold text-lg mb-2">Office Address</h3>
                  <p className="text-gray-600">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Phone className="text-primary shrink-0 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-roboto font-bold text-lg mb-2">Phone</h3>
                  <p className="text-gray-600">
                    <a href={`tel:+91${companyInfo.phone1}`} className="hover:text-primary">
                      +91 {companyInfo.phone1}
                    </a>
                    <br />
                    <a href={`tel:+91${companyInfo.phone2}`} className="hover:text-primary">
                      +91 {companyInfo.phone2}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-primary shrink-0 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-roboto font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a href={`mailto:${companyInfo.email}`} className="hover:text-primary">
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
              <div className="grid grid-cols-2 gap-2 ml-9">
                <div className="text-gray-700">Monday - Friday:</div>
                <div className="text-gray-600">{companyInfo.businessHours.weekdays}</div>

                <div className="text-gray-700">Saturday:</div>
                <div className="text-gray-600">{companyInfo.businessHours.saturday}</div>

                <div className="text-gray-700">Sunday:</div>
                <div className="text-gray-600">{companyInfo.businessHours.sunday}</div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 ml-9">
                <p className="text-primary font-medium">24/7 Emergency Service Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
