<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  methods: {},
  created: async () => {
    // const cities = [
    //   {
    //     name: "Tokyo",
    //     lat: 35.6762,
    //     lon: 139.6503,
    //   },
    //   {
    //     name: "Yokohama",
    //     lat: 35.4437,
    //     lon: 139.638,
    //   },
    //   {
    //     name: "Kyoto",
    //     lat: 35.0116,
    //     lon: 135.7681,
    //   },
    //   {
    //     name: "Osaka",
    //     lat: 34.6937,
    //     lon: 135.5023,
    //   },
    //   {
    //     name: "Sapporo",
    //     lat: 43.0618,
    //     lon: 141.3545,
    //   },
    //   {
    //     name: "Nagoya",
    //     lat: 35.1815,
    //     lon: 136.9066,
    //   },
    // ];

    // const key = "fsq31aaCRRfkOjwH504aaH35EgtPSwm06/AvwGQNTNwGwhE=";
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "fsq31aaCRRfkOjwH504aaH35EgtPSwm06/AvwGQNTNwGwhE=",
      },
    };

    const res = await fetch(
      "https://api.foursquare.com/v3/places/search?near=Tokyo%2C%20JP",
      options
    );
    const data = await res.json();
    console.log(data);
    // const res = await fetch(
    //   `https://api.openweathermap.org/data/2.5/onecall?lat=${cities[0].lat}&lon=${cities[0].lon}&exclude=daily&appid=f158dca0fc3bad2a0c230eef512eb2e8`
    // );
    // const data = await res.json();
    // console.log(data);
    // console.log(cities);
    // console.log(1);
  },
};
</script>
