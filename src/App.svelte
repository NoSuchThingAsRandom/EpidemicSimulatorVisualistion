<script lang="ts">
	import {onMount} from "svelte";
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import Button from '@smui/button';
	import Header from "./Header.svelte"
	import Results from "./Results.svelte"
	import Config from "./Config.svelte"
	import {data,buildData} from "./data.ts";

	export let name: string;

	const enum Tabs{
		ModifyConfig="Modify Config File",
		Results="View Results",
	}
	let tab_names=Object.values(Tabs);
	let selected_tab=Tabs.Results;
	onMount(async ()=>{
		await new Promise(r=>setTimeout(r,2000));
		console.log("Hello");
		buildData()
	})
</script>
<Header bind:selectedTab={selected_tab} bind:tabs={tab_names}>

</Header>
<main>
	{#if selected_tab === "View Results"}
		<Results></Results>
	{:else if selected_tab==="Modify Config File"}
		<Config></Config>
	{/if}
	<div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

</style>