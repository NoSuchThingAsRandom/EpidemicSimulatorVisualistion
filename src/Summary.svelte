<script lang="ts">
    import type {StatisticsEntry} from "./data";

    export let raw_data: [StatisticsEntry];
    let total_infected=0;
    let total_recovered=0;
    let total_vaccinated=0;
    function build_stats(){
        console.log(raw_data);
        if (raw_data==undefined){
            return;
        }
        for (let entry:StatisticsEntry of raw_data){
            total_infected+=entry.infected;
            total_recovered+=entry.recovered;
            total_vaccinated+=entry.vaccinated;
        }
    }
    build_stats();

</script>
<h4>There were:<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: dodgerblue">{total_infected}</span> total infections.<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: darkred">{total_recovered}</span> total deaths.<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: lawngreen">{total_vaccinated}</span> total vaccinations. </h4>