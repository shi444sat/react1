import project1 from '../assets/project1.png';
import ledCubeVideo from '../assets/led-cube.mp4'; // Replace with your actual video file

export const projects = [
  {
    id: 1,
    title: "Content Management System",
    description: "A fully dynamic & responsive website for creative content.",
    icon: "WebDev",
    image: project1,
    demoUrl: "https://priyavats.in",
    
  },
  {
    id: 2,
    title: "3×3×3 LED Cube with Raspberry Pi Pico",
    description: "Built a 3D LED cube using Raspberry Pi Pico and controlled it via MicroPython.",
    icon: "Electronics",
    video: ledCubeVideo,
   
  }
];
