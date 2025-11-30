import { motion } from "framer-motion";
import { Code2, Palette, Award, Users, Trophy, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const skills = [
    { name: "C Language", icon: Code2 },
    { name: "Python", icon: Code2 },
    { name: "UI/UX Design", icon: Palette },
    { name: "Frontend Web Development", icon: Code2 },
    { name: "Git & GitHub", icon: Code2 },
    { name: "Video Editing", icon: Palette },
    { name: "Guitar", icon: Palette },
  ];

  const experiences = [
    {
      icon: Users,
      title: "Assistant Head – Webmaster",
      org: "IEEE Techithon Committee",
    },
    {
      icon: Lightbulb,
      title: "UI/UX Member",
      org: "GDGC Google Developer Group Campus",
    },
    {
      icon: Users,
      title: "Digital Team Volunteer",
      org: "1st Year Program",
    },
    {
      icon: Award,
      title: "Workshop Participant",
      org: "Git & GitHub by GDGC",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "2nd Prize",
      description: "Synergia Solar Power Future City Project",
    },
    {
      icon: Lightbulb,
      title: "CPLD Based Gas Leakage Detector",
      description: "2nd year innovative project",
    },
    {
      icon: Code2,
      title: "Weather Website",
      description: "Built using Weather API",
    },
    {
      icon: Code2,
      title: "Zomato Clone",
      description: "Created with HTML/CSS",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto space-y-16"
        >
          {/* About Me Section */}
          <section>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold mb-8 text-gradient"
            >
              About Me
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <p className="text-lg text-foreground/90 leading-relaxed space-y-4">
                <span className="block">
                  I am Prafull Dhage, a 2nd-year Engineering student at Atharva College of Engineering, Mumbai.
                </span>
                <span className="block">
                  I know C language, Python, UI/UX, and frontend development. I have built multiple projects using code and AI.
                </span>
                <span className="block">
                  I also do video editing and play guitar as hobbies, bringing creativity to both my technical and artistic pursuits.
                </span>
              </p>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-gradient"
            >
              Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 rounded-xl flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon size={24} className="text-white" />
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-gradient"
            >
              Experience
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                      <exp.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.org}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-gradient"
            >
              Achievements
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="glass-card p-6 rounded-xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                      <achievement.icon size={28} className="text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
