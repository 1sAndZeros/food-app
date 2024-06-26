import React, { useCallback, useEffect, useState, useRef } from 'react';
import StyledDiv from './styles';
import { convertTime } from '@/utils';
import { CookingTime } from '@/types';

interface MultiRangeSliderProps {
  min: number;
  max: number;
  cookingTime: CookingTime;
  setCookingTime: (cookingTime: CookingTime) => void;
}

const MultiRangeSlider = ({
  min,
  max,
  cookingTime,
  setCookingTime,
}: MultiRangeSliderProps) => {
  const [minVal, setMinVal] = useState(cookingTime.min);
  const [maxVal, setMaxVal] = useState(cookingTime.max);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minRef.current) {
      const minPercent = getPercent(+minRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    setCookingTime({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  return (
    <StyledDiv>
      <input
        type='range'
        min={min}
        max={max}
        step={5}
        value={minVal}
        ref={minRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className='thumb thumb--zindex-3'
      />
      <input
        type='range'
        min={min}
        max={max}
        step={5}
        value={maxVal}
        ref={maxRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className='thumb thumb--zindex-4'
      />

      <div className='slider'>
        <div className='slider__track' />
        <div ref={range} className='slider__range' />
        <div className='slider__left-value'>{convertTime(minVal)}</div>
        <div className='slider__right-value'>{convertTime(maxVal)}</div>
      </div>
    </StyledDiv>
  );
};

export default MultiRangeSlider;
