import { motion } from "framer-motion";
import teamAlessandra from "@/assets/team-alessandra.jpg";
import teamGerliane from "@/assets/team-gerliane.jpg";
import { MapPin, Calendar, Heart } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    title: "Mais de 10 Anos",
    desc: "de experiência e inovação no mercado de Gente e Gestão.",
  },
  {
    icon: MapPin,
    title: "Sede em Ipatinga-MG",
    desc: "com atendimento presencial e online para todo o Brasil.",
  },
  {
    icon: Heart,
    title: "Pessoas como Ativo",
    desc: "Tratamos as pessoas como o maior ativo da sua empresa.",
  },
];

const team = [
  {
    name: "Alessandra Reis",
    role: "Psicóloga Organizacional e Especialista em Gente e Gestão",
    photo: teamAlessandra,
  },
  {
    name: "Gerliane Vieira",
    role: "Analista Comportamental e Especialista em RH",
    photo: teamGerliane,
  },
];

const AboutSection = () => {
  return (
    <section id="quem-somos" className="bg-neutral-light py-24 px-6 md:px-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-electric/10 text-electric font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Quem Somos
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-deep mb-6">
            Mais de 10 Anos de{" "}
            <span className="text-electric">Experiência e Inovação</span>
          </h2>
          <p className="font-body text-depth text-lg max-w-3xl mx-auto leading-relaxed">
            Com sede em Ipatinga-MG e atendimento em todo o Brasil, a Loop Inovação em RH é referência em consultoria de Gente e Gestão no Vale do Aço. Nosso compromisso é tratar as pessoas como o maior ativo da sua empresa, atuando com foco na resolução estratégica de problemas.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl border border-border hover:border-electric/30 hover:shadow-lg hover:shadow-electric/10 transition-all bg-background text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-electric" />
              </div>
              <h3 className="font-headline text-xl font-bold text-deep mb-2">{item.title}</h3>
              <p className="font-body text-depth leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-deep mb-4">
            Nossa Equipe
          </h3>
          <p className="font-body text-depth text-lg">
            Especialistas dedicadas a transformar sua organização.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-electric/20">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-headline text-lg font-bold text-deep">{person.name}</h4>
              <p className="font-body text-sm text-depth mt-1">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
