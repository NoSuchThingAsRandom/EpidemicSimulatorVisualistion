<script lang="ts">
    import {Button, Card, Checkbox, Dialog, Divider, H3, Label, Modal, TextField} from "attractions";
    import {configs,Config} from "./data.ts";
    let selected:Config=new Config();
    configs.subscribe(value => {
        selected=value[0];
    })

</script>
<H3>The available configs</H3>
<Card style="margin-top:2em">
    <div style="display: flex;justify-content: space-between">
        <H3 style="align-self: flex-start">{selected.name["name"]}</H3>
        <H3 style="align-self: flex-end">£{parseFloat(item["price"]).toFixed(2)}</H3>
    </div>
</card>