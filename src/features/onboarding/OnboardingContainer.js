import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '../../context/ThemeContext';
import Welcome from './Welcome';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import SectionFinal from './SectionFinal';
import SectionComplete from './SectionComplete';
import { createOnboarding } from '../../utils/api';

function filterSerializable(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      value === null ||
      Array.isArray(value) ||
      (typeof value === 'object' && value !== null && !value.window && !value.document && !value.nodeType)
    ) {
      result[key] = value;
    }
  }
  return result;
}

function isPlainObject(obj) {
  return obj && typeof obj === 'object' && obj.constructor === Object;
}

const OnboardingContent = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const { isLightMode } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleNext = async (sectionAnswers) => {
    // Ignore event objects
    if (sectionAnswers && sectionAnswers.nativeEvent && sectionAnswers.preventDefault) {
      console.warn('Event object detected in handleNext, ignoring!');
      sectionAnswers = undefined;
    }
    let mergedAnswers = answers;
    if (isPlainObject(sectionAnswers)) {
      mergedAnswers = { ...answers, ...sectionAnswers };
      setAnswers(mergedAnswers);
    }
    // If next step is SectionComplete, submit to backend
    if (step === 6) {
      try {
        const dataToSend = filterSerializable(mergedAnswers);
        console.log('Submitting onboarding data:', dataToSend); // Debug log
        await createOnboarding(dataToSend);
        setSubmitted(true);
        setStep(step + 1);
      } catch (err) {
        setError('Failed to save onboarding data. Please try again.');
      }
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      justifyContent: 'center',
      gap: '2rem',
      background: isLightMode 
        ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 50%, #a8caba 100%)'
        : 'linear-gradient(135deg, #1a1a3a 0%, #23234b 100%)',
      transition: 'background 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Metallic paint shimmer effect for light mode */}
      {isLightMode && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 1
        }} />
      )}
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        {step === 0 && (
          <Welcome onNext={handleNext} />
        )}
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
        {error && (
          <div style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>{error}</div>
        )}
      </div>
    </div>
  );
};

const OnboardingContainer = () => {
  return (
    <ThemeProvider>
      <OnboardingContent />
    </ThemeProvider>
  );
};

export default OnboardingContainer; 