import React, { useState, useEffect } from 'react';
import { 
  Code, 
  User, 
  Briefcase, 
  FolderOpen, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Download,
  ChevronDown,
  ExternalLink,
  MapPin,
  Calendar,
  GraduationCap
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const skills = [
    { category: 'Développement Web', items: ['HTML5', 'CSS3', 'JavaScript', 'PHP'], color: 'bg-blue-500' },
    { category: 'Développement Desktop', items: ['Java', 'VB.NET'], color: 'bg-green-500' },
    { category: 'Frameworks', items: ['Django', 'React', 'Bootstrap', 'jQuery'], color: 'bg-purple-500' },
    { category: 'Modélisation', items: ['MERISE', 'UML'], color: 'bg-orange-500' }
  ];

  const projects = [
    {
      title: 'Application Web E-commerce',
      description: 'Développement d\'une plateforme e-commerce complète avec Django et React',
      technologies: ['Django', 'React', 'PostgreSQL', 'Bootstrap'],
      status: 'En cours'
    },
    {
      title: 'Système de Gestion Scolaire',
      description: 'Application desktop pour la gestion des étudiants et des notes',
      technologies: ['Java', 'MySQL', 'JavaFX'],
      status: 'Terminé'
    },
    {
      title: 'Site Web Portfolio',
      description: 'Portfolio personnel responsive avec animations modernes',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      status: 'Terminé'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-purple-400">F</span>otsing
            </div>
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-purple-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section === 'about' ? 'À propos' : 
                   section === 'skills' ? 'Compétences' :
                   section === 'projects' ? 'Projets' : 'Contact'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <User className="w-16 h-16 text-purple-400" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="text-purple-400">Fotsing Tegoum</span>
            <br />
            Benoit Roosevelt
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Développeur Junior
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center text-gray-300">
              <GraduationCap className="w-5 h-5 mr-2" />
              <span>Étudiant en Génie Logiciel</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Institut Universitaire de la Côte (IUC)</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Calendar className="w-5 h-5 mr-2" />
              <span>20 ans</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <FolderOpen className="w-5 h-5 mr-2" />
              Voir mes projets
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Me contacter
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            À propos de moi
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <p className="text-lg text-gray-300 leading-relaxed">
              Je suis un étudiant de 20 ans en Génie Logiciel à l'Institut Universitaire de la Côte (IUC). 
              Passionné par le développement logiciel, je m'efforce de créer des solutions innovantes et efficaces. 
              Mon objectif est de contribuer à des projets enrichissants tout en continuant à apprendre et à me 
              perfectionner dans le domaine.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Développement</h3>
                <p className="text-gray-400 text-sm">Solutions innovantes et efficaces</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Apprentissage</h3>
                <p className="text-gray-400 text-sm">Formation continue et perfectionnement</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Projets</h3>
                <p className="text-gray-400 text-sm">Contribution à des projets enrichissants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-colors duration-300">
                <div className={`w-12 h-12 ${skillGroup.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Terminé' 
                      ? 'bg-green-600/20 text-green-400' 
                      : 'bg-yellow-600/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le projet
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Restons en contact</h3>
              <p className="text-gray-300 mb-8">
                N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement pour échanger.
              </p>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/237679329389" 
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  +237 679 329 389
                </a>
                <a 
                  href="mailto:roosveltfotsing103@gmail.com" 
                  className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  roosveltfotsing103@gmail.com
                </a>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Envoyez-moi un message</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Votre nom"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Votre email"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Votre message"
                    rows={4}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors duration-200 font-medium"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Fotsing Tegoum Benoit Roosevelt. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;