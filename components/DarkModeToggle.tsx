import React from "react";
import { Switch } from "@/components/ui/switch";
import { languages, LanguageKey } from "../data/languageData";
import { Sun, Moon } from "lucide-react";

interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  currentLang: LanguageKey;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  darkMode,
  setDarkMode,
  currentLang,
}) => {
  const t = languages[currentLang];

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
      <span className="sr-only">{t.darkMode}</span>
    </div>
  );
};
