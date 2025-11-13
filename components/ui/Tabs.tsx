import { ReactNode } from "react";

interface TabsProps {
  children: ReactNode;
  className?: string;
}

export default function Tabs({ children, className = "" }: TabsProps) {
  return (
    <div className={`border-b border-gray-200 dark:border-gray-800 ${className}`}>
      <nav className="flex space-x-8" role="tablist">
        {children}
      </nav>
    </div>
  );
}

interface TabProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function Tab({ id, label, isActive, onClick }: TabProps) {
  return (
    <button
      id={id}
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={`
        py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200
        ${isActive
          ? "border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
        }
      `}
    >
      {label}
    </button>
  );
}

interface TabPanelProps {
  id: string;
  isActive: boolean;
  children: ReactNode;
}

export function TabPanel({ id, isActive, children }: TabPanelProps) {
  if (!isActive) return null;
  
  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={id}
      className="mt-6"
    >
      {children}
    </div>
  );
}

