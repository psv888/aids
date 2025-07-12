import React, { useState } from 'react';
import { NeumorphicCard, NeumorphicButton } from '../../styles/Neumorphic';

const options = [
  { label: 'Beginner (0–1 years)', value: 'Beginner' },
  { label: 'Intermediate (1–3 years)', value: 'Intermediate' },
  { label: 'Advanced (3+ years)', value: 'Advanced' }
];

const comfortOptions = [
  { label: 'Very comfortable', value: 'Very comfortable' },
  { label: 'Somewhat comfortable', value: 'Somewhat comfortable' },
  { label: 'Not comfortable', value: 'Not comfortable' }
];

const goalOptions = [
  { label: 'Long-term growth', value: 'Long-term growth' },
  { label: 'Short-term gains', value: 'Short-term gains' },
  { label: 'Passive income', value: 'Passive income' },
  { label: 'Wealth preservation', value: 'Wealth preservation' },
  { label: 'Retirement planning', value: 'Retirement planning' }
];

const Section1 = ({ onNext }) => {
  const [experience, setExperience] = useState('');
  const [comfort, setComfort] = useState('');
  const [goal, setGoal] = useState('');

  const handleNext = () => {
    if (onNext) onNext({ experience, comfort, goal });
  };

  return (
    <NeumorphicCard>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Basic Profile & Experience</h2>
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
          1. What is your current investing experience?
        </div>
        {options.map(opt => (
          <NeumorphicButton
            key={opt.value}
            style={{
              width: '100%',
              margin: '0.5rem 0',
              background: experience === opt.value
                ? 'linear-gradient(90deg, #3a3aff 0%, #23234b 100%)'
                : 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)',
              boxShadow: experience === opt.value
                ? '0 0 16px #3a3aff99'
                : undefined
            }}
            onClick={() => setExperience(opt.value)}
            type="button"
          >
            {opt.label}
          </NeumorphicButton>
        ))}
      </div>
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
          2. How comfortable are you with automated trading?
        </div>
        {comfortOptions.map(opt => (
          <NeumorphicButton
            key={opt.value}
            style={{
              width: '100%',
              margin: '0.5rem 0',
              background: comfort === opt.value
                ? 'linear-gradient(90deg, #3a3aff 0%, #23234b 100%)'
                : 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)',
              boxShadow: comfort === opt.value
                ? '0 0 16px #3a3aff99'
                : undefined
            }}
            onClick={() => setComfort(opt.value)}
            type="button"
          >
            {opt.label}
          </NeumorphicButton>
        ))}
      </div>
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
          3. What’s your primary investment goal?
        </div>
        {goalOptions.map(opt => (
          <NeumorphicButton
            key={opt.value}
            style={{
              width: '100%',
              margin: '0.5rem 0',
              background: goal === opt.value
                ? 'linear-gradient(90deg, #3a3aff 0%, #23234b 100%)'
                : 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)',
              boxShadow: goal === opt.value
                ? '0 0 16px #3a3aff99'
                : undefined
            }}
            onClick={() => setGoal(opt.value)}
            type="button"
          >
            {opt.label}
          </NeumorphicButton>
        ))}
      </div>
      <NeumorphicButton
        style={{ marginTop: '2rem', width: '100%' }}
        onClick={handleNext}
        disabled={!experience || !comfort || !goal}
      >
        Next
      </NeumorphicButton>
    </NeumorphicCard>
  );
};

export default Section1; 