"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        {/* <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="What we do >"
          ></MenuItem>
        </Link> */}
        <MenuItem setActive={setActive} active={active} item="what we do>">
          <div className="flex flex-col space-y-4  p-7  text-xl ">
            <p className="mb-2 text-xl">
              What we do<span>➡️</span>
            </p>
            <HoveredLink href="/courses" className="">
              <span className="text-sm text-slate-400">Capabilities</span>
            </HoveredLink>
            <HoveredLink href="/courses">All Services</HoveredLink>
            <HoveredLink href="/courses">Marketing and Experience</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="What we think"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="What we are >">
          <div className="flex justify-around space-y-6 space-x-10 p-10 text-xl  rounded ">
            <div className=" flex flex-col space-y-4  text-xl">
              <p className="mb-2">
                About Arohi Software <span>➡️</span>
              </p>
              <HoveredLink href="/courses" className="">
                <span className="text-sm text-slate-400">Our organization</span>
              </HoveredLink>
              <HoveredLink href="/courses">Leaders</HoveredLink>
              <HoveredLink href="/courses">Location</HoveredLink>
              <HoveredLink href="/gallery">
                <span className=" hover:border-b-4">Gallery</span>
              </HoveredLink>
              <HoveredLink href="/events">
                <span className=" hover:border-b-4">Events</span>
              </HoveredLink>
            </div>

            <div className="flex flex-col space-y-4 pt-7">
              <HoveredLink href="/courses">
                <span className="text-sm text-slate-400">
                  Media & Investors
                </span>
              </HoveredLink>
              <HoveredLink href="/courses">
                <span className=" hover:border-b-4 animate-in border-neutral-100 border-y-gray-400 ">
                  Media Relations
                </span>
              </HoveredLink>
              <HoveredLink href="/courses">
                <span className=" hover:border-b-4">Invester Relations</span>
              </HoveredLink>
            </div>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Careers >">
          <div className="flex justify-around space-y-6 space-x-10 p-10 text-xl  rounded ">
            <div className=" flex flex-col space-y-4">
              <p className="mb-2">
                Carrers home <span>➡️</span>
              </p>
              <HoveredLink href="/courses" className="">
                <span className="text-sm text-slate-400">Find Jobs</span>
              </HoveredLink>
              <HoveredLink href="/courses">search all Jobs</HoveredLink>
              <HoveredLink href="/courses">
                Experience Professionals
              </HoveredLink>
            </div>

            <div className="flex flex-col space-y-4 pt-7">
              <HoveredLink href="/courses">
                <span className="text-sm text-slate-400">
                  Training & Interships
                </span>
              </HoveredLink>
              <HoveredLink href="/courses">
                <span className=" hover:border-b-4 animate-in border-neutral-100 border-y-gray-400 ">
                  Training & Intership
                </span>
              </HoveredLink>
              <HoveredLink href="/contact">Contact Us</HoveredLink>
              <HoveredLink href="/faq">FAQ</HoveredLink>
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default Navbar;
