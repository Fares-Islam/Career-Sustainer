export const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This is a job board web application built with React, TypeScript, and Tailwind CSS.
          It allows employers to post jobs and job seekers to browse listings.
          All data is stored locally in your browser.
        </p>
        <a
          href="https://github.com/Fares-Islam/Career-Sustainer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:underline dark:text-primary-400"
        >
          GitHub Repository
        </a>
        <p className="mt-4 text-gray-500 dark:text-gray-400">Email: fares776085@gmail.com</p>
      </div>
    </div>
  );
};