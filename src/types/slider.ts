import { ReactNode } from "react";

export interface SliderProps {
  children: ReactNode;
  headline?: string;
  perView?: number;
  spacing?: number;
  breakpoints?: Record<
    string,
    { slides: { perView: number; spacing?: number } }
  >;
  loop?: boolean;
}
