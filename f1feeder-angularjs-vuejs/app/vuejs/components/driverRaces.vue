<template>
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th colspan="5">Formula 1 2013 Results</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Round</td>
        <td>Grand Prix</td>
        <td>Team</td>
        <td>Grid</td>
        <td>Race</td>
      </tr>
      <tr v-for="race in races" :key="race.Results[0].round">
        <td>{{race.round}}</td>
        <td>
          <img :src="`/assets/img/flags/${race.Circuit.Location.country}.png`" />{{race.raceName}}</td>
        <td>{{race.Results[0].Constructor.name}}</td>
        <td>{{race.Results[0].grid}}</td>
        <td>{{race.Results[0].position}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    races: Array,
  },
};
</script>
