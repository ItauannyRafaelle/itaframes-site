import Header from "@/components/Header";
import CTA from "@/components/CTA";
import SkillProgress from "@/components/SkillProgress";
import { Palette, Video, Brush, Camera } from "lucide-react";

const Especialidades = () => {
  const specialties = [
    {
      icon: Brush,
      title: "Design Criativo",
      description: "Criação de interfaces visuais atrativas e funcionais com foco na experiência do usuário"
    },
    {
      icon: Video,
      title: "Produção Audiovisual",
      description: "Criação de conteúdo audiovisual profissional, desde a captação até a pós-produção"
    }
  ];

  const designSkills = [
    { name: "Adobe Photoshop", percentage: 75, color: "bg-blue-500" },
    { name: "Adobe Illustrator", percentage: 55, color: "bg-orange-500" },
    { name: "Figma", percentage: 95, color: "bg-purple-500" }
  ];

  const filmSkills = [
    { name: "Prequel", percentage: 90, color: "bg-green-500" },
    { name: "Capcut", percentage: 100, color: "bg-primary" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Minhas <span className="text-primary">Especialidades</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Especializado em design criativo e produção audiovisual
            </p>
          </div>
        </section>

        {/* Specialties Cards */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {specialties.map((specialty, index) => (
                <div key={index} className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <specialty.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">{specialty.title}</h3>
                  <p className="text-muted-foreground text-center">{specialty.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Design Skills */}
              <div>
                <div className="flex items-center mb-8">
                  <Palette className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Design</h2>
                </div>
                {designSkills.map((skill, index) => (
                  <SkillProgress
                    key={index}
                    skill={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                  />
                ))}
              </div>

              {/* Film Skills */}
              <div>
                <div className="flex items-center mb-8">
                  <Camera className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Filmagens</h2>
                </div>
                {filmSkills.map((skill, index) => (
                  <SkillProgress
                    key={index}
                    skill={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
    </div>
  );
};

export default Especialidades;