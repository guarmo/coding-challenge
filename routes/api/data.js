const express = require("express");
const router = express.Router();
const axios = require("axios");
var osmtogeojson = require("osmtogeojson");
var flip = require("geojson-flip").flip;

// @route   GET api/data
// @desc    Get data
// @access  Public
router.get("/", async (req, res) => {
  try {
    // Gather information in osm format
    const response = await axios.get(
      "https://api.openstreetmap.org/api/0.6/map?bbox=11.54,48.14,11.543,48.145"
    );

    // Convert to geoJson / Flip lat long
    const geoJson = flip(osmtogeojson(response.data));

    res.json(geoJson);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
