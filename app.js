/* ---------------------------- Exhibitions data ---------------------------- */
/* דוגמאות + 30 חדשות. אם אין lat/lng — הקוד יג׳אקוד אוטומטית לפי הכתובת. */
const EXHIBITIONS = [
  // === Existings with coordinates ===
  {
    id: "tlv1",
    title: "City Layers",
    artist: "Noa Ben-David",
    venue: "Tel Aviv Museum of Art",
    address: "27 Shaul Hamelech Blvd, Tel Aviv",
    lat: 32.07777, lng: 34.78644,
    startDate: "2025-09-01", endDate: "2025-12-31",
    website: "https://www.tamuseum.org.il/",
    description: "Large-scale installation exploring urban patterns and memory.",
    images: [
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "tlv2",
    title: "Soft Machines",
    artist: "Ariel Cohen",
    venue: "Cuckoo's Nest Gallery",
    address: "5 Shvil HaMeretz, Tel Aviv",
    lat: 32.0537, lng: 34.7646,
    startDate: "2025-09-10", endDate: "2025-11-30",
    website: "https://www.facebook.com/ckcknest/",
    description: "Kinetic sculptures that blur the line between craft and code.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "tlv3",
    title: "Chromatic Walks",
    artist: "Maya Levi",
    venue: "Florentin 45",
    address: "45 Florentin St, Tel Aviv",
    lat: 32.0567, lng: 34.7707,
    startDate: "2025-08-20", endDate: "2025-10-30",
    website: "https://www.instagram.com/florentin45/",
    description: "Painting series inspired by daily strolls through South Tel Aviv.",
    images: [
      "https://images.unsplash.com/photo-1513351105270-0f9ffda96511?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "jer1",
    title: "Stone & Light",
    artist: "Yael Azulay",
    venue: "Israel Museum",
    address: "Ruppin Blvd, Jerusalem",
    lat: 31.7733, lng: 35.2033,
    startDate: "2025-09-05", endDate: "2026-01-15",
    website: "https://www.imj.org.il/en",
    description: "New media works dialoguing with archeology collections.",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
    ]
  },

  // === New: Tel Aviv & area (addresses, geocode at runtime) ===
  { id:"tlv4", title:"Echo Chambers", artist:"Dana Harel", venue:"Sommer Contemporary Art", address:"54 Rothschild Blvd, Tel Aviv", startDate:"2025-10-01", endDate:"2026-01-10", website:"https://www.sommergallery.com", description:"Sound, language and space." },
  { id:"tlv5", title:"Afterimage", artist:"Gil Shani", venue:"Braverman Gallery", address:"12 Hapelech St, Tel Aviv", startDate:"2025-09-22", endDate:"2025-12-01", website:"https://www.bravermangallery.com", description:"Installations about memory and light." },
  { id:"tlv6", title:"Paper Bodies", artist:"Lee Koren", venue:"RawArt Gallery", address:"3 Shvil HaMeretz St, Tel Aviv", startDate:"2025-09-25", endDate:"2025-11-30", website:"https://www.rawart-gallery.com", description:"Paper, print and sculpture." },
  { id:"tlv7", title:"Night Garden", artist:"Shir Moran", venue:"Rosenfeld Gallery", address:"19 Hamelech George St, Tel Aviv", startDate:"2025-10-05", endDate:"2026-01-05", website:"https://www.rosenfeldgallery.co.il", description:"Painting in twilight tones." },
  { id:"tlv8", title:"Dry Pixel", artist:"Omer Keinan", venue:"Gordon Gallery", address:"6 Hapelech St, Tel Aviv", startDate:"2025-09-18", endDate:"2025-12-12", website:"https://www.gordongallery.co.il", description:"Video, CG and fragile materials." },
  { id:"tlv9", title:"Local Orbit", artist:"Tal Niv", venue:"Chelouche Gallery", address:"5 Maze St, Tel Aviv", startDate:"2025-10-12", endDate:"2026-01-02", website:"https://www.chelouchegallery.com", description:"Drawings and ceramic objects." },
  { id:"tlv10", title:"Hertz 19", artist:"Group Show", venue:"Artspace Tel Aviv", address:"19 Hayarkon St, Tel Aviv", startDate:"2025-10-15", endDate:"2025-12-31", website:"https://www.artspace-tlv.org.il", description:"Group exhibit of south-TLV artists." },
  { id:"tlv11", title:"Coded Weave", artist:"Neta Avraham", venue:"Alfred Gallery", address:"8 Simtat Shlush, Tel Aviv", startDate:"2025-09-20", endDate:"2025-11-20", website:"https://www.alfred-gallery.com", description:"Textile & algorithmic patterns." },
  { id:"tlv12", title:"Under Construction", artist:"Tamar Golan", venue:"Beit Ha’ir Museum", address:"27 Bialik St, Tel Aviv", startDate:"2025-09-28", endDate:"2025-12-20", website:"https://www.beithair.org", description:"City stories and archives." },
  { id:"tlv13", title:"Field Recording", artist:"Nadav K", venue:"CCA Tel Aviv", address:"61 Tsfat St, Tel Aviv", startDate:"2025-10-08", endDate:"2026-01-18", website:"https://www.cca.org.il", description:"Sound as sculptural matter." },
  { id:"tlv14", title:"Moving Lines", artist:"Rona Tal", venue:"Beit Kandinof", address:"14 HaTsorfim St, Jaffa, Tel Aviv", startDate:"2025-09-30", endDate:"2025-12-30", website:"https://kandinof.co.il", description:"Drawings that almost walk." },
  { id:"tlv15", title:"Port Light", artist:"Group Show", venue:"Warehouse 2 Jaffa Port", address:"Jaffa Port, Tel Aviv", startDate:"2025-10-16", endDate:"2026-01-20", website:"https://www.jaffaport.co.il", description:"Large-scale installations by the sea." },
  { id:"tlv16", title:"Screen Skin", artist:"Ofir Azulay", venue:"Basis Tel Aviv (project space)", address:"12 Ha'amal St, Tel Aviv", startDate:"2025-09-26", endDate:"2025-11-29", website:"https://www.basis.org.il", description:"Performance & video." },
  { id:"tlv17", title:"Negative Space", artist:"Shai H", venue:"Hanina Gallery", address:"19 Hazorfim St, Tel Aviv", startDate:"2025-10-10", endDate:"2025-12-15", website:"https://www.haninagallery.com", description:"Photography in grayscale." },
  { id:"tlv18", title:"Glass Clouds", artist:"Ravit Shachar", venue:"Design Museum Holon (gallery)", address:"8 Pinkhas Eilon St, Holon", startDate:"2025-10-02", endDate:"2026-02-01", website:"https://www.dmh.org.il", description:"Glass design & light." },

  // === Tel Aviv – Kiryat HaMelacha cluster ===
  { id:"km1", title:"Edge of Canvas", artist:"Noga Amir", venue:"Maya Gallery", address:"3 HaVradim St, Tel Aviv", startDate:"2025-09-21", endDate:"2025-11-15", website:"", description:"Painting experiments from Kiryat HaMelacha." },
  { id:"km2", title:"Heat Map", artist:"Itamar Weiss", venue:"Sansana Space", address:"8 HaAmal St, Tel Aviv", startDate:"2025-09-24", endDate:"2025-12-05", website:"", description:"Color as temperature." },
  { id:"km3", title:"Studio Noise", artist:"Group Show", venue:"Third Floor Project", address:"15 HaAmal St, Tel Aviv", startDate:"2025-10-03", endDate:"2025-12-12", website:"", description:"Works from open studios." },
  { id:"km4", title:"Soft Hardware", artist:"Tzlil L", venue:"Circular Space", address:"7 HaMeretz St, Tel Aviv", startDate:"2025-10-07", endDate:"2025-12-30", website:"", description:"Knitting meets code." },
  { id:"km5", title:"Sun Bleach", artist:"Reut Cohen", venue:"Hamalacha 13", address:"13 HaMelacha St, Tel Aviv", startDate:"2025-10-12", endDate:"2025-12-28", website:"", description:"Textiles faded by the Mediterranean sun." },

  // === Herzliya / Ramat Gan / Petach Tikva ===
  { id:"hz1", title:"Radical Forms", artist:"Group Show", venue:"Herzliya Museum of Contemporary Art", address:"4 Habanim St, Herzliya", startDate:"2025-09-27", endDate:"2026-01-31", website:"https://www.herzliyamuseum.co.il", description:"Sculpture across decades." },
  { id:"rg1", title:"Painter’s Proof", artist:"Oded Y", venue:"Ramat Gan Museum of Israeli Art", address:"20 Abba Hillel Silver Rd, Ramat Gan", startDate:"2025-10-04", endDate:"2026-01-14", website:"https://www.rmg.org.il", description:"Printmaking survey." },
  { id:"pt1", title:"Delay/Replay", artist:"Nofar B.", venue:"Petach Tikva Museum of Art", address:"30 Arlozorov St, Petach Tikva", startDate:"2025-10-06", endDate:"2026-01-06", website:"https://www.petachtikvamuseum.com", description:"Video installations and loops." },

  // === Jerusalem ===
  { id:"jer2", title:"Paper Jerusalem", artist:"Ayelet L.", venue:"Bezalel Gallery", address:"1 Mount Scopus, Jerusalem", startDate:"2025-10-01", endDate:"2025-12-10", website:"https://www.bezalel.ac.il", description:"Works on paper." },
  { id:"jer3", title:"Campus Echo", artist:"Musrara Dept. show", venue:"Musrara, the Naggar School", address:"9 Musrara St, Jerusalem", startDate:"2025-10-09", endDate:"2025-12-20", website:"https://www.musrara.co.il", description:"Photography & New-Media." },
  { id:"jer4", title:"City Springs", artist:"Group Show", venue:"Beit Hansen", address:"14 Gdalyahu Alon St, Jerusalem", startDate:"2025-10-11", endDate:"2026-01-25", website:"https://www.beithansen.co.il", description:"Design & community projects." },

  // === Haifa & North ===
  { id:"hfa1", title:"Blue North", artist:"Group Show", venue:"Haifa Museum of Art", address:"26 Shabtai Levi St, Haifa", startDate:"2025-09-29", endDate:"2026-01-10", website:"https://www.hma.org.il", description:"Sea-inspired works." },
  { id:"hfa2", title:"Light Line", artist:"Aya Y.", venue:"Tikotin Museum of Japanese Art", address:"89 Hanassi Ave, Haifa", startDate:"2025-10-02", endDate:"2026-01-09", website:"https://www.tikotin-museum.org.il", description:"Ink, paper, silence." },
  { id:"hfa3", title:"Shared Rooms", artist:"Group Show", venue:"Beit HaGefen", address:"2 Hagefen St, Haifa", startDate:"2025-10-13", endDate:"2026-01-18", website:"https://beit-hagefen.com", description:"Dialogue across cultures." },
  { id:"umf1", title:"Valley Lights", artist:"Group Show", venue:"Umm al-Fahm Art Gallery", address:"Umm al-Fahm, Israel", startDate:"2025-10-05", endDate:"2026-01-05", website:"https://ummelfahemgallery.com", description:"Regional contemporary survey." },
  { id:"tfn1", title:"Steel & Pines", artist:"Industrial Poetics", venue:"Open Museum Tefen", address:"Tefen Industrial Park, Israel", startDate:"2025-10-03", endDate:"2026-02-03", website:"https://www.omuseums.org.il", description:"Art & industry." },

  // === South / Center ===
  { id:"bsh1", title:"Desert Lines", artist:"Galit A.", venue:"The Negev Museum of Art", address:"60 Ha'atzmaut Ave, Be'er Sheva", startDate:"2025-10-07", endDate:"2026-01-30", website:"https://www.negev-museum.org.il", description:"Works shaped by the Negev." },
  { id:"ash1", title:"Harbor Color", artist:"Moran Z.", venue:"Ashdod Museum of Art (Monart)", address:"4 Derech Erez, Ashdod", startDate:"2025-10-02", endDate:"2026-01-16", website:"https://www.ashdodartmuseum.org.il", description:"Painting & sea." },
  { id:"bty1", title:"Coastline", artist:"Group Show", venue:"MoBY Bat-Yam Museums", address:"27 Struma St, Bat Yam", startDate:"2025-10-12", endDate:"2026-01-19", website:"https://www.moby.org.il", description:"Urban & coastal." },
  { id:"hln1", title:"Material Dialogues", artist:"Tal A.", venue:"Design Museum Holon", address:"8 Pinkhas Eilon St, Holon", startDate:"2025-09-30", endDate:"2026-02-28", website:"https://www.dmh.org.il", description:"Design research showcase." },

  // === Jaffa / Extras ===
  { id:"jaf1", title:"Port Stories", artist:"Group Show", venue:"The Jaffa Art Salon", address:"24 Yefet St, Tel Aviv-Yafo", startDate:"2025-09-26", endDate:"2025-12-26", website:"", description:"Stories from the old port." },
  { id:"jaf2", title:"Salt & Citrus", artist:"Eden L.", venue:"Beit Romano (Project Space)", address:"9 Derech Jaffa, Tel Aviv", startDate:"2025-10-09", endDate:"2025-12-29", website:"", description:"Food, scent and memory." }
];

/* ------------------------------ Geocode cache ----------------------------- */
/* נשתמש בקאש מקומי כדי לא לג׳אקר כל פעם מחדש */
const GEO_CACHE_KEY = "iseeeee_geo_cache_v1";
function loadGeoCache(){
  try { return JSON.parse(localStorage.getItem(GEO_CACHE_KEY) || "{}"); }
  catch { return {}; }
}
function saveGeoCache(cache){ localStorage.setItem(GEO_CACHE_KEY, JSON.stringify(cache)); }
let geoCache = loadGeoCache();

/* תור ג׳אוקודינג (בקשה אחת כל ~700ms) */
let geocodeQueue = [];
let geocodeTimer = null;

function enqueueGeocode(ex){
  if(ex.lat && ex.lng) return;
  if(!ex.address) return;
  if(geoCache[ex.address]){
    const {lat,lng} = geoCache[ex.address];
    ex.lat = lat; ex.lng = lng;
    return;
  }
  geocodeQueue.push(ex);
  if(!geocodeTimer){
    geocodeTimer = setInterval(processGeocodeQueue, 700);
  }
}

async function processGeocodeQueue(){
  if(geocodeQueue.length === 0){
    clearInterval(geocodeTimer);
    geocodeTimer = null;
    return;
  }
  const ex = geocodeQueue.shift();
  try{
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(ex.venue + ", " + ex.address)}`;
    const res = await fetch(url, { headers:{ "Accept-Language":"en-US" } });
    const data = await res.json();
    if(data && data[0]){
      ex.lat = parseFloat(data[0].lat);
      ex.lng = parseFloat(data[0].lon);
      geoCache[ex.address] = {lat:ex.lat, lng:ex.lng};
      saveGeoCache(geoCache);
      render(); // לעדכן מפה ורשימה כשמציאת קואורדינטות
    }
  }catch(e){
    // שקט; פשוט נדלג
  }
}

/* ------------------------------ App state -------------------------------- */
let userLoc = null;     // {lat, lng}
let map, userMarker;
let markersLayer;

const qs = (sel) => document.querySelector(sel);
const radiusInput = qs("#radiusKm");
const radiusLabel = qs("#radiusLabel");
const locStatus   = qs("#locStatus");

/* ------------------------------ Utilities -------------------------------- */
const toRad = (deg) => deg * Math.PI / 180;
function haversineKm(a, b){
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s1 = Math.sin(dLat/2)**2 +
             Math.cos(toRad(a.lat))*Math.cos(toRad(b.lat))*Math.sin(dLng/2)**2;
  return 2*R*Math.asin(Math.sqrt(s1));
}
function fmtDate(iso){ return new Date(iso).toLocaleDateString(); }
function inDateRange(show, startISO, endISO){
  const s = startISO ? new Date(startISO) : null;
  const e = endISO   ? new Date(endISO)   : null;
  const a = new Date(show.startDate);
  const b = new Date(show.endDate);
  if(s && b < s) return false;
  if(e && a > e) return false;
  return true;
}

/* ------------------------------- Map init -------------------------------- */
function initMap(){
  map = L.map('map', { zoomControl:true }).setView([32.078,34.786], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:19,
    attribution:'© OpenStreetMap'
  }).addTo(map);

  markersLayer = L.layerGroup().addTo(map);
}
initMap();

/* ---------------------------- Location helpers --------------------------- */
function setUserLocation(lat, lng, text = "Selected location"){
  userLoc = {lat, lng};
  if(userMarker){ userMarker.remove(); }
  userMarker = L.marker([lat,lng], {title: "You are here"}).addTo(map)
               .bindPopup(text);
  map.setView([lat,lng], 13);
  locStatus.textContent = `Location: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  render();
}

qs("#myLocBtn").addEventListener("click", () => {
  if(!navigator.geolocation){
    alert("Geolocation is not supported on this device.");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos)=> setUserLocation(pos.coords.latitude, pos.coords.longitude, "My location"),
    (err)=> alert("Couldn't get your location: " + err.message),
    { enableHighAccuracy:true, timeout:10000 }
  );
});

qs("#searchAddrBtn").addEventListener("click", async () => {
  const q = qs("#addressInput").value.trim();
  if(!q){ alert("Type an address first."); return; }
  try{
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}`;
    const res = await fetch(url, { headers:{'Accept-Language':'en'} });
    const data = await res.json();
    if(!data.length){ alert("Address not found."); return; }
    const { lat, lon, display_name } = data[0];
    setUserLocation(parseFloat(lat), parseFloat(lon), display_name);
  }catch(e){
    alert("Address lookup failed.");
  }
});

/* ------------------------------- Rendering ------------------------------- */
function ensureGeocodes(){
  EXHIBITIONS.forEach(ex => { if(!(ex.lat && ex.lng)) enqueueGeocode(ex); });
}

function render(){
  radiusLabel.textContent = radiusInput.value;
  markersLayer.clearLayers();
  const listEl = qs("#results");
  listEl.innerHTML = "";

  // make sure geocoding is running for missing coords
  ensureGeocodes();

  const namePart = qs("#artistInput").value.trim().toLowerCase();
  const sDate = qs("#startDate").value || null;
  const eDate = qs("#endDate").value || null;
  const maxKm = parseInt(radiusInput.value, 10);

  const shows = EXHIBITIONS.filter(ex => {
    const hasCoords = !!(ex.lat && ex.lng);
    const matchName = !namePart || ex.artist.toLowerCase().includes(namePart) || ex.title.toLowerCase().includes(namePart);
    const matchDates = inDateRange(ex, sDate, eDate);
    const matchDist = !userLoc || (hasCoords && haversineKm(userLoc, {lat:ex.lat,lng:ex.lng}) <= maxKm);
    return matchName && matchDates && matchDist;
  });

  shows.forEach(ex => {
    if(ex.lat && ex.lng){
      const m = L.marker([ex.lat, ex.lng]).addTo(markersLayer);
      m.bindPopup(`<b>${ex.title}</b><br/>${ex.venue}<br/><small>${fmtDate(ex.startDate)}–${fmtDate(ex.endDate)}</small>`);
      m.on("click", () => openModal(ex));
    }
  });

  if(!shows.length){
    listEl.innerHTML = `<div class="muted">No exhibitions match your filters (or still locating addresses...).</div>`;
    return;
  }

  shows.forEach(ex => {
    const card = document.createElement("div");
    card.className = "show-card";
    card.innerHTML = `
      <div class="title">${ex.title}</div>
      <div class="meta">${ex.artist} • ${ex.venue} • ${fmtDate(ex.startDate)} – ${fmtDate(ex.endDate)}</div>
      <div class="actions">
        <button data-id="${ex.id}" class="btn btn-more">Read more</button>
        <button data-id="${ex.id}" class="btn btn-center">Center on map</button>
        <button data-artist="${ex.artist}" class="btn btn-follow">${isFollowing(ex.artist)?'Following':'Follow artist'}</button>
      </div>
    `;
    listEl.appendChild(card);
  });

  listEl.querySelectorAll(".btn-more").forEach(b=>{
    b.addEventListener("click", ()=>{
      const ex = EXHIBITIONS.find(x => x.id === b.dataset.id);
      if(ex) openModal(ex);
    });
  });
  listEl.querySelectorAll(".btn-center").forEach(b=>{
    b.addEventListener("click", ()=>{
      const ex = EXHIBITIONS.find(x => x.id === b.dataset.id);
      if(ex && ex.lat && ex.lng){ map.setView([ex.lat, ex.lng], 15); }
    });
  });
  listEl.querySelectorAll(".btn-follow").forEach(b=>{
    b.addEventListener("click", ()=>{
      toggleFollow(b.dataset.artist);
      b.textContent = isFollowing(b.dataset.artist) ? 'Following' : 'Follow artist';
    });
  });
}

/* --------------------------- Modal (details) ----------------------------- */
const modal = qs("#modal");
const modalTitle = qs("#modalTitle");
const modalMeta  = qs("#modalMeta");
const modalDesc  = qs("#modalDesc");
const modalGallery = qs("#modalGallery");
const followBtn = qs("#followBtn");
const navigateBtn = qs("#navigateBtn");
const websiteBtn = qs("#websiteBtn");

qs("#modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e)=>{ if(e.target === modal) closeModal(); });

let modalEx = null;

function openModal(ex){
  modalEx = ex;
  modalTitle.textContent = `${ex.title} — ${ex.artist}`;
  modalMeta.textContent  = `${ex.venue} · ${fmtDate(ex.startDate)} – ${fmtDate(ex.endDate)}`;
  modalDesc.textContent  = ex.description || "";
  modalGallery.innerHTML = (ex.images||[]).map(src=>`<img src="${src}" alt="">`).join("");

  followBtn.textContent = isFollowing(ex.artist) ? "Following" : "Follow artist";
  followBtn.onclick = () => {
    toggleFollow(ex.artist);
    followBtn.textContent = isFollowing(ex.artist) ? "Following" : "Follow artist";
  };

  const navQ = ex.lat && ex.lng ? `${ex.lat},${ex.lng}` : `${ex.venue} ${ex.address}`;
  navigateBtn.href = `https://www.google.com/maps?q=${encodeURIComponent(navQ)}`;
  websiteBtn.href   = ex.website || "#";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
}
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  modalEx = null;
}

/* --------------------------- Followed artists ---------------------------- */
const FOLLOW_KEY = "iseeeee_follow_artists";
function getFollowed(){
  try{
    return JSON.parse(localStorage.getItem(FOLLOW_KEY) || "[]");
  }catch{ return []; }
}
function isFollowing(name){
  return getFollowed().includes(name);
}
function toggleFollow(name){
  const arr = getFollowed();
  const i = arr.indexOf(name);
  if(i>=0){ arr.splice(i,1); } else { arr.push(name); }
  localStorage.setItem(FOLLOW_KEY, JSON.stringify(arr));
}

/* ------------------------------ Listeners -------------------------------- */
radiusInput.addEventListener("input", render);
qs("#filterBtn").addEventListener("click", render);

/* פרה־רינדור + התנעת תור ג׳אוקודינג */
render();
ensureGeocodes();
