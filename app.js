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
    objectStatus: "real_deal",
    date: "Май 2026",
    photos: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "https://www.youtube.com/embed/qAi_kA4WokM",
    virtualTourUrl: "https://www.youtube.com/embed/GjojcII8myc",
    virtualTourType: "youtube360",
    priceUpFactors: ["Южная зона", "Хороший ремонт", "Рядом школа", "Удобный этаж"],
    priceDownFactors: ["Нет паркинга", "Дом не новый"],
    mainPriceReason: "Платите за ремонт и южную зону — самые ликвидные факторы в этом районе.",
    clientSummary: "Цена находится ближе к верхней границе района: объект выигрывает за счет ремонта, южной локации и удобного этажа.",
    sellerScript: "Скажите продавцу: ваш объект стоит дороже соседних именно из-за ремонта и южной стороны. Но рынок сейчас смотрит на цену за м² — при $1 586/м² есть небольшое давление. Рекомендую держать цену ещё 2 недели, потом скинуть $2 000 для ускорения сделки.",
    buyerScript: "Скажите покупателю: объект дороже на $8–10 тыс. по сравнению с похожими, но разница объясняется ремонтом. Если вы планируете жить сразу без вложений — это ваш вариант. Если готовы делать ремонт сами — покажу дешевле.",
    internalNotes: "Реальная сделка команды. Май 2026.",
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
    objectStatus: "listing",
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
    mainPriceReason: "Ликвидность 104 серии: дешевле, быстрее продаётся, понятна для покупателей.",
    clientSummary: "Объект дешевле южных районов, но держит цену за счет инфраструктуры и понятной ликвидности 104 серии.",
    sellerScript: "Скажите продавцу: цена $72 000 реалистична — 104 серия на Востоке-5 торгуется в диапазоне $68–76 тыс. При вашем ремонте уходить ниже $70 тысяч не стоит. Если покупатель давит — предложите уступить $1–2 тыс. за счёт быстрого закрытия.",
    buyerScript: "Скажите покупателю: это доступный вариант в хорошем районе. За эти деньги вы не найдете 104 серию дешевле с нормальным ремонтом. Минус — компактная кухня, но планировка под переделку — реально.",
    internalNotes: "Активное объявление. Продавец мотивирован.",
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
    objectStatus: "real_deal",
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
    mainPriceReason: "Центр = ликвидность. Этот объект продаётся быстрее любого другого при правильной цене.",
    clientSummary: "Высокая цена объясняется центром и ликвидностью. Покупатель платит не только за метры, но и за скорость будущей перепродажи.",
    sellerScript: "Скажите продавцу: $88 000 за центр — честная цена. $1 956/м² — это верхняя граница для 1-комнатных в центре. Снижать не нужно, но если простоит 3 недели — пересмотрим на $85 000 с нашей стороны.",
    buyerScript: "Скажите покупателю: да, дорого за 45 м². Но центр — это +20–30% к перепродажной стоимости через 3–5 лет. Если смотрите на вложение, а не только на площадь — это правильный выбор.",
    internalNotes: "Реальная сделка. Кирпич в центре — хорошая аргументация.",
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
    objectStatus: "listing",
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
    mainPriceReason: "Вы покупаете новое строение и большую площадь — но реальный бюджет входа выше цены на $15–20 тыс. с учетом ремонта.",
    clientSummary: "Цена кажется высокой, но покупатель получает площадь и новый дом. Реальная итоговая стоимость вырастет после ремонта.",
    sellerScript: "Скажите продавцу: рынок новостроек в Джале сейчас активен. $108 000 — справедливо, но конкуренция высокая. Добавьте чистовую отделку или скидку на ремонт от застройщика — закроет сделку быстрее.",
    buyerScript: "Скажите покупателю: итоговая стоимость будет $125–130 тыс. с ремонтом. Это надо честно считать. Если горизонт 2+ года и бюджет есть — хорошее вложение. Если нужно заехать сразу — покажу другие варианты.",
    internalNotes: "Активный листинг. Продавец — застройщик, скидка реальна.",
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
    objectStatus: "real_deal",
    date: "Февраль 2026",
    photos: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "",
    virtualTourUrl: "",
    virtualTourType: "none",
    priceUpFactors: ["108 серия", "Просторная планировка", "Тихий район"],
    priceDownFactors: ["Удаленность от центра", "Средний ремонт"],
    mainPriceReason: "108 серия + простор: редкое сочетание для этой цены. Аналоги в центре стоят на $20 тыс. дороже.",
    clientSummary: "Хороший баланс цены и площади. Объект дешевле центра, но выигрывает планировкой и спокойной локацией.",
    sellerScript: "Скажите продавцу: $96 000 — это $1 371/м². 108 серия в Тунгуче торгуется от $1 300 до $1 450. Вы в середине диапазона, всё правильно. Если хотите ускорить — $93–94 тыс. закроет сделку за 2 недели.",
    buyerScript: "Скажите покупателю: это лучший вариант по соотношению цена/площадь в восточных районах. 70 м² за $96 тыс. — в центре такое стоит $115–120 тыс. Тунгуч тихий, школы есть, инфраструктура нормальная.",
    internalNotes: "Нейтральный сравнительный кейс. Реальная сделка февраля.",
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
    objectStatus: "real_deal",
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
    mainPriceReason: "Паркинг + премиум ремонт + 112 м² — в этом сегменте аналогов в Бишкеке почти нет.",
    clientSummary: "Объект находится в дорогом сегменте. Цена держится за счет площади, ремонта и южной локации, но аудитория покупателей уже.",
    sellerScript: "Скажите продавцу: $185 000 — верхний рынок. Целевая аудитория — 5–7% покупателей. Снижение до $178–180 тыс. откроет ещё 15% рынка. Рекомендую экспозицию 4–6 недель, потом пересматривать.",
    buyerScript: "Скажите покупателю: это объект не для экономии, а для качества жизни. Паркинг и ремонт уже включены — если считать всё по отдельности, это $195–200 тыс. Фактически получаете скидку $10–15 тыс. к реальной стоимости.",
    internalNotes: "Демо для премиального сегмента. Реальная сделка января.",
  },
  {
    id: "orto-sai-2r-07",
    title: "2-комнатная Орто-Сай",
    district: "Орто-Сай",
    addressLabel: "Орто-Сай, горная сторона",
    lat: 42.8612,
    lng: 74.5473,
    type: "Квартира",
    rooms: 2,
    area: 56,
    price: 79000,
    buildingType: "106 серия",
    floor: 2,
    totalFloors: 5,
    renovation: "Хороший ремонт",
    caseType: "listing",
    objectStatus: "listing",
    date: "Май 2026",
    photos: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "",
    virtualTourUrl: "",
    virtualTourType: "none",
    priceUpFactors: ["Горный вид", "Хороший ремонт", "Тихая улица", "Низкий этаж"],
    priceDownFactors: ["Удалённость", "Нет лифта", "106 серия"],
    mainPriceReason: "Вид на горы и тихая улица — за это переплачивают те, кто ценит спокойствие.",
    clientSummary: "Объект для покупателей, которые ценят тишину и экологию. Цена умеренная для хорошего ремонта.",
    sellerScript: "Скажите продавцу: $79 000 для Орто-Сая с ремонтом — честно. Этот район торгуется медленнее центра, но стабильно. Ожидайте 3–5 недель. Снижать раньше 4 недель не стоит.",
    buyerScript: "Скажите покупателю: если хотите тишину и воздух — лучше варианта в этой ценовой категории не найти. Вид на горы — бонус, который не обесценивается.",
    internalNotes: "Активный листинг. Продавец не спешит.",
  },
  {
    id: "yukeri-djemal-1r-08",
    title: "1-комнатная Жукери",
    district: "Жукери-Жемал",
    addressLabel: "Жукери-Жемал, новый жилмассив",
    lat: 42.7985,
    lng: 74.5731,
    type: "Квартира",
    rooms: 1,
    area: 38,
    price: 52000,
    buildingType: "Новостройка",
    floor: 4,
    totalFloors: 9,
    renovation: "Без ремонта",
    caseType: "listing",
    objectStatus: "demo",
    date: "Апрель 2026",
    photos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "",
    virtualTourUrl: "",
    virtualTourType: "none",
    priceUpFactors: ["Новостройка", "Доступная цена", "Хорошая транспортная доступность"],
    priceDownFactors: ["Нет ремонта", "Удалённость от центра", "Маленькая площадь"],
    mainPriceReason: "Самая низкая цена входа в новостройку — подходит для первой квартиры или инвестиции с горизонтом 3 года.",
    clientSummary: "Хороший вариант для первой покупки или сдачи в аренду. Минимальный порог входа в рынок новостроек.",
    sellerScript: "Скажите продавцу: $52 000 — нижняя граница рынка в этом жилмассиве. Снижать некуда. Если хотите ускорить — предложите покрыть расходы на оформление (около $500–800).",
    buyerScript: "Скажите покупателю: это стартовый вариант. Вложите $12–15 тыс. в ремонт — и через 3 года стоимость вырастет на $20–25 тыс. при сдаче. Самая понятная инвестиционная модель.",
    internalNotes: "Демо-кейс для показа доступного сегмента.",
  },
  {
    id: "dordoi-3r-09",
    title: "3-комнатная у Дордоя",
    district: "Дордой",
    addressLabel: "Дордой, коммерческая зона",
    lat: 42.9021,
    lng: 74.6334,
    type: "Квартира",
    rooms: 3,
    area: 68,
    price: 89000,
    buildingType: "107 серия",
    floor: 5,
    totalFloors: 9,
    renovation: "Средний ремонт",
    caseType: "deal",
    objectStatus: "real_deal",
    date: "Март 2026",
    photos: [
      "https://images.unsplash.com/photo-1600566752447-c0df4a8cd6c4?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "",
    virtualTourUrl: "",
    virtualTourType: "none",
    priceUpFactors: ["Рядом рынок Дордой", "107 серия", "Средний этаж", "Торговая активность"],
    priceDownFactors: ["Шумный район", "Средний ремонт", "Трафик"],
    mainPriceReason: "Коммерческая активность района держит цену — объект популярен среди предпринимателей и семей с бизнесом.",
    clientSummary: "Хороший выбор для тех, кто работает у рынка или занимается торговлей. Объект ликвидный — спрос стабильный.",
    sellerScript: "Скажите продавцу: Дордой всегда торгуется активно. $89 000 — середина рынка для 107 серии. При среднем ремонте потолок — $92 тыс. Хорошая позиция.",
    buyerScript: "Скажите покупателю: если ваш бизнес или работа связаны с рынком — здесь жить удобно. Транспортная доступность максимальная. Минус — шум в часы пик.",
    internalNotes: "Реальная сделка. Покупатель — торговец с Дордоя.",
  },
  {
    id: "ak-orgo-2r-10",
    title: "2-комнатная Ак-Орго",
    district: "Ак-Орго",
    addressLabel: "Ак-Орго, элитный квартал",
    lat: 42.8302,
    lng: 74.5988,
    type: "Квартира",
    rooms: 2,
    area: 65,
    price: 135000,
    buildingType: "Монолит",
    floor: 9,
    totalFloors: 16,
    renovation: "Премиум ремонт",
    caseType: "deal",
    objectStatus: "real_deal",
    date: "Апрель 2026",
    photos: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    virtualTourUrl: "",
    virtualTourType: "none",
    priceUpFactors: ["Монолит", "Премиум ремонт", "Панорамный вид", "Закрытый двор"],
    priceDownFactors: ["Высокий этаж", "Дорогое обслуживание", "Нет торга"],
    mainPriceReason: "Монолит + панорама + закрытый двор — три фактора, которых нет больше нигде в этом бюджете.",
    clientSummary: "Объект бизнес-класса. Цена оправдана качеством строительства и видом. Для тех, кто выбирает среду проживания, а не только метры.",
    sellerScript: "Скажите продавцу: $135 000 — минимальная адекватная цена для монолита с таким ремонтом. Снижать ниже $130 тыс. не стоит — потеряете класс объекта. Аудитория придёт, но нужно 4–8 недель.",
    buyerScript: "Скажите покупателю: $2 077/м² для монолита с премиум ремонтом — это честно. В центре такое стоит $2 300–2 500/м². Вы экономите около $15 тыс. просто за счёт расположения.",
    internalNotes: "Реальная сделка апреля. Покупатель — предприниматель.",
  },
  {
    id: "bishkek-park-2r-11",
    title: "2-комнатная у Парка Ататюрка",
    district: "Центр",
    addressLabel: "ул. Токтогула, рядом с парком",
    lat: 42.8834,
    lng: 74.5921,
    type: "Квартира",
    rooms: 2,
    area: 62,
    price: 112000,
    buildingType: "Кирпич",
    floor: 3,
    totalFloors: 7,
    renovation: "Хороший ремонт",
    caseType: "listing",
    objectStatus: "listing",
    date: "Май 2026",
    photos: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "",
    virtualTourUrl: "",
    virtualTourType: "none",
    priceUpFactors: ["Центр", "Кирпич", "Вид на парк", "Хороший ремонт"],
    priceDownFactors: ["Нет паркинга", "Оживленная улица"],
    mainPriceReason: "Вид на парк и центральная локация — за это в Бишкеке стабильно переплачивают $15–20 тыс.",
    clientSummary: "Редкий вариант с видом на зелёную зону в центре. Кирпич даёт тишину и тепло. Цена справедлива для этого места.",
    sellerScript: "Скажите продавцу: $112 000 — верхняя граница для 62 м² в центре. Держитесь, но будьте готовы к $108 тыс. через 3 недели если нет просмотров. Вид на парк — ваш главный аргумент на показах.",
    buyerScript: "Скажите покупателю: вид на парк — это постоянная ценность. Такие объекты не обесцениваются, потому что парк не застроят. Один из немногих аргументов для центра, который работает всегда.",
    internalNotes: "Листинг. Продавец рассматривает предложения.",
  },
  {
    id: "kelechek-studio-12",
    title: "Студия в Келечеке",
    district: "Келечек",
    addressLabel: "Келечек, жилой комплекс",
    lat: 42.8195,
    lng: 74.6721,
    type: "Студия",
    rooms: 1,
    area: 32,
    price: 42000,
    buildingType: "Новостройка",
    floor: 6,
    totalFloors: 14,
    renovation: "Без ремонта",
    caseType: "listing",
    objectStatus: "demo",
    date: "Май 2026",
    photos: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    youtubeUrl: "",
    virtualTourUrl: "",
    virtualTourType: "none",
    priceUpFactors: ["Новостройка", "Минимальный бюджет", "Сдача в аренду"],
    priceDownFactors: ["Нет ремонта", "32 м²", "Далеко от центра"],
    mainPriceReason: "Минимальный порог входа на рынок Бишкека — подходит только для инвестиции под аренду.",
    clientSummary: "Студия — инвестиционный инструмент, не семейный вариант. Доходность аренды: около $250–300/мес после ремонта.",
    sellerScript: "Скажите продавцу: $42 000 — рыночная цена. Аудитория — инвесторы. Им важна доходность, не красота. Акцентируйте $280/мес аренда = 8% годовых.",
    buyerScript: "Скажите покупателю: если цель — аренда, считайте: $42 тыс. + $8 тыс. ремонт = $50 тыс. вложений. Аренда $280/мес = $3 360/год = 6.7% годовых в долларах. Неплохо для Бишкека.",
    internalNotes: "Демо-кейс для инвестиционного сегмента.",
  },
];

// Динамически добавленные объекты
let dynamicProperties = [];

function getAllProperties() {
  return [...properties, ...dynamicProperties];
}

let map;
let selectedId = getAllProperties()[0].id;
let activeMedia = "auto";
let audienceMode = "realtor"; // "realtor" | "client"
let caseMode = "all";
let sidebarVisible = true;
let cleanMapMode = false;
let showroomFullscreen = false;
let shareOnlyId = null;
let invalidShareId = null;
const markers = new Map();

const initialParams = new URLSearchParams(window.location.search);
const initialObjectId =
  initialParams.get("object") || initialParams.get("property") || initialParams.get("share");
const initialObject = getAllProperties().find((p) => p.id === initialObjectId);
if (initialObjectId) {
  if (initialObject) {
    selectedId = initialObjectId;
    shareOnlyId = initialObjectId;
  } else {
    invalidShareId = initialObjectId;
  }
  audienceMode = "client";
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

const pricePerSqm = (p) => Math.round(p.price / p.area);
const defaultImageUrl =
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80";
const htmlEntities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
const escapeHtml = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (char) => htmlEntities[char]);

function safeUrl(value, fallback = "") {
  const raw = String(value ?? "").trim();
  if (!raw) return fallback;
  try {
    const url = new URL(raw, window.location.href);
    if (url.protocol === "http:" || url.protocol === "https:") return url.href;
  } catch {
    return fallback;
  }
  return fallback;
}

const getMainImage = (p) => safeUrl(p.photos?.[0], defaultImageUrl);
const isDemoTourUrl = (value) => String(value ?? "").trim().startsWith("demo:");
const hasVideo = (p) => Boolean(safeUrl(p.youtubeUrl));
const hasTour = (p) => Boolean(safeUrl(p.virtualTourUrl) || isDemoTourUrl(p.virtualTourUrl));

function getMediaType(p) {
  if (activeMedia !== "auto") return activeMedia;
  return "photo";
}

function getFilteredProperties() {
  const all = getAllProperties();
  const district = document.querySelector("#districtFilter").value;
  const media = document.querySelector("#mediaFilter").value;
  const rooms = document.querySelector("#roomsFilter").value;
  const price = document.querySelector("#priceFilter").value;
  const search = document.querySelector("#searchInput").value.trim().toLowerCase();

  return all.filter((p) => {
    if (invalidShareId) return false;
    if (shareOnlyId) return p.id === shareOnlyId;
    const searchable = [p.title, p.district, p.addressLabel, p.type, p.buildingType, p.renovation]
      .join(" ")
      .toLowerCase();
    if (search && !searchable.includes(search)) return false;
    if (caseMode !== "all" && p.caseType !== caseMode) return false;
    if (district !== "all" && p.district !== district) return false;
    if (media === "video" && !hasVideo(p)) return false;
    if (media === "tour" && !hasTour(p)) return false;
    if (rooms !== "all") {
      const roomNumber = Number(rooms);
      if (roomNumber === 4 && p.rooms < 4) return false;
      if (roomNumber < 4 && p.rooms !== roomNumber) return false;
    }
    if (price !== "all" && p.price > Number(price)) return false;
    return true;
  });
}

function distanceKm(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function getComparables(target) {
  return getAllProperties()
    .filter((p) => p.id !== target.id)
    .map((p) => {
      const districtScore = p.district === target.district ? 30 : 0;
      const roomScore = Math.max(0, 25 - Math.abs(p.rooms - target.rooms) * 12);
      const areaScore = Math.max(0, 20 - Math.abs(p.area - target.area) / 3);
      const distanceScore = Math.max(0, 25 - distanceKm(p, target) * 6);
      const caseScore = p.caseType === target.caseType ? 10 : 0;
      const renovationScore = p.renovation === target.renovation ? 8 : 0;
      const rawScore =
        districtScore + roomScore + areaScore + distanceScore + caseScore + renovationScore;
      const score = Math.min(100, Math.round(rawScore));
      const reasons = [];
      if (p.district === target.district) reasons.push("тот же район");
      if (p.rooms === target.rooms) reasons.push("та же комнатность");
      if (Math.abs(p.area - target.area) <= 20) reasons.push("похожая площадь");
      if (p.buildingType === target.buildingType) reasons.push("тип дома");
      if (p.renovation === target.renovation) reasons.push("ремонт");
      if (!reasons.length) reasons.push("ценовой ориентир");
      return { ...p, score, matchReasons: reasons };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
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
  return Math.round(items.reduce((s, p) => s + pricePerSqm(p), 0) / items.length);
}

function estimateRange(p, band) {
  return {
    low: band.low * p.area,
    median: band.median * p.area,
    high: band.high * p.area,
  };
}

function getObjectStatusBadge(status) {
  const map = {
    real_deal: { label: "Реальная сделка", cls: "status--deal" },
    listing: { label: "Объявление", cls: "status--listing" },
    demo: { label: "Демо-кейс", cls: "status--demo" },
  };
  const s = map[status] || map["demo"];
  return `<span class="object-status ${s.cls}">${s.label}</span>`;
}

function getRenovationEmoji(renovation) {
  if (renovation.includes("Премиум")) return "✦";
  if (renovation.includes("Хороший")) return "✔";
  if (renovation.includes("Средний")) return "~";
  return "✗";
}

function initFilters() {
  rebuildDistrictFilter();

  document.querySelectorAll("#filters select").forEach((select) => {
    select.addEventListener("change", render);
  });

  document.querySelector("#searchInput").addEventListener("input", render);

  document.querySelectorAll("[data-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      caseMode = btn.dataset.mode;
      document.querySelectorAll("[data-mode]").forEach((b) => {
        b.classList.toggle("mode-switch__button--active", b === btn);
        b.setAttribute("aria-selected", b === btn ? "true" : "false");
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
    document.querySelectorAll("[data-mode]").forEach((b) => {
      const active = b.dataset.mode === "all";
      b.classList.toggle("mode-switch__button--active", active);
      b.setAttribute("aria-selected", active ? "true" : "false");
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

  document.querySelectorAll("[data-rail-action]").forEach((btn) => {
    btn.addEventListener("click", () => showToast(btn.dataset.railAction));
  });

  // Кнопка "Добавить объект"
  document.querySelector("#addPropertyBtn").addEventListener("click", openAddPropertyModal);
  // Кнопка "Импорт CSV"
  document.querySelector("#importCsvBtn").addEventListener("click", () => {
    document.querySelector("#csvFileInput").click();
  });
  document.querySelector("#csvFileInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) importCSV(file);
    e.target.value = "";
  });
}

function rebuildDistrictFilter() {
  const sel = document.querySelector("#districtFilter");
  const current = sel.value;
  sel.innerHTML = `<option value="all">Все районы</option>`;
  [...new Set(getAllProperties().map((p) => p.district))].sort().forEach((d) => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    sel.appendChild(opt);
  });
  sel.value = [...sel.options].some((option) => option.value === current) ? current : "all";
}

function invalidateMapSoon() {
  if (!map) return;
  window.setTimeout(() => map.invalidateSize(), 240);
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
  const fullscreenBtn = document.querySelector("#showroomFullscreen");
  if (fullscreenBtn) {
    fullscreenBtn.textContent = showroomFullscreen ? "Свернуть" : "На весь экран";
  }
  invalidateMapSoon();
}

function initMap() {
  if (!window.L) {
    initStaticMap();
    return;
  }
  map = L.map("map", { zoomControl: false }).setView([42.856, 74.61], 12);
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

function getStaticMapPosition(p) {
  const bounds = { north: 42.915, south: 42.785, west: 74.525, east: 74.715 };
  const x = ((p.lng - bounds.west) / (bounds.east - bounds.west)) * 100;
  const y = ((bounds.north - p.lat) / (bounds.north - bounds.south)) * 100;
  return { x: Math.min(94, Math.max(6, x)), y: Math.min(92, Math.max(8, y)) };
}

function renderStaticMarkers(filtered) {
  const container = document.querySelector("#staticMarkers");
  if (!container) return;
  container.innerHTML = filtered
    .map((p) => {
      const pos = getStaticMapPosition(p);
      return `
        <button type="button"
          class="static-marker ${p.price > 140000 ? "static-marker--premium" : ""} ${p.id === selectedId ? "static-marker--active" : ""}"
          style="left:${pos.x}%; top:${pos.y}%"
          data-id="${escapeHtml(p.id)}">
          <span>${formatUsd(p.price)}</span>
          <small>${escapeHtml(p.district)}</small>
        </button>`;
    })
    .join("");
  container.querySelectorAll("[data-id]").forEach((btn) => {
    btn.addEventListener("click", () => selectProperty(btn.dataset.id));
  });
}

function renderMarkers(filtered) {
  if (!map || !window.L) {
    renderStaticMarkers(filtered);
    return;
  }
  markers.forEach((m) => m.remove());
  markers.clear();
  filtered.forEach((p) => {
    const marker = L.marker([p.lat, p.lng], {
      icon: L.divIcon({
        html: `<div class="marker-pin ${p.price > 140000 ? "marker-pin--premium" : ""} ${p.id === selectedId ? "marker-pin--active" : ""}">${formatUsd(p.price)}</div>`,
        className: "",
        iconSize: [74, 34],
        iconAnchor: [37, 17],
      }),
    }).addTo(map);
    marker.on("click", () => selectProperty(p.id));
    markers.set(p.id, marker);
  });
}

function toggleAudienceMode(mode) {
  if (shareOnlyId || invalidShareId) {
    audienceMode = "client";
    document.body.classList.add("client-mode");
    return;
  }
  audienceMode = mode;
  const isClient = mode === "client";
  document.body.classList.toggle("client-mode", isClient);
  document.querySelectorAll("[data-audience]").forEach((btn) => {
    btn.classList.toggle("audience-switch__btn--active", btn.dataset.audience === mode);
  });
}

function toggleShowroomFullscreen() {
  if (shareOnlyId || invalidShareId) return;
  showroomFullscreen = !showroomFullscreen;
  document.body.classList.toggle("showroom-fullscreen", showroomFullscreen);
  document.body.classList.remove("showroom-hidden", "clean-map");
  cleanMapMode = false;
  syncLayoutControls();
}

async function copyClientLink(p) {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("share", p.id);
  const link = url.toString();
  try {
    await navigator.clipboard.writeText(link);
    showToast(
      window.location.protocol === "file:"
        ? "Локальная демо-ссылка скопирована. Для клиента нужен деплой."
        : "Клиентская ссылка скопирована"
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
      </div>`;
    return;
  }

  filtered.forEach((p) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `property-card ${p.id === selectedId ? "property-card--active" : ""}`;
    btn.innerHTML = `
      <div class="property-card__image" style="background-image:url('${escapeHtml(getMainImage(p))}')"></div>
      <div>
        <div class="property-card__badges">
          <span class="${p.caseType === "listing" ? "badge--listing" : "badge--deal"}">${p.caseType === "listing" ? "Объявление" : "Сделка"}</span>
          ${safeUrl(p.youtubeUrl) ? "<span>Видео</span>" : ""}
          ${safeUrl(p.virtualTourUrl) ? "<span>360/3D</span>" : ""}
          ${p.objectStatus === "demo" ? "<span class=\"badge--demo\">Демо</span>" : ""}
        </div>
        <h3>${escapeHtml(p.title)}</h3>
        <p>${p.rooms}-комн. · ${p.area} м² · ${escapeHtml(p.district)}</p>
        <strong>${formatUsd(p.price)}</strong>
        <p>${formatUsd(pricePerSqm(p))}/м²</p>
      </div>`;
    btn.addEventListener("click", () => selectProperty(p.id));
    list.appendChild(btn);
  });
}

function renderMedia(p) {
  const mediaType = getMediaType(p);
  const rawTourUrl = String(p.virtualTourUrl ?? "").trim();
  const tourUrl = safeUrl(p.virtualTourUrl);
  const youtubeUrl = safeUrl(p.youtubeUrl);
  const title = escapeHtml(p.title);
  if (mediaType === "tour" && hasTour(p)) {
    if (isDemoTourUrl(rawTourUrl)) {
      const label = p.virtualTourType === "matterport" ? "Matterport 3D showroom" : "360 virtual tour";
      const note = audienceMode === "client"
        ? "Панорамный тур подключается к объекту отдельной ссылкой."
        : "Сюда вставится iframe-ссылка на реальный 360/3D-тур объекта.";
      return `<div class="tour-placeholder"><span>${label}</span><strong>${title}</strong><p>${note}</p></div>`;
    }
    return `<iframe src="${escapeHtml(tourUrl)}" title="Виртуальный тур ${title}" allowfullscreen loading="lazy"></iframe>`;
  }
  if (mediaType === "video" && youtubeUrl) {
    return `<iframe src="${escapeHtml(youtubeUrl)}" title="Видео ${title}" allowfullscreen loading="lazy"></iframe>`;
  }
  return `<img src="${escapeHtml(getMainImage(p))}" alt="${title}" />`;
}

function renderComparables(comparables, target) {
  if (!comparables.length) return "<p style='color:var(--muted);font-size:13px'>Нет похожих объектов</p>";
  const lockToSharedObject = Boolean(shareOnlyId || invalidShareId);

  return comparables.map((item) => {
    const priceDiff = item.price - target.price;
    const priceDiffStr = priceDiff > 0
      ? `<span class="comp-diff comp-diff--up">+${formatUsd(priceDiff)}</span>`
      : priceDiff < 0
        ? `<span class="comp-diff comp-diff--down">${formatUsd(priceDiff)}</span>`
        : `<span class="comp-diff">равная цена</span>`;

    const scoreColor = item.score >= 70 ? "var(--green)" : item.score >= 45 ? "var(--amber)" : "var(--muted)";

    const rows = [
      ["Цена за м²", `${formatUsd(pricePerSqm(item))}/м²`, `${formatUsd(pricePerSqm(target))}/м²`],
      ["Ремонт", `${getRenovationEmoji(item.renovation)} ${item.renovation}`, `${getRenovationEmoji(target.renovation)} ${target.renovation}`],
      ["Этаж", `${item.floor}/${item.totalFloors}`, `${target.floor}/${target.totalFloors}`],
      ["Тип дома", item.buildingType, target.buildingType],
      ["Район", item.district, target.district],
    ];

    return `
      <div class="comparable-card">
        <div class="comparable-card__head">
          <div class="comparable-card__img" style="background-image:url('${escapeHtml(getMainImage(item))}')"></div>
          <div class="comparable-card__info">
            <div class="comparable-score" style="color:${scoreColor}">
              <strong>${item.score}</strong><span>/100</span>
            </div>
            <h4>${escapeHtml(item.title)}</h4>
            <p class="comp-reasons">${escapeHtml(item.matchReasons.slice(0, 3).join(" · "))}</p>
            <p class="comp-price">${formatUsd(item.price)} ${priceDiffStr}</p>
          </div>
        </div>
        <table class="compare-table">
          <thead><tr><th>Параметр</th><th>Этот объект</th><th>Текущий</th></tr></thead>
          <tbody>
            ${rows.map(([label, val, cur]) => {
              const match = val === cur;
              return `<tr class="${match ? "comp-row--match" : ""}"><td>${escapeHtml(label)}</td><td>${escapeHtml(val)}</td><td>${escapeHtml(cur)}</td></tr>`;
            }).join("")}
          </tbody>
        </table>
        ${lockToSharedObject ? "" : `<button type="button" class="comp-open-btn" data-id="${escapeHtml(item.id)}">Открыть →</button>`}
      </div>`;
  }).join("");
}

function renderShowroom() {
  if (invalidShareId) {
    renderInvalidShare();
    return;
  }
  const all = getAllProperties();
  const p = all.find((item) => item.id === selectedId) || all[0];
  const comparables = getComparables(p);
  const band = getPriceBand(p);
  const range = estimateRange(p, band);
  const showroom = document.querySelector("#showroom");
  const isClient = audienceMode === "client";
  const isShare = Boolean(shareOnlyId);
  const hasVideoMedia = hasVideo(p);
  const hasTourMedia = hasTour(p);

  showroom.innerHTML = `
    <div class="showroom__top">
      <button type="button" id="focusMap">На карте</button>
      ${isShare ? "" : `<button type="button" id="showroomFullscreen">${showroomFullscreen ? "Свернуть" : "На весь экран"}</button>`}
      ${isShare ? "" : `<button type="button" id="copyClientLink">Ссылка</button>`}
      ${isShare ? "" : `<button type="button" id="closeShowroom" class="showroom__close">Закрыть</button>`}
      ${getObjectStatusBadge(p.objectStatus)}
    </div>

    ${isShare ? "" : `<div class="audience-switch" role="tablist">
      <button class="audience-switch__btn ${!isClient ? "audience-switch__btn--active" : ""}" data-audience="realtor" role="tab">Для риэлтора</button>
      <button class="audience-switch__btn ${isClient ? "audience-switch__btn--active" : ""}" data-audience="client" role="tab">Для клиента</button>
    </div>`}

    <div class="showroom__body">
      <div class="media-viewer">${renderMedia(p)}</div>
      <div class="media-tabs">
        <button class="${getMediaType(p) === "photo" ? "active" : ""}" data-media="photo">Фото</button>
        <button class="${getMediaType(p) === "video" ? "active" : ""}" data-media="video" ${hasVideoMedia ? "" : "disabled"}>Видео</button>
        <button class="${getMediaType(p) === "tour" ? "active" : ""}" data-media="tour" ${hasTourMedia ? "" : "disabled"}>360/3D</button>
      </div>

      <div class="showroom-hero">
        <div>
          <span>${escapeHtml(p.district)} · ${escapeHtml(p.buildingType)}</span>
          <h2>${escapeHtml(p.title)}</h2>
          <p>${escapeHtml(p.addressLabel)} · ${escapeHtml(p.date)}</p>
        </div>
        <strong>${formatUsd(p.price)}</strong>
      </div>

      <div class="stats">
        <div class="stat"><strong>${formatUsd(p.price)}</strong><span>Цена</span></div>
        <div class="stat"><strong>${p.area} м²</strong><span>Площадь</span></div>
        <div class="stat"><strong>${p.rooms}</strong><span>Комнат</span></div>
        <div class="stat"><strong>${p.floor}/${p.totalFloors}</strong><span>Этаж</span></div>
      </div>

      <div class="detail-grid">
        <div><span>Цена за м²</span><strong>${formatUsd(pricePerSqm(p))}/м²</strong></div>
        <div><span>Тип дома</span><strong>${escapeHtml(p.buildingType)}</strong></div>
        <div><span>Ремонт</span><strong>${escapeHtml(p.renovation)}</strong></div>
        <div><span>Формат</span><strong>${escapeHtml(p.type)}</strong></div>
      </div>

      <div class="main-reason-block">
        <div class="main-reason-block__label">Главная причина цены</div>
        <p>${escapeHtml(p.mainPriceReason || "Цена определяется совокупностью факторов объекта.")}</p>
      </div>

      <h3 class="section-title">Факторы стоимости</h3>
      <div class="factor-grid">
        <ul class="factor-list factor-list--up">
          ${p.priceUpFactors.map((f) => `<li><span>+</span>${escapeHtml(f)}</li>`).join("")}
        </ul>
        <ul class="factor-list factor-list--down">
          ${p.priceDownFactors.map((f) => `<li><span>-</span>${escapeHtml(f)}</li>`).join("")}
        </ul>
      </div>

      <div class="script-blocks internal-only">
        <div class="script-block script-block--seller">
          <div class="script-block__label">Что говорить продавцу</div>
          <p>${escapeHtml(p.sellerScript || "Скрипт не задан для этого объекта.")}</p>
        </div>
        <div class="script-block script-block--buyer">
          <div class="script-block__label">Что говорить покупателю</div>
          <p>${escapeHtml(p.buyerScript || "Скрипт не задан для этого объекта.")}</p>
        </div>
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
        <p>Медианный ориентир: ${formatUsd(range.median)} при площади ${p.area} м².</p>
      </div>

      <h3 class="section-title">Вывод для клиента</h3>
      <div class="client-summary">${escapeHtml(p.clientSummary)}</div>

      <h3 class="section-title">Сопоставимые объекты</h3>
      <div class="comparables-list">${renderComparables(comparables, p)}</div>

      <p class="internal-only showroom__meta"><strong>Внутренняя заметка:</strong> ${escapeHtml(p.internalNotes)}</p>
      <p class="data-status">Bishkek Property Desk · ${p.objectStatus === "demo" ? "Демо-данные" : "Актуальные данные"}</p>
    </div>
  `;

  // Events
  document.querySelectorAll("[data-media]").forEach((btn) => {
    btn.addEventListener("click", () => { activeMedia = btn.dataset.media; renderShowroom(); });
  });
  document.querySelectorAll(".comp-open-btn").forEach((btn) => {
    btn.addEventListener("click", () => selectProperty(btn.dataset.id));
  });
  document.querySelector("#focusMap").addEventListener("click", () => {
    if (map) map.setView([p.lat, p.lng], 14);
    if (shareOnlyId) {
      document.querySelector(".map-stage")?.scrollIntoView({ behavior: "smooth", block: "start" });
      syncLayoutControls();
      return;
    }
    document.body.classList.add("showroom-hidden");
    document.body.classList.remove("showroom-open", "showroom-fullscreen");
    showroomFullscreen = false;
    syncLayoutControls();
  });
  document.querySelector("#closeShowroom")?.addEventListener("click", () => {
    document.body.classList.add("showroom-hidden");
    document.body.classList.remove("showroom-open", "showroom-fullscreen");
    showroomFullscreen = false;
    syncLayoutControls();
  });
  document.querySelector("#showroomFullscreen")?.addEventListener("click", toggleShowroomFullscreen);
  document.querySelector("#copyClientLink")?.addEventListener("click", () => copyClientLink(p));
  document.querySelectorAll("[data-audience]").forEach((btn) => {
    btn.addEventListener("click", () => { toggleAudienceMode(btn.dataset.audience); renderShowroom(); });
  });
}

function renderInvalidShare() {
  document.querySelector("#showroom").innerHTML = `
    <div class="showroom__top">
      <span class="object-status status--demo">Ссылка не найдена</span>
    </div>
    <div class="showroom__empty showroom__empty--invalid">
      <div>
        <strong>Объект не найден</strong>
        <p>Ссылка устарела или объект был удален из витрины. Попросите риэлтора отправить новую ссылку.</p>
      </div>
    </div>`;
}

function renderEmptyShowroom() {
  document.querySelector("#showroom").innerHTML = `
    <div class="showroom__empty">
      <div>
        <strong>Выберите объект</strong>
        <p>Здесь откроется шоурум с медиа, ценой, факторами и похожими объектами.</p>
      </div>
    </div>`;
}

function selectProperty(id) {
  if (shareOnlyId && id !== shareOnlyId) return;
  if (invalidShareId) return;
  selectedId = id;
  activeMedia = "auto";
  const p = getAllProperties().find((item) => item.id === id);
  if (p && map) map.setView([p.lat, p.lng], 14, { animate: true });
  document.body.classList.add("showroom-open");
  document.body.classList.remove("showroom-hidden", "clean-map");
  cleanMapMode = false;
  syncLayoutControls();
  render();
}

function render() {
  const filtered = getFilteredProperties();
  if (invalidShareId) {
    renderMarkers(filtered);
    renderPropertyList(filtered);
    renderSidebarMetrics(filtered);
    renderInvalidShare();
    return;
  }
  if (!filtered.some((p) => p.id === selectedId) && filtered[0]) {
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
    (p) => hasVideo(p) || hasTour(p)
  ).length;
}

function showToast(message) {
  const toast = document.querySelector("#appToast");
  toast.textContent = message;
  toast.classList.add("app-toast--visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("app-toast--visible");
  }, 2800);
}

// ── Модальное окно: добавить объект ──────────────────────────────────────────

function openAddPropertyModal() {
  const existing = document.querySelector("#addPropertyModal");
  if (existing) { existing.remove(); }

  const modal = document.createElement("div");
  modal.id = "addPropertyModal";
  modal.className = "modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-label", "Добавить объект");
  modal.innerHTML = `
    <div class="modal__backdrop"></div>
    <div class="modal__window">
      <div class="modal__head">
        <h2>Добавить объект</h2>
        <button type="button" class="modal__close" id="closeAddModal">✕</button>
      </div>
      <form class="modal__form" id="addPropertyForm" autocomplete="off">
        <div class="form-grid">
          <label>Название<input type="text" name="title" placeholder="2-комнатная в Асанбае" required /></label>
          <label>Район<input type="text" name="district" placeholder="Асанбай" required /></label>
          <label>Тип объекта<input type="text" name="type" placeholder="Квартира" value="Квартира" /></label>
          <label>Тип дома<input type="text" name="buildingType" placeholder="105 серия" /></label>
          <label>Адрес / метка<input type="text" name="addressLabel" placeholder="Асанбай, южная зона" /></label>
          <label>Ремонт
            <select name="renovation">
              <option value="Без ремонта">Без ремонта</option>
              <option value="Средний ремонт" selected>Средний ремонт</option>
              <option value="Хороший ремонт">Хороший ремонт</option>
              <option value="Премиум ремонт">Премиум ремонт</option>
            </select>
          </label>
          <label>Широта (lat)<input type="number" name="lat" step="0.0001" placeholder="42.8148" required /></label>
          <label>Долгота (lng)<input type="number" name="lng" step="0.0001" placeholder="74.6256" required /></label>
          <label>Цена ($)<input type="number" name="price" placeholder="92000" required /></label>
          <label>Площадь (м²)<input type="number" name="area" placeholder="58" required /></label>
          <label>Комнат<input type="number" name="rooms" min="1" max="10" placeholder="2" required /></label>
          <label>Этаж<input type="number" name="floor" placeholder="5" /></label>
          <label>Всего этажей<input type="number" name="totalFloors" placeholder="9" /></label>
          <label>Статус
            <select name="objectStatus">
              <option value="real_deal">Реальная сделка</option>
              <option value="listing" selected>Объявление</option>
              <option value="demo">Демо-кейс</option>
            </select>
          </label>
          <label>Тип кейса
            <select name="caseType">
              <option value="listing" selected>Объявление</option>
              <option value="deal">Сделка</option>
            </select>
          </label>
          <label>Дата<input type="text" name="date" placeholder="Июнь 2026" /></label>
        </div>
        <label class="form-full">Ссылка на фото<input type="url" name="photoUrl" placeholder="https://images.unsplash.com/..." /></label>
        <label class="form-full">YouTube (embed URL)<input type="url" name="youtubeUrl" placeholder="https://www.youtube.com/embed/..." /></label>
        <label class="form-full">360/3D тур URL<input type="url" name="virtualTourUrl" placeholder="https://..." /></label>
        <label class="form-full">Главная причина цены<input type="text" name="mainPriceReason" placeholder="Почему объект стоит именно столько" /></label>
        <label class="form-full">Плюсы цены (через запятую)<input type="text" name="priceUpFactors" placeholder="Хороший ремонт, Южная зона" /></label>
        <label class="form-full">Минусы цены (через запятую)<input type="text" name="priceDownFactors" placeholder="Нет паркинга, Старый фонд" /></label>
        <label class="form-full">Скрипт для продавца<textarea name="sellerScript" rows="2" placeholder="Что говорить продавцу..."></textarea></label>
        <label class="form-full">Скрипт для покупателя<textarea name="buyerScript" rows="2" placeholder="Что говорить покупателю..."></textarea></label>
        <label class="form-full">Вывод для клиента<textarea name="clientSummary" rows="2" placeholder="Краткое резюме для клиента..."></textarea></label>
        <label class="form-full">Внутренняя заметка<input type="text" name="internalNotes" placeholder="Только для риэлтора" /></label>
        <div class="modal__actions">
          <button type="submit" class="btn-primary">Добавить на карту</button>
          <button type="button" id="cancelAddModal" class="btn-secondary">Отмена</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modal);
  modal.querySelector("#closeAddModal").addEventListener("click", closeAddPropertyModal);
  modal.querySelector("#cancelAddModal").addEventListener("click", closeAddPropertyModal);
  modal.querySelector(".modal__backdrop").addEventListener("click", closeAddPropertyModal);
  modal.querySelector("#addPropertyForm").addEventListener("submit", (e) => {
    e.preventDefault();
    addPropertyFromForm(new FormData(e.target));
    closeAddPropertyModal();
  });
  requestAnimationFrame(() => modal.classList.add("modal--open"));
}

function closeAddPropertyModal() {
  const modal = document.querySelector("#addPropertyModal");
  if (!modal) return;
  modal.classList.remove("modal--open");
  setTimeout(() => modal.remove(), 240);
}

function addPropertyFromForm(formData) {
  const id = "custom-" + Date.now();
  const photoUrl = formData.get("photoUrl") || defaultImageUrl;

  const newProperty = {
    id,
    title: formData.get("title") || "Новый объект",
    district: formData.get("district") || "Не указан",
    addressLabel: formData.get("addressLabel") || "",
    lat: parseFloat(formData.get("lat")) || 42.856,
    lng: parseFloat(formData.get("lng")) || 74.61,
    type: formData.get("type") || "Квартира",
    rooms: parseInt(formData.get("rooms")) || 2,
    area: parseFloat(formData.get("area")) || 50,
    price: parseInt(formData.get("price")) || 80000,
    buildingType: formData.get("buildingType") || "Не указан",
    floor: parseInt(formData.get("floor")) || 1,
    totalFloors: parseInt(formData.get("totalFloors")) || 9,
    renovation: formData.get("renovation") || "Средний ремонт",
    caseType: formData.get("caseType") || "listing",
    objectStatus: formData.get("objectStatus") || "listing",
    date: formData.get("date") || new Date().toLocaleDateString("ru-RU", { month: "long", year: "numeric" }),
    photos: [photoUrl],
    youtubeUrl: formData.get("youtubeUrl") || "",
    virtualTourUrl: formData.get("virtualTourUrl") || "",
    virtualTourType: "none",
    mainPriceReason: formData.get("mainPriceReason") || "",
    priceUpFactors: (formData.get("priceUpFactors") || "").split(",").map((s) => s.trim()).filter(Boolean),
    priceDownFactors: (formData.get("priceDownFactors") || "").split(",").map((s) => s.trim()).filter(Boolean),
    sellerScript: formData.get("sellerScript") || "",
    buyerScript: formData.get("buyerScript") || "",
    clientSummary: formData.get("clientSummary") || "",
    internalNotes: formData.get("internalNotes") || "Добавлено вручную",
  };

  dynamicProperties.push(newProperty);
  rebuildDistrictFilter();
  showToast(`Добавлен: ${newProperty.title}`);
  selectProperty(id);
}

// ── Импорт CSV ────────────────────────────────────────────────────────────────

function parseCsvLine(line, sep) {
  const result = [];
  let value = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      value += '"';
      i += 1;
      continue;
    }
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (char === sep && !inQuotes) {
      result.push(value.trim());
      value = "";
      continue;
    }
    value += char;
  }

  result.push(value.trim());
  return result;
}

function importCSV(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target.result;
    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    if (lines.length < 2) {
      showToast("CSV пустой или некорректный");
      return;
    }

    const sep = lines[0].includes(";") ? ";" : ",";
    const headers = parseCsvLine(lines[0], sep).map((h) => h.toLowerCase().replace(/"/g, ""));
    const added = [];
    const errors = [];

    for (let i = 1; i < lines.length; i++) {
      try {
        const vals = parseCsvLine(lines[i], sep);
        const row = {};
        headers.forEach((h, idx) => { row[h] = vals[idx] || ""; });

        const lat = parseFloat(row["lat"] || row["широта"] || row["latitude"]);
        const lng = parseFloat(row["lng"] || row["долгота"] || row["longitude"] || row["lon"]);
        const price = parseInt(row["price"] || row["цена"]);
        const area = parseFloat(row["area"] || row["площадь"]);
        const rooms = parseInt(row["rooms"] || row["комнат"] || row["комнаты"] || "2");

        if (isNaN(lat) || isNaN(lng) || isNaN(price) || isNaN(area)) {
          errors.push(i + 1);
          continue;
        }

        const id = "csv-" + Date.now() + "-" + i;
        dynamicProperties.push({
          id,
          title: row["title"] || row["название"] || `Объект ${i}`,
          district: row["district"] || row["район"] || "Не указан",
          addressLabel: row["address"] || row["адрес"] || row["addresslabel"] || "",
          lat, lng, price, area, rooms,
          type: row["type"] || row["тип"] || "Квартира",
          buildingType: row["buildingtype"] || row["тип дома"] || row["серия"] || "Не указан",
          floor: parseInt(row["floor"] || row["этаж"]) || 1,
          totalFloors: parseInt(row["totalfloors"] || row["всего этажей"] || row["этажей"]) || 9,
          renovation: row["renovation"] || row["ремонт"] || "Средний ремонт",
          caseType: row["casetype"] || row["тип кейса"] || "listing",
          objectStatus: row["objectstatus"] || row["статус"] || "listing",
          date: row["date"] || row["дата"] || "2026",
          photos: [row["photo"] || row["фото"] || row["photo_url"] || defaultImageUrl],
          youtubeUrl: row["youtube"] || row["youtube_url"] || "",
          virtualTourUrl: row["tour"] || row["tour_url"] || "",
          virtualTourType: "none",
          mainPriceReason: row["mainpricereason"] || row["главная причина"] || "",
          priceUpFactors: (row["priceupfactors"] || row["плюсы"] || "").split("|").map((s) => s.trim()).filter(Boolean),
          priceDownFactors: (row["pricedownfactors"] || row["минусы"] || "").split("|").map((s) => s.trim()).filter(Boolean),
          sellerScript: row["sellerscript"] || row["продавцу"] || "",
          buyerScript: row["buyerscript"] || row["покупателю"] || "",
          clientSummary: row["clientsummary"] || row["вывод"] || "",
          internalNotes: row["internalnotes"] || row["заметка"] || "Импортировано из CSV",
        });
        added.push(id);
      } catch (err) {
        errors.push(i + 1);
      }
    }

    rebuildDistrictFilter();
    render();

    if (added.length) {
      showToast(`Загружено объектов: ${added.length}${errors.length ? `. Пропущено строк: ${errors.length}` : ""}`);
      if (added[0]) selectProperty(added[0]);
    } else {
      showToast(`Не удалось загрузить объекты. Проверьте формат CSV.`);
    }
  };
  reader.readAsText(file, "UTF-8");
}

// ── Init ──────────────────────────────────────────────────────────────────────

initFilters();
initMap();
render();
if (shareOnlyId) {
  const sharedProperty = getAllProperties().find((p) => p.id === shareOnlyId);
  if (sharedProperty && map) {
    window.setTimeout(() => map.setView([sharedProperty.lat, sharedProperty.lng], 14), 260);
  }
}
