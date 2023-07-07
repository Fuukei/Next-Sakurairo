import dynamic from 'next/dynamic';

export const APIBackgroundImage = dynamic(() => import('./APIBackgroundImage'));
export const LocalBackgroundImage = dynamic(() => import('./LocalBackgroundImage'));

