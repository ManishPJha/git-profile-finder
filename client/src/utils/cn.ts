import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (classValues: ClassValue[]) => {
    return twMerge(clsx(classValues));
};
