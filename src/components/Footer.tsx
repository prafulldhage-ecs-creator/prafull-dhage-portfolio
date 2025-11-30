import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/prafull-dhage-781565371",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/praafulll._?igsh=N3UxMHV5MXI3Zng0",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:prafulldhage-ecs@atharvacoe.ac.in",
      label: "Email",
    },
  ];

  return (
    <footer className="glass-card border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            Designed & Built by Prafull Dhage © 2025
          </motion.p>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
