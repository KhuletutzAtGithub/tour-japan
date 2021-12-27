<template>
  <div>
    <div class="min-h-full">
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <router-link
                    to="/"
                    class="
                      bg-gray-900
                      text-white
                      px-3
                      py-2
                      rounded-md
                      text-sm
                      font-medium
                    "
                    aria-current="page"
                    >Home</router-link
                  >

                  <router-link
                    to="/venue"
                    class="
                      text-gray-300
                      hover:bg-gray-700 hover:text-white
                      px-3
                      py-2
                      rounded-md
                      text-sm
                      font-medium
                    "
                    >Venue</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link
              to="/"
              class="
                bg-gray-900
                text-white
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
              "
              aria-current="page"
              >Home</router-link
            >

            <router-link
              to="/venue"
              class="
                text-gray-300
                hover:bg-gray-700 hover:text-white
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
              "
              >Venue</router-link
            >
          </div>
        </div>
      </nav>

      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Welcome to Japan!</h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
            <div
              class="border-4 border-dashed border-gray-200 rounded-lg h-96"
            ></div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
  <Venue />
  <router-view />
</template>

<script>
import Venue from "./views/Venue.vue";

export default {
  name: "App",
  methods: {},
  components: {
    Venue,
  },
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
