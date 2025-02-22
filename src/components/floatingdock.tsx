import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconPhone, // Icon for "Contact Me"
  IconHome,
  IconNewSection,
  IconUser,
  IconFileText, // New icon for "Resume"
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 " />,
      href: "/",
    },

    {
      title: "About Me",
      icon: <IconUser className="h-full w-full text-neutral-500 " />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <IconNewSection className="h-full w-full text-neutral-500 " />,
      href: "#projects",
    },
    {
      title: "Contact Me",
      icon: <IconPhone className="h-full w-full text-neutral-500" />,
      href: "#contact", // Or you can link to a phone number or a contact form
    },
    // Added Resume link
    {
      title: "Resume",
      icon: <IconFileText className="h-full w-full text-neutral-500" />,
      href: "https://drive.google.com/file/d/15W8srNWdPhGiHMYTqP1-BVTD86DGMdIY/view", // Google Drive link
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 " />,
      href: "https://www.linkedin.com/in/rishibharadwajsai",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500" />,
      href: "https://github.com/rishibharadwajsai",
    },
  ];

  return (
    <div className="flex items-center justify-center z-50 w-full">
      <FloatingDock
        desktopClassName="fixed bottom-10 left-1/2 transform -translate-x-1/2"
        mobileClassName="fixed bottom-10 left-1/2 transform -translate-x-1/2"
        items={links}
      />
    </div>
  );
}
