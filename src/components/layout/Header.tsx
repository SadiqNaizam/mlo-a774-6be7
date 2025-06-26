import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span>SwiftAuth</span>
        </Link>
        {/* Navigation could be added here if needed in the future */}
      </div>
    </header>
  );
};

export default Header;