import React, { useState } from 'react';
import { NeumorphicCard, NeumorphicButton } from '../../styles/Neumorphic';
import { useTheme } from '../../context/ThemeContext';

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
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [comfort, setComfort] = useState('');
  const [goal, setGoal] = useState('');
  const { isLightMode } = useTheme();

  const handleNext = () => {
    if (onNext) onNext({ userId: email, experience, comfort, goal });
  };

  return (
    <NeumorphicCard isLightMode={isLightMode}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Basic Profile & Experience</h2>
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
          <label htmlFor="email">0. Please enter your email address (this will be your user ID):</label>
        </div>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '12px',
            border: '1px solid #ccc',
            marginBottom: '1rem',
            fontSize: '1rem',
            boxSizing: 'border-box'
          }}
        />
      </div>
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
          1. What is your current investing experience?
        </div>
        {options.map(opt => (
          <NeumorphicButton
            key={opt.value}
            isLightMode={isLightMode}
            className={experience === opt.value ? 'selected' : ''}
            style={{
              width: '100%',
              margin: '0.5rem 0'
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
            isLightMode={isLightMode}
            className={comfort === opt.value ? 'selected' : ''}
            style={{
              width: '100%',
              margin: '0.5rem 0'
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
          3. What's your primary investment goal?
        </div>
        {goalOptions.map(opt => (
          <NeumorphicButton
            key={opt.value}
            isLightMode={isLightMode}
            className={goal === opt.value ? 'selected' : ''}
            style={{
              width: '100%',
              margin: '0.5rem 0'
            }}
            onClick={() => setGoal(opt.value)}
            type="button"
          >
            {opt.label}
          </NeumorphicButton>
        ))}
      </div>
      <NeumorphicButton
        isLightMode={isLightMode}
        style={{ marginTop: '2rem', width: '100%' }}
        onClick={handleNext}
        disabled={!email || !experience || !comfort || !goal}
      >
        Next
      </NeumorphicButton>
    </NeumorphicCard>
  );
};

export default Section1; 