import React from 'react';
import { NeumorphicCard, NeumorphicButton } from '../../styles/Neumorphic';

const Welcome = ({ onNext }) => (
  <NeumorphicCard style={{ minWidth: 340, minHeight: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>Welcome to the App</h2>
    <div style={{ color: '#fff', fontSize: '1.1rem', textAlign: 'center', marginBottom: '2.5rem' }}>
      Uses AI to invest on your behalf with your risk and goals.
    </div>
    <NeumorphicButton style={{ width: '100%' }} onClick={onNext}>
      Get Started
    </NeumorphicButton>
  </NeumorphicCard>
);

export default Welcome; 