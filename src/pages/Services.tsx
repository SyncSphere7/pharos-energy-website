import { Droplets, Fuel, Ship, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const petroleumProducts = [
    'Crude Oil',
    'Diesel Fuel',
    'Gasoline',
    'Jet Fuel',
    'Heavy Fuel Oil',
    'Marine Gas Oil',
    'Lubricants',
    'Bitumen',
  ];

  const waterMaterials = [
    'Industrial Process Water',
    'Demineralized Water',
    'Water Treatment Chemicals',
    'Desalination Solutions',
    'Water Storage Systems',
    'Quality Testing Services',
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative py-24 bg-gradient-to-br from-[#0A2540] to-[#0D3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive energy and water materials trading solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Oil refinery"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-6">
                <Fuel className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[#0A2540] font-semibold">Petroleum Division</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">Petroleum Products Trading</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Our petroleum division specializes in sourcing, trading, and distributing a comprehensive range of
                refined petroleum products. With direct relationships with major refineries and a deep understanding
                of global markets, we ensure competitive pricing and reliable supply.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                Whether you require bulk shipments or specialized delivery schedules, our logistics network and market
                expertise guarantee seamless transactions from procurement to final delivery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {petroleumProducts.map((product) => (
                  <div key={product} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-gray-700">{product}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#0A2540] text-white font-semibold rounded-md hover:bg-[#0A2540]/90 transition-all"
              >
                Request Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-6">
                <Droplets className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[#0A2540] font-semibold">Water Materials Division</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">Industrial Water Solutions</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Our water materials division provides essential industrial water products and treatment solutions for
                manufacturing, processing, and energy production facilities worldwide. We understand the critical role
                that water quality plays in industrial operations.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                From specialized treatment chemicals to complete water management systems, we deliver solutions that
                meet the most stringent specifications and regulatory requirements.
              </p>

              <div className="grid grid-cols-1 gap-4 mb-8">
                {waterMaterials.map((material) => (
                  <div key={material} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-gray-700">{material}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#0A2540] text-white font-semibold rounded-md hover:bg-[#0A2540]/90 transition-all"
              >
                Discuss Requirements
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/416704/pexels-photo-416704.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Water treatment facility"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">Additional Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support beyond product delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0A2540] rounded-lg flex items-center justify-center mb-6">
                <Ship className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-4">Logistics Management</h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end supply chain coordination including shipping, warehousing, and customs clearance across
                international borders
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0A2540] rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-4">Market Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time market data, price forecasting, and strategic advisory to optimize your procurement timing
                and budgeting
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0A2540] rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-4">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Independent testing, certification, and quality verification services to ensure products meet your
                exact specifications
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A2540]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Custom Solutions Available</h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
            Every business has unique requirements. Our experienced team works closely with you to develop tailored
            solutions that address your specific operational needs, budget constraints, and delivery timelines.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-semibold rounded-md hover:bg-[#C4A137] transition-all"
          >
            Discuss Your Needs
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
