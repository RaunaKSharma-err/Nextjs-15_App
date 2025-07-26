"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = [
  { name: "register", href: "/register" },
  { name: "login", href: "/login" },
  { name: "forgot pass", href: "/forgot-pass" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <div>
      {NavigationLink.map((link) => {
        const isActive =
          pathName === link.href ||
          (pathName.startsWith(link.href) && pathName !== "/");
        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;
