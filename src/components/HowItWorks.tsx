import React from 'react';
import { MessageCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-5">
        <MessageCircle fill="white" />
        <h2 className="text-xl font-bold">How it Works</h2>
      </div>
    </section>
  );
};

export default HowItWorks;
