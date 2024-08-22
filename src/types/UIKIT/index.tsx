import { ReactNode } from "react";

export interface IPropsTopBar {
  title: string;
}
export type SelectOptionProduct = {
  label: string;
  value: string;
};

export type ButtonType = "submit" | "reset" | "button" | undefined;

export interface IPropsButton {
  title?: string;
  type: ButtonType;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  node?: React.ReactNode;
}

export interface IPropsInput<
  T extends string | number | readonly string[] | undefined
> {
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: T;
}

export interface IPropsSelect<T> {
  value: T;
  className?: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOptionProduct[];
}


export interface IPropsTooltip {
  children: ReactNode;
  content: string;
};