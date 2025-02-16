"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const NavLink: React.FC<{
  href: any;
  text: any;
}> = (props) => {
  const path = usePathname();

  return (
    <Link href={props.href}>
      <p
        className={path.startsWith(props.href) ? "text-blue-500" : "text-black"}
      >
        {props.text}
      </p>
    </Link>
  );
};

export default NavLink;
