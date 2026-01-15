import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
const LinkData = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/hdhhbfhrirbtiirdbdidjbrbfh",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
  },
  {
    icon: <FaYoutube />,
    href: "https://www.youtube.com",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/Anikimran",
  },
];

interface SocialLinkProps {
  children?: React.ReactNode;
  className?: string;
}
const SocialLink = ({ children, className }: SocialLinkProps) => {
  return (
    <div
      className={twMerge(
        "flex items-center gap-x-5 text-2xl py-2 mt-5",
        className
      )}
    >
      {LinkData.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="blank"
          className="  hover:text-blue-800 hover: duration-500 border border-gray-400 p-2 rounded "
        >
          {item.icon}
        </Link>
      ))}
      {children}
    </div>
  );
};

export default SocialLink;
