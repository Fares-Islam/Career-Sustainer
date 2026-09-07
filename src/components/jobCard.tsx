import type { Job } from '../types';
import { MapPin, Building, DollarSign, Briefcase } from 'lucide-react';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] dark:border-gray-700 dark:bg-gray-800"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.jobTitle}</h3>
      <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
        <span className="flex items-center gap-1">
          <Building size={14} /> {job.companyName}
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={14} /> {job.location}
        </span>
        <span className="flex items-center gap-1">
          <DollarSign size={14} /> {job.pay} {job.payCurrency} / {job.payRate}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase size={14} /> {job.jobType}
        </span>
      </div>
      <button className="mt-4 text-sm font-medium text-primary-600 group-hover:underline dark:text-primary-400">
        View details →
      </button>
    </div>
  );
};