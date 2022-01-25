<script lang="ts">
    import {Config, config_store, Data, data_store} from "./data.ts";
    import LineGraph from "./LineGraph.svelte"
    import {Card as Pretty} from "attractions"
    import Summary from "./Summary.svelte";
    import Card, {Content, Media,} from '@smui/card';

    let selected_config: Config = new Config();
    let data: Data;
    data_store.subscribe(value => {
        data = value;
    });
    config_store.subscribe(value => {
        selected_config = value[0];
    })
</script>
<h2 style="margin: auto;padding: 10px">
    This is the results page
</h2>
<div style="display:flex">
    {#if data !== undefined}
        {#each Object.keys(data.data) as area_code}
            <Pretty outlined>
                <Card>
                    <div style="padding: 1rem;">
                        <h2 style="margin: 0">Summary for {area_code} Areas</h2>
                        <Summary bind:raw_data={data.data[area_code]["All"]}/>
                    </div>
                    <Media aspectRatio="square">
                        <Content style="padding:50px">
                            <LineGraph bind:raw_data={data.data[area_code]["All"]} name="{area_code}"/>
                        </Content>
                    </Media>
                </Card>

            </Pretty>
        {/each}
    {:else}
        <p>No data has been loaded</p>
    {/if}
</div>