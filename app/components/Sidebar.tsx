import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { languages } from './languageData'

interface SidebarProps {
  currentLang: string
}

export const Sidebar: React.FC<SidebarProps> = ({ currentLang }) => {
  const t = languages[currentLang]

  return (
    <div className="lg:w-1/3">
      <div className="sticky top-8">
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-48 h-48 mb-4">
            <AvatarImage src="/placeholder.svg" alt={t.name} />
            <AvatarFallback>{t.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">{t.name}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-2 text-center">{t.title}</p>
        </div>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t.contact}</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <img src="https://simpleicons.org/icons/gmail.svg" alt="Email" className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                <a href={`mailto:${t.email}`} className="text-teal-600 dark:text-teal-400 hover:underline">{t.email}</a>
              </div>
              <div className="flex items-center space-x-2">
                <img src="https://simpleicons.org/icons/phone.svg" alt="Phone" className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                <a href={`tel:${t.phone}`} className="text-teal-600 dark:text-teal-400 hover:underline">{t.phone}</a>
              </div>
              <div className="flex items-center space-x-2">
                <img src="https://simpleicons.org/icons/googlemaps.svg" alt="Location" className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                <span className="text-gray-600 dark:text-gray-300">{t.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="https://simpleicons.org/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">LinkedIn</a>
              </div>
              <div className="flex items-center space-x-2">
                <img src="https://simpleicons.org/icons/github.svg" alt="GitHub" className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">GitHub</a>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t.languages}</h2>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>{t.ukrainian}</li>
              <li>{t.english}</li>
              <li>{t.german}</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t.education}</h2>
            <p className="font-medium text-gray-800 dark:text-gray-200">{t.university}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{t.degree}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{t.year}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t.certifications}</h2>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>{t.istqb}</li>
            </ul>
            <p className="text-sm italic mt-2 text-gray-600 dark:text-gray-300">{t.currentStudy}</p>
          </section>
        </div>
      </div>
    </div>
  )
}