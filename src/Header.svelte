<script>
    import {Button, Card, H2, Headline, Subhead, Tabs, TextField} from "attractions";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    export let selectedTab;
    export let tabs;

</script>
<Card outline style="display: flex;justify-content: flex-start">
    <div style="align-self: flex-start;width: 80%">
        <Headline>Epidemic Visualisation</Headline>
        <div style="display: flex">
            <Tabs bind:value={selectedTab} items="{tabs}" name="menu" style=""/>
        </div>
    </div><!--
    <div style=";width: 40%;display: flex;align-items: flex-start">
        <div style="margin-left: auto;width: 60%">
            <TextField style="height: 4em;width: 100%" bind:value={searchQuery} on:input={dispatch("search",searchQuery)} outline
                       placeholder="Search for an item"/>
        </div>
        <Button style="margin-left: 5%;height: 4em;" filled on:click={()=>{dispatch("lucky")}}>I'm feeling lucky!</Button>
        <Button style="margin-left: 5%;height: 4em;" filled on:click={()=>{dispatch("execute")}}>Submit Order99</Button>
    </div>-->
</Card>
