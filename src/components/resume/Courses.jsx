// Courses.jsx - Courses and certifications
import React from 'react';
import { motion } from 'framer-motion';

const Courses = () => {
  const certifications = [
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      year: "2025",
      type: "Certification",
      icon: "🎓"
    },
    {
      title: "Salesforce AI with Agentforce Champion Program",
      issuer: "Salesforce Trailhead",
      year: "2025",
      type: "Program",
      icon: "☁️"
    },
    {
      title: "RPA Developer Foundation (v2021.10)",
      issuer: "UiPath",
      year: "2024",
      type: "Certification",
      icon: "🤖"
    }
  ];

  const courses = [
    {
      title: "React Virtual Bootcamp",
      issuer: "LetsUpgrade",
      year: "2024",
      type: "Bootcamp",
      icon: "⚛️"
    },
    {
      title: "Oracle Training Program",
      issuer: "Naresh I Technologies",
      year: "2024",
      type: "Training",
      icon: "🗄️"
    },
    {
      title: "HTML 5 With Quizzes and Python 3 Complete Course",
      issuer: "Udemy",
      year: "2024",
      type: "Course",
      icon: "💻"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Certifications */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">
          Professional Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                    {cert.type}
                  </span>
                  <span className="text-xs text-gray-500">{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Courses & Training */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-6 text-center">
          Courses & Training Programs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/20 rounded-lg p-5 border border-gray-800"
            >
              <div className="text-center">
                <div className="text-2xl mb-3">{course.icon}</div>
                <h4 className="text-base font-medium text-white mb-2">
                  {course.title}
                </h4>
                <p className="text-sm text-gray-400 mb-2">{course.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                    {course.type}
                  </span>
                  <span className="text-xs text-gray-500">{course.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 text-center"
      >
      </motion.div>
    </motion.div>
  );
};

export default Courses;