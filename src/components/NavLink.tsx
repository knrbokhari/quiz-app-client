import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  label: string;
  className?: string;
}
const NavLink = ({ href, label, className }: Props) => {
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};

export default NavLink;
