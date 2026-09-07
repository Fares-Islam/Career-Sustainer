import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { HomePage } from './pages/home';
import { JobsPage } from './pages/jobs';
import { JobPostingPage } from './pages/jobPosting';
import { AboutPage } from './pages/about';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/post-job" element={<JobPostingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;