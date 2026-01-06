import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Send, Check, Leaf } from 'lucide-react';
import { generateWhatsAppLink } from '@/data/products';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Message must be less than 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const whatsappMessage = `Hello N-Square Enterprises!\n\n👤 Name: ${formData.name.trim()}\n📞 Phone: ${formData.phone.trim()}\n\n💬 Message:\n${formData.message.trim()}`;
    
    setSubmitted(true);
    
    setTimeout(() => {
      window.open(generateWhatsAppLink(whatsappMessage), '_blank');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9841324010',
      link: 'tel:+919841324010',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Chat with us',
      link: generateWhatsAppLink('Hi! I have a question.'),
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'nsquareenterprises07@gmail.com',
      link: 'mailto:nsquareenterprises07@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Chennai, Tamil Nadu',
      link: '#',
    },
  ];

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background">
        <div className="container-custom section-padding pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="heading-1 text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our products or want to place a bulk order? 
              We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="heading-3 text-foreground mb-4">Let's Connect</h2>
                <p className="text-muted-foreground">
                  Whether you're ordering groceries, have questions, or want to share 
                  feedback, we're just a message away.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all group w-full max-w-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </motion.a>
                ))}
              </div>

              {/* Quick WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-primary text-primary-foreground w-full max-w-full"
              >
                <h3 className="font-semibold text-lg mb-2">Quick Order?</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Skip the form and chat with us directly on WhatsApp for instant support.
                </p>
                <a
                  href={generateWhatsAppLink("Hi! I'd like to place an order.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary-foreground text-primary font-semibold rounded-full hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat Now
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-full"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-card border border-border"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="heading-3 text-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. We're opening WhatsApp now 
                    so you can connect with us directly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 md:p-8 rounded-2xl bg-card border border-border w-full max-w-full"
                >
                  <h3 className="heading-3 text-foreground mb-6">Send a Message</h3>

                  <div className="space-y-5 w-full max-w-full">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        maxLength={100}
                        className={`w-full max-w-full box-border px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-destructive focus:ring-destructive/20'
                            : 'border-border focus:border-primary focus:ring-primary/20'
                        }`}
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full max-w-full box-border px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-destructive focus:ring-destructive/20'
                            : 'border-border focus:border-primary focus:ring-primary/20'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        maxLength={500}
                        className={`w-full max-w-full box-border px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 transition-all resize-none`}
                        placeholder="How can we help you?"
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                      )}
                      <p className="mt-1 text-xs text-muted-foreground text-right">
                        {formData.message.length}/500
                      </p>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary py-4"
                    >
                      <Send className="w-5 h-5" />
                      Send via WhatsApp
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
