import type { JobFormData } from '../types';
import { useState, useEffect } from 'react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { useJobs } from '../hooks/useJobs';

const CURRENCY_API = 'https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json';

export const JobForm: React.FC = () => {
  const { addJob } = useJobs();
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [formData, setFormData] = useState<JobFormData>({
    companyName: '',
    jobTitle: '',
    location: '',
    pay: 0,
    payCurrency: 'USD',
    payRate: 'Yearly',
    jobType: 'Full-Time',
    jobDescription: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  useEffect(() => {
    fetch(CURRENCY_API)
      .then(res => res.json())
      .then(data => setCurrencies(Object.keys(data)))
      .catch(console.error);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'pay' ? parseFloat(value) : value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async
    setTimeout(() => {
      addJob(formData);
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        companyName: '',
        jobTitle: '',
        location: '',
        pay: 0,
        payCurrency: 'USD',
        payRate: 'Yearly',
        jobType: 'Full-Time',
        jobDescription: '',
      });
      setTimeout(() => setSuccess(false), 3000);
    }, 500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Post a Job</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <Input
          label="Job Title"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
        <Input
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <div className="flex gap-2">
          <Input
            label="Pay"
            name="pay"
            type="number"
            value={formData.pay}
            onChange={handleChange}
            required
            className="flex-1"
          />
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Currency</label>
            <select
              name="payCurrency"
              value={formData.payCurrency}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              {currencies.map(curr => (
                <option key={curr} value={curr}>{curr}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rate</label>
            <select
              name="payRate"
              value={formData.payRate}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              <option>Hourly</option>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Contract</option>
            <option>Temporary</option>
            <option>Internship</option>
            <option>Freelance</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Job Description</label>
        <textarea
          name="jobDescription"
          rows={5}
          value={formData.jobDescription}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        />
      </div>
      
      <div className="flex justify-end">
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Posting...' : 'Post Job'}
        </Button>
      </div>
      
      {success && (
        <p className="text-green-600 dark:text-green-400 text-center">Job posted successfully!</p>
      )}
    </form>
  );
};