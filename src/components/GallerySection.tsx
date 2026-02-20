import { motion } from "framer-motion";
import actionTraining1 from "@/assets/action-training-1.jpg";
import actionTraining2 from "@/assets/action-training-2.jpg";
import actionTraining3 from "@/assets/action-training-3.jpg";

const photos = [
  { src: actionTraining1, alt: "Treinamento corporativo Loop RH" },
  { src: actionTraining2, alt: "Dinâmica de grupo" },
  { src: actionTraining3, alt: "Capacitação de líderes" },
];

const GallerySection = () => {
  return (
    <section className="bg-deep py-20 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-electric/10 text-electric font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Na Prática
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
            Nosso Trabalho em Ação
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-electric/10"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 md:h-72 object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
