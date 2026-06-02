const properties = [
  {
    id: "asanbay-2r-01",
    title: "2-комнатная в Асанбае",
    district: "Асанбай",
    addressLabel: "Асанбай, южная зона",
    lat: 42.8148,
    lng: 74.6256,
    type: "Квартира",
    rooms: 2,
    area: 58,
    price: 92000,
    buildingType: "105 серия",
    floor: 5,
    totalFloors: 9,
    renovation: "Хороший ремонт",
    caseType: "deal",
    date: "Май 2026",
    photos: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    virtualTourUrl: "",
    virtualTourType: "none",
    priceUpFactors: ["Южная зона", "Хороший ремонт", "Рядом школа", "Удобный этаж"],
    priceDownFactors: ["Нет паркинга", "Дом не новый"],
    clientSummary:
      "Цена находится ближе к верхней границе района: объект выигрывает за счет ремонта, южной локации и удобного этажа.",
    internalNotes: "Демо-кейс. Позже заменить на реальную сделку команды.",
  },
  {
    id: "vostok5-2r-02",
    title: "2-комнатная Восток-5",
    district: "Восток-5",
    addressLabel: "Восток-5, рядом с парком",
    lat: 42.8723,
    lng: 74.6544,
    type: "Квартира",
    rooms: 2,
    area: 52,
    price: 72000,
    buildingType: "104 серия",
    floor: 3,
    totalFloors: 5,
    renovation: "Средний ремонт",
    caseType: "listing",
    date: "Апрель 2026",
    photos: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "",
    virtualTourUrl: "",
    virtualTourType: "none",
    priceUpFactors: ["Развитая инфраструктура", "Низкая этажность", "Близко к центру"],
    priceDownFactors: ["Старый фонд", "Средний ремонт", "Компактная кухня"],
    clientSummary:
      "Объект дешевле южных районов, но держит цену за счет инфраструктуры и понятной ликвидности 104 серии.",
    internalNotes: "Подходит как пример доступного объекта для покупателя.",
  },
  {
    id: "center-1r-03",
    title: "1-комнатная в центре",
    district: "Центр",
    addressLabel: "Золотой квадрат",
    lat: 42.8751,
    lng: 74.6002,
    type: "Квартира",
    rooms: 1,
    area: 45,
    price: 88000,
    buildingType: "Кирпич",
    floor: 4,
    totalFloors: 9,
    renovation: "Хороший ремонт",
    caseType: "deal",
    date: "Март 2026",
    photos: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    virtualTourUrl: "",
    virtualTourType: "none",
    priceUpFactors: ["Центр", "Высокая ликвидность", "Кирпичный дом", "Готова к заселению"],
    priceDownFactors: ["Пробки", "Мало парковки", "Шумная зона"],
    clientSummary:
      "Высокая цена объясняется центром и ликвидностью. Покупатель платит не только за метры, но и за скорость будущей перепродажи.",
    internalNotes: "Хороший кейс для объяснения влияния локации.",
  },
  {
    id: "djal-3r-04",
    title: "3-комнатная в Джале",
    district: "Джал",
    addressLabel: "Джал, новая застройка",
    lat: 42.8374,
    lng: 74.5652,
    type: "Квартира",
    rooms: 3,
    area: 74,
    price: 108000,
    buildingType: "Новостройка",
    floor: 8,
    totalFloors: 12,
    renovation: "Без ремонта",
    caseType: "listing",
    date: "Май 2026",
    photos: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "",
    virtualTourUrl: "demo:kuula",
    virtualTourType: "kuula",
    priceUpFactors: ["Новостройка", "Большая площадь", "Южная локация", "Свободная планировка"],
    priceDownFactors: ["Нужен ремонт", "Высокий этаж", "Дополнительные вложения"],
    clientSummary:
      "Цена кажется высокой, но покупатель получает площадь и новый дом. Реальная итоговая стоимость вырастет после ремонта.",
    internalNotes: "Показывать как пример объекта, где важно считать будущие вложения.",
  },
  {
    id: "tunguch-3r-05",
    title: "3-комнатная в Тунгуче",
    district: "Тунгуч",
    addressLabel: "Тунгуч, восточная зона",
    lat: 42.8421,
    lng: 74.6809,
    type: "Квартира",
    rooms: 3,
    area: 70,
    price: 96000,
    buildingType: "108 серия",
    floor: 6,
    totalFloors: 9,
    renovation: "Средний ремонт",
    caseType: "deal",
    date: "Февраль 2026",
    photos: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "",
    virtualTourUrl: "",
    virtualTourType: "none",
    priceUpFactors: ["108 серия", "Просторная планировка", "Тихий район"],
    priceDownFactors: ["Удаленность от центра", "Средний ремонт"],
    clientSummary:
      "Хороший баланс цены и площади. Объект дешевле центра, но выигрывает планировкой и спокойной локацией.",
    internalNotes: "Нейтральный сравнительный кейс.",
  },
  {
    id: "magistral-4r-06",
    title: "4-комнатная Магистраль",
    district: "Магистраль",
    addressLabel: "Магистраль, премиум-зона",
    lat: 42.8085,
    lng: 74.5904,
    type: "Квартира",
    rooms: 4,
    area: 112,
    price: 185000,
    buildingType: "Индивидуальный тип",
    floor: 7,
    totalFloors: 14,
    renovation: "Премиум ремонт",
    caseType: "deal",
    date: "Январь 2026",
    photos: [
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    virtualTourUrl: "demo:matterport",
    virtualTourType: "matterport",
    priceUpFactors: ["Премиум ремонт", "Большая площадь", "Южная зона", "Паркинг"],
    priceDownFactors: ["Высокий бюджет входа", "Меньше покупателей"],
    clientSummary:
      "Объект находится в дорогом сегменте. Цена держится за счет площади, ремонта и южной локации, но аудитория покупателей уже.",
    internalNotes: "Демо для премиального сегмента.",
  },
];

let map;
let selectedId = properties[0].id;
let activeMedia = "auto";
let clientMode = false;
let caseMode = "all";
let sidebarVisible = true;
let cleanMapMode = false;
let showroomFullscreen = false;
let shareOnlyId = null;
const markers = new Map();

const initialParams = new URLSearchParams(window.location.search);
const initialObjectId =
  initialParams.get("object") || initialParams.get("property") || initialParams.get("share");
if (initialObjectId && properties.some((property) => property.id === initialObjectId)) {
  selectedId = initialObjectId;
  shareOnlyId = initialObjectId;
  clientMode = true;
  sidebarVisible = false;
  cleanMapMode = false;
  document.body.classList.add("client-mode", "share-mode", "sidebar-hidden", "showroom-open");
}

const formatUsd = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const pricePerSqm = (property) => Math.round(property.price / property.area);

const getMainImage = (property) => property.photos[0];

function getMediaType(property) {
  if (activeMedia !== "auto") return activeMedia;
  return "photo";
}

function getFilteredProperties() {
  const district = document.querySelector("#districtFilter").value;
  const media = document.querySelector("#mediaFilter").value;
  const rooms = document.querySelector("#roomsFilter").value;
  const price = document.querySelector("#priceFilter").value;
  const search = document.querySelector("#searchInput").value.trim().toLowerCase();

  return properties.filter((property) => {
    if (shareOnlyId) return property.id === shareOnlyId;

    const searchable = [
      property.title,
      property.district,
      property.addressLabel,
      property.type,
      property.buildingType,
      property.renovation,
    ]
      .join(" ")
      .toLowerCase();

    if (search && !searchable.includes(search)) return false;
    if (caseMode !== "all" && property.caseType !== caseMode) return false;
    if (district !== "all" && property.district !== district) return false;
    if (media === "video" && !property.youtubeUrl) return false;
    if (media === "tour" && !property.virtualTourUrl) return false;
    if (rooms !== "all") {
      const roomNumber = Number(rooms);
      if (roomNumber === 4 && property.rooms < 4) return false;
      if (roomNumber < 4 && property.rooms !== roomNumber) return false;
    }
    if (price !== "all" && property.price > Number(price)) return false;
    return true;
  });
}

function distanceKm(a, b) {
  const earthRadius = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * earthRadius * Math.asin(Math.sqrt(h));
}

function getComparables(target) {
  return properties
    .filter((property) => property.id !== target.id)
    .map((property) => {
      const districtScore = property.district === target.district ? 30 : 0;
      const roomScore = Math.max(0, 25 - Math.abs(property.rooms - target.rooms) * 12);
      const areaScore = Math.max(0, 20 - Math.abs(property.area - target.area) / 3);
      const distanceScore = Math.max(0, 25 - distanceKm(property, target) * 6);
      const caseScore = property.caseType === target.caseType ? 10 : 0;
      const renovationScore = property.renovation === target.renovation ? 8 : 0;
      return {
        ...property,
        score: districtScore + roomScore + areaScore + distanceScore + caseScore + renovationScore,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function getComparableReason(target, item) {
  const reasons = [];
  if (item.district === target.district) reasons.push("тот же район");
  if (item.rooms === target.rooms) reasons.push("комнатность");
  if (Math.abs(item.area - target.area) <= 20) reasons.push("близкая площадь");
  if (item.buildingType === target.buildingType) reasons.push("тип дома");
  if (!reasons.length) reasons.push("ценовой ориентир");
  return reasons.slice(0, 2).join(" · ");
}

function getPriceBand(target) {
  const comparables = getComparables(target);
  const values = comparables.map(pricePerSqm).sort((a, b) => a - b);
  const low = values[0] || pricePerSqm(target);
  const high = values[values.length - 1] || pricePerSqm(target);
  const median = values[Math.floor(values.length / 2)] || pricePerSqm(target);
  return { low, median, high };
}

function getAveragePricePerSqm(items) {
  if (!items.length) return 0;
  return Math.round(items.reduce((sum, item) => sum + pricePerSqm(item), 0) / items.length);
}

function estimateRange(property, band) {
  return {
    low: band.low * property.area,
    median: band.median * property.area,
    high: band.high * property.area,
  };
}

function initFilters() {
  const districtSelect = document.querySelector("#districtFilter");
  [...new Set(properties.map((property) => property.district))]
    .sort()
    .forEach((district) => {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });

  document.querySelectorAll("#filters select").forEach((select) => {
    select.addEventListener("change", render);
  });

  document.querySelector("#searchInput").addEventListener("input", render);

  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      caseMode = button.dataset.mode;
      document
        .querySelectorAll("[data-mode]")
        .forEach((item) => {
          item.classList.toggle("mode-switch__button--active", item === button);
          item.setAttribute("aria-selected", item === button ? "true" : "false");
        });
      render();
    });
  });

  document.querySelector("#resetFilters").addEventListener("click", () => {
    document.querySelector("#districtFilter").value = "all";
    document.querySelector("#mediaFilter").value = "all";
    document.querySelector("#roomsFilter").value = "all";
    document.querySelector("#priceFilter").value = "all";
    document.querySelector("#searchInput").value = "";
    caseMode = "all";
    document
      .querySelectorAll("[data-mode]")
      .forEach((item) => {
        const active = item.dataset.mode === "all";
        item.classList.toggle("mode-switch__button--active", active);
        item.setAttribute("aria-selected", active ? "true" : "false");
      });
    render();
  });

  document.querySelector("#toggleSidebar").addEventListener("click", () => {
    sidebarVisible = !sidebarVisible;
    document.body.classList.toggle("sidebar-hidden", !sidebarVisible);
    syncLayoutControls();
  });

  document.querySelector("#cleanMapToggle").addEventListener("click", () => {
    cleanMapMode = !cleanMapMode;
    document.body.classList.toggle("clean-map", cleanMapMode);
    document.body.classList.toggle("sidebar-hidden", cleanMapMode || !sidebarVisible);
    document.body.classList.toggle("showroom-hidden", cleanMapMode);
    document.body.classList.remove("showroom-fullscreen");
    showroomFullscreen = false;
    if (!cleanMapMode) {
      document.body.classList.toggle("sidebar-hidden", !sidebarVisible);
      document.body.classList.remove("showroom-hidden");
    }
    syncLayoutControls();
  });

  document.querySelectorAll("[data-rail-action]").forEach((button) => {
    button.addEventListener("click", () => showToast(button.dataset.railAction));
  });
}

function invalidateMapSoon() {
  if (!map) return;
  window.setTimeout(() => {
    map.invalidateSize();
  }, 240);
}

function syncLayoutControls() {
  const sidebarButton = document.querySelector("#toggleSidebar");
  const cleanButton = document.querySelector("#cleanMapToggle");
  if (sidebarButton) {
    sidebarButton.textContent = sidebarVisible ? "Скрыть витрину" : "Показать витрину";
    sidebarButton.setAttribute("aria-pressed", sidebarVisible ? "false" : "true");
  }
  if (cleanButton) {
    cleanButton.textContent = cleanMapMode ? "Вернуть панели" : "Чистая карта";
  }
  const fullscreenButton = document.querySelector("#showroomFullscreen");
  if (fullscreenButton) {
    fullscreenButton.textContent = showroomFullscreen ? "Свернуть" : "На весь экран";
  }
  invalidateMapSoon();
}

function initMap() {
  if (!window.L) {
    initStaticMap();
    return;
  }

  map = L.map("map", {
    zoomControl: false,
  }).setView([42.856, 74.61], 12);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    maxZoom: 20,
    subdomains: "abcd",
    attribution: "&copy; OpenStreetMap &copy; CARTO",
  }).addTo(map);

  L.control.zoom({ position: "bottomright" }).addTo(map);
}

function initStaticMap() {
  document.querySelector("#map").innerHTML = `
    <div class="static-map" id="staticMap">
      <div class="static-map__grid"></div>
      <div class="static-map__zone static-map__zone--north">Северная зона</div>
      <div class="static-map__zone static-map__zone--center">Центр</div>
      <div class="static-map__zone static-map__zone--south">Южная зона</div>
      <div class="static-map__road static-map__road--chuy">пр. Чуй</div>
      <div class="static-map__road static-map__road--south">Южная магистраль</div>
      <div class="static-map__hint">Схема районов Бишкека</div>
      <div class="static-map__markers" id="staticMarkers"></div>
    </div>
  `;
}

function getStaticMapPosition(property) {
  const bounds = {
    north: 42.895,
    south: 42.795,
    west: 74.535,
    east: 74.705,
  };
  const x = ((property.lng - bounds.west) / (bounds.east - bounds.west)) * 100;
  const y = ((bounds.north - property.lat) / (bounds.north - bounds.south)) * 100;
  return {
    x: Math.min(94, Math.max(6, x)),
    y: Math.min(92, Math.max(8, y)),
  };
}

function renderStaticMarkers(filtered) {
  const container = document.querySelector("#staticMarkers");
  if (!container) return;

  container.innerHTML = filtered
    .map((property) => {
      const position = getStaticMapPosition(property);
      return `
        <button
          type="button"
          class="static-marker ${property.price > 140000 ? "static-marker--premium" : ""} ${property.id === selectedId ? "static-marker--active" : ""}"
          style="left:${position.x}%; top:${position.y}%"
          data-id="${property.id}"
        >
          <span>${formatUsd(property.price)}</span>
          <small>${property.district}</small>
        </button>
      `;
    })
    .join("");

  container.querySelectorAll("[data-id]").forEach((button) => {
    button.addEventListener("click", () => selectProperty(button.dataset.id));
  });
}

function renderMarkers(filtered) {
  if (!map || !window.L) {
    renderStaticMarkers(filtered);
    return;
  }

  markers.forEach((marker) => marker.remove());
  markers.clear();

  filtered.forEach((property) => {
    const marker = L.marker([property.lat, property.lng], {
      icon: L.divIcon({
        html: `<div class="marker-pin ${property.price > 140000 ? "marker-pin--premium" : ""} ${property.id === selectedId ? "marker-pin--active" : ""}">${formatUsd(property.price)}</div>`,
        className: "",
        iconSize: [74, 34],
        iconAnchor: [37, 17],
      }),
    }).addTo(map);

    marker.on("click", () => selectProperty(property.id));
    markers.set(property.id, marker);
  });
}

function togglePresentationMode() {
  clientMode = !clientMode;
  document.body.classList.toggle("client-mode", clientMode);
  const button = document.querySelector("#presentationToggle");
  if (button) button.textContent = clientMode ? "Внутренний режим" : "Презентация клиенту";
}

function toggleShowroomFullscreen() {
  showroomFullscreen = !showroomFullscreen;
  document.body.classList.toggle("showroom-fullscreen", showroomFullscreen);
  document.body.classList.remove("showroom-hidden", "clean-map");
  cleanMapMode = false;
  syncLayoutControls();
}

async function copyClientLink(property) {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("share", property.id);
  const link = url.toString();
  try {
    await navigator.clipboard.writeText(link);
    showToast(
      window.location.protocol === "file:"
        ? "Локальная демо-ссылка скопирована. Для клиента нужен деплой на сайт."
        : "Клиентская ссылка скопирована",
    );
  } catch {
    window.prompt("Скопируйте ссылку для клиента", link);
  }
}

function renderPropertyList(filtered) {
  const list = document.querySelector("#propertyList");
  list.innerHTML = "";
  document.querySelector("#resultCount").textContent = `${filtered.length} объектов`;

  if (!filtered.length) {
    list.innerHTML = `
      <div class="empty-state">
        <strong>Ничего не найдено</strong>
        <p>Сбросьте фильтры или измените поисковый запрос.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((property) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `property-card ${property.id === selectedId ? "property-card--active" : ""}`;
    button.innerHTML = `
      <div class="property-card__image" style="background-image:url('${getMainImage(property)}')"></div>
      <div>
        <div class="property-card__badges">
          <span>${property.caseType === "listing" ? "Объявление" : "Сделка"}</span>
          ${property.youtubeUrl ? "<span>Видео</span>" : ""}
          ${property.virtualTourUrl ? "<span>360/3D</span>" : ""}
        </div>
        <h3>${property.title}</h3>
        <p>${property.rooms}-комн. · ${property.area} м² · ${property.district}</p>
        <strong>${formatUsd(property.price)}</strong>
        <p>${formatUsd(pricePerSqm(property))}/м²</p>
      </div>
    `;
    button.addEventListener("click", () => selectProperty(property.id));
    list.appendChild(button);
  });
}

function renderMedia(property) {
  const mediaType = getMediaType(property);
  if (mediaType === "tour" && property.virtualTourUrl) {
    if (!property.virtualTourUrl.startsWith("http")) {
      const label =
        property.virtualTourType === "matterport"
          ? "Matterport 3D showroom"
          : "360 virtual tour";
      const note = clientMode
        ? "Панорамный тур подключается к объекту отдельной ссылкой."
        : "Сюда вставится iframe-ссылка на реальный 360/3D-тур объекта.";
      return `
        <div class="tour-placeholder">
          <span>${label}</span>
          <strong>${property.title}</strong>
          <p>${note}</p>
        </div>
      `;
    }
    return `<iframe src="${property.virtualTourUrl}" title="Виртуальный тур ${property.title}" allowfullscreen loading="lazy"></iframe>`;
  }
  if (mediaType === "video" && property.youtubeUrl) {
    return `<iframe src="${property.youtubeUrl}" title="Видео ${property.title}" allowfullscreen loading="lazy"></iframe>`;
  }
  return `<img src="${getMainImage(property)}" alt="${property.title}" />`;
}

function renderShowroom() {
  const property = properties.find((item) => item.id === selectedId) || properties[0];
  const comparables = getComparables(property);
  const band = getPriceBand(property);
  const range = estimateRange(property, band);
  const showroom = document.querySelector("#showroom");

  showroom.innerHTML = `
    <div class="showroom__top">
      <button type="button" id="focusMap">На карте</button>
      <button type="button" id="presentationToggle">${clientMode ? "Внутренний режим" : "Презентация клиенту"}</button>
      <button type="button" id="showroomFullscreen">${showroomFullscreen ? "Свернуть" : "На весь экран"}</button>
      <button type="button" id="copyClientLink">Ссылка</button>
      <button type="button" id="closeShowroom" class="showroom__close">Закрыть</button>
      <span>${property.caseType === "listing" ? "Объявление" : "Сделка"}</span>
    </div>
    <div class="showroom__body">
      <div class="media-viewer">${renderMedia(property)}</div>
      <div class="media-tabs">
        <button class="${getMediaType(property) === "photo" ? "active" : ""}" data-media="photo">Фото</button>
        <button class="${getMediaType(property) === "video" ? "active" : ""}" data-media="video" ${property.youtubeUrl ? "" : "disabled"}>Видео</button>
        <button class="${getMediaType(property) === "tour" ? "active" : ""}" data-media="tour" ${property.virtualTourUrl ? "" : "disabled"}>360/3D</button>
      </div>

      <div class="showroom-hero">
        <div>
          <span>${property.district} · ${property.buildingType}</span>
          <h2>${property.title}</h2>
          <p>${property.addressLabel} · ${property.date}</p>
        </div>
        <strong>${formatUsd(property.price)}</strong>
      </div>

      <div class="stats">
        <div class="stat"><strong>${formatUsd(property.price)}</strong><span>Цена</span></div>
        <div class="stat"><strong>${property.area} м²</strong><span>Площадь</span></div>
        <div class="stat"><strong>${property.rooms}</strong><span>Комнат</span></div>
        <div class="stat"><strong>${property.floor}/${property.totalFloors}</strong><span>Этаж</span></div>
      </div>

      <div class="detail-grid">
        <div><span>Цена за м²</span><strong>${formatUsd(pricePerSqm(property))}/м²</strong></div>
        <div><span>Тип дома</span><strong>${property.buildingType}</strong></div>
        <div><span>Ремонт</span><strong>${property.renovation}</strong></div>
        <div><span>Формат</span><strong>${property.type}</strong></div>
      </div>

      <h3 class="section-title">Факторы стоимости</h3>
      <div class="factor-grid">
        <ul class="factor-list factor-list--up">
          ${property.priceUpFactors.map((factor) => `<li><span>+</span>${factor}</li>`).join("")}
        </ul>
        <ul class="factor-list factor-list--down">
          ${property.priceDownFactors.map((factor) => `<li><span>-</span>${factor}</li>`).join("")}
        </ul>
      </div>

      <h3 class="section-title">Рыночный коридор</h3>
      <div class="price-band">
        <div><strong>${formatUsd(band.low)}/м²</strong><span>Нижняя граница</span></div>
        <div><strong>${formatUsd(band.median)}/м²</strong><span>Медиана</span></div>
        <div><strong>${formatUsd(band.high)}/м²</strong><span>Верхняя граница</span></div>
      </div>
      <div class="estimate-card">
        <span>Оценочный диапазон сделки</span>
        <strong>${formatUsd(range.low)} – ${formatUsd(range.high)}</strong>
        <p>Медианный ориентир: ${formatUsd(range.median)} при площади ${property.area} м².</p>
      </div>

      <h3 class="section-title">Клиентский вывод</h3>
      <div class="client-summary">${property.clientSummary}</div>

      <h3 class="section-title">Сопоставимые объекты</h3>
      <div class="comparables">
        ${comparables
          .map(
            (item) => `
              <button type="button" class="comparable" data-id="${item.id}">
                <div class="comparable__image" style="background-image:url('${getMainImage(item)}')"></div>
                <div class="comparable__body">
                  <h4>${item.title}</h4>
                  <p>${formatUsd(item.price)} · ${formatUsd(pricePerSqm(item))}/м²</p>
                  <p>${getComparableReason(property, item)}</p>
                </div>
              </button>
            `,
          )
          .join("")}
      </div>

      <p class="internal-only showroom__meta"><strong>Внутренняя заметка:</strong> ${property.internalNotes}</p>
      <p class="data-status">Демо-данные для проверки механики. Реальные сделки подключаются отдельно.</p>
    </div>
  `;

  document.querySelectorAll("[data-media]").forEach((button) => {
    button.addEventListener("click", () => {
      activeMedia = button.dataset.media;
      renderShowroom();
    });
  });

  document.querySelectorAll(".comparable").forEach((button) => {
    button.addEventListener("click", () => selectProperty(button.dataset.id));
  });

  document.querySelector("#focusMap").addEventListener("click", () => {
    if (map) map.setView([property.lat, property.lng], 14);
    document.body.classList.add("showroom-hidden");
    document.body.classList.remove("showroom-open", "showroom-fullscreen");
    showroomFullscreen = false;
    syncLayoutControls();
  });

  document.querySelector("#closeShowroom").addEventListener("click", () => {
    document.body.classList.add("showroom-hidden");
    document.body.classList.remove("showroom-open", "showroom-fullscreen");
    showroomFullscreen = false;
    syncLayoutControls();
  });

  document.querySelector("#presentationToggle").addEventListener("click", togglePresentationMode);
  document.querySelector("#showroomFullscreen").addEventListener("click", toggleShowroomFullscreen);
  document.querySelector("#copyClientLink").addEventListener("click", () => {
    copyClientLink(property);
  });
}

function renderEmptyShowroom() {
  document.querySelector("#showroom").innerHTML = `
    <div class="showroom__empty">
      <div>
        <strong>Выберите объект</strong>
        <p>Когда результаты появятся, здесь откроется шоурум с медиа, ценой, факторами и похожими объектами.</p>
      </div>
    </div>
  `;
}

function selectProperty(id) {
  selectedId = id;
  activeMedia = "auto";
  const property = properties.find((item) => item.id === id);
  if (property && map) {
    map.setView([property.lat, property.lng], 14, { animate: true });
  }
  document.body.classList.add("showroom-open");
  document.body.classList.remove("showroom-hidden", "clean-map");
  cleanMapMode = false;
  syncLayoutControls();
  render();
}

function render() {
  const filtered = getFilteredProperties();
  if (!filtered.some((property) => property.id === selectedId) && filtered[0]) {
    selectedId = filtered[0].id;
  }
  renderMarkers(filtered);
  renderPropertyList(filtered);
  renderSidebarMetrics(filtered);
  if (filtered.length) {
    renderShowroom();
  } else {
    renderEmptyShowroom();
  }
}

function renderSidebarMetrics(filtered) {
  document.querySelector("#avgPriceMetric").textContent =
    filtered.length > 0 ? `${formatUsd(getAveragePricePerSqm(filtered))}/м²` : "$0/м²";
  document.querySelector("#tourMetric").textContent = filtered.filter(
    (property) => property.youtubeUrl || property.virtualTourUrl,
  ).length;
}

function showToast(message) {
  const toast = document.querySelector("#appToast");
  toast.textContent = message;
  toast.classList.add("app-toast--visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("app-toast--visible");
  }, 2200);
}

initFilters();
initMap();
render();
