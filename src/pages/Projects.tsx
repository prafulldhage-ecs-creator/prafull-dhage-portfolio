import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import synergia1 from "@/assets/synergia-1.jpg";
import synergia2 from "@/assets/synergia-2.jpg";
import solarCityBg from "@/assets/solar-city-bg.jpg";
import cpldProject from "@/assets/cpld-project.jpg";
import weatherProject from "@/assets/weather-project.png";
import zomatoClone from "@/assets/zomato-clone.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Synergia Solar Future City Model",
      description: "Won 2nd Prize for innovative solar-powered future city design with sustainable energy solutions.",
      images: [synergia1, synergia2],
      backgroundImage: solarCityBg,
      award: "2nd Prize Winner",
      tags: ["Solar Energy", "Innovation", "Sustainable Design"],
    },
    {
      title: "CPLD Based Gas Leakage Detector",
      description: "Electronics project using CPLD technology to detect gas leakage with LED indicators and alarm system.",
      images: [cpldProject],
      tags: ["CPLD", "Electronics", "Safety System"],
    },
    {
      title: "Weather Checker Website",
      description: "Real-time weather information website built using Weather API with location search functionality.",
      images: [weatherProject],
      link: "https://prafulldhage-ecs-creator.github.io/weather-site2/",
      tags: ["API Integration", "JavaScript", "Web Development"],
    },
    {
      title: "Zomato Clone Website",
      description: "Food delivery UI clone created with HTML and CSS, featuring responsive design and modern aesthetics.",
      images: [zomatoClone],
      tags: ["HTML", "CSS", "UI Design"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gradient text-center"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground text-center mb-16"
          >
            A showcase of my technical and creative work
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  {project.backgroundImage && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${project.backgroundImage})` }}
                    />
                  )}
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.award && (
                    <div className="absolute top-4 right-4 glass-card-strong px-4 py-2 rounded-full flex items-center gap-2">
                      <Award size={16} className="text-yellow-400" />
                      <span className="text-sm font-medium">{project.award}</span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <Button
                      asChild
                      className="w-full group/btn bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Live Project
                        <ExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
