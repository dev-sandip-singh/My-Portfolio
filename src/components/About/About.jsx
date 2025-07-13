import React, { useState, useEffect, useRef } from 'react';
import profileImage from '../../assets/picofme (1).png';

const About = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const profileRef = useRef(null);
  
  const roles = [
    'Fullstack Developer',
    'Java Developer',
    'Problem Solver'
  ];

  // Advanced typing effect with randomized speeds
  useEffect(() => {
    let timeout;
    const currentRoleText = roles[currentRole];
    const typingSpeed = 80 + Math.random() * 40; // Randomize typing speed
    const eraseSpeed = 30 + Math.random() * 20; // Randomize erase speed
    
    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRoleText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500 + Math.random() * 1000); // Random pause before erasing
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, eraseSpeed);
      } else {
        setCurrentRole((currentRole + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentRole, isTyping]);

  // Mouse move effect for profile image
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleY = (x - centerX) / 20;
        const angleX = (centerY - y) / 20;
        
        profileRef.current.style.transform = `
          rotateY(${angleY}deg)
          rotateX(${angleX}deg)
          scale(1.05)
        `;
        profileRef.current.style.boxShadow = `
          ${-angleY * 2}px ${angleX * 2}px 30px rgba(130, 69, 236, 0.4)
        `;
      }
    };

    const handleMouseLeave = () => {
      if (profileRef.current) {
        profileRef.current.style.transform = 'rotateY(0) rotateX(0) scale(1)';
        profileRef.current.style.boxShadow = '0 20px 40px rgba(130, 69, 236, 0.4)';
      }
    };

    const profileElement = profileRef.current;
    if (profileElement) {
      profileElement.addEventListener('mousemove', handleMouseMove);
      profileElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (profileElement) {
        profileElement.removeEventListener('mousemove', handleMouseMove);
        profileElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-purple-900 opacity-20 blur-3xl animate-float"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-purple-800 opacity-20 blur-3xl animate-float-delay"></div>
      
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 lg:ml-10 relative z-10">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting with advanced animation */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
            style={{ 
              animation: 'slideInLeft 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
              opacity: 0,
              transform: 'translateX(-30px) skewX(-10deg)'
            }}
          >
            Hi, I am
            <span className="inline-block ml-2 wave-animate">👋</span>
          </h1>
          
          {/* Name with gradient animation */}
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent mb-4 leading-tight bg-clip-text"
            style={{ 
              animation: 'slideInLeft 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.2s forwards',
              opacity: 0,
              transform: 'translateX(-30px)',
              backgroundImage: 'linear-gradient(90deg, #a855f7, #ec4899, #f97316)',
              backgroundSize: '200% auto',
              animationFillMode: 'forwards'
            }}
          >
            Sandip Singh
          </h2>
          
          {/* Skills Heading with advanced typing effect */}
          <h3 
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text leading-tight min-h-[3.5rem]"
            style={{ 
              animation: 'slideInLeft 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.4s forwards',
              opacity: 0,
              transform: 'translateX(-30px)',
              backgroundImage: 'linear-gradient(90deg, #8245ec, #a855f7)'
            }}
          >
            <span className="text-white">I am a </span>
            <span className="text-gradient-purple">{displayText}</span>
            <span className="cursor-blink">|</span>
          </h3>
          
          {/* About Me Paragraph with advanced animation */}
          <div className="relative">
            <p 
              className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed text-justify relative z-10"
              style={{ 
                animation: 'fadeInUp 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.6s forwards',
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              I am a passionate full-stack developer with strong expertise in Java and modern front-end technologies. I specialize in building responsive, high-performance web applications using Spring Boot, React.js, Node.js, and core web technologies like HTML, CSS, and JavaScript. My focus is on creating clean, maintainable code and delivering seamless user experiences across devices.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent rounded-lg -z-0"></div>
          </div>
          
          {/* Resume Button with advanced animation */}
          <div 
            style={{ 
              animation: 'fadeIn 0.8s ease-out 0.8s forwards', 
              opacity: 0,
              perspective: '1000px'
            }}
          >
            <a
              href="https://drive.google.com/file/d/1ecST-6B8CSn_pLIrEMD61e_YJPvypDna/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 10px rgba(130, 69, 236, 0.5)',
                transformStyle: 'preserve-3d'
              }}
            >
              <span className="relative z-10 flex items-center">
                DOWNLOAD CV
                <span className="inline-block ml-2 animate-bounce-right">↓</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 border-2 border-white/20 rounded-full scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></span>
            </a>
          </div>
        </div>

        {/* Right Side - Advanced Profile Image Effect */}
        <div 
          className="md:w-1/2 flex justify-center md:justify-end"
          style={{ 
            animation: 'fadeInRight 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.4s forwards',
            opacity: 0,
            transform: 'translateX(30px)'
          }}
        >
          <div 
            ref={profileRef}
            className="profile-3d-container w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-transform duration-300 ease-out"
          >
            <div className="relative w-full h-full">
              <img
                src={profileImage || 'https://via.placeholder.com/150x150?text=Profile'}
                alt="Sandip Singh"
                className="w-full h-full rounded-full object-cover border-4 border-purple-500/80 transition-all duration-300 ease-out relative z-10"
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-br from-purple-600 to-pink-500 blur-md opacity-70 -z-0"></div>
              <div className="absolute inset-0 rounded-full bg-purple-900/30 backdrop-blur-sm -z-0"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-purple-500 to-transparent opacity-20 animate-spin-slow -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced CSS Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px) skewX(-10deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) skewX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px) skewX(10deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) skewX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes bounceRight {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-20deg);
          }
          75% {
            transform: rotate(20deg);
          }
        }
        
        .animate-bounce-right {
          animation: bounceRight 1s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 6s ease-in-out 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        .wave-animate {
          animation: wave 1.5s ease-in-out infinite;
          display: inline-block;
          transform-origin: 70% 70%;
        }
        
        .cursor-blink {
          animation: blink 0.7s infinite;
          display: inline-block;
          width: 2px;
          height: 1em;
          background: #a855f7;
          vertical-align: middle;
          margin-left: 2px;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        /* 3D hover effect */
        .profile-3d-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        /* Gradient text animation */
        .text-gradient-purple {
          background: linear-gradient(90deg, #a855f7, #ec4899);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-size: 200% auto;
          animation: gradientText 3s ease-in-out infinite;
        }
        
        @keyframes gradientText {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .profile-3d-container {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;