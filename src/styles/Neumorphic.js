import styled from 'styled-components';

export const NeumorphicCard = styled.div`
  background: #23234b;
  border-radius: 20px;
  box-shadow:
    12px 12px 24px #181829,
    -12px -12px 24px #2d2d5a;
  padding: 2rem;
  margin: 2rem 0;
  color: #fff;
`;

export const NeumorphicButton = styled.button`
  background: linear-gradient(90deg, #23234b 0%, #2d2d5a 100%);
  border-radius: 16px;
  box-shadow:
    4px 4px 12px #181829,
    -4px -4px 12px #2d2d5a,
    0 0 8px #3a3aff66;
  color: #fff;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: box-shadow 0.2s, background 0.2s;
  &:active {
    box-shadow:
      inset 2px 2px 8px #181829,
      inset -2px -2px 8px #2d2d5a;
    background: linear-gradient(90deg, #23234b 0%, #23234b 100%);
  }
`;

export const NeumorphicInput = styled.input`
  background: #23234b;
  border-radius: 12px;
  box-shadow:
    inset 2px 2px 8px #181829,
    inset -2px -2px 8px #2d2d5a;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #fff;
  margin-bottom: 1rem;
  outline: none;
`;

export const NeumorphicLabel = styled.label`
  color: #fff;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
`; 