import styled from 'styled-components';

const RangeInput = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  appearance: none; /* Hides the slider so that custom slider can be made */
  margin: 1rem 0;
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  position: relative;

  /* Special styling for WebKit/Blink */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 100%;
    background: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    margin-top: -6px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  }

  /* All the same stuff for Firefox */
  &::-moz-range-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 100%;
    background: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }

  &:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    margin: 5px 0;
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 1.5px;
  }

  &::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 1.5px;
  }
`;

export default RangeInput;
