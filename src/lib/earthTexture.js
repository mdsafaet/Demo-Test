import { CONTINENTS } from "@/data/continents";

/**
 * Paints an equirectangular Earth map (ocean + continents shaded by latitude) on a canvas.
 * x = longitude -180..180, y = latitude 90..-90.
 */
export function makeEarthCanvas(W = 2048) {
  const H = W / 2;
  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const g = c.getContext("2d");
  const X = (lon) => ((lon + 180) / 360) * W;
  const Y = (lat) => ((90 - lat) / 180) * H;

  // ocean: deep blue, a touch lighter around the tropics
  const ocean = g.createLinearGradient(0, 0, 0, H);
  [[0, "#0a2147"], [0.28, "#0d3166"], [0.5, "#11407f"], [0.72, "#0d3166"], [1, "#0a2147"]].forEach(([o, col]) => ocean.addColorStop(o, col));
  g.fillStyle = ocean;
  g.fillRect(0, 0, W, H);

  const path = new Path2D();
  CONTINENTS.forEach((poly) => {
    poly.forEach(([lon, lat], i) => (i ? path.lineTo(X(lon), Y(lat)) : path.moveTo(X(lon), Y(lat))));
    path.closePath();
  });

  // shallow-water glow around the coasts
  g.save();
  g.shadowColor = "rgba(95,185,255,0.75)";
  g.shadowBlur = W / 150;
  g.fillStyle = "#2f6b3a";
  g.fill(path);
  g.restore();

  // land colours by latitude: ice, tundra, forest, steppe, desert, jungle ...
  const land = g.createLinearGradient(0, 0, 0, H);
  [[90, "#eef2f5"], [76, "#cfd8d6"], [64, "#7c9479"], [50, "#4f7d52"], [38, "#7f8c57"], [27, "#c3a769"],
   [14, "#7a9552"], [2, "#2f6b3a"], [-10, "#4f7f48"], [-22, "#b79c64"], [-34, "#62854f"], [-52, "#789079"], [-68, "#e2e8ea"], [-90, "#f3f6f8"]]
    .forEach(([lat, col]) => land.addColorStop((90 - lat) / 180, col));
  g.fillStyle = land;
  g.fill(path);

  // terrain speckle so the land is not flat
  g.save();
  g.clip(path);
  let seed = 11;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < W * 3; i++) {
    g.fillStyle = rnd() > 0.5 ? "rgba(255,255,255,0.06)" : "rgba(0,20,10,0.08)";
    g.beginPath();
    g.arc(rnd() * W, rnd() * H, 1 + rnd() * (W / 400), 0, Math.PI * 2);
    g.fill();
  }
  g.restore();

  // thin coast line
  g.strokeStyle = "rgba(170,225,255,0.35)";
  g.lineWidth = Math.max(1, W / 1500);
  g.stroke(path);
  return c;
}
