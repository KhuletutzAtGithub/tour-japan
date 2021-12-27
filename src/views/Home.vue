<template>
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
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="flex flex-col md:flex-row">
        <div class="hidden md:block w-full md:w-1/2 bg-blue-50">
          <img
            src="https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?cs=srgb&dl=pexels-pixabay-161251.jpg&fm=jpg"
            alt="Japan Image"
          />
        </div>
        <div class="w-full md:w-1/2 bg-blue-50">
          <div class="p-8 m-8 rounded-lg shadow-md flex flex-col bg-white">
            <h1 class="text-5xl mb-5">Tour Japan!</h1>
            <select name="cities" id="cities">
              <option value="">Select city to check weather</option>
            </select>
            <span class="my-3">Or</span>
            <form action="" method="get">
              <input
                type="text"
                class="py-3 px-2 bg-gray-100 rounded-lg"
                placeholder="Search places"
              />
              <button
                type="submit"
                class="bg-black text-white py-3 px-2 rounded-lg ml-3"
              >
                Search
              </button>
            </form>
          </div>

          <div class="p-8 m-8 rounded-lg shadow-md flex flex-col bg-white">
            <div class="mb-5">
              <h4 class="text-2xl">Tokyo</h4>
              <h5>{{ currentWeather.dt }}</h5>
            </div>

            <div class="mb-5">
              <img
                class="w-20 -mb-5"
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt="Weather Image"
              />
              <h4 class="text-2xl">{{ currentWeather.weather[0].main }}</h4>
              <h5>{{ currentWeather.weather[0].description }}</h5>
            </div>

            <div>
              <h1 class="text-5xl">{{ currentWeather.temp.day }}°</h1>
              <h2 class="text-3xl">TODAY</h2>
              <div>
                <span class="text-sm">Max: {{ currentWeather.temp.max }}°</span>
                <span class="text-sm">Min: {{ currentWeather.temp.min }}°</span>
              </div>
            </div>
          </div>

          <div class="p-8 m-8 rounded-lg shadow-md flex bg-white">
            <div class="w-2/3">
              <div class="mb-5">
                <h4>Meiji Jingu Gaien (明治神宮外苑)</h4>
                <h5>霞ヶ丘町1-1, 明治神宮球場</h5>
                <h5>Tokyo</h5>
                <h5>160-0013</h5>
                <h5>26,073 Meters</h5>
              </div>

              <div class="mb-3">
                <h5 class="font-bold">Categories</h5>
                <div class="flex">
                  <div class="bg-green-100 rounded-full px-2 text-sm mr-2">
                    Park
                  </div>
                  <div class="bg-green-100 rounded-full px-2 text-sm mr-2">
                    Park
                  </div>
                </div>
              </div>

              <div>
                <h5 class="font-bold">Neighborhood</h5>
                <div class="flex">
                  <div class="bg-yellow-100 rounded-full px-2 text-sm mr-2">
                    Neighborhood
                  </div>
                  <div class="bg-yellow-100 rounded-full px-2 text-sm mr-2">
                    Neighborhood
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h6>
                <span class="font-bold">Latitude:</span> 35.67713452844016
              </h6>
              <h6>
                <span class="font-bold">Longitude:</span> 39.71837043762207
              </h6>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    currentWeather: Object,
  },
};
</script>
