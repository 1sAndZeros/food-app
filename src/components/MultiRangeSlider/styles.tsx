import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { ExecutionContext } from 'styled-components';
import { FastOmit } from 'styled-components/dist/types';

type SliderProps = ExecutionContext &
  FastOmit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    never
  >;

const black = (props: SliderProps) => props.theme.colors.neutral.black;
const white = (props: SliderProps) => props.theme.colors.neutral.white;
const primary = (props: SliderProps) => props.theme.colors.primary;

const StyledDiv = styled.div`
  --width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  .slider {
    position: relative;
    width: var(--width);
  }

  .slider__track,
  .slider__range,
  .slider__left-value,
  .slider__right-value {
    position: absolute;
  }

  .slider__track,
  .slider__range {
    border-radius: 3px;
    height: 5px;
  }

  .slider__track {
    background-color: ${white};
    width: 100%;
    z-index: 1;
  }

  .slider__range {
    background-color: ${primary};
    z-index: 2;
  }

  .slider__left-value,
  .slider__right-value {
    color: ${black};
    font-size: 12px;
    margin-top: 20px;
  }

  .slider__left-value {
    left: 6px;
  }

  .slider__right-value {
    right: -4px;
  }

  /* Removing the default appearance */
  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: var(--width);
    outline: none;
  }

  .thumb--zindex-3 {
    z-index: 3;
  }

  .thumb--zindex-4 {
    z-index: 4;
  }

  .thumb--zindex-5 {
    z-index: 5;
  }

  /* For Chrome browsers */
  .thumb::-webkit-slider-thumb {
    background-color: ${primary};
    border: none;
    border-radius: 50%;
    /* box-shadow: 0 0 1px 1px #ced4da; */
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  /* For Firefox browsers */
  .thumb::-moz-range-thumb {
    background-color: ${primary};
    border: none;
    border-radius: 50%;
    /* box-shadow: 0 0 1px 1px #ced4da; */
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    transform: translateY(3px);
    pointer-events: all;
    position: relative;
  }
`;

export default StyledDiv;
