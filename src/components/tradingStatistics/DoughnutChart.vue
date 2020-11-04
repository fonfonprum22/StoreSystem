<template>
    <div>
        <DougnutChart 
          :datacollection="datacollection"
        />
    </div>
</template>

<script>
import DougnutChart from '../chart_dashbpard/DoughnutChart'
export default {
    components : {
        DougnutChart
    },
    props : ['datacollection']
}
</script>