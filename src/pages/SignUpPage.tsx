import React from 'react';

// Import custom components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SignUpForm from '@/components/SignUpForm';

const SignUpPage: React.FC = () => {
  console.log('SignUpPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <SignUpForm />
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;