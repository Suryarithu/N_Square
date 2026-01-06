{/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Global Reach
            </div>
            <h2 className="heading-2 text-foreground mb-4">
              Exporting Authentic Taste <span className="text-primary">Worldwide</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We proudly export premium grocery products from Chennai to customers across the globe, 
              bringing the authentic flavors of Karaikudi to international kitchens.
            </p>
          </motion.div> */}
  {/* Story Section
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={Aboutus}
                alt="Traditional Indian spices"
                className="rounded-3xl shadow-lift"
              />
            </motion.div>

           
          </div>
        </div>
      </section> */}

      {/* Timeline Section */}
      {/* <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A decade of dedication to bringing authentic flavors to your table.
            </p>
          </motion.div> */}

          {/* <div className="relative max-w-4xl mx-auto"> */}
            {/* Timeline Line */}
            {/* <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" /> */}
            
            {/* Arrow Animation */}
            {/* <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hidden md:flex justify-center mb-8"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
              >
                <ArrowRight className="w-6 h-6 text-primary-foreground rotate-90" />
              </motion.div>
            </motion.div>

            <div className="space-y-8 md:space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-primary/30 transition-colors">
                      <span className="text-sm font-semibold text-primary">{item.year}</span>
                      <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2, type: 'spring' }}
                    className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-glow z-10"
                  >
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      {/* <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-foreground mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our values guide every decision we make, from sourcing to delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}