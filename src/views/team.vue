<template>
    <div class="w-full font-normal_font">
        <TeamWork/>
        <TechnicalSupport/>
        <NodePartner/>
        <ContentPartner/>
        <OperationsTeam/>
    </div>
</template>

<script>
import TeamWork from './team/TeamWork.vue';
import TechnicalSupport from './team/TechnicalSupport.vue';
import NodePartner from './team/NodePartner.vue';
import ContentPartner from './team/ContentPartner.vue';
import OperationsTeam from './team/OperationsTeam.vue';

export default {
  name: 'Team',
  components: {
    TeamWork,
    TechnicalSupport,
    NodePartner,
    ContentPartner,
    OperationsTeam,
  },
  mounted() {
    window.scrollTo(0,0);
  }
}
</script>
