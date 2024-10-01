import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LanguageKey } from "../data/languageData";

interface LanguageSelectorProps {
  currentLang: LanguageKey;
  setCurrentLang: (lang: LanguageKey) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  setCurrentLang,
}) => {
  return (
    <Select
      onValueChange={(value: LanguageKey) => setCurrentLang(value)}
      defaultValue={currentLang}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="de">Deutsch</SelectItem>
        <SelectItem value="uk">Українська</SelectItem>
      </SelectContent>
    </Select>
  );
};
