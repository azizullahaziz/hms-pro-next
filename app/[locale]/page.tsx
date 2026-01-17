'use client';

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes";
export default function Home() {

  const setTheme = useTheme();
  const t = useTranslations();
  return <div className="w-full h-lvh bg-background border">
    <nav className="w-full h-16 border-b flex items-center px-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            {setTheme.theme === 'dark' ? 
              <Sun className="h-5 w-5 text-yellow-600" /> : 
              <Moon className="h-5 w-5 text-gray-600" />}
          </Button>

        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme.setTheme('light')}>Light</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme.setTheme('dark')}>Dark</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme.setTheme('system')}>System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
    <main className="grow flex items-center justify-center bg-background text-foreground">
      <span className="text-primary">Welcome to HMS Pro Next!</span>
      <Button variant="default" onClick={() => alert('Button Clicked!')}>{t('home')}</Button>
    </main>

  </div >;
}