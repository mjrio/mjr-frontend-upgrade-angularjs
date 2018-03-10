<template>
  <section v-if="driver" id="main">
    <nav id="secondary" class="main-nav col-md-3">
      <driver :driver="driver"></driver>
      <br/>
      <a href="./#/drivers" class="btn btn-default">Back to drivers list</a>
    </nav>
    <div class="main-content col-md-9">
      <driver-races :races="races"></driver-races>
    </div>
  </section>
</template>

<script>
import apiService from '../../core/services/apiService';
import Driver from './driver.vue';
import DriverRaces from './driverRaces.vue';

export default {
  props: {
    id: String,
  },
  components: {
    Driver,
    DriverRaces,
  },
  data() {
    return {
      driver: null,
      races: [],
    };
  },
  created() {
    apiService.getDriverDetails(this.id).then(driver => {
      this.driver = driver;
    });
    apiService.getDriverRaces(this.id).then(races => {
      this.races = races;
    });
  },
  // async/await version
  // async created() {
  //   this.driver = await apiService.getDriverDetails(this.id);
  //   this.races = await apiService.getDriverRaces(this.id);
  // },
};
</script>
