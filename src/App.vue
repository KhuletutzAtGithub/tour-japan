<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      VUE_APP_PLACES_API_KEY: "",
      VUE_APP_PLACES_API_URL: "",
      VUE_APP_WEATHER_API_APP_ID: "",
      VUE_APP_WEATHER_API_URL: "",
      currentWeather: {},
      currentPlaces: [],
    };
  },
  methods: {
    async getPlaces(city) {
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: this.VUE_APP_PLACES_API_KEY,
        },
      };

      const res = await fetch(
        `${this.VUE_APP_PLACES_API_URL}/search?near=${city}, JP`,
        options
      );
      return await res.json();
    },
    async getWeather(lat, lon) {
      const res = await fetch(
        `${this.VUE_APP_WEATHER_API_URL}?lat=${lat}&lon=${lon}&exclude=,current,minutely,hourly,alerts&appid=${this.VUE_APP_WEATHER_API_APP_ID}`
      );
      return await res.json();
    },
  },
  created: async () => {
    this.VUE_APP_PLACES_API_KEY = process.env.VUE_APP_PLACES_API_KEY;
    this.VUE_APP_PLACES_API_URL = process.env.VUE_APP_PLACES_API_URL;
    this.VUE_APP_WEATHER_API_APP_ID = process.env.VUE_APP_WEATHER_API_APP_ID;
    this.VUE_APP_WEATHER_API_URL = process.env.VUE_APP_WEATHER_API_URL;

    const cities = [
      {
        name: "Tokyo",
        lat: 35.6762,
        lon: 139.6503,
      },
      {
        name: "Yokohama",
        lat: 35.4437,
        lon: 139.638,
      },
      {
        name: "Kyoto",
        lat: 35.0116,
        lon: 135.7681,
      },
      {
        name: "Osaka",
        lat: 34.6937,
        lon: 135.5023,
      },
      {
        name: "Sapporo",
        lat: 43.0618,
        lon: 141.3545,
      },
      {
        name: "Nagoya",
        lat: 35.1815,
        lon: 136.9066,
      },
    ];

    this.currentWeather = await this.getWeather(cities[0].lat, cities[0].lon);
    console.log(this.currentWeather);
  },
};
</script>
