<template>
  <div class="home">
    <li v-for="commute in commutes" :key="commute.person">
      <Commute :person="commute.fields.person" :start="commute.fields.start" :destination="commute.fields.destination" /> 
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
import Commute from "@/components/Commute.vue";
import contentful from "@/modules/contentful.js";
export default {
  name: "Home",
  components: {
    Commute,
  },
  data: function () {
    return {
      commutes: [],
    };
  },
  created: async function () {
    this.commutes = await contentful.getCommutes();
  },
};
</script>
