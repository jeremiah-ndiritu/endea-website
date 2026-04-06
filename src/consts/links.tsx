import {
  Home,
  BookOpen,
  Terminal,
  GitBranch,
  Package,
  Layers,
  //ExternalLink,
} from "lucide-react";
import type React from "react";

type Link = {
  path:`/${string}` | `https://${string}`; // Allow full URLs for external links
  label: string;
  icon: React.ReactNode;
  external?: boolean;
  target?: "_blank" | "_parent" | "_top" | "_self" | (string & {})
};

export const MainHeaderLinks: Link[] = [
  {
    path: "/",
    label: "Home",
    icon: <Home size={18} />,
  },
  {
    path: "/docs",
    label: "Documentation",
    icon: <BookOpen size={18} />,
  },
  {
    path: "/playground",
    label: "Playground",
    icon: <Terminal size={18} />,
  },
  {
    path: "/components",
    label: "Components",
    icon: <Layers size={18} />,
  },
  {
    path: "https://npmjs.com/package/endea",
    label: "NPM",
    icon: <Package size={18} />,
    external: true,
    target: "_npmendea"
  },
  {
    path: "https://github.com/jeremiah-ndiritu/endea",
    label: "GitHub",
    icon: <GitBranch size={18} />,
    external: true,
    target: "_gitendea"
  },
];
