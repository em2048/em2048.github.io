import { motion } from "motion/react";
import { Heart, Sparkles, Star } from "lucide-react";

export function FloatingHearts() {
  const decorations = [
    { Icon: Heart, delay: 0, x: "10%", duration: 15 },
    { Icon: Sparkles, delay: 2, x: "25%", duration: 18 },
    { Icon: Star, delay: 1, x: "40%", duration: 20 },
    { Icon: Heart, delay: 3, x: "60%", duration: 16 },
    { Icon: Sparkles, delay: 1.5, x: "75%", duration: 19 },
    { Icon: Star, delay: 2.5, x: "90%", duration: 17 },
    { Icon: Heart, delay: 0.5, x: "15%", duration: 21 },
    { Icon: Star, delay: 3.5, x: "50%", duration: 14 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {decorations.map((decoration, index) => {
        const { Icon, delay, x, duration } = decoration;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: x }}
            initial={{ y: "110%", opacity: 0, rotate: 0 }}
            animate={{
              y: "-10%",
              opacity: [0, 0.6, 0.6, 0],
              rotate: 360,
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon className="w-6 h-6 text-white/30 fill-white/20" />
          </motion.div>
        );
      })}
    </div>
  );
}
