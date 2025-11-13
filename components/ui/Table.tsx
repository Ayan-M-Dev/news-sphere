import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  className?: string;
}

export default function Table({ children, className = "" }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full border-collapse ${className}`}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <thead className={`bg-gray-50 dark:bg-gray-800/50 ${className}`}>
      {children}
    </thead>
  );
}

export function TableRow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <tr className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors ${className}`}>
      {children}
    </tr>
  );
}

export function TableHead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <th className={`px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider ${className}`}>
      {children}
    </th>
  );
}

export function TableCell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <td className={`px-6 py-4 text-sm text-gray-900 dark:text-gray-100 ${className}`}>
      {children}
    </td>
  );
}

