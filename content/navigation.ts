// content/navigation.ts

export interface NavigationItem {
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    label: "Racing",
    href: "/racing",
  },
  {
    label: "Performance",
    href: "/store",
  },
  {
    label: "Partners",
    href: "/partners",
  },
  {
    label: "Media",
    href: "/media",
  },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
  },
];