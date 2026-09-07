import type { Job } from '../types';
import { useState } from 'react';
import { JobCard } from './jobCard';
import { JobDetail } from './JobDetail';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { Search } from 'lucide-react';

interface JobListProps {
  jobs: Job[];
}

export const JobList: React.FC<JobListProps> = ({ jobs }) => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  
  const filteredJobs = jobs.filter(job => {
    const titleMatch = job.jobTitle.toLowerCase().includes(searchTitle.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(searchLocation.toLowerCase());
    return titleMatch && locationMatch;
  });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Job title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="sm:flex-1"
        />
        <Input
          placeholder="Location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="sm:flex-1"
        />
        <Button variant="primary" className="flex items-center gap-2">
          <Search size={18} /> Search
        </Button>
      </div>
      
      {filteredJobs.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">No jobs found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
          ))}
        </div>
      )}
      
      {selectedJob && (
        <JobDetail job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};