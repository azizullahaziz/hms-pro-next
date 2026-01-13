'use client';
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
export default function Home() {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.classList.toggle('dark');
  }
  return <div className="w-full h-lvh bg-background border">
    <nav className="w-full h-16 border-b flex items-center px-4">
      <button className="p-2 rounded hover:bg-accent" onClick={toggleTheme}>
        {theme === 'light' ? <Moon className="text-blue-500" /> : <Sun className="text-yellow-500" />}
      </button>
    </nav>
    <main className="grow flex items-center justify-center dark:bg-foreground  bg-background">
      <span className="text-foreground dark:text-foreground">Welcome to HMS Pro Next!</span>
    </main>
  </div >;
}