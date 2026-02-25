const forecasts = [
  "A light drizzle of smoothie is expected by noon. Carry a straw.",
  "There is a 92% chance your next idea involves buying a tiny hat for a banana.",
  "High peel pressure today. Avoid emotional conversations near fruit bowls.",
  "A rogue banana may attempt stand-up comedy at 4 PM. Be supportive.",
  "Cloudy with a chance of spontaneous conga lines in the produce aisle.",
  "Local squirrels report strong vibes and minor confusion.",
  "The moon is in microwave mode, so leftovers may become philosophical.",
  "Visibility is low due to dramatic goose side-eye. Proceed with confidence.",
  "Tonight's forecast: 12°C and one suspiciously talented pigeon.",
  "Experts predict a brief but intense outbreak of jazz hands."
];

const forecastBox = document.getElementById("forecast");
const refreshButton = document.getElementById("refresh");

function showForecast() {
  const randomIndex = Math.floor(Math.random() * forecasts.length);
  forecastBox.textContent = forecasts[randomIndex];
}

refreshButton.addEventListener("click", showForecast);
showForecast();
