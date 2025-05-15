
import React from 'react';

interface AgendaPopupHeaderProps {
  title: string;
  subtitle: string;
}

export const AgendaPopupHeader: React.FC<AgendaPopupHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-economiza-vinho mb-2 font-sans">{title}</h2>
      <p className="text-gray-600 text-lg font-sans">{subtitle}</p>
    </div>
  );
};
