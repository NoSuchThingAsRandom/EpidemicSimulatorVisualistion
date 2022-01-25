<script lang="ts">
    import {Button, Card, Checkbox, Dialog, Divider, H3, Label, Modal, TextField} from "attractions";
    import {config_store,Config} from "./data.ts";
    let selected:Config=new Config();
    config_store.subscribe(value => {
        selected=value[0];
    })

</script>
<H3>The available configs</H3>
<Card style="margin-top:2em">
    <div style="display: flex;justify-content: space-between">
        <H3 style="align-self: flex-start">{selected.name["name"]}</H3>
    </div>
</Card>