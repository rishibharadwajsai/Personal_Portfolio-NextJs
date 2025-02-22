import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I am actively learning Data Structures and Algorithms, focusing on problem-solving, optimizing code efficiency, and mastering concepts like dynamic programming, graphs, and sorting to excel in coding challenges and technical assessments.",
      name: "Data Structures and Algorithms",
      designation: "DSA",
      src: "/dsa.jpg",
    },
    {
      quote:
        "I am exploring AI and Machine Learning, focusing on model development, data preprocessing, and deep learning techniques to build intelligent solutions for real-world applications, including healthcare and predictive analytics.",
      name: "Artificial Intelligence and Machine Learning",
      designation: "AIML",
      src: "/aiml.jpg",
    },
    {
      quote:
        "I am building full-stack web applications using Next.js, React, Node.js, and MongoDB, focusing on scalable architectures, secure authentication, and seamless user experiences with modern UI/UX design and backend integration.",
      name: "Full-Stack Web Development",
      designation: "Web Dev",
      src: "/web.jpg",
    },
    {
      quote:
        "I am committed to continuous self-development, focusing on improving my technical skills, problem-solving abilities, and staying updated with emerging technologies to build innovative and impactful solutions.",
      name: "Self-Development",
      designation: "Self-Dev",
      src: "/self-development.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
