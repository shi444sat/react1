// education.js or wherever your data is stored
import project1 from '../assets/al.jpg'; // Update path if needed

export const education = [
  {
    id: 1,
    date: "2024 - Present",
    degree: "BS in Data Science ",
    institution: "Indian Institute of Technology Madras (IITM), Chennai",
    description: "Currently in Foundation Level"
  },
  {
    id: 2,
    date: "2024 - Present",
    degree: "BTech in CSE (Core)",
    institution: "Truba Institute of Engineering & Information Technology (TIEIT), Bhopal",
    description: "Currently in first year"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Admission Letter ",
    issuer: "IITM",
    date: "September 2024",
    points: [
     
    ],
    image: project1 // ← image added here
  }
];

export const achievements = [
  "Awarded a bounty for discovering and reporting an XSS vulnerability.",
  "Identified and reported an XSS vulnerability in the UDISE+ website, developed by NIC, which was subsequently fixed.",
  "Discovered and reported SQL Injection and File Upload vulnerabilities, which could have potentially allowed unauthorized admin access.",
  "Reported several website vulnerabilities, many of which were successfully addressed and fixed."
];
