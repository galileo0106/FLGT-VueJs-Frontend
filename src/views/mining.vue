<script setup>
</script>

<style>
</style>
<template>
    <div class="w-full font-normal_font">
        <TokensMining/>
        <Issuance/>
        <TokenMiningRatio/>
        <Realization/>
    </div>
</template>

<script>
import TokensMining from './mining/TokensMining.vue';
import Issuance from './mining/Issuance.vue';
import TokenMiningRatio from './mining/TokenMiningRatio.vue';
import Realization from './mining/Realization.vue';

export default {
  name: 'Mining',
  components: {
    TokensMining,
    Issuance,
    TokenMiningRatio,
    Realization
  }
}
</script>
