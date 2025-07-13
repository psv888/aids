import React, { useState } from 'react';
import { NeumorphicCard, NeumorphicButton, NeumorphicInput } from '../../styles/Neumorphic';
import { useTheme } from '../../context/ThemeContext';

const SectionFinal = ({ onNext, onBack }) => {
  const [ack, setAck] = useState(false);
  const [simulation, setSimulation] = useState('');
  const { isLightMode } = useTheme();

  const handleNext = () => {
    if (onNext) onNext({ ack, simulation });
  };

  return (
    <NeumorphicCard isLightMode={isLightMode}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Confirmation & Agreement</h2>
      <div style={{ width: '100%', marginBottom: '2rem', textAlign: 'center' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>
          16. Do you acknowledge that all trading involves risk and past performance is not indicative of future results?
        </div>
        <label style={{ 
          color: isLightMode ? '#2c3e50' : '#fff', 
          fontWeight: 500, 
          fontSize: '1rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '0.5rem' 
        }}>
          <input
            type="checkbox"
            checked={ack}
            onChange={e => setAck(e.target.checked)}
            style={{ width: 18, height: 18 }}
          />
          I acknowledge and agree.
        </label>
      </div>
      <div style={{ width: '100%', marginBottom: '2rem', textAlign: 'center' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>
          17. Would you like to test the AI in simulation mode first (paper trading)?
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <NeumorphicButton
            isLightMode={isLightMode}
            className={simulation === 'simulation' ? 'selected' : ''}
            style={{
              flex: 1
            }}
            onClick={() => setSimulation('simulation')}
            type="button"
          >
            Yes, start in simulation
          </NeumorphicButton>
          <NeumorphicButton
            isLightMode={isLightMode}
            className={simulation === 'live' ? 'selected' : ''}
            style={{
              flex: 1
            }}
            onClick={() => setSimulation('live')}
            type="button"
          >
            No, go live with real funds
          </NeumorphicButton>
        </div>
      </div>
      <div style={{ display: 'flex', width: '100%', gap: '1rem', marginTop: '2rem' }}>
        <NeumorphicButton isLightMode={isLightMode} onClick={onBack} style={{ flex: 1 }}>
          Back
        </NeumorphicButton>
        <NeumorphicButton
          isLightMode={isLightMode}
          onClick={handleNext}
          style={{ flex: 1 }}
          disabled={!ack || !simulation}
        >
          Continue
        </NeumorphicButton>
      </div>
    </NeumorphicCard>
  );
};

export default SectionFinal; 