import dynamic from 'next/dynamic';

export const TextLogo = dynamic(() => import('./TextLogo'));
export const ImageLogo = dynamic(() => import('./ImageLogo'));
