
import React from 'react';

// Defines SVG icons used on the page to avoid installing a full library.
const LucideIcons = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <g id="MessageSquare">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </g>
      <g id="Calendar">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
        <line x1="16" x2="16" y1="2" y2="6"></line>
        <line x1="8" x2="8" y1="2" y2="6"></line>
        <line x1="3" x2="21" y1="10" y2="10"></line>
      </g>
      <g id="BookOpen">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </g>
      <g id="Users">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </g>
    </defs>
  </svg>
);

const FeatureIcon = ({ name }: { name: string }) => (
    <div className="bg-blue-100 text-primary p-3 rounded-full mb-4 inline-flex">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <use href={`#${name}`} />
        </svg>
    </div>
);

const FeatureCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
        <FeatureIcon name={icon} />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);


interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="bg-light font-sans">
      <LucideIcons />
      
      {/* Hero Section */}
      <main>
        <section className="text-center py-20 sm:py-20 lg:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark tracking-tight">
              Your Confidential Mental Wellness Companion
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              MindWell is a safe and supportive space designed for students. Access immediate help, connect with counselors, find resources, and talk with peers—all in one place.
            </p>
            <button
              onClick={onEnter}
              className="mt-8 bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
            >
              Enter Support Hub
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-10 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">A Safe Space with the Right Tools</h2>
              <p className="mt-4 text-lg text-gray-600">Everything you need to navigate your mental health journey in college.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard icon="MessageSquare" title="AI First-Aid Support">
                Get immediate, 24/7 guidance from our friendly AI for coping strategies and initial support.
              </FeatureCard>
              <FeatureCard icon="Calendar" title="Confidential Booking">
                Easily and privately schedule appointments with on-campus mental health professionals.
              </FeatureCard>
              <FeatureCard icon="BookOpen" title="Resource Hub">
                Explore a curated library of articles, videos, and audio guides on topics like stress, anxiety, and more.
              </FeatureCard>
              <FeatureCard icon="Users" title="Peer Support Forum">
                Connect with fellow students in a moderated forum to share experiences and find community.
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center py-20 sm:py-24 px-4">
           <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-dark">Ready to Take the First Step?</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Your well-being matters. Our platform is free, confidential, and always available to help you thrive.
                </p>
                <button
                onClick={onEnter}
                className="mt-8 bg-secondary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-emerald-600 transition-transform transform hover:scale-105 shadow-lg"
                >
                Get Started Now
                </button>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MindWell. A supportive initiative for student wellness.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
