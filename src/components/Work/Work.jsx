import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title with CSS animation */}
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl font-bold text-white animate-slide-down">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 animate-grow-width"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold animate-fade-in-delay">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid with CSS animations */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 place-items-center">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="border border-white/20 bg-gray-900/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-purple-500/50 transition-all duration-300 w-full h-full flex flex-col justify-between group animate-card-pop"
          >
            <div className="p-2 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium">View Details →</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow justify-between">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-[10px] text-purple-500 rounded-full px-2 py-0.5 hover:scale-105 transition-transform duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with CSS animations */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-auto animate-fade-in">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative border border-purple-500/30 animate-modal-pop">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500 transition-colors duration-200 hover:rotate-90 hover:scale-110"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[300px] object-contain rounded-xl shadow-2xl animate-image-fade-in"
                />
              </div>
              <div className="lg:p-8 p-4 animate-content-fade-in">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 animate-tag-pop"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-sm font-semibold text-center flex items-center gap-2 transition-all duration-300 hover:scale-105"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add these styles to your global CSS file */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes growWidth {
          from { width: 0; }
          to { width: 8rem; }
        }
        @keyframes cardPop {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes modalPop {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes imageFadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes contentFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes tagPop {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.5s ease-out 0.3s forwards;
        }
        .animate-slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }
        .animate-grow-width {
          animation: growWidth 0.5s ease-out forwards;
        }
        .animate-card-pop {
          animation: cardPop 0.5s ease-out forwards;
        }
        .animate-modal-pop {
          animation: modalPop 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }
        .animate-image-fade-in {
          animation: imageFadeIn 0.5s ease-out 0.2s forwards;
        }
        .animate-content-fade-in {
          animation: contentFadeIn 0.5s ease-out 0.3s forwards;
        }
        .animate-tag-pop {
          opacity: 0;
          animation: tagPop 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Work;