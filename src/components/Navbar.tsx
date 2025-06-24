'use client'; //jab bhi ui manipulation karna ho ya react ka koi hook use krna ho toh hum isko use krte hai 
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-5 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={'/'}>
            <MenuItem setActive={setActive} active={active} item="Home">
             
            </MenuItem>
            </Link>


            <Link href={'/courses'}>
            <MenuItem setActive={setActive} active={active} item="Our Courses">
            
            </MenuItem>
            </Link>

            <Link href={'/about'}>
            <MenuItem setActive={setActive} active={active} item="About">
            
            </MenuItem>
            </Link>

            <Link href={'/contact'}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            
            </MenuItem>
            </Link>
        </Menu>
        
    </div> 
  )
}

export default Navbar