'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Sidebar } from './Sidebar'
import { MainContent } from './MainContent'
import { LanguageSelector } from './LanguageSelector'
import { DarkModeToggle } from './DarkModeToggle'

export default function CVComponent() {
  const [currentLang, setCurrentLang] = useState('en')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <Card className="max-w-6xl mx-auto overflow-hidden shadow-xl bg-white dark:bg-gray-800 transition-colors duration-300">
        <CardContent className="p-8">
          <div className="flex justify-between items-center mb-6">
            <LanguageSelector currentLang={currentLang} setCurrentLang={setCurrentLang} />
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} currentLang={currentLang} />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar currentLang={currentLang} />
            <MainContent currentLang={currentLang} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}