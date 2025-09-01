// Achievements.jsx - With certificates section added
import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiLightningBolt, HiStar, HiBadgeCheck } from 'react-icons/hi';

const Achievements = () => {
  const achievements = [
    {
      icon: <HiStar className="text-yellow-400" />,
      title: "Top 100 Finalist",
      event: "HACKHAZARDS '25 Global Hackathon",
      description: "Ranked among top 100 out of 2,900+ teams in a major global community hackathon",
      year: "2025",
      type: "Competition"
    },
    {
      icon: <HiStar className="text-pink-400" />,
      title: "Round 2 Qualifier",
      event: "Meesho ScriptedByHer 2025",
      description: "Cleared Round 1 and advanced to Idea Funnel Round in Meesho's exclusive hackathon celebrating women in tech",
      year: "2025",
      type: "Competition"
    },
    {
      icon: <HiCode className="text-purple-400" />,
      title: "3rd Place Winner",
      event: "CSS Battle Competition",
      description: "Secured 3rd place in CSS Battle organized by C.O.R.E in association with CSI MITE",
      year: "2024",
      type: "Competition"
    },
    {
      icon: <HiLightningBolt className="text-green-400" />,
      title: "100 Days Badge",
      event: "LeetCode Achievement",
      description: "Earned the 100 Days Badge on LeetCode demonstrating consistent problem-solving",
      year: "2024",
      type: "Personal Achievement"
    },
    {
      icon: <HiBadgeCheck className="text-blue-400" />,
      title: "Cloud Skill Badges",
      event: "Google Cloud Arcade Facilitator Program",
      description: "Participated in Google Cloud Arcade Facilitator Program and earned cloud skill badges",
      year: "2025",
      type: "Program"
    },
    {
      icon: <HiCode className="text-orange-400" />,
      title: "Hackathon Participant",
      event: "Fusion Techathon 3.0",
      description: "Participated in 24-hour National Hackathon organized by ALVAS",
      year: "2024",
      type: "Participation"
    },
  ];

  const certificates = [
    {
      title: "Participated In - Unstop Talent Park 2025",
      event: "Round 1: Learning Boot Camp",
      year: "2025",
      type: "Winner"
    },
    {
      title: "Adobe India Hackathon",
      event: "Participated in Round 1 - Online MCQ Assessment + Coding",
      year: "2025",
      type: "Round 1 Qualifier"
    },
    {
      title: "EY Techathon 5.0",
      event: "Participated in Round 1: Executive Summary Submission",
      year: "2025",
      type: "Round 1 Participant"
    },
    {
      title: "Flipkart GRiD 6.0",
      event: "Participated in Level 1: E-Commerce & Tech Quiz",
      year: "2024",
      type: "Level 1 Qualifier"
    },
    {
      title: "CodeClash: The August Arena",
      event: "Participated in Foundations Round (MCQ)",
      year: "2025",
      type: "Participant"
    },
    {
      title: "TATA Crucible Campus Quiz 2024",
      event: "Participated in campus-level quiz competition",
      year: "2024",
      type: "Participant"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Major Achievements */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">
          Major Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      {achievement.title}
                    </h4>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-300 mb-2">
                    {achievement.event}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                  <span className="inline-block mt-3 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                    {achievement.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificates & Participations */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-white mb-6 text-center">
          Competition Participations & Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-900/20 rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-white">
                    {cert.title}
                  </h4>
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    {cert.year}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-2">
                  {cert.event}
                </p>
                <span className={`text-xs px-2 py-1 rounded self-start ${
                  cert.type.includes('Winner') ? 'text-yellow-400 bg-yellow-400/10' :
                  cert.type.includes('Qualifier') ? 'text-green-400 bg-green-400/10' :
                  'text-blue-400 bg-blue-400/10'
                }`}>
                  {cert.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
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

export default Achievements;