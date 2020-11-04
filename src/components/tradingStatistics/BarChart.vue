<template>
    <div>
        <BarChart 
            :datacollection="datacollection"
        />
    </div>
</template>

<script>
import BarChart from '../chart_dashbpard/BarChart'
export default {
    components : {
        BarChart
    },
    props : ['datacollection']
}
</script>