import { MouseEventHandler } from "@node_modules/@types/react";

export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

// city_mpg:"this field is for premium subscribers only"
// class:"compact car"
// combination_mpg:"this field is for premium subscribers only"
// cylinders:4
// displacement:1.6
// drive:"fwd"
// fuel_type:"gas"
// highway_mpg:"this field is for premium subscribers only"
// make:"toyota"
// model:"corolla"
// transmission:"a"
// year:1993
