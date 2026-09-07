import type { Job, JobFormData } from '../types';
import { useState, useEffect, useCallback } from 'react';
import defaultJobsData from '../data/defaultJobs.json';

const STORAGE_KEY = 'jobs';

const loadJobsFromLocalStorage = (): Job[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  // Initialize with default jobs
  const defaultJobs: Job[] = defaultJobsData.Jobs.map((job: any, index: number) => ({
    id: `default-${index}`,
    ...job.formEntries,
    pay: Number(job.formEntries.Pay),
    payCurrency: job.formEntries['Pay Currency'],
    payRate: job.formEntries['Pay Rate'],
    jobType: job.formEntries['Job Type'],
    jobDescription: job.formEntries['Job Description'],
    companyName: job.formEntries['Company Name'],
    jobTitle: job.formEntries['Job Title'],
    location: job.formEntries['Location'],
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultJobs));
  return defaultJobs;
};

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const loaded = loadJobsFromLocalStorage();
    setJobs(loaded);
    setIsLoading(false);
  }, []);

  const addJob = useCallback((jobData: JobFormData) => {
    const newJob: Job = {
      ...jobData,
      id: Date.now().toString(),
    };
    setJobs(prev => {
      const updated = [...prev, newJob];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateJobs = useCallback((newJobs: Job[]) => {
    setJobs(newJobs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newJobs));
  }, []);

  return { jobs, isLoading, addJob, updateJobs };
};




