
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-economiza-azul-medio hover:-translate-y-1",
      className
    )}>
      <div className="mb-4 text-economiza-azul-escuro">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-economiza-azul-escuro">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
