import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LanguageSelectorProps {
  currentLang: string
  setCurrentLang: (lang: string) => void
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, setCurrentLang }) => {
  return (
    <Select onValueChange={(value) => setCurrentLang(value)} defaultValue={currentLang}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="de">Deutsch</SelectItem>
        <SelectItem value="uk">Українська</SelectItem>
      </SelectContent>
    </Select>
  )
}