<script lang="ts">
    import {StatisticsEntry} from "./data.ts";
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import {LineChart, StackedAreaChart} from "@carbon/charts-svelte";


    export let raw_data: { [step_id: string]: StatisticsEntry };
    export let name: string;
    let data;

    function convert_data() {
        data = [];
        for (let step in raw_data) {
            data.push({
                "group": "susceptible",
                "value": raw_data[step].susceptible,
                "step": step
            });
            data.push({
                "group": "exposed",
                "value": raw_data[step].exposed,
                "step": step
            });
            data.push({
                "group": "infected",
                "value": raw_data[step].infected,
                "step": step
            });
            data.push({
                "group": "recovered",
                "value": raw_data[step].recovered,
                "step": step
            });
            data.push({
                "group": "vaccinated",
                "value": raw_data[step].vaccinated,
                "step": step
            });

        }
        console.log(data);
    }

    convert_data()
</script>
<div style="width: 100%;display: flex;justify-content: space-between">
    <div style="width: 40%;margin-left: 2em">
        <LineChart data={data} options={{
            "title": name,
            "axes": {
                "bottom": {
                    "title": "Time Step",
                    "mapsTo": "step",
                    "scaleType": "linear"
                },
                "left": {
                    "mapsTo": "value",
                    "title": "Number of Citizens",
                    "scaleType": "linear"
                }
            },
            "curve": "curveMonotoneX",
            "width":"500px",
            "height":"800px",
        }}/>
    </div>
    <div style="width: 40%;margin-left: 2em">
        <StackedAreaChart data={data} options={{
            "title": "Stacked Percentages Data",
            "axes": {
                "left": {
                    "stacked": true,
                    "percentage": true,
                    "ticks": {},
                    "title":"Percentage of Population"
                },
                "bottom": {
                    "scaleType": "linear",
                    "mapsTo": "step",
                    "title":"Time Step"
                }
            },
            "curve": "curveMonotoneX",
            "width": "500px",
            "height": "800px"
        }}/>
    </div>
</div>
