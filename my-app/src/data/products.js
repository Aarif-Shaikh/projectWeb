
export const products = [
  {
    id: 'shoe-1',
    name: 'Onitsuka Tiger',
    price: 729,
    description:
      "Experience the perfect blend of style and performance with Onitsuka Tiger shoes. These iconic sneakers, known for their signature tiger stripes, combine heritage-inspired design with modern comfort, making them ideal for casual wear, gym sessions, or urban adventures. Crafted with premium materials, they offer lightweight cushioning, flexibility, and breathability for all-day comfort.\n\n Designed for men, women, and young adults, Onitsuka Tiger sneakers deliver superior traction and durability on multiple surfaces. Their versatile design pairs effortlessly with streetwear, athleisure, and casual outfits, making them a must-have for anyone seeking trendy, high-quality sneakers that merge fashion with functionality.",

    media: {
      'Black & White': [
        { type: 'image', src: '/cabinMaterials/P7.jpg' },
        { type: 'image', src: '/cabinMaterials/P7.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P7.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P7.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P7.4.jpg' }
      ],
    },
    colors: [
      { name: 'Black & White', hex: '#5D6D7E', sizes: [6, 7, 8, 9, 10], soldSizes: [6]},
    ],
  },
  {
    id: 'shoe-2',
    name: 'Slip-On Loafer',
    price: 600,
    description: "Step into effortless style and comfort with these Pure White Slip-On Loafers. Designed for modern individuals who value convenience and elegance, these loafers are perfect for casual outings, office wear, or weekend getaways. The sleek all-white design adds a touch of sophistication to any outfit, while the slip-on style ensures easy wear and a snug, comfortable fit throughout the day.  \n\nCrafted with premium materials, these loafers provide lightweight cushioning, durability, and breathability for all-day comfort. Their versatile design pairs seamlessly with jeans, chinos, or shorts, making them a must-have for men and women seeking stylish, practical footwear that blends fashion with functionality."
    ,
    media: {
      'Pure White': [
        { type: 'image', src: '/cabinMaterials/P1.jpg' },
        { type: 'image', src: '/cabinMaterials/P1.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P1.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P1.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P1.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P1.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P1.6.jpg' }
      ],
      'Pure Black': [
        { type: 'image', src: '/cabinMaterials/P17.jpg' },
        { type: 'image', src: '/cabinMaterials/P17.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P17.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P17.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P17.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P17.5.jpg' }
      ],
    },
    colors: [
      { name: 'Pure White', hex: '#FFFFFF', sizes: [6, 7, 8, 9, 10], soldSizes: [6,9]},
      { name: 'Pure Black', hex: '#17202A', sizes: [6, 7, 8, 9, 10], soldSizes: [10]},
    ],
  },
  {
    id: 'shoe-3',
    name: 'Puma Ferrari',
    price: 699,
    description: "Unleash speed and style with the Puma Ferrari Edition Shoes, crafted for fans of performance and luxury alike. Inspired by the iconic Ferrari racing legacy, these sneakers combine cutting-edge Puma technology with a sleek, automotive-inspired design. Perfect for casual wear, track days, or adding a sporty edge to your everyday outfit, these shoes bring the thrill of the racetrack to your feet.\n\nEngineered with premium materials, the Puma Ferrari Edition Shoes offer exceptional comfort, lightweight support, and durable traction for all-day wear. With their bold red accents, Ferrari branding, and high-quality craftsmanship, these sneakers are a must-have for motorsport enthusiasts and style-conscious individuals seeking statement footwear that merges speed, precision, and fashion."
    ,
    media: {
      'Classic Blue': [
        { type: 'image', src: '/cabinMaterials/P2.jpg' },
        { type: 'image', src: '/cabinMaterials/P2.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P2.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P2.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P2.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P2.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P2.6.jpg' },
        { type: 'image', src: '/cabinMaterials/P2.7.jpg' }
      ],
      'Classic Red': [
        { type: 'image', src: '/cabinMaterials/P32.jpg' },
        { type: 'image', src: '/cabinMaterials/P32.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P32.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P32.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P32.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P32.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P32.6.jpg' }
      ],
    },
    colors: [
      {
        name: 'Classic Blue', hex: '#212121', sizes: [6, 7, 8, 9, 10],
        soldSizes: [6, 8]
      },
      { name: 'Classic Red', hex: '#34495E', sizes: [6, 7, 8, 9, 10], },
    ],
  },
  {
    id: 'shoe-4',
    name: 'Macpro',
    price: 649,
    description: "Elevate your running experience with Macpro Issi Running Shoes, designed for athletes and fitness enthusiasts who demand performance and style. These sneakers feature a sleek, modern design with a breathable mesh upper that ensures your feet stay cool and comfortable during long runs or intense workouts. The lightweight construction and responsive cushioning make every stride smooth and effortless.\n\nEngineered with high-grip rubber outsoles and ergonomic support, Macpro Issi Running Shoes deliver excellent traction and stability on various surfaces. Perfect for jogging, gym sessions, or casual wear, these versatile running shoes combine durability, comfort, and a sporty aesthetic, making them a must-have addition to any active lifestyle wardrobe."
    ,
    media: {
      'Navy Blue': [
        { type: 'image', src: '/cabinMaterials/P3.jpg' },
        { type: 'image', src: '/cabinMaterials/P3.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P3.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P3.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P3.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P3.5.jpg' }
      ],
    },
    colors: [
      { name: 'Navy Blue', hex: '#1F3A3D', sizes: [6, 7, 8, 9, 10], soldSizes: [6, 10]},
    ],
  },
  {
    id: 'shoe-5',
    name: 'Boston',
    price: 630,
    description: "Step out in timeless elegance with Full White Boston Casual Shoes, designed for those who appreciate minimalistic style and all-day comfort. The clean all-white design effortlessly complements any outfit, making these shoes perfect for casual outings, office wear, or weekend getaways. Their slip-on design ensures convenience, while providing a snug and comfortable fit for every occasion.\n\nCrafted with premium materials, Full White Boston Casual Shoes offer lightweight cushioning, breathability, and long-lasting durability. The versatile design pairs seamlessly with jeans, chinos, or shorts, making them an essential addition to any wardrobe. Elevate your everyday style with these classic, comfortable, and fashionable sneakers that combine simplicity with sophistication."
    ,
    media: {
      'Boston White': [
        { type: 'image', src: '/cabinMaterials/P4.jpg' },
        { type: 'image', src: '/cabinMaterials/P4.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P4.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P4.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P4.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P4.5.jpg' }
      ],
    },
    colors: [
      {
        name: 'Boston White', hex: '#85C1E9',
        sizes: [6, 7, 8, 9, 10],
        soldSizes: [6, 7, 8, 9]
      },
    ],
  },
  {
    id: 'shoe-6',
    name: 'Reebok Vector',
    price: 649,
    description: "Step into modern style and superior comfort with Reebok Vector Design Grey Black Shoes. Featuring a sleek grey and black colorway, these sneakers are perfect for casual wear, gym sessions, or urban adventures. The contemporary design highlights Reebok’s commitment to quality and performance, making them a versatile choice for men and women who value both fashion and functionality.  \n\nCrafted with durable materials, Reebok Vector Design Shoes provide lightweight cushioning, excellent support, and reliable traction on multiple surfaces. Their breathable upper ensures all-day comfort, while the stylish design pairs effortlessly with jeans, joggers, or casual outfits. Upgrade your footwear collection with these versatile and trendy sneakers that combine performance, comfort, and street-smart style."
    ,
    media: {
      'Grey Black': [
        { type: 'image', src: '/cabinMaterials/P5.jpg' },
        { type: 'image', src: '/cabinMaterials/P5.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P5.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P5.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P5.4.jpg' }
      ],
    },
    colors: [
      { name: 'Grey Black', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10],
    soldSizes: [6, 7] },
    ],
  },
  {
    id: 'shoe-7',
    name: 'Adidas Forum',
    price: 699,
    description: "Elevate your sneaker game with the Adidas Forum Sneakers, featuring the iconic three black stripes and a bold black Trefoil logo. Designed for those who appreciate classic style with a modern twist, these sneakers combine streetwear appeal with timeless athletic heritage. Perfect for casual outings, gym sessions, or adding a sporty edge to your everyday look.\n\nCrafted with premium materials, Adidas Forum Sneakers offer exceptional comfort, durability, and support. The cushioned midsole and sturdy outsole ensure all-day wearability, while the sleek black design pairs effortlessly with jeans, joggers, or shorts. Step confidently with these versatile sneakers that merge style, performance, and iconic Adidas heritage into one must-have footwear essential."
    ,
    media: {
      'White Trefoil': [
        { type: 'image', src: '/cabinMaterials/P6.jpg' },
        { type: 'image', src: '/cabinMaterials/P6.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P6.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P6.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P6.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P6.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P6.6.jpg' },
        { type: 'image', src: '/cabinMaterials/P6.7.jpg' }
      ],
      'Black Trefoil': [
        { type: 'image', src: '/cabinMaterials/P15.jpg' },
        { type: 'image', src: '/cabinMaterials/P15.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P15.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P15.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P15.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P15.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P15.6.jpg' },
        { type: 'image', src: '/cabinMaterials/P15.7.jpg' },
        { type: 'image', src: '/cabinMaterials/P15.8.jpg' }
      ],
    },
    colors: [
      { name: 'White Trefoil', hex: '#39FF14', sizes: [6, 7, 8, 9, 10], soldSizes: [6, 7, 8] },
      { name: 'Black Trefoil', hex: '#39FF14', sizes: [6, 7, 8, 9, 10], soldSizes: [10] },
    ],
  },
  {
    id: 'shoe-8',
    name: 'Nike Air',
    price: 699,
    description: "Step into style and comfort with the Nike Air More Uptempo Low Full White, a must-have sneaker for sneaker enthusiasts and fashion-forward individuals. Featuring the iconic oversized “AIR” lettering in a sleek all-white finish, these sneakers deliver a bold yet versatile look that complements any outfit. Crafted with premium leather and durable materials, the Nike Air More Uptempo Low ensures long-lasting comfort, support, and style, making it perfect for casual wear, streetwear fashion, or light sports activities.\n\nDesigned for everyday wear, the full white colorway enhances versatility, pairing effortlessly with jeans, joggers, shorts, or athleisure ensembles. Equipped with responsive Air-Sole cushioning, these sneakers offer superior impact absorption and all-day comfort. Ideal for men and women seeking a combination of fashion and functionality, the Nike Air More Uptempo Low Full White is a timeless addition to any sneaker collection, merging classic basketball-inspired design with modern urban style.",
    media: {
      'Uptempo White': [
        { type: 'image', src: '/cabinMaterials/P8.jpg' },
        { type: 'image', src: '/cabinMaterials/P8.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P8.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P8.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P8.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P8.5.jpg' }
      ],
    },
    colors: [
      { name: 'Uptempo White', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10],
    soldSizes: [8, 10] },
    ],
  },
  {
    id: 'shoe-9',
    name: 'Dewk Berries Auto Lace-Up',
    price: 699,
    description: "Elevate your sneaker game with the Adidas Forum Sneakers, featuring the iconic three black stripes and a bold black Trefoil logo. Designed for those who appreciate classic style with a modern twist, these sneakers combine streetwear appeal with timeless athletic heritage. Perfect for casual outings, gym sessions, or adding a sporty edge to your everyday look.\n\nCrafted with premium materials, Adidas Forum Sneakers offer exceptional comfort, durability, and support. The cushioned midsole and sturdy outsole ensure all-day wearability, while the sleek black design pairs effortlessly with jeans, joggers, or shorts. Step confidently with these versatile sneakers that merge style, performance, and iconic Adidas heritage into one must-have footwear essential."
    ,
    media: {
      'Yellow': [
        { type: 'image', src: '/cabinMaterials/P18.jpg' },
        { type: 'image', src: '/cabinMaterials/P18.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P18.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P18.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P18.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P18.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P18.6.jpg' }
      ],
      'White': [
        { type: 'image', src: '/cabinMaterials/P9.jpg' },
        { type: 'image', src: '/cabinMaterials/P9.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P9.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P9.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P9.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P9.5.jpg' }
      ],
    },
    colors: [
      { name: 'Yellow', hex: '#39FF14', sizes: [6, 7, 8, 9, 10], soldSizes: [6, 9]},
      {
        name: 'White', hex: '#39FF14', sizes: [6, 7, 8, 9, 10],
        soldSizes: [7, 8, 10]
      },
    ],
  },
  {
    id: 'shoe-10',
    name: 'Under Armour',
    price: 599,
    description: "Step up your performance and style with the Under Armour Grey Shoe, designed for athletes and casual wearers alike. Featuring a sleek grey colorway, these sneakers combine modern aesthetics with superior functionality. Built with lightweight and breathable materials, they ensure optimal comfort and ventilation for all-day wear, whether you're hitting the gym, running errands, or enjoying outdoor activities. The durable construction provides long-lasting support, making them a reliable choice for any lifestyle.\n\nEquipped with cushioned soles and responsive midsoles, the Under Armour Grey Shoe delivers excellent shock absorption and enhanced stability during movement. The versatile design pairs effortlessly with athletic wear, jeans, or casual outfits, making it suitable for both training sessions and everyday use. Perfect for men and women seeking a balance of style, comfort, and performance, these grey sneakers are an essential addition to any footwear collection.",
    media: {
      'Armour Grey': [
        { type: 'image', src: '/cabinMaterials/P10.jpg' },
        { type: 'image', src: '/cabinMaterials/P10.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P10.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P10.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P10.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P10.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P10.6.jpg' }
      ],
    },
    colors: [
      { name: 'Armour Grey', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10],
    soldSizes: [8]},
    ],
  },
  {
    id: 'shoe-11',
    name: 'Canvas',
    price: 649,
    description: "Step out in style with the JB Shoes Metallic Blue Canvas, designed for those who love bold, modern footwear. Made from high-quality canvas, these shoes are lightweight, breathable, and perfect for all-day comfort. The metallic blue finish gives a unique, eye-catching look that stands out in any crowd.\n\nFeaturing cushioned insoles and durable outsoles, these sneakers provide excellent support and traction for everyday wear. Whether you're heading out for casual outings, streetwear looks, or weekend adventures, the JB Shoes Metallic Blue Canvas blends fashion with functionality, making them a must-have addition to your footwear collection.",
    media: {
      'Metallic Blue': [
        { type: 'image', src: '/cabinMaterials/P12.jpg' },
        { type: 'image', src: '/cabinMaterials/P12.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P12.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P12.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P12.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P12.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P12.6.jpg' }
      ],
    },
    colors: [
      { name: 'Metallic Blue', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10], soldSizes: [7, 8, 10] },
    ],
  },
  {
    id: 'shoe-12',
    name: 'Macpro Money Kicz',
    price: 649,
    description: "Step up your sneaker game with the Money Kicz Grey Orange Shoes, combining bold style with everyday comfort. The sleek grey base is accented with vibrant orange highlights, creating a striking and energetic look that turns heads wherever you go.\n\nCrafted with premium materials, these sneakers offer lightweight cushioning, breathable support, and durable traction for all-day wear. Perfect for casual outings, gym sessions, or streetwear looks, the Money Kicz Grey Orange Shoes deliver both style and performance in one versatile package.",
    media: {
      'Orange grey': [
        { type: 'image', src: '/cabinMaterials/P13.jpg' },
        { type: 'image', src: '/cabinMaterials/P13.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P13.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P13.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P13.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P13.5.jpg' }
      ],
    },
    colors: [
      { name: 'Orange grey', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10], soldSizes: [9]},
    ],
  },
  {
    id: 'shoe-13',
    name: 'Fashion Auto Lace-Up',
    price: 699,
    description: "Turn on the style with the Fashion Auto Lace-Up Yellow Black Shoes, designed to make a bold statement wherever you go. The vibrant yellow paired with sleek black detailing creates a striking contrast that exudes confidence and modern streetwear vibes.\n\nBuilt with an innovative auto lace-up system, these sneakers ensure a secure, comfortable fit without the hassle of tying laces. Lightweight, durable, and versatile, they’re perfect for everyday wear, workouts, or adding a pop of color to your casual look.",
    media: {
      'Black Yellow': [
        { type: 'image', src: '/cabinMaterials/P11.jpg' },
        { type: 'image', src: '/cabinMaterials/P11.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P11.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P11.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P11.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P11.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P11.6.jpg' },
        { type: 'image', src: '/cabinMaterials/P11.7.jpg' }
      ],
      'Black White': [
        { type: 'image', src: '/cabinMaterials/P19.jpg' },
        { type: 'image', src: '/cabinMaterials/P19.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P19.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P19.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P19.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P19.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P19.6.jpg' }
      ],
    },
    colors: [
      { name: 'Black Yellow', hex: '#39FF14', sizes: [6, 7, 8, 9, 10], soldSizes: [6, 10] },
      { name: 'Black White', hex: '#39FF14', sizes: [6, 7, 8, 9, 10], soldSizes: [6] },
    ],
  },
  {
    id: 'shoe-14',
    name: 'Onitsuka Tiger Mexico 66',
    price: 729,
    description: "The Onitsuka Tiger Mexico 66 is an iconic sneaker that blends heritage design with everyday comfort. Featuring its signature blue and red stripes on a crisp white base, this shoe pays homage to vintage athletic style while staying relevant in modern streetwear culture. Crafted with premium leather and suede overlays, it offers both durability and a refined look that never goes out of style.\n\nLightweight, flexible, and versatile, the Mexico 66 is perfect for casual outings, travel, or daily wear. With its retro silhouette, cushioned insole, and timeless stripe design, it remains a favorite among sneaker enthusiasts who value comfort, quality, and heritage fashion. Step out in classic style with a sneaker that truly defines sneaker culture.",
    media: {
      'Blue Red': [
        { type: 'image', src: '/cabinMaterials/P21.jpg' },
        { type: 'image', src: '/cabinMaterials/P21.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P21.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P21.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P21.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P21.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P21.6.jpg' },
        { type: 'image', src: '/cabinMaterials/P21.7.jpg' }
      ],
      'Black Red': [
        { type: 'image', src: '/cabinMaterials/P16.jpg' },
        { type: 'image', src: '/cabinMaterials/P16.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P16.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P16.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P16.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P16.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P16.6.jpg' }
      ],
    },
    colors: [
      { name: 'Blue Red', hex: '#39FF14', sizes: [6, 7, 8, 9, 10],soldSizes: [6, 8] },
      { name: 'Black Red', hex: '#39FF14', sizes: [6, 7, 8, 9, 10],soldSizes: [6, 7, 10] },
    ],
  },
  {
    id: 'shoe-15',
    name: 'Ziplite Grip-2',
    price: 649,
    description: "Take your performance to the next level with the Ziplite Grip-2 Running Shoes, built for speed, comfort, and durability. Engineered with a breathable mesh upper, these running shoes keep your feet cool and dry, while the lightweight design ensures effortless movement. The high-traction Grip-2 outsole provides superior grip on every surface, making them perfect for road running, gym training, or casual wear.\n\nWith cushioned midsoles for shock absorption and a snug, supportive fit, the Ziplite Grip-2 delivers maximum comfort even on long runs. Sleek, sporty, and versatile, these shoes are designed for runners who want style and performance in every stride. Whether you’re chasing miles or chasing goals, the Ziplite Grip-2 has you covered.",
    media: {
      'Blue White': [
        { type: 'image', src: '/cabinMaterials/P29.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P29.jpg' },
        { type: 'image', src: '/cabinMaterials/P29.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P29.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P29.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P29.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P29.6.jpg' }
      ],
      'Full White': [
        { type: 'image', src: '/cabinMaterials/P28.jpg' },
        { type: 'image', src: '/cabinMaterials/P28.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P28.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P28.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P28.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P28.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P28.6.jpg' }
      ],
    },
    colors: [
      { name: 'Blue White', hex: '#39FF14', sizes: [6, 7, 8, 9, 10], soldSizes: [7, 8, 10]},
      { name: 'Full White', hex: '#39FF14', sizes: [6, 7, 8, 9, 10], soldSizes: [6, 8, 9, 10] },
    ],
  },
  {
    id: 'shoe-16',
    name: 'Macpro Pegasus 40',
    price: 649,
    description: "The Macpro Pegasus 40 is built for runners who demand comfort, durability, and speed. Featuring a lightweight breathable mesh upper, these shoes keep your feet cool and supported through every stride. The responsive cushioned midsole ensures superior shock absorption, reducing impact on joints and delivering all-day comfort. Its sleek, modern design makes it perfect not just for running, but also for casual wear and training sessions.\n\nEquipped with a high-grip outsole for excellent traction on multiple surfaces, the Pegasus 40 provides stability and performance whether you’re on the track, the road, or in the gym. Stylish, versatile, and performance-driven, the Macpro Pegasus 40 is designed to keep you moving confidently, mile after mile.",
    media: {
      'Metallic Black': [
        { type: 'image', src: '/cabinMaterials/P14.jpg' },
        { type: 'image', src: '/cabinMaterials/P14.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P14.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P14.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P14.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P14.5.jpg' }
      ],
    },
    colors: [
      { name: 'Metallic Black', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10],
    soldSizes: [8, 9], },
    ],
  },
  {
    id: 'shoe-17',
    name: 'Macpro Running',
    price: 649,
    description: "The Macpro Metallic White Running Sport Shoes combine sleek modern style with high-performance comfort. Designed with a glossy metallic white finish, these shoes stand out on the track, in the gym, or on the streets. The lightweight breathable upper keeps your feet cool, while the cushioned midsole ensures soft landings and powerful take-offs with every step.\n\nBuilt with a durable outsole that delivers strong grip and stability, these running sport shoes are perfect for intense workouts, long runs, or casual everyday wear. Stylish yet versatile, the Macpro Metallic White Running Shoes bring together fashion and functionality, making them an essential pick for athletes and trendsetters alike.",
    media: {
      'Metallic White': [
        { type: 'image', src: '/cabinMaterials/P33.jpg' },
        { type: 'image', src: '/cabinMaterials/P33.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P33.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P33.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P33.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P33.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P33.6.jpg' }
      ],
    },
    colors: [
      { name: 'Metallic White', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10],soldSizes: [6, 8, 10] },
    ],
  },
  {
    id: 'shoe-18',
    name: 'Marshal-4',
    price: 629,
    description: "Step into everyday comfort with the Adidas Black Walking Shoes, crafted for those who value style and performance in every stride. Featuring a sleek all-black design, these shoes pair effortlessly with any outfit while delivering the lightweight support you need for long walks. The breathable upper ensures ventilation, keeping your feet cool and fresh throughout the day.\n\nEquipped with a soft cushioned midsole for shock absorption and a durable outsole for reliable grip, these walking shoes provide lasting comfort whether you’re strolling through the city, commuting, or enjoying casual outings. Blending modern design with Adidas’ trusted quality, the Adidas Black Walking Shoes are your go-to for all-day wear.",
    media: {
      'Black': [
        { type: 'image', src: '/cabinMaterials/P31.jpg' },
        { type: 'image', src: '/cabinMaterials/P31.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P31.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P31.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P31.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P31.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P31.6.jpg' }
      ],
    },
    colors: [
      { name: 'Black', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10], },
    ],
  },
  {
    id: 'shoe-19',
    name: 'New Balance',
    price: 719,
    description: "New Balance Running Shoes offer the perfect blend of comfort, support, and performance for runners of all levels. Their lightweight, breathable upper keeps feet cool and dry, while advanced cushioning in the midsole absorbs impact and provides responsive energy return, helping you run farther with less fatigue. Ideal for daily training, jogging, or competitive running, these shoes ensure stability, support, and long-lasting durability.\n\nWith a durable rubber outsole and superior traction, New Balance Running Shoes provide reliable grip on any surface. The reinforced heel and sleek design enhance stability and style, making them suitable for both athletic and everyday wear. Whether you’re a serious runner or enjoy casual runs, these shoes deliver unmatched comfort, performance, and modern design.",
    media: {
      'Feather White': [
        { type: 'image', src: '/cabinMaterials/P25.jpg' },
        { type: 'image', src: '/cabinMaterials/P25.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P25.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P25.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P25.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P25.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P25.6.jpg' },
        { type: 'image', src: '/cabinMaterials/P25.7.jpg' },
        { type: 'image', src: '/cabinMaterials/P25.8.jpg' }
      ],
    },
    colors: [
      { name: 'Feather White', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10], soldSizes: [6]},
    ],
  },
  {
    id: 'shoe-20',
    name: 'Adidas',
    price: 699,
    description: "Adidas Black Sports Shoes combine sleek style with high-performance functionality, designed for athletes and active individuals. Featuring a breathable mesh upper, these shoes keep your feet cool and comfortable during intense workouts or daily training sessions. The cushioned midsole provides superior shock absorption and energy return, ensuring all-day comfort while enhancing your athletic performance.\n\nThe durable rubber outsole delivers excellent grip and traction on a variety of surfaces, while the reinforced heel adds stability during quick movements. With a modern all-black design, Adidas Black Sports Shoes not only perform well but also complement any sporty or casual outfit. Perfect for running, gym workouts, or casual wear, these shoes offer a balance of style, support, and durability.",
    media: {
      'Red Black': [
        { type: 'image', src: '/cabinMaterials/P26.jpg' },
        { type: 'image', src: '/cabinMaterials/P26.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P26.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P26.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P26.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P26.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P26.6.jpg' }
      ],
    },
    colors: [
      { name: 'Red Black', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10],
    soldSizes: [6, 7, 8, 9] },
    ],
  },
  {
    id: 'shoe-21',
    name: 'ASICS Exite-11',
    price: 729,
    description: "Asics Excite 11 Shoes are designed for runners seeking comfort, support, and style in every stride. Featuring a breathable mesh upper, these shoes provide excellent ventilation to keep your feet cool during workouts or long runs. The cushioned midsole delivers responsive shock absorption, ensuring smooth and comfortable movement while reducing fatigue.\n\nThe durable outsole offers reliable traction on multiple surfaces, making them suitable for both indoor and outdoor activities. With a modern, sleek design, Asics Excite 11 Shoes combine performance and aesthetics, making them perfect for running, training, or casual wear. Their lightweight construction and supportive fit help you stay agile and confident in every step.",
    media: {
      'Gel White': [
        { type: 'image', src: '/cabinMaterials/P24.jpg' },
        { type: 'image', src: '/cabinMaterials/P24.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P24.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P24.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P24.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P24.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P24.6.jpg' }
      ],
    },
    colors: [
      { name: 'Gel White', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10],
    soldSizes: [6, 9, 10] },
    ],
  },
  {
    id: 'shoe-22',
    name: 'Reebok Instapump Fury',
    price: 729,
    description: "Reebok Instapump Fury Shoes are a bold and innovative choice for those who value style and performance. Featuring a unique laceless design with Pump technology, these shoes allow for a personalized, secure fit that adapts to your foot shape. The lightweight and breathable upper ensures comfort during long wear, while the cushioned midsole delivers responsive support for every step.\n\nWith a durable rubber outsole, the Instapump Fury provides excellent traction on multiple surfaces, making it ideal for both casual wear and active lifestyles. Their futuristic design and vibrant colorways make them a standout statement piece, blending cutting-edge technology with modern streetwear style.",
    media: {
      'Fury Red': [
        { type: 'image', src: '/cabinMaterials/P27.jpg' },
        { type: 'image', src: '/cabinMaterials/P27.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P27.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P27.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P27.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P27.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P27.6.jpg' }
      ],
    },
    colors: [
      { name: 'Fury Red', hex: '#FF5733',
    sizes: [6, 7, 8, 9, 10], soldSizes: [6, 8, 9]},
    ],
  },
  {
    id: 'shoe-23',
    name: 'ASICS Gel-Venture 9',
    price: 699,
    description: "Asics Gel Venture 9 Shoes are designed for trail runners and outdoor enthusiasts who need reliable performance and comfort. Featuring durable synthetic and mesh uppers, these shoes provide breathability while offering robust protection against rough terrains. The signature GEL cushioning in the heel ensures shock absorption, making every step smooth and reducing impact on your joints.\n\nEquipped with a sturdy rubber outsole and aggressive tread pattern, the Gel Venture 9 delivers excellent traction on wet, rocky, or uneven surfaces. Lightweight yet supportive, these shoes are perfect for daily runs, hiking, or casual outdoor adventures, combining functional design with a sleek, versatile style that suits both sports and everyday wear.",
    media: {
      'Venture Grey': [
        { type: 'image', src: '/cabinMaterials/P22.jpg' },
        { type: 'image', src: '/cabinMaterials/P22.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P22.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P22.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P22.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P22.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P22.6.jpg' }
      ],
    },
    colors: [
      { name: 'Venture Grey', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10], soldSizes: [6]},
    ],
  },
  {
    id: 'shoe-24',
    name: 'Nike Zoom Structure',
    price: 699,
    description: "Nike Zoom Structure Running Shoes are engineered for runners seeking stability, support, and responsive performance. Featuring a lightweight mesh upper, these shoes provide breathability while maintaining a secure fit, keeping your feet cool and comfortable during long runs. The Zoom Air cushioning in the forefoot delivers a responsive, springy feel, helping you maintain momentum with every stride.\n\nWith a dual-density midsole and supportive overlays, the Nike Zoom Structure ensures superior stability for overpronators, reducing the risk of injury while enhancing running efficiency. The durable rubber outsole offers excellent traction on various surfaces, making these shoes perfect for road running, treadmill sessions, or casual daily wear. Combining performance technology with sleek, modern design, they are ideal for both serious runners and fitness enthusiasts.",
    media: {
      'Neon White': [
        { type: 'image', src: '/cabinMaterials/P23.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P23.jpg' },
        { type: 'image', src: '/cabinMaterials/P23.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P23.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P23.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P23.5.jpg' }
      ],
    },
    colors: [
      { name: 'Neon White', hex: '#39FF14',
    sizes: [6, 7, 8, 9, 10],
    soldSizes: [6, 7, 10] },
    ],
  },
  {
    id: 'shoe-25',
    name: 'Canvas',
    price: 649,
    description: "Canvas Matt Black Shoes offer a perfect blend of style, comfort, and versatility. Crafted with durable canvas material, these shoes provide lightweight wear and breathability, making them ideal for everyday use. The sleek matt black finish gives a modern, minimalist look that pairs effortlessly with casual or semi-formal outfits.\n\nDesigned with a cushioned insole and flexible rubber outsole, these shoes ensure all-day comfort and reliable grip on various surfaces. Their low-profile silhouette and classic lace-up design make them a timeless wardrobe staple, suitable for work, college, or casual outings. Durable, stylish, and easy to maintain, Canvas Matt Black Shoes are a must-have for any footwear collection.",
    media: {
      'Matt Black': [
        { type: 'image', src: '/cabinMaterials/P30.jpg' },
        { type: 'image', src: '/cabinMaterials/P30.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P30.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P30.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P30.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P30.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P30.6.jpg' }
      ],
    },
    colors: [
      { name: 'Matt Black', hex: '#000000',
    sizes: [6, 7, 8, 9, 10], },
    ],
  },
  {
    id: 'shoe-26',
    name: 'Macpro Welco',
    price: 699,
    description: "Macpro Welco Shoes combine durability and style for everyday wear. Crafted with high-quality materials, these shoes provide long-lasting comfort and support, making them ideal for work, casual outings, or daily use. Their sleek design and versatile color options ensure they pair well with a variety of outfits.\n\nFeaturing a cushioned insole and sturdy rubber outsole, Macpro Welco Shoes offer excellent grip and all-day comfort. Lightweight yet durable, they are perfect for those who value both functionality and modern style. Practical, comfortable, and stylish, Macpro Welco Shoes are a reliable choice for any footwear collection.",
    media: {
      'Welco Purple': [
        { type: 'image', src: '/cabinMaterials/P20.jpg' },
        { type: 'image', src: '/cabinMaterials/P20.1.jpg' },
        { type: 'image', src: '/cabinMaterials/P20.2.jpg' },
        { type: 'image', src: '/cabinMaterials/P20.3.jpg' },
        { type: 'image', src: '/cabinMaterials/P20.4.jpg' },
        { type: 'image', src: '/cabinMaterials/P20.5.jpg' },
        { type: 'image', src: '/cabinMaterials/P20.6.jpg' },
      ],
    },
    colors: [
      { name: 'Welco Purple', hex: '#6A0DAD',
    sizes: [6, 7, 8, 9, 10],
    soldSizes: [6, 7, 8, 9] },
    ],
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(currentProductId) {
  return products.filter((p) => p.id !== currentProductId).slice(0, 3);
}