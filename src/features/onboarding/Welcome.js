import React from 'react';
import { NeumorphicCard, NeumorphicButton } from '../../styles/Neumorphic';
import ThemeToggle from '../../components/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const Welcome = ({ onNext }) => {
  const { isLightMode } = useTheme();

  return (
    <NeumorphicCard isLightMode={isLightMode} style={{ 
      minWidth: 340, 
      minHeight: 320, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative'
    }}>
      {/* Theme Toggle positioned at top right */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem'
      }}>
        <ThemeToggle />
      </div>

      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '1.5rem', 
        fontSize: '2rem',
        color: isLightMode ? '#2c3e50' : '#ffffff'
      }}>
        Welcome to the App
      </h2>
      
      <div style={{ 
        color: isLightMode ? '#6c757d' : '#ffffff', 
        fontSize: '1.1rem', 
        textAlign: 'center', 
        marginBottom: '2.5rem',
        lineHeight: '1.6'
      }}>
        Uses AI to invest on your behalf with your risk and goals.
      </div>
      
      <NeumorphicButton 
        isLightMode={isLightMode}
        style={{ width: '100%' }} 
        onClick={onNext}
      >
        Get Started
      </NeumorphicButton>
    </NeumorphicCard>
  );
};

export default Welcome; 