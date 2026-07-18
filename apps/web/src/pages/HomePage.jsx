import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Facebook, ChevronRight, Utensils, Bike } from 'lucide-react';
<<<<<<< HEAD
const HERO = "https://images.hostinger.com/20cee24e-6010-4adb-af92-e4cc60cc77a6.png";
const ICON = "https://images.hostinger.com/0d49399e-fb7a-4e83-a358-bd21720dc708.png";
const IMG_CHEF = "https://images.hostinger.com/1151a606-6d87-403f-8767-ca6235cfe216.png";
=======

const HERO = "https://images.hostinger.com/20cee24e-6010-4adb-af92-e4cc60cc77a6.png";
const IMG_CHEF = "https://images.hostinger.com/1151a606-6d87-403f-8767-ca6235cfe216.png";

>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
const SECTION_IMAGES = {
  coldStarters: "https://images.hostinger.com/16bf04d9-a5d8-43f6-a87c-69026b3e176e.png",
  hotStarters: "https://images.hostinger.com/28715365-5b4e-4d6f-862e-ff4caec39895.png",
  grill: "https://images.hostinger.com/db9b517b-8be2-46aa-ba4f-b71d9c3ac5d6.png",
  specials: "https://images.hostinger.com/4f707501-de91-4556-a499-c1945d139586.png",
  platters: "https://images.hostinger.com/30ba4041-0e70-4b8a-b9b4-1fefd84f6a5a.png",
  sidesAndBreads: "https://images.hostinger.com/50954c9d-70a7-4438-b8af-51aab1169dfc.png",
  seafoodWraps: "https://images.hostinger.com/6aa85d70-d009-4c38-8ca2-6d446493eefd.png",
<<<<<<< HEAD
  dessertsDrinks: "https://images.hostinger.com/92ba6a0d-a216-4dfc-8dd9-110b7263a423.png"
};
const MENU = {
  coldStarters: [{
    name: 'Hummus',
    farsi: 'حمص',
    desc: 'Creamy chickpea dip.',
    price: '6.45',
    veg: true
  }, {
    name: 'Baba Ghanouj',
    farsi: 'بابا غنوج',
    desc: 'Smoky roasted eggplant dip.',
    price: '6.45',
    veg: true
  }, {
    name: 'Fattoush',
    farsi: 'فتوش',
    desc: 'Refreshing Middle Eastern salad.',
    price: '6.45',
    veg: true
  }, {
    name: 'Feta Cheese Salad',
    farsi: 'سلاد پنیر فتا',
    desc: 'Fresh salad with tangy feta cheese.',
    price: '6.45',
    veg: true
  }, {
    name: 'Afghan Mix Salad',
    farsi: 'سلاد مخلوط افغانی',
    desc: 'Vibrant salad with Afghan flavours.',
    price: '6.45',
    veg: true
  }, {
    name: 'Green Olives',
    farsi: 'زیتون سبز',
    desc: 'Tangy and briny olives.',
    price: '4.95',
    veg: true
  }],
  hotStarters: [{
    name: 'Falafel',
    farsi: 'فلافل',
    desc: 'Crispy chickpea fritters.',
    price: '6.45',
    veg: true
  }, {
    name: 'Chicken Wings',
    farsi: 'بال مرغ',
    desc: 'Spicy and succulent chicken wings.',
    price: '6.45'
  }, {
    name: 'Lamb Samosas',
    farsi: 'سمبوسه گوشت',
    desc: 'Two pieces of spiced lamb pastry parcels.',
    price: '5.45'
  }, {
    name: 'Chicken Samosas',
    farsi: 'سمبوسه مرغ',
    desc: 'Two pieces of spiced chicken pastry parcels.',
    price: '5.45'
  }, {
    name: 'Veg Samosas',
    farsi: 'سمبوسه سبزی',
    desc: 'Two pieces of vegetable-filled pastry parcels.',
    price: '5.45',
    veg: true
  }, {
    name: 'Halloumi Cheese',
    farsi: 'پنیر حلومی',
    desc: 'Grilled Cypriot cheese.',
    price: '5.95',
    veg: true
  }, {
    name: 'Lentil Soup',
    farsi: 'شوربای عدس',
    desc: 'Hearty and comforting lentil soup.',
    price: '5.95',
    veg: true
  }],
  grill: [{
    name: 'Lamb Kobeda',
    farsi: 'کوبیده گوشت',
    desc: 'Spiced grilled lamb kebabs. 1 skewer with naan £7.95 / with rice £10.95 · 2 skewers with naan £13.95 / with rice £16.95',
    price: 'from 7.95'
  }, {
    name: 'Chicken Tikka',
    farsi: 'تکه مرغ',
    desc: 'Succulent grilled chicken. 1 skewer with naan £8.95 / with rice £11.95 · 2 skewers with naan £14.95 / with rice £17.95',
    price: 'from 8.95'
  }, {
    name: 'Afghan Lamb Tikka',
    farsi: 'تکه گوشت افغانی',
    desc: 'Tender grilled lamb. 1 skewer with naan £9.95 / with rice £12.95 · 2 skewers with naan £16.95 / with rice £19.95',
    price: 'from 9.95'
  }, {
    name: 'Lamb Chops (4 pcs)',
    farsi: 'استخوان گوشت',
    desc: 'Juicy grilled lamb chops. With naan £11.95 / with rice £14.95',
    price: 'from 11.95'
  }, {
    name: 'Alfaham',
    farsi: 'الفاهم',
    desc: 'Grilled marinated chicken. Half with naan £8.95 / with rice £11.95 · Full with naan £13.95 / with rice £16.95',
    price: 'from 8.95'
  }, {
    name: 'Farrouj',
    farsi: 'فروج',
    desc: 'Whole grill chicken. With naan £12.95 / with rice £15.95',
    price: 'from 12.95'
  }, {
    name: 'Mix Grill 1',
    farsi: 'مخلوط کباب ۱',
    desc: 'Chicken Tikka & Lamb Tikka. With naan £14.95 / with rice £17.95',
    price: 'from 14.95'
  }, {
    name: 'Mix Grill 2',
    farsi: 'مخلوط کباب ۲',
    desc: 'Chicken Tikka & Lamb Kobeda. With naan £12.95 / with rice £15.95',
    price: 'from 12.95'
  }, {
    name: 'Mix Grill 3',
    farsi: 'مخلوط کباب ۳',
    desc: 'Chicken Tikka, Lamb Tikka & Lamb Kofta. With naan £18.95 / with rice £21.95',
    price: 'from 18.95'
  }, {
    name: 'Mix Grill 4 — Afghan Tandoori Mix',
    farsi: 'مخلوط کباب ۴',
    desc: 'Chicken Tikka, Lamb Tikka, Lamb Chops & Lamb Kofta. With naan £28.95 / with rice £31.95',
    price: 'from 28.95'
  }],
  specials: [{
    name: 'Chapli Kebab',
    farsi: 'چپلی کباب',
    desc: 'Spiced minced meat patties. 1 piece with naan £7.95 · 2 pieces with naan £14.95',
    price: 'from 7.95',
    signature: true
  }, {
    name: 'Mantu',
    farsi: 'منتو',
    desc: 'Afghan steamed dumplings filled with spiced minced meat, topped with garlic, yogurt and flavourful tomato lentil sauce.',
    price: '11.95',
    signature: true
  }, {
    name: 'Lamb Charsi Karahi',
    farsi: 'کراهی گوشت',
    desc: 'Lamb cooked in a spicy sauce with black peppers & chillies. ¼ kg £11.95 · ½ kg £21.95 · 1 kg £36.95',
    price: 'from 11.95'
  }, {
    name: 'Chicken Charsi Karahi',
    farsi: 'کراهی مرغ',
    desc: 'Chicken cooked in a spicy sauce with black peppers & chillies. ¼ kg £10.95 · ½ kg £20.95 · 1 kg £34.95',
    price: 'from 10.95'
  }, {
    name: 'Qabuli Pilau with Lamb Shank',
    farsi: 'قابلی پلو با گوشت',
    desc: 'Fragrant rice with lamb shank topped with caramelised carrots and raisins.',
    price: '15.95',
    signature: true
  }, {
    name: 'Qabuli Pilau with Lamb Pieces',
    farsi: 'قابلی پلو با تکه گوشت',
    desc: 'Fragrant rice with lamb meat pieces topped with caramelised carrots & raisins.',
    price: '13.95'
  }, {
    name: 'Qabuli Pilau with Chicken',
    farsi: 'قابلی پلو با مرغ',
    desc: 'Fragrant rice with chicken pieces topped with caramelised carrots & raisins.',
    price: '12.95'
  }, {
    name: 'Bamia with Lamb',
    farsi: 'بامیه با گوشت',
    desc: 'Okra cooked in rich sauces with lamb meat pieces. With naan £11.95 / with rice £14.95',
    price: 'from 11.95'
  }, {
    name: 'Aubergine with Lamb',
    farsi: 'بادنجان با گوشت',
    desc: 'Afghan style aubergine cooked with lamb pieces. With naan £11.95 / with rice £14.95',
    price: 'from 11.95'
  }, {
    name: 'Saag with Lamb',
    farsi: 'سبزی با گوشت',
    desc: 'Spinach cooked with lamb pieces. With naan £11.95 / with rice £14.95',
    price: 'from 11.95'
  }, {
    name: 'Chicken Biryani',
    farsi: 'بریانی مرغ',
    desc: 'Fragrant rice cooked with spiced chicken — a classic dish bursting with flavour.',
    price: '9.95'
  }, {
    name: 'Chicken Shawarma',
    farsi: 'شاورما مرغ',
    desc: 'Grilled chicken served with fragrant rice or crispy chips.',
    price: '10.95'
  }],
  platters: [{
    name: 'Mix Sizzler (2 people)',
    farsi: 'مخلوط سیزلر',
    desc: 'Chicken Tikka, 2 skewers Lamb Kobeda, 2 pcs Lamb Chops, Chicken Wings with Afghani Naan.',
    price: '29.95'
  }, {
    name: 'Family Mix Platter (4 people)',
    farsi: 'پلاتر خانوادگی',
    desc: '2 Lamb Kobeda, skewer of Chicken Tikka, skewer of Chicken Wings, skewer of Lamb Chops, large Qabuli Rice with Lamb Shank and one Afghani Naan.',
    price: '54.95'
  }, {
    name: 'Grand Mix Platter (8 people)',
    farsi: 'پلاتر بزرگ',
    desc: '4 Lamb Kobeda, 2 skewers Chicken Tikka, 2 skewers Afghani Lamb Tikka, 2 skewers Lamb Chops, 2 skewers Chicken Wings with large Kabuli Rice with Lamb Shank and one Afghani Naan.',
    price: '95.95'
  }],
  sidesAndBreads: [{
    name: 'Okra / Bamia',
    farsi: 'بامیه',
    desc: 'Okra cooked in a rich sauce.',
    price: '7.95',
    veg: true
  }, {
    name: 'Spinach (Saag Sabzi)',
    farsi: 'سبزی',
    desc: 'Sautéed spinach with spices.',
    price: '7.95',
    veg: true
  }, {
    name: 'Red Kidney Beans',
    farsi: 'لوبیا قرمز',
    desc: 'Slow-cooked kidney beans.',
    price: '7.95',
    veg: true
  }, {
    name: 'Afghan Aubergine',
    farsi: 'بادنجان افغانی',
    desc: 'Afghan-style eggplant dish.',
    price: '7.95',
    veg: true
  }, {
    name: 'Aloo Keema',
    farsi: 'آلو کیمہ',
    desc: 'Spiced minced meat with potatoes.',
    price: '7.95'
  }, {
    name: 'Channa Daal',
    farsi: 'چنا دال',
    desc: 'Spiced split chickpeas.',
    price: '7.95',
    veg: true
  }, {
    name: 'Pilau Rice',
    farsi: 'پلو برنج',
    desc: 'Fragrant and seasoned rice.',
    price: '6.45',
    veg: true
  }, {
    name: 'Chips',
    farsi: 'چپس',
    desc: 'Crispy potato fries.',
    price: '2.45',
    veg: true
  }, {
    name: 'Naan',
    farsi: 'نان',
    desc: 'Traditional Indian flatbread.',
    price: '1.20',
    veg: true
  }, {
    name: 'Afghan Naan',
    farsi: 'نان افغانی',
    desc: 'Afghan-style flatbread.',
    price: '3.45',
    veg: true
  }, {
    name: 'Garlic Naan',
    farsi: 'نان سیر',
    desc: 'Naan bread infused with garlic.',
    price: '2.45',
    veg: true
  }, {
    name: 'Tandoori Roti',
    farsi: 'روٹی تندوری',
    desc: 'Traditional clay oven bread.',
    price: '1.10',
    veg: true
  }, {
    name: 'Butter Naan',
    farsi: 'نان مکھن',
    desc: 'Naan bread with butter.',
    price: '1.95',
    veg: true
  }, {
    name: 'Chilli Naan',
    farsi: 'نان مرچ',
    desc: 'Naan with a chilli kick.',
    price: '1.95',
    veg: true
  }],
  seafoodWraps: [{
    name: 'Grilled Seabass',
    farsi: 'ماهی شاه',
    desc: 'With naan/chips £12.95 · with rice £15.95',
    price: 'from 12.95'
  }, {
    name: 'Grilled Salmon',
    farsi: 'سالمون',
    desc: 'With naan/chips £12.95 · with rice £15.95',
    price: 'from 12.95'
  }, {
    name: 'Chicken Shawarma Wrap',
    farsi: 'شاورما مرغ',
    desc: 'Served with salad and choice of sauce. Wrap £7.95 · meal (with chips & drink) £9.95',
    price: 'from 7.95'
  }, {
    name: 'Halloumi Wrap',
    farsi: 'پنیر حلومی',
    desc: 'Served with salad and choice of sauce. Wrap £6.95 · meal £8.95',
    price: 'from 6.95',
    veg: true
  }, {
    name: 'Falafel Wrap',
    farsi: 'فلافل',
    desc: 'Served with salad and choice of sauce. Wrap £6.95 · meal £8.95',
    price: 'from 6.95',
    veg: true
  }, {
    name: 'Chicken Burger',
    farsi: 'برگر مرغ',
    desc: 'Served with salad and choice of sauce. Burger £5.95 · meal £7.95',
    price: 'from 5.95'
  }, {
    name: '1/4 Lamb Burger',
    farsi: 'برگر گوشت',
    desc: 'Served with salad and choice of sauce. Burger £6.95 · meal £8.95',
    price: 'from 6.95'
  }],
  dessertsDrinks: [{
    name: 'Firni',
    farsi: 'فرنی',
    desc: 'Traditional Afghan milk pudding.',
    price: '3.45'
  }, {
    name: 'Gulab Jamun',
    farsi: 'گلاب جامن',
    desc: 'Soft milk-solid dumplings in rose syrup.',
    price: '4.95'
  }, {
    name: 'Gajar Ka Halwa',
    farsi: 'حلوہ گاجر',
    desc: 'Slow-cooked carrot sweet with nuts.',
    price: '4.95'
  }, {
    name: 'Mango Lassi',
    farsi: 'لسی آم',
    desc: 'Glass £3.95 · jug £12.95',
    price: 'from 3.95'
  }, {
    name: 'Sweet Lassi',
    farsi: 'لسی میٹھی',
    desc: 'Glass £2.95 · jug £9.95',
    price: 'from 2.95'
  }, {
    name: 'Fresh Juices',
    farsi: 'آب میوہ',
    desc: 'Orange, carrot, apple or mix. Glass £3.95 · jug £12.95',
    price: 'from 3.95'
  }, {
    name: 'Homemade Ayran',
    farsi: 'دوغ',
    desc: 'Chilled yoghurt drink.',
    price: '2.95'
  }, {
    name: 'Afghan Kahwa Tea',
    farsi: 'چائے قہوہ',
    desc: 'Green tea, pot served.',
    price: '3.00'
  }, {
    name: 'Mint Tea',
    farsi: 'چائے نعناع',
    desc: 'Black tea, pot served.',
    price: '3.00'
  }, {
    name: 'Soft Drinks Can',
    farsi: 'نوشیدنی',
    desc: 'Coke, Diet Coke, Sprite, Fanta, Rubicon Mango.',
    price: '1.50'
  }]
};
const SECTIONS = [{
  key: 'coldStarters',
  title: 'Cold Starters',
  sub: 'Pesh-Ghaza'
}, {
  key: 'hotStarters',
  title: 'Hot Starters',
  sub: 'Garm Pesh-Ghaza'
}, {
  key: 'grill',
  title: 'Charcoal Grill',
  sub: 'Az Atash'
}, {
  key: 'specials',
  title: 'Afghan Specials & Mains',
  sub: 'Ghaza-e-Asli'
}, {
  key: 'platters',
  title: 'Platters',
  sub: 'Dastarkhan'
}, {
  key: 'sidesAndBreads',
  title: 'Sides & Breads',
  sub: 'Naan & More'
}, {
  key: 'seafoodWraps',
  title: 'Seafood, Wraps & Burgers',
  sub: 'Mahi & More'
}, {
  key: 'dessertsDrinks',
  title: 'Desserts & Drinks',
  sub: 'Shireeni & Nooshidani'
}];
const fadeUp = {
  initial: {
    opacity: 0,
    y: 24
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    margin: '-60px'
  },
  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1]
  }
};
const Nav = () => <header className="absolute top-0 inset-x-0 z-30">
    <div className="max-w-[90rem] mx-auto px-6 lg:px-10 py-6 flex items-center justify-between text-[hsl(var(--paper))]">
      <a href="#top" className="flex items-center gap-3"><span className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-[hsl(var(--pomegranate))] shrink-0"></span></a>
=======
  dessertsDrinks: "https://images.hostinger.com/92ba6a0d-a216-4dfc-8dd9-110b7263a423.png",
};

const MENU = {
  coldStarters: [
    { name: 'Hummus', desc: 'Creamy chickpea dip.', price: '6.45', veg: true },
    { name: 'Baba Ghanouj', desc: 'Smoky roasted eggplant dip.', price: '6.45', veg: true },
    { name: 'Fattoush', desc: 'Refreshing Middle Eastern salad.', price: '6.45', veg: true },
    { name: 'Feta Cheese Salad', desc: 'Fresh salad with tangy feta cheese.', price: '6.45', veg: true },
    { name: 'Afghan Mix Salad', desc: 'Vibrant salad with Afghan flavours.', price: '6.45', veg: true },
    { name: 'Green Olives', desc: 'Tangy and briny olives.', price: '4.95', veg: true },
  ],
  hotStarters: [
    { name: 'Falafel', desc: 'Crispy chickpea fritters.', price: '6.45', veg: true },
    { name: 'Chicken Wings', desc: 'Spicy and succulent chicken wings.', price: '6.45' },
    { name: 'Lamb Samosas', desc: 'Two pieces of spiced lamb pastry parcels.', price: '5.45' },
    { name: 'Chicken Samosas', desc: 'Two pieces of spiced chicken pastry parcels.', price: '5.45' },
    { name: 'Veg Samosas', desc: 'Two pieces of vegetable-filled pastry parcels.', price: '5.45', veg: true },
    { name: 'Halloumi Cheese', desc: 'Grilled Cypriot cheese.', price: '5.95', veg: true },
    { name: 'Lentil Soup', desc: 'Hearty and comforting lentil soup.', price: '5.95', veg: true },
  ],
  grill: [
    { name: 'Lamb Kobeda', desc: 'Spiced grilled lamb kebabs. 1 skewer with naan £7.95 / with rice £10.95 · 2 skewers with naan £13.95 / with rice £16.95', price: 'from 7.95' },
    { name: 'Chicken Tikka', desc: 'Succulent grilled chicken. 1 skewer with naan £8.95 / with rice £11.95 · 2 skewers with naan £14.95 / with rice £17.95', price: 'from 8.95' },
    { name: 'Afghan Lamb Tikka', desc: 'Tender grilled lamb. 1 skewer with naan £9.95 / with rice £12.95 · 2 skewers with naan £16.95 / with rice £19.95', price: 'from 9.95' },
    { name: 'Lamb Chops (4 pcs)', desc: 'Juicy grilled lamb chops. With naan £11.95 / with rice £14.95', price: 'from 11.95' },
    { name: 'Alfaham', desc: 'Grilled marinated chicken. Half with naan £8.95 / with rice £11.95 · Full with naan £13.95 / with rice £16.95', price: 'from 8.95' },
    { name: 'Farrouj', desc: 'Whole grill chicken. With naan £12.95 / with rice £15.95', price: 'from 12.95' },
    { name: 'Mix Grill 1', desc: 'Chicken Tikka & Lamb Tikka. With naan £14.95 / with rice £17.95', price: 'from 14.95' },
    { name: 'Mix Grill 2', desc: 'Chicken Tikka & Lamb Kobeda. With naan £12.95 / with rice £15.95', price: 'from 12.95' },
    { name: 'Mix Grill 3', desc: 'Chicken Tikka, Lamb Tikka & Lamb Kofta. With naan £18.95 / with rice £21.95', price: 'from 18.95' },
    { name: 'Mix Grill 4 — Afghan Tandoori Mix', desc: 'Chicken Tikka, Lamb Tikka, Lamb Chops & Lamb Kofta. With naan £28.95 / with rice £31.95', price: 'from 28.95' },
  ],
  specials: [
    { name: 'Chapli Kebab', desc: 'Spiced minced meat patties. 1 piece with naan £7.95 · 2 pieces with naan £14.95', price: 'from 7.95', signature: true },
    { name: 'Mantu', desc: 'Afghan steamed dumplings filled with spiced minced meat, topped with garlic, yogurt and flavourful tomato lentil sauce.', price: '11.95', signature: true },
    { name: 'Lamb Charsi Karahi', desc: 'Lamb cooked in a spicy sauce with black peppers & chillies. ¼ kg £11.95 · ½ kg £21.95 · 1 kg £36.95', price: 'from 11.95' },
    { name: 'Chicken Charsi Karahi', desc: 'Chicken cooked in a spicy sauce with black peppers & chillies. ¼ kg £10.95 · ½ kg £20.95 · 1 kg £34.95', price: 'from 10.95' },
    { name: 'Qabuli Pilau with Lamb Shank', desc: 'Fragrant rice with lamb shank topped with caramelised carrots and raisins.', price: '15.95', signature: true },
    { name: 'Qabuli Pilau with Lamb Pieces', desc: 'Fragrant rice with lamb meat pieces topped with caramelised carrots & raisins.', price: '13.95' },
    { name: 'Qabuli Pilau with Chicken', desc: 'Fragrant rice with chicken pieces topped with caramelised carrots & raisins.', price: '12.95' },
    { name: 'Bamia with Lamb', desc: 'Okra cooked in rich sauces with lamb meat pieces. With naan £11.95 / with rice £14.95', price: 'from 11.95' },
    { name: 'Aubergine with Lamb', desc: 'Afghan style aubergine cooked with lamb pieces. With naan £11.95 / with rice £14.95', price: 'from 11.95' },
    { name: 'Saag with Lamb', desc: 'Spinach cooked with lamb pieces. With naan £11.95 / with rice £14.95', price: 'from 11.95' },
    { name: 'Chicken Biryani', desc: 'Fragrant rice cooked with spiced chicken — a classic dish bursting with flavour.', price: '9.95' },
    { name: 'Chicken Shawarma', desc: 'Grilled chicken served with fragrant rice or crispy chips.', price: '10.95' },
  ],
  platters: [
    { name: 'Mix Sizzler (2 people)', desc: 'Chicken Tikka, 2 skewers Lamb Kobeda, 2 pcs Lamb Chops, Chicken Wings with Afghani Naan.', price: '29.95' },
    { name: 'Family Mix Platter (4 people)', desc: '2 Lamb Kobeda, skewer of Chicken Tikka, skewer of Chicken Wings, skewer of Lamb Chops, large Qabuli Rice with Lamb Shank and one Afghani Naan.', price: '54.95' },
    { name: 'Grand Mix Platter (8 people)', desc: '4 Lamb Kobeda, 2 skewers Chicken Tikka, 2 skewers Afghani Lamb Tikka, 2 skewers Lamb Chops, 2 skewers Chicken Wings with large Kabuli Rice with Lamb Shank and one Afghani Naan.', price: '95.95' },
  ],
  sidesAndBreads: [
    { name: 'Okra / Bamia', desc: 'Okra cooked in a rich sauce.', price: '7.95', veg: true },
    { name: 'Spinach (Saag Sabzi)', desc: 'Sautéed spinach with spices.', price: '7.95', veg: true },
    { name: 'Red Kidney Beans', desc: 'Slow-cooked kidney beans.', price: '7.95', veg: true },
    { name: 'Afghan Aubergine', desc: 'Afghan-style eggplant dish.', price: '7.95', veg: true },
    { name: 'Aloo Keema', desc: 'Spiced minced meat with potatoes.', price: '7.95' },
    { name: 'Channa Daal', desc: 'Spiced split chickpeas.', price: '7.95', veg: true },
    { name: 'Pilau Rice', desc: 'Fragrant and seasoned rice.', price: '6.45', veg: true },
    { name: 'Chips', desc: 'Crispy potato fries.', price: '2.45', veg: true },
    { name: 'Naan', desc: 'Traditional Indian flatbread.', price: '1.20', veg: true },
    { name: 'Afghan Naan', desc: 'Afghan-style flatbread.', price: '3.45', veg: true },
    { name: 'Garlic Naan', desc: 'Naan bread infused with garlic.', price: '2.45', veg: true },
    { name: 'Tandoori Roti', desc: 'Traditional clay oven bread.', price: '1.10', veg: true },
    { name: 'Butter Naan', desc: 'Naan bread with butter.', price: '1.95', veg: true },
    { name: 'Chilli Naan', desc: 'Naan with a chilli kick.', price: '1.95', veg: true },
  ],
  seafoodWraps: [
    { name: 'Grilled Seabass', desc: 'With naan/chips £12.95 · with rice £15.95', price: 'from 12.95' },
    { name: 'Grilled Salmon', desc: 'With naan/chips £12.95 · with rice £15.95', price: 'from 12.95' },
    { name: 'Chicken Shawarma Wrap', desc: 'Served with salad and choice of sauce. Wrap £7.95 · meal (with chips & drink) £9.95', price: 'from 7.95' },
    { name: 'Halloumi Wrap', desc: 'Served with salad and choice of sauce. Wrap £6.95 · meal £8.95', price: 'from 6.95', veg: true },
    { name: 'Falafel Wrap', desc: 'Served with salad and choice of sauce. Wrap £6.95 · meal £8.95', price: 'from 6.95', veg: true },
    { name: 'Chicken Burger', desc: 'Served with salad and choice of sauce. Burger £5.95 · meal £7.95', price: 'from 5.95' },
    { name: '1/4 Lamb Burger', desc: 'Served with salad and choice of sauce. Burger £6.95 · meal £8.95', price: 'from 6.95' },
  ],
  dessertsDrinks: [
    { name: 'Firni', desc: 'Traditional Afghan milk pudding.', price: '3.45' },
    { name: 'Gulab Jamun', desc: 'Soft milk-solid dumplings in rose syrup.', price: '4.95' },
    { name: 'Gajar Ka Halwa', desc: 'Slow-cooked carrot sweet with nuts.', price: '4.95' },
    { name: 'Mango Lassi', desc: 'Glass £3.95 · jug £12.95', price: 'from 3.95' },
    { name: 'Sweet Lassi', desc: 'Glass £2.95 · jug £9.95', price: 'from 2.95' },
    { name: 'Fresh Juices', desc: 'Orange, carrot, apple or mix. Glass £3.95 · jug £12.95', price: 'from 3.95' },
    { name: 'Homemade Ayran', desc: 'Chilled yoghurt drink.', price: '2.95' },
    { name: 'Afghan Kahwa Tea', desc: 'Green tea, pot served.', price: '3.00' },
    { name: 'Mint Tea', desc: 'Black tea, pot served.', price: '3.00' },
    { name: 'Soft Drinks Can', desc: 'Coke, Diet Coke, Sprite, Fanta, Rubicon Mango.', price: '1.50' },
  ],
};

const SECTIONS = [
  { key: 'coldStarters', title: 'Cold Starters', sub: 'Pesh-Ghaza' },
  { key: 'hotStarters', title: 'Hot Starters', sub: 'Garm Pesh-Ghaza' },
  { key: 'grill', title: 'Charcoal Grill', sub: 'Az Atash' },
  { key: 'specials', title: 'Afghan Specials & Mains', sub: 'Ghaza-e-Asli' },
  { key: 'platters', title: 'Platters', sub: 'Dastarkhan' },
  { key: 'sidesAndBreads', title: 'Sides & Breads', sub: 'Naan & More' },
  { key: 'seafoodWraps', title: 'Seafood, Wraps & Burgers', sub: 'Mahi & More' },
  { key: 'dessertsDrinks', title: 'Desserts & Drinks', sub: 'Shireeni & Nooshidani' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const Nav = () => (
  <header className="absolute top-0 inset-x-0 z-30">
    <div className="max-w-[90rem] mx-auto px-6 lg:px-10 py-6 flex items-center justify-between text-[hsl(var(--paper))]">
      <a href="#top" className="flex items-center gap-3">
        <span className="font-display text-2xl tracking-tight">Afghan Flavours</span>
        <span className="hidden sm:inline text-[10px] tracking-[0.4em] uppercase opacity-70 border-l border-white/30 pl-3">Reading · est. 2014</span>
      </a>
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
      <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
        <a href="#story" className="hover:text-[hsl(var(--saffron))] transition">Our Story</a>
        <a href="#menu" className="hover:text-[hsl(var(--saffron))] transition">Menu</a>
        <a href="#visit" className="hover:text-[hsl(var(--saffron))] transition">Visit</a>
      </nav>
<<<<<<< HEAD

    </div>
  </header>;
const Hero = () => <section id="top" className="relative min-h-[100dvh] w-full overflow-hidden grain">
=======
      <a href="tel:+441183842095" className="group inline-flex items-center gap-2 bg-[hsl(var(--saffron))] text-[hsl(var(--ink))] px-5 py-3 text-sm font-medium tracking-wide hover:bg-[hsl(var(--paper))] transition active:scale-[0.98]">
        Book a Table
        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section id="top" className="relative min-h-[100dvh] w-full overflow-hidden grain">
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
    <img src={HERO} alt="Afghan Flavours dining room in Reading" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--ink))]/70 via-[hsl(var(--ink))]/40 to-[hsl(var(--ink))]/90" />

    <Nav />

    <div className="relative z-20 min-h-[100dvh] flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-10">
      <div className="max-w-[90rem] mx-auto w-full">
<<<<<<< HEAD
        <motion.div initial={{
        opacity: 0,
        scale: 0.85
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8
      }} className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-[hsl(var(--pomegranate))] shadow-2xl mb-6">
          <img src={ICON} alt="Afghan Flavours emblem" className="w-full h-full object-cover" />
        </motion.div>
        <motion.p initial={{
        opacity: 0,
        y: 16
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.1
      }} className="font-script text-[hsl(var(--saffron))] text-3xl md:text-4xl mb-4">
          khush āmadid —
        </motion.p>
        <motion.h1 initial={{
        opacity: 0,
        y: 24
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.9,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }} className="font-display text-[hsl(var(--paper))] text-[14vw] md:text-[8.5rem] lg:text-[10rem] leading-[0.9] tracking-tight">
          Afghan <span className="italic text-[hsl(var(--saffron))]">Flavours</span>
        </motion.h1>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 0.6
      }} className="mt-8 grid md:grid-cols-3 gap-6 md:gap-12 items-end">
          <p className="md:col-span-2 text-[hsl(var(--paper))]/85 text-lg md:text-xl max-w-xl font-light leading-relaxed">Authentic Afghan cuisine — charcoal grills, slow-cooked Qabuli Pilau, Chapli Kebab and fresh-baked Afghan Naan. Served in Reading Town Centre, Cheapside, open Tuesday to Sunday.</p>
          <div className="flex flex-col gap-2 text-[hsl(var(--paper))]/80 text-sm tracking-wide">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[hsl(var(--saffron))]" />40 Oxford Road, Reading RG1</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[hsl(var(--saffron))]" />Mon–Sun · 12pm – 12am</span>
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 16
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-[hsl(var(--paper))]/70 text-xs tracking-[0.3em] uppercase mr-1">Order delivery</span>
          <a href="https://www.ubereats.com/gb/store/afghan-flavours/wvoZ1GpsUsmtc1W7nQrxDg" target="_blank" rel="noopener noreferrer" aria-label="Order on Uber Eats" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-[#1a1a1a] transition active:scale-[0.98]">
            <Bike className="w-5 h-5" />
            Uber Eats
          </a>
          <a href="https://deliveroo.co.uk/menu/Reading/reading-central/naan-house-bakery-461-oxford-road" target="_blank" rel="noopener noreferrer" aria-label="Order on Deliveroo" className="inline-flex items-center gap-2 bg-[#00cccc] text-black px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-[#00b3b3] transition active:scale-[0.98]">
=======
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="font-script text-[hsl(var(--saffron))] text-3xl md:text-4xl mb-4">
          khush āmadid —
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22,1,0.36,1] }}
          className="font-display text-[hsl(var(--paper))] text-[14vw] md:text-[8.5rem] lg:text-[10rem] leading-[0.9] tracking-tight">
          Afghan <span className="italic text-[hsl(var(--saffron))]">Flavours</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 grid md:grid-cols-3 gap-6 md:gap-12 items-end">
          <p className="md:col-span-2 text-[hsl(var(--paper))]/85 text-lg md:text-xl max-w-xl font-light leading-relaxed">
            Authentic Afghan cuisine — charcoal grills, slow-cooked Qabuli Pilau, Chapli Kebab and fresh-baked Afghan Naan. Served on the Oxford Road in Reading, open Tuesday to Sunday.
          </p>
          <div className="flex flex-col gap-2 text-[hsl(var(--paper))]/80 text-sm tracking-wide">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[hsl(var(--saffron))]" /> 142 Oxford Road, Reading RG1</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[hsl(var(--saffron))]" /> Tues–Sun · 12pm – late</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-[hsl(var(--paper))]/70 text-xs tracking-[0.3em] uppercase mr-1">Order delivery</span>
          <a
            href="https://www.ubereats.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on Uber Eats"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-[#1a1a1a] transition active:scale-[0.98]">
            <Bike className="w-5 h-5" />
            Uber Eats
          </a>
          <a
            href="https://www.deliveroo.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on Deliveroo"
            className="inline-flex items-center gap-2 bg-[#00cccc] text-black px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-[#00b3b3] transition active:scale-[0.98]">
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
            <Bike className="w-5 h-5" />
            Deliveroo
          </a>
        </motion.div>
      </div>
    </div>

    {/* Afghan flag-inspired stripe */}
    <div className="absolute bottom-0 inset-x-0 h-2 pattern-stripe z-30" />
<<<<<<< HEAD
  </section>;
const Marquee = () => {
  const items = ['Qabuli Pilau', 'Mantu', 'Chapli Kebab', 'Lamb Kobeda', 'Karahi', 'Mango Lassi', 'Chicken Tikka', 'Firni', 'Afghan Naan', 'Gulab Jamun'];
  const row = [...items, ...items];
  return <div className="bg-[hsl(var(--pomegranate))] text-[hsl(var(--paper))] overflow-hidden py-5 border-y border-[hsl(var(--ink))]/20">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {row.map((t, i) => <span key={i} className="font-display italic text-3xl md:text-4xl mx-8 flex items-center gap-8">
            {t}
            <span className="text-[hsl(var(--saffron))]">✦</span>
          </span>)}
      </div>
    </div>;
};
const Story = () => <section id="story" className="relative py-24 md:py-36 pattern-afghan overflow-hidden">
=======
  </section>
);

const Marquee = () => {
  const items = ['Qabuli Pilau', 'Mantu', 'Chapli Kebab', 'Lamb Kobeda', 'Karahi', 'Mango Lassi', 'Chicken Tikka', 'Firni', 'Afghan Naan', 'Gulab Jamun'];
  const row = [...items, ...items];
  return (
    <div className="bg-[hsl(var(--pomegranate))] text-[hsl(var(--paper))] overflow-hidden py-5 border-y border-[hsl(var(--ink))]/20">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {row.map((t, i) => (
          <span key={i} className="font-display italic text-3xl md:text-4xl mx-8 flex items-center gap-8">
            {t}
            <span className="text-[hsl(var(--saffron))]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Story = () => (
  <section id="story" className="relative py-24 md:py-36 pattern-afghan overflow-hidden">
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
    <div className="max-w-[72rem] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <motion.div {...fadeUp} className="lg:col-span-5 relative">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img src={IMG_CHEF} alt="Chef Habib in the Afghan Flavours kitchen" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-6 -right-4 bg-[hsl(var(--paper))] px-4 py-3 shadow-lg border border-[hsl(var(--line))] max-w-[14rem]">
          <p className="font-script text-2xl text-[hsl(var(--pomegranate))] leading-none">Chef Habib</p>
<<<<<<< HEAD
          <p className="text-xs tracking-wide uppercase text-[hsl(var(--ink-soft))] mt-1">Kabul → Reading, 2024</p>
        </div>
      </motion.div>

      <motion.div {...fadeUp} transition={{
      duration: 0.7,
      delay: 0.1
    }} className="lg:col-span-7">
        <p className="text-xs tracking-[0.4em] uppercase text-[hsl(var(--pomegranate))] mb-6">Our Story</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-8">A table set the way it would be in <span className="marker-underline">Kabul</span>, served in the<i> town centre</i>.</h2>
        <div className="space-y-5 text-[hsl(var(--ink-soft))] text-lg leading-relaxed font-light max-w-xl">
          <p>Afghan Flavours began at a single family table in 2024, with recipes carried by Chef Ajmal from his mother's kitchen in Kabul — pulao steamed slowly with caramelised carrot and raisin, dumplings folded by hand each morning, naan torn straight from the tandoor.</p>
          <p>Two years later we are still small, still family-run, and still cooking the way Afghan homes have for generations: patiently, generously, and with the door open to anyone who arrives hungry.</p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
          {[['10+', 'years on Oxford Road'], ['69', 'dishes on the menu'], ['3', 'sharing platters']].map(([n, l]) => <div key={l}>
              <div className="font-display text-4xl md:text-5xl text-[hsl(var(--pomegranate))]">{n}</div>
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--ink-soft))] mt-1">{l}</div>
            </div>)}
        </div>
      </motion.div>
    </div>
  </section>;
const MenuItem = ({
  item
}) => <div className="group flex items-baseline gap-4 py-5 border-b border-dashed border-[hsl(var(--line))] last:border-b-0">
    <div className="flex-1 min-w-0">
      <div className="flex items-baseline gap-2 flex-wrap">
        <h4 className="font-display text-2xl md:text-[1.7rem] leading-tight">
          {item.name}
        </h4>
        {item.veg && <span className="inline-flex items-center justify-center w-6 h-6 bg-[hsl(var(--pistachio))] text-white text-[11px] font-bold rounded-sm">V</span>}
        {item.signature && <span className="ml-1 text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--saffron))] align-middle">Signature</span>}
      </div>
      {item.farsi && <p className="text-[hsl(var(--saffron))] text-sm md:text-base mt-0.5 font-display italic">{item.farsi}</p>}
      <p className="text-[hsl(var(--ink-soft))] text-sm md:text-base mt-1 leading-relaxed font-light max-w-2xl">{item.desc}</p>
    </div>
    <div className="font-display text-2xl text-[hsl(var(--pomegranate))] whitespace-nowrap">£{item.price}</div>
  </div>;
const Menu = () => {
  const [active, setActive] = useState('coldStarters');
  return <section id="menu" className="relative py-24 md:py-32 bg-[hsl(var(--paper))]">
      <div className="max-w-[72rem] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[hsl(var(--pomegranate))] mx-auto mb-6">
            <img src={ICON} alt="Afghan Flavours emblem" className="w-full h-full object-cover" />
          </div>
=======
          <p className="text-xs tracking-wide uppercase text-[hsl(var(--ink-soft))] mt-1">Kabul → Reading, 2014</p>
        </div>
      </motion.div>

      <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-7">
        <p className="text-xs tracking-[0.4em] uppercase text-[hsl(var(--pomegranate))] mb-6">Our Story</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-8">
          A table set the way it would be in <span className="marker-underline">Kabul</span>, served on the
          <span className="italic"> Oxford Road</span>.
        </h2>
        <div className="space-y-5 text-[hsl(var(--ink-soft))] text-lg leading-relaxed font-light max-w-xl">
          <p>
            Afghan Flavours began at a single family table in 2014, with recipes carried by Chef Habib from his mother's kitchen in Kabul — pulao steamed slowly with caramelised carrot and raisin, dumplings folded by hand each morning, naan torn straight from the tandoor.
          </p>
          <p>
            A decade later we are still small, still family-run, and still cooking the way Afghan homes have for generations: patiently, generously, and with the door open to anyone who arrives hungry.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
          {[
            ['10+', 'years on Oxford Road'],
            ['69', 'dishes on the menu'],
            ['3', 'sharing platters'],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl md:text-5xl text-[hsl(var(--pomegranate))]">{n}</div>
              <div className="text-xs uppercase tracking-widest text-[hsl(var(--ink-soft))] mt-1">{l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const MenuItem = ({ item }) => (
  <div className="group flex items-baseline gap-4 py-5 border-b border-dashed border-[hsl(var(--line))] last:border-b-0">
    <div className="flex-1 min-w-0">
      <div className="flex items-baseline gap-3 flex-wrap">
        <h4 className="font-display text-2xl md:text-[1.7rem] leading-tight">
          {item.name}
          {item.signature && <span className="ml-3 text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--saffron))] align-middle">Signature</span>}
          {item.veg && <span className="ml-2 text-[9px] tracking-[0.2em] uppercase text-[hsl(var(--pistachio))] align-middle border border-[hsl(var(--pistachio))]/60 px-1 py-0.5 rounded-sm">V</span>}
        </h4>
      </div>
      <p className="text-[hsl(var(--ink-soft))] text-sm md:text-base mt-1 leading-relaxed font-light max-w-2xl">{item.desc}</p>
    </div>
    <div className="font-display text-2xl text-[hsl(var(--pomegranate))] whitespace-nowrap">£{item.price}</div>
  </div>
);

const Menu = () => {
  const [active, setActive] = useState('coldStarters');
  return (
    <section id="menu" className="relative py-24 md:py-32 bg-[hsl(var(--paper))]">
      <div className="max-w-[72rem] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
          <p className="text-xs tracking-[0.4em] uppercase text-[hsl(var(--pomegranate))] mb-4">Menu</p>
          <h2 className="font-display text-5xl md:text-7xl leading-tight">The Afghan Table</h2>
          <div className="divider-ornament mt-6 max-w-md mx-auto">✦ ✦ ✦</div>
          <p className="text-[hsl(var(--ink-soft))] max-w-xl mx-auto mt-6 font-light">
            Full a la carte menu — starters, grills, specials, platters, sides, wraps, seafood, desserts & drinks. We cater for all occasions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
<<<<<<< HEAD
          {SECTIONS.map(s => <button key={s.key} onClick={() => setActive(s.key)} className={`px-5 py-3 text-sm tracking-wide border transition active:scale-[0.98] ${active === s.key ? 'bg-[hsl(var(--ink))] text-[hsl(var(--paper))] border-[hsl(var(--ink))]' : 'border-[hsl(var(--line))] text-[hsl(var(--ink-soft))] hover:border-[hsl(var(--ink))] hover:text-[hsl(var(--ink))]'}`}>
              <span className="font-display text-base mr-2">{s.title}</span>
              <span className="opacity-50 text-xs">/ {s.sub}</span>
            </button>)}
        </div>

        <motion.div key={active} initial={{
        opacity: 0,
        y: 12
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }} className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 relative">
            <div className="sticky top-10">
              <div className="relative aspect-[4/5] overflow-hidden bg-[hsl(var(--ink))]">
                <img src={SECTION_IMAGES[active]} alt={`${SECTIONS.find(s => s.key === active)?.title} at Afghan Flavours`} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[hsl(var(--saffron))]/30" />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs tracking-[0.3em] uppercase text-[hsl(var(--ink-soft))]">
                <span>{SECTIONS.find(s => s.key === active)?.sub}</span>
=======
          {SECTIONS.map(s => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`px-5 py-3 text-sm tracking-wide border transition active:scale-[0.98] ${
                active === s.key
                  ? 'bg-[hsl(var(--ink))] text-[hsl(var(--paper))] border-[hsl(var(--ink))]'
                  : 'border-[hsl(var(--line))] text-[hsl(var(--ink-soft))] hover:border-[hsl(var(--ink))] hover:text-[hsl(var(--ink))]'
              }`}>
              <span className="font-display text-base mr-2">{s.title}</span>
              <span className="opacity-50 text-xs">/ {s.sub}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 relative">
            <div className="sticky top-10">
              <div className="relative aspect-[4/5] overflow-hidden bg-[hsl(var(--ink))]">
                <img
                  src={SECTION_IMAGES[active]}
                  alt={`${SECTIONS.find(s=>s.key===active)?.title} at Afghan Flavours`}
                  className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[hsl(var(--saffron))]/30" />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs tracking-[0.3em] uppercase text-[hsl(var(--ink-soft))]">
                <span>{SECTIONS.find(s=>s.key===active)?.sub}</span>
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
                <span className="flex items-center gap-2"><Utensils className="w-3 h-3" /> hand-prepared daily</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            {MENU[active].map(item => <MenuItem key={item.name} item={item} />)}
          </div>
        </motion.div>

<<<<<<< HEAD
        <p className="text-center text-xs tracking-[0.3em] uppercase text-[hsl(var(--ink-soft))] mt-16"><span style={{
          fontSize: "14px",
          lineHeight: "normal"
        }}><strong>Vegetarian, vegan &amp; gluten-free options available — please ask</strong></span></p>
      </div>
    </section>;
};
const Visit = () => <section id="visit" className="relative py-24 md:py-32 pattern-afghan">
=======
        <p className="text-center text-xs tracking-[0.3em] uppercase text-[hsl(var(--ink-soft))] mt-16">
          Vegetarian, vegan & gluten-free options available — please ask
        </p>
      </div>
    </section>
  );
};

const Visit = () => (
  <section id="visit" className="relative py-24 md:py-32 pattern-afghan">
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
    <div className="max-w-[72rem] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
      <motion.div {...fadeUp}>
        <p className="text-xs tracking-[0.4em] uppercase text-[hsl(var(--pomegranate))] mb-4">Visit</p>
        <h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">
          Find us on the <span className="marker-underline">Oxford Road</span>.
        </h2>

        <div className="space-y-6 text-[hsl(var(--ink-soft))]">
          <div className="flex gap-4">
            <MapPin className="w-5 h-5 mt-1 text-[hsl(var(--pomegranate))] shrink-0" />
            <div>
<<<<<<< HEAD
              <div className="font-display text-xl text-[hsl(var(--ink))]">40 Oxford Road</div>
              <div>Reading, Berkshire, RG1 7PJ</div>
              <a href="https://www.google.com/maps/place/Afghan+Flavours+Reading/@51.4553666,-0.9798743,17z/data=!3m1!4b1!4m6!3m5!1s0x48769baf36aa5015:0x87d0179261a0ef5!8m2!3d51.4553633!4d-0.9772994!16s%2Fg%2F11j33d6dvk?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4 mt-1 inline-block">Open in Google Maps</a>
=======
              <div className="font-display text-xl text-[hsl(var(--ink))]">142 Oxford Road</div>
              <div>Reading, Berkshire, RG1 7PJ</div>
              <a href="#" className="text-sm underline underline-offset-4 mt-1 inline-block">Open in Google Maps</a>
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="w-5 h-5 mt-1 text-[hsl(var(--pomegranate))] shrink-0" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
<<<<<<< HEAD
              <span className="text-[hsl(var(--ink))] font-medium">Every day</span><span>12:00 – 00:00</span>
=======
              <span className="text-[hsl(var(--ink))] font-medium">Tuesday – Thursday</span><span>12:00 – 22:00</span>
              <span className="text-[hsl(var(--ink))] font-medium">Friday – Saturday</span><span>12:00 – 23:30</span>
              <span className="text-[hsl(var(--ink))] font-medium">Sunday</span><span>13:00 – 21:00</span>
              <span className="text-[hsl(var(--ink))] font-medium">Monday</span><span className="italic">Closed</span>
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="w-5 h-5 mt-1 text-[hsl(var(--pomegranate))] shrink-0" />
            <div>
<<<<<<< HEAD
              <a href="tel:+441183842095" className="font-display text-xl text-[hsl(var(--ink))]">0118 327 7546</a>
=======
              <a href="tel:+441183842095" className="font-display text-xl text-[hsl(var(--ink))]">01183 842 095</a>
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
              <div className="text-sm">Bookings recommended Fri & Sat</div>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-4">
<<<<<<< HEAD
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[hsl(var(--ink-soft))] text-xs tracking-[0.3em] uppercase mr-1">Order delivery</span>
            <a href="https://www.ubereats.com/gb/store/afghan-flavours/wvoZ1GpsUsmtc1W7nQrxDg" target="_blank" rel="noopener noreferrer" aria-label="Order on Uber Eats" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-[#1a1a1a] transition active:scale-[0.98]">
              <Bike className="w-5 h-5" />
              Uber Eats
            </a>
            <a href="https://deliveroo.co.uk/menu/Reading/reading-central/naan-house-bakery-461-oxford-road" target="_blank" rel="noopener noreferrer" aria-label="Order on Deliveroo" className="inline-flex items-center gap-2 bg-[#00cccc] text-black px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-[#00b3b3] transition active:scale-[0.98]">
              <Bike className="w-5 h-5" />
              Deliveroo
            </a>
=======
          <div className="flex gap-3">
            <a href="tel:+441183842095" className="bg-[hsl(var(--ink))] text-[hsl(var(--paper))] px-6 py-3.5 text-sm tracking-wide hover:bg-[hsl(var(--pomegranate))] transition active:scale-[0.98]">Call to Book</a>
            <a href="#menu" className="border border-[hsl(var(--ink))] text-[hsl(var(--ink))] px-6 py-3.5 text-sm tracking-wide hover:bg-[hsl(var(--ink))] hover:text-[hsl(var(--paper))] transition active:scale-[0.98]">View Full Menu</a>
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
          </div>
        </div>
      </motion.div>

<<<<<<< HEAD
      <motion.div {...fadeUp} transition={{
      duration: 0.7,
      delay: 0.1
    }} className="relative">
=======
      <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
        <div className="relative aspect-[4/5] overflow-hidden bg-[hsl(var(--ink))]">
          <img src={HERO} alt="Inside Afghan Flavours Reading" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 ring-1 ring-inset ring-[hsl(var(--saffron))]/30" />
        </div>
        <div className="absolute -top-6 -left-6 bg-[hsl(var(--saffron))] text-[hsl(var(--ink))] px-5 py-4 max-w-[14rem] animate-drift">
<<<<<<< HEAD
          <p className="font-script text-2xl leading-none"><span style={{
            color: "rgb(255, 255, 255)"
          }}>"Like eating at&nbsp;<br />my grandmother's"</span></p>
          <p className="text-[10px] tracking-[0.3em] uppercase mt-2 opacity-70"><span style={{
            color: "rgb(255, 255, 255)"
          }}>Ali · 2025</span></p>
        </div>
      </motion.div>
    </div>
  </section>;
const Footer = () => <footer className="bg-[hsl(var(--ink))] text-[hsl(var(--paper))]/80 pt-16 pb-8">
    <div className="max-w-[90rem] mx-auto px-6 lg:px-10">
      <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-[hsl(var(--paper))]/10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <span className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[hsl(var(--pomegranate))] shrink-0">
              <img src={ICON} alt="Afghan Flavours emblem" className="w-full h-full object-cover" />
            </span>
            <div className="font-display text-3xl text-[hsl(var(--paper))]">Afghan Flavours</div>
          </div>
          <p className="font-script text-[hsl(var(--saffron))] text-2xl mt-3">tashakor — thank you</p>
          <p className="mt-4 max-w-sm text-sm font-light">A small family kitchen on the Oxford Road, cooking the food of Afghan tables since 2024.</p>
        </div>
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-[hsl(var(--saffron))] mb-3">Visit</div>
          <p className="text-sm leading-relaxed">40 Oxford Road<br />Reading, RG1 7PJ<br />01183 842 095</p>
=======
          <p className="font-script text-2xl leading-none">"Like eating at <br/>my grandmother's"</p>
          <p className="text-[10px] tracking-[0.3em] uppercase mt-2 opacity-70">Reading Post · 2023</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[hsl(var(--ink))] text-[hsl(var(--paper))]/80 pt-16 pb-8">
    <div className="max-w-[90rem] mx-auto px-6 lg:px-10">
      <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-[hsl(var(--paper))]/10">
        <div className="md:col-span-2">
          <div className="font-display text-3xl text-[hsl(var(--paper))]">Afghan Flavours</div>
          <p className="font-script text-[hsl(var(--saffron))] text-2xl mt-1">tashakor — thank you</p>
          <p className="mt-4 max-w-sm text-sm font-light">
            A small family kitchen on the Oxford Road, cooking the food of Afghan tables since 2014.
          </p>
        </div>
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-[hsl(var(--saffron))] mb-3">Visit</div>
          <p className="text-sm leading-relaxed">142 Oxford Road<br/>Reading, RG1 7PJ<br/>01183 842 095</p>
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
        </div>
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-[hsl(var(--saffron))] mb-3">Follow</div>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/AfghanFlavoursReading" target="_blank" rel="noopener noreferrer" className="w-10 h-10 grid place-items-center border border-[hsl(var(--paper))]/20 hover:bg-[hsl(var(--saffron))] hover:text-[hsl(var(--ink))] hover:border-[hsl(var(--saffron))] transition"><Instagram className="w-4 h-4" /></a>
            <a href="https://www.facebook.com/AfghanFlavoursReading" target="_blank" rel="noopener noreferrer" className="w-10 h-10 grid place-items-center border border-[hsl(var(--paper))]/20 hover:bg-[hsl(var(--saffron))] hover:text-[hsl(var(--ink))] hover:border-[hsl(var(--saffron))] transition"><Facebook className="w-4 h-4" /></a>
          </div>
          <p className="text-xs text-[hsl(var(--paper))]/50 mt-3">@AfghanFlavoursReading</p>
        </div>
      </div>
      <div className="pt-6 flex flex-wrap justify-between items-center gap-3 text-xs tracking-wide opacity-60">
        <span>© {new Date().getFullYear()} Afghan Flavours Ltd. All rights reserved.</span>
        <span>Reading, United Kingdom</span>
      </div>
    </div>
    <div className="h-1.5 pattern-stripe mt-8" />
<<<<<<< HEAD
  </footer>;
const HomePage = () => {
  return <main className="bg-[hsl(var(--bg))] text-[hsl(var(--ink))]">
=======
  </footer>
);

const HomePage = () => {
  return (
    <main className="bg-[hsl(var(--bg))] text-[hsl(var(--ink))]">
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
      <Hero />
      <Marquee />
      <Story />
      <Menu />
      <Visit />
      <Footer />
<<<<<<< HEAD
    </main>;
};
export default HomePage;
=======
    </main>
  );
};

export default HomePage;
>>>>>>> a43656aea43965f2cb4f1846f2b17fa2e0a8f5c4
