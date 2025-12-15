import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { supabase, type ContactInquiry } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const inquiry: ContactInquiry = {
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        phone: formData.phone || undefined,
        subject: formData.subject,
        message: formData.message,
      };

      const { error } = await supabase.from('contact_inquiries').insert([inquiry]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative py-24 bg-gradient-to-br from-[#0A2540] to-[#0D3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team to discuss your energy trading requirements
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-8">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're looking to establish a new supply partnership or have questions about our services,
                our experienced team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2540] mb-1">Headquarters</h3>
                    <p className="text-gray-600">
                      Pharos Energy PLC
                      <br />
                      27/28 Eastcastle Street
                      <br />
                      London, W1W 8DH
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2540] mb-1">Email</h3>
                    <p className="text-gray-600">info@pharousenergy-plc.uk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2540] mb-1">Phone</h3>
                    <p className="text-gray-600">+447377469494</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2540] mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday
                      <br />
                      9:00 AM - 6:00 PM GMT
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-[#0A2540] mb-3">Regional Offices</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Singapore</li>
                  <li>Dubai, UAE</li>
                  <li>Houston, USA</li>
                  <li>Rotterdam, Netherlands</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-6">Send Us a Message</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800">
                      Thank you for your inquiry. Our team will be in touch with you shortly.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800">
                      There was an error submitting your inquiry. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                        placeholder="Your Company Ltd"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                        placeholder="+447377469494"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="Petroleum Products Inquiry">Petroleum Products Inquiry</option>
                      <option value="Water Materials Inquiry">Water Materials Inquiry</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="General Information">General Information</option>
                      <option value="Support">Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#0A2540] text-white font-semibold rounded-md hover:bg-[#0A2540]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-4">Why Partner With Pharos Energy?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-3">24/7</div>
              <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2">Global Support</h3>
              <p className="text-gray-600">Round-the-clock customer service across all time zones</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-3">48h</div>
              <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2">Response Time</h3>
              <p className="text-gray-600">Quick turnaround on quotes and inquiries</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-3">100%</div>
              <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">Committed to exceeding expectations on every transaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
