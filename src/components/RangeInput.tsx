import styled from 'styled-components';

const Input = styled.input`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  appearance: none; /* Hides the slider so that custom slider can be made */
  margin: 1rem 0;
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  position: relative;

  /* Special styling for WebKit/Blink */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid black;
    height: 16px;
    width: 16px;
    border-radius: 100%;
    background: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    margin-top: -6px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    box-shadow: 1px 1px 1px black, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
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

  &::-ms-track {
    width: 100%;
    cursor: pointer;
    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 1.5px;
  }

  &:focus::-webkit-slider-runnable-track {
    background: ${(props) => props.theme.colors.primary};
  }

  &::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 1.5px;
  }
`;

const RangeInput = (props) => <Input type='range' {...props} />;

export default RangeInput;
