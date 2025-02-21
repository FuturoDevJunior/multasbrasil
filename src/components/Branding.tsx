import React from 'react';
import { Code2 } from 'lucide-react';

export const Branding: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-1.5 text-blue-600/80 hover:text-blue-600 transition-colors">
      <Code2 className="w-4 h-4" />
      <span className="text-sm font-medium tracking-wide">DevFerreiraG</span>
    </div>
  );
};