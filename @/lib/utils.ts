import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios';
import { json } from "stream/consumers";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

