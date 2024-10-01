import React from "react";
import { languages, LanguageKey } from "../data/languageData";
import { responsibilities } from "../data/responsibilitiesData";
import { tools } from "../data/toolsData";
import { projects } from "../data/projectsData";

interface MainContentProps {
  currentLang: LanguageKey;
}

export const MainContent: React.FC<MainContentProps> = ({ currentLang }) => {
  const t = languages[currentLang];

  return (
    <div className="lg:w-2/3">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t.summary}
          </h2>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experience}
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {t.currentRole}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{t.period}</p>
          </div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {t.responsibilities}
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            {responsibilities[currentLang].map((resp, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {resp}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects}
          </h2>
          {projects[currentLang].map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t.tools}
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            {tools[currentLang].map((tool, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {tool}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
