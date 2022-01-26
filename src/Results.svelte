<script lang="ts">
    import {Config, config_store, Data, data_store} from "./data.ts";
    import LineGraph from "./LineGraph.svelte"
    import {Autocomplete, Card as Pretty} from "attractions"
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
    let selected_output_area = [];

    async function* getOptions(text: string) {
        console.log("Searching for:",text);
        let areas = Object.keys(data.data["OutputArea"]);
        let text_lower = text.toLowerCase();
        let res= areas.filter((value) => {
            return value.toLowerCase().includes(text_lower)
        });
        let res2=res.map((value) => {
            return {
                name: value//, details: "Test"
            }
        });
        yield res2
    }
</script>
<h2 style="margin: auto;padding: 10px">
    This is the results page
</h2>
<div>
    {#if data !== undefined}
        <Pretty outlined>
            <Card>
                <div style="padding: 1rem;">
                    <h2 style="margin: 0">Summary for All Areas</h2>
                    <Summary bind:raw_data={data.data["All"]["All"]}/>
                </div>
                <Media aspectRatio="square">
                    <Content style="padding: 10px">
                        <LineGraph bind:raw_data={data.data["All"]["All"]} name="All"/>
                    </Content>
                </Media>
            </Card>
        </Pretty>
        <div/>
        <div>
            <p>Select Area Code to view detailed stats</p>
            <Autocomplete {getOptions} bind:selection={selected_output_area}/>
            {#if selected_output_area !== undefined}
                {#each selected_output_area as area}
                    <Pretty outlined>
                        <Card>
                            <div style="padding: 1rem;">
                                <h2 style="margin: 0">Summary for {area.name} Areas</h2>
                                <Summary bind:raw_data={data.data["OutputArea"][area.name]}/>
                            </div>
                            <Media aspectRatio="square">
                                <Content style="padding: 10px">
                                    <LineGraph bind:raw_data={data.data["OutputArea"][area.name]} name={area.name}/>
                                </Content>
                            </Media>
                        </Card>
                    </Pretty>
                {/each}
            {/if}
        </div>
    {:else}
        <p>No data has been loaded</p>
    {/if}
</div>