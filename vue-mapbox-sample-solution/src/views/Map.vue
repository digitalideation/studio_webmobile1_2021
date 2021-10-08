<template>
  <div>
    <h1>My Map</h1>
    <div ref="container" class="map"></div>
  </div>
</template>
<script>
// @ is an alias to /src
//import contentful from "@/modules/contentful.js";
import mapboxgl from "mapbox-gl";
import getCoordinatesFromGpxFile from "@/modules/gpx-utilities.js";
import contentful from "@/modules/contentful.js";

export default {
  name: "Map",

  data: function () {
    return {
      commutes: [],
    };
  },
  mounted: async function () {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWh1c20iLCJhIjoiY2tnYzVxbHNnMDV5eTJ4bzdnb3R3NGx2bSJ9.FOXkMmSBQgCQSNCQJwxtYg";
    let map = new mapboxgl.Map({
      container: this.$refs.container, // container ID
      style: "mapbox://styles/mhusm/ckgcbplva0qvl19mbxd78ma97", // My custom style
      center: [8.546385, 47.190093], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

        // Displaying a GPX track
    map.on("load", async function() {
      let coordinates = await getCoordinatesFromGpxFile(
        await contentful.getFirstGPXFileUrl()
      );

      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: coordinates
          }
        }
      });
      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#888",
          "line-width": 8
        }
      });
    });
  },
};
</script>
<style src='mapbox-gl/dist/mapbox-gl.css'></style>

<style scoped >
.map {
  height: 50vh;
  width: 50vw;
}
</style>
