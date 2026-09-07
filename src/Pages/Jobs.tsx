import { useJobs } from '../hooks/useJobs';
import { JobList } from '../components/JobList';

export const JobsPage: React.FC = () => {
  const { jobs, isLoading } = useJobs();
  
  if (isLoading) {
    return <div className="text-center py-16">Loading jobs...</div>;
  }
  
  return <JobList jobs={jobs} />;
};