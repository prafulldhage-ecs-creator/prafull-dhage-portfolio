import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  const scrollToProjects = () => {
    window.location.href = "/projects";
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px hsla(265, 85%, 60%, 0.4)",
                    "0 0 60px hsla(265, 85%, 60%, 0.6), 0 0 80px hsla(195, 100%, 50%, 0.4)",
                    "0 0 20px hsla(265, 85%, 60%, 0.4)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/50 mx-auto animate-float"
              >
                <img
                  src={profileImage}
                  alt="Prafull Dhage"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hey, I'm{" "}
              <span className="text-gradient">Prafull Dhage</span> 👋
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-3 flex-wrap text-xl md:text-2xl text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <Sparkles className="text-primary" size={20} />
                UI/UX Designer
              </span>
              <span>•</span>
              <span>Web Developer</span>
              <span>•</span>
              <span>Innovator</span>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              2nd Year Engineering Student | C & Python Coder | UI/UX Designer | GDGC & IEEE Member | Video Editor | Guitarist
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-105 transition-transform"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card border-primary/30 hover:border-primary/50 hover:scale-105 transition-all"
                >
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
