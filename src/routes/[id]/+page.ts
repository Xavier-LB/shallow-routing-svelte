import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ params }) => {
	async function getData(id: string) {
		const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
		const data = await res.json();
		return data;
	}

	return {
		country: await getData(params.id)
	};
};
