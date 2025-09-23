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
import { useAuth } from "@/contexts/auth-context";

export default function LitParlorNavbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isQuizPage = pathname.includes("/quiz");
  const isChatPage = pathname === "/chat";
  const isCreateAccountPage = pathname === "/create-account";

  // Don't render navbar on quiz pages, chat page, or create account page
  if (isQuizPage || isChatPage || isCreateAccountPage) {
    return null;
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, hasLitParlorAccount, litParlorAccount, echoUser, signOut, isLoading } = useAuth();

  const studentItems = [
    { name: "ELA Tutor Chat", link: "/chat" },
    { name: "Full Collection", link: "/fullcollection" },
    { name: "Glossary", link: "/glossary" },
    { name: "Quests", link: "/quests" },
    { name: "Socratic Forum", link: "/socratic-forum" },
    { name: "Storyworlds", link: "/storyworlds" },
    { name: "Student Dashboard", link: "/student-dashboard" },
    { name: "The Arena", link: "/the-arena" },
    { name: "Your Character", link: "/character" },
  ];

  const teacherItems = [
    { name: "Analytics Dashboard", link: "/analytics-dashboard" },
    { name: "Assignments", link: "/assignments" },
    { name: "Classes", link: "/classes" },
    { name: "Pedagogy", link: "/pedagogy" },
    { name: "Student Success", link: "/student-success" },
    { name: "Teacher Dashboard", link: "/teacher-dashboard" },
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
            {isLoading ? (
              <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
            ) : isAuthenticated ? (
              hasLitParlorAccount ? (
                <div className="group relative">
                  <button className="flex items-center space-x-2 text-green-800 hover:text-green-700 font-bold text-sm transition-colors cursor-pointer hover:bg-green-100/20 px-3 py-1 rounded-lg">
                    <span>{litParlorAccount?.echo_username || litParlorAccount?.echo_name || 'User'}</span>
                    <span className="text-xs">▼</span>
                  </button>

                  {/* User dropdown menu */}
                  <div className="absolute top-full right-0 mt-2 bg-white dark:bg-neutral-900 rounded-lg shadow-2xl border border-amber-200 dark:border-amber-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[200px]">
                    <div className="p-2">
                      <div className="px-3 py-2 border-b border-amber-100 dark:border-amber-800">
                        <p className="font-medium text-amber-700 dark:text-amber-300 text-sm">
                          {litParlorAccount?.echo_name || 'LitParlor User'}
                        </p>
                        <p className="text-xs text-amber-600 dark:text-amber-400">
                          {litParlorAccount?.echo_email || 'No email'}
                        </p>
                      </div>
                      <Link
                        href="/profile"
                        className="block px-3 py-2 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/50 font-medium transition-colors text-sm"
                      >
                        Profile Settings
                      </Link>
                      <Link
                        href="/chat"
                        className="block px-3 py-2 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/50 font-medium transition-colors text-sm"
                      >
                        ELA Tutor Chat
                      </Link>
                      <button
                        onClick={signOut}
                        className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 font-medium transition-colors text-sm"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href="/create-account"
                  className="text-green-800 hover:text-green-700 font-bold text-sm transition-colors cursor-pointer hover:bg-green-100/20 px-3 py-1 rounded-lg"
                >
                  Complete Setup
                </Link>
              )
            ) : (
              <Link
                href="/chat"
                className="text-green-800 hover:text-green-700 font-bold text-sm transition-colors cursor-pointer hover:bg-green-100/20 px-3 py-1 rounded-lg"
              >
                Sign In
              </Link>
            )}
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

            {/* User Section */}
            <div className="w-full border-t border-green-200 pt-4">
              {isLoading ? (
                <div className="px-4 py-2">
                  <div className="animate-pulse bg-gray-200 h-4 w-24 rounded"></div>
                </div>
              ) : isAuthenticated ? (
                hasLitParlorAccount ? (
                  <div>
                    <div className="px-4 py-2 border-b border-green-200 mb-2">
                      <p className="font-bold text-green-900 text-sm">
                        {litParlorAccount?.echo_username || litParlorAccount?.echo_name || 'User'}
                      </p>
                      <p className="text-green-700 text-xs">
                        {litParlorAccount?.echo_email || 'No email'}
                      </p>
                    </div>
                    <Link
                      href="/profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2 text-green-800 hover:bg-green-50 rounded-md transition-colors"
                    >
                      Profile Settings
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/create-account"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-green-800 hover:bg-green-50 rounded-md transition-colors font-bold"
                  >
                    Complete Setup
                  </Link>
                )
              ) : (
                <Link
                  href="/chat"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-green-800 hover:bg-green-50 rounded-md transition-colors font-bold"
                >
                  Sign In
                </Link>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
