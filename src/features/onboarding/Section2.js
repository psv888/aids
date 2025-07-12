import React, { useState } from 'react';
import { NeumorphicCard, NeumorphicButton } from '../../styles/Neumorphic';

const riskOptions = [
  { label: 'Very low (conservative)', value: 'Very low' },
  { label: 'Low', value: 'Low' },
  { label: 'Moderate', value: 'Moderate' },
  { label: 'High', value: 'High' },
  { label: 'Very high (aggressive)', value: 'Very high' }
];

const lossOptions = [
  { label: 'I prefer small, consistent gains and cannot tolerate losses.', value: 'No tolerance' },
  { label: 'I understand some losses are part of investing.', value: 'Some tolerance' },
  { label: 'I’m fine with large swings if the potential reward is high.', value: 'High tolerance' }
];

const Section2 = ({ onNext, onBack }) => {
  const [risk, setRisk] = useState('');
  const [loss, setLoss] = useState('');

  const handleNext = () => {
    if (onNext) onNext({ risk, loss });
  };

  return (
    <NeumorphicCard>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Risk Profile</h2>
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
          4. How much risk are you willing to take with your investments?
        </div>
        {riskOptions.map(opt => (
          <NeumorphicButton
            key={opt.value}
            style={{
              width: '100%',
              margin: '0.5rem 0',
              background: risk === opt.value
                ? 'linear-gradient(90deg, #3a3aff 0%, #23234b 100%)'
                : 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)',
              boxShadow: risk === opt.value
                ? '0 0 16px #3a3aff99'
                : undefined
            }}
            onClick={() => setRisk(opt.value)}
            type="button"
          >
            {opt.label}
          </NeumorphicButton>
        ))}
      </div>
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
          5. Which of these statements best reflects your attitude toward losses?
        </div>
        {lossOptions.map(opt => (
          <NeumorphicButton
            key={opt.value}
            style={{
              width: '100%',
              margin: '0.5rem 0',
              background: loss === opt.value
                ? 'linear-gradient(90deg, #3a3aff 0%, #23234b 100%)'
                : 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)',
              boxShadow: loss === opt.value
                ? '0 0 16px #3a3aff99'
                : undefined
            }}
            onClick={() => setLoss(opt.value)}
            type="button"
          >
            {opt.label}
          </NeumorphicButton>
        ))}
      </div>
      <div style={{ display: 'flex', width: '100%', gap: '1rem', marginTop: '2rem' }}>
        <NeumorphicButton onClick={onBack} style={{ flex: 1, background: 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)' }}>
          Back
        </NeumorphicButton>
        <NeumorphicButton
          onClick={handleNext}
          style={{ flex: 1 }}
          disabled={!risk || !loss}
        >
          Next
        </NeumorphicButton>
      </div>
    </NeumorphicCard>
  );
};

export default Section2; 