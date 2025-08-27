"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LitParlorNavbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isQuizPage = pathname.includes("/quiz");
  const isChatPage = pathname === "/chat";

  // Don't render navbar on quiz pages or chat page
  if (isQuizPage || isChatPage) {
    return null;
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const studentItems = [
    { name: "Quests", link: "/quests" },
    { name: "Socratic Forum", link: "/socratic-forum" },
    { name: "Student Dashboard", link: "/student-dashboard" },
    { name: "The Arena", link: "/the-arena" },
    { name: "Your Character", link: "/character" },
    { name: "Full Collection", link: "/fullcollection" },
    { name: "Storyworlds", link: "/storyworlds" },
    { name: "ELA Tutor Chat", link: "/chat" },
  ];

  const teacherItems = [
    { name: "Teacher Dashboard", link: "/teacher-dashboard" },
    { name: "Classes", link: "/classes" },
    { name: "Assignments", link: "/assignments" },
    { name: "Analytics Dashboard", link: "/analytics-dashboard" },
    { name: "Student Success", link: "/student-success" },
    { name: "Pedagogy", link: "/pedagogy" },
  ];

  const mainNavItems = [
    { name: "For Students", link: "#students", items: studentItems },
    { name: "For Teachers", link: "#teachers", items: teacherItems },
    { name: "For Parents", link: "#parents", items: [] },
  ];

  const LitParlorLogo = () => {
    return (
      <Link
        href="/"
        className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <img
            src="/images/litparlorfavicon.png"
            alt="LitParlor"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
        <span className="font-bold text-green-900">
          LitParlor
        </span>
      </Link>
    );
  };

  return (
    <div className="relative w-full">
      <Navbar className="top-4">
        {/* Desktop Navigation */}
        <NavBody>
          <LitParlorLogo />
          
          {/* Main Navigation Items */}
          <div className="flex items-center space-x-6">
            {mainNavItems.map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="px-4 py-2 text-green-900 font-semibold cursor-pointer hover:text-green-700 transition-colors">
                  {item.name}
                </div>
                
                {/* Dropdown Menu */}
                {item.items.length > 0 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white dark:bg-neutral-900 rounded-lg shadow-2xl border border-amber-200 dark:border-amber-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[220px]">
                    {item.items.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.link}
                        className="block px-4 py-3 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/50 font-medium border-b border-amber-100 dark:border-amber-800 last:border-b-0 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-green-800 font-bold text-sm">
                📚 Literary Scholar
              </div>
              <div className="text-green-700 text-xs">
                Level 8
              </div>
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <LitParlorLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {/* Students Section */}
            <div className="w-full">
              <h3 className="font-bold text-green-900 mb-2">
                For Students
              </h3>
              {studentItems.map((item, idx) => (
                <Link
                  key={`student-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-green-800 hover:bg-green-50 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Teachers Section */}
            <div className="w-full">
              <h3 className="font-bold text-green-900 mb-2">
                For Teachers
              </h3>
              {teacherItems.map((item, idx) => (
                <Link
                  key={`teacher-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-green-800 hover:bg-green-50 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Parents Section */}
            <div className="w-full">
              <h3 className="font-bold text-green-900 mb-2">
                For Parents
              </h3>
              <div className="px-4 py-2 text-green-700 text-sm">
                Coming Soon
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
