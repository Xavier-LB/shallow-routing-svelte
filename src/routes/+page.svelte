<script lang="ts">
	import { goto, preloadData, pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import CountryInfo from './[id]/+page.svelte';
	import Modal from '$lib/Modal.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const toggleModal = async (e: MouseEvent) => {
		const { href } = e.currentTarget as HTMLAnchorElement;
		console.log('href', href);

		// get result of `load` function
		const result = await preloadData(href);

		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, { country: result.data });
		} else {
			goto(href);
		}
	};
</script>

{#if $page.state.country}
	<Modal on:close={() => history.back()}><CountryInfo data={$page.state.country} /></Modal>
{/if}

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
	<table class="w-full text-sm text-left rtl:text-right text-gray-500">
		<thead class="text-xs text-gray-700 uppercase bg-gray-200">
			<tr>
				<th scope="col" class="px-6 py-3"> Name </th>
				<th scope="col" class="px-6 py-3"> Capital </th>
				<th scope="col" class="px-6 py-3">
					<span class="sr-only">More info</span>
				</th>
			</tr>
		</thead>
		<tbody>
			{#each data.countries as country}
				<tr class="hover:bg-gray-100">
					<td class="px-6 py-4 whitespace-nowrap">{country.flag} {country.name.common}</td>
					<td class="px-6 py-4 whitespace-nowrap">{country.capital}</td>
					<td class="px-6 py-4 whitespace-nowrap">
						<a on:click|preventDefault={toggleModal} href="/{country.cca2}">
							<button class="text-blue-500 hover:text-blue-700"> More info </button>
						</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
