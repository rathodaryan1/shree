import { features } from "@/lib/data";
import { Award, Clock, Shield } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="text-primary text-2xl" />,
  clock: <Clock className="text-primary text-2xl" />,
  shield: <Shield className="text-primary text-2xl" />
};

export default function Features() {
  return (
    <section className="py-12 md:py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-4">Why Choose Shree Enterprise?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing high-quality fire safety solutions with professional service and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {iconMap[feature.icon]}
              </div>
              <h3 className="font-roboto font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
