"use client";

import styled from "styled-components";
import React, { useState, useRef } from "react";
import Button from "./Button";
import { cusines, dishTypes } from "@/data";
import { Cuisine, Dish, CookingTime, FilterProps } from "@/types";
import Container from "./Container";
import MultiRangeSlider from "./MultiRangeSlider/MultiRangeSlider";
import { useRouter, useSearchParams } from "next/navigation";
import { updateSearchParams } from "@/utils";
import { set } from "mongoose";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  text-transform: uppercase;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    align-self: center;
  }

  h4,
  label {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }

  .button-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-block: 0.5rem;
  }

  button {
    font-size: 0.75rem;
  }

  button[type="submit"] {
    font-size: 0.75rem;
    background-color: ${(props) => props.theme.colors.neutral.black};
    border: none;
    color: ${(props) => props.theme.colors.neutral.white};
  }

  & button.active {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.neutral[800]};
    border-color: ${(props) => props.theme.colors.neutral[800]};
  }

  .input-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }

  .checkbox-group {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid ${(props) => props.theme.colors.neutral[800]};
    position: relative;
    border-radius: 0.25rem;
  }

  input[type="checkbox"]:checked::before {
    content: "";
    border: 2px solid ${(props) => props.theme.colors.neutral[800]};
    background-color: ${(props) => props.theme.colors.neutral[800]};
    position: absolute;
    inset: 2px;
    border-radius: 0.25rem;
  }

  select {
    padding: 0.25rem;
    border: 2px solid ${(props) => props.theme.colors.neutral[800]};
    border-radius: 0.25rem;
    font-size: 1rem;
    font-family: inherit;
    background-color: transparent;

    & option {
      border: 2px solid ${(props) => props.theme.colors.neutral[800]};
      border-radius: 0.25rem;
      font-family: inherit;
    }
  }

  .form-group {
    position: relative;
  }

  input[type="range"] {
    ~ p {
      position: absolute;
      bottom: 0;
      font-size: 0.75rem;
      translate: -5px;
    }

    ~ p:last-of-type {
      right: 0;
      translate: 5px;
    }
  }
`;

const SearchRecipes = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dish = searchParams.get("dishType") as Dish | null;
  const [filters, setFilters] = useState<FilterProps>({
    dishType: "Dinner",
    cuisine: "Italian",
    servings: 1,
    dairyFree: false,
    vegan: false,
    vegetarian: false,
    cookingTime: {
      min: 10,
      max: 180,
    },
  });

  // const [activeDishType, setActiveDishType] = useState<Dish | null>("Dinner");
  // const [activeCuisineType, setActiveCuisineType] = useState<Cuisine | null>(
  //   "Italian"
  // );
  // const servingRef = useRef<HTMLSelectElement>(null);
  // const [cookingTime, setCookingTime] = useState<CookingTime>({
  //   min: 10,
  //   max: 180,
  // });
  // const vegetarianRef = useRef<HTMLInputElement>(null);
  // const veganRef = useRef<HTMLInputElement>(null);
  // const diaryFreeRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(filters);
    // console.log("veg:", vegetarianRef.current?.checked);
    // console.log("vegan: ", veganRef.current?.checked);
    // console.log("diary: ", diaryFreeRef.current?.checked);
    // console.log("servings: ", servingRef.current?.value);
    // console.log("dishType: ", activeDishType);
    // console.log("cuisine: ", activeCuisineType);
    // handleChangeType(activeDishType);
    const searchParams = new URLSearchParams({
      dishType: filters.dishType,
      cuisine: filters.cuisine,
      servings: filters.servings.toString(),
      dairyFree: filters.dairyFree.toString(),
      vegan: filters.vegan.toString(),
      vegetarian: filters.vegetarian.toString(),
      minCookingTime: filters.cookingTime.min.toString(),
      maxCookingTime: filters.cookingTime.max.toString(),
    });

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  };

  // const handleChangeType = (type: FilterProps | null) => {
  //   console.log(type);
  //   if (type) {
  //     setActiveDishType(type);
  //     const newPathName = updateSearchParams("dishType", type.toLowerCase());
  //     router.push(newPathName, { scroll: false });
  //   }
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters({ ...filters, [name]: checked });
  };

  const handleButtonChange = (type: string, name: string) => {
    setFilters({ ...filters, [name]: type });
  };

  return (
    <Container
      style={{ maxHeight: "650px", overflow: "auto", scrollbarWidth: "none" }}
    >
      <StyledForm onSubmit={handleSubmit}>
        <h3>Create Your Recipe</h3>
        <div className="form-group">
          <h4>Meal Type:</h4>
          <div className="button-container">
            {dishTypes.map((dish, i) => (
              <Button
                className={filters?.dishType === dish ? "active" : ""}
                key={i}
                type="button"
                variant="ghostgrey"
                onClick={() => handleButtonChange(dish, "dishType")}
              >
                {dish}
              </Button>
            ))}
          </div>
        </div>
        <div className="input-group">
          <div className="checkbox-group">
            <label htmlFor="vegetarian">Vegetarian</label>
            <input
              name="vegetarian"
              id="vegetarian"
              type="checkbox"
              onChange={handleCheckBoxChange}
            />
          </div>
          <div className="checkbox-group">
            <label htmlFor="vegan">Vegan</label>
            <input
              name="vegan"
              id="vegan"
              type="checkbox"
              onChange={handleCheckBoxChange}
            />
          </div>
          <div className="checkbox-group">
            <label htmlFor="dairy-free">Dairy Free</label>
            <input
              name="dairyFree"
              id="dairy-free"
              type="checkbox"
              onChange={handleCheckBoxChange}
            />
          </div>
        </div>
        <div className="input-group">
          <h4>Servings:</h4>
          <select name="servings" onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>
        <div className="form-group">
          <h4>Cuisine:</h4>
          <div className="button-container">
            {cusines.map((cuisine, i) => (
              <Button
                className={filters.cuisine === cuisine ? "active" : ""}
                key={i}
                type="button"
                variant="ghostgrey"
                onClick={() => handleButtonChange(cuisine, "cuisine")}
              >
                {cuisine}
              </Button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <h4>Cooking Time:</h4>
          <MultiRangeSlider
            min={10}
            max={180}
            cookingTime={filters.cookingTime}
            setCookingTime={(cookingTime) =>
              setFilters({
                ...filters,
                cookingTime: { min: cookingTime.min, max: cookingTime.max },
              })
            }
          />
        </div>
        <Button type="submit">Apply</Button>
      </StyledForm>
    </Container>
  );
};

export default SearchRecipes;
