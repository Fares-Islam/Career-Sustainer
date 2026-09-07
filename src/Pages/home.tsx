import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Welcome</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Find your next opportunity or post a job to reach top talent.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/post-job">
            <Button size="lg">I'm an employer →</Button>
          </Link>
          <Link to="/jobs">
            <Button variant="outline" size="lg">Browse jobs →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};