import React, { useState } from 'react';
import { NeumorphicCard, NeumorphicButton, NeumorphicInput } from '../../styles/Neumorphic';

const budgetPeriods = [
  { label: 'Per day', value: 'day' },
  { label: 'Per week', value: 'week' },
  { label: 'Per month', value: 'month' }
];

const stopLossPeriods = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' }
];

const Section4 = ({ onNext, onBack }) => {
  const [capital, setCapital] = useState('');
  const [budget, setBudget] = useState('');
  const [budgetPeriod, setBudgetPeriod] = useState('');
  const [reinvest, setReinvest] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [stopLossPeriod, setStopLossPeriod] = useState('day');
  const [stopLossEnabled, setStopLossEnabled] = useState('');

  const handleNext = () => {
    if (onNext) onNext({ capital, budget, budgetPeriod, reinvest, stopLoss, stopLossPeriod, stopLossEnabled });
  };

  return (
    <NeumorphicCard>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Investment Amounts & Limits</h2>
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
          9. How much total capital do you want to allocate to automated trading?
        </div>
        <NeumorphicInput
          type="number"
          placeholder="$ Amount"
          value={capital}
          onChange={e => setCapital(e.target.value)}
          style={{ width: '100%', color: '#fff', background: '#23234b' }}
        />
      </div>
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
          10. What is your max trading budget?
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          {budgetPeriods.map(opt => (
            <NeumorphicButton
              key={opt.value}
              style={{
                flex: 1,
                background: budgetPeriod === opt.value
                  ? 'linear-gradient(90deg, #3a3aff 0%, #23234b 100%)'
                  : 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)',
                boxShadow: budgetPeriod === opt.value
                  ? '0 0 16px #3a3aff99'
                  : undefined
              }}
              onClick={() => setBudgetPeriod(opt.value)}
              type="button"
            >
              {opt.label}
            </NeumorphicButton>
          ))}
        </div>
        <NeumorphicInput
          type="number"
          placeholder={`$ per ${budgetPeriod || 'period'}`}
          value={budget}
          onChange={e => setBudget(e.target.value)}
          style={{ width: '100%', color: '#fff', background: '#23234b' }}
          disabled={!budgetPeriod}
        />
      </div>
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
          11. Do you want the AI to reinvest profits automatically?
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <NeumorphicButton
            style={{
              flex: 1,
              background: reinvest === 'yes'
                ? 'linear-gradient(90deg, #3a3aff 0%, #23234b 100%)'
                : 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)',
              boxShadow: reinvest === 'yes'
                ? '0 0 16px #3a3aff99'
                : undefined
            }}
            onClick={() => setReinvest('yes')}
            type="button"
          >
            Yes
          </NeumorphicButton>
          <NeumorphicButton
            style={{
              flex: 1,
              background: reinvest === 'no'
                ? 'linear-gradient(90deg, #3a3aff 0%, #23234b 100%)'
                : 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)',
              boxShadow: reinvest === 'no'
                ? '0 0 16px #3a3aff99'
                : undefined
            }}
            onClick={() => setReinvest('no')}
            type="button"
          >
            No, hold profits in cash
          </NeumorphicButton>
        </div>
      </div>
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
          12. Should the AI stop trading if losses exceed a certain percentage?
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <NeumorphicButton
            style={{
              flex: 1,
              background: stopLossEnabled === 'yes'
                ? 'linear-gradient(90deg, #3a3aff 0%, #23234b 100%)'
                : 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)',
              boxShadow: stopLossEnabled === 'yes'
                ? '0 0 16px #3a3aff99'
                : undefined
            }}
            onClick={() => setStopLossEnabled('yes')}
            type="button"
          >
            Yes
          </NeumorphicButton>
          <NeumorphicButton
            style={{
              flex: 1,
              background: stopLossEnabled === 'no'
                ? 'linear-gradient(90deg, #3a3aff 0%, #23234b 100%)'
                : 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)',
              boxShadow: stopLossEnabled === 'no'
                ? '0 0 16px #3a3aff99'
                : undefined
            }}
            onClick={() => setStopLossEnabled('no')}
            type="button"
          >
            No, keep trading based on strategy
          </NeumorphicButton>
        </div>
        {stopLossEnabled === 'yes' && (
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <NeumorphicInput
              type="number"
              placeholder="% Loss"
              value={stopLoss}
              onChange={e => setStopLoss(e.target.value)}
              style={{ width: '100px', color: '#fff', background: '#23234b' }}
            />
            <span style={{ color: '#fff', fontWeight: 500 }}>in</span>
            {stopLossPeriods.map(opt => (
              <NeumorphicButton
                key={opt.value}
                style={{
                  background: stopLossPeriod === opt.value
                    ? 'linear-gradient(90deg, #3a3aff 0%, #23234b 100%)'
                    : 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)',
                  boxShadow: stopLossPeriod === opt.value
                    ? '0 0 16px #3a3aff99'
                    : undefined,
                  padding: '0.5rem 1rem',
                  fontSize: '1rem',
                  margin: '0 0.25rem'
                }}
                onClick={() => setStopLossPeriod(opt.value)}
                type="button"
              >
                {opt.label}
              </NeumorphicButton>
            ))}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', width: '100%', gap: '1rem', marginTop: '2rem' }}>
        <NeumorphicButton onClick={onBack} style={{ flex: 1, background: 'linear-gradient(90deg, #23234b 0%, #3a3aff 100%)' }}>
          Back
        </NeumorphicButton>
        <NeumorphicButton
          onClick={handleNext}
          style={{ flex: 1 }}
          disabled={!capital || !budget || !budgetPeriod || !reinvest || (stopLossEnabled === 'yes' && !stopLoss)}
        >
          Next
        </NeumorphicButton>
      </div>
    </NeumorphicCard>
  );
};

export default Section4; 