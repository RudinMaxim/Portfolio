import React from 'react';
import '../../app/globals.scss';

export function Container({ children }: { children: React.ReactNode }) {
	return <div className='continer'>{children}</div>;
}
