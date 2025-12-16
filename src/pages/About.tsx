import { Award, Target, Users, Leaf } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative py-24 bg-gradient-to-br from-[#0A2540] to-[#0D3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">About Pharous Energy</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A legacy of excellence in global energy trading, built on integrity, innovation, and commitment to our partners
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in the heart of London, Pharous Energy PLC has grown from a regional petroleum trading
                  company into a global force in energy commodities. Our name, inspired by the ancient lighthouse of
                  Alexandria, reflects our mission to guide and illuminate the path forward in international energy markets.
                </p>
                <p>
                  Over 15 years of operations, we have built an extensive network spanning 25+ countries, establishing
                  ourselves as a trusted intermediary between producers and end-users. Our expertise encompasses the
                  full spectrum of petroleum products and industrial water materials.
                </p>
                <p>
                  Today, we continue to expand our capabilities while maintaining the core values that have defined our
                  success: transparency, reliability, and unwavering commitment to quality.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office building"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#D4AF37] text-[#0A2540] p-4 sm:p-8 rounded-lg shadow-xl">
                <div className="text-3xl sm:text-4xl font-bold mb-1">15+</div>
                <div className="text-xs sm:text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and relationship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0A2540] rounded-full flex items-center justify-center mb-6">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Committed to the highest standards in every transaction, from sourcing to delivery
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0A2540] rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                Building lasting relationships through transparent practices and ethical business conduct
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0A2540] rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3">Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                Treating every client as a valued partner in mutual success and growth
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0A2540] rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Promoting responsible practices and supporting the transition to cleaner energy
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">Industry Certifications</h2>
            <p className="text-lg sm:text-xl text-gray-600">Recognized standards of excellence and compliance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 p-6 sm:p-8 rounded-lg text-center hover:border-[#D4AF37] transition-all">
              <div className="text-5xl sm:text-6xl font-bold text-[#0A2540] mb-4">ISO</div>
              <div className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-2">9001:2015</div>
              <p className="text-gray-600">Quality Management Systems</p>
            </div>

            <div className="border-2 border-gray-200 p-6 sm:p-8 rounded-lg text-center hover:border-[#D4AF37] transition-all">
              <div className="text-5xl sm:text-6xl font-bold text-[#0A2540] mb-4">ISO</div>
              <div className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-2">14001:2015</div>
              <p className="text-gray-600">Environmental Management</p>
            </div>

            <div className="border-2 border-gray-200 p-6 sm:p-8 rounded-lg text-center hover:border-[#D4AF37] transition-all">
              <div className="text-5xl sm:text-6xl font-bold text-[#0A2540] mb-4">ISO</div>
              <div className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-2">45001:2018</div>
              <p className="text-gray-600">Occupational Health & Safety</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A2540]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Vision for the Future</h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            To be the most trusted and innovative energy trading partner globally, driving sustainable growth
            for our clients while contributing to a responsible energy transition. We envision a future where
            excellence in trade goes hand-in-hand with environmental stewardship and social responsibility.
          </p>
        </div>
      </section>
    </div>
  );
}
