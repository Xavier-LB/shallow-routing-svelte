import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const res = await fetch('https://restcountries.com/v3.1/all');
	const data = await res.json();
	return {
		countries: data
	};
};
