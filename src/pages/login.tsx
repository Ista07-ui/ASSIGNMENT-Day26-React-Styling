import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="bg-background-light dark:bg-background-dark font-display text-[#111811] dark:text-white antialiased overflow-hidden group/design-root min-h-[100dvh]">
        <header className="sticky top-0 z-40 bg-surface-light shadow">
          <div>
            <nav className="bg-primary text-white flex justify-between items-center px-6 py-2 lg:px-[2rem]">
              {/* MENU LIST (DESKTOP) */}
              <ul className="hidden lg:flex flex-wrap gap-6 text-[12px] font-semibold">
                <Link href="/">
                  <li className="nav-link cursor-pointer">Home</li>
                </Link>
                <Link href="#">
                  <li className="nav-link cursor-pointer">About Us</li>
                </Link>
                <Link href="#">
                  <li className="nav-link cursor-pointer">Location Us</li>
                </Link>
                <Link href="#">
                  <li className="nav-link cursor-pointer">Best Seller</li>
                </Link>
                <Link href="#">
                  <li className="nav-link cursor-pointer">Health Benefits</li>
                </Link>
              </ul>

              {/* MOBILE VERSION */}
              <span className="lg:hidden text-sm font-semibold">Home</span>

              {/* SOCIAL MEDIA */}
              <ul className="flex items-end gap-4">
                <li className="social-item">
                  <img
                    src="/icons/bxl-facebook-square.png"
                    alt="Facebook"
                    className="social-icon2"
                  />
                </li>

                <li className="social-item">
                  <img
                    src="/icons/bxl-instagram-alt.png"
                    alt="Instagram"
                    className="social-icon2"
                  />
                </li>

                <li className="social-item">
                  <img
                    src="/icons/bxl-linkedin-square.png"
                    alt="LinkedIn"
                    className="social-icon2"
                  />
                </li>

                <li className="social-item">
                  <img
                    src="/icons/bxl-tiktok.png"
                    alt="Tiktok"
                    className="social-icon2"
                  />
                </li>

                <li className="social-item">
                  <img
                    src="/icons/bxl-twitter.png"
                    alt="Twitter"
                    className="social-icon2"
                  />
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="relative flex flex-col h-[calc(100vh-theme(spacing.12))] w-full max-w-md mx-auto bg-background-light dark:bg-background-dark overflow-hidden">
          {/* Background Decor elements */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[30%] bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[30%] bg-primary/5 rounded-full blur-[60px] pointer-events-none"></div>

          {/* Scrollable Content Area */}
          <div className="flex-1 flex flex-col w-full overflow-y-auto no-scrollbar relative z-10 px-6">
            {/* Spacer for top area */}
            <div className="h-12 w-full shrink-0"></div>

            {/* Header Section */}
            <div className="flex flex-col items-center pt-8 pb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(150,205,72,0.25)]">
                <span className="material-symbols-outlined text-4xl text-black">
                  local_cafe
                </span>
              </div>
              <h1 className="text-[#111811] dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center">
                Welcome Back!
              </h1>
              <p className="text-[#111811]/60 dark:text-white/60 text-base font-normal leading-normal pt-2 text-center">
                Let&apos;s get brewing.
              </p>
            </div>

            {/* Login Form */}
            <div className="w-full space-y-5">
              {/* Email Field */}
              <div className="group/input">
                <label className="block text-sm font-medium text-[#111811] dark:text-white mb-2 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 group-focus-within/input:text-primary transition-colors">
                      mail
                    </span>
                  </div>
                  <input
                    className="block w-full h-14 pl-11 pr-4 rounded-full border border-[#dbe6db] dark:border-white/10 bg-white dark:bg-white/5 text-[#111811] dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base"
                    placeholder="staff@smoothiecafe.com"
                    type="email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="group/input">
                <label className="block text-sm font-medium text-[#111811] dark:text-white mb-2 ml-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 group-focus-within/input:text-primary transition-colors">
                      lock
                    </span>
                  </div>
                  <input
                    className="block w-full h-14 pl-11 pr-12 rounded-full border border-[#dbe6db] dark:border-white/10 bg-white dark:bg-white/5 text-[#111811] dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#111811] dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
                <div className="flex justify-end pt-2">
                  <a
                    className="text-sm font-medium text-[#111811]/60 dark:text-white/60 hover:text-primary dark:hover:text-primary transition-colors"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-6">
                <button className="w-full h-14 bg-primary hover:brightness-105 active:brightness-95 text-[#102210] text-lg font-bold rounded-full shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center cursor-pointer">
                  Log In
                </button>
                <div className="flex flex-col items-center gap-4">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Or login with
                  </span>
                  <button className="w-14 h-14 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/10 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-3xl text-[#111811] dark:text-white">
                      face
                    </span>
                  </button>
                </div>
              </div>

              {/* Spacer */}
              <div className="h-8"></div>
            </div>

            {/* Footer Area */}
            <div className="mt-auto pb-8 pt-4 border-t border-gray-100 dark:border-white/5">
              <p className="text-center text-[#111811] dark:text-white text-base">
                New to the team?
                <Link
                  className="font-bold text-primary hover:underline ml-1"
                  href="/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
