<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;

	let country = data.country[0];
</script>

<div class="pt-10">
	<div class="text-4xl flex justify-center">{country.name.common}</div>
	<div class="flex justify-center">
		<img src={country.flags.png} alt={country.flags.alt} />
	</div>
	<div class="flex justify-center">
		<div class="font-bold mr-1">Capital:</div>
		<div>{country.capital}</div>
	</div>
	<div class="flex justify-center">
		<div class="font-bold mr-1">Population:</div>
		<div>{country.population}</div>
	</div>
	<div class="flex justify-center">
		<div class="font-bold mr-1">Area:</div>
		<div>{country.area} km2</div>
	</div>
	<div class="flex justify-center">
		<div class="font-bold mr-1">Region:</div>
		<div>{country.region}</div>
	</div>
	<div class="flex justify-center">
		<div class="font-bold mr-1">Subregion:</div>
		<div>{country.subregion}</div>
	</div>
	<div class="flex justify-center">
		<div class="font-bold mr-1">Borders:</div>
		<div>{country.borders}</div>
	</div>
	<div class="flex justify-center">
		<div class="font-bold mr-1">Latlng:</div>
		<div>{country.latlng}</div>
	</div>
	<div class="flex justify-center">
		<div class="font-bold mr-1">Timezones:</div>
		<div>{country.timezones}</div>
	</div>
	<div class="flex justify-center">
		<div class="font-bold mr-1">Alt spellings:</div>
		<div>{country.altSpellings}</div>
	</div>
</div>
