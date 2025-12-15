import { MapPin, Ship, Building2, TrendingUp } from 'lucide-react';

export default function Operations() {
  const regions = [
    {
      name: 'Europe',
      countries: ['United Kingdom', 'Netherlands', 'Belgium', 'Germany', 'France', 'Spain'],
      description: 'Headquarters in London with extensive distribution network across Western Europe',
    },
    {
      name: 'Middle East & Africa',
      countries: ['UAE', 'Saudi Arabia', 'Egypt', 'Nigeria', 'South Africa', 'Kenya'],
      description: 'Strategic partnerships with regional producers and expanding presence across key markets',
    },
    {
      name: 'Asia Pacific',
      countries: ['Singapore', 'China', 'India', 'Malaysia', 'Thailand', 'Australia'],
      description: 'Rapidly growing operations serving manufacturing and industrial sectors',
    },
    {
      name: 'Americas',
      countries: ['USA', 'Canada', 'Brazil', 'Mexico', 'Colombia', 'Argentina'],
      description: 'Comprehensive coverage from North to South America with established supply chains',
    },
  ];

  const capabilities = [
    {
      icon: Ship,
      title: 'Marine Logistics',
      stat: '200+',
      unit: 'Shipments Annually',
      description: 'Coordinated vessel charters and freight forwarding across major shipping routes',
    },
    {
      icon: Building2,
      title: 'Storage Facilities',
      stat: '15',
      unit: 'Partner Terminals',
      description: 'Strategic storage locations near major ports for efficient inventory management',
    },
    {
      icon: TrendingUp,
      title: 'Trade Volume',
      stat: '500K+',
      unit: 'Tonnes Per Year',
      description: 'Consistent growth in transaction volumes across all product categories',
    },
    {
      icon: MapPin,
      title: 'Global Network',
      stat: '25+',
      unit: 'Countries',
      description: 'Established presence and trusted partners in key markets worldwide',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative py-24 bg-gradient-to-br from-[#0A2540] to-[#0D3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Global Operations</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A worldwide network connecting suppliers and customers across continents
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">Operational Excellence</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Infrastructure and capabilities that power global trade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <div key={capability.title} className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-1">{capability.stat}</div>
                  <div className="text-sm text-[#D4AF37] font-semibold mb-3">{capability.unit}</div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{capability.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>

          <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden mb-12">
            <img
              src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="World map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A2540]/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 px-4">Operating Across 4 Continents</h3>
                <p className="text-lg sm:text-xl px-4">Connecting producers and consumers worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">Regional Presence</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Established operations and partnerships in key markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region) => (
              <div key={region.name} className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-4">{region.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{region.description}</p>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span
                      key={country}
                      className="px-3 py-1 bg-[#D4AF37]/10 text-[#0A2540] text-sm font-medium rounded-full"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">Supply Chain Excellence</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Our operations are built on a foundation of reliability, efficiency, and transparency. We leverage
                advanced logistics management systems and real-time tracking to ensure every shipment meets our
                exacting standards.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                From port operations to final delivery, our team coordinates every detail to minimize delays,
                optimize costs, and maintain the highest quality standards throughout the supply chain.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0A2540] font-bold text-base sm:text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0A2540] mb-1">Strategic Sourcing</h4>
                    <p className="text-gray-600">Direct relationships with producers and refineries worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0A2540] font-bold text-base sm:text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0A2540] mb-1">Quality Control</h4>
                    <p className="text-gray-600">Rigorous testing and certification at every stage</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0A2540] font-bold text-base sm:text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0A2540] mb-1">Logistics Coordination</h4>
                    <p className="text-gray-600">Seamless multi-modal transportation and customs clearance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0A2540] font-bold text-base sm:text-lg">4</span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0A2540] mb-1">Final Delivery</h4>
                    <p className="text-gray-600">On-time delivery with comprehensive documentation</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cargo ship"
                className="rounded-lg shadow-xl mb-6"
              />
              <img
                src="https://images.pexels.com/photos/4464482/pexels-photo-4464482.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Port operations"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A2540]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Expanding Global Reach</h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            As international energy markets evolve, we continue to expand our operational footprint into emerging
            markets while strengthening our presence in established regions. Our commitment to building long-term
            partnerships ensures sustainable growth for our business and our clients.
          </p>
        </div>
      </section>
    </div>
  );
}
