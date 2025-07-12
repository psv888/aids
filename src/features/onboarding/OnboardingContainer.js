import React, { useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import SectionFinal from './SectionFinal';
import SectionComplete from './SectionComplete';

const OnboardingContainer = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleNext = (sectionAnswers) => {
    setAnswers(prev => ({ ...prev, ...sectionAnswers }));
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleRestart = () => {
    setStep(1);
    setAnswers({});
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      justifyContent: 'center',
      gap: '2rem'
    }}>
      {step === 1 && (
        <Section1 onNext={handleNext} />
      )}
      {step === 2 && (
        <Section2 onNext={handleNext} onBack={handleBack} />
      )}
      {step === 3 && (
        <Section3 onNext={handleNext} onBack={handleBack} />
      )}
      {step === 4 && (
        <Section4 onNext={handleNext} onBack={handleBack} />
      )}
      {step === 5 && (
        <Section5 onNext={handleNext} onBack={handleBack} />
      )}
      {step === 6 && (
        <SectionFinal onNext={handleNext} onBack={handleBack} />
      )}
      {step === 7 && (
        <SectionComplete onRestart={handleRestart} />
      )}
    </div>
  );
};

export default OnboardingContainer; 