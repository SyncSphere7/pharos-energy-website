import { ArrowRight, BarChart3, Globe2, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [counters, setCounters] = useState({ countries: 0, years: 0, volume: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { countries: 25, years: 15, volume: 500 };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        countries: Math.floor(targets.countries * progress),
        years: Math.floor(targets.years * progress),
        volume: Math.floor(targets.volume * progress),
      });

      if (step >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/95 to-[#0A2540]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Powering Global
            <span className="block text-[#D4AF37] mt-2">Energy Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Leading international trade in petroleum products and water materials across continents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-semibold rounded-md hover:bg-[#C4A137] transition-all transform hover:scale-105"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#0A2540] transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#0A2540] mb-2">{counters.countries}+</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#0A2540] mb-2">{counters.years}+</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#0A2540] mb-2">{counters.volume}K+</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Tonnes Traded Annually</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">Our Core Competencies</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering excellence across the energy supply chain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-[#D4AF37] transition-all hover:shadow-lg group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0A2540] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3">Petroleum Trading</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive portfolio of refined petroleum products with competitive pricing and reliable supply
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-[#D4AF37] transition-all hover:shadow-lg group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0A2540] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                <Globe2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3">Global Logistics</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless international shipping and distribution networks spanning multiple continents
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-[#D4AF37] transition-all hover:shadow-lg group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0A2540] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorous quality control and compliance with international standards across all operations
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-[#D4AF37] transition-all hover:shadow-lg group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0A2540] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3">Market Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Data-driven insights and strategic advisory for optimal procurement and supply decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Trusted Partner in Energy Markets
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With operations spanning across Europe, Asia, Africa, and the Americas, Pharos Energy PLC has
                established itself as a reliable partner in the global energy sector.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our expertise in petroleum products and water materials trading, combined with our commitment to
                operational excellence, ensures that our clients receive superior service and value.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-[#D4AF37] text-[#0A2540] font-semibold rounded-md hover:bg-[#C4A137] transition-all"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial facility"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover how Pharos Energy can optimize your supply chain and deliver value to your operations
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#0A2540] text-white font-semibold rounded-md hover:bg-[#0A2540]/90 transition-all transform hover:scale-105"
          >
            Start a Conversation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
