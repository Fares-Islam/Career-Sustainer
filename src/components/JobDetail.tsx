import type { Job } from '../types';
import { MapPin, Building, DollarSign, Briefcase, X } from 'lucide-react';
import { Button } from './ui/Button';

interface JobDetailProps {
  job: Job | null;
  onClose: () => void;
}

export const JobDetail: React.FC<JobDetailProps> = ({ job, onClose }) => {
  if (!job) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-w-2xl w-full rounded-xl bg-white p-6 shadow-xl dark:bg-gray-800">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{job.jobTitle}</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-1"><Building size={14} /> {job.companyName}</span>
          <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
          <span className="flex items-center gap-1"><DollarSign size={14} /> {job.pay} {job.payCurrency} / {job.payRate}</span>
          <span className="flex items-center gap-1"><Briefcase size={14} /> {job.jobType}</span>
        </div>
        <hr className="my-4 border-gray-200 dark:border-gray-700" />
        <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">{job.jobDescription}</p>
        <div className="mt-6 flex justify-end">
          <Button variant="secondary" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};