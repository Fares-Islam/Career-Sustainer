export interface Job {
  id: string;
  companyName: string;
  jobTitle: string;
  location: string;
  pay: number;
  payCurrency: string;
  payRate: string;
  jobType: string;
  jobDescription: string;
}

export interface JobFormData extends Omit<Job, 'id'> {}