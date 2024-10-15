const items = [
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx2msror0843sk82vfqrzdns_6216274__Rcs2uwXO4',
    name: 'Audemars Piguet Royal Oak Titanium Green Dial Tourbillon 41mm (Limited to 50 pieces)',
    price: 500000,
    description:
      "Introducing the Audemars Piguet Titanium Green Dial Tourbillon, a limited edition masterpiece restricted to only 50 pieces. This extraordinary timepiece features a 41mm titanium case paired with a stunning green dial, highlighting the intricate tourbillon mechanism. The manual-winding Calibre 2948 ensures exceptional precision and performance. Combining avant-garde design with impeccable craftsmanship, this limited edition watch is a true collector's item, perfect for those who seek exclusivity and superior horological artistry.",
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1kbb14x0000n9najv8hlgt8_6124122__JwVdKxUp_n',
    name: '2023 Aston Martin DBS 770 Ultimate',
    price: 498000,
    description:
      'The 2023 Aston Martin DBS 770 Ultimate is a high-performance grand tourer, delivering 759 horsepower from a twin-turbocharged 5.2-liter V12 engine. As the final edition of the DBS lineup, it features enhanced aerodynamics, upgraded suspension, and an aggressive design, making it the most powerful DBS ever. The 770 Ultimate comes with exclusive styling elements, including carbon fiber accents and bespoke interior details, providing both speed and luxury. Limited in production, it offers a truly exclusive driving experience for collectors and enthusiasts.',
    brand: 'Aston Martin',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1katjuu0000ycckqqx8njxh_7019720__SbmXzZlR2',
    name: '2024 Rolls-Royce Cullinan AWD',
    price: 495000,
    description:
      'The 2024 Rolls-Royce Cullinan AWD is a pinnacle of luxury in the SUV market, combining opulence with rugged capability. Powered by a 6.75-liter V12 engine producing 563 horsepower, it offers a smooth, powerful drive with all-wheel drive for enhanced traction. The Cullinan features a spacious, ultra-luxurious interior, crafted with premium materials and state-of-the-art technology, ensuring comfort and exclusivity. Known for its serene ride quality and commanding road presence, the Cullinan is the ultimate expression of luxury and refinement in an SUV.',
    brand: 'Rolls-Royce',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxdgwd9x0c2dhhki71g1vni6_9129512__8hmaDvS5P',
    name: 'Richard Mille RM72-01 Black Ceramic and Rose Gold',
    price: 492000,
    description:
      "The Richard Mille RM72-01 Black Ceramic and Rose Gold is an exquisite timepiece that marries cutting-edge technology with luxurious design. Featuring a striking combination of black ceramic and rose gold, this watch exudes both modernity and elegance. The RM72-01 showcases a skeletonized dial, revealing the intricate and innovative mechanics that define Richard Mille's craftsmanship. Equipped with a flyback chronograph and high-performance movement, this watch offers exceptional functionality and style. Ideal for those who appreciate avant-garde design and superior horology, the RM72-01 Black Ceramic and Rose Gold is a standout addition to any prestigious watch collection.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1kbsomn0001n9nag8r1ff4d_6398406__w1T9Kq9Xg',
    name: '2022 Mercedes-Benz Custom Luxury Sprinter',
    price: 489000,
    description:
      'This luxurious 2022 Mercedes-Benz Sprinter Passenger Van, in sleek Jet Black with a Macchiato Beige and VIP Beige Nappa leather interior, offers both style and comfort. Fully equipped with advanced features such as heated and electrically adjustable seats, a 360-degree parking camera, and blind spot assist, it ensures a premium driving experience. The van’s interior boasts a handcrafted Alcantara finish, ambient lighting, and a dual-layer starlight ceiling. Entertainment is top-notch with a 43” 4K Smart TV, Sony PlayStation 5, and a 10.2” infotainment system. Additional amenities include a Nespresso machine, champagne flutes, and custom luxury storage solutions. Optional packages add even more value with features like B&O surround sound, a chrome AMG-style body kit, and exclusive Nappa leather trims. Perfect for those seeking ultimate comfort and refinement on the road.',
    brand: 'Mercedes-Benz',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxp08oun0kyjqn4i87tgnxei_8777160__a3m5SQIBs',
    name: '2023 Porsche 911 GT3 RS',
    price: 486000,
    description:
      'The 2023 Porsche 911 GT3 RS is a pinnacle of automotive engineering and performance. This high-performance sports car is powered by a naturally aspirated 4.0-liter flat-six engine, delivering an exhilarating 518 horsepower. Designed for the track yet equally at home on the road, the GT3 RS features advanced aerodynamics, including a large rear wing and aggressive front splitter, to enhance downforce and stability at high speeds.\n\nThe lightweight construction, achieved through extensive use of carbon fiber and other lightweight materials, ensures exceptional handling and agility. Inside, the driver-focused cockpit is equipped with the latest technology and premium materials, providing both comfort and functionality. The 2023 Porsche 911 GT3 RS offers an unparalleled driving experience, combining raw power, precision engineering, and iconic design for those who demand the very best in high-performance motoring.',
    brand: 'Porsche',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm188ox9p00005y8kuf44ewbo_2522270__lqV3foODS',
    name: '2021 Rolls Royce Black Badge Cullinan',
    price: 485000,
    description:
      'The 2021 Rolls-Royce Black Badge Cullinan is the ultimate expression of luxury and power in an SUV. It features a 6.75-liter V12 engine delivering 600 horsepower, offering both exhilarating performance and unmatched refinement. The Black Badge treatment gives the Cullinan a more aggressive aesthetic, with darkened chrome accents, custom 22-inch wheels, and a bespoke interior that exudes exclusivity. With advanced technology, plush materials, and a commanding presence, the Black Badge Cullinan is tailored for those seeking a bold, opulent driving experience.',
    brand: 'Rolls Royce',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1kcd8cg0002n9na4a7smt9q_8926853__z0s60Ah1n',
    name: '2018 Lamborghini Aventador S Roadster',
    price: 484000,
    description:
      'The 2018 Lamborghini Aventador is the epitome of high-performance luxury, combining aggressive styling with cutting-edge technology. Powered by a naturally aspirated 6.5-liter V12 engine, it delivers an exhilarating 730 horsepower, rocketing from 0 to 60 mph in just under 3 seconds. The Aventador’s aerodynamic design is complemented by sharp, angular lines, and signature scissor doors, offering an unmistakable presence. Inside, it features premium materials like leather and Alcantara, with advanced tech including a TFT digital dashboard and infotainment system. With a top speed of over 217 mph, the 2018 Aventador is a masterpiece of engineering and design, offering an unmatched supercar experience.',
    brand: 'Lamborghini',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ka1bpo0002bdcv3oek6ilm_6149107__XsbJ8KHQcF',
    name: '2024 Mercedes-Benz G700 Brabus',
    price: 475000,
    description:
      'The 2024 Mercedes-Benz G700 Brabus is a high-performance luxury SUV, extensively customized by Brabus to deliver superior power and exclusivity. Powered by a twin-turbocharged V8 engine, it produces 700 horsepower and features enhanced aerodynamics, including a more aggressive body kit. The interior is upgraded with premium materials, custom stitching, and advanced technology, offering a bespoke driving experience. With its off-road capabilities and Brabus-engineered performance enhancements, the G700 is a perfect blend of ruggedness, luxury, and extreme power.',
    brand: 'Mercedes-Benz x Brabus',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm189ikvw0000ju5sj21vid0z_6723387__lKcYG41kJ',
    name: 'Richard Mille Yohan Blake RM61-01',
    price: 475000,
    description:
      "The Richard Mille Yohan Blake RM 61-01 is a high-performance watch crafted in collaboration with sprinter Yohan Blake. Known for its lightweight and durable design, it features a tonneau-shaped case made from advanced materials such as TZP ceramic and NTPT carbon. The skeletonized movement is engineered for precision and resilience, embodying both athleticism and innovation. With its bold aesthetics and ergonomic fit, the RM 61-01 is designed for optimal comfort and performance, making it a standout piece in Richard Mille's collection.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1kcq3dv0003n9naye85qbxy_9468240__hcfyxCAWc',
    name: '2021 Ferrari F8 Spider',
    price: 472500,
    description:
      'The 2021 Ferrari F8 Spider is a stunning convertible supercar that blends breathtaking performance with open-air driving pleasure. Powered by a 3.9-liter twin-turbo V8 engine, it produces an astonishing 710 horsepower, propelling the car from 0 to 60 mph in just 2.9 seconds. The F8 Spider’s retractable hardtop roof allows for a seamless transformation from coupe to convertible in just 14 seconds, even while driving at speeds up to 28 mph. With sleek, aerodynamic styling, the car also features advanced technologies like a digital driver’s display, a high-resolution infotainment system, and cutting-edge driving dynamics. Offering the perfect balance between power and elegance, the 2021 Ferrari F8 Spider delivers a thrilling and refined driving experience.',
    brand: 'Ferrari F8 Spider',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm18gmp6d000010it5zjc9lw9_8061114__ujECk6qYI',
    name: '2019 Ferrari 812 Superfast GTS',
    price: 449000,
    description:
      "The Ferrari 812 Superfast GTS is a powerful and luxurious convertible, featuring a 6.5-liter V12 engine that produces 789 horsepower. Known for its incredible speed and performance, it accelerates from 0 to 60 mph in just under 3 seconds and has a top speed exceeding 211 mph. The GTS retains the sleek design of the 812 Superfast, with the added excitement of open-air driving. Its combination of raw power, agility, and Italian craftsmanship makes it a standout in Ferrari's lineup of high-performance grand tourers.",
    brand: 'Ferrari',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19idkyf0000wu0za5b2pg2g_3779682__YhXde2ijY',
    name: 'Patek Philippe Grand Complications Celestial Rose Gold 44mm',
    price: 447000,
    description:
      "The Patek Philippe Grand Complications Celestial is a masterpiece of haute horology, showcasing the brand's intricate craftsmanship. This timepiece features an impressive celestial chart that tracks the stars’ movement across the night sky from the northern hemisphere. Housed in a luxurious case, typically crafted in platinum or gold, it also includes complications such as a moon phase display and sidereal time. With its stunning dial and highly complicated movement, the Celestial is a true blend of artistry and technical innovation, embodying Patek Philippe's commitment to excellence.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1l4gyc40000guvu6zmyuwed_7518448__UovahJB65',
    name: '2020 Mercedes-Benz Sprinter B6 Armored Limousine Bulletproof Car Luxury Van',
    price: 440000,
    description:
      'The 2020 Mercedes-Benz Sprinter B6 Armored Limousine is the ultimate blend of luxury, safety, and performance. Built to B6-level ballistic protection standards, this bulletproof van ensures maximum security while maintaining the highest levels of comfort and style. The meticulously designed interior features premium leather seating, ambient lighting, and cutting-edge technology, including an advanced infotainment system, smart TV displays, and a premium sound system. With its reinforced structure, armored glass, and discrete design, this vehicle provides an unparalleled sense of security without compromising on sophistication. Perfect for VIP transport or executive travel, the Sprinter B6 is crafted for those who prioritize safety and luxury in every journey.',
    brand: 'Mercedes-Benz',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19imol30000bnc9dypnk78d_3265384__mH2bw7xQa',
    name: '2025 Lamborghini Temerario',
    price: 440000,
    description:
      "The Lamborghini Temerario is an upcoming 2025 supercar rumored to push the boundaries of design and performance, continuing Lamborghini's tradition of innovation. While official details remain limited, it's expected to feature a hybrid powertrain, combining electrification with Lamborghini’s signature powerful engines. The Temerario is anticipated to offer cutting-edge aerodynamics, advanced materials, and a futuristic design, reflecting Lamborghini's commitment to high-performance vehicles with bold aesthetics. ",
    brand: 'Lamborghini',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx9tgq5q0eznqr3mebbb3gxh_2100221__XvBkDYc-i',
    name: 'Richard Mille RM67-02 Alexis Pinturault',
    price: 439200,
    description:
      "The Richard Mille RM67-02 Alexis Pinturault is an exquisite timepiece, crafted in collaboration with the world-class alpine skier. Featuring a sleek white Carbon NTPT case, this watch embodies both strength and elegance. The RM67-02 is fitted with an elastic strap, ensuring maximum comfort and flexibility for any activity. The skeletonized dial offers a view into the intricate and advanced mechanics, reflecting Richard Mille's commitment to precision and innovation. Perfect for those who appreciate cutting-edge design and high-performance engineering, the RM67-02 Alexis Pinturault is a standout piece in any luxury watch collection.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1l22ca80002m98xzfn0bdzc_1203571__z3zkWDrcH',
    name: '2023 Land Rover Range Rover Vogue Autobiography',
    price: 439000,
    description:
      'The 2023 Land Rover Range Rover Vogue Autobiography is a luxury SUV that combines refined elegance with advanced performance. Powered by a range of engine options, including a powerful V8, it offers smooth, effortless driving dynamics. The Autobiography trim is known for its opulent interior, featuring premium leather, wood trim, and cutting-edge technology, including an advanced infotainment system and a host of driver-assistance features. With its commanding road presence and off-road capability, the Vogue Autobiography delivers a perfect balance of luxury and versatility.',
    brand: 'Land Rover',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19j9vnw00023w3ki0jua5o2_8900850__jbYF18L4h',
    name: '2021 Lamborghini Huracan',
    price: 430000,
    description:
      "The 2021 Lamborghini Huracán is a high-performance supercar powered by a 5.2-liter V10 engine, delivering up to 640 horsepower. It features a sleek, aerodynamic design and advanced driving dynamics, offering impressive acceleration with 0 to 60 mph achieved in just around 2.9 seconds. The Huracán offers both rear-wheel and all-wheel drive variants, providing exceptional handling and agility. With cutting-edge technology, a luxurious interior, and a striking exterior, the 2021 Huracán embodies Lamborghini's legacy of speed and style.",
    brand: 'Lamborghini',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm184ut2m000011y3wenac5c6_7419281__J_U5IT5Ty',
    name: 'Audemars Piguet Royal Oak Tourbillon 41mm',
    price: 429200,
    description:
      'The Audemars Piguet Royal Oak Tourbillon 41mm is a stunning luxury timepiece that combines precision engineering with iconic design. It features a 41mm case typically crafted from premium materials such as stainless steel, platinum, or 18K gold. The watch is powered by a tourbillon movement, a hallmark of haute horlogerie, visible through the skeletonized or detailed dial. With its signature octagonal bezel and integrated bracelet, the Royal Oak Tourbillon is a statement of craftsmanship and sophistication, ideal for collectors and enthusiasts of high-end watches.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1l2hwv300007qc8jwtyayxl_3975053__NSy0nbBuz',
    name: '2023 Mercedes-Benz Custom Luxury Sprinter',
    price: 427200,
    description:
      'This luxurious van combines elegance and functionality with its Obsidian Black Metallic exterior and premium black-on-black Nappa leather and Alcantara interior. The vehicle is equipped with comfort and convenience features like heated seats, lumbar support, a 360-degree camera, and a high-performance air conditioning system. The custom rear interior by FariCars includes an Alcantara power partition, LED starlight ceiling, handcrafted wood veneer, and dual-layer ambient lighting, providing a first-class experience. Advanced technology options include a 10.2” touchscreen infotainment system, dual 4K smart TVs, Apple CarPlay, and a Sony PlayStation 5. Additional amenities such as a Nespresso coffee machine, refrigerator, and premium surround sound system ensure maximum comfort on the road. Optional packages include a custom 20” wheel set, body kit, and an integrated internet package for seamless connectivity. Ideal for those who value luxury, performance, and style.',
    brand: 'Mercedes-Benz',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1cifatz0000ja0irnca17tp_3316671__NR355H1IB1',
    name: 'Audemars Piguet Royal Oak 41 Perpetual Calendar Ultra-Thin Titanium 41mm',
    price: 420000,
    description:
      'The Audemars Piguet Royal Oak Perpetual Calendar Ultra-Thin 41mm in Titanium with a Blue Dial and Platinum Bezel is a masterpiece of haute horology. It features a perpetual calendar that tracks day, date, month, and leap years, all within an ultra-thin 41mm titanium case. The bezel, crafted from platinum, adds a luxurious touch, while the blue "Tapisserie" dial enhances its refined aesthetic. Powered by the Calibre 5133 automatic movement, this timepiece combines cutting-edge engineering with a sleek, lightweight design. Perfect for collectors who appreciate both innovation and elegance.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxdhp2js01h613lw1e7qf4xh_6767097__NWNgmWY5C',
    name: 'Richard Mille RM35-02 Black Carbon',
    price: 418800,
    description:
      "The Richard Mille RM35-02 Black Carbon is a masterpiece of modern watchmaking, combining advanced materials with exceptional design. Featuring a robust Black Carbon TPT® case, this timepiece is lightweight yet incredibly durable. The RM35-02 showcases a skeletonized dial, revealing the intricate and sophisticated mechanics that are a hallmark of Richard Mille's craftsmanship. With a self-winding movement and an innovative design, this watch offers both functionality and style. Ideal for those who value cutting-edge technology and bold aesthetics, the RM35-02 Black Carbon is a standout piece in any luxury watch collection.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19klllo0000kk8kijjogbyr_6350638__rPwiSlcNP',
    name: 'Audemars Piguet Royal Oak Flying Tourbillion Titanium 41mm',
    price: 407000,
    description:
      "The Audemars Piguet Royal Oak Flying Tourbillon Titanium is a stunning example of luxury watchmaking. Crafted from lightweight titanium, this timepiece showcases the iconic Royal Oak design with its signature octagonal bezel. The highlight of the watch is the flying tourbillon, visible through the open-worked or detailed dial, which demonstrates Audemars Piguet's mastery of horological complications. With exceptional craftsmanship, precision, and a sleek modern aesthetic, this watch is a true masterpiece, perfect for collectors seeking both technical brilliance and elegant design.",
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx9soj1i0hi0vt0rajgrvcih_4011830__FvYtG4tRl',
    name: 'Richard Mille RM055 White Ceramic Bubba Watson',
    price: 403259,
    description:
      'The Richard Mille RM055 White Ceramic Bubba Watson is a bold and distinctive timepiece, designed in collaboration with the renowned golfer. Featuring a sleek white ceramic case, this watch combines durability with contemporary style. The RM055 showcases a skeletonized dial, revealing the intricate and advanced mechanics that Richard Mille is famous for. Lightweight and robust, this timepiece is perfect for both high-performance sports and sophisticated settings. The RM055 White Ceramic Bubba Watson is ideal for those who value innovation, precision, and standout design in a luxury watch.',
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19kx6ac000110er1s9xmqd9_4667578__U-WRbYUhX',
    name: 'Audemars Piguet Royal Oak Offshore Tourbillon Chronograph 45mm',
    price: 400000,
    description:
      "The Audemars Piguet Royal Oak Offshore Tourbillon Chronograph is a striking combination of technical mastery and bold design. Featuring a large case—typically 44mm or more—crafted from materials such as titanium, ceramic, or gold, this timepiece houses a tourbillon for precision and a chronograph for measuring elapsed time. The open-worked or detailed dial showcases the complexity of its movement, and the robust, sporty design of the Offshore collection adds a modern edge. It's perfect for collectors seeking high performance and luxury in one watch.",
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1188ge40000e9k76f4plpns_5524768__FcxXcaHw4',
    name: '2008 Lamborghini Murciélago LP640 Roadster',
    price: 400000,
    description:
      'The 2008 Lamborghini Murciélago LP640 Roadster is a high-performance supercar powered by a 6.5-liter V12 engine, producing 640 horsepower and capable of reaching a top speed of 211 mph. Its striking design, featuring angular lines, scissor doors, and a low stance, made it an instant icon. This model gained special recognition as Bruce Wayne’s car in *The Dark Knight*, solidifying its connection to the Batman universe. The name "Murciélago," meaning "bat" in Spanish, further enhances the symbolic link to the Dark Knight. Current prices for this model range from $259,900 to $365,900, depending on condition and mileage.',
    brand: 'Lamborghini',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19l75a7000512vpzdkfoqyt_4845261__vsWsLIs0T',
    name: 'Audemars Piguet Royal Oak 39 Flying Tourbillion Extra Thin 39mm',
    price: 399000,
    description:
      'The Audemars Piguet Royal Oak 39mm Flying Tourbillon Extra-Thin in stainless steel is an exquisite, ultra-slim timepiece featuring a vibrant blue "Tapisserie" dial. This watch showcases a flying tourbillon at 6 o’clock, enhancing its elegance and complexity. Crafted in stainless steel, its slim profile ensures comfort while maintaining the iconic Royal Oak octagonal bezel design. Powered by the automatic Calibre 2950 movement, it combines technical mastery with refined aesthetics, making it a standout piece for collectors of luxury horology.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx9sykas030tqr3mxpq5pv8l_7908505__afo5mVDxh',
    name: 'Richard Mille RM67-02 Sebastien Ogier',
    price: 398400,
    description:
      "The Richard Mille RM67-02 Sebastien Ogier is an extraordinary timepiece, designed in collaboration with the world-champion rally driver. Featuring a lightweight and durable carbon TPT® case, this watch combines high-performance engineering with modern aesthetics. The RM67-02 showcases a skeletonized dial, offering a glimpse into its intricate and advanced mechanics. Its vibrant color scheme reflects Ogier's dynamic personality and racing spirit. Perfect for those who appreciate cutting-edge technology and unique design, the RM67-02 Sebastien Ogier is a standout piece in the Richard Mille collection.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19kq5uz000010er7rqlvlss_9646696__OhfPKli92',
    name: 'Audemars Piguet Royal Oak Perpetual Calendar 41mm',
    price: 398000,
    description:
      'The Audemars Piguet Royal Oak Perpetual Calendar 41mm is a masterful blend of luxury and innovation. Crafted in the iconic Royal Oak design, it features a 41mm case made from premium materials such as stainless steel, titanium, or gold. The watch showcases a perpetual calendar, displaying the day, date, month, and moon phases, automatically adjusting for leap years. Powered by the self-winding Calibre 5134 movement, it ensures precision and reliability. This timepiece is a perfect fusion of elegance, functionality, and craftsmanship.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19l15ha000210eroi3rovni_4924512__7Vp6bskCs',
    name: 'Audemars Piguet Royal Oak Minute Repeater Supersonnerie 42mm',
    price: 398000,
    description:
      "The Audemars Piguet Royal Oak Minute Repeater Supersonnerie is a groundbreaking timepiece that combines traditional watchmaking with modern acoustics. Featuring the iconic Royal Oak design, this watch is equipped with Audemars Piguet's Supersonnerie technology, enhancing the sound quality and clarity of the minute repeater complication. The case is typically crafted from titanium or precious metals, and the dial is elegantly designed to showcase the complexity of its mechanism. This limited-edition timepiece is a perfect blend of technical innovation and luxury craftsmanship.",
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19ls6b400008johxkr8l2s3_4749880___topSTmOe',
    name: 'Patek Philippe Nautilus Sunburst Olive-Green Dial 40mm',
    price: 392000,
    description:
      "The Patek Philippe Nautilus 40mm with a Sunburst Olive-Green Dial is a luxurious timepiece featuring an iconic design. Its 18K white gold case complements the stunning olive-green dial with a subtle sunburst finish, giving the watch a sophisticated and modern look. Powered by the Calibre 26‑330 S C automatic movement, it offers a date display and a central seconds hand. This elegant watch combines Patek Philippe's heritage of fine craftsmanship with a bold, contemporary aesthetic.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19m6l5r0000qq6vamaftazx_4520290__G4F77qwOc',
    name: '2022 McLaren 720S Spider',
    price: 388000,
    description:
      'The 2022 McLaren 720S Spider is an exceptional convertible supercar, featuring a twin-turbocharged 4.0-liter V8 engine that produces 710 horsepower and 568 lb-ft of torque. It accelerates from 0 to 60 mph in just 2.8 seconds, with a top speed of 212 mph (with the roof up). The Spider offers an open-top driving experience without compromising performance, thanks to its lightweight carbon fiber construction and active aerodynamics. This model is designed for high-speed thrills while maintaining McLaren’s signature luxury and engineering precision.',
    brand: 'McLaren',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1h1bzc50000we2l9xmci3hq_1327569__PA9cKZ6Zi',
    name: 'Richard Mille RM 07-01 Rose Gold Onyx Snow Diamond Set 31mm',
    price: 385000,
    description:
      "Diamonds are a girls best friend right? At least it can be when wearing this opulent design by Richard Mille. The RM 07-01 is aesthetically pleasing with the perfect integration. The brand mastered the technique by adding a 'feminine touch' to the luxury sports notoriety. Featuring a rose gold case and a diamond snow setting on the bezel, embodying the signature tonneau shaped design. ",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx9tqoil0jnsqr3me4ipheyb_2094613__E87Rn_0mp',
    name: 'Richard Mille RM11-03 Rose Gold and Titanium',
    price: 381000,
    description:
      'The Richard Mille RM11-03 Rose Gold and Titanium is a striking timepiece that seamlessly blends luxury and performance. Featuring a rose gold bezel and caseback, complemented by a titanium case, this watch exudes both elegance and robustness. The RM11-03 is equipped with a comfortable rubber strap, enhancing its sporty yet sophisticated appeal. Its intricate dial showcases the advanced mechanics and exceptional craftsmanship Richard Mille is renowned for. Ideal for those who appreciate a perfect balance of opulence and cutting-edge technology, the RM11-03 Rose Gold and Titanium is a standout addition to any prestigious watch collection.',
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19uj0dk0000g45bage2twxl_4743091__g2KlZHH84',
    name: 'Patek Philippe Grand Complications Perpetual Calendar 41mm',
    price: 380000,
    description:
      "The Patek Philippe Grand Complications Perpetual Calendar 41mm is an exquisite timepiece that showcases the brand's mastery in haute horology. It features a perpetual calendar complication, which automatically adjusts for varying month lengths and leap years, along with moon phases. The 41mm case is typically crafted in precious metals such as platinum or gold, and the intricate dial displays day, date, month, and moon phases with exceptional clarity. Powered by a self-winding mechanical movement, this watch is a blend of technical excellence and timeless elegance.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx9t5olq070iqr3mb4hq3ndq_5558643__BJWBJlOeC',
    name: 'Richard Mille RM67-02 Mutaz Barshim',
    price: 374400,
    description:
      "The Richard Mille RM67-02 Mutaz Barshim is an exceptional timepiece, designed in collaboration with the world-renowned high jumper. Featuring a striking purple Carbon NTPT case, this watch exudes modernity and innovation. The RM67-02 is equipped with an elastic strap, ensuring comfort and flexibility for any activity. The skeletonized dial showcases the intricate and advanced mechanics, reflecting Richard Mille's commitment to precision and craftsmanship. Perfect for those who appreciate cutting-edge design and high-performance engineering, the RM67-02 Mutaz Barshim is a standout piece in any luxury watch collection.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1h1fu9g00009iir3n3tpb3g_2431476__aQw89RsS3',
    name: 'Richard Mille RM 07-01 Rose Gold Carbon-TPT Diamond Bezel 31mm',
    price: 370000,
    description:
      'Diamonds are a girls best friend right? At least it can be when wearing this opulent design by Richard Mille. The RM 07-01 is aesthetically pleasing with the perfect integration. Featuring a 45.66 x 31.4mm rose gold case and diamond set bezel, embodying the signature tonneau shaped design. It is finished with a black rubber bracelet with a rose gold clasp. ',
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19v5yoj0000xqivgrdz9qwr_1829883__1MXEGC_FL',
    name: 'Richard Mille RM 30-01',
    price: 370000,
    description:
      'The Richard Mille RM 30-01 is a high-performance luxury timepiece known for its sophisticated design and technical innovation. This model features a declutchable rotor system that automatically disengages when fully wound, preventing overwinding and improving efficiency. The RM 30-01 showcases an open-worked dial, revealing the intricate movement beneath, typically encased in lightweight materials such as titanium or carbon. With its blend of advanced mechanics and modern aesthetics, the RM 30-01 is designed for collectors who appreciate both technical mastery and bold design.',
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19vdw9t0000gesgyny40jdf_4839384__mNWf9kkql',
    name: 'Audemars Piguet Royal Oak Tourbillon Extra-Plat 41mm',
    price: 368000,
    description:
      'The Audemars Piguet Royal Oak Tourbillon Extra-Plat 41mm is a highly refined timepiece that blends ultra-thin design with complex horology. This watch features a flying tourbillon, housed within the iconic Royal Oak case, known for its octagonal bezel and integrated bracelet. The "Extra-Plat" (extra-thin) design ensures a slim profile, making it one of the thinnest tourbillon watches in its class. Powered by a manual-winding movement, this model showcases Audemars Piguet\'s dedication to craftsmanship, offering elegance and mechanical innovation in a 41mm case.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19wxvwo00003wk361do2et6_4639171__4cr7fl_4l',
    name: "Patek Philippe Aquanaut Luce 'Haute Joaillerie' Rose Gold Full Diamond Dial 38mm",
    price: 367000,
    description:
      "The Patek Philippe Aquanaut Luce Haute Joaillerie Diamond Dial 38mm is an extraordinary timepiece that combines luxury and craftsmanship. The 38mm case is set with an array of brilliant diamonds, and the intricate diamond-studded dial adds even more elegance to its design. Powered by a high-precision automatic movement, this model is as technically advanced as it is visually stunning. The Aquanaut's modern and sporty design, combined with the exquisite diamond detailing, makes it a perfect choice for those seeking elegance and sophistication.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19vt75p0000sujxpuvp47pf_7205273__7mX5RJPQ5',
    name: 'Audemars Piguet Royal Oak Chronograph 38mm',
    price: 367000,
    description:
      'The Audemars Piguet Royal Oak Chronograph 38mm is an elegant and sporty timepiece featuring the iconic Royal Oak design with its signature octagonal bezel. Crafted in high-quality materials like stainless steel or gold, it houses a precise self-winding chronograph movement. The 38mm case offers a perfect balance between wearability and presence, making it suitable for both casual and formal occasions. With its "Tapisserie" patterned dial, integrated bracelet, and exceptional craftsmanship, this chronograph is a refined choice for enthusiasts seeking style and functionality.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm19x3kol0000q1x8ct0f5fhv_1677179__-Ix8ULQi6',
    name: '2021 Aston Martin DBS Superleggera Volante',
    price: 364000,
    description:
      'The 2021 Aston Martin DBS Superleggera Volante is a high-performance convertible, powered by a 5.2-liter twin-turbo V12 engine that delivers 715 horsepower and 663 lb-ft of torque. It accelerates from 0 to 60 mph in just 3.6 seconds, with a top speed of 211 mph. Combining Aston Martin’s signature luxury with breathtaking power, the Volante features a sleek aerodynamic design, advanced driving dynamics, and an exquisite interior, offering an unparalleled open-top driving experience. Perfect for those seeking both elegance and raw performance.',
    brand: 'Aston Martin',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1b4jfdc0000i0harsa5j09z_536298__ShNzIPUFJ',
    name: 'Richard Mille RM 07-04 Shelly-Ann Fraser-Pryce',
    price: 360000,
    description:
      "The Richard Mille RM 07-04 is a luxurious and technically advanced watch designed specifically for women. Combining cutting-edge mechanics with elegant aesthetics, the RM 07-04 features a skeletonized movement housed in a lightweight yet durable case made from advanced materials like Carbon TPT or titanium. Its sporty design and refined craftsmanship make it suitable for both active and stylish settings. Known for its precision and innovative design, this timepiece is a standout choice in Richard Mille's collection, embodying both functionality and luxury.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw59qss307xp13ifhpgkwx9g_8837547__N2ulwB8Vs',
    name: '2023 Porsche 911 Cabriolet Turbo S Convertible',
    price: 358800,
    description:
      'The 2023 Porsche 911 Cabriolet Turbo S Convertible is a pinnacle of open-top driving luxury and performance. Combining the exhilarating power of the Turbo S engine with the thrill of top-down motoring, this convertible offers an unparalleled driving experience. With its retractable roof, the Cabriolet allows you to enjoy the sights and sounds of the open road at the touch of a button, while still delivering the dynamic performance and precise handling that Porsche is known for. The Turbo S variant provides breathtaking acceleration and relentless power, ensuring an unforgettable driving experience whether cruising along the coast or carving through mountain passes. With its luxurious interior and advanced technology, the 2023 Porsche 911 Cabriolet Turbo S Convertible sets new standards for open-air driving enjoyment.\n\nNote: Product is pre-owned. Further details upon claim.',
    brand: 'Porsche',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO',
    name: '2013 Lamborghini Aventador LP 700-4',
    price: 350000,
    description:
      "The 2013 Lamborghini Aventador LP 700-4, powered by a 6.5-liter V12 engine with 700 horsepower, is capable of reaching 217 mph and accelerating from 0 to 60 mph in just 2.9 seconds. Its signature scissor doors, aggressive design, and cutting-edge technology perfectly embody Lamborghini’s supercar legacy. This model was notably featured in *The Dark Knight Rises* as Bruce Wayne's personal car, symbolizing the character’s wealth and affinity for powerful, sleek vehicles. The Aventador's striking look and advanced performance align with the Batman universe, making it a real-world equivalent to the Batmobile.",
    brand: 'Lamborghini',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E',
    name: 'Patek Philippe Nautilus 5990/1R 40.5mm',
    price: 344400,
    description:
      "Introducing the Patek Philippe Nautilus 5990/1R, a masterpiece of luxurious design and exceptional craftsmanship. This 40.5mm timepiece features a stunning rose gold case and matching bracelet, exuding timeless elegance and sophistication. The captivating blue dial is enhanced with dual-time and chronograph functions, offering both style and practicality. Renowned for its iconic design and meticulous attention to detail, the Nautilus 5990/1R is a true symbol of prestige and innovation, making it an indispensable addition to any discerning collector's repertoire.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn',
    name: 'Patek Philippe Perpetual Calendar Chronograph 40mm',
    price: 340000,
    description:
      'The Patek Philippe Perpetual Calendar Chronograph 40mm is a masterpiece of horological craftsmanship. Featuring a perpetual calendar that automatically accounts for leap years, moon phases, and day-date displays, this timepiece is powered by a self-winding mechanical movement. Housed in a 40mm case, often crafted from platinum or gold, the watch offers an elegant, classic aesthetic with a beautifully detailed dial. Renowned for its technical precision and timeless design, this Patek Philippe is a must-have for collectors who appreciate both luxury and functionality.',
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA',
    name: '2022 McLaren 720S',
    price: 340000,
    description:
      'The 2022 McLaren 720S is a high-performance supercar powered by a 4.0-liter twin-turbocharged V8 engine producing 710 horsepower and 568 lb-ft of torque. It accelerates from 0 to 60 mph in just 2.8 seconds, with a top speed of 212 mph. The 720S combines aerodynamic efficiency with advanced suspension and lightweight construction, providing a thrilling driving experience. Its sleek design and driver-focused cockpit deliver a blend of luxury and performance, making it one of the most sought-after supercars in its class.',
    brand: 'McLaren',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw',
    name: 'Audemars Piguet Royal Oak Purple Dial White Gold 41mm',
    price: 339000,
    description:
      'The Audemars Piguet Royal Oak 41mm with a Purple Dial and White Gold case is a luxurious and striking timepiece. Featuring the iconic Royal Oak design with its octagonal bezel, this model is crafted from 18K white gold, giving it a sleek and elegant appearance. The vibrant purple "Tapisserie" patterned dial adds a bold touch, making it stand out from more traditional designs. Powered by a self-winding movement, this watch blends exceptional craftsmanship with a unique, modern aesthetic. Ideal for collectors seeking exclusivity and style.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL',
    name: 'Audemars Piguet Royal Oak Tourbillon 41mm',
    price: 325000,
    description:
      "The Audemars Piguet Royal Oak Tourbillon 41mm is a masterpiece of luxury watchmaking, combining elegance with precision. It features the iconic octagonal bezel and a finely crafted dial, showcasing the intricate tourbillon complication. The 41mm case is typically crafted in high-end materials such as stainless steel or 18K gold, offering a perfect balance between classic design and modern sophistication. Powered by a manual-winding or automatic movement, the Royal Oak Tourbillon exemplifies Audemars Piguet's dedication to exceptional craftsmanship and horological innovation.",
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2',
    name: 'Audemars Piguet Royal Iced Oak Skeleton 18k Rose Gold 41mm',
    price: 320000,
    description:
      "The Audemars Piguet Royal Oak Skeleton 41mm in 18k Rose Gold is a luxurious and technically advanced timepiece. Fully iced out with diamonds, this watch showcases a stunning open-worked dial that reveals the intricate inner workings of its skeletonized movement. The 18k rose gold case and bracelet add a rich, warm tone to the overall design. Powered by a self-winding movement, this watch combines the brand's iconic Royal Oak design with dazzling craftsmanship, making it a standout piece for collectors who appreciate both elegance and complexity.",
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m',
    name: 'Richard Mille RM67-02 Wayde Van Niekerk',
    price: 316800,
    description:
      "The Richard Mille RM67-02 Wayde van Niekerk is a remarkable timepiece, designed in collaboration with the Olympic champion sprinter. Featuring a vibrant green Carbon NTPT case, this watch combines durability with a striking aesthetic. The RM67-02 includes an elastic strap, providing exceptional comfort and adaptability for any activity. The skeletonized dial reveals the intricate and advanced mechanics, showcasing Richard Mille's dedication to precision and innovation. Ideal for those who value high-performance engineering and unique design, the RM67-02 Wayde van Niekerk is a standout addition to any luxury watch collection.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD',
    name: 'Audemars Piguet Royal Oak Plum Dial Flying Tourbillion Extra-Thin (RD#3) 37mm',
    price: 315500,
    description:
      'The Audemars Piguet Royal Oak Plum Dial Flying Tourbillon Extra-Thin (RD#3) in stainless steel, reference 26660ST.OO.1356ST.02, is an exquisite timepiece that blends technical innovation with refined aesthetics. Featuring a bold plum-colored "Tapisserie" dial, this ultra-thin watch showcases a flying tourbillon at 6 o’clock. The 41mm case is crafted from stainless steel, maintaining the iconic Royal Oak design. Powered by the automatic Calibre 2968 movement, it exemplifies Audemars Piguet\'s mastery of horology with its sleek profile and high complication. Perfect for collectors seeking both elegance and technical prowess.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo',
    name: "Richard Mille RM 07-01 Ladies' Rose Gold Diamond Set Jasper Dial 31mm",
    price: 315000,
    description:
      "Diamonds are a girls best friend right? At least it can be when wearing this opulent design by Richard Mille. The RM 07-01 is aesthetically pleasing with the perfect integration. The brand mastered the technique by adding a 'feminine touch' to the luxury sports notoriety. Featuring a rose gold case and diamond set bezel, embodying the signature tonneau shaped design. ",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc',
    name: "Air Jordan 1 High 'What The Doernbecher'",
    price: 305678,
    description:
      'Since 2003, Nike and OHSU Doernbecher have brought nearly 100 young designers together for Doernbecher Freestlye, a program that provides children battling life altering and/or threatening illnesses with opportunities to design some of Nike and Jordan Brand’s most popular sneakers to raise money and awareness for the hospital. During that time, more than $30 million has been generated for the hospital, including $1,898,525 from the 2019 collection.\n\nTypically, a group of children ages 8 to 15 are selected to work with Nike designers on a range of footwear that’s eventually released to the public. Unfortunately, due to the impact of COVID-19, last year’s Freestyle program didn’t go on as planned, but an audible was called to make sure something was still done for the hospital.\n\nInstead of a range of shoes designed by the children, Nike and Doernbecher settled on one shoe, a “What The” themed Air Jordan 1 made up of elements of Doernbecher Freestyle designs of the past. Unlike past years, this shoe isn’t being prepped for a wide release—instead a very limited run of 17 pairs was produced, with the first auctioned during the Virtually Freestyle event. At one point, that pair was selling for more than $2 million (before the shoe was even unveiled), but the auction was quickly pulled, possibly due to some suspicious bidding activity. The remaining 16 pairs were auctioned off on eBay beginning Feb.26.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4',
    name: '2023 Maserati MC20 Cielo',
    price: 305000,
    description:
      'The 2023 Maserati MC20 is a mid-engine supercar that combines cutting-edge performance with Italian luxury. Powered by a 3.0-liter twin-turbocharged V6 engine, it produces 621 horsepower and 538 lb-ft of torque, allowing it to accelerate from 0 to 60 mph in under 3 seconds. The lightweight carbon-fiber monocoque structure enhances both agility and speed. With advanced aerodynamics and a sleek, sculpted design, the MC20 offers a perfect balance between track-focused performance and refined road driving, making it a standout in the supercar segment.',
    brand: 'Maserati',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY',
    name: 'Richard Mille RM 07-01 Carbon TPT Rose Gold',
    price: 305000,
    description:
      "The RM 07-01 is aesthetically pleasing with the perfect integration. Featuring a 45.66 x 31.4mm rose gold and Carbon TPT case, embodying the signature tonneau shaped design. It is finished with a black rubber bracelet with a rose gold clasp. The transparent dial offers a captivating view of the intricate inner mechanisms, a hallmark of Richard Mille's commitment to transparency and innovation. This watch is in brand new condition and comes with its original box and papers.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z',
    name: 'Richard Mille RM 35-02 Rafael Nadal Red TPT Quartz',
    price: 305000,
    description:
      "The Richard Mille RM 35-02 Rafael Nadal Red TPT Quartz is a striking timepiece, crafted with a vibrant Red TPT Quartz case known for its lightweight yet durable construction. Designed for high performance, this automatic watch features a skeletonized movement visible through the open-worked dial, showcasing Richard Mille's advanced engineering. Built to withstand extreme conditions, it offers exceptional shock resistance, making it ideal for athletes. The RM 35-02 blends cutting-edge technology with bold aesthetics, embodying the spirit of Rafael Nadal's dynamic energy.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE',
    name: 'Richard Mille 030 Rose Gold Factory Set',
    price: 298800,
    description:
      "The Richard Mille 030 Rose Gold Factory Set is a luxurious and avant-garde timepiece, featuring a stunning rose gold case that exudes opulence. This exceptional watch is factory set with brilliant diamonds, adding a touch of unparalleled elegance and sophistication. The RM 030 showcases Richard Mille's renowned skeletonized dial, allowing a glimpse into the intricate and innovative mechanics within. Perfect for those who appreciate high-end craftsmanship and unique design, the RM 030 Rose Gold Factory Set is a standout piece in any prestigious collection.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM',
    name: 'Richard Mille RM 07-01 Black Ceramic Black Lips Diamond Bezel 31mm',
    price: 295000,
    description:
      'Diamonds are a girls best friend right? At least it can be when wearing this opulent design by Richard Mille. The RM 07-01 features a 45mm black ceramic case and diamond set bezel, embodying the signature tonneau shaped design. The skeletonized baseplate and bridges are made of grade 5 titanium with rigid details, as well as precise surface flatness. It is finished with a black carbon TPT bracelet which is considered to be fundamental, rose gold accents and tonneau shape extended all around the wrist.  ',
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz',
    name: '2024 Range Rover Autobiogarphy LWB',
    price: 294000,
    description:
      'Discover the epitome of luxury and capability with the 2024 Range Rover Autobiography LWB. Crafted for those who demand the finest, this long-wheelbase SUV redefines opulence and performance. Featuring lavish interior appointments, advanced technology, and unparalleled off-road prowess, the Range Rover Autobiography LWB delivers an unmatched driving experience. Elevate every journey with the pinnacle of automotive luxury and refinement.\n\nNote: Product may be pre-owned. Further details upon claim.',
    brand: 'Range Rover',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0',
    name: 'Audemars Piguet Royal Oak Rose Gold Factory Set 41mm',
    price: 293250,
    description:
      'Discover unparalleled elegance with the Audemars Piguet 41MM Rose Gold Factory Set Chronograph. This luxurious timepiece features a 41mm rose gold case, meticulously adorned with factory-set diamonds, exuding opulence and sophistication. The pristine white subdials provide a striking contrast, enhancing the watch’s refined aesthetic. Powered by a precise Swiss automatic movement, this chronograph offers both functionality and style. Perfect for those who appreciate the finest in haute horlogerie, this Audemars Piguet masterpiece is a testament to timeless luxury and exceptional craftsmanship.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c',
    name: 'Patek Philippe Nautilus 5740/1G 40mm',
    price: 290400,
    description:
      'The Patek Philippe Nautilus 5740/1G is an exquisite timepiece, featuring a 40mm white gold case that radiates luxury and sophistication. This elegant watch is paired with a matching white gold bracelet, providing a seamless and refined look. Renowned for its exceptional craftsmanship and advanced complications, the Nautilus 5740/1G combines timeless design with cutting-edge horology, making it a perfect choice for those who appreciate the pinnacle of watchmaking excellence.',
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p',
    name: '2019 Lamborghini Huracán Performante',
    price: 290000,
    description:
      "The Lamborghini Huracán Performante is a high-performance variant of the Huracán, embodying the pinnacle of Lamborghini's engineering and design prowess. It features a lightweight construction, aerodynamic enhancements, and a powerful V10 engine, delivering exhilarating performance on both the road and the track. With its aggressive styling, advanced technologies, and race-inspired dynamics, the Huracán Performante offers an unmatched driving experience, pushing the boundaries of what's possible in a supercar. Whether carving through corners or accelerating down the straights, it represents the epitome of automotive performance and passion.",
    brand: 'Lamborghini',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71',
    name: '2021 Nissan GT-R NISMO Special Edition',
    price: 290000,
    description:
      "The 2021 Nissan GT-R NISMO Special Edition is a high-performance version of Nissan's iconic GT-R, featuring enhanced aerodynamics, suspension, and engine tuning. Powered by a hand-built 3.8-liter twin-turbocharged V6 engine, it delivers 600 horsepower. This special edition comes with exclusive design elements such as a Stealth Gray paint finish, carbon fiber details, and a unique clear-coated carbon fiber hood. Built for both the track and the road, it combines Nissan's motorsport heritage with cutting-edge technology and performance.",
    brand: 'Nissan',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3',
    name: '2024 Mercedes-Benz Maybach S 680',
    price: 286450,
    description:
      'The 2024 Mercedes-Benz Maybach S 680 is the epitome of luxury and performance, featuring a 6.0-liter V12 engine that produces 621 horsepower. This ultra-luxury sedan offers an opulent interior with high-end materials, including customizable leather and wood trims, along with advanced technology like the MBUX infotainment system. Rear-seat passengers enjoy executive-class seating with massaging functions and individual entertainment screens. The S 680 combines unparalleled comfort, cutting-edge tech, and powerful performance, making it the ultimate choice for discerning luxury car enthusiasts.',
    brand: 'Mercedes-Benz',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD',
    name: '2024 Porsche 911 4S',
    price: 286000,
    description:
      "The 2024 Porsche 911 4S continues the legacy of Porsche's iconic sports car lineup, offering a perfect blend of performance, luxury, and everyday usability. With its timeless design, exhilarating performance, and advanced technology, the 911 4S delivers an unforgettable driving experience. Powered by a high-performance engine and equipped with Porsche's legendary all-wheel drive system, it offers exceptional traction and handling in any driving condition. The luxurious interior features premium materials and state-of-the-art technology, providing comfort and connectivity for both driver and passengers. Whether cruising on the open road or tackling challenging corners, the 2024 Porsche 911 4S is designed to thrill and inspire, setting new standards for sports car excellence.\n\nNote: Product is pre-owned. Further details upon claim.",
    brand: 'Porsche',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj',
    name: '2024 Mercedes G63 AMG',
    price: 284400,
    description:
      'Unleash unparalleled power and prestige with the 2024 Mercedes G63 AMG. This iconic SUV merges uncompromising performance with luxurious comfort. Boasting a potent AMG engine, advanced off-road capabilities, and a lavish interior, the G63 AMG sets a new standard for elite driving experiences. Command attention on and off the road with the epitome of Mercedes-Benz craftsmanship and performance.\n\nNote: Product may be pre-owned. Further details upon claim.',
    brand: 'Mercades',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI',
    name: '2022 Bentley Continental GT Speed',
    price: 280000,
    description:
      'The 2022 Bentley Continental GT Speed is a high-performance luxury grand tourer powered by a 6.0-liter twin-turbocharged W12 engine, producing 650 horsepower. It accelerates from 0 to 60 mph in just 3.5 seconds, with a top speed of 208 mph. The GT Speed offers advanced dynamic capabilities, including all-wheel steering and an electronic limited-slip differential, enhancing agility and handling. With its luxurious interior, refined design, and cutting-edge technology, the Continental GT Speed blends comfort and exhilarating performance in one stunning package.',
    brand: 'Bentley',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5',
    name: 'Audemars Piguet Royal Oak Rose Gold Blue Dial Royal Oak Perpetual Calendar\t41mm',
    price: 279500,
    description:
      'Introducing the Audemars Piguet Royal Oak Perpetual Calendar 41mm in rose gold with a captivating blue dial. This luxurious timepiece features a 41mm rose gold case and bracelet, harmonized with a striking blue "Grande Tapisserie" dial. Powered by the self-winding Calibre 5134, it offers perpetual calendar functions, including day, date, month, astronomical moon, and leap year indications. Blending classic elegance with cutting-edge horology, this watch is perfect for those who appreciate exceptional craftsmanship and timeless design.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe',
    name: 'Rolex Daytona White Gold and Diamonds 40mm',
    price: 275000,
    description:
      'The Rolex Daytona White Gold and Diamonds 40mm is a luxurious and high-performance timepiece, crafted from 18K white gold. It features a 40mm case adorned with sparkling diamonds on the dial, blending elegance with the functionality of the iconic Daytona series. Designed for precision and speed, this watch is powered by the Calibre 4130 self-winding chronograph movement. Its sleek design, paired with diamond markers, makes it a perfect choice for those seeking both luxury and precision in their timepiece.',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n',
    name: 'La Panthère De Cartier Watch',
    price: 275000,
    description:
      'La Panthère watch, 23.6 mm, quartz movement. Rhodiumized white gold 750/1000 case set with 136 brilliant-cut diamonds totaling 1.04 carats, rhodiumized white gold 750/1000 panther head set with 297 brilliant-cut diamonds totaling 1.43 carats, pear-shaped emerald eyes totaling 0.15 carat, black lacquer spots and nose, rhodiumized white gold 750/1000 dial set with 117 diamonds totaling 0.54 carat, rhodiumized steel sword-shaped hands, rhodiumized white gold 750/1000 bracelet set with 464 brilliant-cut diamonds totaling 17.81 carats and 52 black pyramid-shaped spinels, rhodiumized white gold 750/1000 ardillon buckle set with 22 brilliant-cut diamonds totaling 0.36 carat. Thickness: 7.8 mm. Water-resistant up to 3 bar (approx. 30 meters/100 feet).',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N',
    name: 'Audemars Piguet Royal Oak Perpetual Calendar White Ceramic',
    price: 275000,
    description:
      'Introducing the Audemars Piguet Royal Oak Perpetual Calendar, an epitome of luxury and precision. This masterpiece features a 41mm hand-finished white ceramic case with a blue "Grande Tapisserie" dial, showcasing silver-toned counters and white gold applied hour-markers. The watch is equipped with a self-winding Calibre 5134, offering functions such as day, date, month, astronomical moon, and week of the year, along with leap year indication. Paired with a white ceramic bracelet and blackened polished steel AP folding clasp, this timepiece redefines elegance.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1',
    name: 'Audemars Piguet Royal Oak Black Ceramic Perpetual Calendar 41mm',
    price: 270250,
    description:
      'Experience the pinnacle of luxury with the Audemars Piguet Royal Oak Black Ceramic Perpetual Calendar 41mm. This sophisticated timepiece features a sleek black ceramic case and bracelet, complemented by a black "Grande Tapisserie" dial with contrasting white subdials. The watch is powered by the self-winding Calibre 5134, offering perpetual calendar functions including day, date, month, astronomical moon, and leap year indications. With its cutting-edge design and exceptional craftsmanship, this Royal Oak is a true masterpiece for the discerning collector.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T',
    name: '2024 Tesla Cybertruck',
    price: 270000,
    description:
      "Introducing the 2024 Tesla Cybertruck Base, a revolutionary electric pickup truck designed for the future. Combining bold aesthetics with unparalleled durability, this vehicle redefines what it means to be tough. With its all-electric powertrain, innovative features, and rugged design, the Cybertruck Base delivers unmatched performance and versatility. Experience the future of transportation with Tesla's groundbreaking engineering and design.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'Tesla',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1',
    name: '2023 Audi R8 coupe V10 GT',
    price: 270000,
    description:
      'The 2023 Audi R8 Coupe V10 GT is a limited-edition high-performance supercar featuring a 5.2-liter V10 engine producing 602 horsepower and 413 lb-ft of torque. This rear-wheel-drive variant accelerates from 0 to 60 mph in just 3.4 seconds, with a top speed of 199 mph. It boasts a lightweight design, advanced aerodynamics, and a seven-speed dual-clutch transmission for razor-sharp handling. As a special edition, only 333 units were made, making it one of the most exclusive and track-focused R8 models.',
    brand: 'Audi',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi',
    name: '2019 Porsche 911 GT3 RS Coupe',
    price: 268800,
    description:
      "The 2019 Porsche 911 GT3 RS Coupe represents the pinnacle of Porsche's track-focused performance engineering, delivering an unparalleled driving experience for enthusiasts. With its race-bred pedigree and lightweight construction, the GT3 RS is optimized for maximum performance on both the road and the track. Powered by a high-revving naturally aspirated engine and equipped with advanced aerodynamics, suspension, and braking systems, it offers blistering acceleration, precise handling, and exceptional cornering capabilities. The track-focused interior features lightweight materials and racing-inspired elements, providing the driver with an immersive and engaging driving environment. Whether pushing the limits on the track or enjoying a spirited drive on the open road, the 2019 Porsche 911 GT3 RS Coupe delivers an exhilarating driving experience that is unmatched in its class.\n\nNote: Product is pre-owned. Further details upon claim.",
    brand: 'Porsche',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp',
    name: 'Indomptables De Cartier Watch',
    price: 265000,
    description:
      'Indomptables de Cartier crocodile motif watch, 22.2 mm, quartz movement. Case in 18K yellow gold (750/1000) set with 128 brilliant-cut diamonds totaling 1.08 carat, panther head in 18K yellow gold (750/1000) set with 275 brilliant-cut diamonds totaling 1.32 carat, pear-shaped emerald eyes totaling 0.17 carat, black lacquer spots and nose, crocodile head in 18K yellow gold (750/1000) set with 211 emeralds totaling 1.64 carat, oval cabochon-cut ruby eyes totaling 0.34 carat, 18K yellow gold (750/1000) dial set with 160 diamonds totaling 0.37 carat and 1 black spinel, gold-finish steel sword-shaped hands, 18K yellow gold (750/1000) strap set with 123 brilliant-cut diamonds totaling 4.82 carats, 11 black spinels, 44 emeralds totaling 1.13 carat. Thickness: 7.55 mm. Water-resistant up to 3 bar (approx. 30 meters/100 feet).',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr',
    name: 'IWC Portuguese Grande Complication',
    price: 265000,
    description:
      'The IWC Portuguese Grande Complication IW377402 is a sophisticated timepiece that blends luxury and technical prowess. It features a perpetual calendar, moon phase display, and a minute repeater, housed in a 45mm platinum case. Powered by the automatic Calibre 79091 movement, this watch offers a 44-hour power reserve. With a silver-plated dial, applied Arabic numerals, and elegant chronograph functionality, it exemplifies IWC’s mastery in creating complex watches with timeless design. Ideal for collectors seeking precision, craftsmanship, and exclusivity.',
    brand: 'IWC',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC',
    name: 'Richard Mille RM11-02 Rose Gold Titanium',
    price: 264000,
    description:
      'The Richard Mille RM11-02 Rose Gold Titanium is a remarkable fusion of luxury and cutting-edge engineering. This exquisite timepiece features a robust titanium case paired with an elegant rose gold bezel, exuding both strength and sophistication. The RM11-02 boasts a skeletonized dial, showcasing the intricate and high-performance mechanics within. Equipped with a flyback chronograph, annual calendar, and dual time zone functions, this watch offers unparalleled functionality. Ideal for those who appreciate innovative design and superior craftsmanship, the RM11-02 Rose Gold Titanium stands out as a distinguished addition to any luxury watch collection.',
    brand: 'Richard Mille ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2',
    name: 'Hublot Big Bang Complications Tourbillon Automatic Yellow Neon Saxem 44mm',
    price: 261000,
    description:
      'The Hublot Big Bang Complications Tourbillon Automatic Yellow Neon Saxem 44mm is a bold and innovative timepiece. Crafted from SAXEM (Sapphire Aluminum Oxide and rare earth elements), it features a neon yellow transparent case that is both durable and visually striking. Inside, it houses a tourbillon movement with automatic winding, visible through the skeletonized dial. With a 44mm case size, this watch combines cutting-edge materials with Hublot’s signature blend of high-tech innovation and craftsmanship, making it a standout in the world of luxury watches.',
    brand: 'Hublot',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx',
    name: 'Porsche 911 Carrera GTS 992.2',
    price: 260000,
    description:
      'The Porsche 911 Carrera GTS 992.2 is a high-performance variant of the 911 lineup, combining power and precision with luxury. Featuring a twin-turbocharged 3.0-liter flat-six engine, it delivers 473 horsepower and 420 lb-ft of torque. The GTS offers sharper handling with its sport-tuned suspension, dynamic driving modes, and advanced aerodynamics. Available with a manual or PDK dual-clutch transmission, it blends thrilling performance with everyday usability. Its iconic design, updated for the 992.2 generation, includes modern touches and enhanced interior technology.',
    brand: 'Porsche',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ',
    name: '2021 Bentley\tBetayga Speed 12cyl',
    price: 258000,
    description:
      "Experience the pinnacle of luxury and performance with the 2021 Bentley Bentayga Speed 12cyl. Merging exquisite craftsmanship with exhilarating power, this SUV redefines opulence on the road. With a commanding 12-cylinder engine, unparalleled comfort, and cutting-edge technology, the Bentayga Speed offers a driving experience like no other. Elevate your journey with Bentley's legendary refinement and prestige.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'Bentley',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB',
    name: 'Hublot Spirit of Big Bang Tourbillon Purple Sapphire 42mm',
    price: 257000,
    description:
      "The Hublot Spirit of Big Bang Tourbillon Purple Sapphire is a visually striking watch featuring a 42mm case made entirely from translucent purple sapphire. The unique sapphire case showcases the intricate skeletonized dial, highlighting the tourbillon mechanism at 6 o'clock. Powered by an in-house manual-winding movement, the watch delivers exceptional precision and a 5-day power reserve. This bold timepiece combines Hublot's innovative craftsmanship with cutting-edge materials, making it a standout in luxury watchmaking. Ideal for collectors seeking a fusion of avant-garde design and technical excellence.",
    brand: 'Hublot',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1cl4bze00003zx8apx9iylb_4888850__AK-qmU6ES',
    name: 'Roger Dubuis Excalibur Spider Carbon 45mm',
    price: 255000,
    description:
      "The ultralight Roger Dubuis Excalibur Spider Carbon watch is Roger Dubuis' first all-carbon fiber offering, featuring a skeletonized 45mm carbon fiber case and titanium container with red lacquered markings housing a flying tourbillon with a 90-hour power reserve. Comes on a red rubber strap constructed of winning tire rubber and the Pirelli Ice Zero 2 pattern inlay with a triple-deployant clasp.",
    brand: 'Roger Dubuis',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm16txtun0003tr7m2xdeho1v_9115207__JCB6kYE5R',
    name: 'Rolex Daytona Yellow Gold and Diamonds 40mm',
    price: 255000,
    description:
      'The Rolex Daytona Yellow Gold and Diamonds 40mm is a luxurious timepiece crafted from 18K yellow gold. It features a dazzling diamond-set dial that elevates the sporty chronograph design of the Daytona series. Powered by the reliable Calibre 4130 self-winding chronograph movement, it offers both precision and high performance. This model combines the opulence of gold and diamonds with the functionality of a professional timekeeping instrument, making it an exceptional choice for those who value elegance and technical excellence in a watch.',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1fsbmvk0000x370kxa265nn_5187294__-aDOgYwYw',
    name: 'Richard Mille RM030 Titanium',
    price: 255000,
    description:
      "The Richard Mille RM030 Titanium is a high-performance timepiece featuring a declutchable rotor system that prevents overwinding, optimizing power reserve. This model is crafted from lightweight and durable titanium, offering a sleek and modern look. The skeletonized dial showcases the intricate automatic movement, reflecting Richard Mille's signature blend of innovative engineering and luxury design. Ideal for collectors, the RM030 Titanium is known for its technical sophistication and avant-garde aesthetics, making it both functional and visually striking.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv60hwpp2f9g4b8t0d8ud8l4_3637104__kvLjDTF3Z',
    name: 'Lamborghini Urus',
    price: 247500,
    description:
      "The 2019 Lamborghini Urus is a high-performance SUV that combines Lamborghini's signature design and power with the functionality of an SUV. It features a twin-turbocharged 4.0-liter V8 engine that delivers 641 horsepower and accelerates from 0 to 60 mph in 3.2 seconds. It also has all-wheel drive and a luxurious interior. With its aggressive styling and incredible performance, the Urus is a head-turning SUV that's sure to impress.",
    brand: 'Lamborghini',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu8puya80171ld14lbt6awp8_292588__pxHL3xTyM',
    name: '2022 Bentley Flying Spur V8',
    price: 247200,
    description:
      "Introducing the 2022 Bentley Flying Spur V8, where elegance meets exhilaration. Crafted for those who demand the ultimate in luxury and performance, this sedan combines timeless design with impressive power. With a refined V8 engine, exquisite interior craftsmanship, and advanced technology features, the Flying Spur V8 offers an unmatched driving experience. Indulge in unparalleled comfort and sophistication with Bentley's iconic flagship model.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'Bentley',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx9nwkqy00zen91jk2sv07pk_1348129__v3AiyJWJb7',
    name: 'Patek Philippe Nautilus 5980/1R 40.5mm',
    price: 246000,
    description:
      'The Patek Philippe Nautilus 5980/1R is a luxurious and iconic timepiece, featuring a 40.5mm rose gold case that exudes elegance and prestige. This exquisite watch is paired with a matching rose gold bracelet, creating a cohesive and opulent appearance. The Nautilus 5980/1R is renowned for its exceptional craftsmanship and sophisticated design, making it a perfect choice for those who seek a blend of high-end style and horological excellence.',
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx5hsc7l08vo10j6rzvj0r4u_5270452__CoEBTTwL_',
    name: 'Patek Philippe Nautilus 5712/1R 40mm',
    price: 246000,
    description:
      "Introducing the Patek Philippe Nautilus 5712/1R, a true icon of luxury and elegance. This 40mm timepiece features a stunning rose gold case and matching bracelet, exuding a warm and sophisticated allure. The rich chocolate dial, with its intricate moon phase, power reserve, and date subdials, enhances the watch's unique character and functionality. Renowned for its impeccable craftsmanship and distinctive design, the Nautilus 5712/1R is a masterpiece that embodies the perfect blend of tradition and innovation, making it an essential addition to any refined watch collection.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1gu16l10000i61dmz6qvj0z_5354816__qxvHm26MD',
    name: 'Audemars Piguet Royal Oak Chronograph Frosted Gold 41mm',
    price: 245000,
    description:
      'The Audemars Piguet Royal Oak Selfwinding Chronograph Frosted Gold 41mm is an exquisite timepiece that combines the iconic Royal Oak design with a frosted finish, giving it a unique, shimmering effect. Crafted from 18K white or rose gold, it features a 41mm case and the signature "Grande Tapisserie" dial. Powered by the automatic Calibre 4401, this chronograph boasts a flyback function and 70-hour power reserve. The frosted gold finish adds a modern, textured twist to this timeless classic, blending luxury and performance.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm01c9gbp014xq64773hsaq7a_7196409__BcnGii1Lv',
    name: 'Van Cleef Olympia bracelet 18K yellow gold, Diamond',
    price: 239800,
    description:
      "The Van Cleef & Arpels Olympia Bracelet in 18K yellow gold is a luxurious and elegant piece that embodies the brand's dedication to exceptional craftsmanship and timeless design. This bracelet features a sophisticated and intricate design, with each element meticulously crafted in warm 18K yellow gold. The bracelet is adorned with sparkling diamonds, adding a touch of brilliance and opulence to the piece. The combination of the rich yellow gold and the dazzling diamonds creates a harmonious and refined look, making the Olympia Bracelet a perfect accessory for both special occasions and everyday elegance. This exquisite piece is a true testament to Van Cleef & Arpels' artistry, offering a timeless addition to any jewelry collection.",
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw56jcmv02pmqoof86u71lfv_6116298__AgTB9Oe0x',
    name: '2023 Porsche 911 Carrera GTS Coupe ',
    price: 238800,
    description:
      "The 2023 Porsche 911 Carrera GTS Coupe represents the pinnacle of Porsche's iconic sports car lineup, blending performance, luxury, and style in a sleek and dynamic package. Powered by a high-performance engine, the Carrera GTS Coupe delivers exhilarating acceleration and precise handling, ensuring an unforgettable driving experience on both the road and the track. With its distinctive design cues and aggressive stance, it commands attention wherever it goes, while the luxurious interior offers comfort and refinement for driver and passengers alike. Equipped with the latest technology and driver assistance features, the 2023 Porsche 911 Carrera GTS Coupe sets new standards for performance and innovation in the sports car segment, reaffirming Porsche's legacy as a leader in automotive excellence.\n\nNote: Product is pre-owned. Further details upon claim.",
    brand: 'Porsche',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm16u13l30004tr7mj2xxstf8_1915566__NtetoWCYE',
    name: 'Rolex Daytona Everose Gold and Diamonds 40mm',
    price: 235000,
    description:
      'The Rolex Daytona Everose Gold and Diamonds 40mm is an opulent chronograph designed in 18K Everose gold, with a diamond-encrusted dial that enhances its luxurious appeal. Powered by the high-performance Calibre 4130 self-winding chronograph movement, this model delivers both precision and durability. The blend of the warm Everose gold with dazzling diamonds creates a stunning timepiece that combines elegance and functionality, making it a perfect choice for those who appreciate luxury and craftsmanship in a watch.',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluajvizl00i6jm14039xworf_2317323__dJB6DcbRQ',
    name: '2020 Audi R8 Spyder',
    price: 234000,
    description:
      "Introducing the 2020 Audi R8 Spyder, where exhilarating performance meets timeless design. This convertible supercar embodies the perfect fusion of cutting-edge technology and timeless design. With its powerful engine, precise handling, and open-top driving experience, the R8 Spyder delivers thrills like no other. Elevate your driving adventures with Audi's iconic blend of performance and luxury.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'Audi',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxdidn6k09k613lw9vjxojoj_1765870__AiGf3MVwa',
    name: 'Richard Mille RM-011 Felipe Massa Titanium Rose Gold',
    price: 232800,
    description:
      'The Richard Mille RM-011 Felipe Massa Titanium Rose Gold is an exceptional timepiece that epitomizes luxury and precision engineering. This stunning watch features a robust titanium case complemented by an elegant rose gold bezel, combining strength with sophistication. Designed in collaboration with Formula 1 driver Felipe Massa, the RM-011 showcases a skeletonized dial that reveals its intricate and high-performance mechanics. Equipped with a flyback chronograph and an automatic movement, this watch offers both advanced functionality and striking aesthetics. Perfect for those who appreciate innovative design and superior craftsmanship, the RM-011 Felipe Massa Titanium Rose Gold is a remarkable addition to any prestigious watch collection.',
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxdnh8wb1ek5rfabov0vainq_7754703__WN56Luj7U',
    name: 'Richard Mille RM011 Titanium Sandblast',
    price: 231000,
    description:
      'The Richard Mille RM011 Titanium Sandblast is a distinctive and sophisticated timepiece, showcasing the perfect blend of advanced engineering and refined design. This exceptional watch features a titanium case with a unique sandblasted finish, giving it a sleek and modern appearance. The RM011 highlights a skeletonized dial, revealing the intricate and high-performance mechanics within. Equipped with a flyback chronograph, annual calendar, and 60-minute countdown timer, this watch offers unparalleled functionality and precision. Ideal for those who appreciate innovative technology and elegant aesthetics, the RM011 Titanium Sandblast stands out as a remarkable addition to any luxury watch collection.',
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxdnvpt41jm7rfabdpqqfxgo_6427944__JOnMcJ1e0',
    name: 'Richard Mille RM011 White Gold',
    price: 226800,
    description:
      "The Richard Mille RM011 White Gold is a luxurious and innovative timepiece, combining exquisite craftsmanship with advanced technology. Featuring a robust white gold case, this watch exudes elegance and sophistication. The RM011 showcases a skeletonized dial, allowing a glimpse into the intricate and high-performance mechanics that define Richard Mille's exceptional watchmaking. Equipped with a flyback chronograph, annual calendar, and 60-minute countdown timer, this timepiece offers unparalleled functionality and precision. Perfect for those who value cutting-edge innovation and refined aesthetics, the RM011 White Gold is a standout piece in any prestigious watch collection.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ibr2u50000opad2ygn95yw_3812228__WMLsLUmFP',
    name: "Patek Philippe Aquanaut Luce 'Haute Joaillerie' Rose Gold Diamond Dial 38mm",
    price: 225250,
    description:
      "This Patek Philippe Aquanaut Luce 5072R-001 'Haute Joaillerie' is designed in a 35.6mm 18K rose gold case, decked out in diamonds, and styled on a beige rubber strap. The Mother Of Pearl dial is surrounded by a 40 diamond-set bezel, diamond hour markers, and hosts a date window at 3 o'clock. For a final touch and extra bit of shimmer, the rose gold folding clasp on the strap is set with diamonds. ",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1guv6fa0000i6qfddcul526_1425309__y2fMDtrkT',
    name: 'Audemars Piguet Fully Iced Out Royal Oak Skeleton 41mm Steel',
    price: 225000,
    description:
      'The Audemars Piguet Fully Iced Out Royal Oak Skeleton 41mm in stainless steel is a luxurious timepiece that combines intricate craftsmanship with bold design. Its open-worked skeleton dial showcases the mechanical movement, while the fully iced-out exterior features diamonds encrusted throughout the case, bracelet, and bezel. The 41mm stainless steel case retains the iconic Royal Oak octagonal bezel and integrated bracelet, making it a standout piece for those seeking a blend of technical mastery and opulence. Perfect for collectors who appreciate high-end craftsmanship with a lavish twist.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1guivfq0000635irtb0nebk_542016__vFcok9rZK',
    name: 'Roger Dubuis Excalibur Spider Pirelli Black DLC Titanium 45mm',
    price: 222000,
    description:
      "The Roger Dubuis Excalibur Spider Pirelli Black DLC Titanium 45mm is a high-performance timepiece that blends cutting-edge design with motorsport-inspired elements. Featuring a black DLC-coated titanium case, this watch showcases an open-worked dial, revealing the intricate skeletonized movement. The 45mm case is paired with a rubber strap made from Pirelli tires, adding a unique connection to the world of racing. Powered by a manual-winding movement with a power reserve indicator, it reflects Roger Dubuis' signature fusion of technical mastery and bold aesthetics.",
    brand: 'Roger Dubuis',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxdn0hss19owrfab36bq0gm3_6288516__ZlmJGVDDU',
    name: 'Richard Mille RM011 Titanium',
    price: 222000,
    description:
      "The Richard Mille RM011 Titanium is a stunning example of modern watchmaking, blending advanced technology with sleek design. Featuring a lightweight yet durable titanium case, this timepiece ensures both comfort and longevity. The RM011 showcases a skeletonized dial, revealing the intricate and sophisticated mechanics that are synonymous with Richard Mille's craftsmanship. Equipped with a flyback chronograph, annual calendar, and 60-minute countdown timer, this watch offers exceptional functionality and precision. Perfect for those who value cutting-edge innovation and elegant aesthetics, the RM011 Titanium is a standout piece in any luxury watch collection.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1gv7dji0000y17q3pgkunyk_3286876__1nVi59P7-',
    name: 'Audemars Piguet Royal Oak Hammered 18-Carat White Gold 41mm',
    price: 217000,
    description:
      'The Audemars Piguet Royal Oak Hammered 18-Carat White Gold 41mm is an exquisite timepiece that features a hammered texture, giving the white gold case a distinct, shimmering appearance. This luxurious watch maintains the iconic Royal Oak design with its octagonal bezel and integrated bracelet. The 41mm case houses a refined automatic movement, visible through an open-worked or minimalist dial. Combining craftsmanship with a bold aesthetic, this Royal Oak is a standout choice for those seeking elegance and innovation.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm031oa5x005u3s2eeufcldgo_4268452__PwgJHW77j',
    name: 'Van Cleef Snowflake earrings, large model 18K yellow gold, Diamond',
    price: 215600,
    description:
      "The Van Cleef & Arpels Snowflake Earrings in the large model are a luxurious and breathtaking pair of earrings, meticulously crafted from 18K yellow gold. These exquisite earrings are inspired by the delicate beauty of snowflakes, with each earring featuring a stunning snowflake motif adorned with sparkling diamonds. The diamonds are carefully set to maximize their brilliance, creating a dazzling effect that catches the light from every angle. The warm tones of the yellow gold provide a beautiful contrast to the icy sparkle of the diamonds, making these earrings a perfect blend of warmth and elegance. Ideal for special occasions, the Van Cleef & Arpels Snowflake Earrings are a statement piece that embodies the brand's commitment to exceptional craftsmanship and timeless design. These earrings are a true work of art, adding a touch of luxury and sophistication to any jewelry collection.",
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvpva8lm02ta12sjzegjzkcr_6630663__ywanXMfaOz',
    name: '2023 Escalade V Series',
    price: 215200,
    description:
      "Introducing the 2023 Escalade V Series, a high-performance variant of Cadillac's flagship luxury SUV, with only 8,000 miles on the clock. This model represents the pinnacle of power, agility, and luxury, offering a thrilling driving experience unlike any other. With its commanding presence, aggressive styling, and advanced engineering, the Escalade V Series is designed to leave a lasting impression on the road. Equipped with a potent engine and performance-tuned components, it delivers exhilarating acceleration and precise handling, making every drive a memorable experience. Inside the cabin, luxurious materials, state-of-the-art technology, and an array of comfort features ensure that both driver and passengers are surrounded by refinement and sophistication. Whether navigating city streets or conquering winding mountain roads, the low-mileage 2023 Escalade V Series promises to elevate your driving adventures to new heights of excitement and luxury.\n\nNote: Product is pre-owned. Further details upon claim.",
    brand: 'General Motors',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls1a2r81006rlb163shw0vru_5387319__yR_Dj10xR',
    name: 'Hermès Birkin 30 Himalaya Niloticus Crocodile Palladium Hardware',
    price: 214500,
    description:
      'This Himalaya Birkin is in Niloticus crocodile with palladium hardware and has tonal stitching, front flap, two straps with center toggle closure, clochette with lock and two keys, and double rolled handles.\n\nThe interior is lined with Gris Perle chevre and has one zip pocket with an Hermes engraved zipper pull and an open pocket on the opposite side.\n\n\nPayment for this item is by Bank Wire only unless other arrangements have been made.\n\nCollection: Y\n\nOrigin: France\n\nCondition: New and never worn (Plastic on hardware)\n\nAccompanied by: Hermes box, Hermes dustbag, clochette, lock, two keys, clochette dustbag, felt, carebook, ribbon, CITES and rainhat\n\nMeasurements: 11.75" width x 9.5" height x 6" depth; 4.25" handle drop',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx6qqj2j12c59wqkos5i17q1_162556__Fkg5Eoht3',
    name: 'Patek Philippe Nautilus 5711/1R 40mm',
    price: 212400,
    description:
      'The Nautilus 5711/1R is a distinguished timepiece, featuring a 40mm rose gold case and a matching rose gold bracelet that exude opulence. The luxurious chocolate dial enhances its refined elegance, making it a standout piece in any collection. Combining exceptional craftsmanship with timeless design, the Nautilus 5711/1R offers both sophistication and functionality, ideal for those who appreciate the finest in watchmaking.\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t',
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1h0btss0001qnvsbipf2pbb_6514550__emLIZin5F',
    name: 'Hublot Big Bang Integrated Rainbow 42mm',
    price: 210000,
    description:
      'The Hublot Big Bang Integrated Rainbow 42mm is a bold and luxurious timepiece that features a stunning array of multi-colored gemstones set in the bezel and dial. The 42mm case, crafted from polished gold, houses a self-winding chronograph movement, showcasing Hublot’s advanced craftsmanship. The integrated bracelet and vibrant rainbow-colored gems, including sapphires, rubies, and amethysts, give the watch a dazzling aesthetic. This unique and extravagant design makes it a standout piece in Hublot’s collection for those who appreciate both technical prowess and artistic flair.',
    brand: 'Hublot',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7keghp024xl614gydohzlo_3758157__fDlmM7JZi',
    name: 'Panthère De Cartier Brooch',
    price: 210000,
    description:
      'Panthère de Cartier brooch, white gold (750/1000), set with 51 sapphires, 2 emerald eyes, 1 onyx nose and 604 brilliant-cut diamonds totaling 2.88 carats.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1h044tc0000stk5ked4hedd_2603894__Sskf7FmdQ',
    name: 'Patek Philippe Grand Complications Chronograph Perpetual Calendar 41mm',
    price: 210000,
    description:
      "The Patek Philippe Grand Complications Chronograph Perpetual Calendar 41mm is an exceptional timepiece that combines two highly coveted complications: a chronograph and a perpetual calendar. Crafted in precious materials like gold or platinum, it features a 41mm case with an intricately detailed dial displaying day, date, month, leap year, and moon phases. Powered by a self-winding mechanical movement, it offers both precision and sophistication. This watch is a testament to Patek Philippe's mastery in blending traditional craftsmanship with advanced horology.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx5ckjns08ad71jz07nlv8jq_9001046__qtqfTpSqm',
    name: 'Patek Philippe Nautilus 5811/1G 41mm',
    price: 201600,
    description:
      "Introducing the Patek Philippe Nautilus 5811/1G, a symbol of refined luxury and impeccable craftsmanship. This 41mm timepiece features a sophisticated white gold case and bracelet, exuding elegance and exclusivity. The beautifully detailed blue dial, with its signature horizontal embossing, adds a touch of modernity to its timeless design. Known for its distinctive style and superior engineering, the Nautilus 5811/1G is a testament to Patek Philippe's legacy of creating exquisite and enduring timepieces, making it a must-have for any discerning collector.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1h0syi10000gh6m3jy78tbu_5466133__bZTiTvtwD',
    name: 'Patek Philippe Fully Iced Out 5980 18KR/SS 40mm',
    price: 201250,
    description:
      "The Patek Philippe Fully Iced Out 5980 18KR/SS 40mm is a luxurious and striking timepiece. Featuring a 40mm case made from a blend of 18K rose gold and stainless steel, the watch is fully encrusted with diamonds, giving it a dazzling appearance. Powered by a self-winding chronograph movement, this model maintains Patek Philippe's technical excellence while showcasing opulence and craftsmanship. The combination of precious metals, diamonds, and advanced horology makes it a standout piece for collectors and enthusiasts of high-end luxury watches.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz6eokk9004yr4jyqqdg993d_7493701__vHlKNU9iP',
    name: 'Jewelry Shop Credit',
    price: 200000,
    description:
      "Craft the jewelry of your dreams with PackDraw! Claim this voucher to collaborate with our team and design your own piece of high-end jewelry. Whether it's a bracelet, watch, necklace, earrings, ring, or a unique combination, we will do our best to tailor each creation just for you!\n\nNote: Redeeming this voucher initiates a personalized consultation with a member of our team through email to discuss your vision and assess feasibility. Claiming multiple vouchers increases your budget, allowing for even more luxurious designs.",
    brand: 'PackDraw',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm2264wq00000gnkzs0258ad4_6828467__p36py8BBp',
    name: 'Louis Vuitton Casino Trunk',
    price: 200000,
    description:
      'Specially made for those who love games of chance, the Louis Vuitton Casino Trunk is an exceptional piece. Exquisitely crafted from Monogram coated canvas with natural cowhide-leather trim and red microfiber lining, this hard-sided trunk contains everything needed to play poker, blackjack and roulette.\n\n22.8 x 43.3 x 22.8 inches\n(Length x Height x Width)\nMonogram coated canvas\nNatural cowide-leather trim\nMicrofiber lining\nBrass hardware\n2 aged natural leather side handles\n5 long drawers\n8 small drawers\nPoker carpet\nBlackjack carpet\nRoulette carpet\nRake\nRoulette\nRemovable suitcase\nCard dispenser\nGold-color press card\nGold-color dolly\nGold-color dealer\n5 gold-color dice\n240 blue poker chips\n340 red poker chips\n155 green poker chips\n125 brown poker chips\n370 gray poker chips\n30 yellow poker chips\n40 purple poker chips\nBlue poker card deck\nRed poker card deck\nBlue bridge card deck\nRed bridge card deck\nYellow bridge card deck\n2 mammoth ivory balls',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ckyprf0000jcp1tekwmxtz_4403632__Lur9wogEz',
    name: 'Audemars Piguet Royal Oak Jumbo Yellow Gold 39mm',
    price: 196500,
    description:
      'The Audemars Piguet Royal Oak Jumbo in Yellow Gold is an iconic timepiece that exudes luxury and craftsmanship. With its 39mm case crafted entirely from 18K yellow gold, this watch features the signature "Tapisserie" dial, offering a classic yet bold look. Powered by a slim automatic movement, it maintains the elegant design and precision that the Royal Oak line is known for. The integrated bracelet enhances its timeless appeal, making it a coveted piece for collectors and enthusiasts alike.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm16t1qi10000lay6qtkmxngn_3481011__PcRRjxweX',
    name: 'Rolex Daytona Yellow Gold and Diamonds 40mm',
    price: 195000,
    description:
      'The Rolex Daytona Yellow Gold and Diamonds 40mm is a luxurious chronograph crafted from 18K yellow gold, featuring a 40mm case and a dazzling diamond-set dial. Known for its high precision and sporty design, this timepiece is powered by the Calibre 4130 self-winding chronograph movement, ensuring optimal performance. The combination of opulent diamonds and the robust functionality of the Daytona series makes it perfect for those who appreciate both elegance and precision in a luxury watch.',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm01ft1by00fit3lpx6srpi0u_5719664__Ut1BEItvn',
    name: 'Van Cleef Marguerite Secrète watch 18K yellow gold, Diamond, Sapphire',
    price: 194700,
    description:
      'The Van Cleef & Arpels Marguerite Secrète Watch is a captivating and luxurious timepiece, exquisitely crafted from 18K yellow gold. This enchanting watch features a secret design, where the delicate dial is hidden beneath a beautifully crafted marguerite (daisy) motif. The petals of the daisy are adorned with sparkling diamonds, while the center is highlighted with vibrant sapphires, creating a stunning contrast against the warm yellow gold. This secret watch combines the charm of nature with the sophistication of fine jewelry, offering both elegance and a touch of mystery. The Van Cleef & Arpels Marguerite Secrète Watch is a true masterpiece, perfect for those who appreciate the beauty of hidden details and the artistry of exceptional craftsmanship. This timepiece is a symbol of refined luxury, making it a cherished addition to any jewelry collection.',
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu8pbcku0011ia14worejykd_4601505__TZl03KD1E',
    name: '2024 Range Rover SE 6CYL',
    price: 192000,
    description:
      'Introducing the 2024 Range Rover SE 6CYL, where luxury meets capability. Crafted to conquer any terrain with ease, this SUV combines refined elegance with uncompromising performance. With a potent 6-cylinder engine under the hood, advanced technology features, and sumptuous interior comforts, the Range Rover SE delivers an unparalleled driving experience. Elevate your adventures with the epitome of luxury and versatility.\n\nNote: Product may be pre-owned. Further details upon claim.',
    brand: 'Range Rover',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7l7tyl0067la13muslt6p9_6409793__YwKXnfvd-',
    name: 'Panthère De Cartier Earrings',
    price: 190000,
    description:
      'Panthère de Cartier earrings, 18K rose gold (750/1000), each set with 1 emerald eye, 6 onyx spots, 1 onyx nose, 9 onyx stones, 8 rubellites, and 134 brilliant-cut diamonds totaling 3.44 carats.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1gtpoho00009jzi9zjfdm91_6611592__JnL3v_EKYs',
    name: '2023 Mercedes-AMG GT 63',
    price: 190000,
    description:
      "The 2023 Mercedes-AMG GT 63 is a high-performance luxury sports sedan powered by a 4.0-liter twin-turbo V8 engine, delivering up to 630 horsepower. It accelerates from 0 to 60 mph in just 3.1 seconds, offering both power and precision. Equipped with AMG's dynamic 4MATIC+ all-wheel-drive system and advanced suspension, the GT 63 provides sharp handling and agility. The interior combines luxurious materials with cutting-edge technology, including a digital cockpit and customizable displays, making it an ideal blend of luxury and performance.",
    brand: 'Mercedes',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu8owod00122js13m20cj3b4_1171436__6_WjQpayX',
    name: '2022 Porsche 911 Carrera 4s Coupe',
    price: 188400,
    description:
      "The 2022 Porsche 911 Carrera 4S Coupe epitomizes the iconic sports car experience with its timeless design and exhilarating performance. This iteration of the legendary 911 boasts a sleek and aerodynamic exterior, showcasing Porsche's meticulous attention to detail and engineering excellence. Under the hood, a powerful yet refined engine delivers heart-pounding acceleration and dynamic handling, ensuring an adrenaline-fueled driving experience on both the road and the track. Inside the cabin, luxurious materials and impeccable craftsmanship create a cockpit tailored for the discerning driver, while cutting-edge technology features seamlessly integrate modern convenience with classic Porsche charm. With its legendary heritage and unmatched performance capabilities, the 2022 Porsche 911 Carrera 4S Coupe continues to redefine the standards of the sports car segment.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'Porsche',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw589i0z00ww13iffcaagf8h_449452__YHLDHqb0j',
    name: '2023 Porsche 911 Carrera T',
    price: 187200,
    description:
      "The 2023 Porsche 911 Carrera T embodies the essence of driving pleasure, offering a pure and exhilarating experience behind the wheel. As a tribute to Porsche's racing heritage, the Carrera T (Touring) emphasizes lightweight construction, agility, and driver engagement. With its specially tuned chassis, reduced weight, and performance-focused features, including a manual transmission option, the Carrera T delivers dynamic handling and precise feedback on every corner. The minimalist interior is purposeful and driver-focused, ensuring a distraction-free driving experience. Whether navigating winding roads or enjoying a spirited drive on the track, the 2023 Porsche 911 Carrera T is designed to ignite the passion of driving enthusiasts and deliver pure driving enjoyment.\n\nNote: Product is pre-owned. Further details upon claim.",
    brand: 'Porsche',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls3wyotk0081ku17cani6sv7_434891__iLzoO2ir0X',
    name: 'Hermès Sac Faubourg Birkin 20 So Black Matte Alligator Black Hardware',
    price: 185000,
    description:
      'This extremely rare VIP Birkin is in a combination of five different leathers and alligator skin with palladium hardware. The body of the bag is in black madame calfskin; the front flap, handles and strap are in black matte alligator; the awnings, tiret and "shopping bag" clochette are in Orange H swift leather; the trim is in black Sombrero; the window panes are in Jaune swift leather and the base is in black madame leather.\n\nThe interior is lined with black chevre and has one slip pocket on the back wall.\n\nPayment for this item is by Bank Wire only unless other arrangements have been made.\n\nCollection: U\n\nOrigin: France\n\nCondition: New and never worn (plastic on hardware) \n\nAccompanied by: Hermès orange gift box, navy silk dustbag, clochette, lock, keys, navy silk clochette dustbag, felt, rainhat, carebook, CITES\n\nMeasurements: 8" width x 6" height x 4" depth; 2" handle drop',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx3ngba50aywr66o7mvu384b_942494__0bRlyBvdW',
    name: 'Audemars Piguet Royal Oak Titanium Black/Blue Dial Perpetual Calendar 41mm',
    price: 184800,
    description:
      'Introducing the Audemars Piguet Royal Oak Titanium Black/Blue Dial Perpetual Calendar 41mm, a fusion of innovation and elegance. This sophisticated timepiece features a 41mm titanium case and bracelet, complemented by a striking black and blue dial. The perpetual calendar function, driven by the self-winding Calibre 5134, includes day, date, month, astronomical moon, and leap year indications. Designed for those who value precision and style, this Royal Oak model exemplifies the pinnacle of modern watchmaking craftsmanship.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2hf9d0t3moo5cghnz00zs_9602987__2ZZ04gqti',
    name: 'Audemars Piguet Royal Oak Stainless Steel Openworked Skeleton 41mm',
    price: 184000,
    description:
      'Discover the Audemars Piguet Royal Oak Stainless Steel Openworked Skeleton 41mm, a marvel of horological artistry. This exquisite timepiece features a meticulously crafted openworked dial that reveals the intricate mechanics of the watch, housed in a robust 41mm stainless steel case. The skeleton design showcases the Calibre 3132 movement, highlighting the exceptional craftsmanship and precision engineering synonymous with Audemars Piguet. Perfect for those who appreciate the blend of innovation and tradition, this Royal Oak model is a true testament to timeless elegance and technical prowess.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1joorn70000bkki4barcduk_287555__3KTwFQvMoE',
    name: '2025 BMW X7 Alpina',
    price: 182000,
    description:
      "The 2025 BMW X7 ALPINA is a luxury SUV that blends BMW's engineering with ALPINA's high-performance tuning. Powered by a twin-turbocharged V8, it delivers around 630 horsepower, providing exhilarating acceleration and top-tier handling. The X7 ALPINA offers sophisticated suspension tuning, all-wheel drive, and advanced driving dynamics for a smooth and responsive ride. Inside, the spacious cabin features bespoke materials, cutting-edge technology, and ALPINA-specific design touches, ensuring both comfort and exclusivity for luxury SUV enthusiasts.",
    brand: 'BMW',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1gue16700002bvdtwfowroh_4770650__PQCz4xNBU',
    name: 'Audemars Piguet Royal Oak Jumbo Extra-thin 39mm',
    price: 181250,
    description:
      'The Audemars Piguet Royal Oak Jumbo Extra-Thin 39mm is an iconic timepiece that embodies elegance and technical precision. Featuring a slim 39mm case crafted from precious metals like stainless steel, gold, or platinum, it is powered by the ultra-thin Calibre 2121 automatic movement. The "Petite Tapisserie" patterned dial, integrated bracelet, and signature octagonal bezel reflect the classic Royal Oak design. This watch is celebrated for its minimalist, slim profile and timeless appeal, making it a favorite among collectors and enthusiasts.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm01c59hb00hg437pzdyj5e92_7343126__MubXoFZpk',
    name: 'Van Cleef Folie des Prés bracelet 18K white gold, Diamond, Sapphire',
    price: 180400,
    description:
      "The Van Cleef & Arpels Folie des Prés Bracelet is a delicate and enchanting piece that captures the beauty of a blooming garden. Crafted in 18K white gold, this bracelet features an exquisite arrangement of sparkling diamonds and vibrant sapphires, meticulously set to resemble a cluster of delicate flowers in full bloom. The combination of brilliant diamonds and rich sapphires creates a harmonious and lively composition, reflecting the joyful exuberance of nature. The Folie des Prés Bracelet is a testament to Van Cleef & Arpels' exceptional craftsmanship and artistic design, making it a perfect accessory for adding a touch of elegance and color to any ensemble. This bracelet is an ideal choice for those who appreciate both the refined beauty of fine jewelry and the timeless allure of nature-inspired motifs.",
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1jof3se0004kwk7ohhpigb4_280864__zhBgc1t2Q-',
    name: '2025 BMW ALPINA B8 Gran Coupe',
    price: 178180,
    description:
      "The 2025 BMW ALPINA B8 Gran Coupe is a luxury performance sedan blending BMW's engineering with ALPINA's craftsmanship. Powered by a 4.4-liter twin-turbocharged V8, it produces 612 horsepower and 590 lb-ft of torque, offering exhilarating acceleration and top speeds. The B8 features all-wheel drive, refined suspension, and adaptive dynamics for a balanced, smooth ride. Its interior boasts premium materials, ALPINA-specific details, advanced technology, and bespoke luxury, making it an elegant yet powerful choice for those seeking performance and exclusivity in a grand touring vehicle.",
    brand: 'BMW',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluaku5hn006qjx12sn4hi7el_8637615__pts7R1Ig2',
    name: '2024 Mercedes GLE63S AMG Coupe',
    price: 177600,
    description:
      "Introducing the 2024 Mercedes GLE63S AMG Coupe, where luxury meets performance in an exhilarating blend. This coupe SUV boasts a powerful AMG engine paired with dynamic handling, delivering a thrilling driving experience. With its striking design and advanced technology features, the GLE63S AMG Coupe redefines sophistication on the road. Elevate your driving pleasure with Mercedes-Benz's hallmark craftsmanship and innovation.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'Mercedes',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm16tnlq30001tr7muxopxzqa_2219213__nC-OKOPaL',
    name: 'Rolex Daytona Everose Gold and Diamonds 40mm',
    price: 175000,
    description:
      'The Rolex Daytona Everose Gold and Diamonds 40mm is an exquisite timepiece that combines luxury with high performance. Crafted from 18K Everose gold, this 40mm chronograph features a dial adorned with sparkling diamonds, adding an opulent touch to its sporty design. Powered by the Calibre 4130 self-winding chronograph movement, it offers precision and reliability. This blend of diamonds and Everose gold makes the Daytona a perfect choice for those who seek both elegance and functionality in a luxury watch.',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm226eybp0000pljws9hksjqc_5689672__BgmEMB-sR',
    name: 'Louis Vuitton Malle Vendôme',
    price: 175000,
    description:
      'The company known for making custom G-Wagons is Brabus. They specialize in high-performance upgrades, luxury customizations, and unique styling options for Mercedes-Benz vehicles, including the G-Class. Brabus is renowned for transforming G-Wagons into ultra-luxurious and powerful SUVs with bespoke interiors, enhanced engines, and distinctive exteriors.',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2huge0ukroo5cj9709q8v_8403326__tfeaW16iF',
    name: 'Richard Mille RM029 Titanium',
    price: 174500,
    description:
      "The Richard Mille RM029 Titanium is a cutting-edge timepiece that exemplifies modern luxury and innovation. Featuring a lightweight yet durable titanium case, this watch combines advanced materials with exceptional craftsmanship. The RM029 showcases Richard Mille's distinctive design, characterized by its intricate skeletonized dial and bold aesthetic. Perfect for those who appreciate high-performance engineering and avant-garde style, the RM029 Titanium stands out as a remarkable piece in any collection.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu8p6oit0002l414kqopx2qn_5792041__eXJz5N4EK',
    name: '2022 Porsche 911 Carrera Coupe',
    price: 171000,
    description:
      "Experience the epitome of automotive excellence with the 2022 Porsche 911 Carrera Coupe. Combining iconic design with exhilarating performance, this sports car delivers unmatched thrills on every journey. With its powerful engine, precise handling, and luxurious interior, the 911 Carrera Coupe offers a driving experience like no other. Elevate your automotive dreams with Porsche's timeless masterpiece.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'Porsche',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7okeek00i1ig13c6b7y0fq_9871168__gRKRMqb3U',
    name: 'Panthère De Cartier Bracelet',
    price: 169400,
    description:
      'Bracelet, white gold (750/1000), black toile de moire, set with 2 emerald eyes, 67 onyx spots, 1 onyx nose, and 581 brilliant-cut diamonds totaling 4.13 carats.\nPlease note that the carat weight, number of stones and product dimensions will vary based on the size of the creation you order. For detailed information please contact us.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1jnwvzv00009uh9j9yx2pij_3342017__hKqBWF8NH',
    name: '2024 BMW M8 Competition Gran Coupe',
    price: 167900,
    description:
      "The 2024 BMW M8 Competition Gran Coupe AWD is a luxurious high-performance sedan powered by a 4.4-liter twin-turbocharged V8 engine that delivers 617 horsepower and 553 lb-ft of torque. It accelerates from 0 to 60 mph in just 3.0 seconds. The M8 Gran Coupe features BMW's xDrive all-wheel-drive system, adaptive M suspension, and M Sport differential for superior handling. Its spacious and tech-laden interior includes premium materials, cutting-edge infotainment, and driver-assistance systems, making it a blend of luxury, comfort, and thrilling performance.",
    brand: 'BMW',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clualzqzd00coie13ijks8w4g_7899515__dQtSDFIxP',
    name: '2020 Mercedes AMG GTC Convert',
    price: 166800,
    description:
      "Experience pure driving pleasure with the 2020 Mercedes-AMG GTC Convertible. This high-performance convertible blends thrilling performance with open-air luxury. With its powerful AMG engine, precise handling, and stunning design, the GTC Convertible offers an exhilarating driving experience. Elevate your journey with Mercedes-AMG's legacy of performance and sophistication.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'Mercedes',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm03ab6t800th7xwhd9qbrzdi_567486__JydKz0z_M',
    name: 'Van Cleef Lady Arpels Ballerine Enchantée watch 18K white gold, Diamond, Sapphire',
    price: 166800,
    description:
      "The Van Cleef & Arpels Lady Arpels Ballerine Enchantée Watch is a breathtaking fusion of haute horlogerie and artistic elegance. Crafted in 18K white gold, this exquisite timepiece features a captivating design inspired by the grace and beauty of a ballerina. The dial showcases a delicate ballerina figure, adorned with sparkling diamonds and vibrant sapphires, her tutu forming the shape of butterfly wings. The intricate automaton movement animates the ballerina, bringing the enchanting scene to life. Encircled by a bezel set with dazzling diamonds, the watch reflects Van Cleef & Arpels' commitment to exceptional craftsmanship and timeless beauty. The Lady Arpels Ballerine Enchantée Watch is a true work of art, combining storytelling, technical mastery, and luxurious materials, making it a cherished piece for collectors and connoisseurs alike.",
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2cc3m0efwoo5cq6epenyx_2562622__5KzlmkB6f',
    name: 'Rolex Daytona 40mm "Platona" ',
    price: 165600,
    description:
      'Introducing the 40mm Daytona "Platona" timepiece, an epitome of luxury and exclusivity. Crafted in platinum with an ice blue baguette dial, it exudes opulence and sophistication. The combination of exquisite materials and meticulous craftsmanship makes it a standout in the Daytona collection. Elevate your style with this new iconic addition, embodying timeless elegance and precision engineering.\n\n126506',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu4kw6ll001ila136592lmis_1558947__lUnQRF_pc',
    name: 'Santos De Cartier Skeleton 18k 40MM 32.00ctw',
    price: 165447,
    description:
      'This Cartier Santos is made of Rose and has a 36MM case size with 32.00ctw of diamonds.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clskybk0f000rl715khtb9bup_7132606__4io45RDlU',
    name: 'Nike Air Force 1 Low Louis Vuitton Monogram Brown Damier Azur',
    price: 165140,
    description:
      'Colorway\nMONOGRAM BROWN/DAMIER AZUR\n\nRetail Price\n$2,750\n\nRelease Date\n02/08/2022',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1itq9mo000158rz7oy3bdnj_5547120__NLrVjf695',
    name: 'Patek Philippe World Time Flyback Chronograph',
    price: 165000,
    description:
      'The Patek Philippe World Time Flyback Chronograph 39mm is a masterful combination of two complications: world time and flyback chronograph. Housed in a 39mm case, it allows the wearer to view 24 time zones simultaneously, while the flyback chronograph feature enables seamless time measurement without the need to stop and reset. Available in precious metals like rose gold or platinum, the watch features intricate dial artistry with hand-applied details, making it both a technical marvel and a statement of luxury. Perfect for global travelers and collectors.',
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7oa8c000flig13l8ltj7hf_1526804__0KJT60NXGN',
    name: 'Cartier Panthère Jewelry Watch',
    price: 165000,
    description:
      'Panthère Day/Night watch, 40 mm, hand-wound mechanical movement, caliber 9982 MC. Rhodiumized white gold 750/1000 case set with 288 brilliant-cut diamonds totaling 2.82 carats, white gold 750/1000 dial set with 319 brilliant-cut diamonds totaling 0.57 carats and blue aventurine glass, black lacquer spots and nose, pear-shaped emerald eyes totaling 0.08 carat, gray steel hands, dark blue and black straps in alligator leather. Day/Night complication. Minute movement with retrograde hand. Movement diameter: 14 lines (i.e. 31.98 mm), movement thickness: 4.85 mm, power reserve approx. 48 hours. Sapphire case back. Case thickness: 11.75 mm. Water-resistant up to 3 bar (approx. 30 meters/100 feet).',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx3pj4z00y2dr66odnj3sl41_4643604__Ikj6isRfa',
    name: 'Audemars Piguet Royal Oak Chronograph Rose Gold Green Dial 50th Anniversary 41mm',
    price: 162000,
    description:
      "Celebrate heritage and innovation with the Audemars Piguet Royal Oak Chronograph Rose Gold Green Dial 50th Anniversary edition. Crafted with meticulous attention to detail, this 41mm timepiece pays homage to a legacy of excellence. The striking green dial, a nod to the brand's iconic hue, captivates with its depth and vibrancy. Encased in luxurious rose gold, the chronograph function adds a touch of practicality to its distinguished design. Perfectly marrying tradition with modernity, this limited edition masterpiece is a testament to Audemars Piguet's enduring commitment to horological craftsmanship.",
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1jp2unb0000zaz8wh9ee30j_9620074__ytrH-5gOD3',
    name: '2025 BMW 760i xDrive',
    price: 162000,
    description:
      "The 2025 BMW 760i xDrive is a luxury sedan that offers top-tier performance and refinement. Powered by a 4.4-liter twin-turbocharged V8 engine, it produces around 536 horsepower and comes with BMW's xDrive all-wheel-drive system for optimal handling and traction. The 760i boasts a spacious, high-tech interior with premium materials, advanced driver assistance systems, and cutting-edge infotainment features. Combining powerful performance with luxury and comfort, the 760i xDrive is a flagship model in BMW's lineup, ideal for those seeking executive-level elegance and driving dynamics.",
    brand: 'BMW',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluampfwu0054if148y6sdv9q_6691782__WTfgI1Nxg',
    name: '2014 Ferrari California',
    price: 160800,
    description:
      "Introducing the 2014 Ferrari California, a masterpiece of Italian engineering and style. This convertible grand tourer embodies the spirit of Ferrari with its powerful engine, precise handling, and elegant design. Experience the thrill of open-top motoring and the luxury of Ferrari craftsmanship in the California. Elevate your driving experience with the timeless allure of Ferrari's iconic convertible.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'Ferrari',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx3pt97002zc10vw7fowmv7r_2504211__0FdQEnGMm',
    name: 'Audemars Piguet Royal Oak Tourbillon Stainless Steal Blue Dial 41mm',
    price: 160000,
    description:
      'The Audemars Piguet Royal Oak Tourbillon is a sophisticated timepiece crafted in stainless steel, featuring a striking blue dial. Measuring 41mm in diameter, this watch showcases the brand\'s signature octagonal bezel with eight hexagonal screws. The dial is adorned with the "Tapisserie" pattern, enhancing its elegance. Powered by a manual-winding tourbillon movement, this watch combines high-end craftsmanship with exceptional precision. It offers a glimpse of the intricate tourbillon mechanism through the open-worked dial, making it a true masterpiece for watch enthusiasts.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx9k4xtc0d2nhgjh56o6ru51_393253__cnVLL2D_M',
    name: 'Patek Philippe Nautilus 5980/1AR 40.5mm',
    price: 159000,
    description:
      'The Nautilus 5980/1AR is a stunning and luxurious timepiece, featuring a 40.5mm case crafted from a sophisticated blend of stainless steel and rose gold. This unique combination exudes elegance and modernity. The captivating blue dial further enhances its refined appearance, making it a standout piece in any collection. Renowned for its exceptional craftsmanship and elegant aesthetics, the Nautilus 5980/1AR is perfect for those who seek a blend of functionality and high-end style in a premium watch.',
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2caij0edpoo5clwly3t8z_5380621__DI1PhZ6bS',
    name: 'Patek Philippe 5711/1A Bustdown 40mm',
    price: 157500,
    description:
      'Introducing the Patek Philippe 5711/1A Bustdown, a dazzling reinterpretation of the classic Nautilus design. This 40mm masterpiece features a stainless steel case and bracelet, meticulously adorned with brilliant diamonds that elevate its luxurious appeal. The iconic blue dial, enhanced by the shimmering stones, exudes a unique blend of elegance and opulence. Celebrated for its craftsmanship and extravagant customization, the 5711/1A Bustdown is a statement piece that commands attention and admiration, perfect for those who appreciate both tradition and glamour.',
    brand: 'Patek',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1gy35b00000133ywpioi4km_2506632__gU2XdyiMu',
    name: 'Audemars Piguet Royal Oak 41mm',
    price: 157500,
    description:
      'The Audemars Piguet Royal Oak 41mm with a Blue Dial in Stainless Steel is an iconic luxury timepiece. It features a 41mm case made from stainless steel, with the signature octagonal bezel and integrated bracelet. The blue "Grande Tapisserie" patterned dial adds a striking contrast, showcasing classic Royal Oak aesthetics. Powered by an automatic movement, this watch combines elegance, precision, and the brand’s legendary craftsmanship, making it a sought-after piece for those who appreciate both style and horological excellence.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx6r7dch064yxjd2difpvoku_596205__3Lc07Fzm4',
    name: 'Patek Philippe Olive Aquanaut 5968G 42.2mm',
    price: 155400,
    description:
      'The Patek Philippe Olive Aquanaut 5968G is a stunning timepiece, featuring a 42.2mm white gold case that exudes elegance and sophistication. This luxurious watch is paired with a robust rubber strap and an eye-catching olive dial, creating a unique and contemporary look. Known for its exceptional craftsmanship and innovative design, the Olive Aquanaut 5968G is perfect for those who appreciate both functionality and refined style in a high-end watch.',
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clual5clz001jjq1417jsllbz_4038901__U-LY0_yMA',
    name: '2023 BMW M8 Conver',
    price: 154800,
    description:
      "Introducing the 2023 BMW M8 Convertible, where performance meets open-air luxury. This convertible exemplifies BMW's commitment to exhilarating driving experiences. With its powerful engine, precise handling, and sophisticated design, the M8 Convertible offers unmatched thrills on the road. Elevate your driving adventures with BMW's legacy of innovation and craftsmanship.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'BMW',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm03a6uv901jwdvymxcmhoebk_521295__5-pGmB1ck',
    name: 'Van Cleef Midnight Pont des Amoureux watch 18K white gold',
    price: 153600,
    description:
      "The Van Cleef & Arpels Midnight Pont des Amoureux Watch in 18K white gold is a masterpiece of horological artistry and romantic storytelling. This enchanting timepiece features a beautifully crafted dial that depicts a Parisian scene at night, with two lovers meeting on the iconic Pont des Amoureux bridge. The watch’s intricate automaton movement brings the scene to life, with the figures moving towards each other as time progresses. Crafted from luxurious 18K white gold, the case adds a touch of elegance and refinement to the poetic design. The Midnight Pont des Amoureux Watch is not just a timepiece but a work of art, combining Van Cleef & Arpels' exceptional craftsmanship with a story of love and romance. Perfect for those who appreciate unique and meaningful luxury, this watch is a true collector's item.",
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx9jmiwu01j0hgjhb9sz9zd8_7784441__ufjY9tSUw',
    name: 'Patek Philippe Nautilus 5726/1A 40.5mm',
    price: 153600,
    description:
      'The Nautilus 5726/1A is a remarkable timepiece, featuring a 40.5mm stainless steel case and a matching stainless steel bracelet that combine durability with sleek design. The captivating blue dial enhances its sophisticated appearance, making it a standout piece in any collection. Renowned for its exceptional craftsmanship and elegant aesthetics, the Nautilus 5726/1A is perfect for those who seek a blend of functionality and refined style in a high-quality watch.',
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1jmyzo6000013uksw3hoo4v_5964259__CxWVBInygD',
    name: '2020 Mercedes-Benz GLS 63 AMG Night Edition Executive',
    price: 152250,
    description:
      'The 2020 Mercedes-Benz GLS 63 AMG Night Edition Executive is a high-performance luxury SUV powered by a 4.0-liter twin-turbocharged V8 engine producing 603 horsepower. It offers advanced features like AMG performance tuning, air suspension, and all-wheel drive for superior handling and power. The Night Edition Executive package enhances the vehicle’s design with blacked-out exterior elements, premium interior materials, and cutting-edge technology, ensuring both comfort and style. This model delivers a blend of performance, luxury, and versatility, making it ideal for luxury SUV enthusiasts.',
    brand: 'Mercedes-Benz',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluakbbz600y2l113q2vfelui_5940680__DVUKGUCm_',
    name: '2023 Audi RSQ8',
    price: 151200,
    description:
      "Experience unparalleled power and luxury with the 2023 Audi RSQ8. This SUV redefines performance with its potent engine and dynamic handling. Combining athletic design with advanced technology, the RSQ8 offers a thrilling driving experience. Elevate your journey with Audi's commitment to excellence in every detail.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'Audi',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm16tcpxy0001lay6on2uapqy_8292273__ALLdAl5Hj',
    name: 'Rolex Daytona White Gold and Diamonds Mother of Pearl 40mm',
    price: 150000,
    description:
      'The Rolex Daytona White Gold and Diamonds 40mm with a Mother of Pearl dial is an opulent and high-performance timepiece. Crafted from 18K white gold, the 40mm case is adorned with dazzling diamonds, while the Mother of Pearl dial adds a touch of elegance and uniqueness. Powered by the Calibre 4130 self-winding chronograph movement, it ensures precision and functionality. This luxurious chronograph is perfect for those who appreciate a balance of high-end design and technical excellence.',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsj32ugj0010l7188y8senxl_2394255__4k6PmWNVP',
    name: 'Patek Philippe Aquanaut Chronograph Steel & Orange Rubber 42mm',
    price: 150000,
    description:
      "Introducing the Patek Philippe Aquanaut Chronograph, a dynamic blend of modern design and traditional craftsmanship. This striking timepiece features a robust stainless steel case paired with a vibrant orange rubber strap, offering a bold yet stylish contrast. The chronograph functions add a layer of functionality to its sleek design, making it perfect for both casual and formal occasions. Known for its unique aesthetic and exceptional performance, the Aquanaut Chronograph is a testament to Patek Philippe's commitment to innovation and excellence.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz6eo23w000ywgsbl3zd8v6k_3542269__K6eMpMIqu',
    name: 'Jewelry Shop Credit',
    price: 150000,
    description:
      "Craft the jewelry of your dreams with PackDraw! Claim this voucher to collaborate with our team and design your own piece of high-end jewelry. Whether it's a bracelet, watch, necklace, earrings, ring, or a unique combination, we will do our best to tailor each creation just for you!\n\nNote: Redeeming this voucher initiates a personalized consultation with a member of our team through email to discuss your vision and assess feasibility. Claiming multiple vouchers increases your budget, allowing for even more luxurious designs.",
    brand: 'PackDraw',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63c96b54278798421e68749d.png',
    name: 'Blue Aquanaut 5968',
    price: 147150,
    description: '',
    brand: 'Patek',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63c029dc25544d9a17430933.png',
    name: 'Royal Oak Frosted Blue Dial',
    price: 146625,
    description: '',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2cc3o0egkoo5cc90l0s2b_3009263__yYjcbEwi5',
    name: 'Rolex Daytona 40mm',
    price: 145470,
    description:
      'Introducing the Rolex Daytona 40mm in White Gold, a masterpiece of horological excellence and timeless elegance. This timepiece features a mesmerizing meteorite dial, showcasing the beauty of celestial elements on your wrist. Crafted with precision and luxury in mind, it boasts the iconic Daytona design on a white gold bracelet, elevating your style to new heights. Experience the fusion of innovation and tradition with this remarkable addition to the Rolex family.\n\n116509',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu8pe74j00rzju13uxhrxuzp_6010687__NNju8kE0j',
    name: '2023 Mercedes S580',
    price: 145200,
    description:
      'Introducing the 2023 Mercedes S580, where luxury meets innovation. Crafted to redefine sophistication, this sedan seamlessly blends cutting-edge technology with timeless elegance. With a powerful S580 engine, state-of-the-art driver-assistance systems, and opulent interior amenities, the Mercedes S580 sets new standards for automotive excellence. Experience the pinnacle of luxury and performance in every journey.\n\nNote: Product may be pre-owned. Further details upon claim.',
    brand: 'Mercedes',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63bf0331c0039d19a1da2f73.png',
    name: 'Richard Mille RM010 Titanium',
    price: 144040,
    description:
      "The Richard Mille RM010 Titanium is a striking and innovative timepiece that blends modern design with advanced engineering. Featuring a lightweight and robust titanium case, this watch is both durable and comfortable. The RM010's signature skeletonized dial reveals the intricate mechanics within, showcasing the exceptional craftsmanship and precision synonymous with Richard Mille. Ideal for those who value cutting-edge technology and distinctive style, the RM010 Titanium is a standout addition to any watch collection.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2hptr0u13oo5ci7135x00_2087925__zuiOr6qWw',
    name: 'Patek Philippe Nautilus 5711/1A 40mm',
    price: 144000,
    description:
      "Discover the iconic Patek Philippe Nautilus 5711/1A, a masterpiece of horological design. This 40mm timepiece features a sleek stainless steel case and matching bracelet, exuding both durability and elegance. The striking blue dial, with its signature horizontal embossing, enhances the watch's modern yet timeless appeal. Celebrated for its blend of sporty aesthetics and sophisticated craftsmanship, the Nautilus 5711/1A is a symbol of prestige and an essential addition to any serious watch collection.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2cc3q0ehnoo5ccb3lbqez_1256559__eaF2Z1jdY',
    name: 'Patek Philippe Nautilus 5712 40mm',
    price: 144000,
    description:
      "Explore the Patek Philippe Nautilus 5712/1A, a pinnacle of refined watchmaking. This elegant 40mm timepiece features a robust stainless steel case and bracelet, combining durability with sophisticated style. The captivating blue dial, with its moon phase, power reserve, and date subdials, showcases both functionality and beauty. Renowned for its distinctive design and exceptional craftsmanship, the Nautilus 5712/1A is an enduring symbol of luxury and precision, making it an indispensable addition to any discerning collector's repertoire.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx6ccg9d1tknvl6lft9knmrd_2912490__AJnem6gsQ',
    name: 'Patek Philippe Blue Aquanaut 5968G 42.2mm',
    price: 142800,
    description:
      "The Aquanaut 5968G Blue is a sophisticated and striking timepiece, featuring a 42.2mm white gold case that epitomizes luxury. This exquisite watch comes with a comfortable rubber strap and a vibrant blue dial, adding a touch of modern elegance to its design. The Aquanaut's impeccable craftsmanship and stylish appearance make it an ideal choice for those who value both functionality and refined aesthetics.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clual0d3g00mdjp13jva4eiin_2813230__JiWaRsm86',
    name: '2023 BMW M5',
    price: 141600,
    description:
      "Experience unrivaled performance with the 2023 BMW M5. This sedan exemplifies the pinnacle of driving dynamics and luxury. With its powerful engine, precise handling, and cutting-edge technology, the M5 delivers an exhilarating driving experience. Elevate your journey with BMW's legendary craftsmanship and innovation.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'BMW',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu4l049e003ljg13zas46c3u_4106085__AduQ7_g4D',
    name: 'Cartier - Panthere Skeleton - Hpi01359 - Yellow Gold Diamonds',
    price: 139700,
    description:
      'Cartier HPI01359\nPasha De Cartier\n41mm Case Size\n18K Yellow Gold\nUnworn\nFull Set - Box & Papers Included',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx5caq5304d071jzysrszr84_7222138__RlC_H3Xj5',
    name: 'Patek Philippe Nautilus 5980/1A 40.55mm',
    price: 138000,
    description:
      "Introducing the Patek Philippe Nautilus 5980/1A, a seamless blend of sophistication and functionality. This 40.5mm timepiece features a robust stainless steel case and bracelet, epitomizing both strength and elegance. The striking blue dial is adorned with a chronograph function and date display, enhancing its practicality while maintaining its refined aesthetic. Celebrated for its distinctive design and exceptional craftsmanship, the Nautilus 5980/1A is a testament to Patek Philippe's legacy of creating timeless and versatile luxury watches.",
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0bp51e70004b0hd7cj6hvuh_476390__Fgjddl15o',
    name: '2025 Mercedes-Benz GLS 580',
    price: 138000,
    description:
      'The 2025 Mercedes-Benz GLS 580 is the epitome of luxury and performance in a full-size SUV. This sophisticated vehicle combines powerful engineering with cutting-edge technology, offering a smooth and responsive driving experience. Equipped with a robust V8 engine, the GLS 580 delivers impressive power while maintaining refined comfort. The interior is designed with premium materials, advanced infotainment features, and spacious seating for up to seven passengers, ensuring a first-class experience for both driver and passengers. With its bold design, state-of-the-art safety systems, and unparalleled luxury, the 2025 Mercedes-Benz GLS 580 is a standout choice for those seeking a blend of elegance and capability in an SUV.',
    brand: 'Mercedes',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm01bwwkn00zbq64741u5aqpw_1364455__VB2zUhecQ',
    name: 'Van Cleef Palmyre bracelet 18K yellow gold, Diamond',
    price: 135300,
    description:
      "The Van Cleef & Arpels Palmyre Bracelet is a stunning expression of luxury and elegance, crafted from 18K yellow gold and adorned with brilliant diamonds. The bracelet features a fluid, openwork design that resembles a cascading river of light, with each diamond meticulously set to catch and reflect the light beautifully. The warm hue of the yellow gold complements the dazzling diamonds, creating a harmonious and sophisticated look. Perfect for special occasions or adding a touch of opulence to everyday wear, the Palmyre Bracelet showcases Van Cleef & Arpels' dedication to exceptional craftsmanship and timeless design. This piece is a true testament to the brand's artistry, making it a cherished addition to any jewelry collection.",
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm16tt3rr0002tr7m5cf8zehv_5185093__FdHrs9Ql6',
    name: 'Rolex Daytona White Gold Black and White Mother of Pearl 40mm',
    price: 135000,
    description:
      "The Rolex Daytona White Gold 40mm with a Black and White Mother of Pearl dial is a luxurious blend of elegance and performance. Crafted from 18K white gold, this model features a stunning mother of pearl dial with subtle black and white tones, accentuated by diamond hour markers. Powered by the Calibre 4130 self-winding chronograph movement, it ensures precision and reliability. This timepiece combines Rolex's advanced engineering with a sophisticated, eye-catching design, perfect for those seeking both luxury and functionality in their watch.",
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2hbkv0sysoo5cjv3kh8h2_9337037__K56U_mHkQ',
    name: 'Patek Philippe Aquanaut 5164R 40.8mm',
    price: 134400,
    description:
      'Experience the epitome of luxury with the Patek Philippe Aquanaut 5164, featuring a stunning 40.8mm rose gold case that exudes elegance and sophistication. This exquisite timepiece is complemented by a durable and comfortable rubber strap, perfectly blending style and functionality. The rich chocolate dial adds a touch of warmth and refinement, making it a unique standout in any collection. Designed for the discerning individual, the Aquanaut 5164 is not just a watch but a statement of prestige and timeless elegance.',
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx2n4akb03h8a24tudpg1sxy_5861381__92IeGBsPeF',
    name: 'Audemars Piguet Royal Oak White Gold Frosted Royal Oak Blue Dial 41mm',
    price: 134400,
    description:
      'Discover the Audemars Piguet Royal Oak White Gold Frosted Royal Oak Blue Dial 41mm, a stunning fusion of elegance and craftsmanship. This exquisite timepiece features a 41mm frosted white gold case, creating a unique shimmering effect, paired with a striking blue "Grande Tapisserie" dial. Powered by the self-winding Calibre 3120, it ensures precise timekeeping and reliability. The iconic octagonal bezel and integrated bracelet complete the luxurious design, making it a perfect choice for those who appreciate sophisticated aesthetics and exceptional watchmaking.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7ozi6v01fbl913rkv2erya_6439212__VBRVWpvgu',
    name: 'La Panthère De Cartier Watch',
    price: 133000,
    description:
      'Panthère de Cartier bangle watch, 18 mm, quartz movement. 18K yellow gold (750/1000) case, bezel set with 24 brilliant-cut diamonds totaling 0.42 carats, 18K yellow gold (750/1000) bracelet and panther head set with 493 brilliant-cut diamonds totaling 4.33 carats, pear-shaped emerald eyes, black lacquer motifs, black lacquer dial, gold-finish steel sword-shaped hands. Thickness: 8.5 mm. Water-resistant up to 3 bar (approx. 30 meters/100 feet). Size 17',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls1zd39h008rl717an56cb3b_8880438__y5-30jXlD',
    name: 'Hermès Kelly Sellier 25 Ombre Varanus Salvator Lizard Palladium Hardware',
    price: 132000,
    description:
      'This Kelly, in the Sellier style, is in Ombre Veranus Salvator lizard with palladium hardware and features tonal stitching, a front toggle closure, a clochette with lock and two keys and a single rolled handle.\n\n\nThe interior is lined with Parchemin chevre and features one zip pocket with an Hermes engraved pull and one open pocket on the opposite side.\n\n\nCollection: Y\n\n\nOrigin: France\n\n\nCondition: New and never worn (plastic on hardware)\n\n\nAccompanied by: Hermes box, Hermes dustbag, clochette, lock, two keys, shoulder strap, shoulder strap dustbag, ribbon, CITES\n\n\nMeasurements: 10" width x 7.5" height x 4.75" depth; 2.75" handle drop (16.5" shoulder strap drop)',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7ocjmo009plc13h999tsyw_2111622__9qM7mB2vl',
    name: "Cartier Révélation D'une Panthère Watch",
    price: 131000,
    description:
      "Révélation d'une Panthère watch, 37 mm, Manufacture mechanical movement with manual winding, caliber 430 MC. Yellow gold 750/1000 case set with 44 brilliant-cut diamonds totaling 1.64 carats, blue mother-of-pearl dial, panther motif in gold beads revealed by movements of the wrist, beaded crown set with a brilliant-cut diamond, gold-finish steel apple-shaped hands. Strap in shiny blue alligator leather (additional in shiny black alligator leather), yellow gold 750/1000 double adjustable folding buckle set with 43 brilliant-cut diamonds totaling 0.42 carats. Thickness: 8,65 mm. Water-resistant to 3 bar (approx. 30 meters/100 feet). Numbered limited edition of 100 pieces.",
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clusi7ymv0027jm13w4crn895_4510172__bhBH1Ieqd',
    name: 'Audi R8 V10',
    price: 130000,
    description:
      'The 2017 Audi R8 V10 epitomizes automotive excellence, blending breathtaking performance with unrivaled luxury. Powered by a formidable 5.2-liter V10 engine, it delivers an exhilarating driving experience with 540 horsepower at your command. Its sleek, aerodynamic design exudes sophistication and speed, while the meticulously crafted interior boasts premium materials and cutting-edge technology, ensuring every journey is both thrilling and refined. Whether carving through winding roads or cruising in style, the 2017 Audi R8 V10 offers a harmonious blend of power, precision, and prestige.\n\nNote: Product may be pre-owned. Further details upon claim.',
    brand: 'Audi',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls1zm5d8001wl217jo0ynayd_6058306__Yz24bwzTxd',
    name: 'Hermès Birkin 25 Ombre Varanus Salvator Lizard Palladium Hardware',
    price: 126500,
    description:
      'This Birkin is in Ombre shiny Salvator lizard with palladium hardware and has tonal stitching, front strap, two straps with center toggle closure, clochette with lock and two keys and double rolled handles.\n\nThe interior is lined with Parchemin chevre and has one zip pocket with an Hermes engraved zipper pull and an open pocket on the opposite side.\n\nPayment for this item is by Bank Wire only unless other arrangements have been made.\n\n\nCollection: Z\n\nOrigin: France\n\nCondition: New and never worn (plastic on hardware) \n\nAccompanied by: Hermes box, Hermes dustbag, clochette, lock, two keys, clochette dustbag, rainhat, carebook, CITES and felt\n\nMeasurements: 10" width x 7.5" height x 4.75" depth; 2.75" handle drop',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluakmf02010ql613qwmxqrz7_3789501__GIGe8kpPZ',
    name: '2021 Audi RS7',
    price: 126000,
    description:
      "Unleash unmatched performance with the 2021 Audi RS7. This luxury sportback sedan combines breathtaking power with sleek design. With its dynamic handling and advanced technology, the RS7 offers a driving experience like no other. Elevate your journey with Audi's dedication to performance and refinement.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'Audi',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2cc3n0eghoo5cowjl4853_3009028__5zKFR6bNc',
    name: 'Rolex Daytona 40mm',
    price: 125925,
    description:
      'Introducing the Rolex 40mm Daytona in Rose Gold on Oysterflex, a harmonious blend of luxury and performance. This timepiece boasts a captivating meteorite dial, evoking the beauty of the cosmos with its unique markings. Paired with a rose gold case and the innovative Oysterflex bracelet, it offers unparalleled comfort and durability. Experience the pinnacle of horological craftsmanship and sophistication with this iconic Daytona model, designed to exceed your expectations in both style and functionality.\n\n116515LN',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyglhurm007pmq2c2ppkmo6v_8681950__XKac--t1V',
    name: '2024 Audi RS3 8Y Vorsprung',
    price: 125000,
    description:
      'The 2024 Audi RS3 8Y Vorsprung is a high-performance luxury compact sedan featuring a 2.5-liter turbocharged five-cylinder engine with Quattro all-wheel drive, adaptive suspension, and a sport-tuned exhaust for exceptional handling and power. The Vorsprung trim includes premium Nappa leather seats, carbon fiber accents, the latest MMI infotainment system, a high-resolution digital cockpit, and a Bang & Olufsen sound system. Its aggressive styling, with a signature RS honeycomb grille and sporty rear diffuser, makes the 2024 Audi RS3 8Y Vorsprung a standout in both performance and luxury.',
    brand: 'Audi',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvoeo7vk1a4cahl57occjrhp_239416__iNk-aZ9pb',
    name: 'Hermès Pre-Owned 2001 Birkin 40 handbag',
    price: 125000,
    description:
      'Named after Grace Kelly in 1977, Hermès’ namesake bag became one of the most sought-after styles in the world. This version of the original model is crafted from embossed silk satin and retains every other hallmark, including the structured metal feet and signature sangles.\nMade in France\nHighlights\ncirca 1990\nemerald green\nsilk satin\nsuede trim\nembossed detail\nsingle top handle\nsignature sangles straps\ntwist-lock fastening\nfoldover top\nmain compartment\nadjustable detachable shoulder strap\nmetal feet\nCondition: GOOD. This previously owned and used item is in good condition with minimal signs of use. This may include fading of material or plating and scratches.\nPurchasing this item continues its narrative and reduces the environmental impact by avoiding the use of new resources needed to make the product from scratch, such as water, materials and electricity, and avoiding additional manufacturing impact.\nComposition\nOuter: Satin 100%, Suede 100%',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63c18b94a298da842ea33178.png',
    name: 'Richard Mille RM005 Titanium',
    price: 123625,
    description:
      "Introducing the Richard Mille RM005 Titanium—a pinnacle of haute horlogerie crafted from lightweight and durable titanium. This exquisite timepiece features Richard Mille's signature tonneau-shaped case, offering a perfect blend of elegance and sportiness. Powered by a high-performance automatic movement, the RM005 delivers exceptional precision and reliability. With its skeletonized dial and sapphire crystal caseback, every detail of the movement is proudly displayed, showcasing the brand's commitment to innovation and craftsmanship. Whether worn for everyday luxury or high-octane adventures, the Richard Mille RM005 Titanium is a statement of sophistication and refinement.",
    brand: 'Richard Mille',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm16wz6nn0000taqenw1ngvli_2268131__PVqR15bJs',
    name: 'Full Swing Golf Pro 2.0 Simulator',
    price: 68625,
    description:
      'The Full Swing Pro 2.0 Simulator offers a top-tier golf simulation experience with cutting-edge technology, including real-time ball tracking, advanced analytics, and 360-degree environmental accuracy. Known for its use by professional golfers, this simulator provides precise data on swing, ball flight, and club impact, making it ideal for training and entertainment. It features dual tracking technology that combines infrared sensors and high-speed cameras to deliver highly accurate feedback, replicating a realistic golf experience indoors. Perfect for golfers looking to elevate their game year-round.',
    brand: 'FullSwing',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls3lpulh011bi8160g9ky8tg_9618534__LEooNU8hv',
    name: 'Pre-owned Hermès Mini Picnic Kelly 20 Gold Swift Palladium Hardware',
    price: 68200,
    description:
      'This rare Mini Picnic Kelly Bag is in Gold swift leather and Osier wicker with palladium plated hardware and has contrast stitching, two straps with toggle closure, single rolled handle and shoulder/crossbody strap.\n\nThe interior is lined with Gold swift and has one slip pocket.\n\nCollection: Z\n\nOrigin: France\n\nCondition: Preowned; Mint - bag retains its structure, leather has light marks, no plastic on hardware resulting in scratching on turnlock, the interior shows light signs of wear. \n\nAccompanied by: Hermes box, Hermes dustbag, shoulder strap, shoulder strap dustbag, carebook, felt and ribbon\n\nMeasurements: 7.4" width x 5.7" height x 3" depth; 2" handle drop, 18.5" strap drop',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clzc23t3n01vz10d6ieu9nagm_3936550__QercMO1OA',
    name: '2002 Pokemon PSA 10 GEM MINT Charizard holo Legendary Collection',
    price: 67387,
    description:
      'The 2002 Pokémon PSA 10 GEM MINT Charizard Holo from the Legendary Collection is a highly coveted collectible card. Known for its stunning artwork and nostalgic appeal, this card features Charizard, one of the most iconic and beloved Pokémon. Graded as GEM MINT 10 by PSA, it signifies that the card is in perfect condition with flawless surfaces, sharp corners, and pristine edges. The Legendary Collection is renowned for its unique and striking reverse holo pattern, making this Charizard card a standout piece in any collection. Perfect for avid Pokémon collectors and investors, this PSA 10 GEM MINT Charizard Holo is a true gem that represents the pinnacle of Pokémon card collecting.',
    brand: 'Pokemon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2cc3m0efzoo5cowqkipbs_25765__MnyF2ZoKe',
    name: 'Rolex Daytona 40mm',
    price: 66650,
    description:
      'Introducing the Rolex 40mm Daytona in Yellow Gold on Bracelet with a White Dial, a timeless icon of luxury and precision. Crafted with meticulous attention to detail, this distinguished timepiece exudes elegance and sophistication. The vibrant yellow gold case and bracelet elevate its allure, while the crisp white dial exudes a sense of timeless refinement. Designed for the modern connoisseur, the Daytona combines impeccable craftsmanship with high-performance functionality. Elevate your style with this esteemed Rolex masterpiece, embodying the epitome of horological excellence and prestige.\n\n116508',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls3nrg7e0033la16axhjo7tt_6062991__lX9Fo0I8l',
    name: 'Hermès Special Order (HSS) Kelly Retourne 35 Vert Fonce Matte Alligator Brushed Gold Hardware',
    price: 65450,
    description:
      'This Kelly, in the Retourne style, is in Vert Fonce Matte Alligator with brused gold hardware and features tonal stitching, two straps with front toggle closure, clochette with lock and two keys, single rolled handle and removable strap.\n\nThe interior is lined with Vert Fonce chevre and features one zip pocket with an Hermes engraved pull and two open pockets on the opposite side.\n\nCollection: Z\n\nOrigin: France\n\nCondition: New and never worn (Plastic on hardware)\n\nAccompanied by: Hermes box, Hermes dustbag, clochette, lock, two keys, shoulder strap, clochette dustbag, shoulder strap dustbag, felt, carebook, and CITES\n\nMeasurements: 14" width x 10" height x 5" depth; 4.5" handle drop (14" shoulder strap drop)',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvrfl93r03au13o42gsz7ypq_9224865__306QHYItJ',
    name: 'Rolex Daydate 40mm',
    price: 65400,
    description:
      'Introducing the Rolex Day-Date 40mm in Rose Gold with an Olive Dial—a symbol of timeless elegance and prestige. Crafted with meticulous attention to detail, this distinguished timepiece combines the luxurious warmth of rose gold with the unique charm of an olive dial. The 40mm case size offers a perfect balance of sophistication and presence on the wrist, suitable for any occasion. The olive dial adds a touch of character and refinement, making it a standout choice for those who appreciate distinctive and stylish designs. Whether worn for formal events or everyday wear, the Rolex Day-Date 40mm in Rose Gold with Olive Dial epitomizes luxury and sophistication, representing the pinnacle of horological excellence.',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clzodj8vl000011hlkj7y4r7c_1182471__lWHkE9jjf',
    name: 'GoldVein by Kamon - GV No.2',
    price: 65000,
    description:
      "An object with no equal, GoldVein No.2 represents the collaboration between GoldVein's founders Tobias Hangler, David Wolkerstorfer, and Abe Shaw, together with designer and world-renowned chef knife artist Benjamin Kamon. Forged by hand from proprietary blade steels developed in-house together with pure gold, then matched with ancient Austrian Bog Oak, zirconium, and gold-plated hardware, GoldVein No.2 is a one-of-a-kind-heirloom object built to perform at the highest level. Each blade component is molten, cast, and forged by hand. The bonding of 24k gold with carbon steel in this way is unprecedented, with the gold playing both an aesthetically striking role in the finished knife as well as the technically requisite role of inhibiting carbon diffusion during forging and hardening. No detail is overlooked, with balance, edge geometry, and utility paramount as they are with every GoldVein creation. From a thin, hard, razor-sharp edge to the rounded blade spine's full-distal taper and the handle's gold-plated screws, this purposeful tool is guaranteed to satisfy the most discerning chef. The design of this knife is that of Benjamin Kamon, while the finished product is the result of the four men's multiple decades of combined experience crafting world-class functional art. ",
    brand: 'Tobias Hangler, David Wolkerstorfer, Abe Shawg, and Benjamin Kamon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2hbku0sygoo5cte8szh35_1253241__WmygMuzPU',
    name: 'Royal Oak Rose Gold Black Dial',
    price: 64975,
    description: '41MM Rose Gold Royal Oak Black Dial on Leather',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clruw5ha6001elb17d16zce00_9332958__1j-Am5orV',
    name: '14MM Raised Miami Cuban Diamond Necklace 14k Solid Gold 28.25ctw',
    price: 64831,
    description:
      'This 14mm iced-out Raised Prong Miami Cuban Link Necklace makes an unforgettable statement. The necklace, which shows 28.25ctw VS diamonds, has a diamond-encrusted box clasp.',
    brand: 'Icebox',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls3r2kyg003dib17hz59rlye_3167203__hIqiw02XS',
    name: 'Hermès "One Two Three and Away We Go" Birkin 25 Multicolor Swift Palladium Hardware',
    price: 64350,
    description:
      'This Limited Edition One Two Three and Away We Go Birkin is in Multicolor Swift leather with Palladium hardware, designed by Nigel Peake, has contrast stitching, front flap with two straps, front toggle closure, clochette, lock and two keys, and double rolled handles.\n\nThe interior is lined with bleu saphir swift and has one zip pocket with an Hermes engraved zipper pull and an open pocket on the opposite side.\n\nCollection: C\n\nOrigin: France\n\nCondition: Never worn (Plastic on hardware)\n\nAccompanied by: Hermes box, Hermes dustbag, clochette, lock, two keys, clochette dustbag, felt, rainhat, carebook and ribbon\n\nMeasurements: 10" width x 7.5" height x 4.75" depth; 2.75" handle drop',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0hk4pti0000xg40boxtjtbx_8805397__gWjDHv2Ud',
    name: 'Rolex Gold Sky-Dweller Black Dial 42 mm',
    price: 64000,
    description:
      "The 2024 release of the Rolex Sky-Dweller 42 mm is a stunning example of luxury and precision, crafted for those who appreciate the finest in watchmaking. This model features a robust 18k yellow gold case and a matching Jubilee bracelet, offering both elegance and comfort. The bright black dial provides a striking contrast against the rich gold, while the iconic fluted bezel adds a touch of classic Rolex design. Known for its dual time zone display and annual calendar, the Sky-Dweller is perfect for global travelers who require both style and functionality. The combination of the 18k yellow gold and the meticulously engineered features makes this men's watch, model 336938, a true masterpiece in the Rolex collection.",
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2hf9c0t3aoo5c6uxx9re4_8292051__wFWcPHBB7',
    name: 'Royal Oak Stainless Steel',
    price: 63550,
    description: '39MM Stainless Steel Royal Oak Dual Time White Dial',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx3nthoi0fl8r66okqffjt1z_4747833___IbMLoOGG',
    name: 'Audemars Piguet Royal Oak Offshore Music Edition Titanium 43mm',
    price: 62400,
    description:
      'Introducing the Audemars Piguet Royal Oak Offshore Music Edition Titanium 43mm, a bold tribute to the world of music. This striking timepiece features a robust 43mm titanium case and a vibrant dial inspired by VU meters found in recording studios. The unique design elements are enhanced by colorful accents and a detailed chronograph function. Powered by the Calibre 4409, it offers precision and reliability. Perfect for music enthusiasts and collectors alike, this limited edition watch blends innovative aesthetics with exceptional craftsmanship.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx3ojq7p0nnzr66om975he1r_4178993__P1HFLP2dt',
    name: 'Audemars Piguet Royal Oak Stainless Steel Green Dial 50th Anniversary 41mm',
    price: 61500,
    description:
      'Introducing the Audemars Piguet Royal Oak Stainless Steel 50th Anniversary Edition with a Green Dial, 41mm. This commemorative timepiece features a 41mm stainless steel case and bracelet, paired with a striking green "Grande Tapisserie" dial, celebrating 50 years of the iconic Royal Oak design. Powered by the self-winding Calibre 4302, it ensures precision and reliability. The unique 50th-anniversary rotor adds a special touch to this limited edition watch, making it a must-have for collectors who appreciate history and craftsmanship.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clruwivbl0040lh18embhs02z_3539917__1MOGmntXx',
    name: '14MM Mariner Link Diamond Chain 14k Solid Gold 30.25ctw',
    price: 61266,
    description:
      'This impressive necklace takes the classic Mariner link chain and puts it into a new class of luxury.\nFeaturing 14mm puffy links with one side covered in diamonds and the other side featuring a high-shine polished gold finish, this piece will have all eyes on you!\nPerfectly set on each rounded link, this necklace boasts an impressive 30.25ctw diamond endlessly sparkling the entire length of the chain. \nThe statement piece is secured with a hidden box clasp shaped like the other links and covered in diamonds as well. This adds an extra element of luxury and endless beauty. ',
    brand: '',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm033nuyc0000yg1orqubtq44_6168705__tKc7WfOFY',
    name: 'Van Cleef Snowflake ring 18K yellow gold, Diamond',
    price: 61250,
    description:
      "The Van Cleef & Arpels Snowflake Ring in 18K yellow gold is a dazzling and elegant piece that captures the delicate beauty of a snowflake. Crafted from luxurious yellow gold, the ring features a stunning snowflake motif adorned with sparkling diamonds that radiate brilliance from every angle. The intricate design and meticulous craftsmanship highlight the brand's dedication to creating timeless and sophisticated jewelry. Perfect for adding a touch of winter-inspired elegance to any ensemble, the Snowflake Ring is a beautiful symbol of refinement and luxury, making it a cherished addition to any jewelry collection.",
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2i3x40vc4oo5ccu11k9x0_2920927__kwlUuw-Sp',
    name: 'Rolex Yacht-Master II 44mm',
    price: 61250,
    description:
      'Introducing the Rolex Yacht-Master II in 44mm Yellow Gold, a symbol of nautical prowess and luxury horology. Crafted for the modern adventurer, this timepiece combines robust construction with refined aesthetics. The 44mm yellow gold case exudes opulence and durability, while the innovative Yacht-Master II functionality offers precise timing for regattas and maritime pursuits. Whether navigating the open seas or exploring the urban landscape, this new addition to the Yacht-Master collection ensures you stand out with style and sophistication. Experience the pinnacle of luxury and performance with the Rolex Yacht-Master II in yellow gold.\n\n126506',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63c9688dcc24b7f44267e7cc.png',
    name: 'Rose Gold White Dial Diamond Bezel',
    price: 60900,
    description: '33 MM',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx3oghfk0mo5r66o2i5i6hch_698891__m-IKxVMesq',
    name: 'Audemars Piguet Royal Oak Rose Gold Royal Oak Black Dial on Leather 41mm',
    price: 60720,
    description:
      'Introducing the Audemars Piguet Royal Oak 41mm in Rose Gold with a Black Dial and Leather Strap. This luxurious timepiece features a 41mm rose gold case, exuding elegance and sophistication. The striking black dial, adorned with the signature "Grande Tapisserie" pattern, provides a bold contrast. Complemented by a refined leather strap, this watch is powered by the self-winding Calibre 3120, ensuring precise timekeeping. Perfect for those who appreciate classic design with a modern touch, this Royal Oak model epitomizes Audemars Piguet\'s commitment to exceptional craftsmanship.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7p6qdp02cmla13uvbcyyud_4241152__5twMcBm6D',
    name: 'Cactus De Cartier Earrings',
    price: 60500,
    description:
      'Cactus de Cartier earrings, 18K yellow gold (750/1000), each set with 33 emeralds, 5 carnelians, and 11 brilliant-cut diamonds totaling 0.39 carats.\nPlease note that the carat weight, number of stones and product dimensions will vary based on the size of the creation you order. For detailed information please contact us.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsi6cun700hpjp171ajrewnf_8566002__8myRf7jrvw',
    name: 'Kawasaki Ninja H2R',
    price: 60500,
    description:
      "The Kawasaki Ninja H2R is a pinnacle of engineering and performance in the world of motorcycles. Designed for adrenaline-fueled speed and track dominance, the H2R is a hyper sportbike that pushes the boundaries of what's possible on two wheels. At the heart of this machine lies a supercharged 998cc inline-four engine, delivering an astonishing amount of power and torque. With its aerodynamic design and racing-inspired chassis, the H2R offers unparalleled stability and agility at high speeds. Cutting-edge electronics, including traction control and cornering ABS, ensure precise control and safety on the track. With its combination of raw power, advanced technology, and jaw-dropping design, the Kawasaki Ninja H2R is the ultimate expression of speed and performance for thrill-seeking riders.\n\nNote: Product may be pre-owned. Further details upon claim.",
    brand: 'Kawasaki',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls3qeezq00kql71640bezlik_4252178__AxxRdZkE1',
    name: 'Hermès Picnic Sellier Birkin 25 Framboise Swift Palladium Hardware',
    price: 60500,
    description:
      'This rare Picnic Birkin Bag is in Framboise swift leather and Osier wicker with palladium plated hardware and has tonal stitching, front flap, two straps with toggle closure and double top handles.\n\nThe interior is lined with Framboise swift and has one slip pocket and one zip pocket.\n\nCollection: Z\n\nOrigin: France\n\nCondition: New and never worn (plastic on hardware)\n\nAccompanied by: Hermes box, Hermes dustbag, clochette, lock, keys, carebook, felt and ribbon\n\nMeasurements: 7.4" width x 5.7" height x 3" depth\n\n',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls1b2a1d00eejp173ft5k5rf_3777098__xCreZnmHB',
    name: 'Vintage Hermès Birkin 30 White Dalmatian Buffalo Gold Hardware',
    price: 59950,
    description:
      'This rare Vintage Birkin is in White dalmatian buffalo leather with gold hardware and has tonal stitching, a front toggle closure, a clochette with lock and two keys, and double rolled handles.\n\nThe interior is lined with black leather and has one zip pocket with an Hermes engraved zipper pull and an open pocket on the opposite side.\n\n\nCollection: E square\n\nOrigin: France\n\nCondition: Pre-owned - Vintage, Mint; The bag retains its structure. The leather is clean with minimal signs of wear. The hardware has plastic with light scratching visible upon close inspection. The interior is clean with light signs of prior use.\n\nAccompanied by: Hermes box, Hermes dustbag, clochette, lock, two keys, clochette dustbag, carebook\n\nMeasurements: 11.75" width x 9.5" height x 6" depth; 4.25" handle drop',
    brand: 'Vintage',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvrk2sgs1qhz13o4jtz3rcu0_7019193__qNSIQXdE8',
    name: 'Rolex Day Date 36mm',
    price: 59950,
    description:
      'Introducing the Rolex Day-Date 36mm in Yellow Gold with a Mother-of-Pearl Diamond Dial—a timeless symbol of prestige and elegance. Crafted with meticulous attention to detail, this iconic timepiece combines the luxurious warmth of yellow gold with the captivating beauty of a mother-of-pearl dial adorned with diamonds. The 36mm case size offers a classic and refined presence on the wrist, suitable for any occasion. The shimmering dial adds a touch of opulence and sophistication, making it a standout choice for discerning individuals. Whether worn for formal events or as an everyday accessory, the Rolex Day-Date 36mm in Yellow Gold with Mother-of-Pearl Diamond Dial epitomizes luxury and sophistication, representing the pinnacle of horological excellence.',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2hbks0sxsoo5cqwy2tfqc_91791__4kRbo1VxR',
    name: 'Royal Oak Chronograph Panda Dial',
    price: 59800,
    description: '41MM Stainless Steel Chronograph Panda Dial',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx3ot7sb0pzwr66ojj29a91e_8619284__yAEllzoPy',
    name: 'Audemars Piguet Royal Oak Rose Gold White Dial Diamond Bezel\t33mm',
    price: 59000,
    description:
      "Indulge in timeless luxury with the Audemars Piguet Royal Oak Rose Gold White Dial Diamond Bezel watch, meticulously crafted for the discerning connoisseur. With its exquisite 33mm case size, this masterpiece seamlessly blends elegance and functionality. The luminous white dial serves as a canvas for the intricate diamond-studded bezel, elevating the allure of this horological marvel. Whether it's a formal affair or a casual rendezvous, this timepiece is sure to make a lasting impression, embodying the essence of prestige and refinement.",
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls3w8swf0022jn18hgdcbcmr_4669567__JvtRFafhg',
    name: "Hermès Constance 18 Black Shiny Alligator Palladium Tiger's Eye Hardware",
    price: 58025,
    description:
      'This rare Hermes Constance 18, is of Black shiny alligator with palladium and tiger\'s eye hardware and features tonal stitching, a "H" snap lock closure, and an adjustable shoulder strap.\n\nThe interior is lined with black lambskin and has an open pocket on the front wall, a center divide, and a slit pocket on the back wall.\n\nCollection: U\n\nOrigin: France\n\nCondition: Pristine, new or never worn (Plastic on hardware)\n\nAccompanied by: Hermes box, Hermes dustbag, felt and CITES\n\nMeasurements: 7.25" width x 6.25" height x 2.25" depth; 10" double; 20" single',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls1a723h00gdla177jf5h1nt_4042351__KPMk40qH8',
    name: 'Hermès Picnic Kelly 35 Nata Swift Palladium Hardware',
    price: 57750,
    description:
      'This rare Picnic Kelly Bag is in Nata swift leather and Osier wicker with palladium plated hardware and has tonal stitching, two straps with toggle closure and single rolled handle.\n\nThe interior is lined with Nata chevre and has one slip pocket on the back wall and two slip pockets on the front wall.\n\nCollection: U\n\nOrigin: France\n\nCondition: New and never worn (plastic on hardware)\n\nAccompanied by: Hermes box, Hermes dustbag, lock, keys, clochette, clochette dustbag, carebook, felt and ribbon\n\nMeasurements: 14" width x 10" height x 5.5" depth; 3.75" handle drop',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clruwxuum00mgjq16v4t1eqkf_5809126__hxgF2upyh',
    name: 'Rolex Datejust 41MM',
    price: 57672,
    description:
      'Introducing the Rolex Datejust 41mm in 18k Yellow Gold & Steel, adorned with a breathtaking 21.00ctw Fully Iced Out design. This timepiece redefines luxury with its harmonious blend of precious metals and exquisite craftsmanship. The 18k yellow gold and steel construction exudes opulence and durability, while the dazzling 21.00ctw fully iced out design elevates its allure to new heights. Perfect for those who appreciate the finer things in life, this Rolex Datejust 41mm is a statement piece that commands attention and admiration wherever you go. Experience the epitome of elegance and extravagance with this stunning timepiece on your wrist.',
    brand: '',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2caii0edgoo5cn32jbvzs_8783749__kiVxNfGyh',
    name: 'Audemars Piguet Stainless Steel Bustdown',
    price: 57500,
    description:
      '15400ST 41MM Stainless Steel Bustdown Converted to Rose Gold Two Tone',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljs091nf0002lb084lmkobkl_7130297__n4rltPmwl',
    name: '2022 Mercedes Benz C300',
    price: 57200,
    description:
      'The Mercedes Benz C300 2022 embodies the perfect balance of luxury, performance, and sophistication in the compact luxury sedan category. Renowned for its timeless design and exceptional craftsmanship, the C300 combines elegance with innovative technology to offer a refined driving experience. Under the hood, a turbocharged engine delivers smooth power delivery and impressive fuel efficiency, making every journey a pleasure. Inside the cabin, premium materials and meticulous attention to detail create a luxurious and inviting atmosphere for both driver and passengers. Cutting-edge features such as advanced infotainment systems, driver assistance technologies, and upscale amenities ensure comfort, convenience, and connectivity on the road. With its combination of style, performance, and comfort, the Mercedes Benz C300 2022 continues to set the standard for luxury sedans, captivating drivers with its blend of sophistication and refinement.\n\nNote: Product may be pre-owned. Further details upon claim.',
    brand: 'Mercedes',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx84h18w0ebe52xe9mjxzsls_9670332__oijEAPrjB',
    name: 'Patek Philippe Travel Time 5524G 42mm',
    price: 56400,
    description:
      'The Travel Time 5524G is a sophisticated and practical timepiece, featuring a 42mm white gold case that exudes elegance. This refined watch is paired with a luxurious leather strap and a striking blue dial, providing both style and functionality. Renowned for its exceptional craftsmanship and innovative dual time zone feature, the Travel Time 5524G is perfect for those who seek a blend of practicality and high-end aesthetics in a premium watch.',
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx7r00w01cm23q3ltfdcmjbg_6405453__37qH6b6Xq',
    name: 'Patek Philippe Calatrava 5226G 40mm',
    price: 56400,
    description:
      'The Calatrava 5226G is a distinguished timepiece, featuring a 40mm white gold case that epitomizes understated elegance. This sophisticated watch is paired with a luxurious leather strap and a refined charcoal grey dial, creating a timeless and versatile look. Renowned for its exceptional craftsmanship and classic design, the Calatrava 5226G is perfect for those who appreciate the art of fine watchmaking and seek a blend of tradition and modernity in a high-quality timepiece.',
    brand: 'Patek Philippe',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu4l6a5d001el313e64fd9uo_9529872__Q2CRm27RF',
    name: 'Cartier - Santos Skeleton Large - Rose Gold',
    price: 56100,
    description:
      'Cartier WHSA0016\nSantos De Cartier  \n39.8mm Case size\n18K Rose Gold\nSkeleton Dial\nPre-Owned\nFull Set - Box & Papers Included',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7pcskd016cl512321gtyqa_3271124__xcAE5WfRP',
    name: 'Essential Lines Earrings',
    price: 56000,
    description:
      'Essential Lines earrings, 18K white gold (750/1000), each set with 43 brilliant-cut diamonds totaling 6.64 carats.\nPlease note that the carat weight, number of stones and product dimensions will vary based on the size of the creation you order. For detailed information please contact us.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvrfugbj068k13o4qiwah7lk_7034423__6aglh1VgT',
    name: 'Rolex Day Date 40mm',
    price: 55282,
    description:
      'Introducing the Rolex Day-Date 40mm in Yellow Gold with a Champagne Dial—a timeless statement of luxury and refinement. Crafted with precision and elegance, this iconic timepiece features the classic combination of yellow gold and a champagne dial, exuding sophistication and prestige. The 40mm case size offers a perfect balance of presence and comfort on the wrist, suitable for any occasion. The champagne dial adds a touch of warmth and elegance, making it a timeless choice for discerning individuals. Whether worn for special occasions or as an everyday accessory, the Rolex Day-Date 40mm in Yellow Gold with Champagne Dial epitomizes luxury and sophistication, representing the pinnacle of horological excellence.',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clx3od7b00lqpr66o75m21i16_3909562__uqbvzdy8a',
    name: 'Audemars Piguet Royal Oak Stainless Steel Chronograph Panda Dial 41mm',
    price: 55200,
    description:
      'Introducing the Audemars Piguet Royal Oak Chronograph Stainless Steel Panda Dial 41mm, a striking blend of sportiness and elegance. This exquisite timepiece features a 41mm stainless steel case and bracelet, complemented by a distinctive "Panda" dial with contrasting black subdials on a crisp white "Grande Tapisserie" background. Powered by the self-winding Calibre 2385, it offers chronograph, hours, minutes, small seconds, and date functions. The iconic octagonal bezel and integrated bracelet design make this watch a timeless addition to any collection, showcasing Audemars Piguet\'s exceptional craftsmanship and innovative design.',
    brand: 'Audemars Piguet',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63bedc62afae43218a36bdc7.png',
    name: 'Day-Date',
    price: 55150,
    description: '',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0zgqeeh0000j2g3ormzmwi6_8863949__efEZb1kGZ',
    name: 'Nvidia GH200 624GB Gold The Ultimate High-End Desktop Computer PC for AI GPT LLM',
    price: 55000,
    description:
      'The Nvidia GH200 Grace Hopper Superchip is the ultimate high-end desktop computer built for AI, GPT, and LLM applications. It features a massive 624GB of RAM and is powered by the Nvidia Hopper architecture. With a 3.40 GHz Nvidia Grace processor, 3TB SSD storage, and a sleek gold tower design, this machine is designed for intensive tasks such as AI model training, graphics design, and technical coding. It supports multiple connectivity options including USB 3.0, Mini DisplayPort, and RJ-45, all running on a Linux operating system.',
    brand: 'GPTShop.ai',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clzg6j1y5000s5038gioz3wvx_5963410__Yq54Hy8Ju',
    name: 'Hand-engraved Silver Folding Knife With Gold Inlays, Damascus Blade',
    price: 55000,
    description:
      "The Spearpoint ‘Buffalo Dance' features a solid sterling silver frame, hand-engraved with 24K gold inlays, by Sam Welch. The beautiful hand-forged blade is etched 'Pinwheel' damascus steel by Robert Eggerling; the one-hand button lock and the thumb stud are set with black diamonds.\n\nA remarkable design that gives you an instrument with a full-size secure grip, and a versatile deep-belly blade, the Spearpoint epitomizes William Henry’s core philosophy – that superlative function deserves to be elevated to superlative art.\nThe ‘Buffalo Dance’ features some of the most exotic materials, artistry and forged metals that are the hallmark of William Henry's collections; a timeless heirloom to be proudly worn and used for a lifetime before being handed-down to another generation.\n\nMATERIALS\n\nBlack Diamond\nFine hand-engraving\nHand-forged damascus\nSterling Silver",
    brand: 'William Henry',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls3miiqj006yjj17wlejgtm5_6304765__bhZsxKuaz',
    name: 'Hermès Kelly Elan Foile Vert Comics Chevre and Ostrich Feather Palladium Hardware',
    price: 54450,
    description:
      'This Kelly Elan is in Vert Comics chevre and ostrich feathers with palladium hardware, two pull straps that attach to a toggle, and an interior that has snaps for shoulder strap.\n\nThe interior is lined with Vert Comics lambskin leather.\n\nCollection: B\n\nOrigin: France\n\nCondition: New and never worn (plastic on hardware) \n\nAccompanied by: Hermes box, Hermes dustbag, strap, strap dustbag, carebook, ribbon and felt \n\nMeasurements: 10.75" width x 6" height x 1.25" depth',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls3t8lgb001ajn1c4fsapz8o_1965450__qUoxiHJpr',
    name: 'Hermès Constance 18 Amethyst Shiny Alligator Tigers Eye Quartz Palladium Hardware',
    price: 54450,
    description:
      'This Constance 18 is in Amethyst Shiny Alligator with Palladium Hardware inlaid with Tigers Eye Quartz, tonal stitching, quartz and metal "H" snap closure, and adjustable strap\n\nThe interior is lined with  Amethyst lambskin and has an open pocket on the front wall, a center divide, and a slit pocket on the back wall.\n\nCollection: U\n\nOrigin: France\n\nCondition: New and never worn (plastic on hardware)\n\nAccompanied by: Hermes box, Hermes dustbag, felt, and CITES\n\nMeasurements: 7.25" width x 6.25" height x 2.25" depth; 20" adjustable shoulder strap',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2cc3n0egboo5cz2bf7cz0_7957553__Fjn7qqFHU',
    name: 'Rolex GMT-Master II 40mm "Rootbeer"',
    price: 54400,
    description:
      'Introducing the Rolex 40mm GMT-Master II "Rootbeer" in Full Rose Gold with a Ceramic Bezel, a fusion of timeless elegance and modern sophistication. This iconic timepiece pays homage to its heritage while embracing contemporary design elements. The warm tones of the full rose gold case and bracelet exude luxury and refinement, while the ceramic bezel adds a touch of durability and style. Perfect for globetrotters and watch enthusiasts alike, the GMT-Master II "Rootbeer" offers both functionality and aesthetic appeal. Elevate your wristwear collection with this distinguished Rolex masterpiece, destined to be cherished for generations to come.\n\n126715chnr',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0bpcpui00cy5ttjsj3kk2zj_3683878__tnGxl5uJe',
    name: '2025 Mercedes-Benz GLA',
    price: 54400,
    description:
      'The 2025 Mercedes-Benz GLA is a stylish and versatile compact SUV that combines luxury with practicality. Designed with the modern driver in mind, the GLA offers a dynamic driving experience with its efficient turbocharged engine and responsive handling. The exterior showcases a sleek and aerodynamic design, while the interior is crafted with high-quality materials and advanced technology, including a cutting-edge infotainment system and driver assistance features. Despite its compact size, the GLA provides ample cargo space and comfortable seating, making it ideal for both city driving and weekend getaways. The 2025 Mercedes-Benz GLA is perfect for those seeking a premium SUV that offers both performance and practicality in a refined package.',
    brand: 'Mercedes-Benz',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clruxkwls006hl016geenl7f1_8594694__TwWH4i25n',
    name: 'Rolex Datejust 41MM',
    price: 53400,
    description:
      'Introducing the epitome of luxury, the Rolex Datejust 41mm in 18k Yellow Gold & Steel, embellished with a stunning 21.01ctw Fully Iced Out design. This exquisite timepiece seamlessly marries the durability of steel with the opulence of 18k yellow gold, culminating in a harmonious blend of sophistication and resilience. Adorned with a lavish 21.01ctw diamond setting, every facet of this watch gleams with unparalleled brilliance, capturing attention with its captivating allure. Elevate your style and make a bold statement with the Rolex Datejust 41mm Fully Iced Out, a true symbol of refined extravagance and prestige.\n',
    brand: '',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2h5f30smfoo5cnqngj965_7355711__5JFDBwBq-',
    name: 'Rolex Submariner 41mm',
    price: 52850,
    description:
      'Introducing the Rolex 41mm Submariner in Yellow Gold with a Blue Dial and Ceramic Bezel—a luxurious and timeless masterpiece designed for the modern explorer. Crafted with precision and elegance, this iconic timepiece exudes opulence with its 18k yellow gold construction. The vibrant blue dial adds a touch of sophistication, while the ceramic bezel enhances its durability and style. Perfect for diving adventures or everyday wear, the Rolex Submariner in Yellow Gold is the epitome of luxury and performance. Elevate your wristwear collection with this new addition, destined to make a statement wherever you go.',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0bqig6e00qrf05sc0a0ajtq_2820988__V2TlZYfjg',
    name: 'Rolex Sky Dweller Rose Gold',
    price: 52670,
    description:
      "The Rolex Sky-Dweller in Rose Gold is a stunning blend of elegance and innovation, designed for those who appreciate the finer things in life. Crafted from 18K Everose gold, Rolex's proprietary rose gold alloy, this timepiece exudes a warm and luxurious glow that enhances its sophisticated design. The Sky-Dweller is renowned for its dual time zone display and annual calendar, features that make it an ideal watch for global travelers. The meticulously crafted dial, complemented by the rich tones of the rose gold, adds a touch of refinement and prestige. With its combination of cutting-edge functionality and timeless beauty, the Rolex Sky-Dweller in Rose Gold is a true masterpiece in the world of horology.",
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clznjrl6600anee734pvzzsz7_2824230__dBgb-6anc',
    name: 'Space Invaders Hand-engraved Pocketknife With 24k Gold Inlays And Damascus Blade',
    price: 52500,
    description:
      "The Spearpoint 'Space Invaders’ features a mesmerizing hand-engraved handle with inlaid 24K gold by Mario Terzi. The blade is hand-forged 'Barbed Wire' damascus steel by Robert Eggerling; the one-hand button lock and the thumb stud are set with spinel gemstones. A remarkable design that gives you an instrument with a full-size secure grip, and a versatile deep-belly blade, the Spearpoint epitomizes William Henry’s core philosophy – that superlative function deserves to be elevated to superlative art. The ‘Space Invaders’ features hundreds of hours of microscopic hand-engraving, and hand-forged damascus, which are the hallmark of William Henry's most exclusive creations; a timeless heirloom to be proudly worn and used for a lifetime before handing it down to another generation.",
    brand: 'William Henry',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1vmhg9y000111raltnxuvkh_6119739__W8T-dqpET',
    name: 'Eternal Diamond 3 Carat Candle',
    price: 52500,
    description:
      'The Eternal Diamond Candle is a masterpiece of elegance, featuring a breathtaking 3.03-carat diamond with a pristine D color grade and VS1 clarity, making it an extraordinary centerpiece for any sophisticated setting. Crafted to perfection, this candle not only illuminates your space with a soft, ambient glow but also showcases a stunning, high-quality diamond that radiates brilliance and fire. Ideal for creating a luxurious atmosphere or as a unique gift, the Eternal Diamond Candle is a symbol of timeless beauty and unparalleled craftsmanship, blending light and luxury in a truly captivating way. Made from 100% Natural materials this candle not only has a delicate and astonishing scent it has a soft, slow burning soy wax that you can use as lotion for dry skin.',
    brand: 'Forever Wick Candle Co.',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7lbcnr007rjp158wfjnjjl_913254__SDo9e-F9v',
    name: 'La Panthère De Cartier Watch',
    price: 52500,
    description:
      'La Panthère watch, 23.6 mm, quartz movement. Yellow gold 750/1000 case set with 40 brilliant-cut diamonds totaling 0.24 carat, yellow gold 750/1000 panther head, pear-shaped tsavorite eyes totaling 0.16 carat, black lacquer spots and nose, gold-finish dial, blued-steel sword-shaped hands, yellow gold 750/1000 bracelet, yellow gold 750/1000 ardillon buckle. Thickness: 7.8 mm. Water-resistant up to 3 bar (approx. 30 meters/100 feet).',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnalaj3y0000jp174m0htveb_7747169__4sHxPipw9',
    name: 'Rolex Daytona 40mm',
    price: 52325,
    description:
      "Introducing the Rolex Cosmograph Daytona 116515LN in Rose Gold with a Chocolate Dial, a masterpiece of precision engineering and timeless elegance. Crafted with meticulous attention to detail, this iconic timepiece combines the luxury of rose gold with the allure of a rich chocolate dial. The 40mm case exudes sophistication and refinement, while the iconic Daytona chronograph functionality ensures precision timing in any situation. Whether you're racing on the track or attending a formal event, the Rolex Daytona 116515LN is the perfect companion, exuding style and confidence with every tick of its movement.\n\n116515LN",
    brand: 'Rolex ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls3ozjm6002ujr18jww20dyg_2353507__XaXXARx8Z',
    name: 'Hermès Special Order (HSS) Kelly Sellier 25 Bleu Iris Verso Ostrich Brushed Palladium Hardware',
    price: 52250,
    description:
      'This Kelly, in the Sellier style, is a verso in Bleu Iris Ostrich and Rouge de Coeur Chevre with Brushed Palladium Hardware, has contrast stitching, front flap, two straps with center toggle closure, clochette with lock and two keys a single rolled handle and removable shoulder strap.\n\nThe interior is lined with Rouge de Coeur chevre leather and has one zip pocket with an Hermes engraved pull and one open pocket on the opposite side.\n\nCollection: B\n\nOrigin: France\n\nCondition: New and never worn (plastic on hardware)\n\nAccompanied by: Hermes box, Hermes dustbag, clochette, lock, two keys, shoulder strap, clochette dustbag, shoulder strap dustbag, felt, rainhat, carebook\n\nMeasurements: 9.8" width x 7.5" height x 3.5" depth; 3.5" handle drop (16.5" shoulder strap drop)',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls1ab5qv00c8l3170tu68nma_3105409__tnK5gnpMj',
    name: 'Hermès Special Order (HSS) Kelly Sellier 25 Nata Verso Ostrich Permabrass Hardware',
    price: 52250,
    description:
      'This special order Kelly, in the Sellier style, is in Nata ostrich with permabrass hardware and has tonal stitching, two straps with front toggle closure, clochette with lock and two keys, single rolled handle and removable shoulder strap.\n\nThe interior is lined with Gris Perle chevre and has a zipper pocket with an Hermes engraved pull and one pocket on the opposite side.\n\nCollection: U\n\nOrigin: France\n\nCondition: New and never worn (plastic on hardware)\n\nAccompanied by: Hermes box, Hermes dustbag, clochette, lock, two keys, shoulder strap, clochette dustbag, shoulder strap dustbag, felt, carebook and ribbon\n\nMeasurements: 9.8" width x 7.5" height x 3.5" depth; 3.5" handle drop (16.5" shoulder strap drop)\n\n',
    brand: 'Hermès',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz6cmks60072xv20m1cb4okh_4500544__9dAXhS8sR',
    name: 'Jewelry Shop Credit',
    price: 10000,
    description:
      "Craft the jewelry of your dreams with PackDraw! Claim this voucher to collaborate with our team and design your own piece of high-end jewelry. Whether it's a bracelet, watch, necklace, earrings, ring, or a unique combination, we will do our best to tailor each creation just for you!\n\nNote: Redeeming this voucher initiates a personalized consultation with a member of our team through email to discuss your vision and assess feasibility. Claiming multiple vouchers increases your budget, allowing for even more luxurious designs.",
    brand: 'PackDraw',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu1r4tg200nal616ul1qsm3o_3986538__nFlZh2WcV',
    name: 'Supreme x Burberry Embroidered Logo Lambskin Funnel-neck Jacket Black',
    price: 9926,
    description:
      'Season\nSS22\nColor\nBLACK\nRelease Date\n03/10/2022\nRetail Price\n$2,750',
    brand: 'Supreme x Burberry',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln9g5r200011ky16q7ggtbmt_800323__Wcn0ZqhhM',
    name: 'Nike Air Yeezy 2 Solar Red',
    price: 9906,
    description:
      'Style\n508214-006\n\nColorway\nBLACK/BLACK-SOLAR RED\n\nRetail Price\n$250\n\nRelease Date\n06/09/2012\n\nIncluded Accessories\nYEEZY DUSTBAG, 2X LEATHER LACELOCKS, METAL LACETIPS',
    brand: 'Nike x Yeezy',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu4xwvfo00b8kw14d39jwxcd_9394339__O2dDgfjlr',
    name: 'Cartier - Santos Large 40MM - Steel Green Dial',
    price: 9890,
    description:
      'Cartier\nSantos De Cartier\n40mm Case Size "Large"\nStainless Steel\nGreen Dial\nUnworn\nFull Set - Box & Papers Included',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls0ycbvr0004l6179lm7bmch_2936014__Szf1cDYTh',
    name: 'Chanel Flap Bag with Top Handle Mini Baby Blue',
    price: 9861,
    description:
      'Dimensions\n4800H 4.7W 7.8D STRAP 2.3\n\nMaterial\nLAMBSKIN LEATHER\n\nColor\nBABY BLUE\n\nHardware\nGOLD-TONE\n\nSize\nMINI',
    brand: 'Chanel',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63d9b8f77b932bffc7a1c5e0.png',
    name: 'Louis Vuitton Horizon 55 Taurillon Illusion Blue/Green',
    price: 9838,
    description:
      'Dimensions\n15H 21.7W 8.3D\n\nMaterial\nLEATHER\n\nRetail Price\n$5,300\n\nColor\nBLUE/GREEN\n\nStyle\nM59656\n\nIncluded Accessories\nLUGGAGE TAG, DUST BAG\n\nSeason\nSS22',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu4xzh52005il913frairrz0_4080816__LC0GD7kO7',
    name: 'Cartier Panther Glasses Iced Out Diamond Rimless - 3.00ctw - White Gold',
    price: 9800,
    description:
      'This Icebox Cartier Glasses is made of 14K White gold with 3.00ctw of diamonds. This piece is handcrafted and manufactured by Icebox. All of the diamonds are hand-set by a master diamond setter in the highest quality craftsmanship.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clonkpsyq0000l416bzqhig46_7691959__mX7efC4_Z',
    name: 'Stefano Ricci Handmade Crocodile and Calfskin Leather Wallet',
    price: 9780,
    description:
      '    Diamante Crocodile and Calfskin Leather\n    Double Compartments with Zip Closures\n    Top Handle\n    Galvanised Palladium Decorative Hardware\n    Made in Italy\n',
    brand: 'STEFANO RICCI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm2227tdv00007texn1sr3beq_7810019__XWsndFPee',
    name: 'Aime Leon Dore x Rimowa Classic Cabin Green',
    price: 9750,
    description:
      'The Aime Leon Dore x Rimowa Classic Cabin in Green is a sophisticated travel accessory that blends timeless style with modern functionality. Featuring Rimowa’s signature grooved aluminum shell in a striking green finish, it showcases Aime Leon Dore’s minimalist aesthetic with subtle detailing. Designed for effortless travel, it includes a premium leather handle, multi-wheel system for smooth maneuverability, and a compact size ideal for overhead compartments. This exclusive collaboration offers a refined balance of luxury and practicality, making it perfect for discerning travelers seeking both form and function.',
    brand: 'Aime Leon Dore x Rimowa',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu4y49tk00gql012quzyhbpy_3296071__wnqk2CFiY',
    name: 'Cartier Glasses Iced Out Diamonds Rimless - 2.00ctw - White Gold',
    price: 9750,
    description:
      "These Cartier glasses are Steel Tone Black.  The frame size of these glasses have 57mm lens width, 18mm bridge and 145mm from temple to temple. These glasses do not come with the manufacturer's warranty. In place of the manufacturer's warranty, we offer a 12-month Icebox warranty.",
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm118w06w00002w4yrazug299_6865768__DBc5lKcsv',
    name: 'Zegna single-breasted cashmere suit',
    price: 9750,
    description:
      'Imported\nHighlights\nburgundy\ncashmere\nBlazer:\nnotched lapels\nfront button fastening\nlong sleeves\nbuttoned cuffs\nchest welt pocket\ntwo front flap pockets\nTrousers:\nbelt loops\nstraight leg\nconcealed front fastening\ntwo side inset pockets\ntwo rear button-fastening jetted pockets\nstraight hem\nComposition\nCashmere 100%',
    brand: 'Zegna',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllosxucy0006l6171utmwxbd_9600038__1f7RaUxA6',
    name: 'Louis Vuitton x NBA Basketball Keepall 55 Monogram',
    price: 9742,
    description:
      'Dimensions\n10.6H 21.7W 7.9D\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$3,500\n\nHardware\nGOLD-TONE\n\nSize\n55\n\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, CHAIN, DUST BAG\n\nSeason\nCRUISE 21',
    brand: 'Louis Vuitton x NBA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls0yl872000sjt16n061d6j1_5738396__gFPKcns1y',
    name: 'Chanel Flap Bag Mini Black',
    price: 9728,
    description:
      'Dimensions\n4.7H 7.8W 2.3D\n\nMaterial\nLAMBSKIN LEATHER\n\nRetail Price\n$4,400\n\nColor\nBLACK\n\nHardware\nGOLD-TONE\n\nSize\nMINI\n\nStyle\nA69900Y0405994305\n\nProduct Description\nThe Chanel Flap Bag Mini Black was first released in 2010. It’s a miniature version of the Chanel Flap Bag that Gabrielle "Coco" Chanel herself introduced back in the 1950s.\n\nUnlike the larger version of the Chanel Flap Bag, the mini version measures just 12 × 20 × 6 cm. It’s made almost entirely out of lambskin, that makes it feel extra soft. It also features gold-tone metal on both the strap and the Chanel logo clasp that helps to keep the bag closed.\n\nAlthough this bag is on the smaller side, we love that it still manages to make the most of the storage it offers. There is a main compartment that is easily accessible as well as a separate pocket on the back to provide quick access to things like ID cards, receipts, cash, and more. The Chanel Flap Bag Mini Black was released in 2023 for $4,400.',
    brand: 'Chanel',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2i3wu0v6ooo5czrxb88qm_302839__h-g4IBQBM',
    name: 'Louis Vuitton Keepall 50B Taurillon Illusion Blue/Pink',
    price: 9721,
    description:
      'Louis Vuitton Keepall 50B Taurillon Illusion Blue/Pink, Style Number M59713',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln9gehcx0025jo172v8l6vjx_5749644__13ky8vERnm',
    name: 'Louis Vuitton Nike Air Force 1 Low By Virgil Abloh White Green',
    price: 9702,
    description:
      'Colorway\nWHITE/GREEN\n\nRetail Price\n$2,750\n\nRelease Date\n07/19/2022\n\nIncluded Accessories\nEXTRA WHITE SHOELACES, EXTRA GREENSHOE LACES, 2 X WHITE DUST BAGS, LV BROWN MONOGRAM TAG, WHITE BUCKLE STRAP, WHITE LEATHER SWOOSH',
    brand: 'Louis Vuitton x Nike x Virgil Abloh',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsm49iw000cul8165tplpvvj_4771315__X6gaByePR',
    name: 'Louis Vuitton Onthego Monogram Teddy Fleece Brown',
    price: 9657,
    description:
      'Dimensions\n13.4H 16.1W 7.5D HANDLE 11\n\nMaterial\nFLEECE\n\nRetail Price\n$4,900\n\nColor\nBROWN\n\nHardware\nGOLD-TONE\n\nStyle\nM55420\n\nIncluded Accessories\nDUST BAG\n\nSeason\nFW19',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwbq4nut1vqpbdm3m26nv6fm_1047498__Z3HzUkmsU',
    name: 'Louis Vuitton City Keepall',
    price: 9645,
    description:
      'Dimensions\n10.6H 6.7W 5.1D STRAP 22\nMaterial\nCOATED CANVAS\nRetail Price\n$2,380\nHardware\nBLACK-TONE\nStyle\nM45652\nIncluded Accessories\nSTRAP, LUGGAGE TAG, DUST BAG\nSeason\nSS21',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwcd8aob0b3e138cy0qj86k8_2047451__sUoXXcwR7',
    name: 'Louis Vuitton Keepall Triangle Bandouliere Monogram Tuffetage 50 Black',
    price: 9633,
    description:
      'Dimensions\n19.7H 11.4W 10.7D\nMaterial\nCOATED CANVAS\nRetail Price\n$4,150\nColor\nBLACK\nHardware\nMATTE BLACK-TONE\nStyle\nM45046\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nSeason\nSS20',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw7y8r140mgwv11fb1jmjorj_1815258__f9O-gygz2',
    name: 'Louis Vuitton Keepall Bandouliere 50 Racing Blue',
    price: 9613,
    description:
      'Dimensions\n11.4H 19.7W 9.1D STRAP 19.7\nMaterial\nEMBOSSED TAURILLON MONOGRAM COWHIDE LEATHER\nRetail Price\n$3,900\nColor\nRACING BLUE\nHardware\nBLACK-TONE\nSize\n50\nStyle\nM23141\nIncluded Accessories\nREMOVABLE NAME TAG, REMOVABLE AND ADJUSTABLE STRAP\nSeason\nPFW23',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0a1ny0b011jvfkn8cxn5ndo_9583967__hNMoaQVEE',
    name: "Balenciaga Men's Technoclog in Saphir Blue",
    price: 9600,
    description:
      '• Rubber and rhinestones\n• Clog\n• Pointed toe\n• Open at back\n• 90mm platform\n• Exaggerated volume\n• Molded sole and upper\n• Debossed Balenciaga logo on sole part\n• Tone-on-tone sole and insole\n• Made in Italy\n• This shoe runs large. If you usually wear a half size, we recommend sizing down.',
    brand: 'Balenciaga',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluow5qsk002aji1440xacd0t_8778874__Ny8uX9IfV',
    name: 'Moncler x Roc Nation by Jay-Z Cemelopardalis Reversible Down Jacket Black',
    price: 9574,
    description:
      'Season\nSS24\nColor\nBLACK\nRelease Date\n01/25/2024\nStyle\nI209W1A00004M3385999\nRetail Price\n$6,185',
    brand: 'Moncler x Roc Nation by Jay-Z',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln95pq6l0000mk167fqf4rrt_6737283__E5AnuEc8A',
    name: 'Louis Vuitton Nike Air Force 1 Low By Virgil Abloh White Red',
    price: 9530,
    description:
      'Colorway\nWHITE/RED\n\nRetail Price\n$2,750\n\nRelease Date\n07/19/2022\n\nIncluded Accessories\nEXTRA RED SHOELACES, 2 X WHITE DUST BAGS, LV BROWN MONOGRAM TAG, WHITE BUCKLE STRAP, WHITE LEATHER SWOOSH',
    brand: 'Louis Vuitton x Nike Air Force 1',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz6cipom00585x8hee0sya6t_2976758__8NSXrS7tq',
    name: 'Jewelry Shop Credit',
    price: 9500,
    description:
      "Craft the jewelry of your dreams with PackDraw! Claim this voucher to collaborate with our team and design your own piece of high-end jewelry. Whether it's a bracelet, watch, necklace, earrings, ring, or a unique combination, we will do our best to tailor each creation just for you!\n\nNote: Redeeming this voucher initiates a personalized consultation with a member of our team through email to discuss your vision and assess feasibility. Claiming multiple vouchers increases your budget, allowing for even more luxurious designs.",
    brand: 'PackDraw',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu4ycb3f007pjt1464kfwstu_3267736__Hu7Zmu8sd',
    name: 'Cartier Glasses Iced Out Diamond Rimless - 1.60ctw - Yellow Gold',
    price: 9487,
    description:
      "These Cartier glasses are Gold Tone Pearl White.  The frame size of these glasses have 52mm lens width, 16mm bridge and 135mm from temple to temple. These glasses do not come with the manufacturer's warranty. In place of the manufacturer's warranty, we offer a 12-month Icebox warranty.",
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwcddvl90csg138c72xwgm2a_4689467__9VbLl--Hw',
    name: 'Louis Vuitton Keepall Bandouliere Damier Ebene 55 Brown',
    price: 9456,
    description:
      'Retail Price\n$1,760\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln9ivf0f000ql817rewya7wu_9088595__YjvSSZsOC',
    name: 'Nike Air Max 1 AMS Parra Amsterdam',
    price: 9438,
    description:
      'Style\n313188-241\n\nColorway\nBROWNSTONE/BLUE REEF-DARK OAK\n\nRetail Price\n$110\n\nRelease Date\n08/01/2005\n\nProduct Description\nWho would have ever thought the color combo of Brownstone/Blue Reef-Dark Oak, also known as the Parra x Nike Air Max 1 "Amsterdam" would become one of the sought after sneakers of all time? Well, probably the man himself, Parra. The Dutch artist is most known for his curvy post-pop imagery and vibrant colors and lettering and has garnered himself a cult-like following from streetwear, sneaker and street art connoisseurs. His eclectic work is easily recognizable and his hometown of Amsterdam, The Netherlands, helped inspire and launch this Tier Zero release back in 2005. Using the red, burgundy and teal blue hues that his artwork often features, Parra’s first Air Max design became a hit thanks to its unique color combo and Parra’s self-taught illustrative skill that can be seen on the insoles. The Amsterdam crest on the heel of this Parra x Air Max 1 all but defined its nickname from the very beginning. With a rumored 200-300 pairs in existence, including a small amount that hit Nike outlet stores and sold for as low as $30, the Parra Air Max 1 has become one of the most collectible sneakers ever created despite reports of only being made up to a size 11.5. Though the Parra x Nike Air Max 1 "Amsterdam" is sought after, the "Friends and Family" version features Parra’s scripted signature stitched into the forefoot mud guard and was even more limited (approximately 24 pairs).',
    brand: 'Nike x Parra',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz5zc20500ka6x8qcswurq45_8520459__ljqnlSubA',
    name: 'Bearbrick Karimoku x Fragment (Carved Wooden) 400% Black',
    price: 9425,
    description:
      'The Bearbrick Karimoku x Fragment (Carved Wooden) 400% in Black is a stunning and exclusive collectible that epitomizes the fusion of art and craftsmanship. This figure is the result of a collaboration between Bearbrick, Fragment Design, and Karimoku, renowned for their exceptional woodworking. Crafted from high-quality carved wood, this 400% Bearbrick features a sleek black finish, highlighting the intricate details and superior craftsmanship. Its sophisticated design and elegant aesthetic make it a standout piece in any collection. Perfect for art enthusiasts and Bearbrick collectors, this figure is a testament to the harmonious blend of traditional craftsmanship and contemporary design.',
    brand: 'Bearbrick Karimoku x Fragment',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63b8a10771919874e05fd8bb.png',
    name: 'Hublot Classic Fusion',
    price: 9400,
    description: '',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqsnm5h0005xl217wf9rf3tb_4147164__RKWTRBj3C0',
    name: 'Louis Vuitton Keepall 50 Monogram Watercolor',
    price: 9395,
    description:
      'Dimensions\n\n8.7H 19.7W 11.4D\nMaterial\n\nCanvas\nHardware\n\nSilver-tone\nSize\n\n50\nStyle\n\nM45758\nIncluded Accessories\n\nStrap, Lock, Key, Lock Cover, Luggage Tag, Handle Strap, Dust Bag\nSeason\n\nSS21',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwb6wuh212ibslywl0vi0uy7_2308102__rndNk7cpS',
    name: 'Louis Vuitton Keepall Bandouliere 50 Black/White',
    price: 9395,
    description:
      'Dimensions\n11.4H 19.7W 9.1D STRAP 19.7\nMaterial\nCOATED CANVAS\nRetail Price\n$2,980\nColor\nBLACK/WHITE\nHardware\nSILVER-TONE\nSize\n50\nStyle\nN50028\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nSeason\nSS21',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwa7owmi0ihq8x6hr6tpwl0a_1523600__f8iPRg8muV',
    name: 'Louis Vuitton Reversible Keepall Bandouliere Monogram 3D 50 Rainbow/Gray/Black',
    price: 9335,
    description:
      'Dimensions\n11.4H 19.7W 8.7D\nMaterial\nTEXTILE/COWHIDE LEATHER\nRetail Price\n$3,850\nColor\nRAINBOW/GRAY/BLACK\nHardware\nSILVER-TONE\nStyle\nM44939\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nSeason\nFW20',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln9f43o1000nky16mjcs9dzq_6072350__TFa6q99v_',
    name: 'Nike SB Dunk Low Zoo York',
    price: 9329,
    description:
      'Style\n305162-201\n\nColorway\nPAUL BROWN/BLACK\n\nRetail Price\n$130\n\nRelease Date\n06/01/2002',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln9k4d7x000el11756gcff3o_6335802__Qwu9G_4op',
    name: 'Nike SB Dunk Low Day of the Dead',
    price: 9305,
    description:
      'Style\n313170-801\n\nColorway\nORANGE BLAZE/BLACK-WHITE\n\nRetail Price\n$80\n\nRelease Date\n01/01/2006',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltbwve6r002fl016s15rqddi_9554921__dt6bfUIiZ',
    name: 'Louis Vuitton Christopher MM Ink Blue',
    price: 9266,
    description:
      'Dimensions\n17.3H 15W 8.3D\nMaterial\nMONOGRAM BLEACH COATED CANVAS\nRetail Price\n$3,950\nColor\nINK BLUE\nHardware\nAGED GOLD-TONE\nSize\nMM\nRelease Date\n10/26/2023\nStyle\nM46805\nSeason\nFW23',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln9g21eb002ijo172o7gunen_2667258__jMOeHtnDx',
    name: 'Louis Vuitton Nike Air Force 1 Low By Virgil Abloh Black',
    price: 9246,
    description:
      "Colorway\nBLACK/BLACK\n\nRetail Price\n$2,750\n\nRelease Date\n07/19/2022\n\nProduct Description\nThe Louis Vuitton Nike Air Force 1 By Virgil Abloh Black features a premium black suede upper debossed with Louis Vuitton's signature monogram pattern. At the tongue, a co-branded Nike and Louis Vuitton leather patch adds a custom feel. From there, an all-black Air sole completes the design.\n\nThe Louis Vuitton Nike Air Force 1 By Virgil Abloh Black released in July of 2022 and retailed for $2,750.",
    brand: 'Louis Vuitton x Nike x Virgil Abloh Black',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwbizj8i0kut1vi9ollhgtf8_8353410__lUDj40sKs',
    name: 'Louis Vuitton Keepall Bandouliere 50 Monogram Seal Khaki',
    price: 9226,
    description:
      'Dimensions\n11.4H 19.7W 9.1D\nMaterial\nLEATHER\nRetail Price\n$3,950\nColor\nKHAKI\nHardware\nBLACK-TONE\nSize\n50\nStyle\nM57963\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nSeason\nPFW21',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwcdapx00bqr138cap4fjum8_3868708__b-wBqoiU4',
    name: 'Louis Vuitton Keepall Bandouliere Monogram Mesh 50 Yellow',
    price: 9222,
    description:
      "Dimensions\n11.4H 19.7W 8.7D\nMaterial\nMESH/LEATHER\nRetail Price\n$4,150\nColor\nYELLOW\nHardware\nSILVER-TONE\nStyle\nM55380\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nSeason\nFW19\nProduct Description\nFrom Nicolas Ghesquière's FW19 collection for the French luxury house, this Louis Vuitton Keepall Bandouliere features LV's classic Monogram print against a yellow mesh with leather detailing.",
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw7y40o00iekv11fpf6ggh6w_3488299__87Ci-H-XO',
    name: 'Louis Vuitton Keepall Bandouliere 25 Ink Blue',
    price: 9205,
    description:
      'Dimensions\n5.9H 9.8W 4.3D STRAP 24.8\nMaterial\nMONOGRAM BLEACH COATED CANVAS\nRetail Price\n$2,780\nColor\nINK BLUE\nHardware\nAGED GOLD-TONE\nSize\n25\nRelease Date\n10/26/2023\nStyle\nM46804\nIncluded Accessories\nREMOVABLE NAME TAG, REMOVABLE AND ADJUSTABLE STRAP\nSeason\nFW23',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxrsl2he009lxq62deulck2u_9878749__tN6Jwfd8t',
    name: 'AMIRI logo-patch varsity jacket',
    price: 9198,
    description:
      "Crafted in Italy, this varsity jacket by Amiri features contrasting leather sleeves and striped trims. It is adorned with colourful logo patches that reflect the brand's grungey aesthetic and DIY sensibility.\nMade in Italy\nHighlights\nblack\nbovine leather\nround neck\nlogo patch at the chest\nlogo patch to the rear\nappliqué detail\nfront button fastening\nfront zip-fastening pockets\nlong sleeves\nstriped edge\nComposition\nOuter: Bovine Leather (top grain) 100%",
    brand: 'AMIRI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqskc03n003sl717mlu6o8a8_3448652__EhJbVkS7c',
    name: 'Fujifilm - GFX100 II Mirrorless Camera',
    price: 9195,
    description:
      'GFX100 II brings a blazingly fast 102-megapixel large-format sensor to deliver up to 8fps in high-speed continuous mode, surgically accurate subject detection and tracking AF, and advanced video features that have never existed in any previous GFX System or X Series camera. Upgraded AI-developed autofocus algorithms and a 9.44-million dot EVF bring the action accurately into view for photographers, while full-width 4K/60p, 4:2:2 ProRes video and accessory-free delivery of files to Frame.io directly from the camera, give filmmakers access to new streamlined workflows and the ability to immediately collaborate with project team members.',
    brand: 'Fujifilm',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw5naych0767fc2sidykm88t_7645769__XRkubOLsho',
    name: 'Louis Vuitton Keepall Bandouliere 55 Khaki Green/Vermillion Red',
    price: 9160,
    description:
      'Dimensions\n12.2H 21.7W 10.2D STRAP 19.7\nMaterial\nCOATED CANVAS\nRetail Price\n$3,450\nColor\nKHAKI GREEN/VERMILLION RED\nHardware\nBLACK-TONE\nSize\n55\nRelease Date\n09/14/2023\nStyle\nM23963\nIncluded Accessories\nREMOVABLE LEATHER NAME TAG, REMOVABLE AND ADJUSTABLE STRAP, LOCK & KEY\nSeason\nFW23',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw7xzoon0fxtv11f74fxzrcz_7620638__MR_cedM7T',
    name: 'Louis Vuitton Keepall Bandouliere 55 Brown',
    price: 9141,
    description:
      'Dimensions\n12.2H 21.7W 10.2D STRAP 19.7\nMaterial\nMONOGRAM COATED CANVAS AND COWHIDE LEATHER\nRetail Price\n$3,600\nColor\nBROWN\nHardware\nGOLD-TONE\nSize\n55\nRelease Date\n07/13/2023\nStyle\nM46677\nSeason\nFW23',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwcfbbvv0uia138ctgu463kx_7189624__Hkt-elnRP',
    name: 'Louis Vuitton Keepall Bandouliere Clouds Monogram 50 Blue',
    price: 9135,
    description:
      'Dimensions\n11.4H 19.7W 9.1D\nMaterial\nCOATED CANVAS\nRetail Price\n$2,810\nColor\nBLUE\nHardware\nSILVER-TONE\nStyle\nM45428\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nSeason\nFW20',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllospkjy0004ky15ow1hy2ah_2755059__UZJkir32G',
    name: 'Basketball Keepall 55 Antartica',
    price: 9119,
    description:
      'Dimensions\n10.6H 21.7W 7.9D\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$3,500\n\nColor\nANTARTICA\n\nHardware\nGOLD-TONE\n\nSize\n55\n\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\n\nSeason\nCRUISE 21',
    brand: 'Louis Vuitton x NBA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls102unf005nkr17qzzs9pd2_6622225__GdjUPRuac',
    name: 'Chanel Boy Flap Quilted Caviar Gold-tone Medium Black',
    price: 9110,
    description: 'Retail Price\n$4,700',
    brand: 'Chanel',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwchwob10ang1227kupzwbjd_237262__aBh8Eo-UP',
    name: 'Louis Vuitton Keepall Bandouliere Monogram Outdoor 45 Pacific Blue',
    price: 9080,
    description:
      'Dimensions\n10.6H 17.7W 7.9D\nMaterial\nCOATED CANVAS\nColor\nPACIFIC BLUE\nHardware\nSILVER-TONE\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nProduct Description\nPlease Note: This item comes with a dust bag, the box is not required.',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyru2w94002vv4qwdqg0ejve_1095330__AzWZLuOF1',
    name: 'Versace Barocco-print mahjong set (52cm x 10.5cm)',
    price: 9062,
    description:
      "Made in Italy\nHighlights\nblack/grey\ncalf leather\nsmooth grain\nsignature Barocco print\nMedusa Head motif\nsilver-tone logo plaque\ndebossed logo to the front\nfoldover top with magnetic fastening\npartitioned compartment\nhard rectangle body\nassembly required\nincludes 144 mahjong tiles; 2 dices and counting sticks\nPlease refer to the Size & Fit tab to learn more about this item's dimensions.\nComposition\nAcrylic 100%, Calf Leather 100%",
    brand: 'Versace',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu4yo4yl00w4jp13a3lbqp1d_5442771__oKsgf8U1_',
    name: 'Cartier Glasses Iced Out Diamonds Rimless - 2.50ctw - White Gold',
    price: 9027,
    description:
      'This Icebox Cartier Blue Fade Glasses is made of 14K Yellow gold with 2.50ctw of diamonds. This piece is handcrafted and manufactured by Icebox. All of the diamonds are hand-set by a master diamond setter in the highest quality craftsmanship.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln9gh2wb002bjo17gkw16n6q_3936372__jcDX_70m7',
    name: 'Nike SB Dunk High 420 Reverse Skunk (Special Box)',
    price: 9021,
    description:
      "Style\nCW9971-500\n\nColorway\nPURPLE/PURPLE/GREEN\n\nRetail Price\n$170\n\nRelease Date\n04/20/2020\n\nIncluded Accessories\nGREEN SB EXTRA LACES, NUMBERED SKUNK POSTER, SKUNK STICKER, SKUNK KEYCHAIN, SKUNK SPECIAL BOX\n\nProduct Description\nTo celebrate the 10 year anniversary of the original Nike SB Dunk High Skunk 420, Familia Skateshop teamed up with Nike SB to release the limited edition Nike SB Dunk High 420 Reverse Skunk (Special Box). Just like its predecessor, the Reverse Skunk was designed by the Nike SB colorway legend Todd Bartrud. Only 420 pairs were released, each of them numbered.\n\nThis SB Dunk High is composed of a purple fuzzy suede upper with hits of green on the Swoosh and heel tab. Each pair's individual numbering is embossed on the outer heel. Purple midsoles, green outsoles, and skunk graphic insoles complete the design. These sneakers released in April of 2020 and retailed for $140 USD.\n\nNote: The Nike SB Dunk High 420 Reverse Skunk (Special Box) includes the graphic box cover, key chain, graphic print, and stickers.",
    brand: 'Nike x Familia Skateshop',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqso16v30088jw17hprefdoq_2976009__fZUGhu9R5',
    name: 'Louis Vuitton Keepall Bandouliere50 Monogram Washed Denim coated canvas',
    price: 9000,
    description:
      'Dimensions\n\n11.4H 19.7W 9.1D Strap 19.7\nMaterial\n\nDenim Canvas\nRetail Price\n\n$3,700\nColor\n\nMonogram Washed Denim coated canvas\nHardware\n\nSilver-tone\nSize\n\n50\nRelease Date\n\n05/25/2023\nStyle\n\nM22532\nIncluded Accessories\n\nRemovable and Adjustable Strap\nSeason\n\nPFW23',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7tg0ql00o9jy13jemsxn05_6007565__EGE89ak9dY',
    name: 'Cartier Love Bracelet (White Gold)',
    price: 9000,
    description:
      'LOVE bracelet, white gold (750/1000). Comes with a screwdriver. Width: 6.1 mm. Created in New York in 1969, the LOVE bracelet is an icon of jewelry design: a close fitting, oval bracelet composed of two rigid arcs which is worn on the wrist and removed using a specific screwdriver. The closure is designed with two functional screws placed on either side of the bracelet: you will need help to open or close it. To determine the size of your LOVE bracelet, measure your wrist, adding one centimeter to your size for a tighter fit, or two centimeters for a looser fit.\nPlease note that the carat weight, number of stones and product dimensions will vary based on the size of the creation you order. For detailed information please contact us.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0zjhygf0000qoc8bx8qzeg5_2791342__oSARO4vOP',
    name: 'XoticPC G20 Epic Gaming PC',
    price: 9000,
    description:
      'The XOTIC PC G20 Ultimate is a high-end gaming desktop featuring an Intel Core i9-14900K processor, NVIDIA GeForce RTX 4090 24GB GPU, and ASUS ROG STRIX Z790-E motherboard. It includes 32GB DDR5-6000MHz RGB RAM and dual 2TB NVMe Gen 4 SSDs for fast storage. The system is housed in a custom Frostbite hardline water-cooled setup, powered by a 1000W Corsair Gold PSU, and runs on Windows 11 Home. It comes with a lifetime parts and labor warranty.',
    brand: 'XoticPC',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz6ci75x00g2gzphfzoq4hee_2380535__LEyQtHpYv',
    name: 'Jewelry Shop Credit',
    price: 9000,
    description:
      "Craft the jewelry of your dreams with PackDraw! Claim this voucher to collaborate with our team and design your own piece of high-end jewelry. Whether it's a bracelet, watch, necklace, earrings, ring, or a unique combination, we will do our best to tailor each creation just for you!\n\nNote: Redeeming this voucher initiates a personalized consultation with a member of our team through email to discuss your vision and assess feasibility. Claiming multiple vouchers increases your budget, allowing for even more luxurious designs.",
    brand: 'PackDraw',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltbxsbvb00bnl61620xvcrmf_7491427__uOdcMmzPK',
    name: 'Louis Vuitton Christopher MM Abyss Blue',
    price: 8997,
    description:
      'Dimensions\n17.3H 15W 8.3D\nMaterial\nCOATED CANVAS\nRetail Price\n$3,800\nColor\nABYSS BLUE\nHardware\nSILVER-TONE\nSize\nMM\nRelease Date\n05/25/2023\nStyle\nM22636\nSeason\nPFW23',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrto45a600b5jt17b15vrhu8_9047939__Oiw5qpocx',
    name: 'Louis Vuitton Shopper Bag MM Safran',
    price: 8980,
    description:
      'Dimensions\n12.6H 15.7W 6.3D\n\nMaterial\nCOWHIDE LEATHER\n\nRetail Price\n$4,600\n\nColor\nSAFRAN\n\nHardware\nSILVER-TONE\n\nSize\nMM\n\nRelease Date\n01/04/2024\n\nStyle\nM24457\n\nIncluded Accessories\nREMOVABLE STRAP, DUST BAG\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqskkcbb006gji17f57olueq_7056188__F6CbDwqAe',
    name: 'Canon - EOS C70 4K Video Mirrorless Cinema Camera',
    price: 8950,
    description:
      "The Canon EOS C70 offers exceptional cinema capabilities in a compact package. Enjoy stunning images with a 4K Super 35mm DGO Sensor and all the built-in features you could ask for, including ND Filters, mini XLRs, direct touch rotatable LCD screen, Dual Pixel CMOS Autofocus, and excellent battery life. Making the EOS C70 even more powerful is compatibility with Canon's expanding line of high-performance RF Lenses.  The lens kit includes the RF24-70 f/2.8L IS USM lens—a a standard zoom lens featuring advanced optics and NANO USM for smooth, fast, virtually silent AF, plus bright f/2.8 maximum aperture and 5-stop-effective image stabilization for richly detailed photos and videos. ",
    brand: 'Canon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu4yt3b600lmkw14eyb2jzjm_7541486__us0IGTmLt',
    name: 'Cartier Glasses Iced Out Diamond Rimless - 2.50ctw - Yellow Gold',
    price: 8940,
    description:
      'This Icebox Cartier Glasses is made of 14K Yellow gold with 2.50ctw of diamonds. This piece is handcrafted and manufactured by Icebox. All of the diamonds are hand-set by a master diamond setter in the highest quality craftsmanship.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz5qe1py012orqlbhq0rakbc_4548925__GADkK2NTf',
    name: 'Bearbrick x Fragment x Haroshi Karimoku (Carved Wooden) 400%',
    price: 8915,
    description:
      "The Bearbrick x Fragment x Haroshi Karimoku 400% is an exceptional and highly sought-after collectible. This figure is a collaborative masterpiece, combining the creative forces of Bearbrick, Fragment Design, and Haroshi, with the expert craftsmanship of Karimoku. Crafted from carved wood, this 400% Bearbrick showcases Haroshi's unique artistic vision, blending Fragment's iconic style with Karimoku's renowned woodworking skills. The intricate design and attention to detail make this piece a standout addition to any collection. Perfect for art enthusiasts and Bearbrick aficionados, this figure embodies the pinnacle of collaborative artistry and craftsmanship.",
    brand: 'Bearbrick x Fragment x Haroshi Karimoku',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1l607df0000xbj0ukui6neo_5094495__Bpm7Rk0XL',
    name: 'Goyard Boeing Goyardine 55 Black',
    price: 8905,
    description:
      'The Goyard Boeing 55 in Goyardine Black is a luxurious travel bag crafted from Goyard’s signature coated canvas with leather accents. Designed for stylish jet-setters, this spacious duffle bag features a cylindrical shape, zippered closure, and reinforced handles for durability. The Boeing 55 offers ample room for personal items and essentials, making it perfect for short trips or as a carry-on. With its iconic Goyardine pattern and refined details, it combines elegance and practicality, embodying Goyard’s timeless craftsmanship.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63b89f119f2b426771c006de.png',
    name: 'Hublot Big Bang Diamonds',
    price: 8900,
    description: '',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls10h8xd00fgjt16w0rxnwqs_7326540__nSqWL7P0F',
    name: 'Chanel Heart Clutch With Chain Mini 22S White',
    price: 8884,
    description:
      'Dimensions\n4.7H 5.1W 2.1D\n\nMaterial\nLAMBSKIN LEATHER\n\nRetail Price\n$3,400\n\nColor\nWHITE\n\nHardware\nGOLD-TONE\n\nSize\nMINI\n\nStyle\nAP2784 B08163 10601\n\nProduct Description\nThis Chanel Heart Clutch With Chain made its debut in Spring Summer 2022. Featuring White Lambskin Leather and Gold-Tone Metal Hardware the Mini Chanel Heart Bag measures 4.7 × 5.1 × 2.1 in. and originally retailed for $3,400 USD. Chanel Ref. AP2784 B08163 10601.\n\nPlease Note: This item comes with a dust bag, the box is not required.',
    brand: 'Chanel',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls10abmm007ajt17w0fikmbo_3185216__vs229YpUm',
    name: 'Chanel Vanity Case Bag Small 22S Calfskin Coral Pink',
    price: 8884,
    description:
      'Dimensions\n5.1H 6.8W 2.9D\n\nMaterial\nCALFSKIN LEATHER\n\nRetail Price\n$5,000\n\nColor\nCORAL PINK\n\nHardware\nGOLD-TONE\n\nSize\nSMALL\n\nStyle\nAS3221 B08006 NH621\n\nProduct Description\nThis Chanel Small Vanity Case in Coral Pink grained shiny calfskin and gold-tone metal hardware was originally released in the Spring Summer 2022 collection retailing for $5,000 USD. Measuring 5.1 × 6.8 × 2.9 in this bag features both a structured chain top handle and a long shoulder strap.\n\nPlease Note: This item comes with a dust bag, the box is not required.',
    brand: 'Chanel',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu4zgre500k2le15sdidjsxi_7238630__crUJ_TN0f',
    name: 'Cartier Glasses Iced Out Diamond Rimless - 2.50ctw - White Gold',
    price: 8855,
    description:
      "These Cartier glasses are Cartier White Tone. These glasses do not come with the manufacturer's warranty. In place of the manufacturer's warranty, we offer a 12-month Icebox warranty.",
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw8aj5s60r2tlivqfugj7oio_8302982__UU9QA9QHd',
    name: 'Louis Vuitton x Yayoi Kusama Keepall 55 Monogram Eclipse',
    price: 8855,
    description:
      '\nDimensions\n12.2H 21.7W 10.2D STRAP 19.7\nMaterial\nCOATED CANVAS\nRetail Price\n$3,650\nColor\nMONOGRAM ECLIPSE\nHardware\nBLACK-TONE\nSize\n55\nRelease Date\n01/06/2023\nStyle\nM46401\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nSeason\nFW22',
    brand: 'Louis Vuitton x Yayoi Kusama',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqsnzaow006ejo18z83ag7fn_7978193___DEtxqU9T',
    name: 'Louis Vuitton Keepall 50 Granite',
    price: 8825,
    description:
      'Dimensions\n\n11.4H 19.7W 9.1D\nMaterial\n\nEmbossed Cowhide Leather\nRetail Price\n\n$4,900\nColor\n\nGranite\nHardware\n\nSilver-tone\nRelease Date\n\n07/14/2022\nStyle\n\nM20901\nIncluded Accessories\n\nStrap, Lock, Key, Lock Cover, Luggage Tag, Handle Strap, Dust Bag\nSeason\n\nFW22',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clloryvpl0002jn18ivchcpna_8594339__thMqZLglQ',
    name: 'Louis Vuitton x NBA New Backpack Monogram',
    price: 8820,
    description:
      'Dimensions\n17.7H 9.4W 7.5D\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$3,800\n\nHardware\nGOLD-TONE\n\nIncluded Accessories\nDUST BAG\n\nSeason\nCRUISE 21',
    brand: 'Louis Vuitton x NBA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clzc8426500hu122wnl79mc64_5117114__W7goBqOnU',
    name: 'Van Cleef Perlée Signature Bracelet',
    price: 8812,
    description:
      'The Perlée Signature Bracelet in 18K yellow gold is an elegant and refined piece, perfect for adding a touch of luxury to any outfit. This medium model, reference VCARP3K600, features a delicate and sophisticated design. It is secured with a blade clasp made of 18K white gold, ensuring both style and durability. With a bracelet wrist size of 6.69 inches, it offers a comfortable and perfect fit. The intricate craftsmanship and timeless design make this bracelet a standout addition to any jewelry collection.',
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0zlu32300009p7fdshzp5i2_6002070__wUsWIipv8',
    name: 'Origin Genesis Gaming PC',
    price: 8800,
    description:
      'The Origin Genesis Gaming PC is a powerhouse system designed for ultimate performance. It features the Intel Core i9-14900K 24-core processor, paired with an ASUS ROG Maximus Z790 Dark Hero motherboard. The system includes 32GB of CORSAIR DOMINATOR TITANIUM RGB DDR5 RAM, NVIDIA GeForce RTX 4090 with Hydro X cooling, and 4TB of Corsair MP700 PRO SE storage. The PC is cooled by a Hydro X iCUE LINK hardline cooling system with crystal clear tubing and powered by a 1500W CORSAIR HX1500i Platinum PSU. It runs Windows 11 Pro for optimal performance. (Please Note: As this is a custom high end iBuyPower PC Build, it may take several weeks to be built and arrive when claimed.)',
    brand: 'Origin',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnat78kw000nmp17ixv4ml1m_6036315__gNpq36Cii',
    name: 'Bearbrick x Kaws Dissected 1000% Grey',
    price: 8796,
    description:
      'Color\nGREY\n\nRelease Date\n02/01/2010\n\nRetail Price\n$900\n\nDimensions\n27.5 IN / 70 CM',
    brand: 'Bearbrick x Kaws',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvoivu290rkr12866nfumnda_7851300__KRCOUMAyH',
    name: 'Prada embroidered organza shirtdress',
    price: 8760,
    description:
      'black/yellow\ncotton\norganza\nembroidered design\nstraight-point collar\nsleeveless\nfront button fastening\nbelted waist\nA-line skirt\nComposition\nCotton 100%',
    brand: 'Prada',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln9ef77x0002mp17iq3yrwwk_8065516__ZuAq47gtCH',
    name: 'Jordan 3 Retro Oregon Ducks Pit Crew Black',
    price: 8757,
    description:
      'Style\nHO11-MNJDLS-5\n\nColorway\nBLACK/CEMENT GREY-DARK FOREST GREEN-WHITE-VARSITY MAIZE\n\nRetail Price\n$210\n\nRelease Date\n10/11/2011\n\nProduct Description\nAthletes at the University of Oregon are envied in the sneaker world because of the exclusive "Ducks" colorways and at the Air Jordan 3 Oregon Ducks "Pit Crew" is at the top of the cop list for many. The Pit Crew is the nickname given to the upwards of 1500 crazed fans in the student section of Oregon’s home games across all of Oregon’s athletics. Back in 2011, Jason Williams (the ex-Oregon football player) worked with legendary designer, and Oregon Ducks Alum, Tinker Hatfield to create the Pit Crew Jordan 3. Both a white version and a black version were created in an effort to honor and inspire "Pit Crew" students. Those students that attended a certain amount of events, "earn" their pair by showing support for Oregon athletics. Both AJ3 Oregon Ducks Pit Crew colorway features the school’s green and yellow colors. Each colorway of the Pit Crew Jordan 3 features the Oregon "O" logo stitched into the tongue and duck feet stitched into the heel. The black colorway features an additional logo stitched into the ankle featuring the image of two hands clapping. Of course, there is no real way of knowing how many of these rare Oregon Ducks Jordan 3s actually exist but the hype around them was unparallelled back when they were first seen in late 2011. The Pit Crew Jordan 3 was also seen on the feet of athletes and celebrities like Dwyane Wade, Chi McBride, Kevin Durant, Carmelo Anthony and more. It seems, no matter where you actually went to school, the Jordan 3 Retro Oregon Ducks "Pit Crew" is a must have.',
    brand: 'Jordan',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7sw5f100c2jv14jwi9wzu0_3284765__RJbNv_efq',
    name: 'Cartier Love Bracelet (Rose)',
    price: 8750,
    description:
      'LOVE bracelet, 18K rose gold (750/1000). Comes with a screwdriver. Width: 6.1 mm. Created in New York in 1969, the LOVE bracelet is an icon of jewelry design: a close fitting, oval bracelet composed of two rigid arcs which is worn on the wrist and removed using a specific screwdriver. The closure is designed with two functional screws placed on either side of the bracelet: you will need help to open or close it. To determine the size of your LOVE bracelet, measure your wrist, adding one centimeter to your size for a tighter fit, or two centimeters for a looser fit.\nPlease note that the carat weight, number of stones and product dimensions will vary based on the size of the creation you order. For detailed information please contact us.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu518tvv011ek114b19287r0_5380152__yTHkqEcSt',
    name: 'Cartier Glasses Iced Out Diamonds Rimless - Pink Fade Lens - 1.15ctw',
    price: 8740,
    description:
      "These Cartier glasses are Gold Tone.  The frame size of these glasses have 53mm lens width, 16mm bridge and 135mm from temple to temple. These glasses do not come with the manufacturer's warranty. In place of the manufacturer's warranty, we offer a 12-month Icebox warranty.",
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm225lqig00007brreak2ludf_4672825__e-ZfJHR-uc',
    name: 'Dior x RIMOWA 4-Wheel Large Suitcase Aluminium Dior Oblique Blue Gradient',
    price: 8702,
    description:
      'The Dior x RIMOWA 4-Wheel Large Suitcase in Aluminium Blue Gradient features a captivating design that blends luxury and durability with a unique gradient effect. Showcasing the iconic Dior Oblique pattern etched onto the aluminum shell, this suitcase is perfect for extended trips with its spacious interior and well-thought-out compartments. The four-wheel system ensures smooth maneuverability, making it an ideal choice for those seeking a sophisticated yet practical travel companion that stands out with its bold and distinctive style.',
    brand: 'Dior x RIMOWA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljt491o40000jy08or95oava_152005__tqn2s3gj3',
    name: 'Ladies Ruby and Diamond Earrings 2.49 Carats Rubies',
    price: 8700,
    description:
      'Metal Type\t\n18 Karat White Gold\n\nStone One Carat Weight\t\n2.49 Carats\n\nStone Two Carat Weight\t\n0.84 Carats\n\nStone Two Type\t\nRound Diamond\n\nStone One Type\t\nRuby',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwa292q30b6hct8rjudwdg1h_478315__jNd4qkHQU',
    name: 'Louis Vuitton x Nigo Keepall Bandouliere 50 Monogram Blue',
    price: 8686,
    description:
      'Dimensions\n11.4H 19.7W 9.1D\nMaterial\nDENIM/LEATHER\nRetail Price\n$3,600\nColor\nBLUE\nHardware\nGOLD-TONE\nSize\n50\nRelease Date\n10/28/2021\nStyle\nM45975\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nSeason\nFW21',
    brand: 'Louis Vuitton x Nigo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljs3msvj002rjt08etgtt9ko_7156225__GLVyMieZ9',
    name: 'Ladies Diamond Ring 1.97 Carat Emerad Cut Diamonds',
    price: 8680,
    description:
      'Metal Type\t\n18 Karat White Gold\n\nStone One Carat Weight\t\n1.97 Carats\n\nStone Two Carat Weight\t\n0.75 Carats\n\nStone Two Type\t\nSurrounding Round Diamond\n\nStone One Type\t\nEmerald Cut Diamond',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwa40dgi07aomp4hi5oiyqgb_9594457__vp6_IWfh_',
    name: 'Louis Vuitton Keepall Bandouliere 50 Pastel Multicolor',
    price: 8677,
    description:
      'Dimensions\n12.2H 21.7W 9.4D\nMaterial\nCANVAS\nColor\nPASTEL MULTICOLOR\nHardware\nSILVER-TONE\nSize\n50\nStyle\nM57486\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nProduct Description\nPlease Note: This item comes with a dust bag, the box is not required.',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clunglv6p00r0l2131kkh6xwt_9069470__D_-nyJm06',
    name: 'Afidano Humidors L6',
    price: 8671,
    description:
      'Afidano cigar humidors are made of real leather and Spanish Cedar equipped with\noriginal HPR temperature and humidity constant system to give your cigar a relaxed and\ncomfortable space for fermentation. At the same time, Afidano cigar humidors can be\ncontrolled with an App. It is also equipped with fingerprint lock to protect the cigars.\n\nDimension: 598(W)*625(D)*1670(H )mm\n\nCompressor: Famous brand DC inverter compressor\n\nVoltage/Frequency: 110V/60HZ\n\nCooling methods: Air cooling\n\nControlling methods: LED Screen+knob\n\nTemp range: 16-22℃±1℃\n\nHumidity range: 60-75%±3%\n\nDrawer materials: Spanish Cedar wood\n\nDrawer quantity: 8\n\nCapacity: 2000-2500 pcs\n\nOuter: Real Leather\n\nLiner material: Spanish Cedar wood\n\nLock: Fingerprint lock\n\nApp: Afidano App\n\nAvailability varies, please allow up to 10 weeks for delivery\n\nShipping Charge at checkout serves as a handling fee. Shipping price included.\n\nAll sales are final. Any damage that occurs during the shipping process will be handled by Afidano Humidors and/or the shipping company.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw8aawtp0otzlivqbcpwuqow_5405236__KY1-6waP_4',
    name: 'Louis Vuitton LV x YK Keepall 55 Pumpkin Print',
    price: 8650,
    description:
      'Dimensions\n12.2H 21.7W 10.2D STRAP 19.7\nMaterial\nMONOGRAM ECLIPSE REVERSE COATED CANVAS\nRetail Price\n$3,400\nColor\nPUMPKIN PRINT\nHardware\nRUTHENIUM-TONE\nSize\n55\nRelease Date\n03/31/2023\nStyle\nM46439\nSeason\nSS23',
    brand: 'Louis Vuitton LV x YK',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw7yllnb0tl1v11flw7qpl06_1284887__CqYz4NcViE',
    name: 'Louis Vuitton Keepall Bandouliere 25 Metallic',
    price: 8650,
    description:
      'Dimensions\n5.9H 9.8W 4.3D STRAP 24.8\nMaterial\nMETALLIC NEBULA COATED CANVAS\nRetail Price\n$3,350\nColor\nMETALLIC\nHardware\nSILVER-TONE\nSize\n25\nRelease Date\n07/13/2023\nStyle\nM23119\nSeason\nFW23',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2nhv71c9moo5crhotbwy9_521901__r2aQTyd8o',
    name: 'Louis Vuitton Nike Air Force 1 Mid By Virgil Abloh White',
    price: 8641,
    description:
      'Colorway\nWHITE/WHITE\n\nRetail Price\n$3,450\n\nRelease Date\n07/19/2022',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljt2vexn000akt08bk5lzvzv_8780283__qwUKfn3bu',
    name: 'Ladies Diamond Necklace with Rubies 5.31 Carats',
    price: 8630,
    description:
      'Metal Type\t\n18 Karat White Gold\n\nStone One Carat Weight\t\n5.31 Carats\n\nStone Two Carat Weight\t\n1.84 Carats\n\nStone Two Type\t\nRound Diamond\n\nStone One Type\t\nRuby',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu51h7n9009ul614g9ncmaph_9712474__DyQtX6LSI',
    name: 'Cartier - Santos Large 40MM - Steel Silver Dial',
    price: 8625,
    description:
      'Cartier\nSantos De Cartier\n40mm Case Size "Large"\nStainless Steel\nSilver Dial\nUnworn\nFull Set - Box & Papers Included',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm00elsv9005d7n5qk8bvz8l6_9520973__mCL3wL5LY',
    name: 'Rolex Wind Vintage Datejust 16234',
    price: 8625,
    description:
      'Rolex Datejust silhouette\n\nReference 16234\n\nUnpolished stainless steel\n\n36mm diameter\n\nService history unknown\n\nBox and papers not included \n\n \n\nStyle: wv-16234-47\n\nColor: Silver Dial / Unpolished\n\nMaterial: Stainless Steel',
    brand: 'Rolex',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw8jd9rv0cpxxg21ujy3bt71_4233124__J-x-lj5R6',
    name: 'Louis Vuitton x Yayoi Kusama Keepall 50 Black/Red',
    price: 8612,
    description:
      'Dimensions\n11.4H 19.7W 9.1D STRAP 19.7\nMaterial\nTAURILLON COWHIDE LEATHER\nRetail Price\n$4,750\nColor\nBLACK/RED\nHardware\nBLACK-TONE\nSize\n50\nRelease Date\n01/06/2023\nStyle\nM21674\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nSeason\nFW22',
    brand: 'Louis Vuitton x Yayoi Kusama',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqsn81qa007rl91713ve563r_134032__e6VxMoiFW',
    name: 'Louis Vuitton Keepall Bandouliere 50 Gradient Electric Sun',
    price: 8592,
    description:
      'Dimensions\n\n11.4H 19.7W 9.1D Strap 19.7\nMaterial\n\nEpi Xl Calfskin Leather\nRetail Price\n\n$4,700\nColor\n\nGradient Electric Sun\nHardware\n\nBlack-tone\nSize\n\n50\nRelease Date\n\n07/13/2023\nStyle\n\nM23174\nSeason\n\nFW23\nProduct Description\n\nPlease Note: This item comes with a dust bag, the box is not required.\n',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln9j0zb5000tk016md62t4lk_8368308__0rlSD9XoQ',
    name: 'Nike Air Max 1 AMS Parra Amsterdam',
    price: 8542,
    description:
      'Style\n313188-241\n\nColorway\nBROWNSTONE/BLUE REEF-DARK OAK\n\nRetail Price\n$110\n\nRelease Date\n08/01/2005\n\nProduct Description\nWho would have ever thought the color combo of Brownstone/Blue Reef-Dark Oak, also known as the Parra x Nike Air Max 1 "Amsterdam" would become one of the sought after sneakers of all time? Well, probably the man himself, Parra. The Dutch artist is most known for his curvy post-pop imagery and vibrant colors and lettering and has garnered himself a cult-like following from streetwear, sneaker and street art connoisseurs. His eclectic work is easily recognizable and his hometown of Amsterdam, The Netherlands, helped inspire and launch this Tier Zero release back in 2005. Using the red, burgundy and teal blue hues that his artwork often features, Parra’s first Air Max design became a hit thanks to its unique color combo and Parra’s self-taught illustrative skill that can be seen on the insoles. The Amsterdam crest on the heel of this Parra x Air Max 1 all but defined its nickname from the very beginning. With a rumored 200-300 pairs in existence, including a small amount that hit Nike outlet stores and sold for as low as $30, the Parra Air Max 1 has become one of the most collectible sneakers ever created despite reports of only being made up to a size 11.5. Though the Parra x Nike Air Max 1 "Amsterdam" is sought after, the "Friends and Family" version features Parra’s scripted signature stitched into the forefoot mud guard and was even more limited (approximately 24 pairs).',
    brand: 'Nike Air x Parra',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltbxp60s00a2ib163m49aa0t_6774408__hRajxSQpW',
    name: 'Louis Vuitton Christopher MM Radiant Sun',
    price: 8539,
    description:
      'Dimensions\n17.3H 15W 8.3D\nMaterial\nMACASSAR COATED CANVAS\nRetail Price\n$3,300\nColor\nRADIANT SUN\nHardware\nBLACK-TONE\nSize\nMM\nRelease Date\n06/29/2023\nStyle\nM46686\nSeason\nPFW23',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw7cs3ru0w1umjnpwxx7wim4_7245969__G2YLCG4g-',
    name: 'Louis Vuitton Keepall 50 Damier Scuba Yellow',
    price: 8511,
    description:
      'Dimensions\n11.4H 19.7W 9.1D STRAP 19.7\nMaterial\nCALFSKIN LEATHER\nRetail Price\n$4,700\nColor\nYELLOW\nHardware\nBLACK-TONE\nSize\n50\nRelease Date\n04/25/2024\nStyle\nM25019\nIncluded Accessories\nREMOVABLE NAME TAG, REMOVABLE AND ADJUSTABLE STRAP, PADLOCK\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwgswyo01zw2ijjhnonyfrsp_468550__QWsGj1ncV',
    name: '1 Carat Ruby',
    price: 8500,
    description: null,
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu7rn1gb0000l613ywceb268_5551891__GU11_yML5',
    name: 'Cartier Love Bracelet (Gold)',
    price: 8500,
    description:
      'LOVE bracelet, 18K yellow gold (750/1000). Comes with a screwdriver. Width: 6.1 mm. Created in New York in 1969, the LOVE bracelet is an icon of jewelry design: a close fitting, oval bracelet composed of two rigid arcs which is worn on the wrist and removed using a specific screwdriver. The closure is designed with two functional screws placed on either side of the bracelet: you will need help to open or close it. To determine the size of your LOVE bracelet, measure your wrist, adding one centimeter to your size for a tighter fit, or two centimeters for a looser fit.\nPlease note that the carat weight, number of stones and product dimensions will vary based on the size of the creation you order. For detailed information please contact us.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm01air8e006gpe0bstx43rzo_9955891__7pgu21obA',
    name: 'Van Cleef Pure Alhambra bracelet, 4 motifs 18K yellow gold, Mother-of-pearl',
    price: 8500,
    description:
      "The Van Cleef & Arpels Pure Alhambra Bracelet is a refined and elegant piece that embodies simplicity and timeless beauty. Crafted from luxurious 18K yellow gold, this bracelet features four delicate motifs, each adorned with luminous white mother-of-pearl. The smooth, polished motifs are inspired by the iconic Alhambra four-leaf clover design, symbolizing luck, love, and harmony. The combination of radiant yellow gold and shimmering mother-of-pearl creates a sophisticated and versatile accessory that can elevate any outfit. The Pure Alhambra Bracelet is a testament to Van Cleef & Arpels' exceptional craftsmanship and classic style, making it a treasured addition to any jewelry collection.",
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz6c5dkh00h8tbnwatysji8r_8583216__HmrLZI_i1',
    name: 'Jewelry Shop Credit',
    price: 8500,
    description:
      "Craft the jewelry of your dreams with PackDraw! Claim this voucher to collaborate with our team and design your own piece of high-end jewelry. Whether it's a bracelet, watch, necklace, earrings, ring, or a unique combination, we will do our best to tailor each creation just for you!\n\nNote: Redeeming this voucher initiates a personalized consultation with a member of our team through email to discuss your vision and assess feasibility. Claiming multiple vouchers increases your budget, allowing for even more luxurious designs.",
    brand: 'PackDraw',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls0yp092000fl017q2nh7m5p_2775732__-n-sUzpqR',
    name: 'Chanel Kelly Mini Shopping Bag Mini 23K Shiny Aged Calfskin Coral Pink',
    price: 8487,
    description:
      'Dimensions\n5.1H 7.4W 2.7D\n\nMaterial\nSHINY AGED CALFSKIN\n\nRetail Price\n$4,400\n\nColor\nCORAL PINK\n\nHardware\nGOLD-TONE\n\nSize\nMINI\n\nRelease Date\n09/13/2023\n\nStyle\nAS4416 B14296 NR646\n\nSeason\nFW23',
    brand: 'Chanel',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwa4fi7z019jp9m8rhtw341n_2585434__lehq402AX',
    name: 'Louis Vuitton Keepall XS Monkey',
    price: 8480,
    description:
      'Dimensions\n8.3H 4.7W 3.5D STRAP 24.8\nMaterial\nCOATED CANVAS\nRetail Price\n$2,850\nHardware\nBLACK/ORANGE-TONE\nSize\nXS\nStyle\nM80118\nIncluded Accessories\nSTRAP, DUST BAG\nSeason\nSS21',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2lplv16wioo5cm8ur8c7n_6396575__SLI2QMq82R',
    name: 'Supreme RIMOWA Topas Multiwheel 82L Red',
    price: 8479,
    description:
      'Season\nSS18\n\nColor\nRED\n\nRelease Date\n04/12/2018\n\nRetail Price\n$1,800\n\nDimensions\n31.2H 20.1W 10.7D',
    brand: 'Supreme x RIMOWA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2isnz0xzzoo5cn5x1qwmx_9945165__9qGtFlRjz',
    name: 'Jordan 1 Retro Low Dior',
    price: 8463,
    description:
      'Jordan Brand connected with Parisian fashion house Dior to create history with the Jordan 1 Retro Low Dior. This is the first time that Jordan has collaborated with a legacy fashion label like Dior, making this release one for the books. This release was limited to only 4,700 pairs, each pair individually numbered.\n\nThis Jordan 1 Retro Low is composed of a white and grey leather upper with traditional Dior monogram print Swoosh. These shoes are made in Italy with premium materials. Co-branded icy translucent soles, Dior branded tongue and Wings logo, and a silver "Air Dior" hang tag completes the design. These sneakers released in April of 2020 and retailed for $2,000.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls10r1d10097kr16r9rxqwbm_2696551__QJEqo36LJ',
    name: 'Chanel Rectangular Flap Quilted Diamond Mini Black',
    price: 8406,
    description:
      'Dimensions\n5H 7.5W 2.5D STRAP 22.5\n\nMaterial\nLAMBSKIN\n\nRetail Price\n$3,395\n\nColor\nBLACK\n\nHardware\nSILVER-TONE',
    brand: 'Chanel',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu51jrgk000kl313cgdmy95w_9419237__OFkN-hInb',
    name: 'Cartier - Santos Large 40MM - Steel',
    price: 8395,
    description:
      'Cartier Wssa0030\nSantos de Cartier\nLarge Blue Santos \n39.8mm Case Size\nStainless Steel\nBlue Dial\n2024 Unworn\nFull Set - Box & Papers Included',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln9j4q0r000kkz16wjwhikr3_1995218__fAyOICsz-',
    name: 'Jordan 1 Retro High Off-White Euro',
    price: 8360,
    description:
      'Style\nAQ0818-100\n\nColorway\nWHITE/WHITE\n\nRetail Price\n$190\n\nRelease Date\n03/03/2018\n\nIncluded Accessories\nBLUE "OFF-WHITE" ZIP TIE, BLACK W/ WHITE TEXT LACES, PURPLE W/ WHITE TEXT LACES, ORANGE W/ BLACK TEXT LACES, MINT GREEN W/ BLACK TEXT LACES\n\nProduct Description\nThe Air Jordan 1 Retro High Off White White is made from a mix of rubber, leather, cotton and synthetic materials.\n\nThis model of Air Jordan 1 is available in a white-on-white colorway. The sneaker’s upper is constructed of white leather and mesh with Swoosh branding on either side and blue accents. The shoe also has Wings logos on the ankles. It features orange tabs, black "AIR" lettering on the midsole, and black \'Off-White™ for NIKE\' text on the side panels.\n\nThe Air Jordan 1 Retro High Off White White was released on the 3rd of March 2018, and retailed for an original price of $190.',
    brand: 'Jordan x Off-White',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln9eqbuo0000jz18t1bujt45_7059154__UvcGwgjri',
    name: 'Louis Vuitton Nike Air Force 1 Low By Virgil Abloh White Royal',
    price: 8314,
    description:
      'Colorway\nWHITE/ROYAL\n\nRetail Price\n$2,750\n\nRelease Date\n07/19/2022\n\nIncluded Accessories\nEXTRA BLUE SHOELACES, 2 X WHITE DUST BAGS, LV BROWN MONOGRAM TAG, WHITE BUCKLE STRAP, WHITE LEATHER SWOOSH',
    brand: 'Louis Vuitton x Nike x Virgil Abloh',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls0yf7ay000al617oydjfo6q_1798287__4UjKfSwyJ',
    name: 'Chanel Boy Flap Quilted Medium Caviar Black',
    price: 8302,
    description:
      'Material\nCAVIAR\n\nRetail Price\n$4,700\n\nColor\nBLACK\n\nHardware\nRUTHENIUM-TONE\n\nSize\nNEW MEDIUM',
    brand: 'Chanel',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clk5u7ndt0000mj085faesyz0_6845229__dKnGIa5qo',
    name: 'Louis Vuitton Don Kanye Cream',
    price: 8250,
    description:
      'Style\nYP6U1PPC\n\nColorway\nCREAM\n\nRetail Price\n$870\n\nRelease Date\n07/01/2009',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxva3rtg02e211j1lo5wzd1o_7489876__4VY1C_7Ov',
    name: 'WOLF Roadster 6-Piece Watch Winder',
    price: 4000,
    description:
      'The WOLF Roadster 6-Piece Watch Winder with Glass Cover in Black is a luxurious and functional accessory for maintaining your automatic watches. This elegant winder can accommodate up to six watches, providing a secure fit with its patented lock-in dynamic cuff that adjusts to all wrist sizes. The sleek glass cover offers protection while showcasing your timepieces beautifully. Crafted from high-quality vegan leather, the Roadster combines style with ethical materials. It includes a universal adapter, ensuring compatibility worldwide. Perfect for discerning watch enthusiasts, the WOLF Roadster 6-Piece Watch Winder ensures your watches are always perfectly wound and ready to wear.',
    brand: 'WOLF',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0zi98b90000v9qv2fmxwx6v_6996314__ck-tJsUIZ',
    name: 'iBuyPower Y70 002 Gaming PC',
    price: 4000,
    description:
      'The iBUYPOWER RDY Y70 002 is a high-performance gaming PC equipped with an Intel Core i9-14900KF processor and an NVIDIA GeForce RTX 4090 24GB GPU. It comes with 32GB of DDR5-6000MHz RGB RAM and a 2TB M.2 NVMe Gen4 SSD for ultra-fast storage. The system is housed in a HYTE Y70 RGB gaming case and features a 360mm RGB liquid cooling system to ensure optimal thermal performance. It runs on Windows 11 Pro and includes a 1000W PCIe Gen 5 power supply.',
    brand: 'iBuyPower',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvod749z0vyqahl5pmbtggrx_6562548__Dgy8QI5h3',
    name: 'Brunello Cucinelli striped woven tote bag',
    price: 4000,
    description:
      'white/brown/black\njute-cotton blend\ninterwoven design\ntwo long top handles\nmagnetic fastening\nmain compartment\ninternal zip-fastening pocket\nThis item contains at least 50% materials which are certified or widely recognised as having a lower environmental impact through production and/or manufacturing processes that reduce water consumption and the use of harmful chemicals, or re-use by-products of the production process.\nLearn more about what makes a product Conscious on our Conscious Criteria page.\nComposition\nOuter: Jute 55%, Cotton 35%, Polyamide 10%',
    brand: 'Brunello Cucinelli',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz60xgck001equfznk42gizq_2622079__viz_XvXjM',
    name: 'Bearbrick Karimoku Fragment Carved Wooden Longitudinal Chess 400% Wood',
    price: 3997,
    description:
      'The Bearbrick Karimoku Fragment Carved Wooden Longitudinal Chess 400% is an exceptional collectible that beautifully combines traditional craftsmanship with modern design. This figure is the result of a collaboration between Bearbrick, Fragment Design, and Karimoku, showcasing their renowned woodworking expertise. Crafted from high-quality wood, this 400% Bearbrick features a unique longitudinal chess design, highlighting intricate carved details and superior craftsmanship. The collaboration with Fragment Design adds a contemporary flair, making this piece a standout addition to any collection. Ideal for art enthusiasts and Bearbrick collectors, this figure exemplifies the harmonious blend of classic artistry and modern aesthetics.',
    brand: 'Bearbrick Karimoku Fragment',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mokwm70000cwtd81p4yvpk_5342364__qnt1PcFPM',
    name: 'Goyard Artois Tote MM Grey',
    price: 3992,
    description:
      'The Goyard Artois Tote MM in Grey is a spacious and refined bag made from the brand’s signature Goyardine canvas with smooth leather trim. It features a zip-top closure for added security, reinforced leather corners for durability, and long handles for comfortable shoulder carry. The MM size provides ample room for everyday essentials or light travel. The elegant grey hue adds a touch of sophistication, making it an ideal choice for those seeking a luxury tote that combines functionality with timeless style.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clspi3s49002oi917txyp63o9_9287966__T8111JH7Z3',
    name: 'Louis Vuitton Twist MM Braided Links Epi Grained Leather Black',
    price: 3989,
    description:
      'Dimensions\n7.1H 9.1W 3.1D STRAP 20.9\n\nMaterial\nCOWHIDE LEATHER\n\nRetail Price\n$4,700\n\nColor\nBLACK\n\nHardware\nGOLD-TONE\n\nStyle\nM57517',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsfegrn20032ky17i80f7ohj_4266383__Mo4gCfMmb',
    name: 'OVO x NFL Las Vegas Raiders Varsity Jacket Black',
    price: 3988,
    description:
      'Season\nSS23\n\nColor\nBLACK\n\nRelease Date\n02/03/2023\n\nRetail Price\n',
    brand: 'OVO x NFL',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrsqeyna00bal417dava0c9z_511737__9_hvCVMX4',
    name: 'Louis Vuitton Chess Messenger Bag Damier Pop Jaune Mat',
    price: 3985,
    description:
      'Dimensions\n9.4H 9.4W 3.1D STRAP 22\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$2,850\n\nColor\nJAUNE MAT\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/04/2024\n\nStyle\nN40562\n\nIncluded Accessories\nREMOVABLE STRAP, DUST BAG\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrygy9ua0000jz174cllj36x_2695337__o1oOD2THS',
    name: 'Louis Vuitton Pochette Cosmetique PM Monogram Denim Blue',
    price: 3982,
    description:
      'Dimensions\n4.7H 7.5W 2.4D\n\nMaterial\nCOTTON DENIM\n\nRetail Price\n$890\n\nColor\nMONOGRAM DENIM BLUE\n\nHardware\nGOLD-TONE\n\nSize\nPM\n\nRelease Date\n01/01/2024\n\nStyle\nM24316\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqr6l00k0097lk17kmra9ux2_3092813__DeVSfnNim',
    name: 'Saint Laurent Loulou Quilted Shoulder BagBeige',
    price: 3973,
    description:
      'Dimensions\n\n6.7H 10.6W 3.5D\nMaterial\n\nLeather\nColor\n\nBeige\nHardware\n\nGold-tone',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrygs6dr0089ic17d3uh24q7_5448039__eyeAe_Q2l',
    name: 'Louis Vuitton Reade PM Tote Sky',
    price: 3968,
    description:
      'Dimensions\n6.5H 8.7W 4.3D STRAP 22.4\n\nMaterial\nMONOGRAM VERNIS LEATHER\n\nRetail Price\n$2,730\n\nColor\nSKY\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/01/2024\n\nStyle\nM24144\n\nIncluded Accessories\nMATCHING-COLORED HAIRCLIP, REMOVABLE STRAP\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mopee60002cwtdfwchjqqx_1923349__riKRtb4Ub',
    name: 'Goyard Belvedere PM Sky Blue',
    price: 3962,
    description:
      'The Goyard Belvedere PM in Sky Blue is a compact and elegant crossbody bag crafted from Goyard’s iconic Goyardine canvas, complemented by smooth leather trim. It features a structured design with a flap closure and buckle detail for added security, along with an adjustable shoulder strap for versatile wear. The vibrant sky blue hue adds a fresh, lively touch to its refined silhouette, making it a stylish choice for those seeking a blend of practicality, luxury, and eye-catching elegance. Ideal for everyday use.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clzbelf2m00347xkwjt62w90a_6306413__MsmuxTScH',
    name: 'New Balance 992 Joe Freshgoods No Emotions Are Emotions',
    price: 3957,
    description:
      'Style\nM992JFG1\nColorway\nPINK/RED-BURGUNDY\nRetail Price\n$175\nRelease Date\n02/14/2020\nProduct Description\nThe New Balance 992 Joe Freshgoods No Emotions Are Emotions is a product of the collaboration between New Balance and footwear designer Joe Freshgoods.\n\nA revitalized iteration of the classic New Balance 992, this sneaker features an upper constructed using burgundy mesh underlays with tan leather detailing and suede overlays in red and pink. Anchoring this upper is a foam midsole, white toward the forefoot and black towards the rear, and a black rubber outsole.\n\nThe New Balance 992 Joe Freshgoods No Emotions Are Emotions was released on Valentine’s Day 2020. At the time, this sneaker had a retail price of $175.',
    brand: 'New Balance',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwbj72fw0nsh1vi9u92u8jje_5153097__mLV2uUbxG',
    name: 'Louis Vuitton Keepall Bandouliere 25 Multicolor',
    price: 3953,
    description:
      'Dimensions\n5.9H 9.8W 4.3D STRAP 24.8\nMaterial\nMONOGRAM COATED CANVAS AND COWHIDE LEATHER\nRetail Price\n$2,730\nColor\nMULTICOLOR\nHardware\nPALLADIUM-TONE\nSize\n25\nRelease Date\n07/13/2023\nStyle\nM46701\nSeason\nFW23',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltbwzi0v00pxlg17yk9gdplt_6599555__w1Ya_YtME',
    name: 'Louis Vuitton Discovery Backpack PM Khaki Green/Vermillion Red',
    price: 3953,
    description:
      'Dimensions\n15H 11.4W 7.9D\nMaterial\nCOATED CANVAS\nRetail Price\n$3,150\nColor\nKHAKI GREEN/VERMILLION RED\nHardware\nBLACK-TONE\nSize\nPM\nRelease Date\n09/14/2023\nStyle\nM46802\nIncluded Accessories\nREMOVABLE NAME TAG\nSeason\nFW23',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllot5edm001gjw18iikwg0x2_5046488__93eWOdCMV',
    name: 'Graphic Blouson Brown',
    price: 3950,
    description:
      'Season\nFW21\n\nColor\nBROWN\n\nRelease Date\n05/28/2021\n\nStyle\nHLN11WZLL85M',
    brand: 'Louis Vuitton x NBA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln72i8al0000l5178p5y8tp5_8084763__XqzxL8Zrh',
    name: 'Next Level Racing Motion Platform v3',
    price: 3920,
    description:
      'European made, professional platform designed in collaboration with world Leading commercial motion engineers\nSpecially designed for just the seat to move as common world’s most advanced and high-end motion simulators including CXC Simulations; Incredibly fast, yet smooth realistic movements using professional motion cueing profiles and software engine\nThe most compact design in the world yet it’s incredibly powerful - it can fit within the space of your existing Cockpit without any additional space required\nSimple to use with dedicated click and play Next Level Racing Platform Manager Software compatible with all major racing and flight titles on PC with simple USB plug in; VR Headway technology built into the Platform Manager Software\nPassive and active cooling method with adaptive fan speed control to ensure the platform can even be used for more demanding purposes such as commercial centers and events whilst not overheating\nElectromagnetic motor shaft brakes ensure zero movement of the platform when the system is switched off\nBuilt in power source, including an active PFC function to protect from short circuit/overload/overvoltage and overheating Acoustical panels inside to reduce noise of operation even lower than the V1 and V2 which were both known for being quietest platf\nAcoustical panels inside to reduce noise of operation even lower than the V1 and V2 which were both known for being quietest platforms on the market\nMax Angular Displacement for Pitch & Roll: +- 10°; Max Speed: 20°/s; Max Acceleration: 360°/s2; Can Support up to 130 kg or 285 lb. users',
    brand: 'Next Level Racing',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsck7t6q0084jw15rp4ydm7u_4433398__wGiU4GxE_',
    name: 'John Hardy 14kt yellow gold Naga hoop earrings',
    price: 3910,
    description:
      'John Hardy\n14kt yellow gold Naga hoop earrings\n\nImported\n\nHighlights\n14kt yellow gold\npolished finish\nmedium hoop design\nwhite diamond\npavé setting\ndragon-head motif\ncut-out detailing\npin fastening\nfor pierced ears\nNormal everyday use and external agents may reduce the lustre of gemstones and gold surfaces. To maintain, use specific, non-abrasive products specially meant for cleaning jewellery.',
    brand: 'John Hardy',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrsqc7v7003sl5160ivy3oog_1186511__ojfeovmJQ',
    name: 'Louis Vuitton Nano Steamer Damier Pop Yellow',
    price: 3903,
    description:
      'Dimensions\n7.1H 5.9W 2.8D STRAP 22.8\n\nMaterial\nCOATED CANVAS/CALFSKIN LEATHER\n\nRetail Price\n$2,720\n\nColor\nYELLOW\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/04/2024\n\nStyle\nN40536\n\nIncluded Accessories\nREMOVABLE STRAP, DUST BAG\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljsvajf80000ml08dr0qasqb_5522845__TmhRv0VRZ',
    name: 'Ladies Diamond Necklace with Morganite 20.64 Carats',
    price: 3900,
    description:
      'Metal Type\t\n14 Karat Rose Gold\n\nStone One Carat Weight\t\n20.64 Carats\n\nStone Two Carat Weight\t\n0.64 Carats\n\nStone Two Type\t\nRound Diamond\n\nStone One Type\t\nMorganite',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm01b6he901267ukpromn49jx_5380546__qB08Ajn_I',
    name: 'Van Cleef Perlée diamonds bracelet, 5 rows, medium model 18K yellow gold, Diamond',
    price: 3900,
    description:
      "The Van Cleef & Arpels Perlée Diamonds Bracelet, featuring five rows in the medium model, is a breathtaking display of luxury and craftsmanship. Crafted from 18K yellow gold, this bracelet is adorned with multiple rows of delicate golden beads, interspersed with sparkling diamonds that add a dazzling touch of brilliance. The intricate design and the harmonious blend of gold and diamonds create a piece that is both elegant and bold, making it perfect for special occasions or adding a statement to any outfit. The Perlée Diamonds Bracelet is a testament to Van Cleef & Arpels' dedication to exquisite detail and timeless beauty, making it a truly remarkable addition to any jewelry collection.",
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls9ddd8l006gjx172xu98r55_3016902__I5q93t2dp',
    name: 'Apple Vision Pro 256GB',
    price: 3899,
    description:
      "Step into a new era of augmented reality with the Apple Vision Pro. Merging fashion and technology, these smart glasses bring a futuristic edge to your everyday life. With a sleek design, Apple's latest innovation delivers an immersive experience, seamlessly integrating virtual information into your surroundings. Whether navigating urban landscapes or boosting workplace productivity, the Apple Vision Pro is the epitome of cutting-edge style and functionality, setting a new standard for wearable technology. Elevate your perspective and embrace the future with these visionary smart glasses.",
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1lmrtgc0000mkq6lmjs2jws_11690__kNGRkbSmMb',
    name: 'Goyard Belvedere PM Grey',
    price: 3898,
    description:
      'The Goyard Belvedere PM in Grey is a sophisticated crossbody bag crafted from the brand’s iconic Goyardine canvas with smooth leather trim. The compact PM size features a structured silhouette with a flap closure and buckle detail for added security. The adjustable shoulder strap allows for versatile wear, making it ideal for both casual and refined occasions. The elegant grey hue enhances its timeless appeal, blending functionality and luxury into a stylish, everyday accessory.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqycjtuh002ojo180fjyo6t3_8929454__Q8OjI_YId',
    name: 'Daniel Arsham x Rimowa Eroded Attache Case',
    price: 3894,
    description:
      '(Edition of 500) White\nSeason\n\n2019\nColor\n\nWhite\nRelease Date\n\n05/17/2019\nRetail Price\n\n$2,200',
    brand: 'Daniel Arsham x Rimowa Eroded',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvn1vvor1l4kgzx350gpg2x1_787134__yTHIfu5Pv',
    name: 'Tory Burch graphic-print mesh top',
    price: 3887,
    description:
      'Imported\nHighlights\nblack/white\nstretch-design\nmesh panelling\nall-over graphic print\nembroidered motif\nround neck\nrear zip fastening\nsleeveless\nstraight hem\nComposition\nOuter: Polyamide 84%, Spandex/Elastane 16%\nLining: Nylon 82%, Spandex/Elastane 18%',
    brand: 'Tory Burch',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm02v0sy001msqp1ueidx29qm_960636__Zmq3V-wSi',
    name: 'Van Cleef Frivole earrings, mini model 18K yellow gold, Diamond',
    price: 3875,
    description:
      'The Van Cleef & Arpels Frivole Earrings in the mini model are a stunning and elegant pair of earrings, crafted from 18K yellow gold. These exquisite earrings feature delicate floral motifs, each designed with heart-shaped petals that catch the light beautifully. At the center of each flower is a sparkling diamond, adding a touch of brilliance and sophistication to the design. The warm glow of the yellow gold combined with the shimmering diamonds creates a refined and timeless look, making these Frivole earrings perfect for both everyday wear and special occasions. Their delicate and graceful design reflects the beauty of nature, making them a cherished addition to any jewelry collection.',
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mnw7vo0003x7istjecjp0p_9994547__KQ6yARW2H',
    name: 'Goyard Anjou Tote Mini Grey',
    price: 3871,
    description:
      'The Goyard Anjou Tote Mini in Grey is a compact and versatile tote crafted from the brand’s iconic Goyardine canvas, featuring smooth leather trim and a reversible design with a full leather interior. This mini-sized tote is ideal for carrying small essentials while maintaining a sleek and lightweight profile. The elegant grey hue adds a timeless sophistication, making it perfect for those seeking a blend of luxury, functionality, and understated style. Ideal for both everyday use and special occasions.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluw4nolu00zal615xjoo4bqh_1275509__0h8LcqzDD',
    name: 'RHUDE Sambac zip-up shirt jacket',
    price: 3870,
    description:
      'Imported\nHighlights\ncamel brown\npanelled design\nclassic collar\nfront two-way zip fastening\nthree-quarter length sleeves\ncuff zips\nfront zip fastening pockets\nstraight hem\ncropped\nComposition\nOuter: Polyester 63%, Viscose 34%, Spandex/Elastane 3%\nLining: Lyocell 100%',
    brand: 'RHUDE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clltud05m000kjq177ghg32iu_6004881__5VplVUIna',
    name: 'Oblique Down Jacket Black Nylon Jacquard',
    price: 3858,
    description:
      'Season\nAW21\n\nColor\nBLACK NYLON JACQUARD\n\nStyle\n943C449A4462_C989',
    brand: 'Dior',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mmm66g000tdittz4hxoivf_9819966__12xkha5me',
    name: 'Goyard Boheme Hobo Bag Black/Tan',
    price: 3856,
    description:
      'The Goyard Boheme Hobo Bag in Black/Tan is a sophisticated and versatile shoulder bag crafted from Goyard’s signature Goyardine canvas, accented with smooth leather trim. It features a relaxed hobo silhouette with an adjustable strap for comfortable crossbody or shoulder wear. The black canvas is complemented by tan leather details, creating a refined contrast that enhances its timeless appeal. Spacious and functional, it’s perfect for those seeking a blend of luxury, practicality, and effortless style for everyday use.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1vlxciq000063je7of0zkrn_9814437__fdzFVTHLK',
    name: 'Lalique Crystal Jungle Candle Vase',
    price: 3850,
    description:
      'The Lalique Crystal Jungle Candle Vase is an exquisite piece of art that combines elegance and craftsmanship to create a stunning home accent. Featuring intricate jungle-themed designs, this crystal vase captures the beauty of nature with detailed engravings of exotic flora and fauna, making it a perfect centerpiece for any room. Whether used as a luxurious candle holder or a standalone decorative piece, the vase’s clear and shimmering crystal construction reflects light beautifully, adding a touch of sophistication and style to your space. A perfect blend of function and artistry, it is ideal for those who appreciate refined luxury.',
    brand: 'Lalique',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvokhzpu18tf1286zzmyebxl_709538___-1vzzDZ4',
    name: 'Prada enamel triangle-logo wool dress',
    price: 3850,
    description:
      'The sheer mesh layer that peeks out at the hem of this black wool Prada dress lends unexpected sporty detail to the sharp A-line silhouette. It’s cut with a low scoop back and branded with a signature enamelled triangle logo.\nHighlights\nblack\nwool\nenamel triangle logo\nscoop neck\nopen back\nsleeveless\nstraight hem\nthigh-length\nComposition\nWool 100%',
    brand: 'Prada',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clse58onh00jhl715pm8botfc_2270083__RvtRYvWhn',
    name: "LEGO Star Wars Ultimate Collector's Millennium Falcon",
    price: 3837,
    description:
      "This is the ultimate Millennium Falcon. The most important and most iconic model within the Star Wars universe.\nThis BIG stable model measures (in inches): 33.1 (L) x 22.2 ( W) x 8.3 (H)\nSpecial features include a retractable boarding ramp. The cockpit top can be removed to access mini-figures\nThe model can also be lifted in the black technic beams when gun turret is off\nThis is it the biggest LEGO Star Wars model ever made - 5195 pieces\nFor the first time in mini-figure scale. Noted as one of Lucas Licensing's favorite Star Wars models for 2007\nMini-figure gallery: Han Solo, Chewbacca, Obi-Wan Kenobi, Luke Skywalker, Leia Organa\nGuns in top and bottom turrets can rotate. The top gun turret can be removed to sit mini-figure",
    brand: 'LEGO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwcd1hfg098k138c7w2cwxcg_2566747__vXLRv5Nc-',
    name: 'Louis Vuitton Keepall Bandouliere Damier Infini 45 Meteor',
    price: 3832,
    description:
      'Dimensions\n12H 19W 8D HANDLE 5\nMaterial\nLEATHER\nRetail Price\n$3,300\nColor\nMETEOR\nHardware\nSILVER-TONE\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nProduct Description\nPlease Note: This item comes with a dust bag, the box is not required.',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw4hpr3s1i7yuwq2lze3ol84_8254688__X-m_OwDj_',
    name: 'Tesla Cyber Hammer',
    price: 3826,
    description:
      "The Tesla Cyber Hammer is a concept that blends futuristic design with practicality, embodying Tesla's innovative approach to electric vehicles. This concept vehicle combines the ruggedness of a hammer with the sleek and futuristic aesthetics of Tesla's Cybertruck. With its electric powertrain and advanced autonomous driving capabilities, the Cyber Hammer promises a unique driving experience that is both environmentally friendly and technologically advanced. Designed for versatility and durability, it can handle a variety of terrains and tasks with ease, making it ideal for both urban and off-road adventures. With its bold design and cutting-edge features, the Tesla Cyber Hammer represents the future of electric vehicles and redefines what is possible in automotive design.",
    brand: 'Tesla',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrsq9mix001cjs1828yxpgyi_6348112__N8xTzEkks',
    name: 'Louis Vuitton Nano Speedy Bandoulière Damier Pop Blue',
    price: 3825,
    description:
      'Dimensions\n4.7H 7.1W 3.9D STRAP 24.4\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$2,720\n\nColor\nBLUE\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/04/2024\n\nStyle\nN40595\n\nIncluded Accessories\nNAME TAG, PADLOCK AND KEY, REMOVABLE STRAP, DUST BAG\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrsq6q4a0035l716rgol7yin_8513330__IOaQVaHq6',
    name: 'Louis Vuitton Nano Speedy Bandoulière Damier Pop Red',
    price: 3825,
    description:
      'Dimensions\n4.7H 7.1W 3.9D STRAP 24.4\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$2,720\n\nColor\nRED\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/04/2024\n\nStyle\nN40611\n\nIncluded Accessories\nNAME TAG, PADLOCK AND KEY, REMOVABLE STRAP, DUST BAG\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluvx9jrf00mll713aabbg73b_4203226__mJC87PCr9',
    name: 'RHUDE Sambac bomber jacket',
    price: 3820,
    description:
      "RHUDE balances a streetwear silhouette with elevated elements in this black bomber jacket, which is crafted from twill in the United States. It's cut to a loose fit accentuated by a classic collar and two-way zip front fastening.\nMade in United States\nHighlights\nblack\ntwill weave\nclassic collar\nfront two-way zip fastening\npanelled design\nfront zip fastening pockets\nlong sleeves\ncuff zips\nstraight hem\ncropped\nComposition\nBody: Polyester 63%, Viscose 34%, Spandex/Elastane 3%",
    brand: 'RHUDE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm019qxg200fh3spkh4jkr0fw_185866__fxk79d-3M',
    name: 'Van Cleef Byzantine Alhambra bracelet, 3 motifs 18K yellow gold',
    price: 3812,
    description:
      "The Van Cleef & Arpels Byzantine Alhambra Bracelet is a timeless and elegant piece, featuring three iconic motifs crafted in luxurious 18K yellow gold. The intricate Byzantine design adds a touch of opulence and sophistication, showcasing the brand's exceptional craftsmanship and attention to detail. The bracelet's delicate motifs, inspired by the classic Alhambra four-leaf clover, symbolize luck and positivity, making it a meaningful accessory for any occasion. Perfect for both everyday wear and special events, the Byzantine Alhambra Bracelet is a stunning addition to any jewelry collection, embodying the elegance and heritage of Van Cleef & Arpels.",
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu99578300h5jp131oyrq86a_1723614__VORkHkShS',
    name: 'Louis Vuitton by Tyler, the Creator LV Trainer Beige',
    price: 3812,
    description:
      'Style\n1ACXBG\nColorway\nBEIGE/MULTICOLOR\nRetail Price\n$1,430',
    brand: 'Louis Vuitton x Tyler, the Creator',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clva5pqoy06q210jad73m258n_3567669__yB6ooVa3p',
    name: 'Nike Air Presto Off-White',
    price: 3811,
    description:
      'Style\nAA3830-001\nColorway\nBLACK/BLACK-MUSLIN\nRetail Price\n$160\nRelease Date\n09/09/2017\nIncluded Accessories\n"OFF-WHITE" NIKE PAPER, RED ZIP-TIE, ORANGE ROUND "SHOELACES", VOLT GREEN ROUND "SHOELACES", BLACK ROUND "SHOELACES"\nProduct Description\nThe Nike Air Presto Off White is crafted from synthetic fabrics, as well as leather and rubber, with a black and white color scheme.\n\nAvailable in a black and muslin colorway, this Nike Air shoe has two distinct themes: ‘Revealing,’ with hand-cut and reconstructed builds, and ‘Ghosting,’ featuring translucent uppers. The Air Presto models also displays a tonal Swoosh on the mesh upper, a plastic zip tie, and the branding "AIR" written on the heel strap. The soles have AIR units for cushioning.\n\nThe Nike Air Presto Off White was released on the 9th of September 2017, and initially retailed for a price of $160.',
    brand: 'Nike x Off-White',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluoh7zsh001kl8136txe8cfi_3913029__bfb77nC4l',
    name: 'Nike SB Dunk High SPoT Cigar City',
    price: 3811,
    description:
      'Style\n313171-262\nColorway\nDARK OAK/TEAM RED-LT BRTSH TN-MTLLC\nRetail Price\n$108\nRelease Date\n09/17/2011',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluw1a3av020bl613m7ox2p3x_6030498__-JcEtpWKB',
    name: 'RHUDE Cyril zip-up hoodie',
    price: 3780,
    description:
      'Imported\nHighlights\nwhite/multicolour\ncotton blend\nfine knit\npatterned jacquard\nembroidered logo at the chest and to the rear\nslouchy hood\nfront zip fastening\nlong sleeves\nribbed cuffs and hem\nComposition\nCotton 50%, Polyester 50%',
    brand: 'RHUDE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvokyixq1fkk1286qy3kq0gg_6571416__VJ5FntIO9',
    name: 'Prada logo raffia tote bag',
    price: 3775,
    description:
      "A sleek take on the logomania trend, this raffia tote bag from Prada is woven with two-tone lettering at the front. The label's iconic triangle plaque details the side and adds an additional stamp of identity.\nHighlights\nbeige\nwhite\nlogo print to the front\nenamel triangle logo\ntwo long top handles\nmain compartment\nComposition\nCalf Leather 100%, Viscose 100%",
    brand: 'Prada',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw9epeyj010xkzfo8zr0jccw_5290199__uBis1_wLR',
    name: 'Pioneer OPUS-QUAD Professional All-In-One DJ System',
    price: 3770,
    description:
      '4-Channel Flexibility: Master complex mixes with a 4-channel layout, enabling seamless track cueing and blending.\nErgonomic Design for Peak Performance: Benefit from a design that includes a 5º slope and a textured surface for enhanced control and comfort during long sets.\nHigh-Resolution Touchscreen: The 10.1-inch electrostatic touchscreen offers vivid visuals and responsive control, perfect for on-the-fly adjustments and track selection.\nCustomizable Lighting and Jog Wheels: Tailor your setup with color-coded lighting and adjustable jog wheel resistance, ensuring quick deck identification and a personalized touch to your mixing style.\nCreative FX Control: Utilize the XY-Pad for dynamic FX manipulation, adding depth and excitement to your performances.\nComprehensive Connectivity: With Wi-Fi, Bluetooth, and multiple USB ports, seamlessly integrate various music sources, maintaining high-quality audio with the ESS Technology D/A converter.\nRobust Protection: The Decksaver DS-PC-OPUSQUAD cover, made from tough polycarbonate, shields your OPUS-QUAD from impacts, dust, and liquids without hiding its sleek design.',
    brand: 'Pioneer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluox16cp00h3ji14w7trdydr_8012046__R3j-C_yMC',
    name: 'Moncler x Palm Angels Mandelbrot Short Down Jacket Multi',
    price: 3770,
    description:
      'Season\nFW23\nColor\nMULTI\nStyle\nI209L1A00018M3766F28 & PMEA275T24FAB0016061\nRetail Price\n$2,600',
    brand: 'Moncler x Palm Angels',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwa323dd05xr8tujjzb95dbb_8309546__OJR31Ul3q',
    name: 'Louis Vuitton Keepall Bandouliere 50 Red',
    price: 3763,
    description:
      'Dimensions\n11.4H 19.7W 9.1D\nMaterial\nCOATED CANVAS/LEATHER\nRetail Price\n$3,250\nColor\nRED\nHardware\nSILVER-TONE\nStyle\nM59337\nIncluded Accessories\nSTRAP, LOCK, KEY, LOCK COVER, LUGGAGE TAG, HANDLE STRAP, DUST BAG\nProduct Description\nLouis Vuitton Keepall Bandouliere 50 Red, Style Number M59337.\n\nPlease Note: This item comes with a dust bag, the box is not required.',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz8pkjcu00fbgjxfzrcos8vl_1356290__eqQcUkELx',
    name: 'Sony 65 Inch Mini LED QLED 4K Ultra HD TV BRAVIA 9',
    price: 3750,
    description:
      'The Sony 65-Inch Mini LED QLED 4K Ultra HD TV BRAVIA 9 is a state-of-the-art television that delivers an extraordinary viewing experience. Featuring a 65-inch Mini LED display with QLED technology, this TV provides stunning 4K Ultra HD resolution, offering vibrant colors, deep blacks, and exceptional contrast. The BRAVIA 9 series is equipped with advanced smart TV capabilities, allowing seamless access to streaming services, apps, and smart home devices. With its sleek design and immersive sound quality, the Sony BRAVIA 9 enhances any home entertainment setup, making it an ideal choice for those who demand the best in picture quality and performance.',
    brand: 'Sony',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyrwb75202rndl6cpp2ilpyr_5889277__XUwotr8JF',
    name: 'Versace DV One Automatic 40mm',
    price: 3743,
    description:
      'Versace’s penchant for boldly displaying house motifs is evident throughout its collections and this DV One Automatic 40mm is no exception. Boasting a white ceramic case with gold-tone detailing, this watch plays host to signature Medusa Head and Greca motifs at the dial and bezel making the model instantly recognisable of the Italian fashion house.\nImported\nHighlights\nceramic case\nquartz movement\nwhite dial\nindex dial\nMedusa Head motif\nround face\nGreca bezel\nscrew-down crown\nceramic strap\nbutterfly clasp fastening\nwater resistance up to 50m/5 ATM\ndate indication\nThis item comes with a standard two-year warranty from the brand.\nComposition\nceramic 100%',
    brand: 'Versace',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvonrion0cwqnfaguv22hv8t_4694558__0m19GhtbT',
    name: 'Gucci large Savoy duffle bag',
    price: 3725,
    description:
      'blue/light beige\ncalf leather\nGG Supreme canvas\nsignature Web detailing\nsignature Double G silver-tone logo lettering\npadlock detail\nleather tag with set of keys\ntop zip fastening\nbranded zip puller\nstrap and press-stud fastening\ntwo rolled top handles\nadjustable detachable shoulder strap\nmetal feet\nfull lining\ndebossed internal logo\ninternal zip-fastening pockets\nmain compartment\nsilver-tone hardware\nComposition\nOuter: Canvas 100%, Calf Leather 100%\nLining: Cotton 100%',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls0w7iak009kla18v2y7yap8_8074063___utGTrMlf',
    name: 'Gucci Blondie Shoulder Bag GG Supreme Beige/Ebony',
    price: 3709,
    description:
      'Dimensions\n6.3H 11W 1.6D STRAP 15.4\n\nMaterial\nCANVAS/LEATHER\n\nRetail Price\n$3,100\n\nColor\nBEIGE/EBONY\n\nHardware\nGOLD-TONE\n\nStyle\n699268 K9GSG 8358',
    brand: 'Gucci ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyrwcn85013th1i5tmicjwmu_6876160__krcrfhVCM',
    name: 'Versace DV One Automatic 40mm',
    price: 3700,
    description:
      'Versace’s penchant for boldly displaying house motifs is evident throughout its collections and this DV One Automatic 40mm is no exception. Boasting a black ceramic case with gold-tone detailing, this watch plays host to signature Medusa Head and Greca motifs at the dial and bezel making the model instantly recognisable of the Italian fashion house.\nImported\nHighlights\nceramic case\nautomatic movement\nindex dial\nMedusa Head motif\nblack\nbaton hands\nengraved bezel\nsignature Greca detailing\nround face\nscrew-down crown\nceramic link bracelet\nbutterfly clasp fastening\ncentral hours, minutes and seconds\ndate indication\nwater resistance up to 50m/5 ATM\nThis item comes with a standard one-year warranty from the brand.\nComposition\nstainless steel 100%, Sapphire Crystal 100%',
    brand: 'Versace',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2hptp0u02oo5cvrjwm3vg_1092407__efhODCq7SO',
    name: 'OFF-WHITE Rimowa See Through 36L Case White',
    price: 3676,
    description:
      'Season\nFW18\n\nColor\nWHITE\n\nRelease Date\n10/12/2018\n\nRetail Price\n$1,700\n\nDimensions\n21.7H 15.4W 9.1D',
    brand: 'Off White',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clonk3fee000zju183to90pi4_8212140__cIEXloRTJ',
    name: 'Focal Stellia Over-Ear Headphones',
    price: 3676,
    description:
      'Stellia are the ultimate closed-back circum-aural headphones, both in terms of acoustic performance and the prestige of the materials used, such as the full grain leather of the headband, ear cups and cushions. The full-range speaker driver with ‘M’-shape pure Beryllium dome is a concentration of innovations that lies behind this incredible listening experience, never before seen in closed-back headphones. ',
    brand: 'Focal',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt7nf4zd018ojt161szs2keg_7483454__sE_UbulSf',
    name: 'Saint Laurent puff down shearling-lined jacket',
    price: 3656,
    description:
      'Made in Italy\nHighlights\nblack\nfeather down\npadded design\nfunnel neck\nshearling lining\nlong sleeves\nfront button and zip fastening\nembroidered logo at the chest\ntwo side inset pockets\nstraight hem',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu9czopm00q2l413k7dfwp23_6060380__W4DGH-fDl',
    name: 'Louis Vuitton by Tyler, the Creator LV Trainer Green',
    price: 3651,
    description: 'Style\n1ACR6E\nColorway\nGREEN/BROWN\nRetail Price\n$1,430',
    brand: 'Louis Vuitton x Tyler, the Creator',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyrwerx10133z0o4eq2kvs9g_8283892__iAP0NjP0j',
    name: 'Versace Athena Barocco-jacquard tote bag',
    price: 3650,
    description:
      'Made in Italy\nHighlights\nbeige\ncotton blend\nsignature Barocco patterned jacquard\nembroidered logo to the front\nopen top\ntwo top handles\nadjustable detachable shoulder strap\nmain compartment\ninternal zip-fastening pocket\nComposition\nOuter: Nylon 53%, Cotton 38%, Polyester 6%, Acrylic 3%',
    brand: 'Versace',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrygpcjy0009l617xu4jtiff_3065455___3ufcaTEk',
    name: 'Louis Vuitton Nano Speedy Sky',
    price: 3645,
    description:
      'Dimensions\n3.9H 6.3W 3D STRAP 19.7\n\nMaterial\nMONOGRAM VERNIS LEATHER\n\nRetail Price\n$2,500\n\nColor\nSKY\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/01/2024\n\nStyle\nM83000\n\nIncluded Accessories\nREMOVABLE CHAIN\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxrwv1sx005i13ozyljgsjxv_6379656__ayPCEclLI',
    name: 'AMIRI leather biker jacket',
    price: 3637,
    description:
      'black ovine leather embossed silver-tone buttons notched collar off-centre front zip fastening belted waist long sleeves multiple zip-fastening pockets\nMade in Italy\nComposition\nOuter: Ovine Leather (top grain) 100%\nLining: Viscose 100%',
    brand: 'AMIRI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mmql410000l6u42ipsx890_976251__1fBr_G0yV',
    name: 'Goyard Cap-Vert PM Bag Gray',
    price: 3636,
    description:
      'The Goyard Cap-Vert PM Bag in Gray is a compact and stylish crossbody bag crafted from the brand’s iconic Goyardine canvas, complemented by smooth leather trim. Featuring a structured silhouette, it has a flap closure and an adjustable shoulder strap for versatile wear. Its compact size makes it perfect for carrying daily essentials while maintaining a sleek profile. The elegant gray hue adds a sophisticated touch, making it a refined choice for those seeking a balance of luxury, practicality, and timeless style.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxrwoijq0113s8qvio1nsfjd_5628479__cvpUaxf6W',
    name: 'AMIRI Twisted Palms Tapestry overshirt',
    price: 3000,
    description:
      'Made in United States\nHighlights\nblack\ncotton\npalm tree patterned jacquard\njacquard logo motif\nclassic collar\nlong sleeves with press-stud fastening cuffs\ntwo chest flap pockets\nstraight hem\nfront press-stud fastening\nComposition\nCotton 100%',
    brand: 'AMIRI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls9mc54b003hjw17feuql1d6_1192069__Hh3Ed-U0n',
    name: ' 16-inch MacBook Pro M3 Pro - Space Black',
    price: 2999,
    description:
      'Hardware\nApple M3 Pro chip with 12‑core CPU, 18‑core GPU, 16‑core Neural Engine\n18GB unified memory\n512GB SSD storage\n16-inch Liquid Retina XDR display²\n140W USB-C Power Adapter\nThree Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port\nBacklit Magic Keyboard with Touch ID - US English\nAccessory Kit\nSoftware\nPhotos, iMovie, GarageBand\nPages, Numbers, Keynote\nmacOS',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt7nnu55000al417cbjy2yfx_3694855__uxEIRaty7',
    name: 'Saint Laurent zip-up bomber jacket',
    price: 2995,
    description:
      'Combining classic outerwear details with contemporary elements, this Saint Laurent bomber jacket features epaulettes and a zip pocket at the sleeve. \nMade in Italy',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpevvvd7002ojw17femtuvwo_4118710__94iTsY2sj',
    name: 'Peloton Bike+',
    price: 2994,
    description:
      'TURNING POINT IN CARDIO – Unlock the ultimate total-body workout powered by immersive technology on the Peloton Bike+. Stack classes to transition from cycling and strength to yoga and meditation seamlessly.\nVALUE-PACKED MEMBERSHIP – A Peloton All-Access Membership must be purchased separately in order to access Peloton content on your Bike+. You’ll pay $44/mo for your entire household and get unlimited access to our entire library of content available on your Bike+ and the Peloton App. Age, height, and weight restrictions apply. Your account can be activated during Bike+ setup.\nSMALL-SPACE FRIENDLY – Peloton Bike+ has a compact, 4’ x 2’ footprint and an adjustable seat, handlebar, and screen to accommodate different heights. This stationary bike fits comfortably in your home whether you’re low on square footage or working around furniture.',
    brand: 'Peloton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnw3dtnf0000mr181ra34l4e_8659733__mhMMx0Nf6',
    name: 'Bearbrick x Hajime Sorayama 1000% Gold',
    price: 2986,
    description:
      'Color\nGOLD\n\nRelease Date\n01/01/2013\n\nRetail Price\n$750\n\nDimensions\n27.5 IN / 70 CM\n\nProduct Description\nPlease note: due to the nature of the finish on this collectible, minor surface blemishes or superficial scratches may appear to be present. This is a normal result of the manufacturing process for this product.\n\n',
    brand: 'Bearbrick x Hajime Sorayama',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnvxbaza0008mg16y763h0kv_8923587__yt0EcvzoV',
    name: 'Bottega Veneta Brick Cassette Intreccio Purple',
    price: 2984,
    description:
      'Dimensions\n5.5H 11W 3.9D HANDLE 6.5\n\nMaterial\nCALFSIN LEATHER\n\nRetail Price\n$3,000\n\nColor\nPURPLE\n\nHardware\nGOLD-TONE\n\nStyle\n709360 VMAY1 5311',
    brand: 'Bottega Veneta',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln94z6510000l517h7hh62cl_742332__pb9fdy03f',
    name: 'Jordan 1 Retro High Trophy Room Chicago',
    price: 2983,
    description:
      '(Friends and Family) (W/ Blue Laces)\n\nStyle\nDA2728-100\n\nColorway\nWHITE/VARSITY RED-SAIL-BLACK\n\nRetail Price\n$190\n\nRelease Date\n02/10/2021\n\nIncluded Accessories\nWHITE LACES, RED EXTRA LACES, LOTTERY TICKET, BLUE LACES W/ WHITE TEXT',
    brand: 'Jordan ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt7nltk000ecl1163dw3ur48_9560445__oinbiHkEE',
    name: 'Saint Laurent shearling lined denim jacket',
    price: 2978,
    description:
      "Torn between adopting that cool-guy attitude whilst keeping warm this winter? Don't worry, Saint Laurent has you covered with this blue cotton-blend denim jacket, lined with shearling for extra heat protection. The best of both worlds! \nMade in Italy",
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mf0vb60000pvlcneejn9f3_7305109__tJJTTcBG2D',
    name: 'Goyard Saint Marc Card Holder White',
    price: 2971,
    description:
      'The Goyard Saint Marc Card Holder in White is a refined and compact accessory crafted from Goyard’s signature Goyardine canvas with smooth leather trim. It offers multiple card slots and a central pocket, making it perfect for storing cards and folded bills while maintaining a slim profile. The elegant white color enhances its sophisticated aesthetic, making it a stylish choice for those seeking a luxury accessory that blends practicality with timeless design. Ideal for both everyday use and special occasions.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluw11gsa000cmi14im1fkvf2_5537266__vDlkaAtjF',
    name: 'RHUDE Classic straight-leg trousers',
    price: 2970,
    description:
      "RHUDE's Classic trousers are named after their trio of tried-and-tested design elements – from the twill fabric and solid-black palette to the straight-leg profile. A mustard-yellow shoelace and chevron D-ring at the belt loops nod to the brand’s streetwear influences.\nMade in United States\nHighlights\nblack\ntwill weave\ndetachable waist belt\nchevron D-ring\nconcealed front fastening\nbelt loops\ntwo side slit pockets\nrear patch pocket\nstraight leg\nComposition\nOuter: Polyester 63%, Viscose 34%, Spandex/Elastane 3%\nLining: Lyocell 100%",
    brand: 'RHUDE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqq6e71x001ol6176ynp79v0_531305__i7m5hrRKM',
    name: 'Prada Down Jacket White Prada Down JacketWhite',
    price: 2967,
    description: 'Color\n\nWhite\nStyle\n\n292065_11A9_F0009_S_222',
    brand: 'Prada ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrmdayrk003ykv16iz8e512e_2646269__OnBO1R5C2',
    name: 'Jordan 4 Retro Kaws Black',
    price: 2965,
    description:
      'Style\n930155-001\n\nColorway\nBLACK/BLACK-CLEAR-GLOW\n\nRetail Price\n$350\n\nRelease Date\n11/27/2017\n\nIncluded Accessories\nKAWS SUEDE HANGTAG, BLACK KAWS X JORDAN DUSTBAG, BLACK KAWS X JORDAN CARD\n\nProduct Description\nThis was the second Air Jordan 4 Retro released, made in collaboration with famed artist, Kaws. Identical to the "Cool Grey" pair just in black, this pair comes in a black, clear and glow colorway. Sporting an all-black premium suede upper with Kaws stitching throughout. Other details include Kaws branding and graphics as well as a full translucent glow-in-the-dark outsole. They came in men\'s sizing, complete with custom packaging. If you\'re a Kaws fan and also happen to like the Air Jordan 4, this is another must-have Jordan Brand release for you. Those that have the "Cool Grey" pair also need these "All Blacks" in their rotation as well. If you missed out on the first Air Jordan 4 Retro Kaws and don\'t want to miss out on these, hit up the marketplace and buy one today. Those that scooped up a pair or two can sell them online now.',
    brand: 'Jordan x Kaws',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluw143oi004tjw130o8lrlgq_5908289__owPNSWCUg',
    name: 'RHUDE Bateau zip-up hoodie',
    price: 2950,
    description:
      'Imported\nHighlights\nemerald green/cream white/navy blue\ncotton blend\nfine knit\npatterned jacquard\nembroidered logo to the rear\nslouchy hood\nfront zip fastening\nlong sleeves\nribbed cuffs and hem\nComposition\nPolyester 50%, Cotton 50%',
    brand: 'RHUDE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clru1yph700e2ju16wc49wyre_4222311__gNxbQPCPF',
    name: 'Louis Vuitton LV Trainer Maxi Sneaker Green Damoflage Damier',
    price: 2949,
    description:
      'Style\n1ACNCZ\n\nColorway\nGREEN DAMOFLAGE DAMIER\n\nRetail Price\n$1,970\n\nRelease Date\n01/04/2024',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clytaxu8f005f7tn01j9ynro9_1466439__GeRXP_6ua',
    name: 'Versace logo-appliqué leather shoulder bag',
    price: 2938,
    description:
      'Imported\nHighlights\nblack\ncalf leather\nlogo stamp to the front\nadjustable shoulder strap\nfoldover top with magnetic fastening\npartitioned compartment\ninternal zip-fastening pocket\nremovable pouch\nsilver-tone hardware\nComposition\nOuter: Calf Leather 100%',
    brand: 'Versace',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clow28zmq0000l818i8rq62em_5092914__UNN1x9NZx',
    name: 'Louis Vuitton Coffee Cup Monogram Brown',
    price: 2930,
    description:
      'Dimensions\n7.5H 5.5W 3.5D STRAP 16.5/25.9\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$2,230\n\nColor\nBROWN\n\nHardware\nBROWN MAT\n\nStyle\nM80812\n\nSeason\nFW21',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllraht9c000gl517b6i8cns4_7838454__XQd3EMQRJ',
    name: 'Jordan 4 Retro Black',
    price: 2918,
    description:
      'Style\n930155-001\n\nColorway\nBLACK/BLACK-CLEAR-GLOW\n\nRetail Price\n$350\n\nRelease Date\n11/27/2017\n\nIncluded Accessories\nKAWS SUEDE HANGTAG, BLACK KAWS X JORDAN DUSTBAG, BLACK KAWS X JORDAN CARD\n\nProduct Description\nThis was the second Air Jordan 4 Retro released, made in collaboration with famed artist, Kaws. Identical to the "Cool Grey" pair just in black, this pair comes in a black, clear and glow colorway. Sporting an all-black premium suede upper with Kaws stitching throughout. Other details include Kaws branding and graphics as well as a full translucent glow-in-the-dark outsole. They came in men\'s sizing, complete with custom packaging. If you\'re a Kaws fan and also happen to like the Air Jordan 4, this is another must-have Jordan Brand release for you. Those that have the "Cool Grey" pair also need these "All Blacks" in their rotation as well. If you missed out on the first Air Jordan 4 Retro Kaws and don\'t want to miss out on these, hit up the marketplace and buy one today. Those that scooped up a pair or two can sell them online now.',
    brand: 'Jordan x KAWS',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljs3tb3a0006mm084jlxkzlj_5381242__7wimTuR1h',
    name: 'Ladies Diamond Ring with Emeralds 1.69 Carats',
    price: 2900,
    description:
      'Metal Type\t\n14 Karat White Gold\n\nStone One Carat Weight\t\n1.69 Carats\n\nStone Two Carat Weight\t\n0.24 Carats\n\nStone Two Type\t\nRound Diamond\n\nStone One Type\t\nEmerald',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw5i4qoj1svs10567tncn3tn_1770194__Ulf_P1A9e',
    name: 'Grim Reaper Diamond Pendant 14k Solid Gold 1.00ctw',
    price: 2900,
    description:
      "This Grim Reaper is made of 14K Yellow gold with 1.00ctw of diamonds.\nThe Grim Reaper Pendant will have a lasting impression with its 3D fierce and edgy design. \nIt is relatively large and is slathered with 1.00ctw VS diamonds, covering every surface of the pendant's front. ",
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clryg649u005ul5173jz0uhfw_9061306__TKTcOQtun',
    name: 'Louis Vuitton Lexington Pouch Glossy Lilac',
    price: 2896,
    description:
      'Dimensions\n5.1H 8.5W 1.8D STRAP 5.9\n\nMaterial\nMONOGRAM VERNIS LEATHER\n\nRetail Price\n$1,600\n\nColor\nGLOSSY LILAC\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/01/2024\n\nStyle\nM83142\n\nIncluded Accessories\nREMOVABLE STRAP\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvoed2o8174jahl5j3y9jdn4_1691932__WQzkvd_yAm',
    name: 'Prada enamel logo plaque changing bag',
    price: 2875,
    description:
      "Rest assured you'll feel like your usual stylish self when you're out and about with your little one. Prada's sleek tote has several zipped pockets for stowing everything you'll need for baby's day out. No need to compromise on style.\nComposition\nNylon 100%",
    brand: 'Prada',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt29bujb009eky17738pr4j5_7655112__3awZJAgYP',
    name: 'Saint Laurent Sunset Chain Bag Medium Noir',
    price: 2875,
    description:
      'Dimensions\n6.2H 8.6W 3.1D\nMaterial\nSMOOTH LEATHER\nRetail Price\n$2,550\nColor\nNOIR\nHardware\nGOLD-TONE\nSize\nMEDIUM\nStyle\n442906D420W1000',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2myos1akyoo5cfneccabp_3731294__Ht4flHDoY',
    name: 'Nike Air Force 1 Low Off-White Brooklyn',
    price: 2874,
    description:
      'The Nike Air Force 1 Low Off White Light Green Spark is the result of the collaboration between Off White and Nike Air Force. \n\nThe shoes have striking green leather uppers with stitched-on metallic silver foil Swooshes on the midfoot. Along with the exposed stitching, "NIKE AIR" embroidery at the back, repositioned tongue tags, "SHOELACES" marked laces, and a zip-tie tag, the raw construction sneaker also has repositioned tongue tags. The look is completed by matching AF1 sole pieces bearing the word "AIR" in large letters, as well as by bigger text branding on the inner lateral part.\n\nThe Nike Air Force 1 Low Off White Light Green Spark debuted on September 15, 2022, and retailed at $160.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clva620vm07rk10ja4cdw7q1a_7478455__12u6TCSzf',
    name: 'Nike Air Max 90 Off-White',
    price: 2873,
    description:
      'Style\nAA7293-100\nColorway\nSAIL/WHITE-MUSLIN\nRetail Price\n$160\nRelease Date\n09/09/2017\nIncluded Accessories\n"OFF-WHITE" NIKE PAPER, RED ZIP TIE, FLAT BLACK "SHOELACES", FLAT NEON GREEN "SHOELACES", FLAT ORANGE "SHOELACES"\nProduct Description\nThe Nike Air Max 90 Off White sneaker features a variety of panels and swathes all over the upper, while mudguards, panels across the profiles, along the tongue, and at the spine have a mesh construction as base layers.\n\nPull tabs on this Air Max 90 model add a light blue hue to the color mix displayed on the sneaker that contrasts with the tan tone that breaks up the off-white color scheme that dominates the sole unit and upper. The latter part favors a "colorless" underneath, which gives the contrast on the outsole its overall appearance.\n\nThe Nike Air Max 90 Off White debuted on the 9th of September 2017, and retailed at $160.',
    brand: 'Nike x Off-White',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2cjre0f5noo5cjk9cwqcr_8322216__eZZlCtfNm',
    name: 'Chanel Quilted Dad Sandal Black Leather',
    price: 2870,
    description:
      '100% authentic Chanel 2021 Dad sandals in smooth black quilted calfskin featuring black chain CC logo velcro straps.\n\nColorway\nBLACK\n\nRetail Price\n$1,525\n\nRelease Date\n01/01/2019',
    brand: 'Chanel',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsfe0z2i0004l716d24c8ygj_114719__MxLg6en0I',
    name: 'OVO x NFL Dallas Cowboys Varsity Jacket Navy',
    price: 2868,
    description:
      'Season\nSS23\n\nColor\nNAVY\n\nRelease Date\n02/03/2023\n\nRetail Price\n$798',
    brand: 'OVO x NFL',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63de795e0833b3f42b1cf03d.png',
    name: 'Louis Vuitton Palm Springs Monogram Mini Brown',
    price: 2860,
    description:
      'The Louis Vuitton Palm Springs Monogram Updated Zipper Mini Brown is an upgraded backpack from Louis Vuitton with additional features.\n\nThe Louis Vuitton Palm Springs Monogram Updated Zipper Mini Brown is made of Monogram fabric with leather chrome and gold-tone hardware. It has an inner flat pocket and an outer pocket with a zip. It also features a textile lining, a leather scarf loop and two shoulder straps that can be removed or adjusted. \n\nThe Louis Vuitton Palm Springs Monogram Updated Zipper Mini Brown was launched in April 23rd 2021 and was available at a retail price of $1,940.',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu98rs6800cfic124s0r49zp_1136424__X0hux8JYW',
    name: 'Louis Vuitton by Tyler, the Creator Monogram Printed Short-Sleeved Silk Shirt Multicolor',
    price: 2856,
    description:
      'Season\nSS24\nColor\nMULTICOLOR\nRelease Date\n03/21/2024\nStyle\n1AFQ26\nRetail Price\n$1,840',
    brand: 'Louis Vuitton x Tyler, the Creator',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clryg8lqv0004l716a5w2pu2m_8279579__LZYKBhqyG',
    name: 'Louis Vuitton Lexington Pouch Chic and Yellow',
    price: 2847,
    description:
      'Dimensions\n5.1H 8.5W 1.8D STRAP 5.9\n\nMaterial\nMONOGRAM VERNIS LEATHER\n\nRetail Price\n$1,600\n\nColor\nCHIC AND YELLOW\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/01/2024\n\nStyle\nM83270\n\nIncluded Accessories\nREMOVABLE STRAP\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrsprlgi001hl717onpumfs9_3246023__HR8vP5md3',
    name: 'Louis Vuitton Micro Steamer Damier Pop Green',
    price: 2846,
    description:
      'Dimensions\n3.1H 5.1W 1.8D STRAP 22\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$1,980\n\nColor\nGREEN\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/04/2024\n\nStyle\nN40537\n\nIncluded Accessories\nDUST BAG\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2cgqu0en2oo5cocjn66et_1713918__F_pHF-pcr',
    name: 'Louis Vuitton x Supreme Chain Wallet Epi Red',
    price: 2845,
    description:
      "This authentic Louis Vuitton x Supreme Chain Wallet Epi Red is a stylish wallet is finely crafted of Louis Vuitton signature textured epi leather in bright red. The wallet features a silver chain, a white Supreme logo and a frontal half flap that opens to a matching cross-grain leather interior with card slots, patch pockets, and a currency flap. This is a perfect wallet that is chic as well as practical with a one of a kind look from Louis Vuitton. Designed in collaboration with iconic NYC skate brand Supreme, this wallet fuses downtown style with classic Louis Vuitton versatility. Offering as much space as a long wallet, this compact wallet can be worn attached to your trousers thanks to its removable chain. \n\nOne of the most hotly anticipated brand tie-ups of the year, a collaboration between Louis Vuitton and Supreme. Since Louis Vuitton's menswear designer Kim Jones unveiled the joint collection during men's fashion week in January, the buzz surrounding the collaboration has reached fever pitch. Millennials, fashionistas and those with an eye for the inevitable, have all been straining at the leash to get their hands on a combination of Vuitton's quality and Supreme's savvy street style.",
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm222sd1h00002q2vqxyy2bwj_4056632__efHVN1I6D',
    name: 'Palace Rimowa Original Cabin Carry-on Suitcase Desert Multi',
    price: 2845,
    description:
      'The Palace Rimowa Original Cabin Carry-on Suitcase in Desert Multi is a vibrant and distinctive travel accessory that combines Rimowa’s iconic aluminum construction with Palace’s bold streetwear aesthetic. The suitcase features a unique, desert-inspired multi-color design, offering a striking visual appeal that stands out in any setting. Equipped with a multi-wheel system, a flexible handle, and a spacious interior, this carry-on merges functionality with high-end style, making it a perfect choice for travelers who want both practicality and a statement piece.',
    brand: 'Palace x Rimowa',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clru1hnno00sajp18fyi61q2f_4829818__vOJaoVce7',
    name: 'Louis Vuitton Pleated Silk And Wool Blend Damier Shorts Black Damoflage',
    price: 2837,
    description:
      'Season\nSS24\n\nColor\nBLACK DAMOFLAGE\n\nRelease Date\n01/04/2024\n\nStyle\n1AFIZS\n\nRetail Price\n$1,640',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clk5snen90000l708iw0xhein_9100227__nzVNn8o8b',
    name: 'Nike Air Jordan 1 Trophy Room',
    price: 2833,
    description:
      'Style\nDA2728-100\n\nColorway\nWHITE/VARSITY RED-SAIL-BLACK\n\nRetail Price\n$190\n\nRelease Date\n02/10/2021\n\nIncluded Accessories\nWHITE LACES, RED EXTRA LACES, LOTTERY TICKET, BLUE LACES W/ WHITE TEXT',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clse5ftlc000sla17pifbn6yx_9146779__at8gno-1s',
    name: 'LEGO 10030 - Star Destroyer',
    price: 2814,
    description:
      'Ultimate Collector Series\nIncludes an exclusive mini-model of the Rebel Blockade Runner so you can recreate the opening scenes\nThis item is brand new, but the box is a little worn from sitting on the shelf for awhile\nDiscontinued Theme',
    brand: 'LEGO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clr8ngzve004pl716bf7ofn25_9067623__u1lCTvQ18',
    name: 'Laarvee Golden Precision Steel',
    price: 2814,
    description:
      'Reference Number\n\npea001-gpur\nCase Size\n\n45mm\nCase Material\n\nStainless Steel\nBand\n\nStainless Steel\nMovement\n\nAutomatic\nDial\n\nPurple\nRetail Price\n\n$510',
    brand: 'Laarvee ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt29j9nq00cajt17r6xdtm03_8020811__TONykWVWR',
    name: 'Saint Laurent Jamie Chain Bag Carre Rive Gauche In Printed Silk Medium Blanc Multicolor',
    price: 2812,
    description:
      'Dimensions\n5.9H 9.8W 3D\nMaterial\nSILK\nRetail Price\n$2,250\nColor\nBLANC MULTICOLOR\nHardware\nBRONZE-TONE\nSize\nMEDIUM\nStyle\n515821FAASJ9076',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clovz1zk9001dl4172aj7kajg_8071996__VvNkE0oyo',
    name: 'Louis Vuitton x Apollo Backpack Hexagonal FIFA World Cup Rouge',
    price: 2810,
    description:
      'Dimensions\n11.8H 15.75W 7.8D\n\nMaterial\nEPI LEATHER\n\nRetail Price\n$3,750\n\nColor\nROUGE\n\nHardware\nSILVER-TONE\n\nSeason\nPFW18',
    brand: 'Louis Vuitton x Apollo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljs3kjo70004mm08jvdvx92v_1684860__O4E6PEXS1',
    name: 'Ladies Diamond Flexible Ring 2.00 Carats',
    price: 2800,
    description:
      'Metal Type\t\n14 Karat White Gold\n\nStone One Carat Weight\t\n2 Carats\n\nSize or Length\t\n7\n\nStone One Type\t\nDiamond',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0ziquz90002eaw8skg94pmx_7348018__6TR1oZziD',
    name: 'iBuyPower Y60 006 Gaming PC',
    price: 2800,
    description:
      'The iBUYPOWER RDY Y60 006 is a powerful gaming desktop built for high-end gaming and multitasking. It features an AMD Ryzen 7 9700X processor, NVIDIA GeForce RTX 4070 Ti 16GB graphics, and 32GB DDR5-6000MHz RGB RAM for smooth and efficient performance. The system includes a 2TB NVMe Gen4 SSD for fast storage and quick load times, all housed in a HYTE Y60 RGB case with liquid cooling for optimal thermal performance. It runs on Windows 11 Home and comes with a 3-year warranty.',
    brand: 'iBuyPower',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw9elhob1d50ze597yg8tx14_4852937__lVkGDO0r6',
    name: 'ASUS Zenbook Pro 14 Duo 14.5”',
    price: 2800,
    description:
      'Get ready to meet the seriously powerful Zenbook Pro 14 Duo OLED, a powerhouse that lets you turn up your creative powers to the max. The flagship Intel CPU and creator-grade NVIDIA® GPU are cooled for extreme performance by ASUS IceCool Plus technology, aided by the brand-new AAS Ultra mechanism, which vents the chassis and also tilts the next-generation ScreenPad™ Plus secondary touchscreen to a comfortable angle for a seamless and immersive visual experience. For studio-class visuals, the world-leading 2.8K OLED HDR 16:10 main touchscreen has a smooth 120 Hz refresh rate, PANTONE® Validated color accuracy, and a cinema-grade 100% DCI-P3 gamut. Zenbook Pro 14 Duo OLED puts its rivals in the shade, making it the ultimate compact OLED laptop for the discerning creator. *The actual transfer speed of USB 3.2 (Gen 1 and 2), and/or Thunderbolt will vary depending on many factors including the processing speed of the host device, file attributes and other factors related to system configuration and your operating environment.',
    brand: 'ASUS',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt29pwsz00jsl517jsmvaglm_3863892__ZFLHUwFEB',
    name: 'Saint Laurent Teddy Jacket Neutral',
    price: 2779,
    description:
      'Season\nSS22\nColor\nNEUTRAL\nStyle\n354718Y213Q9502\nRetail Price\n$2,690',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllotkayz000tmk18t8r6bkvy_9674608__2B5NmOIQV',
    name: 'Multi Pochette Accessoires Monogram Khaki',
    price: 2775,
    description:
      'Dimensions\n6.3H 9.45W 2.36D STRAP 22 HANDLE 9.5\n\nMaterial\nCOATED CANVAS/LEATHER\n\nRetail Price\n$1,770\n\nColor\nKHAKI\n\nHardware\nGOLD-TONE\n\nStyle\nM44813\n\nIncluded Accessories\nSTRAP, COIN POUCH CHARM, CHAIN STRAP, DUST BAG\n\nSeason\nFW19\n\nProduct Description\nThe hottest bag of the season, the Multi Pochette features a hybrid of Pochettes in varying sizes coated in LV’s monogram canvas leather. The Pochette Accessoires, Mini Pochette Accessoires, and round coin purse also come with a removable Louis Vuitton inscribed Khaki strap and gold-tone chain.\n\nPlease Note: This item comes with a dust bag, the box is not required.',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls0rnxqn00gllb1676wo0j0e_9499740__bb1WmLaT4',
    name: 'Bottega Veneta Jodie Mini Teal Washed',
    price: 2768,
    description:
      'Dimensions\n9.1H 11W 3.1D HANDLE 3.9\n\nMaterial\nLAMBSKIN/CALFSKIN\n\nRetail Price\n$2,650\n\nColor\nTEAL WASHED\n\nHardware\nGOLD-TONE\n\nSize\nMINI\n\nStyle\n651876VCPP53902',
    brand: 'Bottega',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrttaeul001jjs17cva9ea60_2783052__m1LsFDoOz',
    name: 'Louis Vuitton Damier Damoflage Denim Skate Pants Indigo',
    price: 2766,
    description:
      'Season\nSS24\n\nColor\nINDIGO\n\nRelease Date\n01/04/2024\n\nStyle\n1AFIA5\n\nRetail Price\n$1,890',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2f1rj0mdkoo5cuokrom6e_897185__sE6euw8VE',
    name: 'Jordan 1 Retro Low OG SP Travis Scott',
    price: 2765,
    description:
      'Style\nCQ4277-001\n\nColorway\nBLACK/DARK MOCHA-UNIVERSITY RED-SAIL\n\nRetail Price\n$130\n\nRelease Date\n07/20/2019\n\nIncluded Accessories\nRED LACES, PINK LACES, BLACK LACES, PINK BOX PAPER\n\nProduct Description\nBuilding off the success of their previous collaborations, Travis Scott adds yet another new design to his collaborative relationship with Jumpman via the Air Jordan 1 Low Travis Scott. Travis teased the release of this shoe while on his Astroworld tour, leaving fans of both his music and the Jordan Brand alike with one question: When are these shoes dropping? On the Friday night of July 19, 2019, Travis answered the masses by making them available on his website, with a release on the SNKRS app following the next day.\n\nThis AJ 1 Low features a black upper with dark brown overlays and red accents on the branding. Much like the Air Jordan 1 High Travis Scott, La Flame added his signature backwards Swoosh logo on the lateral side. "Cactus Jack" insignias on the heel and inner upper atopa sail midsole and dark brown outsole completes the design. These sneakers released in July of 2019 and retailed for $130.',
    brand: 'Jordan x Travis Scott',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clscmwo1y0024l617hcxlti5k_542083__JEEwhEaF8',
    name: 'John Hardy Legends Naga medium chain double dragon head necklace',
    price: 2760,
    description:
      'John Hardy\nLegends Naga medium chain double dragon head necklace\n\nAlways choose fierceness. Constructed from sterling silver, this Legends Naga medium chain double dragon head necklace from John Hardy is the only accessory you need to feel powerful. Dare to use. Featuring sapphire embellishment and toggle fastening. POSITIVELY CONSCIOUS: We’ve joined forces with ethical agency Good On You to give you the power to choose positively. This piece is from a brand that scores well on their key criteria.\n\nImported',
    brand: 'John Hardy',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2nhv41c75oo5cbh8r6b1q_9092139__UVAWH2_G2',
    name: 'Down Vest Beige/Ebony',
    price: 2755,
    description:
      "Season\nFW21\n\nColor\nBEIGE/EBONY\n\nRelease Date\n11/15/2021\n\nStyle\n670768 Z8APY 2190\n\nRetail Price\n$2,200\n\nProduct Description\nThis down vest was released in November of 2021 as a part of Gucci and The North Face's second collaborative effort.\n\nFor their second release, Gucci and The North Face delivered several new items and restocked some other pieces that were made available in January of 2021. This vest features a large Gucci x The North Face logo on its back and is covered in a beige all over GG logo print.\n\nThe Gucci x The North Face Down Vest in Beige was released on November 15th, 2021, at the retail price of $2,200.",
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz6fati3005zr4jy5sov5jat_5919590__KIMZnLECT',
    name: '3mm Rope 14k Solid Gold Chain 22"',
    price: 2750,
    description:
      'This 3mm Rope Chain, crafted from 14k solid gold and measuring 22 inches in length, is a bold and elegant accessory. The classic rope design offers both durability and a timeless appeal, making it perfect for everyday wear or special occasions. Whether worn alone or paired with a pendant, this substantial chain adds a touch of sophistication and luxury to any outfit.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyuycoa700i36plm9n10n59n_9563364__7GTXB4s_v',
    name: 'Versace x Rosenthal Prestige Gala espresso cup set',
    price: 2750,
    description:
      "Versace's penchant for opulence meets Rosenthal's clean designs. The result is this espresso cup set that features a sumptuous Barocco motif on a piece with a classic, timeless design.\nImported\nComposition\nPorcelain 100%",
    brand: 'Versace x Rosenthal',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2a0aa07w7oo5cnvqit93r_9162892__ebDZmhHB7',
    name: 'Virgil Abloh x IKEA "KEEP OFF" Rug 200x300 CM Grey/White',
    price: 2750,
    description:
      'After being rumored as long ago as summer of 2017, Virgil Abloh\'s first collaborative piece with IKEA has finally released. As a part of IKEA\'s fifth IKEA Art Event, in which the company taps multidisciplinary artists to commision furniture pieces for them, Virgil has been tapped to design one of eight rugs to be released for the event. The rug features a persian rug with the words "KEEP OFF" between Virgil\'s signature quotation marks and was designed to depict the ironic nature of an overbearing parent who protects their furniture. He is quoted on the piece stating "I wanted an ironic take on the traditional attitude to furnishing where the living room is just a showroom, not somewhere you sit". The Rug was released Friday May 10th 2019, and retailed at $500 USD.',
    brand: 'Off White',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsghfysr0028ju16fggiwnau_6010572__N2gOwN-e1',
    name: 'Bang & Olufsen Beosound Stage – Dolby Atmos Soundbar',
    price: 2750,
    description:
      'Dolby Atmos Surround Sound: Lose yourself in the moment, with a three-dimensional listening experience. Feel the real power of your favourite TV shows and films.\nRoom-filling sound: Rich, multi-dimensional sound powered by 11 different drivers and woofers. Hear movie scores the way they were meant to be heard.\nReady to fit into your setup: Beosound Stage works with any 3rd party TV supporting HDMI ARC. Highly compatible and easy to connect – add dept to your TV experience.\nSimply elegant: Minimalist Scandinavian design with an aluminium or smoked oak body. Form and function combined in a TV speaker that looks as good as it sounds.\nTV, radio and music in one: For more than your TV viewing pleasure, Beosound Stage has integrated audio streaming. Play music, listen to podcasts and more with this multipurpose soundbar.\nBang & Olufsen App – Customize your product’s settings, choose your favorite sound profile with the Beosonic equalizer, get the latest software updates, and much more, with the Bang & Olufsen App.\nYour home speakers, connected: Stream music throughout your home, with Beolink Multiroom, Airplay 2 and more. Control your speakers individually or together from your device. Smooth connections with Bang & Olufsen.\n',
    brand: 'Bang & Olufsen',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2nhv11c5ooo5cmz3klnhj_5007113__svGnldq1D',
    name: 'Supreme x Louis Vuitton Monogram Pillow Red',
    price: 2750,
    description:
      'Season\nSS17\n\nColor\nRED\n\nRelease Date\n06/30/2017\n\nRetail Price\n$665',
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clthm6scw007cjz172npodipi_7984888__ZlSHuo6r8',
    name: 'adidas X Speedportal.1 FG Messi Leyenda',
    price: 2747,
    description:
      'Style\nHP9138\nColorway\nGOLD METALLIC/CLOUD WHITE/PULSE BLUE\nRetail Price\n$300\nRelease Date\n11/22/2022',
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1yb3maj0000cc8dhaa6zr8h_8006215__NNleCw4ay',
    name: 'Gargoyle Ground Fogger',
    price: 2743,
    description:
      'This one of a kind statue and fogger combo dispenses ground fog through the open mouth of the lower gargoyle!  Using a combination of two different styles of foggers, this amazing prop is able to create low lying ground fog WITHOUT the use of ice or dry ice.  ',
    brand: null,
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu97c0go000hjp13hwqy1xxk_9174939__tgpKvHpQ5',
    name: 'Cartier 1895 Wedding Band',
    price: 1000,
    description:
      '1895 wedding band, width 2.5 mm, yellow gold (750/1000) (for size 52).',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm250oeiq0000421rk5gyxg2s_5583399__4QG7xYYaO',
    name: 'FREDDO 24V GMC Denali 2 Seater Ride on - Black',
    price: 1000,
    description:
      'The FREDDO 24V GMC Denali 2 Seater Ride On in Black is a powerful and realistic ride-on toy designed for young drivers seeking an authentic driving experience. With dual 24V motors and a spacious two-seater design, it offers strong performance and ample room for two kids. The sleek GMC Denali styling, functional LED lights, and detailed interiors add a touch of luxury, while features like remote control, working doors, and safety seat belts ensure fun and safe rides for children. Ideal for kids who want a high-end ride-on.',
    brand: 'FREDDO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwvhp230004jt16v1i4zcpz_8580516__wpuju9LyR6',
    name: 'Ruth’s Chris Steak House eGift Card',
    price: 1000,
    description:
      'At Ruth’s Chris Steak House, your last bite is just as good as your first. Each ofour USDA Prime steaks is seared to perfection, finished with butter and freshlychopped parsley, and served sizzling on a 500-degree plate–just the way Ruthliked it. Enjoy steakhouse favorites and more alongside an award-winning,world-class wine list, signature handcrafted cocktails and house-prepareddesserts.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwy3vpn00ndjm16l9av6794_5437561__lr0GhRKB1',
    name: 'Hotels.com eGift Card',
    price: 1000,
    description:
      'The Hotels.com Gift Card is redeemable towards bookings at hundreds of thousands of places to stay in 200 countries and territories, ranging from international chains and all-inclusive resorts to local favorites and bed & breakfasts. Redeemable on Hotels.com, the Hotels.com Gift Card can be used in conjunction with member-only deals and promotions. Bookings with the Hotels.com Gift Card count toward free nights with Hotels.com® Rewards where customers can earn a free* night for every 10 nights stayed. For more information visit www.hotels.com/giftcards or e-mail giftcards@hotels.com. *Subject to Hotels.com Rewards terms and conditions, as set out at www.Hotels.com.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ycjyvg0000i0lh2jxry4b7_8463422__naKWVSFTY',
    name: 'Cracking Crypt Prop',
    price: 1000,
    description:
      'Our Cracking Crypt Prop is one of our great static props. This tombstone and zombie prop is perfect for many uses! For your Halloween display, haunt, or yard haunt. Imagine a cemetery or zombie scene with this amazing prop in it! Made of latex and foam with metal armature.\nMaterial : Latex, Metal',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltv1yngm0015l8145m966jyw_2910729__-0uRAPXm4',
    name: 'FC24 - 120000 Points',
    price: 1000,
    description:
      'EA Sports FC24 is an exhilarating virtual gaming experience where players compete as part of the EA Sports FC team in intense matches. With skillful gameplay, strategic moves, and thrilling action, earn points to dominate the leaderboard and showcase your prowess on the field.',
    brand: 'EA Sports',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2n4ce1az1oo5ch7e2bnm0_4372519__XlSMJ92GN',
    name: 'Gaming PC Desktop',
    price: 1000,
    description:
      'Specific Uses For Product\tMultimedia, Personal, Gaming\nBrand\tSkytech Gaming\nPersonal computer design type\tComputer Tower\nOperating System\tWindows 11 Home\nMemory Storage Capacity\t1 TB\nScreen Size\t1\nRam Memory Installed Size\t8 GB\nModel Name\tShadow 3.0\nIncluded Components\tPower Cord\nCPU Model\tCore i5',
    brand: 'Skytech Gaming',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxv7ybwp01i5dka35av9h71a_7431411__LgA_a0DE6',
    name: 'WOLF Heritage Double Winder',
    price: 1000,
    description:
      'The WOLF Heritage Double Winder with Glass Cover in Black is an exquisite accessory designed to keep your automatic watches in perfect condition. Featuring a secure fit with a patented dynamic lock-in cuff, this winder is ideal for bigger and heavier watches. The elegant design includes a clear glass cover to protect your timepieces while showcasing them beautifully. Crafted from premium vegan leather, it combines luxury with ethical materials. The winder comes with a universal adapter, making it convenient for use anywhere. Perfect for watch enthusiasts, the WOLF Heritage Double Winder ensures your watches are always ready to wear.',
    brand: 'WOLF',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxtqqcxp020sfxecz8a1nig6_4698626__8s0-g32kg',
    name: 'AMIRI H-Hose Kurz silk shorts',
    price: 1000,
    description:
      'Made in Italy\nHighlights\nbeige/multicolour\nsilk\nsatin weave\nillustration-style print\nelasticated drawstring waistband\ntwo side inset pockets\nstraight leg\nComposition\nSilk 100%',
    brand: 'AMIRI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllqt36220004jz154z94vw35_1934623__d3Z3gopDT',
    name: 'Holiday Space Figure Gold',
    price: 1000,
    description:
      "Color\nGOLD\n\nRelease Date\n08/17/2020\n\nRetail Price\n$390\n\nDimensions\n11.5 X 5 X 4.5 IN / 29.2 X 12.7 X 11.4 CM\n\nProduct Description\nThe KAWS Holiday Space Figure is literally out of the world. Prior to the release of this coveted collectible, KAWS teamed up with All Rights Reserved to send this figure into space. The artist shared videos and photos of the toy tied to weather balloon, which went over 135,000 feet above ground before safely returning to earth. The KAWS Holiday Space Figure in Gold references the artist's iconic MTV Moonman Trophy used for the 2013 MTV VMAs. This figure released on the DDT Store website on August 17th, 2020, for a retail price of $390 USD, and stands at 11.5 inches tall.",
    brand: 'KAWS',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clzgg76q2005e11gmg94kd7nu_9878989__nXKkYqQ3A',
    name: 'Jordan 1 Retro Shattered Backboard',
    price: 1000,
    description:
      'The Jordan 1 Retro "Shattered Backboard" is a highly sought-after sneaker that pays homage to Michael Jordan\'s iconic dunk during a 1985 exhibition game in Italy, where he shattered the backboard. Featuring a premium leather upper in a striking combination of orange, black, and white, these sneakers offer both style and comfort. The "Shattered Backboard" colorway is renowned for its bold and vibrant appearance, making it a standout addition to any sneaker collection. Perfect for fans of Michael Jordan and sneaker enthusiasts alike, the Jordan 1 Retro "Shattered Backboard" combines historical significance with modern streetwear appeal.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllq5574f000fmv17u5v54xtq_1623757__qhMBFFkKb',
    name: 'Coldworks 700-Fill Down Parka White',
    price: 1000,
    description:
      "Season\nFW21\n\nColor\nWHITE\n\nRelease Date\n10/21/2021\n\nRetail Price\n$598\n\nProduct Description\nThe Supreme The North Face Coldworks 700-Fill Down Parka was released in Week 9 of the streetwear brand's Fall/Winter 2021 season.\n\nThis Supreme The North Face Jacket features water resistant nylon and 700-fill down. The jacket also features Supreme logos printed all over it and The North Face branding on the arm and chest of the garment.\n\nThis white Supreme The North Face Coldworks 700-Fill Down Parka was released at the retail price of $598 on October 21st, 2021.",
    brand: 'Supreme x The North Face',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0xeaw740000ltkyqadkai77_710091__CRLuKII6v',
    name: 'Apple Watch Ultra 2 Natural',
    price: 999,
    description:
      'The Apple Watch Ultra 2 is a rugged smartwatch designed for adventurers and athletes. It features a durable titanium case with a Natural finish, a brighter display, and enhanced health and fitness tracking capabilities. The stylish Titanium Milanese Loop provides a comfortable and secure way to wear the watch. With its Action Button, cellular connectivity, and advanced features, the Apple Watch Ultra 2 is the ultimate smartwatch for those who demand the best.\n',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0xeihpq00001315rsqs4mdb_1846503__5QX5ETTcK',
    name: 'Apple Watch Ultra 2 Black',
    price: 999,
    description:
      'The Apple Watch Ultra 2 is a rugged smartwatch designed for adventurers and athletes. It features a durable titanium case with a Black finish, a brighter display, and enhanced health and fitness tracking capabilities. The stylish Titanium Milanese Loop provides a comfortable and secure way to wear the watch. With its Action Button, cellular connectivity, and advanced features, the Apple Watch Ultra 2 is the ultimate smartwatch for those who demand the best.\n',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrpdm9b50000ih17n1k45v0l_3851677__nFurBAEH5',
    name: 'Mongoose Argus',
    price: 994,
    description:
      'Fat tire mountain bicycle perfect for all-terrain adventures, 26-inch wheels, and large frame to fit riders 5\'10" to 6\'1" tall\n19-Inch aluminum hardtail frame provides a sturdy and stable riding experience\n16-speed, 2 x 8 drivetrain with Rapid Fire shifters provide smooth gear changes\nMechanical disc brakes supply quick, effective braking even in slippery conditions\n26 x 4 inch knobby mountain fat tires provide excellent stopping power and tons of traction in sand and snow\n',
    brand: 'Mongoose',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp8yyhln001vl417mdjbonyq_8589717__mX_U_-ujt',
    name: 'Louis Vuitton Mini Pochette Accessoires Monogram Vivienne Courchevel Fuchsia Lining',
    price: 994,
    description:
      'Dimensions\n3.9H 5.9W 1.6D\n\nMaterial\nCOATED CANVAS/LEATHER\n\nRetail Price\n$375\n\nColor\nFUCHSIA LINING\n\nHardware\nGOLD-TONE\n\nStyle\nM68490\n\nIncluded Accessories\nCHAIN STRAP, DUST BAG\n\nSeason\nFW19',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clux14rdi01rwvcvv8ocn8yg1_7441909__yO_D_rdxu',
    name: 'RHUDE Senna logo-print track pants',
    price: 991,
    description:
      'Imagined in a sage green hue, these Senna track pants by RHUDE are decorated with a black screenprinted logo at the left leg for a recognisable touch.\nMade in United States\nComposition\nOuter: Nylon 100%\nLining: Polyester 100%',
    brand: 'RHUDE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp8yu5540004l018u5c2ild0_603776__YvrL9I9zQ',
    name: 'Louis Vuitton Mini Pochette Accessoires Monogram Vivienne Red',
    price: 991,
    description:
      'Dimensions\n4.1H 6.1W 1.6D\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$540\n\nColor\nRED\n\nHardware\nGOLD-TONE\n\nStyle\nM80863\n\nIncluded Accessories\nDUST BAG',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllr255vy0004l6163z1zf1nd_7575943__4FzSAjYdW',
    name: 'KAWS x The North Face Retro 1996 Nuptse Jacket Black',
    price: 990,
    description:
      'Season\nFW22\n\nColor\nBLACK\n\nRelease Date\n10/25/2022\n\nRetail Price\n$525\n\nProduct Description\nThe KAWS x The North Face Retro 1996 Nuptse Jacket Black is an outdoor garment with a relaxed fit with a boxy silhouette.\n\nThis black jacket has an abstract design pattern and is made from 100% recycled polyester. In white, "THE NORTH FACE" and KAWS "XX" motifs are emblazoned on chest and yoke. This design has oversize baffles, attached three-piece hood packs, a shock cord at the hem for adjustability, encased-elastic cuffs with hook-and-loop cuff tab, Triclimate loops, secure-zip hand pockets, and an exposed VISLON center front zip.\n\nThe KAWS x The North Face Retro 1996 Nuptse Jacket Black debuted in October 25th, 2022, retailing at $525.',
    brand: 'KAWS x The North Face',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mdocbl0004msub98u7c4t0_5283139__DgVMWy0Q-',
    name: 'Goyard Saint Marc Card Holder Red',
    price: 990,
    description:
      'The Goyard Saint Marc Card Holder in Red is a compact and refined accessory crafted from the brand’s iconic Goyardine canvas, accented with smooth leather trim. It features multiple card slots and a central pocket, making it ideal for organizing credit cards, IDs, and folded bills. The vibrant red color adds a bold and elegant touch to its minimalist design, while its slim profile ensures easy storage in pockets or small bags. A perfect blend of luxury and functionality for everyday use.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrsmi8ms00a5jy18wnvffpyu_4237170__Lifhpb_RY',
    name: 'Louis Vuitton LV Initiales 40mm Reversible Belt Damier Pop Green',
    price: 989,
    description:
      'Material\nCOATED CANVAS/CALFSKIN LEATHER\n\nRetail Price\n$775\n\nColor\nGREEN\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/04/2024\n\nStyle\nM8545U\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrsm7hf9006gl018a62rm473_9964297__v4ma3ym_S',
    name: 'Louis Vuitton LV Initiales 40mm Reversible Belt Damier Pop Orange',
    price: 988,
    description:
      'Material\nCOATED CANVAS/CALFSKIN LEATHER\n\nRetail Price\n$775\n\nColor\nORANGE\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/04/2024\n\nStyle\nM8461U\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljuvuvvl0002ie08lsezueol_7511959___6i3BIEJKM',
    name: 'Nike Air Max 97 Off-White Menta',
    price: 988,
    description:
      'If you’re a fan of the Off-White and Nike collab then the Air Max 97 Off-White Menta might just be your new favorite shoe. This shoe comes with a grey upper, multicolor Nike "Swoosh", grey midsole, and a translucent sole. These sneakers released in October 2018 and retailed for $190.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrsne1i40000kz185c6zc8v7_4119784__i-SSf7A5M',
    name: 'Louis Vuitton LV Initiales 40mm Reversible Belt Damier Pop Blue',
    price: 987,
    description:
      'Material\nCOATED CANVAS/CALFSKIN LEATHER\n\nRetail Price\n$775\n\nColor\nBLUE\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/04/2024\n\nStyle\nM8474U\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clscoxu2k009flb1790g90yts_6743231__NEWpbicNz',
    name: 'Palm Angels dragon-monogram cotton hoodie',
    price: 983,
    description:
      'Inspired by American street culture, Palm Angels tells a story through its garments by making use of bold details. A prime example is this black hoodie with a laid-back fit, elevated by an eye-catching oversized monogram featuring a dragon at the rear.\n\nMade in Italy\n\nHighlights\nblack\norganic cotton\nembroidered logo at the chest\nmonogram print\nclassic hood\nlong sleeves\nstraight hem',
    brand: 'Palm Angels ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllr6gjly0000mi178gd50akh_8737691__QBsiNJr76',
    name: 'Retro 1994 Himalayan Parka Moonlight Ivory',
    price: 982,
    description:
      'Season\nFW22\n\nColor\nMOONLIGHT IVORY\n\nRelease Date\n10/25/2022\n\nRetail Price\n$839\n\nProduct Description\nThe KAWS x The North Face Retro 1994 Himalayan Parka Moonlight Ivory is an outerwear garment featuring a collaboration between two brands.\n\nAvailable in a Moonlight Ivory colorway with an abstract camouflage print, this Retro 1994 Himalayan Parka by KAWS x The North Face is made of recycled shell fabric with a water-resistant finish and is stuffed with 700 Fill Down insulating materials. Dual branding is embroidered on the chest and back, with The North Face and KAWS’ "XX" logos. An adjustable hood with side collars, top entry pouch pockets, and an adjustable hem and cuffs complete the design.\n\nThe KAWS x The North Face Retro 1994 Himalayan Parka Moonlight Ivory was released on October 25th, 2022, retailing at $839.',
    brand: 'KAWS x The North Face',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm08ijgom001cbjepsaim76bb_4298916__AalqBYB3u',
    name: 'NO1 MASCULINE Original Collection',
    price: 980,
    description:
      "Clive Christian's masterpiece, No1, is a harmonious fusion of 222 rare and precious ingredients sourced from around the globe, capturing the essence of refined perfumery. This majestic woody amber fragrance opens with lively pimento and sparkling lime, revealing an exotic floral and spice heart that evolves into a base of vetiver and tonka bean. The crowning touch is a velvety 50-year-old aged sandalwood, adding a signature flourish to this exquisite perfume. Thyme's herbaceous notes are gently toasted beneath golden flames of Nutmeg, evoking the spirit of the East while hinting at England's rustic past. Cardamom, Nutmeg, Pimento, and Artemisia oil create a potent elixir that complements citrusy Bergamot, Lime, Sicilian Mandarin, and Pink Grapefruit notes, giving the fragrance a refreshing heart. A mellow Tonka bean base is enriched by the deep, opulent textures of golden Amber, Sandalwood, and Madagascan vanilla, culminating in a silky alabaster finish delicately touched by a spritz of Musk. No1 truly lives up to its name.",
    brand: 'Clive Christian',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvmoxhl40fh0k1ekebwx9xhz_9834817__g3jGruAii',
    name: 'Coach signature canvas backpack',
    price: 980,
    description:
      'black calf leather monogram pattern front patch pocket front two-way zip fastening adjustable shoulder straps single rounded top handle\nImported\nComposition\nOuter: Calf Leather 100%',
    brand: 'Coach',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clr8mf7lj005yl216n6lbi3dh_7607829__syDctFUYZ',
    name: 'Laarvee Golden Precision Steel',
    price: 979,
    description:
      'Reference Number\n\npea001-gblu\nCase Size\n\n45mm\nCase Material\n\nStainless Steel\nBand\n\nStainless Steel\nMovement\n\nAutomatic\nDial\n\nBlue\nRetail Price\n\n$510',
    brand: 'Laarvee',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clow2mz4b000ol717n7peabyx_8807141__GNHDJve6P',
    name: 'Louis Vuitton LV Flower Cup Louis Multicolor',
    price: 978,
    description:
      'Dimensions\n7.1H 3.7W\n\nMaterial\nPORCELAIN/COWHIDE LEATHER\n\nRetail Price\n$900\n\nColor\nMULTICOLOR\n\nRelease Date\n07/14/2022\n\nStyle\nGI0801\n\nSeason\nFW22',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz6ge5xy00cfptfv2umayacj_2597153__crhuDf9M6',
    name: 'Flower Diamond Ring 14k Solid Gold 0.25ctw',
    price: 975,
    description:
      'The Flower Diamond Ring in 14k Solid Gold is a beautiful and elegant piece of jewelry that exudes timeless charm. This exquisite ring features a delicate flower design, adorned with sparkling diamonds totaling 0.25 carats. Crafted from high-quality 14k solid gold, the ring offers both durability and a luxurious finish. Perfect for special occasions or everyday wear, this flower diamond ring combines sophistication with a touch of nature-inspired beauty, making it a cherished addition to any jewelry collection.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63dd12ed1cc10cd421f3848a.png',
    name: 'Chrome Hearts Matty Boy Sex Records T-shirt Citrus',
    price: 970,
    description:
      'Color\nCITRUS\n\nRelease Date\n09/14/2021\n\nRetail Price\n$595',
    brand: 'Chrome Hearts',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1sm4hyg00007jn9fj6i1b0a_9413374__ZfbUmdXRg',
    name: 'Creed Aventus 240ml',
    price: 968,
    description:
      'Creed Aventus 240ml is a sophisticated Eau de Parfum that blends fresh, fruity, and woody notes to create a modern classic. It opens with top notes of Calabrian bergamot, apple, and pineapple, balanced by a heart of jasmine and patchouli. The base notes of oakmoss, musk, and cedarwood add depth and complexity, making it a refined and long-lasting scent. Known for its bold and confident profile, Aventus is crafted for the modern gentleman who appreciates timeless elegance and strength.',
    brand: 'Creed',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ycwe5d0000p6idtk4o07ng_9525894__A4zHC9K6l',
    name: 'Deadly Doll Frightronics',
    price: 967,
    description:
      'Creepy toddler-sized doll rocks slowly back and forth. All electric and constructed of latex and foam with a metal armature and motor. Soundtrack CD included. Customer supplies the chair and CD player.\nMaterial : Metal, Foam, Latex',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt3aa09r00ycl217waw3yyn4_8280591__Owk_EadO1',
    name: "Saint Laurent SL/61 Low Top White (Women's)",
    price: 966,
    description:
      'Style\n699712AAAJH9019\nColorway\nWHITE\nRetail Price\n$845\nRelease Date\n06/15/2023',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsm3ak5f005tl8173farl9ls_1161460__sqMvxoH85',
    name: 'Saint Laurent Teddy Shopping Bag Raffia Black',
    price: 962,
    description:
      'Dimensions\n12.9H 9.9W 7.6D HANDLE 8\n\nMaterial\nPOLYAMIDE\n\nRetail Price\n$1,890\n\nColor\nBLACK\n\nSeason\nSS19',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clozcunpz0002l317rgtxcv43_8532203__alXgL2nIL',
    name: 'Rhude Cigarette Print Button Up Shirt Taupe/Multicolor',
    price: 959,
    description:
      'Season\nSS23\n\nColor\nTAUPE/MULTICOLOR\n\nStyle\nRHSS23SR880923861386\n\nRetail Price\n$895',
    brand: 'Rhude',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63dd178f1cc10cd421fab78e.png',
    name: 'KAWS THE PROMISE Vinyl Figure Brown',
    price: 959,
    description:
      'KAWS is using his Companion characters to bring the world together with the release of his newly designed THE PROMISE Vinyl Figures. The release of THE PROMISE Vinyl Figures came right in time before the 2022 Holiday season. The limited edition vinyl figure shows a large and small companion character holding a model of Earth. The KAWS THE PROMISE Vinyl Figure measures 13.39" x 6.3" x 9.45".\n\nThe KAWS The Promise Vinyl Figure (Brown) released November 22, 2022 with a retail price of $480.',
    brand: 'KAWS',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2murz1a5noo5c32v7mkbt_3923840__C5VQxDT45',
    name: 'Gucci Ace Black',
    price: 958,
    description:
      'Style\n386750 02JR0 1078\n\nColorway\nBLACK\n\nRetail Price\n$590\n\nRelease Date\n01/31/2021',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2k8t911v1oo5c0fe4f73f_3282900__sNTpyGqoG',
    name: 'Gucci Angelina Platform 55mm Sandal Camel Canvas',
    price: 958,
    description:
      'Style\n623212 UKO00 2580\n\nColorway\nMAXI GG/CAMEL/EBONY/GG TRIM/CANVAS\n\nRetail Price\n$690\n\nRelease Date\n06/23/2022',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluonjsrk00njjp13sv3b6i2p_2356979___l71YW9ZH',
    name: 'Moncler Hiroshi Fujiwara x Fragment Logo Hockey Shirt Black',
    price: 958,
    description:
      'Season\nFW22\nColor\nBLACK\nStyle\nH209U8G00004M2355999\nRetail Price\n$870',
    brand: 'Moncler Hiroshi Fujiwara x Fragment',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt7lho37000wl4166v9ng0ew_2070067__txo2zGe7A',
    name: 'Saint Laurent SL/39 mid-top sneakers',
    price: 954,
    description:
      "A signature silhouette for the label, Saint Laurent's mid-top SL/39 sneakers are presented in a blue calf leather and canvas construction. Detailed with a rubber toe cap, they feature subtle logo branding to one side.\nMade in Italy",
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv1n858y0ixgo8lrqri68kw6_6357762__vgy_-SUQf',
    name: 'Supreme x Roland TR-08 Rhythm Composer White',
    price: 951,
    description:
      'Season\nSS24\nColor\nWHITE\nRelease Date\n04/11/2024\nRetail Price\n$568',
    brand: 'Supreme x Roland',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrww43ec0006l618mjf07tp3_2873414__EO9NCekVM',
    name: 'Morton’s The Steakhouse eGift Card',
    price: 950,
    description:
      "What began in Chicago in 1978 is now one of the most award-winning steakhouses around. For over 30 years, Morton's Steakhouse has been on a mission to provide \"The Best Steak… Anywhere.\" Focusing on quality, consistency and genuine hospitality, Morton's seeks to provide not only memorable cuisine, but a memorable experience as well. With fresh, succulent seafood and their famed USDA prime-aged steak, it's no surprise that Morton's has thrilled diners all over the world. www.mortons.com",
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluyi4sth002711wvs0821ggo_8972602__f7Mh580DI',
    name: 'Kith Kithmas Backgammon Set Black',
    price: 950,
    description:
      'Season\nFW21\nColor\nBLACK\nRelease Date\n12/06/2021\nRetail Price\n$495',
    brand: 'Kith Kithmas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2cjrd0f4ooo5c22luo9bj_1955397__a8ahGALnx',
    name: 'Louis Vuitton Toiletry Pouch 26 Monogram Brown',
    price: 950,
    description:
      'Dimensions\n8H 10W 2.25D\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$580\n\nHardware\nGOLD-TONE\n\nSize\n26\n\nStyle\nM47542\n\nProduct Description\nTravel in sophistication with this Louis Vuitton Toiletry Pouch 26 in brown monogram coated canvas. The largest of all the toiletry pouches, this model boasts a spacious interior, a washable lining, and gusset sides that allow for expansion. Get yours and inject a little bit of luxe into your routine. Louis Vuitton Toiletry Pouch 26, Style Number M47542 was discontinued by Louis Vuitton in June 2021. This item can be made in either France, Spain, Italy, or in the US. Please Note: Dust bag and box are not required for this accessory.',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwy6hvmx1y7feguk5eh0gtbn_9089137__IRPuI_Q4T',
    name: 'Philipp Plein - The $keleton Ecoceramic Watch',
    price: 950,
    description:
      'Brand: Philipp Plein Product group: Watches Target group: Men Case color: black Glass: Mineral glass Ø mm: 44 Material Case: Stainless steel Dial color: black Display: Analog Bracelet color: black Watch type: Automatic watches Movement type: Automatic Closure type: Pin buckle Water resistance: 5 ATM',
    brand: 'Philipp Plein',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0wtse1j0000jmxtckf5j89l_590771__NCZMK9mu0',
    name: 'iPhone 16 Ultramarine',
    price: 949,
    description:
      "Introducing the iPhone 16: Power, Performance, and Precision. Experience the future of smartphone technology with the iPhone 16. Powered by the groundbreaking A18 Bionic chip, it delivers lightning-fast performance and incredible efficiency. Capture stunning photos and videos with the advanced camera system, featuring a larger sensor and improved low-light capabilities. Immerse yourself in vibrant colors and crisp details on the beautiful 6.1-inch Super Retina XDR display. And with all-day battery life and 128GB of storage, you can stay connected and productive throughout your day. The iPhone 16: More than a phone. It's your personal powerhouse.\n",
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0wu0y0r000012nwcdhl54ls_5031498__Zq6MrNEae',
    name: 'iPhone 16 Pink',
    price: 949,
    description:
      "Introducing the iPhone 16: Power, Performance, and Precision. Experience the future of smartphone technology with the iPhone 16. Powered by the groundbreaking A18 Bionic chip, it delivers lightning-fast performance and incredible efficiency. Capture stunning photos and videos with the advanced camera system, featuring a larger sensor and improved low-light capabilities. Immerse yourself in vibrant colors and crisp details on the beautiful 6.1-inch Super Retina XDR display. And with all-day battery life and 128GB of storage, you can stay connected and productive throughout your day. The iPhone 16: More than a phone. It's your personal powerhouse.\n",
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0vrnx70000074qa246kzqu5_9997430__CvD5-RWpM',
    name: 'iPhone 16 Black',
    price: 949,
    description:
      "Introducing the iPhone 16: Power, Performance, and Precision. Experience the future of smartphone technology with the iPhone 16. Powered by the groundbreaking A18 Bionic chip, it delivers lightning-fast performance and incredible efficiency. Capture stunning photos and videos with the advanced camera system, featuring a larger sensor and improved low-light capabilities. Immerse yourself in vibrant colors and crisp details on the beautiful 6.1-inch Super Retina XDR display. And with all-day battery life and 128GB of storage, you can stay connected and productive throughout your day. The iPhone 16: More than a phone. It's your personal powerhouse.\n",
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0vs0tfj0000iht7qlfi3iy9_9825119__njrYfLD2J',
    name: 'iPhone 16 White',
    price: 949,
    description:
      "Introducing the iPhone 16: Power, Performance, and Precision. Experience the future of smartphone technology with the iPhone 16. Powered by the groundbreaking A18 Bionic chip, it delivers lightning-fast performance and incredible efficiency. Capture stunning photos and videos with the advanced camera system, featuring a larger sensor and improved low-light capabilities. Immerse yourself in vibrant colors and crisp details on the beautiful 6.1-inch Super Retina XDR display. And with all-day battery life and 128GB of storage, you can stay connected and productive throughout your day. The iPhone 16: More than a phone. It's your personal powerhouse.\n",
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0wtwb3n0001jmxt1y4c39b3_4920373__XVS0hDEZ0',
    name: 'iPhone 16 Teal',
    price: 949,
    description:
      "Introducing the iPhone 16: Power, Performance, and Precision. Experience the future of smartphone technology with the iPhone 16. Powered by the groundbreaking A18 Bionic chip, it delivers lightning-fast performance and incredible efficiency. Capture stunning photos and videos with the advanced camera system, featuring a larger sensor and improved low-light capabilities. Immerse yourself in vibrant colors and crisp details on the beautiful 6.1-inch Super Retina XDR display. And with all-day battery life and 128GB of storage, you can stay connected and productive throughout your day. The iPhone 16: More than a phone. It's your personal powerhouse.\n",
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltqljr3p003dl118g8w8vi1n_5385595__HWqd27cZP',
    name: 'adidas Predator Mania FG Japan Blue',
    price: 947,
    description:
      'Style\nEH2958\nColorway\nROYAL BLUE/WHITE/ACTIVE RED\nRetail Price\n$350\nRelease Date\n03/12/2020',
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnlc65dj001vmu184lqpy2yz_2776090__XCIZWYLrt',
    name: 'Fendi Fendace Chain Bracelet Versace Gold/Silver',
    price: 946,
    description:
      'Material\nBRASS METAL\n\nRetail Price\n$1,450\n\nColor\nVERSACE GOLD/SILVER\n\nHardware\nGOLD-TONE\n\nRelease Date\n05/12/2022\n\nStyle\n1005391-1A00727_DG0_XL_4J160\n\nSeason\nSS22',
    brand: 'Fendi',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt39ltj000cyjw17e6q15tqy_4566823__48tc0dXWA',
    name: 'Saint Laurent Le Loafer Penny Slippers Black Leather',
    price: 945,
    description:
      'Style\n6702311VUVV1000/670231AAA7R1000\nColorway\nBLACK\nRetail Price\n$845\nRelease Date\n08/01/2023',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1qjoskq0000o7s0yfpyc2o8_1523672__RpsQ5_GhZ',
    name: 'Creed Millésime Impérial 240ml',
    price: 943,
    description:
      'Creed Millésime Impérial is an elegant and refreshing fragrance available in a 240ml bottle, featuring top notes of crisp bergamot, green mandarin, and lemon. The scent transitions into a heart of marine accord and iris, resting on a luxurious base of musk, sandalwood, and amber. This sophisticated blend was first launched in 1995 and is known for its versatility and timeless appeal, making it perfect for both formal and casual settings. A refined choice for those seeking a balanced, luxurious fragrance.',
    brand: 'Creed',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsfh3953004gl7177taube7l_2913097__DND9vZe7C',
    name: 'Kith x NFL Giants Mitchell & Ness Eli Manning Jersey Sandrift',
    price: 943,
    description:
      'Season\nFW23\n\nColor\nSANDRIFT\n\nRelease Date\n09/10/2023\n\nRetail Price\n$300\n\nProduct Description\nDesigned in collaboration with heritage sportswear brand Mitchell & Ness, the Kith for the NFL: Giants Mitchell & Ness Eli Manning Jersey is inspired by the gear worn in play, including exclusive Kith for the NFL: Giants co-branded tackle twill embroidery, zig-zag stitching, and custom patterned striping on the sleeves. It is complete with Manning lettering, #10 in varsity numbering, and "New York to the World" embroidery on the back.',
    brand: 'Kith x NFL Giants',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mf2ux30001pvlc15hrmyq4_1440742__ewIEgED3o',
    name: 'Goyard Victorie Insert Card Holder Yellow',
    price: 941,
    description:
      'The Goyard Victorie Insert Card Holder in Yellow is a vibrant and functional accessory crafted from the brand’s signature Goyardine canvas with smooth leather accents. It features multiple card slots and a slim design, making it ideal for organizing essential cards while maintaining a sleek profile. The bright yellow hue adds a bold touch, making it both a practical and stylish choice for those seeking a luxury card holder with a pop of color. Perfect for slipping into pockets or smaller bags.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluyi2sl300kv25514fp5upig_7013421__y82n0Ogcg',
    name: 'Kith x Wilson Pro Staff 97',
    price: 940,
    description:
      'Season\nSS21\nColor\n97\nRelease Date\n08/30/2021\nRetail Price\n$230',
    brand: 'Kith x Wilson',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluyi2sl300kv25514fp5upig_7013421__y82n0Ogcg',
    name: 'Kith x Wilson Pro Staff 97',
    price: 940,
    description:
      'Season\nSS21\nColor\n97\nRelease Date\n08/30/2021\nRetail Price\n$230',
    brand: 'Kith x Wilson',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvolkxx2071z4gz93jy5ysb9_8273524__a_Zco9jiwZ',
    name: 'Jacquemus Le Haut Pablo chiffon blouse',
    price: 938,
    description:
      'black\nchiffon\ndraped design\nsemi-sheer construction\nmock neck\nrear clasp fastening\none-shoulder\nshoulder pads\nshort draped sleeves\nasymmetric hem\nComposition\nLining: Polyamide 69%, Spandex/Elastane 31%\nOuter: Polyester 100%',
    brand: 'Jacquemus',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvoj8onj0uhf1286hqipt842_6152366__MHyr96iYl',
    name: 'Prada triangle-logo jersey crop top',
    price: 937,
    description:
      'This cropped top from Prada benefits from a stretch design, whilst the iconic Saffiano leather triangle logo, an instant signifier of the brand, appears at the front of this scoop neck silhouette.\nHighlights\nblack\nrecycled polyester blend\ntriangle logo\ncropped\nscoop neck\nscoop back\nsleeveless\nConscious: This item is made from at least 50% recycled or upcycled materials. For recycled synthetic clothing products we highly recommend using a microfibre-catching washing bag to ensure that no microplastics that can pollute water are released in the process.\nComposition\nRecycled Polyester 85%, Elastane 15%',
    brand: 'Prada',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu95zbi301fil814ly32gqlz_435216__Igi9qafPB',
    name: 'Cartier Trinity Bracelet',
    price: 937,
    description:
      'Trinity bracelet, 18K white gold (750/1000), 18K rose gold (750/1000), 18K yellow gold (750/1000). Supplied on a cord. Width: 2 mm. Inner diameter: 10.7 mm (for size 17).',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqyda3q00006l116xe8kwtok_7057884__t_twOgJwQi',
    name: 'Gucci Grip',
    price: 936,
    description:
      'Reference Number\n\nYA157401\nCase Size\n\n35mm\nCase Material\n\nStainless Steel\nBand\n\nStainless Steel\nMovement\n\nQuartz\nDial\n\nWhtie\nRetail Price\n\n$1,550',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxgka3c31f5213mtdj8jjyk3_8944785__rty_XULtY',
    name: 'Casablanca Playful Eagle silk shirt',
    price: 932,
    description:
      "Casablanca's Playful Eagle is inspired by the symbol of Nigeria. The iconic motif enlivens this relaxed shirt silhouette, cut from lustrous silk.\nMade in Italy\nHighlights\nwhite/multicolour\nsilk\nsatin weave\ngeometric print\nlogo print to the rear\nPlayful Eagle print to the rear\nCuban collar\nconcealed front button fastening\nshort sleeves\nchest patch pocket\nstraight hem\nWhen buying this unisex item, keep in mind that it is graded in standard men's sizing.\nComposition\nSilk 100%",
    brand: 'Casablanca',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllowq89e0028ky17ybmn86h1_6618176__JBNaX4mA2',
    name: 'Tennis 1977 GG Canvas',
    price: 930,
    description:
      'Style\n606111 HVK20 9766\n\nColorway\nBEIGE\n\nRetail Price\n$630\n\nRelease Date\n04/07/2020',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvof78wg1iewahl5fwyvdcre_1600223__F07DquJBG',
    name: 'Ferragamo Origami knot-detail leather slides',
    price: 930,
    description:
      'orange\nlambskin\nknot detailing\nsquare open toe\nslip-on style\nbranded footbed\nflat sole\nComposition\nOuter: Lamb Skin 100%\nLining: Lamb Skin 100%',
    brand: 'Ferragamo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluyic9rw005l11wvte0byinn_1432936__AvJoFYgwD',
    name: 'Kith x STAR WARS for Modernica Case Study Shell Chair Multi',
    price: 929,
    description:
      'Season\nFW21\nColor\nMULTI\nRelease Date\n12/20/2021\nRetail Price\n$595',
    brand: 'Kith x STAR WARS',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt3695xc0197jw17z25stpck_4069767__WPsZQPw2q7',
    name: 'Saint Laurent Panier Medium Bag In Raffia Ivory Brown',
    price: 928,
    description:
      'Dimensions\n10.6H 11.8W 7.8D STRAP 7.5\nMaterial\nRAFFIA\nRetail Price\n$1,100\nColor\nIVORY BROWN\nHardware\nGOLD-TONE\nStyle\n693242GQTHJ7062\nSeason\nSS23',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clspjhjv600skju160u4wwddf_1357770__Ajz41U2Wh',
    name: 'Louis Vuitton Compact Wallet Twist Epi Noir Black',
    price: 928,
    description:
      'Dimensions\n3.75H 4.75W 1D\n\nMaterial\nEPI\n\nRetail Price\n$875\n\nColor\nNOIR BLACK\n\nHardware\nSILVER-TONE\n\nStyle\nM64414',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllovo2r30000l317x6ut874w_2615799__CmzO92SKs',
    name: 'Slim Backpack GG Black',
    price: 928,
    description:
      'Retail Price\n$1,700\n\nProduct Description\nThis Gucci backpack features a slim, black nylon silhouette, silver hardware and Gucci’s signature interlocking "G" monogram.\n\nPlease Note: This item comes with a dust bag, the box is not required.',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2dgw70i1koo5c3fwm7zj5_8469256__c3tV1MsbX',
    name: 'Golden Goose Super-Star Black White Leather (W)',
    price: 927,
    description:
      'Style\nGMF00101F00032180203\n\nColorway\nBLACK/WHITE\n\nRetail Price\n$495\n\nRelease Date\n01/01/2021',
    brand: 'Golden Goose',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwprkp3005ykw1688h87blc_5077663__aGVuN6lTQ',
    name: 'Louis Vuitton Zippy Coin Purse Monogram Denim Blue',
    price: 926,
    description:
      'Dimensions\n3.3H 4.3W 0.8D\n\nMaterial\nCOTTON DENIM\n\nRetail Price\n$620\n\nColor\nMONOGRAM DENIM BLUE\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/01/2024\n\nStyle\nM82957\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllybbnae0009mm169l3pk4tm_9210903__1uvALLF_dO',
    name: 'The Simpsons Wide Fit Hoodie Black',
    price: 926,
    description: 'Season\nAW21\n\nColor\nBLACK\n\nStyle\n674986TLVG81000',
    brand: 'Balenciaga x The Simpsons',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmgw1kcz000el817ju09l0gn_9021099__XCu759LAu',
    name: 'iPhone 15 Black',
    price: 925,
    description:
      'Black\n\nCapacity\n128GB\n\nHeight\n5.81 inches (147.6 mm)\n\nWidth\n2.82 inches (71.6 mm)\n\nDepth\n0.31 inch (7.80 mm)\n\nWeight\n6.02 ounces (171 grams)',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmgw3mg30000lg16n0o6rkkk_244644__XUK9Oc7xl',
    name: 'iPhone 15 Green',
    price: 925,
    description:
      'Green\n\nCapacity\n128GB\n\nHeight\n5.81 inches (147.6 mm)\n\nWidth\n2.82 inches (71.6 mm)\n\nDepth\n0.31 inch (7.80 mm)\n\nWeight\n6.02 ounces (171 grams)',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmgw2teo000pla17nooa6uxo_8521119__B6rjqJ574',
    name: 'iPhone 15 Blue',
    price: 925,
    description:
      'Blue\n\nCapacity\n128GB\n\nHeight\n5.81 inches (147.6 mm)\n\nWidth\n2.82 inches (71.6 mm)\n\nDepth\n0.31 inch (7.80 mm)\n\nWeight\n6.02 ounces (171 grams)',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmgw6abz000zk3167d158xs5_6104340__4Wr5hi1Ba1',
    name: 'iPhone 15 Yellow',
    price: 925,
    description:
      'Yellow\n\nCapacity\n128GB\n\nHeight\n5.81 inches (147.6 mm)\n\nWidth\n2.82 inches (71.6 mm)\n\nDepth\n0.31 inch (7.80 mm)\n\nWeight\n6.02 ounces (171 grams)',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63e68645b72a4359a12e87c9.png',
    name: 'Apple Watch Ultra',
    price: 925,
    description:
      'Model Name\nApple Watch Ultra\n\nStyle\nGPS+Cellular\n\nColor\nTitanium Case with Green Alpine Loop\n\nScreen Size\n49 Millimeters\n\nSpecial Feature\nActivity Tracker, Heart Rate Monitor, Sleep Monitor, Blood Oxygen\n\nShape\nSquare\n\nTarget Audience\nUnisex Adult\n\nAge Range (Description)\nAdult\n\nCompatible Devices\nIPhone',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmgw4gfg000xmn1783pblsof_5404393__XK3s4MSKBy',
    name: 'iPhone 15 Pink',
    price: 925,
    description:
      'Pink\n\nCapacity\n128GB\n\nHeight\n5.81 inches (147.6 mm)\n\nWidth\n2.82 inches (71.6 mm)\n\nDepth\n0.31 inch (7.80 mm)\n\nWeight\n6.02 ounces (171 grams)',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmgxwcy60008l416dfgurqkw_2236621__M_PP7X6H3',
    name: 'Apple Watch Ultra 2',
    price: 925,
    description:
      'The Apple Watch Ultra 2 is a rugged smartwatch designed for adventurers and athletes. It features a durable titanium case with a Natural finish, a brighter display, and enhanced health and fitness tracking capabilities. The stylish Alpine Loop band provides a comfortable and secure way to wear the watch. With its Action Button, cellular connectivity, and advanced features, the Apple Watch Ultra 2 is the ultimate smartwatch for those who demand the best.',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz64a7be00qsclc25t7987ke_444144__lUICPwjQx',
    name: 'Bearbrick x Karimoku x F.C.R.B. x MLB 400% Wood',
    price: 925,
    description:
      'The Bearbrick x Karimoku x F.C.R.B. x MLB 400% is a remarkable collectible that represents a unique collaboration between Bearbrick, Karimoku, F.C.R.B., and MLB. This figure is meticulously crafted from high-quality wood by the renowned Japanese manufacturer Karimoku, showcasing their exceptional woodworking skills. The design seamlessly blends the distinct elements of F.C.R.B. and MLB, creating a visually striking and culturally rich piece.\n\nThe 400% scale enhances its presence, making it a standout addition to any collection. This collectible perfectly embodies the fusion of contemporary art, sports culture, and traditional craftsmanship, making it a must-have for art enthusiasts, sports fans, and Bearbrick collectors alike. The Bearbrick x Karimoku x F.C.R.B. x MLB 400% is a testament to the beauty of collaborative design and expert craftsmanship.',
    brand: 'Bearbrick x Karimoku x F.C.R.B. x MLB',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm032zr390087a8qmmlxrdydy_8810029__vfuFMuXqL',
    name: 'Van Cleef Toujours wedding band, 2.5 mm 18K rose gold',
    price: 925,
    description:
      'The Van Cleef & Arpels Toujours Wedding Band in 18K rose gold is a timeless and elegant symbol of love and commitment. With a slender 2.5 mm width, this band features a refined and minimalist design, showcasing the warm and romantic tones of rose gold. Its simplicity and sophistication make it a perfect choice for those seeking a classic yet contemporary wedding band. The Toujours Wedding Band embodies the exceptional craftsmanship and enduring beauty that Van Cleef & Arpels is renowned for, making it a cherished piece to wear every day.',
    brand: 'Van Cleef',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cloz5cl6i000qjt17s5r82hzj_7965124__sUPtTmX9X',
    name: 'Rhude Port De Gustavia Hoodie Vintage Black/Multicolor',
    price: 924,
    description:
      'Season\nSS23\n\nColor\nVINTAGE BLACK/MULTICOLOR\n\nStyle\nRHSS23HO228386100610\n\nRetail Price\n$635',
    brand: 'Rhude',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsjglxbe00b6ic17zns92pgt_4723065__s4X36ax-K',
    name: 'Lanvin Leather Curb White Ivory',
    price: 922,
    description:
      'Style\nFM-SKRK11-DRAG-A2000 / FM-SKRK11-DRA2-A2000\n\nColorway\nWHITE/IVORY/BLACK\n\nRetail Price\n$890\n\nRelease Date\n07/01/2021\n\nProduct Description\nThe Lanvin Leather Curb White Ivory is a sleek and stylish sneaker that is perfect for any fashion-forward individual. Made from high-quality leather, this shoe is both durable and comfortable, making it ideal for everyday wear. The white and ivory colorway is a classic combination that will never go out of style, and the clean lines and minimal design make it a versatile option that can be dressed up or down. Released on July 1st, 2021, the Lanvin Leather Curb White Ivory is priced at $890, making it a premium option for those who value quality and style. The shoe features a unique curb chain detail on the heel, adding a touch of edginess to an otherwise classic design. Something we love about the Lanvin Leather Curb White Ivory is the attention to detail that is evident in every aspect of the shoe. From the high-quality materials to the unique curb chain detail, this sneaker is a true work of art. Our experts think that the standout feature of the Lanvin Leather Curb White Ivory is the combination of classic design and edgy details, making it a versatile option that can be worn in a variety of settings. Overall, we love the Lanvin Leather Curb White Ivory for its timeless style and impeccable craftsmanship.',
    brand: 'Lanvin',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqpsakk6006nl9162s9dpn8t_2016112__dTsSlj5rI',
    name: 'Therabody Massage Compression Boots',
    price: 921,
    description:
      'Fully Wireless Leg and Knee Compression Boots System:Recharging your legs is now more convenient than ever, with a fully wireless design. Simply slip on and start recovering—for improved circulation, muscle pain relief and reduced soreness, swelling and stiffness. ',
    brand: 'Therabody',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljv0rmvv0004jn08p56ol6tb_455169__IYmyAplh_',
    name: 'adidas Yeezy Boost 350 V2 Beluga 2.0',
    price: 918,
    description:
      "The Yeezy Beluga 2.0 takes Kanye West's famous adidas sneakers full circle by returning to the colors of the first adidas Yeezy Boost 350 V2. While the original colorway featured a bright orange (officially Solar Red) stripe across the side, the 2017 release of the Yeezy Beluga colorway is much more subtle. This colorway utilizes the same Zebra-like stripes as the original but the SPLY-350 branding is the only part of the upper with a contrasted color-this time called Bold Orange. The Yeezy Beluga 2.0 nickname comes from the similarities to the earlier colorway but the official colorway of this adidas Yeezy release is Grey, Bold Orange, and Dark Grey. The toned down color combo made it an appealing shoe for the masses compared to some previous Yeezy colorways. Despite rumors suggesting an October drop, the official release date for the Beluga 2.0 was November 25th, 2017.",
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt398ogb00mclg178kgpb0cp_6011742__zMRsKlgGW',
    name: 'Saint Laurent Cassandre Phone Holder With Strap In Smooth Leather Dark Beige',
    price: 916,
    description:
      'Dimensions\n4.3H 7W 0.9D\nMaterial\nCALFSKIN LEATHER\nRetail Price\n$745\nColor\nDARK BEIGE\nHardware\nGOLD-TONE',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu98llke016gjo14fjb9hlnk_6971983__05grBqxN8',
    name: 'Louis Vuitton by Tyler, the Creator Multiple Wallet Chocolate Craggy Monogram',
    price: 915,
    description:
      'Dimensions\n3.5H 4.5W 0.6D\nMaterial\nCOATED CANVAS\nRetail Price\n$650\nColor\nCHOCOLATE CRAGGY MONOGRAM\nRelease Date\n03/21/2024\nStyle\nM83334\nSeason\nSS24',
    brand: 'Louis Vuitton x Tyler, the Creator',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqybk6jq0004jv17eh1eyukb_5722636__8ddRKZ7bk',
    name: 'Daniel Arsham x Disney APPortfolio Plush Mickey Figure Small',
    price: 914,
    description:
      'Release Date\n\n12/06/2019\nRetail Price\n\n$300\nDimensions\n\n47 CM\nProduct Description\n\nIn late 2019, New York-based artist Daniel Arsham linked up with APPortfolio to design a set of customer Mickey Mouse plush figures. The figures came in three different sizes, with this small version being the most popular and affordable. This plush stands at 47cm tall and released on December 6th, 2019, through Apportfolio exclusively. Each beige plush figure comes complete with custom Arsham packaging, and includes his signature crystalized drawing style throughout the figure. Bid now to add this adorable Disney plush to your collection.',
    brand: 'Daniel Arsham x Disney',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2a09q07ldoo5c7brjtx2k_9479321__OCWGRzpck',
    name: 'KAWS THE PROMISE Vinyl Figure Grey',
    price: 912,
    description:
      'KAWS is bringing the world together with the release of his THE PROMISE Collection for the beginning of the 2022 World Cup in Qatar. The KAWS THE PROMISE Collection first released at the Qatar Museum Store days prior to a global release on KAWS’ website. The limited vinyl figures show two KAWS Companion characters holding a globe of earth in between them. The KAWS THE PROMISE Vinyl Figure measures 13.39" x 6.3" x 9.45".\n\nThe KAWS THE PROMISE Vinyl Figure (Grey) released November 22, 2022 with a retail price of $480.',
    brand: 'Kaws',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyi5pv7300hwfuidiichumao_1340798__-x38a5BAE',
    name: 'Casio PRO TREK Orange Solar Wristwatch with 6 Stations in the World',
    price: 912,
    description:
      "The Casio PRO TREK PRW-3000B-5 is a rugged and stylish men's solar wristwatch, perfect for adventurers. Featuring a durable construction with an eye-catching orange strap, this watch harnesses solar power for reliable performance and utilizes multi-band 6 atomic timekeeping for precise accuracy from six stations worldwide. Key features include triple sensor technology (altimeter, barometer, compass, and thermometer), 200-meter water resistance, a full auto LED light for low-light visibility, and a world time function. This combination of durability, advanced technology, and vibrant design makes the PRW-3000B-5 an excellent companion for outdoor enthusiasts.",
    brand: 'Casio',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clts1cin1013yl513ct582p4v_678166__Imeys5WFK',
    name: 'adidas Predator Accelerator FG Pro:Direct Soccer 25th Anniversary',
    price: 912,
    description:
      'Style\nID6838\nColorway\nCORE BLACK/SILVER METALLIC/RED\nRetail Price\n$375\nRelease Date\n06/01/2023',
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxrw2bwe0143502a8p14iwjx_7750919__OLOObX_W6',
    name: 'AMIRI Champagne crystal-embellished T-shirt',
    price: 909,
    description:
      'Made in United States\nHighlights\nblack\ncotton\ncrew neck\nlogo print at the chest\nshort sleeves\nlogo print to the rear\ngraphic print to the rear\ncrystal embellishment\nstraight hem\nComposition\nCotton 100%',
    brand: 'AMIRI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvoji4930wz11286yajecd6n_2176807__6p98Aqyc6',
    name: 'Prada Re-Nylon bow hair clip',
    price: 905,
    description:
      'jet black\nrecycled nylon\nsilver-tone hardware\nenamel triangle logo\nbow detailing\nrear clip fastening\nThis item is made from at least 50% recycled or upcycled materials. For recycled synthetic clothing products, we highly recommend using a microfibre-catching washing bag to ensure that no microplastics that can pollute water are released in the process.\nLearn more about what makes a product Conscious on our Conscious Criteria page\nComposition\nMetal 100%, Recycled Nylon 100%',
    brand: 'Prada',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqyewo8100edjw17rrfsi81w_3647665__7F6rmVOFb',
    name: 'Gucci G-Timeless',
    price: 903,
    description:
      'Reference Number\n\n561386 I86A0 9896\nCase Size\n\n38mm\nCase Material\n\nSteel/Yellow Gold\nBand\n\nLeather\nMovement\n\nQuartz\nDial\n\nGreen\nRetail Price\n\n$1,100',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllow547g0008jv17dz5xs6of_2755125__Jz50GqO9H',
    name: '1.1 Millionaires Sunglasses Black',
    price: 902,
    description:
      'Color\nBLACK\n\nRetail Price\n$875\n\nStyle\nZ1165W,Z1165E\n\nProduct Description\nLouis Vuitton brought back an updated version of the Millionaires with Louis Vuitton 1.1 Millionaires Sunglasses Black.\n\nThe Louis Vuitton 1.1 Millionaires Sunglasses Black are a modern twist on its popular predecessor, with a square shape and full black lenses plus 100% UV protection. The 1.1 version keeps the eye-catching S-lock hinges. The design is completed with a gold metal pattern on the top bar and LV initials on the temples and lenses, contrasting perfectly with the framing. This model comes with a black frame.\n\nThe Louis Vuitton 1.1 Millionaires Sunglasses Black released in January 2020 and retailed for $875.',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clzc6mek7020kj52p8yc7pxtq_4896997__9nK4MK30e',
    name: 'Van Cleef & Arpels Trace Chain 18K Yellow Gold 42 cm',
    price: 900,
    description:
      'The Angle Filed Trace Chain, reference VCARO3YJ00, is a delicate and elegant piece crafted from 18K yellow gold. Measuring 42 cm (16.54 inches) in length, this chain features a fine 40-wire design and is secured with a small model hallmark clasp in 18K yellow gold. Perfect for pairing with pendants or wearing alone, this trace chain adds a touch of sophistication and timeless beauty to any jewelry collection.',
    brand: 'Van Cleef & Arpels',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwvhcr50000l517cawdz8lx_6382147__8lpCkm6UYt',
    name: 'Ruth’s Chris Steak House eGift Card',
    price: 900,
    description:
      'At Ruth’s Chris Steak House, your last bite is just as good as your first. Each ofour USDA Prime steaks is seared to perfection, finished with butter and freshlychopped parsley, and served sizzling on a 500-degree plate–just the way Ruthliked it. Enjoy steakhouse favorites and more alongside an award-winning,world-class wine list, signature handcrafted cocktails and house-prepareddesserts.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt35o84a0024l416kn37iwhr_4764554__8v66tEvdJ',
    name: 'Saint Laurent Wallet Monogram Black',
    price: 900,
    description:
      'Dimensions\n4.3H 7.4W 1.1D\nMaterial\nCALFSKIN\nRetail Price\n$745\nColor\nBLACK\nHardware\nGOLD-TONE\nStyle\n372264BOW011000\nProduct Description\nSaint Laurent Wallet Monogram Black Style Number YSP118FWA00301BCK999. Please Note: This item does not come with a dust bag or box.',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllowdz9s0000mi18i0gbhv0k_6304903__Af2dFpYUw',
    name: 'Pochette Damier Azur Mini White/Blue',
    price: 900,
    description:
      'Retail Price\n$500\n\nProduct Description\nThe Louis Vuitton Pochette Accessoires Mini Canvas Damier Azur White Blue Gold Tone features a mixture of white, blue and gold color schemes.\n\nThis Pochette by the French luxury brand Louis Vuitton is crafted from a natural cowhide leather trim and features a textile lining. The mini bag also has an interior flat pocket in this case. This product is able to stand upright courtesy of its reinforced base. The strap on this case is removable but cannot be adjusted. Its strap release measures 25.0 cm.\n\nThe Louis Vuitton Pochette Accessoires Mini Canvas Damier Azur White Blue Gold Tone debuted on June 23rd, 2020, with a recommended retail price of $500.\n\nPlease Note: This item comes with a dust bag, the box is not required.',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2j8cb0ywloo5clc19vy55_8568610__sQHXHjqCz',
    name: 'Jacquemus Le Grand Bambino Crossbody Flap Bag Brown',
    price: 900,
    description:
      'Dimensions\n5.1H 9.3W\n\nMaterial\nCOWSKIN LEATHER\n\nRetail Price\n$815\n\nColor\nBROWN\n\nHardware\nGOLD-TONE\n\nStyle\n213BA007-3069-850',
    brand: 'Jacquemus',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt3t5fsj00cwl718oafdz8n8_7855764__gQLhkX4IF',
    name: 'Saint Laurent Malibu Low Optic White',
    price: 898,
    description:
      'Style\n64925000NG09030\nColorway\nOPTIC WHITE\nRetail Price\n$575\nRelease Date\n01/01/2022',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqyfez2u001ijm1694mek4gs_610418__7NtcsRHLB',
    name: 'Gucci G-Timeless',
    price: 897,
    description:
      'Reference Number\n\n559787 I86A0 8759\nCase Size\n\n40mm\nCase Material\n\nStainless Steel\nBand\n\nLeather\nMovement\n\nAutomatic\nDial\n\nSilver\nRetail Price\n\n$1,850',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluzvu7rm006w2skmrnuxwnvw_4720536__Q8Nh2s3ASQ',
    name: 'Kith Kithmas Winning Solutions Monopoly Board Multi',
    price: 895,
    description:
      'Season\nFW21\nColor\nMULTI\nRelease Date\n12/06/2021\nRetail Price\n$395\nDimensions\n24 X 24 IN / 27 LBS\nProduct Description\nThe Kith Winning Solutions Monopoly Board is part of the 2021 Kithmas Collection that also included a poker set, two backgammon sets, and a pair of Bearbricks, among several other items. This Kith Monopoly Board features Kith Palette Colors, a recessed rolling area in the middle of the board, and a vegan leather surface with a debossed Kith monogram pattern.\n\nThe game pieces in the Kith Winning Solutions Monopoly Board are made out of antique silver and represent key moments throughout the history of the Kith brand including a car, an Asics shoe, a bucket hat, a hoodie, a Kith Treats Ice Cream, and a 10 Year Anniversary token. The train stations have also been updated to match popular global commuting destinations, in addition to the street names that are inspired by famous intersections in New York, Tokyo, Miami, LA, Manhasset, Paris, and London.\n\nThe Kith Winning Solutions Monopoly Board was released on December 6th, 2021 and retailed for $395.',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnlb8288000ojr171in1pe99_1344779__Zo5V9FvKR',
    name: 'Pulsefire LRT Long Range Torch 25-ft',
    price: 895,
    description:
      'Color: Od Green\nBrand: Exothermic Technologies\nItem Weight: 7 Pounds\nItem Dimensions LxWxH: 26 x 8.5 x 10 inches\nMaterial: Aluminum, Brass, Plastic\n\nNot legal in MD. Orders shipped to California will be changed to PF-LRT-CA, which is identical except it is equipped with a with a short range nozzle to comply with regulations and avoid requiring permission from the state fire marshal, pyrotechnics license, etc. Standard nozzles can be purchased separately for out of state use.\n25+ FOOT REACH - Send a stream of fuel and flames up to 25 feet with the press of a button and the standard nozzle, under ideal conditions.\nARC IGNITION - Ready when you need it with continuous electric arc ignition. The powerful arc of plasma reliably ignites the fuel stream.\nLIGHTWEIGHT - Constructed primarily of aluminum, the Pulsefire is compact and easy to handle – only 6 lb empty.\nHIGH CAPACITY - Onboard reservoir holds enough fuel to operate for 27 seconds total. Optional backpack kit allows over 4 minutes under ideal conditions.\nSAFETY - Designed to be as safe as possible. The nozzle design helps keep fuel and flames at the nozzle, the ignition system is on-demand, the fuel storage tank(s) are non-pressurized, a check valve between the pump and nozzle prevents fuel flow between activations, a low voltage cutoff circuit prevents over-discharging the battery, etc.',
    brand: 'Exothermic Technologies',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm00f3ai90123l4zdd0vnjnjr_7992799__YHCu1R_rr',
    name: 'Medicom Toy Be@Rbrick Manekineko Pekochan Fortune Double Coin 1000%',
    price: 893,
    description:
      'ABS plastic composition\n\nFully poseable\n\nManekineko Pekochan collection \n\nSize: 27.56 in\n\n\n\nStyle: bb4902555150154\n\nColor: Pink / Gold Plating\n\nMaterial:  ABS Plastic',
    brand: 'Be@Rbrick',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mgtq5t0000s8s8jfky3455_7365161__wkCL2afSz',
    name: 'Goyard Senat Pouch Goyardine Mini Black',
    price: 892,
    description:
      'The Goyard Senat Pouch in Goyardine Mini Black is a compact and elegant accessory crafted from the brand’s signature canvas, accented with smooth leather trim. This sleek pouch features a zip-top closure and a minimalist design, making it perfect for carrying small essentials such as documents, makeup, or electronics. The classic black color enhances its versatility, while its slim profile allows it to be used alone or as an organizer within a larger bag. A refined and practical accessory for everyday use or travel.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2hptg0twroo5cfmrlnmji_5543291__FX0SJxKhU',
    name: 'Louis Vuitton Pochette Voyage Monogram Eclipse MM Black/Grey',
    price: 891,
    description:
      'Dimensions\n7.9H 10.2W\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$855\n\nColor\nBLACK/GREY\n\nHardware\nDARK SILVER\n\nStyle\nTA4106',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63daf46b1464861b8bc69cc0.png',
    name: 'Hermes Oran Sandal Gold Box Calfskin Leather',
    price: 891,
    description:
      'Style\nH021056Z\n\nColorway\nBROWN\n\nRetail Price\n$660\n\nRelease Date\n09/01/2022',
    brand: 'Hermes',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqzsytah0006l917jauq093k_8791745__b9JeYUFf8',
    name: 'OFF-WHITE Wool Blanket',
    price: 890,
    description: 'Retail Price\n\n$1,220',
    brand: 'OFF-WHITE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvyb2vf90mh13pa484ys4jox_4888821__5zAmvUskT',
    name: 'Tory Burch gradient-effect calf leather bag',
    price: 889,
    description:
      'white\ncalf leather\ngradient effect\npebbled texture\nsignature Double T motif\nfoldover top with magnetic fastening\nadjustable detachable shoulder strap\nmain compartment\ninternal engraved logo\ninternal zip-fastening pocket\ninternal patch pocket\nComposition\nOuter: Calf Leather 100%',
    brand: 'Tory Burch',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clux17ax400zw14jw71cy0kbp_8299623__R4USX-Vsc',
    name: 'RHUDE logo-embroidered cotton track shorts',
    price: 887,
    description:
      'Imported\nHighlights\nblack\ncotton\njersey texture\nembroidered logo at the leg\nelasticated drawstring waistband\ntwo side inset pockets\nrear patch pocket\nstraight leg\nabove-knee length\nstraight hem\nComposition\nCotton 100%',
    brand: 'RHUDE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrsm1f1b004ql018b28x7tnt_3446375__DxouRWFeK',
    name: 'Louis Vuitton Pearls Beanie Black',
    price: 887,
    description:
      'Material\nWOOL\n\nRetail Price\n$565\n\nColor\nBLACK\n\nRelease Date\n01/04/2024\n\nStyle\nM7336A\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63da95d160340ed2be762a28.png',
    name: 'Off-White Diag Spray Tee Black',
    price: 886,
    description:
      'Season\nSS21\n\nColor\nBLACK\n\nStyle\nOMAA002G20JER0111001\n\nRetail Price\n$255',
    brand: 'Off White',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt37okhx00ndl617rlum6sc3_6159862__r6p_aBGzq',
    name: 'Saint Laurent Monogram Zip Around Wallet Grain De Poudre Black',
    price: 882,
    description:
      'Dimensions\n3.7H 7.4W 0.9D\nMaterial\nEMBOSSED LEATHER\nRetail Price\n$820\nColor\nBLACK\nHardware\nGOLD-TONE\nStyle\n358094BOW011000',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp04e7qr0004l617vz6pi31r_935488__IqGc72qMQ',
    name: 'Jordan 4 Retro SB Pine Green',
    price: 882,
    description:
      'Style\nDR5415-103\n\nColorway\nSAIL/PINE GREEN/NEUTRAL GREY/WHITE\n\nRetail Price\n$225\n\nRelease Date\n03/21/2023\n\nProduct Description\nNike SB’s collaboration with Jordan helps create the ultimate sneaker for the skatepark to the basketball court, with the release of the Jordan 4 Retro SB Pine Green.\n\nThe Jordan 4 Retro SB Pine Green used a white leather upper with a Neutral Grey suede mudguard. The limited edition sneakers sit on top of a white and Pine Green midsole which is highlighted by a red air unit. Nike used a gum outsole to help with increased grip while skateboarding.\n\nThe Air Jordan 4 Retro SB Pine Green released March 20, 2023, with a retail price of $225.',
    brand: 'Jordan ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clotk2ihy0017l4188nzi9he9_1857798__UJAGmDPM3',
    name: 'Slender Wallet Hexagonal FIFA World Cup Rouge',
    price: 878,
    description:
      'Dimensions\n3.5H 4.3W\n\nMaterial\nEPI LEATHER\n\nRetail Price\n$730\n\nColor\nROUGE\n\nHardware\nSILVER-TONE\n\nSeason\nPFW18',
    brand: 'Louis Vuitton ',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mge8w80000hh0uvejuzjr7_4390899__XDPKbHXQ3',
    name: 'Goyard Saint Marc Card Holder Orange',
    price: 827,
    description:
      'The Goyard Saint Marc Card Holder in Orange is a stylish and compact accessory made from the brand’s iconic Goyardine canvas, accented with smooth leather trim. Featuring multiple card slots and a central pocket, it offers ample space to organize your essentials while maintaining a slim profile. The vibrant orange hue adds a bold and lively touch, making it a standout piece for those seeking a luxury cardholder with both practicality and eye-catching elegance. Ideal for everyday use or special occasions.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2cttd0fwaoo5c5q2fkmcd_6527180__CKmMeTrFP',
    name: 'Gucci Ace Stripe Black',
    price: 827,
    description:
      'Style\n523469 0FIV0 1076\n\nColorway\nBLACK\n\nRetail Price\n$650\n\nRelease Date\n07/02/2019',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrslxf2t0000l01730y8racc_8178785__iAitdkrgp',
    name: 'Louis Vuitton LV Dynasty Set of 3 Earrings Gold',
    price: 825,
    description:
      'Material\nBRASS/GLASS PEARLS\n\nRetail Price\n$555\n\nColor\nGOLD\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/04/2024\n\nStyle\nM01753\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0zr5jao000011hj54zdy5zf_4133214__czBrw_GOa',
    name: 'Razer Iskur V2 Gaming Chair',
    price: 825,
    description:
      'The **Razer Iskur Gaming Chair** offers ergonomic support with adjustable lumbar support, built to align with your spine for long gaming sessions. It features multi-layered synthetic leather, high-density foam cushions, and 4D armrests for customized comfort. The chair is designed to support up to 136 kg (299 lbs) and provides a comfortable, durable seating experience for gamers seeking performance and style.',
    brand: 'Razer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln7y1yqy0000md1884gcecsy_126744__NDnqJNvgQ',
    name: 'Supreme B.B. Simon Studded Dog Collar Black',
    price: 823,
    description:
      'Season\nSS22\n\nColor\nBLACK\n\nRelease Date\n03/03/2022\n\nRetail Price\n$110',
    brand: 'Supreme x B.B. Simon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnb00sdw0000l6184vakw6ja_8009851__7yl4apXb6',
    name: 'Nike Air Max 95 Halloween (2014)',
    price: 823,
    description:
      'Style\n717599-100\n\nColorway\nSUMMIT WHITE/LIGHT BASE GREY-DARK GREY-MENTA\n\nRetail Price\n$170\n\nRelease Date\n10/30/2014',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluoufxqf0024l914v4oo0bs8_2077697__PkN9Wfxl4',
    name: 'Supreme Bones Hockey Jersey Multicolor',
    price: 822,
    description:
      'Season\nFW23\nColor\nMULTICOLOR\nRelease Date\n08/17/2023\nRetail Price\n$148\nProduct Description\nThe Supreme Bones Hockey Jersey Multicolor preserves a vibrant athletic look while introducing a colorful pattern that categorizes it among the casual wear collection.\n\nA colorful V-neck meets a multicolor yoke just before dropping to a lustrous appliqué of the Supreme brand logo in this Bones Hockey Supreme garment. The number 94, also appearing in a golden tint, covers most of the body area. These tackle twills are obscured by a bold skeletal overlay depicting the bones of the human body. The skeletal structure proceeds to cover the graphics on the long sleeves sewn on well-blended shades of crimson red, light gray and black.\n\nThe outstanding feature of the Supreme Bones Hockey Jersey Multicolor is the x-ray replica imprint that encases most of the front. The graphic fades off at the back, leaving a clear view of a stylish display of the signature Supreme logo and number 94. During its release on August 17th, 2023 this jersey had a retail price set at $148.',
    brand: 'Supreme x Bones Hockey',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllyb1k260000l3179y051t0k_5074506__tp9qa2ig7',
    name: 'Balenciaga Oversize Cotton Hoodie Black',
    price: 822,
    description:
      'Season\nFW21\n\nColor\nBLACK\n\nStyle\n651799TKVF4 1070\n\nRetail Price\n$875',
    brand: 'Balenciaga x PlayStation',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllttpjyk000gjq17k0fm6mdu_1029241__anE2m27i3',
    name: 'Dior CD Icon T-shirt Black',
    price: 822,
    description:
      'Season\nFW21\n\nColor\nBLACK\n\nStyle\n013J600A0589_C989\n\nRetail Price\n$590',
    brand: 'Dior',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljuzmjnh0004jr089qgcgg63_9939851__3QjBFxiIj',
    name: 'adidas Yeezy Foam RNNR MX Cream Clay',
    price: 822,
    description:
      "Following previous monochromatic Foam RNNR's, the adidas Yeezy Foam RNNR MX Cream Clay is the first Foam RNNR to feature a multicolor palette. Cream, clay, and grey colors are all prominent on the upper in a streaked camo pattern, making the design a true statement piece.\n\nThe adidas Yeezy Foam RNNR MX Cream Clay released in August of 2021 and retailed for $80.",
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt3thl5n0004l116kuwc1rlc_8183834__H6nTz3DhH',
    name: 'Saint Laurent Cassandre Matelasse Flap Pouch In Quilted Embossed Leather Black',
    price: 821,
    description:
      'Dimensions\n6.2H 8.2W 1.1D\nMaterial\nGRAIN DE POUDRE LEATHER\nRetail Price\n$725\nColor\nBLACK\nHardware\nGOLD-TONE\nStyle\n617662BOW011000',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt7llmca003jl017wghpavce_640535__EnXvM_sCP',
    name: 'Saint Laurent Cure high-top sneakers',
    price: 821,
    description:
      'Offering a twist on the classic sneaker, the Cure silhouette is detailed with added laces here. Appearing as a wrap-around design, they create an eye-catching and unexpected finish for the pair.\nImported',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clr8msain0024ie178whpuisg_8256075__twXFgVkfW',
    name: 'Laarvee Silver & Golden Precision Steel',
    price: 820,
    description:
      'Reference Number\n\npea001-sgblk\nCase Size\n\n45mm\nCase Material\n\nStainless Steel\nBand\n\nStainless Steel\nMovement\n\nAutomatic\nDial\n\nBlack\nRetail Price\n\n$485',
    brand: 'Laarvee',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ydib0700003ashh7k0rhw0_9973392__rThtOar7Nq',
    name: 'Twisted Halloween Prop Animated',
    price: 820,
    description:
      "Possessed girl screams as she cranks her head all the way around. Ouch! That's gotta hurt!\n\nAs scary as that scene in exorcist when the possessed girl did the same thing!\n\nFoam filled latex with steel armature. 110V required.",
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt3u4fcx0053jw16c9lc53px_3093967__3z672riYA',
    name: 'Saint Laurent Wyatt Chelsea Boot Black Suede',
    price: 817,
    description:
      'Style\n443208BT3001000\nColorway\nBLACK\nRetail Price\n$1,190',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clr8mxec90071ju16sxea09h0_8977881__KHU6VmuIR',
    name: 'Laarvee Golden Precision Steel Kith Exclusive Colorway',
    price: 817,
    description:
      'Reference Number\n\npea001-blkturq\nCase Size\n\n45mm\nCase Material\n\nStainless Steel\nBand\n\nStainless Steel\nMovement\n\nAutomatic\nDial\n\nTurquoise\nRetail Price\n\n$450\nProduct Description\n\nThe Laarvee PEA001 in Silver Precision Steel features a Black Bezel and Turquoise Dial in this KITH Exclusive colorway. Laarvee Style pea001-blkturq was originally released on October 7th, 2023, for a retail price of $450. This unique watch draws inspiration from Dalí-esque surrealism, featuring a warped face. The 40x45MM case and adjustable bracelet are made from water-resistant stainless steel. The Laarvee PEA001 has a Miyota automatic mechanical movement with waterproof protection up to 30m and a 40-hr power reserve. ',
    brand: 'Laarvee',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu95bxfc03jrjt13pzbu4yz7_7521325__SxBgdGo1RY',
    name: 'Cartier Symbol Pendant',
    price: 815,
    description: 'Star pendant, yellow gold (750/1000)',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw024kf90m6cm6awhymne4aj_5084023__MHsFkxhrd',
    name: 'iPad 256GB Wifi + Cellular',
    price: 815,
    description:
      "The iPad 256GB with Wi-Fi + Cellular capability offers the perfect balance of storage, connectivity, and portability for your digital needs. With its ample storage capacity, you can store a vast array of apps, photos, videos, and documents without worrying about running out of space. The Wi-Fi + Cellular functionality ensures that you stay connected wherever you go, allowing you to browse the web, stream content, and communicate with others even when you're away from Wi-Fi networks. Whether you're working on the go, watching movies during travel, or staying connected with friends and family, the iPad 256GB with Wi-Fi + Cellular provides the versatility and performance you need to stay productive and entertained.",
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clux1w0on003ufmeb91vn7644_9343395__tGO7bNmUE',
    name: 'RHUDE intarsia-knit bucket hat',
    price: 812,
    description:
      'Imported\nHighlights\nbeige/cream white\ncotton-cashmere blend\nflat crown\ndropped wide brim\nintarsia knit\npull-on style\nComposition\nCotton 95%, Cashmere 5%',
    brand: 'RHUDE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm00f4z1q00k0mk6rnwn11kwh_4669262__1gACU-f-Dg',
    name: 'Gucci 61 Sunglass Man Recycled Acetate',
    price: 812,
    description:
      'Acetate composition\n\nAviator silhouette\n\n100% UV protection\n\nBio-nylon lenses \n\nGucci logo on temples\n\n \n\nStyle: gg1515s-001\n\nColor: Black / Grey\n\nMaterial: Acetate ',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluyi7ooj014ffdcy1mk09bat_5422972__iQmAxxvtn',
    name: 'Kith x Spider-Man Skateboard Deck Set',
    price: 812,
    description:
      'Season\nSS22\nRelease Date\n07/15/2022\nRetail Price\n$240\nDimensions\n8.0" X 31.75" IN',
    brand: 'Kith x Spider-Man',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clu953yq001wqlc13i5dr6lzu_282208__wrvPgYp0M',
    name: 'Cartier Chain Necklace',
    price: 812,
    description:
      'Chaînes necklace, 18K yellow gold (750/1000). Adjustable chain length: 38-42-46 cm.',
    brand: 'Cartier',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluod0btb011fl515lu2hhro4_125569__H28p7-wg_',
    name: 'Ryan Travis Christian ASPHAN FOR SPLIFFS Ashtray',
    price: 809,
    description: 'Release Date\n09/18/2020\nRetail Price\n$900',
    brand: 'Ryan Travis Christian',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63dc52660833b3f42b7e1b2f.png',
    name: 'Supreme Lucano Step Ladder Red',
    price: 808,
    description:
      "It's time to to step up your Supreme accessory game. For their Fall/Winter 2018 collection, Supreme worked with Hasegawa Ladders to produce this limited edition Lucano Step Ladder. This two-step ladder is built with steel and aluminum and features a powder coated finish and Supreme's logo printed down the side. It released on August 30th, 2018 for a retail price of $288. At nearly two feet tall, this household necessity will help you reach the top shelf in style.",
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrgo9rs5006pkz16z7r7c9f7_175491__CHVTIqbw1',
    name: 'Louis Vuitton Damier Pop Split Beanie Yellow/Red',
    price: 808,
    description:
      'Material\nWOOL\n\nRetail Price\n$705\n\nColor\nYELLOW/RED\n\nRelease Date\n01/04/2024\n\nStyle\nM7362A\n\nSeason\nSS24',
    brand: 'Louis Vuitton x Pharrell Williams',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mg7eu40003am99pgpuc9bq_5104095__iyt7ExMQ7',
    name: 'Goyard Victorie Insert Card Holder White',
    price: 808,
    description:
      'The Goyard Victorie Insert Card Holder in White is a refined and practical accessory made from the brand’s iconic Goyardine canvas with smooth leather trim. Featuring multiple card slots, it offers an efficient way to organize essential cards while maintaining a slim profile for easy storage. The elegant white color adds a clean, sophisticated touch, making it both a versatile and luxurious choice for those seeking a minimalist card holder that blends functionality with style. Ideal for daily use or special occasions.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluzveine002jt6dpe3n47dp1_1231618__Aj2FeQGMO',
    name: 'Kith Kithmas Dartboard Magma',
    price: 807,
    description:
      'Season\nFW22\nColor\nMAGMA\nRelease Date\n12/10/2022\nRetail Price\n$425\nDimensions\nDARTBOARD DIMENSIONS: 18 X 1.5 IN / CABINET DIMENSIONS: 20 X 20 X 6 IN',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluyinfp200swewtxpw4y2d0j_4351968__hZn-7FBTt',
    name: 'Kith x Capita BMW 158 Snowboard Vitality',
    price: 807,
    description:
      'Season\nFW22\nColor\nVITALITY\nRelease Date\n10/07/2022\nRetail Price\n$495',
    brand: 'Kith x Capita',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrshjd7d000al516fk7uk6ys_1037158__dU6dagFbv',
    name: 'Louis Vuitton Damoflage Beanie Green Damoflage Damier',
    price: 806,
    description:
      'Material\nWOOL\n\nRetail Price\n$565\n\nColor\nGREEN DAMOFLAGE DAMIER\n\nRelease Date\n01/04/2024\n\nStyle\nM7368A\n\nSeason\nSS24',
    brand: 'Louis Vuitton x Pharrell Williams',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2alcw0941oo5c7xjglp99_8081245__0HSf82WlK',
    name: "Supreme Director's Chair Red",
    price: 801,
    description:
      'One of the most anticipated accessories of the SS19 season, Supreme\'s Director\'s Chair released in black and red as a part of their week 4 drop. The chair sits 18" high and features a hardwood structure and a canvas back with the word "Supreme" printed on it. The chair was released on March 21st, 2019 and retailed for $160 USD.',
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwvfqeb004tl6178s2pmyr7_785493__Ozi-wAcIvx',
    name: 'Ruth’s Chris Steak House eGift Card',
    price: 800,
    description:
      'At Ruth’s Chris Steak House, your last bite is just as good as your first. Each ofour USDA Prime steaks is seared to perfection, finished with butter and freshlychopped parsley, and served sizzling on a 500-degree plate–just the way Ruthliked it. Enjoy steakhouse favorites and more alongside an award-winning,world-class wine list, signature handcrafted cocktails and house-prepareddesserts.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ydkb050000jd4skomj9k8q_7244861__IYkVObhYy',
    name: 'Laughing Hag Animated Prop',
    price: 800,
    description:
      "What is it about hags and their weird sounding scary witchy laughter that scares everyone? Well. if you want to find out, look no further than this Laughing Hag Animated Prop. Hag rocks back and forth, laughing maniacally. The sound alone will make you go crazy, it's as if the hag is really alive and has some sinister tricks up her sleeve waiting to be unleashed on you! ",
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwwfcql00iujy15erq6i6fc_386418__Ozh6Ya9MX',
    name: "Fleming's Prime Steakhouse & Wine Bar eGift Card",
    price: 800,
    description:
      'Fleming’s Prime Steakhouse & Wine Bar is an ongoing celebration of exceptional food and wine. Enjoy the finest aged prime steaks and discover new tastes with our award-winning wine list. Known for its warm, inviting ambiance Fleming’s features an open dining room built around an exhibition kitchen and expansive bar. Adjacent to the main dining area are private dining rooms that can accommodate small or large groups. Fleming’s lively atmosphere, gracious service and dedication to excellence turns evenings out into memorable moments. The Fleming’s Prime Steakhouse & Wine Bar Gift Card is also valid for use at all U.S. Outback Steakhouse, Bonefish Grill and Carrabba’s Italian Grill locations. For more information and sample menus, visit www.FlemingsSteakhouse.com',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwxrscv000ikz15ax0gxu4k_1389186__DV-p74RTO',
    name: 'Delta Air Lines eGift Card',
    price: 800,
    description:
      'Give the Gift of Vacation.TM With over hundreds of destinations and limitless adventures to choose from, the Delta Gift Card opens up a world of possibilities. Delta Gift Cards can be used toward any flight at Delta.com or any Delta Vacations package. * Fast, Free Wi-Fi is now available for SkyMiles® Members on most domestic flights. Not a member? Sign up for instant access to free Wi-Fi and other benefits. SkyMiles is always free to join. Wi-Fi and SkyMiles® Terms of Use Apply. *Delta Vacations packages must include Delta airfare in order to use Delta Gift Card.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2hgv50tg0oo5cci1q9m8y_8717768__KoGdieLu_',
    name: 'Louis Vuitton Pocket Organizer Minty Green',
    price: 799,
    description:
      'Dimensions\n4.3H 3.1W 0.4D\n\nMaterial\nTAURILLON CALFSKIN LEATHER\n\nRetail Price\n$670\n\nColor\nMINTY GREEN\n\nRelease Date\n07/06/2022\n\nStyle\nM81540\n\nSeason\nFW22',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllybeq7k007qmm16hv4z3fq0_1871021__qrIS3vvsV',
    name: 'The Simpsons Oversized T-Shirt Black',
    price: 798,
    description: 'Season\nAW21\n\nColor\nBLACK\n\nStyle\n676589TLVG71000',
    brand: 'Balenciaga x The Simpsons',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqh4jrg90089jt17ymi4vlje_9596824__2Oo_6fCmx',
    name: 'Dolce and Gabbana x Smeg Citrus Juicer',
    price: 796,
    description:
      '\n\nDolce & Gabbana x SMEG join creative forces to create "Sicily is my Love," a unique, new project made in Italy. Traditional Sicilian handicraft is the inspiration for the decorations of this electric juicer. This marvelous object is adorned in the manner of bummuli and quattare, typical terracotta vases from Sicily painted in the same style as the traditional cart.\n\nThe CJF01DGUS Dolce & Gabbana x Smeg Electric Citrus Juicer is a 1950’s retro style appliance that will add a pop to any kitchen. The unit is designed with a die-cast aluminum powder coated body, Tritan plastic cover, and stainless steel reamer and strainer components. It comes equipped with a powerful 80w motor that has a built-in pressure sensor that automatically starts the juicing process when pressure is applied. The Tritan cover is BPA-free, impact resistant, and it doubles as a dust cover when not in use, and a bowl for fruit and peels when using the juicer, adding convenience and practicality to this stylish appliance. The unit also features a stainless steel, anti-drip spout that dispenses juice directly into a cup and can be lifted up to cut off the flow of juice and prevent drips and spills. All Smeg products come with the manufacturer\'s 1-Year Hassle-Free Repair or Replace Warranty.\n',
    brand: 'Dolce and Gabbana x Smeg',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxgjjenw15pw13mtm2foyxye_382809__YHmNQ4TH-',
    name: 'Casablanca Court Abstrait track shorts',
    price: 795,
    description:
      'Made in Italy\nHighlights\ndark green/multicolour\nsilk\ntwill weave\nall-over Court Abstrait graphic print\nstriped edge\nelasticated waistband\nthigh-length\ndrawstring fastening\nComposition\nOuter: Silk 100%\nLining: Polyester 100%',
    brand: 'Casablanca',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clssc516c00pqkx16lh5o2axh_6726198__uMaGzqnns',
    name: 'Reflections Copenhagen Rochester perfume flacon',
    price: 794,
    description:
      'Reflections Copenhagen was founded in 2015, looking to present handcrafted crystal homeware with a recognisable charm. Perfect for filling with any favourite fragrance, this Rochester flacon is made from multicolour crystal to make a charming addition to any dressing table. \n\nImported',
    brand: 'Reflections',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clux1y60v000jwdwtul9z8jru_4444840__5ojWT_J0T',
    name: 'RHUDE logo-print bermuda shorts',
    price: 793,
    description:
      "LA-based RHUDE is known for its streetwear-inspired apparel ladened with bold graphics and playful branding. These blue shorts are adorned with the brand's logo printed on the front in white outlined lettering.\nMade in United States\nHighlights\nnavy blue\nelasticated drawstring waistband\nslip pockets to the sides\nlogo print to the front\nrear patch pocket\nfull lining\ndrawstring fastening\nComposition\nOuter: Nylon 100%\nLining: Polyester 100%",
    brand: 'RHUDE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqcqs9ug006lic1bd4rgdjss_7092064__0Btevl53k',
    name: 'Breville Sous Chef 16 Pro Food Processor',
    price: 793,
    description:
      'Every Breville product begins with a simple moment of brilliance. The Breville Sous Chef began with the observation that the food comes in many different shapes and sizes, making it difficult for one machine to consistently cut all ingredients into the optimal size pieces. So how do you make sure that you get the perfect size for what you’re cooking?\n\nThe Breville Sous Chef solves this problem with its unique design. Its wide feed chute makes it possible to slice vegetables of all shapes and sizes, while numerous disc and blade options makes it easy to get perfect results, any way you slice it.',
    brand: 'Breville ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpdglbm10035jm16fprf4lqu_2797581__R503hc6ed',
    name: "Burberry Men's Cashmere Check Scarf",
    price: 792,
    description:
      'Burberry Scottish-made scarf in double-faced cashmere with contrasting checks and logo lettering\nApprox. 66.1"L x 11.8"W\nFabric is washed in local spring water and carefully brushed with teasels for a super-soft finish\nFringe ends\nMay be styled multiple ways\nCashmere\nProfessional cleaning recommended\nImported',
    brand: 'Burberry',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt3t883u006pl016wrskzp5s_1309284__gYBjksCJT',
    name: 'Saint Laurent 50s Signature Hoodie Black',
    price: 789,
    description:
      'Season\nSS22\nColor\nBLACK\nStyle\nP00693264 / 677263YBVB21095\nRetail Price\n$950',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwpohcy009jl117qynrqcpm_9153273__1nbJhrTjB',
    name: 'Louis Vuitton Key Pouch Monogram Denim Blue',
    price: 789,
    description:
      'Dimensions\n2.8H 4.7W 0.6D\n\nMaterial\nCOTTON DENIM\n\nRetail Price\n$505\n\nColor\nMONOGRAM DENIM BLUE\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/01/2024\n\nStyle\nM82961\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2kytx14gjoo5ctjsli2fi_8888162__E6SMcQTL_',
    name: 'Gucci Jumbo GG Canvas Bucket Hat Camel/Ebony',
    price: 788,
    description:
      'Material\nCANVAS\n\nRetail Price\n$570\n\nColor\nCAMEL/EBONY\n\nStyle\n681256 3HAGJ 2564',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clk349aw60000l708unl6wzwa_7037715__WH1uzeJZ-',
    name: 'Nike Air Jordan 1 Travis phantom',
    price: 783,
    description:
      'Travis Scott closed out 2022 with the return of his signature Jordan 1 Low, this time in a new Black Phantom colorway.\n\nThe silhouette returned with his signature backwards Nike Swoosh but with a new contrast stitch design. The all black nubuck sneakers feature a Nike Air logo on the tongue and an Air Jordan Wings logo on the right heel tab. Red, Black, and White/Black laces are included and an embroidered Bee is located on the heel tab of the left sneaker inspired by Travis’ daughter, Stormi.\n\nThe Air Jordan 1 Retro Low OG SP Travis Scott Black Phantom released December 15, 2022 with a retail price of $150.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltszumqy0024l41454b7mxgh_3967337__PnbiB0iLE',
    name: 'Nike Phantom Venom Elite FG Metallic Grey Crimson',
    price: 783,
    description:
      'Style\nAO7540-906\nColorway\nMETALLIC BOMBER GREY/PARTICLE GREY/LASER CRIMSON/BLACK\nRetail Price\n$250',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnvyk9lq0018l116ifyty2x9_7200984__IWItY4PkZ',
    name: 'LEGO Creator Brick Bank Set 10251',
    price: 782,
    description:
      'Release Date\n01/02/2016\n\nRetail Price\n$170\n\nPiece Count\n2380\n\nMinifigures\n6\n\nProduct Description\nThe 2,300 piece LEGO Creator Brick Bank Set measures over 10 inches high, wide, and deep, a perfect model to display with other Creator sets. Like other sets in the series, the LEGO Creator Brick Bank Set pays homage to architecture of the modern day, adding classic LEGO touches like minifigures, and detailed finishes throughout the set.\n\nThe LEGO Creator Brick bank Set released in January 2016 for a retail price of $170.',
    brand: 'LEGO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt0nax3x0017l417czie2xlm_8302093__69neygyzR',
    name: 'Baccarat x Pokemon Pickachu Figure',
    price: 782,
    description:
      'Season\nFW21\nRetail Price\n$440\nDimensions\nHEIGHT: 5.7 INCHES',
    brand: 'Pokemon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt4oar9z000uju17ih41dy50_8794624__eImc_w8VJ',
    name: 'Saint Laurent Joe White',
    price: 780,
    description:
      'Style\n5328740M5009030\nColorway\nWHITE\nRetail Price\n$695\nRelease Date\n02/21/2020',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvoevfzj1dhnahl5mk8j8797_4187031__BFgZcijhj',
    name: 'Ferragamo Vara-chain bracelet',
    price: 780,
    description:
      'gold-tone\nmatte finish\ncable-link chain\nsignature Vara chain detail\nengraved logo\nbox-clasp fastening\nComposition\nBrass',
    brand: 'Ferragamo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxzinxo3001dlycbelumh7fm_716111__IrGk_tFVX',
    name: 'Versace Pride Barocco swim shorts',
    price: 780,
    description:
      'Made in Italy\nHighlights\nblack/multicolour\nstretch-design\nlightweight construction\nsignature Barocco print\nelasticated drawstring waistband\nrear welt pocket\nthigh-length\nBe mindful to try on swimwear over your own garments.\nVersace is donating 10% of the purchase price of every Versace 2024 Pride Collection item sold to the Elton John AIDS Foundation from May 22, 2024 to January 31, 2025. For more information about the Elton John AIDS Foundation, visit www.eltonjohnaidsfoundation.org\nComposition\nOuter: Polyester 100%\nLining: Nylon 94%, Elastane 6%',
    brand: 'Versace',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2ahse08v4oo5cw6smy2ai_8355915__629PaWwq5',
    name: 'Goyard Saint Sulpice Red',
    price: 780,
    description:
      'This Goyard Saint Sulpice card holder features the classic Goyardine print in red against a background of coated canvas.This super stylish and sophisticated card holder includes four card slots and an interior cash insert.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllowilkn0002mi1800tfvjf8_948326__r5SkahZzt',
    name: 'Pochette Accessoires Monogram Mini Brown',
    price: 778,
    description:
      'Dimensions\n3.5H 5.5W 0.8D HANDLE 5.9\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$745\n\nHardware\nGOLD-TONE\n\nSize\nMINI\n\nStyle\nM58009\n\nProduct Description\nThe Mini Pochette Accessoires in Monogram canvas is a stylish way to carry all your essentials, making it the perfect everyday accessory. Easily style any look with this Mini Pochette, as it is guaranteed to make a statement wherever you wear it; carry in hand or attach it to a larger bag using the 5.9 IN gold-tone chain with hook feature. The Mini Pochette Accessoires in Monogram canvas measures 5.5W x 3.5H x 0.8D IN in size and is either made in France, Spain, Italy, or the US. The style code is M58009.\n\nPlease Note: Dust bag and box are not required for this accessory.',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxtq5ayy01u1fxecmcmlfuiw_7708822__Hgnp7T4XX',
    name: 'AMIRI Arts District bucket hat',
    price: 778,
    description:
      'Made in Italy\nHighlights\nblack\ncontrasting embroidered logo to the front\ndropped narrow brim with decorative stitching\npartial cotton lining\nComposition\nOuter: Polyamide 100%\nLining: Cotton 100%',
    brand: 'AMIRI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpegvhmk00ekl417291i0lc4_3167395__SS1-kgtWqh',
    name: 'Gallery Dept. Workshop Trucker Hat Orange',
    price: 776,
    description:
      'Color\nORANGE\n\nProduct Description\nPlease note: Due to the nature of the unique paint splatters featured on this item, each hat may vary in appearance.\n\n',
    brand: 'Gallery Dept.',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluot8h5501yil714fo5tyfyy_1768275__AJqLGUbrb',
    name: 'Supreme Bones Hockey Jersey Black',
    price: 775,
    description:
      'Season\nFW23\nColor\nBLACK\nRelease Date\n08/17/2023\nRetail Price\n$148\nProduct Description\nThe Supreme Bones Hockey Jersey Black is adorned by an x-ray imprint throughout the front, which goes around the back and drops down to the elbows.\n\nThe Supreme Bones Hockey Jersey is made using a breathable net constructed from polyester. Its V-neck neckband features an elastic band, with contrasting black and white stripes, to ensure a good fit. The Supreme tackle twill tucks stylishly behind the bare bones imprinted on the chest. The body and sleeves also feature a bold appliqué of the number "94" that completes this jersey’s athletic vibe.\n\nThe attention to detail present in this garment, including a Supreme patch just above the hem, is a stylish addition. On the back is an embroidered graphic in white against either a red or blue background. This jersey had a retail price of $148 when first released on August 17th, 2023.',
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp69hl870008jp16te0yfme4_8178913__BflCeYLda',
    name: 'Cassandre Matelassé Carré Small Envelope Wallet in Lambskin',
    price: 774,
    description:
      'WALLET DECORATED WITH THE CASSANDRE AND CARRÉ-QUILTED OVERSTITCHING.\n\n DIMENSIONS: 13 X 9,5 X 2 CM/ 5,1 X 3,7 X 0,7 INCHES\n BRONZE-TONED METAL HARDWARE\n LEATHER LINING\n SNAP-BUTTON CLOSURE\n EXTERNAL BACK POCKET\n INTERIOR: FOUR CARD SLOTS, ONE OPEN COMPARTMENT\n 70% LAMBSKIN, 30% METAL\n STYLE ID 742430AABVP1000\n MADE IN ITALY',
    brand: 'YSL',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2myor1akroo5c1yn3yat2_1179431___jzKKr-oc',
    name: 'Louis Vuitton Louise Hoop Earrings Gold',
    price: 774,
    description:
      'Louis Vuitton Louise Hoop Earrings are a classic, timeless design that is guaranteed to make a statement. These embossed LV circle earrings have a gold-tone finish and measure 1.75 IN. Style',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrslrhr900e5l717ubic73p7_154178__rv99a_GtN',
    name: 'Louis Vuitton Multiple Wallet Damier Pop Green',
    price: 772,
    description:
      'Dimensions\n3.5H 4.5W 0.6D\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$605\n\nColor\nGREEN\n\nRelease Date\n01/04/2024\n\nStyle\nN40542\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt4o414d003rjq18acwjf1bm_5811529__4kGrgs_V6',
    name: 'Saint Laurent NUXX Crossbody Black',
    price: 721,
    description:
      'Dimensions\n9.8H 6.6W 3.5D\nMaterial\nNYLON\nRetail Price\n$890\nColor\nBLACK\nHardware\nSILVER-TONE\nStyle\n581375HO21Z1054',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqpi9ew100gnl315o303sqtw_3152316__Kn9UdPOEU',
    name: 'Bang & Olufsen Beolit 20',
    price: 720,
    description:
      'Packing powerful sound into a portable size, Beolit 20 is the 4th Generation of our iconic bluetooth speaker. A bigger battery means listening for longer, with eight hours of playtime at typical listening volumes. Beolit 20 is also a portable power bank with wireless Qi-charging technology included, so now you can charge your compatible devices such as your mobile phone or earbuds. With handy USB-C charging and a larger battery capacity, Beolit 20 keeps the party going for longer. ',
    brand: 'Bang & Olufsen',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz6fuspp00ha134uy891lsld_376111__2-wwgxBpl',
    name: 'Ak47 Gun Pendant 14k Solid Gold',
    price: 720,
    description:
      'The AK47 Gun Pendant in 14k Solid Gold is a bold and striking piece of jewelry. Expertly crafted from high-quality 14k solid gold, this pendant features intricate detailing that captures the iconic design of the AK47. Perfect for making a statement, this unique pendant combines luxurious materials with a distinctive style. Whether worn on a chain or added to your collection, the AK47 Gun Pendant is sure to stand out as a symbol of strength and sophistication.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2lpl316heoo5c1sjd0kab_818620__X9kvdX_UN',
    name: 'Louis Vuitton Passport Cover Monogram Eclipse Black/Grey',
    price: 720,
    description:
      'Dimensions\n\n5.5H 4W 0.25D\nMaterial\n\nToile Canvas\nRetail Price\n\n$395\nColor\n\nBlack/Grey\nStyle\n\nMB0198',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln85n3f80002ms17kko0srif_2307865__O9G9swG_Y',
    name: 'Dog Save The Queen',
    price: 719,
    description:
      'Release Date\n09/24/2020\n\nRetail Price\n$560\n\nDimensions\n15.7 IN',
    brand: 'D*FACE x Sync. Medicom',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsjgh07a00afl318tvz9o2uo_5144019__82UNFk63y',
    name: 'Lanvin Leather Curb Black',
    price: 718,
    description:
      "Style\nFM-SKRK11-DRAG-A2010 / FM-SKRK11-DRA2-A2010 / SKRK11 DRA2 10\n\nColorway\nBLACK\n\nRetail Price\n$890\n\nRelease Date\n06/01/2021\n\nProduct Description\nThe Lanvin Leather Curb Black comes in a material construction that features a mix of calfskin, suede, and mesh.\n\nThe Black Lanvin Leather Curb sneaker has a round-shaped toe and a Lanvin Paris label on the tongue. The shoe has a low-top design that includes a padded collar and tongue. Moreover, the shoe has a gum rubber sole that boosts a waffle pattern that offers traction and grip on a variety of surfaces. The heel includes a thermoplastic material that's been molded to fit the shape of the shoe. The insole is removable while the tongue features a pull tab.\n\nWe especially love the Lanvin Leather Curb Black for its lace design. The sneaker has thick woven multi-color laces that also provide a secure fit. Theses laces are looped through silver-rectangular eyelets, which complement the black base. The shoe was released on June 1st, 2021, at a retail price of $890.",
    brand: 'Lanvin',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltteyw780071jp1472fac3r1_5923188__H6wgWpwDc',
    name: 'adidas X Crazyfast Messi LC.1 FG Las Estrellas',
    price: 715,
    description:
      'Style\nID3529\nColorway\nCLOUD WHITE/PULSE BLUE/GOLD METALLIC\nRetail Price\n$230\nRelease Date\n09/05/2023',
    brand: 'adidas X Crazyfast',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllo4z2jl001zmn16vb09xj61_4101640__dYlvKJvQq',
    name: 'Bear Hoodie Black Multi',
    price: 715,
    description:
      "Season\nFW21\n\nColor\nBLACK MULTI\n\nStyle\nPMBB058F21FLE0071060 / PMBB058C99FLE0011060\n\nRetail Price\n$850\n\nProduct Description\nThe Palm Angels Bear Hoodie in Black Multi features a street look, the brand's signature teddy bear, and logotype. It is made using 100% cotton, just like most of the brand's merchandise, and features two front pouch pockets, a drawstring hood, ribbed edges and clean hems, release shoulders and long sleeves.\n\nThe hoodies' design have a teddy bear contrasting with the color of the hoodie. The Palm Angels Bear Hoodie, Black Multi, stands out from the collection of hoodies because of the minimal details yet stylish look.\n\nPalm Angel has been releasing the teddy bear hoodies since June 2014. They are retailing at $340 in most outlets.",
    brand: 'Palm Angels',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllsuzsgx0004k21800hfcli5_2439616__Stj1GdqZq',
    name: 'Logo Print T-Shirt Black',
    price: 714,
    description: 'Season\nSS22\n\nColor\nBLACK\n\nStyle\nMJL053-001',
    brand: 'AMIRI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt7ldt2o00grjs17phw00fmz_6101189__toBy2p4OE',
    name: 'Saint Laurent lace-up canvas sneakers',
    price: 714,
    description:
      'Made in Italy\nHighlights\nwhite\ncanvas/leather\nlogo print to the rear\ncontrasting heel counter\ntonal stitching\nround toe\nfront lace-up fastening\nflat rubber sole\nlogo at the sole\nThis item is made from at least 50% organic materials.\nLearn more about what makes a product Conscious on our Conscious Criteria page',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1twcl0e0001145hwu7qhi1m_8189034__QCI1HXU2O',
    name: 'Daniel Arsham Eroded Melpomene Candle',
    price: 711,
    description:
      'The Daniel Arsham Eroded Melpomene Candle is a unique soy wax candle modeled after his large bronze sculpture. The candle has a complex scent profile with top notes of whiskey, heart notes of cinnamon and coriander, and base notes of agarwood tobacco, sandalwood, patchouli, cedar, and vanilla. It measures 18 cm in length, weighs 2.2 kg, and comes in custom Arsham Studio-designed packaging. This limited-edition candle was originally priced at $250 ￼ ￼.',
    brand: 'Daniel Arsham',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2myol1ahgoo5cqomvi5hv_8777183__cTd_Ok66e',
    name: 'Gucci Signature Leather Belt Black',
    price: 711,
    description:
      "The Gucci Signature Leather Belt Black is a classic accessory that exudes luxury and sophistication. Crafted from high-quality leather, this belt features the iconic Gucci logo pattern in a sleek black colorway. The buckle is made from polished silver-tone metal, adding a touch of shine to the overall design. This belt is a versatile piece that can be worn with a variety of outfits, from casual jeans and a t-shirt to a formal suit. It is available in multiple sizes to ensure a perfect fit for every wearer. \n\nAt a retail price of $520, the Gucci Signature Leather Belt Black is a worthwhile investment for anyone looking to elevate their wardrobe with a timeless accessory. Something we love about the Gucci Signature Leather Belt Black is its ability to instantly elevate any outfit. Whether you're dressing up or down, this belt adds a touch of luxury and sophistication to your look. We love the attention to detail in the logo pattern and the high-quality materials used in its construction. Overall, the Gucci Signature Leather Belt Black is a standout accessory that is sure to become a staple in any fashion-forward wardrobe.",
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluocvnij0108la14fn7i6eg9_4222888__75FkNAtAc',
    name: 'Supreme MM6 Maison Margiela Receipt Wallet Multicolor',
    price: 710,
    description:
      "Season\nSS24\nColor\nMULTICOLOR\nRelease Date\n03/28/2024\nRetail Price\n$228\nProduct Description\nIntroducing the Supreme MM6 Maison Margiela Receipt Wallet, released March 28, 2024. This Spring-Summer 24' collaboration between two iconic brands brings together Supreme's urban edge and Maison Margiela's avant-garde elegance in a sleek and versatile accessory.\n\nCrafted with precision and attention to detail, this wallet is sure to be a conversation piece. The subtle yet distinctive Supreme box logo and MM6 Maison Margiela branding adorn the exterior, showcasing the partnership's unique aesthetic.\n\nWhether used as a standalone accessory or slipped into your favorite handbag, the MM6 Maison Margiela Receipt Wallet features multiple compartments to organize your receipts, cards, and other essentials with east. Elevate your style with this versatile and sophisticated accessory from Maison Margiela's MM6 collection with retail price of $228.",
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln7y7jw8003ck1172h7zz88q_3946960__4_XtaW3OD',
    name: 'Running Dog (Complexcon Exclusive)',
    price: 709,
    description:
      'Style\nGX3066\n\nColorway\nSPACE GREY/SPACE GREY/SPACE GREY\n\nRetail Price\n$250\n\nRelease Date\n11/06/2021',
    brand: 'adidas NMD Hu Pharrell x Billionaire Boys Club',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clttg2obo00k9jp14pb9sb6hc_9516133__b4tG-Vopt',
    name: 'adidas Predator Absolute FG Eternal Class.1 Pack',
    price: 703,
    description:
      'Style\nFX0274\nColorway\nWHITE/BLACK/GOLD\nRetail Price\n$220',
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwvfd7c000mjn17l9ko0weq_4063216__AemmkzLaV',
    name: 'Ruth’s Chris Steak House eGift Card',
    price: 700,
    description:
      'At Ruth’s Chris Steak House, your last bite is just as good as your first. Each ofour USDA Prime steaks is seared to perfection, finished with butter and freshlychopped parsley, and served sizzling on a 500-degree plate–just the way Ruthliked it. Enjoy steakhouse favorites and more alongside an award-winning,world-class wine list, signature handcrafted cocktails and house-prepareddesserts.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clzog7ygo004z3w227buho50o_5375781__HckNdBnLL',
    name: "Miyabi Black 5000MCD67 9.5-inch Chef's Knife",
    price: 700,
    description:
      "The Miyabi Black 5000MCD67 9.5-Inch Chef's Knife is a premium kitchen tool that exemplifies precision and artistry. Crafted from micro-carbide powdered steel, the 9.5-inch blade offers exceptional sharpness and durability, making it ideal for a wide range of culinary tasks. The blade features a breathtaking 133-layer Damascus pattern, which not only enhances its aesthetic appeal but also contributes to its strength. The knife's ergonomic handle, made from luxurious black ash wood, ensures a comfortable and secure grip, providing excellent control during use. Perfect for both professional chefs and dedicated home cooks, the Miyabi Black 5000MCD67 9.5-Inch Chef's Knife is a masterful blend of traditional Japanese craftsmanship and modern technology, making it an essential addition to any kitchen.",
    brand: 'Miyabi',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm00fmn9w00v413my7vqqiy9a_6168116__v3RY6Hpye',
    name: 'G-SHOCK Gmb2100bd-1a Watch',
    price: 700,
    description:
      'The new Full Metal GMD2100 analog-digital G-SHOCK inherits the design concept of the original G-SHOCK DW5000C. Stainless steel is used for the screw back case, bezel, and band, which creates a simple, no-nonsense design with an impact-resistant structure that protects the module from damage. Features adopted from the original 1983 DW5000C are the octagonal bezel and the dimple design of the band, reimagined with a slim, high-performance module.\nDETAILS\nFull-metal construction \n\nSolar powered\n\nBattery level indicator\n\nWireless linking using Bluetooth\n\nAuto time adjustment\n\nEasy watch setting\n\nApproximately 300 world time cities\n\nTime & place\n\nReminder\n\nPhone finder\n\nButton operation tone on/off\n\nStainless steel band\n\nOne-touch 3-fold clasp\n\nShock resistant\n\n200-meter water resistance\n\n49.8 × 44.4 × 12.8 mm\n\n \n\nStyle: gmb2100bd-1a\n\nColor: Black\n\nMaterial: Stainless steel\n',
    brand: 'G-SHOCK',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllrb9zb60004l818tmhpvloh_4214036__930I8_9pj',
    name: 'Retro 1995 Denali Jacket Moonlight Ivory',
    price: 700,
    description:
      'Season\nFW22\n\nColor\nMOONLIGHT IVORY\n\nRelease Date\n10/25/2022\n\nRetail Price\n$235\n\nProduct Description\nThe KAWS x The North Face Retro 1995 Denali Jacket Moonlight Ivory is made from 100% Recycled Polyester insulated knit fleece.\n\nThis jacket comes in a Midnight Ivory colorway with an abstract design. It has white embroidered KAWS "XX" and THE NORTH FACE branding on the left and right sides of the chest and back. Its also features a high neck, black woven overlays on the chest, sleeves, collar, and back of the yoke, a full-length center front zip, secure-zip chest, and hand pockets, and a woven hem that adjustable, thanks to the shock cord.\n\nThe KAWS x The North Face Retro 1995 Denali Jacket Moonlight Ivory debuted on October 25th, 2022, retailing at $235.',
    brand: 'KAWS x The North Face',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2ma66188joo5c8tl3veg1_6906273__ur0NhY62t',
    name: 'Nike Shox Ride 2 SP Supreme White',
    price: 698,
    description:
      'The Nike Shox Ride 2 Supreme White Grey Fog features a white mesh upper with light grey suede and leather overlays with reflective detailing and webbed paneling. Signature DURAPLUSH tongues and sock liners add maximum comfort for daily wear. Beneath the heel, red Nike Shox units with Supreme branding adds a custom feel.\n\nThe Nike Shox Ride 2 Supreme White Grey Fog released in June of 2022 and retailed for $188.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluzwcovv004achl5mt5bt9n5_1570108__jNG2ZAJML',
    name: 'Kith x Looney Tunes Circle Huddle Rug',
    price: 698,
    description: 'Release Date\n07/13/2020\nRetail Price\n$160',
    brand: 'Kith x Looney',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clr8m0w6800gdjv1753umv3s8_6948733__vz0DRlQOY',
    name: 'Laarvee Silver Precision Steel',
    price: 698,
    description:
      'Reference Number\n\npea001-sblkgrn\nCase Size\n\n45mm\nCase Material\n\nStainless Steel\nBand\n\nStainless Steel\nMovement\n\nAutomatic\nDial\n\nBlack\nRetail Price\n\n$450',
    brand: 'Laarvee',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln731nzg0064l217sk1997aj_7082608__HQwhw95gZ',
    name: 'Sonos Five Speaker ',
    price: 688,
    description:
      "All-new Sonos Five - Experience vividly clear, room-filling sound for music and more with Five, tuned by renowned producer Giles Martin. Enjoy control with the Sonos app, Apple AirPlay 2, and more\nDeep bass - Five's unrivalled acoustic design features 3 high-excursion woofers within a sealed architecture that eliminates reverb and echo\nUltra-wide soundstage - 2 precisely-angled side tweeters create spatial extension and rich stereo sound, while a center tweeter optimizes vocal playback\nSmart stereo sound - Place a single speaker horizontally for stereo sound. Pair 2 speakers in an upright position and each automatically adjusts to mono for more detailed stereo separation and an even wider soundstage\nLine-in and play - Connect your turntable, CD player, or other device directly to Five using the 3.5 millimeter line-in port\nCustomized sound - Trueplay puts the speaker-tuning capability of the pros in the palm of your hands, adapting and optimizing the sound of the speaker to the unique acoustics of the room\nCompatible with the new generation of the Sonos app, Sonos S3\nIncluded components: Product & warranty documentation",
    brand: 'Sonos',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrsljy60000al71790ib5x65_9334227__qyCI3svIR',
    name: 'Louis Vuitton Pocket Organizer Damoflage Green Damoflage Damier',
    price: 687,
    description:
      'Material\nCOATED CANVAS\n\nRetail Price\n$630\n\nColor\nGREEN DAMOFLAGE DAMIER\n\nHardware\nGOLD-TONE\n\nRelease Date\n01/04/2024\n\nStyle\nM83165\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluzwarqg001r4h30vczao8a4_2712501__5otLf48bv',
    name: 'Kith Kithmas Monogram Saffiano Leather Poker Set Stadium',
    price: 687,
    description:
      'Season\nFW23\nColor\nSTADIUM\nRelease Date\n12/08/2023\nRetail Price\n$445\nProduct Description\nThe Kithmas Monogram Poker Set is crafted of custom Kith monogrammed Saffiano leather, with a cowhide leather interior. Featuring Kith-branded multicolor poker chips, along with two Kith-branded card decks and multicolored mixed horn precision dice, the Kithmas Monogram Poker Set comes with everything needed for a complete game.',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt4ogces002dl317kgv1ypgo_5455330__YTP1XKVyY',
    name: 'Saint Laurent Court Classic SL-06 Cream',
    price: 687,
    description:
      'Style\n611106 GUP10 9113\nColorway\nCREAM/BLACK\nRetail Price\n$540\nRelease Date\n07/02/2021',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mdj1pb0002msubfoqpbozm_3343421__MoPVBbTlQ',
    name: 'Goyard Saint Sulpice Black/Natural',
    price: 687,
    description:
      'The Goyard Saint Sulpice in Black/Natural is an elegant cardholder made from the brand’s iconic Goyardine canvas paired with smooth leather accents. This compact and versatile piece offers multiple card slots and a central pocket, making it perfect for carrying essential cards and bills. The Black/Natural color combination adds a refined, classic touch, while its slim design allows for easy storage in pockets or bags. Ideal for those seeking a stylish and functional luxury accessory.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllr4pr9m00c6mr1675rb7s1r_4748883__8Cwcv0Lo7',
    name: 'Chalk Logo Skateboard Deck Set',
    price: 686,
    description:
      "Season\nSS21\n\nRelease Date\n02/18/2021\n\nRetail Price\n$52\n\nProduct Description\nAfter a decade since the duo's last collaboration in 2011, KAWS and Supreme are back for a new set of collectible skate decks. The Supreme KAWS Chalk Logo Skateboard Deck Set showcases the classic KAWS box logo as seen in his prior collaboration with Supreme. This time however, the logo spans the entire width of the decks. These KAWS box logo decks retailed for $52 each and released on February 18th, 2021, selling out quickly as a key piece in the first drop of Supreme's Spring/Summer 2021 season. Cop now to secure this piece of art history.",
    brand: 'Supreme x KAWS',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrsjdmjx008jjy18e1t0jhir_3205088__vRskEYp0B',
    name: 'Louis Vuitton Damier Pop Socks Blue',
    price: 686,
    description:
      'Material\nCOTTON/POLYAMIDE\n\nRetail Price\n$320\n\nColor\nBLUE\n\nRelease Date\n01/04/2024\n\nStyle\nM7351M\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllmpq8c6001wjv16bel36xve_9583118__NFngCrMVL',
    name: 'G-Shock Full Metal Watch Gold',
    price: 686,
    description:
      'Luxe full-metal construction with a screw-back case, bezel, and band crafted in stainless steel creates a streamlined, minimalist design, while protecting the module from impact when dropped. High-density mounting keeps the analog-digital combination module slim, while still providing the advanced functions you love in a compact profile and comfortable fit.',
    brand: 'Casio',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnvywdlr000oml16wfmg37ua_4844909__gwR59iQwM',
    name: 'Gucci New York Yankees Patch Wallet GG Beige/Brick Red',
    price: 685,
    description:
      "Dimensions\n3H 4.5W\n\nMaterial\nCANVAS\n\nRetail Price\n$420\n\nColor\nBEIGE/BRICK RED\n\nSeason\nRESORT 19\n\nProduct Description\nThe Gucci New York Yankees Patch Wallet GG Beige Brick Red is produced out of collaborative relationship between the Italian luxury firm and MLB.\n\nThis bi-fold Yankees Patch Walletis made of high-quality brick red leather, debossed with the GG monogram, and it is marked with a contrasting white raised embroidery NY design. Eight card slots, two side slip pockets, as well as a central bill compartment are all present on the accessory's interior. Patches with the MLB logo and Gucci debossing add extra details.\n\nThe Gucci New York Yankees Patch Wallet GG Beige Brick Red initially retailed at $450 during its market launch in May 16th, 2021.\n\nPlease Note: Dust bag and box are not required for this accessory.",
    brand: 'Gucci x New York Yankees',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsjpu6df003gjt15kf3effff_4545793__kaoFtVnEG',
    name: 'Gallery Dept. x Lanvin Hoodie Multi (Collection 2)',
    price: 684,
    description:
      'Season\nSS22\n\nColor\nMULTI (COLLECTION 2)\n\nRelease Date\n03/15/2022\n\nStyle\nRM-TOG698-JR32-P22S1\n\nRetail Price\n$1,025\n\nProduct Description\nThe Gallery Dept. x Lanvin Hoodie is the result of the collaboration between the Lanvin luxury brand and the Gallery Dept brand.\n​\n​ Gallery Dept. x Lanvin Hoodie is made from 100% cotton. The hoodie features a multi colored splash pattern on its front lower part, on a dark grey base color. The "Lanvin Paris" logo is embroidered on the front and it also has a printed back panel, with the Gallery Dept logo.\n​\n​ The Multi-Collection 2 Lanvin X Gallery Dept hoodie first debuted on the market on the 15th of March, 2022. At this time, the hoodie was selling at a retail price of $1025.',
    brand: 'Gallery Dept. x Lanvin',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clscpa62k00btl4176q3hzuv3_8894164__lFOaBag8H',
    name: "Tod's Dragon leather keyring",
    price: 684,
    description:
      'Made in Italy\n\nHighlights\nred/white\ncalf leather\nengraved logo\ngold-tone hardware\nkeyring attachment',
    brand: "Tod's",
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrslhxue0037l3178f176nva_2312131__t2GKt6mLy',
    name: 'Louis Vuitton Pochette Clés Damoflage Green Damoflage Damier',
    price: 682,
    description:
      'Dimensions\n2.8H 4.7W 0.6D\n\nMaterial\nCOATED CANVAS\n\nRetail Price\n$530\n\nColor\nGREEN DAMOFLAGE DAMIER\n\nHardware\nBLACK & GOLD-TONE\n\nRelease Date\n01/04/2024\n\nStyle\nM83175\n\nSeason\nSS24',
    brand: 'Louis Vuitton',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1mdcrtx0000msub5e7etg4w_2587490__5wlijQbDt',
    name: 'Goyard Saint Sulpice Bordeaux',
    price: 681,
    description:
      'The Goyard Saint Sulpice in Bordeaux is a refined cardholder crafted from the brand’s signature Goyardine canvas with smooth leather trim. Compact and elegant, it features multiple card slots and a central pocket for bills or small items, making it ideal for organizing essentials. The rich Bordeaux color adds a sophisticated touch, while its slim design allows it to fit easily into any pocket or bag. Perfect for those seeking a stylish and functional luxury accessory.',
    brand: 'Goyard',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq0zx2ld00byla15jublopg1_1899265__PwEWL2xNz',
    name: 'Apple AirPods Max Headphones Sky Blue',
    price: 680,
    description:
      "Color\nSKY BLUE\n\nRelease Date\n12/15/2020\n\nRetail Price\n$550\n\nWireless Networking\nBLUETOOTH 5.0\n\nMPN\nMGYL3AM/A\n\nBattery Life\n20 HOURS\n\nOperating System\nIOS, MACOS, IPADOS, WATCHOS, TVOS\n\nPlatform\nAIRPOD MAX\n\nPorts\nMIC, LIGHTNING\n\nProduct Description\nApple introduced the Sky Blue AirPods Max as an over-ear alternative to their popular AirPods wireless earbuds. The Sky Blue AirPods Max are wireless like Apple's AirPods and have noise cancellation like the AirPods Pro. You can use your Sky Blue AirPods Max for up to 20 hours before they need another charge and those wearing the Sky Blue AirPods Max can easily access Siri using their voice. The Sky Blue AirPods Max released in December of 2020 for a retail price of $549.",
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0xg3tzf000212ow2nq140z5_1575598__u_qIH0avn',
    name: 'AirPods Max Orange',
    price: 680,
    description:
      'The AirPods Max are a premium pair of over-ear headphones that deliver immersive audio, active noise cancellation, and comfortable fit. With their sleek design, the AirPods Max are perfect for those who appreciate style and sound quality. Enjoy personalized Spatial Audio, crystal-clear calls with Voice Isolation, and the convenience of hands-free Siri. The AirPods Max feature a comfortable fit, sweat and water resistance, and up to 20 hours of listening time with the charging case. With USB-C charging and a built-in speaker for Find My, AirPods Max offer the ultimate wireless listening experience.\n',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq10cmpj0006jj19lrghv8di_8975607__jSStEGtHE',
    name: 'Apple AirPods Max Headphones Pink',
    price: 680,
    description:
      "Color\nPINK\n\nRelease Date\n12/15/2020\n\nRetail Price\n$550\n\nWireless Networking\nBLUETOOTH 5.0\n\nMPN\nMGYM3AM/A\n\nBattery Life\n20 HOURS\n\nOperating System\nIOS / MACOS / IPADOS / WATCHOS / TVOS\n\nPlatform\nAIRPOD MAX\n\nPorts\nMICROPHONE / LIGHTNING\n\nProduct Description\nApple introduced the Pink AirPods Max as an over-ear alternative to their popular AirPods wireless earbuds. The Pink AirPods Max are wireless like Apple's AirPods and have noise cancellation like the AirPods Pro. You can use your Pink AirPods Max for up to 20 hours before they need another charge and those wearing the Pink AirPods Max can easily access Siri using their voice. The Pink AirPods Max released in December of 2020 for a retail price of $549.",
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq0z551l0074la159zehhs7v_5855864__ixw65UMWG',
    name: 'Apple AirPods Max Headphones Green',
    price: 680,
    description:
      "Color\nGREEN\n\nRelease Date\n12/15/2020\n\nRetail Price\n$550\n\nWireless Networking\nBLUETOOTH 5.0\n\nMPN\nMGYN3AM/A\n\nBattery Life\n20 HOURS\n\nOperating System\nIOS / MACOS / IPADOS / WATCHOS / TVOS\n\nPlatform\nAIRPOD MAX\n\nPorts\nMICROPHONE / LIGHTNING\n\nProduct Description\nApple introduced the Green AirPods Max as an over-ear alternative to their popular AirPods wireless earbuds. The Green AirPods Max are wireless like Apple's AirPods and have noise cancellation like the AirPods Pro. You can use your Green AirPods Max for up to 20 hours before they need another charge and those wearing the Green AirPods Max can easily access Siri using their voice. The Green AirPods Max released in December of 2020 for a retail price of $549.",
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnla54250008mt17m58ak2ox_3697814__r4vUhby6j',
    name: 'GoXLR Broadcaster Platform Multi-channel Mixer',
    price: 680,
    description:
      'Brand: TC-Helicon\nNumber of Channels: 4\nItem Dimensions LxWxH: 15.35 x 8.55 x 4.7 inches\nItem Weight: 4.6 Pounds\nConnectivity Technology: XLR\nMulti-channel mixer: Motorized faders let you control mic, game, music, chat, and more for the perfect Broadcast mix\nStudio quality MIDAS preamp: Make your XLR mic sound great with 48V phantom power, equalizer, compressor, limiter, de-esser, and Gate\nSampler: Record samples on-the-fly or load your own audio files to engage and entertain your community\nVoice FX: Add reverb, echo, pitch shift, megaphone, Robot, and hard tune to your voice in real time\nGoXLR Windows app: You’re in control with basic and advanced audio parameters, sample import, and voice FX preset library. App required for functionality.\nOfficially supported on Windows 7, 8, 10, 11. No official Linux support. No macOS support.',
    brand: 'TC-Helicon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltt6qf0w001zh113gscz4t6x_1488301__CcI9bsavk',
    name: 'Nike Phantom GX Elite SE FG Thunder Pack',
    price: 680,
    description:
      'Style\nFD0565-500\nColorway\nFUCHSIA DREAM/BARELY GRAPE\nRelease Date\n12/04/2023',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq10gmvo000hju173g4m7vr9_2748546__QG2RHulLl',
    name: 'Apple AirPods Max Headphones Black',
    price: 680,
    description:
      "Color\nSPACE GRAY\n\nRelease Date\n12/15/2020\n\nRetail Price\n$549\n\nWireless Networking\nBLUETOOTH 5.0\n\nMPN\nMGYH3AM/A\n\nBattery Life\n20 HOURS\n\nOperating System\nIOS, MACOS, IPADOS, WATCHOS, TVOS\n\nPlatform\nAIRPOD MAX\n\nPorts\nMIC, LIGHTNING\n\nProduct Description\nApple introduced the Space Gray AirPods Max as an over-ear alternative to their popular AirPods wireless earbuds. The Space Gray AirPods Max are wireless like Apple's AirPods and have noise cancellation like the AirPods Pro. You can use your Space Gray AirPods Max for up to 20 hours before they need another charge and those wearing the Space Gray AirPods Max can easily access Siri using their voice. The Space Gray AirPods Max released in December of 2020 for a retail price of $549.",
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0xfx90j00061315dv52toj5_2547737__Zl1auckJV',
    name: 'AirPods Max Blue',
    price: 680,
    description:
      'The AirPods Max Blue are a premium pair of over-ear headphones that deliver immersive audio, active noise cancellation, and comfortable fit. With their sleek blue design, the AirPods Max are perfect for those who appreciate style and sound quality. Enjoy personalized Spatial Audio, crystal-clear calls with Voice Isolation, and the convenience of hands-free Siri. The AirPods Max feature a comfortable fit, sweat and water resistance, and up to 20 hours of listening time with the charging case. With USB-C charging and a built-in speaker for Find My, AirPods Max offer the ultimate wireless listening experience.\n',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0xg0tib000012owhgjq5ec7_9575645__-B45UzEHX',
    name: 'AirPods Max Purple',
    price: 680,
    description:
      'The AirPods Max are a premium pair of over-ear headphones that deliver immersive audio, active noise cancellation, and comfortable fit. With their sleek design, the AirPods Max are perfect for those who appreciate style and sound quality. Enjoy personalized Spatial Audio, crystal-clear calls with Voice Isolation, and the convenience of hands-free Siri. The AirPods Max feature a comfortable fit, sweat and water resistance, and up to 20 hours of listening time with the charging case. With USB-C charging and a built-in speaker for Find My, AirPods Max offer the ultimate wireless listening experience.\n',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0xg2bob000112ow26njuc1n_5737305__hnEDaJY9x',
    name: 'AirPods Max Starlight',
    price: 680,
    description:
      'The AirPods Max are a premium pair of over-ear headphones that deliver immersive audio, active noise cancellation, and comfortable fit. With their sleek design, the AirPods Max are perfect for those who appreciate style and sound quality. Enjoy personalized Spatial Audio, crystal-clear calls with Voice Isolation, and the convenience of hands-free Siri. The AirPods Max feature a comfortable fit, sweat and water resistance, and up to 20 hours of listening time with the charging case. With USB-C charging and a built-in speaker for Find My, AirPods Max offer the ultimate wireless listening experience.\n',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluzvh68n000414nkl5e4gdcw_9427945__pWux5f7G-',
    name: 'Kith Kithmas Poker Set Stadium',
    price: 680,
    description:
      'Season\nFW22\nColor\nSTADIUM\nRelease Date\n12/10/2022\nRetail Price\n$375\nDimensions\n7.75 X 12 X 3 IN',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m7ge17yqoo5cqqyitwbe_6067322__rL3saIV-V',
    name: 'Apple AirPods Max Headphones White',
    price: 680,
    description:
      ' Apple-designed dynamic driver provides high-fidelity audio﻿\nActive Noise Cancellation blocks outside noise, so you can immerse yourself in music﻿\nTransparency mode for hearing and interacting with the world around you﻿\nSpatial audio with dynamic head tracking provides theater-like sound that surrounds you﻿\nComputational audio combines custom acoustic design with the Apple H1 chip and software for breakthrough listening experiences﻿\nDesigned with a knit-mesh canopy and memory foam ear cushions for an exceptional fit﻿\nMagical experience with effortless setup, on-head detection, and seamless switching between devices﻿\nEasily share audio between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV﻿\n20 hours of listening, movie watching, or talk time with Active Noise Cancellation and spatial audio enabled﻿\nStore in ultra low-power mode with the slim Smart Case﻿',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1qs0kyp00033ejghwmfviek_5644686__MnCf7e7ZF',
    name: 'Creed Delphinus 100ml',
    price: 680,
    description:
      'Creed Delphinus 100ml is a luxury fragrance known for its refined blend of notes that exude elegance and sophistication. The scent profile features a harmonious mix of citrus, florals, and warm base notes, delivering a well-balanced aroma that is both timeless and versatile. Ideal for those who appreciate a fragrance with depth and character, this perfume is crafted with Creed’s renowned attention to detail and quality. Its 100ml size makes it perfect for daily use or special occasions.',
    brand: 'Creed',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0xg5lcy000312owekh1ennb_6477633__Zfd0niFSc',
    name: 'AirPods Max Midnight',
    price: 680,
    description:
      'The AirPods Max are a premium pair of over-ear headphones that deliver immersive audio, active noise cancellation, and comfortable fit. With their sleek design, the AirPods Max are perfect for those who appreciate style and sound quality. Enjoy personalized Spatial Audio, crystal-clear calls with Voice Isolation, and the convenience of hands-free Siri. The AirPods Max feature a comfortable fit, sweat and water resistance, and up to 20 hours of listening time with the charging case. With USB-C charging and a built-in speaker for Find My, AirPods Max offer the ultimate wireless listening experience.\n',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqyfa8yi007vl3176uqkmme2_4231271__oLnnc4yY1',
    name: 'Gucci G-Timeless',
    price: 678,
    description:
      'Reference Number\n\n529694 I86A0 8587\nCase Size\n\n38mm\nCase Material\n\nYellow Gold\nBand\n\nLeather\nMovement\n\nQuartz\nDial\n\nBrown\nRetail Price\n\n$1,100',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt4o64sz019rl217f0z9loib_555346__tYmTrstii',
    name: 'Saint Laurent Uptown Pouch Grain de Poudre Embossed Black',
    price: 678,
    description:
      'Dimensions\n6.2H 10.6W 0.7D\nMaterial\nLEATHER\nRetail Price\n$595\nColor\nBLACK\nHardware\nGOLD-TONE\nStyle\n5657391GF0J1000',
    brand: 'Saint Laurent',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clr8e2cr700ftl616i2ljiadx_1143819__P9Y9UkJDMP',
    name: 'Palace Hairy Camo KnitWater',
    price: 677,
    description: 'Season\n\nFW23\nColor\n\nWater\nRelease Date\n\n12/01/2023',
    brand: 'Palace ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpg333ki000oju17ehw46wid_8612704__ZO0ed2SLB5',
    name: 'Segway Ninebot Electric Kick Scooter',
    price: 677,
    description:
      '300W Motor, 15.5-28 Mi Range & 15.5-19 MPH, 8" Solid Tires, External Battery \n\n\n    Product Note: Max speed and range per charge vary based on several factors, including: rider weight, riding surface, incline, ambient temperature, battery level, riding style (stop/start vs cruising), etc.\n    Enhanced Performance: The Ninebot by Segway KickScooter ES2 boasts a 300w motor for speeds up to 15 mph and a range of up to 15 miles, accommodating riders up to 220 lbs.\n    Convenient Portability: Weighing just 27.6 lbs (12.5 kg) and featuring a one-click folding system, it\'s effortlessly carried with one hand, your ideal lightweight travel companion.\n    Ultimate Riding Comfort: Equipped with front and rear wheel shock absorbers and solid tires, this scooter offers a smooth and comfortable ride.\n',
    brand: 'Segway',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63dd9a1a0833b3f42b92f2f3.png',
    name: 'Off-White x Jordan Hoodie White',
    price: 677,
    description:
      "Off-White and Jordan returned to their collaborative apparel partnership in February of 2021 with the release of a hoodie, t-shirt, and pants that closely resemble the apparel of previous drops.\n\nThis Off-White Jordan Hoodie shares a striking resemblance to the black version that released for All-Star Weekend in 2020. Featuring the same design, 2021's hoodie was delivered in a white colorway and will pair well with the Off-White Jordan 5 Sail's released in 2020.\n\nThe Off-White x Jordan Hoodie in white was released at a retail price of $350 USD on February 8th, 2021.",
    brand: 'Off White',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljt37wfj001tl608p8i8ux4z_3236787__OJZqcjY3K',
    name: 'Ladies Diamond Necklace with Rainbow Multi-Colored Sapphires 0.85 Carats',
    price: 675,
    description:
      'Metal Type\t\n14 Karat Rose Gold\n\nStone One Carat Weight\t\n0.85 Carats\n\nStone Two Carat Weight\t\n0.22 Carats\n\nStone Two Type\t\nRound Diamond\n\nStone One Type\t\nMulti Sapphire',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqyf8nir0021l6170jilqp0f_5577571__B-b_7rC00',
    name: 'Gucci G-Timeless',
    price: 675,
    description:
      'Reference Number\n\n561380 I86A0 1000\nCase Size\n\n38mm\nCase Material\n\nSteel/Yellow Gold\nBand\n\nLeather\nMovement\n\nQuartz\nDial\n\nBlack\nRetail Price\n\n$1,100',
    brand: 'Gucci',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv06db6l000g119rstfctea8_1207435__2fKO_03eV',
    name: 'Kith for Scrabble Board Game Nocturnal',
    price: 674,
    description:
      'Season\nFW22\nColor\nNOCTURNAL\nRelease Date\n12/10/2022\nRetail Price\n$375\nDimensions\n16.73 W X 16.73 L X 3.77 IN',
    brand: 'Kith',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwu04a60000jq15uqv47b5g_5529877__k0Qduw55p',
    name: '1-800-Flowers.com eGift Card',
    price: 200,
    description:
      'From truly original designs to exclusive signature collections, as well as beautiful plants for every occasion, 1-800-Flowers.com delivers smiles in every imaginable way. The world\'s leading florist offers the best of both worlds: exquisite, florist-designed arrangements individually created by some of the nation\'s top floral artists and hand-delivered the same day, and spectacular flowers shipped overnight "Fresh From Our Growers." This gift card can also be redeemed at any of 1800Flowers.com nine brands.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cly125az000ce12andelii9b4_4680700__xSFXrCS4f',
    name: 'G-shock Beach Time Lapse Series',
    price: 200,
    description:
      'The Casio GA-2100TLS-8AJF G-SHOCK BEACH TIME LAPSE Series is a stylish and durable timepiece, part of the 2024 Japan import collection. This watch features a sleek grey resin case and strap, combining the iconic G-SHOCK toughness with a modern beach-inspired design. It offers superior shock resistance and water resistance, ideal for active and adventurous lifestyles. Key features include an analog-digital display, stopwatch, countdown timer, and alarm, all presented on a clear, easy-to-read screen. The GA-2100TLS-8AJF is the perfect blend of functionality and contemporary aesthetics, making it a reliable and fashionable accessory for any occasion.',
    brand: 'Casio',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwusrjg001jkv188ejl0b7o_735936__T_EsP3smh',
    name: 'Ruth’s Chris Steak House eGift Card',
    price: 200,
    description:
      'At Ruth’s Chris Steak House, your last bite is just as good as your first. Each ofour USDA Prime steaks is seared to perfection, finished with butter and freshlychopped parsley, and served sizzling on a 500-degree plate–just the way Ruthliked it. Enjoy steakhouse favorites and more alongside an award-winning,world-class wine list, signature handcrafted cocktails and house-prepareddesserts.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwxvlch000mji179riopgyt_9245313__3nJfR6mxl',
    name: 'Hotels.com eGift Card',
    price: 200,
    description:
      '\nThe Hotels.com Gift Card is redeemable towards bookings at hundreds of thousands of places to stay in 200 countries and territories, ranging from international chains and all-inclusive resorts to local favorites and bed & breakfasts. Redeemable on Hotels.com, the Hotels.com Gift Card can be used in conjunction with member-only deals and promotions. Bookings with the Hotels.com Gift Card count toward free nights with Hotels.com® Rewards where customers can earn a free* night for every 10 nights stayed. For more information visit www.hotels.com/giftcards or e-mail giftcards@hotels.com. *Subject to Hotels.com Rewards terms and conditions, as set out at www.Hotels.com.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clot2qj5j0000jp17b99q8qdd_983491__fsn8FcnaR',
    name: 'Starbucks eGift Card',
    price: 200,
    description:
      'There’s always a Starbucks in reach, so a Starbucks Card is the perfect gift for everyone. You can easily send Starbucks eGifts with relevant designs for any occasion you’re celebrating, whether it’s saying thanks, recognizing an achievement, or simply letting someone know you are thinking of them.',
    brand: 'Starbucks',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clzvtl2zu00lo2no9crcdo9tx_5477792__y7UnezlH5',
    name: 'Amazon.com eGift Card',
    price: 200,
    description:
      'Amazon.com Gift Cards never expire and carry no fees.\nMultiple gift card designs and denominations to choose from.\nRedeemable towards millions of items store-wide at Amazon.com or certain affiliated websites.',
    brand: 'Amazon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq6oqg1m0000l816sedxng9m_2761534__syBf4Qb5-',
    name: 'Amazon Gift Card in a Birthday Pop-Up Box ',
    price: 200,
    description:
      '\n    Gift Card is affixed inside a box\n    Gift amount may not be printed on Gift Cards\n    Gift Card has no fees and no expiration date\n    No returns and no refunds on Gift Cards\n    Gift Card is redeemable towards millions of items storewide at Amazon.com\n    Scan and redeem any Gift Card with a mobile or tablet device via the Amazon App\n    Free One-Day Shipping (where available)\n    Customized gift message, if chosen at check-out, only appears on packing slip and not on the actual gift card or carrier\n',
    brand: 'Amazon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxrw60cv00tflq2swr40gedk_4692986__CpG4cXoX5',
    name: 'AMIRI Core Logo trucker hat',
    price: 200,
    description:
      'black cotton curved peak embroidered logo to the front mesh panelling rear press-stud fastening\nMade in United States\nComposition\npure cotton 100%, Mesh 100%',
    brand: 'AMIRI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljv0e9el000aml08i9xtnhw0_2498213__MHYPwpnDP',
    name: 'adidas Yeezy Slide Ochre',
    price: 200,
    description:
      'The adidas Yeezy Slide Ochre is constructed entirely of EVA foam in a monochromatic fashion. A soft footbed offers immediate step-in comfort for daily wear. From there, deep groove treads on the sole provide traction and support.\n\nThe adidas Yeezy Slide Ochre released in December of 2021 and retailed for $60.',
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv8cxv6a0i023h6b366glubd_6775542__8F15DsKNq',
    name: 'Elgato Key Light',
    price: 200,
    description:
      'Wi-Fi Enabled: switch on/off and fine-tune light settings via the desktop app.\n2800 Lumens: illuminate your entire workspace and dim down to a subtle glow.\n2900 – 7000 K: change color temperature from sunset amber to arctic blue.\n160 OSRAM LEDs: impressively low heat compared to soft boxes.\nOpal Glass Face: evenly balanced; glare-free diffusion.',
    brand: 'Elgato',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm04gotk7000b13p1e3foe5v9_3918541__slxbQD9Fy',
    name: 'LEGO eGift Card',
    price: 200,
    description:
      "The LEGO eGift Card is the perfect gift for any LEGO enthusiast, offering the flexibility to choose from a wide range of sets, accessories, and more. Whether for a birthday, holiday, or special occasion, this eGift card allows recipients to explore their creativity and build their dream LEGO creations. Easy to redeem online, it's a thoughtful and convenient present for fans of all ages.",
    brand: 'LEGO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpft93dz0038jv17r27emv7g_3797907__CzvzsDbSE',
    name: 'Southwest Airlines Gift Card',
    price: 200,
    description:
      '\n    This item has a quantity limit of 2 units per customer per week\n    Give the gift of travel.\n    A perfect gift for any occasion.\n    Amazon.com Gift Cards cannot be used as a method of payment for this item.\n    No returns and no refunds on gift cards.\n',
    brand: 'Southwest Airlines',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv1gghyg0i8v1214kvrj34kk_2355636__s-_gu9qUXO',
    name: 'Kith x Marvel X-Men Wolverine Skateboard Deck',
    price: 200,
    description:
      'Release Date\n07/28/2023\nRetail Price\n$85\nDimensions\n8.0 X 31.75 IN',
    brand: 'Kith x Marvel X-Men',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwtf0s700c4l5164nblmhmm_5594698__PPts_IJO0',
    name: '1-800-Baskets.com eGift Card',
    price: 200,
    description:
      '1-800-Baskets.com® has a large selection of expertly designed and thoughtfully crafted gift baskets including fruits, gourmet foods, snacks, candies, and spa and wellness gifts perfect for such occasions as anniversaries, birthdays, housewarmings, new babies, career achievements, sympathy sentiments, and get well wishes. This gift card can also be redeemed at any of 1800Flowers.com nine brands.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw4isowq02u43d7zs2kux35s_3061639__m8fCwP5bs',
    name: 'Tesla Short Shorts Red',
    price: 200,
    description:
      'Season\nSS20\nColor\nRED\nRelease Date\n07/05/2020\nRetail Price\n$69',
    brand: 'Tesla',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq78wpjx00gxlc189ikqwhjm_5676064__5ibQAdoFC',
    name: 'Roblox Digital Gift Code',
    price: 200,
    description:
      'Get a virtual item when you redeem a Robux digital code!\nSpend your Robux on new items for your avatar and additional perks in your favorite experiences.\nThe ultimate gift for any Roblox fan.\nDiscover millions of free experiences on Roblox. Explore, chat, and hang out with friends on your computer, phone, tablet, Xbox console, Oculus Rift, or HTC Vive.\nNote: This product grants Robux and can be redeemed by any user worldwide. It is not a standard Roblox Gift Card and cannot be used for a Roblox Premium purchase.\n',
    brand: 'Roblox ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln5ll8q10008mg16drndmyn2_9804720__nCaIZDRQk',
    name: 'Steam Gift Card',
    price: 200,
    description:
      'Steam Gift Cards work just like a gift certificate, while Steam Wallet Codes work just like a game activation code. Can be redeemed on Steam for the purchase of games, software, wallet credit, and any other item you can purchase on Steam.',
    brand: 'Steam',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvmr2i3d01zzrbycklssm6zc_7352906__wO7IS-sRM',
    name: 'Coach Womens Signature Leather Chain Crossbody',
    price: 200,
    description:
      'Editors Notes: Our Chain crossbody is a sophisticated style finished with a sleek turnlock closure & a detachable long strap for shoulder or crossbody wear\nSignature Leather: The best kind of mix up. This rich, mixed leather bag combines embossed leather paired with smooth leather - for a perfectly sophisticated Coach crossbody\nOn-the-go Essentials: This zippered small crossbody features ten credit card slots, a full-length bill compartment, inside zip pocket and a turnlock closure to keep essentials secure\nIt\'s All in the Details: Ten credit card slots, Full-length bill compartment, Inside zip compartment, Turnlock closure, fabric lining, Detachable wrist strap, Outside slip pocket, Detachable long strap with 22" drop, 8"(L) x 5"(H) x 3/4"(W)"\nThis is COACH: Having the courage to be real since 1941. COACH is the Original American House of Leather - with a legacy of craft and a community that champions the courage to live authentically',
    brand: 'Coach',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmjsgc600000l715qtxm90wn_720962__x99FDsVyR',
    name: 'NERF Aliens M41-A Blaster',
    price: 200,
    description:
      'Season\nFW21\n\nRelease Date\n10/31/2021\n\nRetail Price\n$95',
    brand: 'NERF',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhn0yru00ebt85mfemzb3f0_8897398__HhW0QJwcL',
    name: 'Virgil Abloh x IKEA MARKERAD EU Duvet Cover and 1 Pillowcase',
    price: 200,
    description:
      "Color\nGRAY\nRelease Date\n11/01/2019\nRetail Price\n$50\nDimensions\n150X200CM OR 59X79IN\nProduct Description\nVirgil Abloh's long anticipated IKEA Markerad collection finally released after much speculation on November 1st, 2019. The capsule featured over a dozen items designed by Abloh and released at IKEA locations globally. Frenzy surrounded the drop as customers lined up for hours, and some locations even saw hopeful buyers frantically running into the store to secure their items. This Bedding Set retailed for $50 and includes a duvet cover and one matching pillowcase. Place a Bid today to get a piece of one of the best collaborations of 2019.",
    brand: 'Virgil Abloh x IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz7gjv3000ktw62zp16c49s6_995772__kMUDNSVyV',
    name: 'Nike SB Team USA Olympics S/S Bowler Shirt Obsidian/White',
    price: 200,
    description:
      'The Nike SB Team USA Olympics S/S Bowler Shirt in Obsidian/White is a stylish and unique piece designed to celebrate the Olympic spirit. This short-sleeve bowler shirt features a sleek obsidian base color with crisp white accents, creating a clean and sophisticated look. Made from high-quality materials, it offers comfort and durability for both casual wear and athletic activities. The shirt is adorned with Olympic-themed details and Team USA branding, making it a perfect choice for fans looking to show their support in style. Ideal for those who appreciate a blend of sporty and fashionable elements, the Nike SB Team USA Olympics S/S Bowler Shirt is a standout addition to any wardrobe.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltbwhs3d00cmjv17rzslc135_3229024__1be5bwYqQT',
    name: "BAPE Women's Baby Milo Mini Fur Backpack Brown",
    price: 200,
    description:
      'Season\nSS24\nColor\nBROWN\nRelease Date\n02/10/2024\nStyle\nAJ70-489-006\nRetail Price\n$85',
    brand: 'BAPE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvvv3gbn12sr5op4bqqo00yp_6416417__cDSEVkwPA',
    name: 'Tory Burch graphic-print bikini bottom',
    price: 200,
    description:
      'ivory white/multicolour\nstretch-design\nall-over graphic print\nelasticated waistband\nclassic bottoms\nBe mindful to try on swimwear over your own garments.\nComposition\nLining: Nylon 72%, Lycra 28%\nOuter: Nylon 71%, Lycra 29%',
    brand: 'Tory Burch',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm00hihv802rf7wtx77vdnguf_545391__K8gItpF-z',
    name: 'G-SHOCK Gbx100-2',
    price: 200,
    description:
      'GBX-100 series \n\nResin and stainless steel composition\n\nWorld time\n\n1/100-second stopwatch\n\n4 daily alarms\n\nHourly time signal\n\nButton operation tone on/off\n\n12/24-hour format\n\nMineral glass\n\nResin band\n\nShock resistant\n\n200-meter water resistance\n\nBattery life: 2 years approx on CR2032\n\nSmartphone link feature through Bluetooth and Apps\n\nPhone Finder\n\nDial size: L 50.9 × W 46.0 × H 14.7 mm\n\nWeight: 66 grams\n\n \n\nStyle: gbx100-2\n\nMaterial: Resin / Stainless steel',
    brand: 'G-SHOCK',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2jdpt0zd9oo5cjrddasfk_1483922__e6uQBtEo5',
    name: 'Pink Laptop',
    price: 199,
    description: '',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp084rgw000wjo1660z15xmi_6768021__okUss5mHGq',
    name: 'Fear of God Essentials Pullover Hoodie Stretch Limo/Black',
    price: 199,
    description:
      "Season\nMULTIPLE\n\nColor\nSTRETCH LIMO/BLACK\n\nStyle\n192250500599454/192BT212110F\n\nRetail Price\n$90\n\nProduct Description\nThe Fear of God Essentials Pullover Hoodie FW22 Stretch Limo Black is a must-have for any fashion-forward individual. Made from a blend of cotton and polyester, this hoodie is both comfortable and durable. The stretchy material ensures a perfect fit, while the black color gives it a sleek and stylish look. This hoodie features a classic pullover design with a drawstring hood and a kangaroo pocket. The Fear of God Essentials logo is printed on the chest, adding a touch of branding to the overall design. The ribbed cuffs and hem provide a snug fit, keeping you warm and cozy during colder weather. At a retail price of $90, the Fear of God Essentials Pullover Hoodie FW22 Stretch Limo Black is an affordable option for those looking to elevate their wardrobe. It's versatile enough to be worn with jeans, joggers, or even shorts, making it a great addition to any outfit. Something we love about Fear of God Essentials Pullover Hoodie FW22 Stretch Limo Black is its understated yet stylish design. Our experts think the best features are the stretchy material and the ribbed cuffs and hem, which provide a comfortable and snug fit. Overall, we love the Fear of God Essentials Pullover Hoodie FW22 Stretch Limo Black for its versatility and affordability.",
    brand: 'Fear of God',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls9edpe00059jr188gjt9m1p_2717256__aGVmyMUJy',
    name: 'ZEISS Optical Inserts',
    price: 199,
    description:
      '\nThere are two types of ZEISS Optical Inserts: Prescription and Readers. And each type is sold as a pair designed to work with Apple Vision Pro. Answer a few questions and we’ll tell you which type you need.\n\nZEISS Optical Inserts and Apple Vision Pro Light Seal are designed to work together.\nIf you already bought Apple Vision Pro and now want to purchase optical inserts, then you may need to purchase a new Light Seal.',
    brand: 'ZEISS',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv8d7ak10j253h6bwj638fs0_4486627__e380Ym1Z9',
    name: 'Elgato Green Screen',
    price: 198,
    description:
      'Color\tGreen\nSize\tCollapsible (58.27 x 70.87 in)\n\nItem Weight\t20.5 Pounds\nInstant Immersion: portable chroma key panel optimized for webcam background removal.\nSuperior Screen: durable wrinkle-resistant fabric guarantees the cleanest key you can get.\nPop-Up Tech: simply lift and let the pneumatic x-frame automatically lock the screen in place.\nConcealable Design: retract into the aluminum hard case and stash out of sight.\nUltra-quick setup and teardown',
    brand: 'Elgato',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltbuul3200kvi7160jwmx41x_9729334__MMQvY5k5yY',
    name: 'Supreme The North Face Split Waist Bag Camo',
    price: 198,
    description:
      'Season\nSS24\nColor\nCAMO\nRelease Date\n02/29/2024\nRetail Price\n$118',
    brand: 'Supreme x The North Face',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ze45ix0000pen9kw8kfuvo_8906559__4j2bdX8dm',
    name: 'John Doe Rising Prop',
    price: 198,
    description:
      'Is John Doe really dead? He eerily rises from the dead gasping for his last breath! You would think he is alive once more...but is he? Features include sound and footpad activation slow rising customizable toe tag eerie sounds and can be used with any MIT trigger. Uses 4 AA batteries not included or one 6v2a adapter.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmp4yl6l0008mm155geyjmv9_1830596__qTgkBUahu',
    name: 'Flower Plush 30CM Blue/White/Brown',
    price: 198,
    description:
      'Season\nFW17\n\nColor\nBLUE/WHITE/BROWN\n\nRelease Date\n11/04/2017\n\nRetail Price\n$90',
    brand: 'Takashi Murakami ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp03zack003dl9179w54899q_803537__FnwgLshPxJ',
    name: 'New Balance 550 White Green',
    price: 196,
    description:
      'Style\nBB550WT1\n\nColorway\nWHITE/GREEN\n\nRetail Price\n$120\n\nRelease Date\n06/24/2021\n\nProduct Description\nThe New Balance 550 White Green features a smooth white leather upper with a grey suede toe wrap and green detailing. From there, a New Balance Basketball woven tongue label and matching sole completes the design.\n\nThe New Balance 550 White Green released in June of 2021 and retailed for $120.',
    brand: 'New Balance',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsm519ls0022la16f8xlvrxa_66838__uMIby3aht',
    name: 'Fragment x Steiff Teddy Bear',
    price: 196,
    description: 'Dimensions\n26 CM',
    brand: 'Fragment x Steiff',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllwrfpu50000lb17mqfc4isn_4053069__P6Dl1Xsk-',
    name: 'mascot ss tee cream (fw22)',
    price: 196,
    description:
      'Season\nFW22\n\nColor\nCREAM (FW22)\n\nRelease Date\n09/22/2022\n\nStyle\nDH-HJ2121-MCCM\n\nRetail Price\n$60',
    brand: 'drew house',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2gwiy0ru7oo5c1punrgvh_8134605__dvlPbzkFU',
    name: 'Rapid Fire Custom Standard Modded Controller Skulls White',
    price: 195,
    description:
      'ModdedZone introducing the MOST advanced Custom Xbox One Modded Controllers on the market. Control, adjust, add mods via an MZ TITAN APP. 100% ORIGINAL XBOX ONE CONTROLLER. We use only authentic controllers to build our modded controllers',
    brand: 'MODDEDZONE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxghgm5w0fms13mtlbp3lsdu_4928374__yjqvb5XXk',
    name: 'Casablanca logo-embroidered cap',
    price: 195,
    description:
      'Casablanca leaves its signature mark on this cap in the form of contrasting logo embroidery across the front for a recognisable finish.\nImported\nComposition\nCotton 100%',
    brand: 'Casablanca',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsuujvzm000ckz1740athxay_557698__zOMArjhI5',
    name: 'Anti Social Social Club Twister Hoodie (FW19) Black',
    price: 195,
    description:
      "Season\nFW19\n\nColor\nBLACK\n\nRetail Price\n$69\n\nProduct Description\nPlease note: The original NFC enabled retail tag must be attached in order to sell your apparel item.\n\nAnti Social Social Club's FW19 Twister Hoodie is similar to that of the Twister T-shirt in that it features a lightning struck ASSC logo on both the front and the back of the garment. This Anti Social Social Club hoodie released in FW19 for a retail of $69 USD. The blue lightning striking the ASSC logo was redone in SS20 in t-shirt form by Anti Social Social Club with the Save Your Tears tee, which used red lightning instead.",
    brand: 'Anti Social Social Club',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq6ruxtx003hjt16b8cqs9tw_2416449__o6DTR-khB',
    name: 'Kate Spade Carson Convertible Crossbody Handbag ',
    price: 195,
    description:
      '6.87"h x 9.12"w x 2.56"d handle drop: 6.75" strap drop: 22" saffiano metal pinmount logo interior: back slip pocket exterior: back slip pocket flap with magnetic snap closure dust bag not included imported',
    brand: 'Kate Spade',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clml60nx8000hl817gpleu8y6_6083198__SlnugurwX5',
    name: 'Takashi Murakami x FaZe Clan 2XL Mousepad Red',
    price: 194,
    description:
      'Season\nSS21\n\nColor\nRED\n\nRelease Date\n06/28/2021\n\nRetail Price\n$75\n\nDimensions\n35.43 X 15.75 IN\n\nProduct Description\nFaZe Clan teamed up with world renowned artist Takashi Murakami for a new collection for the Summer of 2021. The duo released their collection that features mousepads and gaming jerseys exclusively through the FaZe Clan website and NTWRK App. The 2XL Mousepad measures 35.43 x 15.75 inches and depicts a classic Takashi Murakami print of flowers and skulls with a FaZe logo in the lower right corner.\n\nThe Takashi Murakami x FaZe Clan 2XL Red Mousepad released June 28, 2021 with a retail price of $75.',
    brand: 'Takashi Murakami x FaZe Clan',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp07fcaw0000jx17hscvpq2x_9476696__to8rM8leQ',
    name: 'Nike SB Dunk Low Pro White Gum',
    price: 194,
    description:
      'Style\nCD2563-101\n\nColorway\nWHITE/BLACK/WHITE/GUM LIGHT BROWN\n\nRetail Price\n$110\n\nRelease Date\n03/01/2023\n\nProduct Description\nNike SB is launching into 2023 with the release of the Nike SB Dunk Gum Pack. Nike’s Gum Pack features the Nike SB Dunk Low Pro in White Gum and Black Gum colorways.\n\nThe Nike Sb Dunk Low Pro White Gum is constructed using premium tumbled leather across the uppers, and black nubuck swooshes. The sneakers sit on top of a gum colored outsole, and feature black Nike branding on the heel, tongue, and insoles.\nThe Nike SB Dunk Low Pro White Gum released March 1, 2023, with a retail price of $110.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv1gldy60iy21214u75qaepc_1336989__-ugqjPr_Z',
    name: 'Kith x The Notorious B.I.G Life After Death Poster Black',
    price: 194,
    description: 'Color\nBLACK\nRelease Date\n03/08/2021\nRetail Price\n$20',
    brand: 'Kith x The Notorious B.I.G',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluod6dew0172js153t862q33_9824076__vjzdSFk8-',
    name: 'Takashi Murakami ComplexCon Flower Ashtray Black',
    price: 194,
    description:
      "Season\nFW19\nColor\nBLACK\nRelease Date\n07/20/2019\nRetail Price\n$20\nProduct Description\nReleased during ComplexCon in July of 2019, the Takashi Murakami Flower Ashtray has been an affordable collectible since it's release. The ashtray features Murakami's classic flower in a white outline on the inside of the tray. This item carried an original retail price of $20. Place a Bid today to smoke in style.",
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnaw16360033k018m7wl0t0b_9867998__pCykgGPgt',
    name: "Nike Air Force 1 Mid '07 LX Halloween (2022)",
    price: 194,
    description:
      'Style\nDQ7666-001\n\nColorway\nOFF NOIR/OFF NOIR-BLACK-LIGHT SMOKE GREY\n\nRetail Price\n$150\n\nRelease Date\n10/27/2022',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsi2qano006yl017kmruyvq7_1196783__ds6snlTli',
    name: 'Toronto Raptors Road 1998-99 Vince Carter Swingman Jersey',
    price: 194,
    description:
      'Season\nSS23\n\nColor\nPURPLE\n\nStyle\nSMJYGS18214-TRAPURP98VCA\n\nRetail Price\n$135',
    brand: 'Mitchell & Ness',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv0di4j801hxd8cf0mh3k2zw_5671010__TT9GQXyqf',
    name: 'Kith x Peanuts Snoopy Doghouse Plush Multicolor',
    price: 194,
    description:
      'Season\nFW23\nColor\nMULTICOLOR\nRelease Date\n12/08/2023\nRetail Price\n$95',
    brand: 'Kith x Peanuts Snoopy',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp1rk9br000wl617j4s8q2i4_311517__7ZBqecCuU',
    name: 'Fear of God Essentials Hoodie Smoke',
    price: 193,
    description:
      'Season\nFW22\n\nColor\nSMOKE\n\nRelease Date\n08/24/2022\n\nRetail Price\n$100\n\nProduct Description\nThe Fear of God Essentials Hoodie Smoke comes in long sleeves and it has an oversized fit. The color of this hoodie is smoke.\n\nThis clothing item by Fear of God Essentials also has an attached hood, a rubber-branded logo on it, as well as a graphic inscription with the word "ESSENTIALS" in big font on the front. Eighty percent of the hoodie is cotton, while the remaining twenty percent is polyester. Additionally, the sweater has a Kangaroo-front pocket and a FOG graphic. The design is completed with ribbed cuffs and a hem.\n\nThe Fear of God Essentials Hoodie Smoke was release on September 28, 2022, with a suggested retail price of $100.',
    brand: 'Fear of God',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp950axy00h2jr17czst1hy2_1158450__44cfHRUE_',
    name: 'Nike Air Max 90 Snowflake',
    price: 193,
    description:
      'Style\nDQ0789-001\n\nColorway\nWOLF GREY/COPA/COOL GREY\n\nRetail Price\n$140\n\nRelease Date\n03/07/2022',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz7d4okq0014osjt1ogfpaue_419887__phcgH1a5F',
    name: 'Kith Olympics Heritage Atlanta Basketball Vintage Tee Black',
    price: 192,
    description:
      'The Kith Olympics Heritage Atlanta Basketball Vintage Tee in Black is a stylish and nostalgic piece that pays homage to the Atlanta Olympics. This vintage-inspired tee features a classic basketball graphic and Olympic-themed detailing, making it a perfect blend of sporty and retro aesthetics. Crafted from high-quality materials, it offers a comfortable fit and durable wear. Ideal for fans of both basketball and Olympic history, the Kith Olympics Heritage Atlanta Basketball Vintage Tee is a standout addition to any casual wardrobe, celebrating a memorable moment in sports history with timeless style.',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp06z6cl0000l016fjh7i4fw_2121982__fq6mND9jc',
    name: 'Nike Dunk High Panda Black White (2021)',
    price: 192,
    description:
      'Style\nDD1399-105\n\nColorway\nWHITE/BLACK-TOTAL ORANGE\n\nRetail Price\n$110\n\nRelease Date\n01/27/2022\n\nProduct Description\nThe Nike Dunk High Panda Black White 2021 features a smooth white leather upper with perforations on the toe box. Black leather overlays, eyestays and Swooshes match the black laces. Orange hits on the insole add the Total Orange to the vintage White/Black colorway. The rubber outsole is black with a concentric-circles pattern for traction. The midsole is white with visible threading around the shoe. Black Nike branding appears on the white tongue and the heel features a black loop with arcs of white-on-white horizontal threading below it.\n\n  The Nike Dunk High Panda Black White 2021 was released on January 27, 2022 at a retail price of $115.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsuvcih300bwl6161c0161kh_1582962__gv3SnyZWx',
    name: 'Palace Tri-Twister T-Shirt Huntsman',
    price: 192,
    description:
      'Season\nSS23\n\nColor\nHUNTSMAN\n\nRelease Date\n05/05/2023\n\nRetail Price\n$48',
    brand: 'Palace',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltbu8nub00swkz16pvqaqr22_3408531__GfdNh1a-1',
    name: 'Supreme The North Face Split 6-Panel Black',
    price: 191,
    description:
      'Season\nSS24\nColor\nBLACK\nRelease Date\n02/29/2024\nRetail Price\n$54',
    brand: 'Supreme x The North Face',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2ma5v181yoo5cndcpct5j_9414505__BHxoVBCWv',
    name: 'Nike Air Force 1 Low Supreme White',
    price: 191,
    description:
      'Supreme and Nike paid homage to an NYC classic with the release of the Nike Air Force 1 Low Supreme White. This collaboration adds Supreme’s world-renowned Box Logo to the side of a traditional all-white Air Force 1 design.\n\nThis Air Force 1 Low is comprised of an all-white leather upper with matching soles and detailing. A red Supreme Box Logo placed on the outside heel completes the design. These sneakers released in March of 2020 and retailed for $96.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluoffrjs00qul8153bhvcp56_4343046__VIu049ooF',
    name: 'Supreme Small Ashtray Green',
    price: 191,
    description:
      'Season\nFW22\nColor\nGREEN\nRelease Date\n12/29/2022\nRetail Price\n$68',
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63daf17234fe68f43e85c4fd.png',
    name: 'Jacquemus Le Bob Gadjo Bow Knotted Bucket Hat Yellow',
    price: 191,
    description:
      'Season\nFW22\n\nColor\nYELLOW\n\nStyle\n223AC001-5001-250\n\nRetail Price\n$125',
    brand: 'Jacquemus',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2jdpt0zd6oo5ct23ujhxp_211766__Z7deyn0UC',
    name: 'Gaming Chair Pink',
    price: 190,
    description: '',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp0sr4zd0006k016g7eejggq_7502110__EriJOVY1M',
    name: 'Fear of God Essentials Sweatpants (SS22) Stretch Limo',
    price: 190,
    description:
      'Season\nSS22\n\nColor\nSTRETCH LIMO\n\nRelease Date\n06/15/2022\n\nRetail Price\n$90\n\nProduct Description\nThe Fear of God Essentials Sweatpants (SS22) Stretch Limo is a collaborative garment that comes in a stretch limo colorway.​\n​​\n​The sweatpants are made from a blend of 80% cotton and 20% polyester heavyweight fleece fabric. The design features an enclosed drawstring in the same dominant color, seamed pockets, one on each side, a ribbed waist and hem that stretch for a relaxed fit. An Essentials rubberized label on the center front, and a Essentials Fear of God logo in velvet on the left leg complete the look.​\n​​\n​The Fear of God Essentials Sweatpants (SS22) Stretch Limo was released in June 15th, 2022, with its retail price set at $90.',
    brand: 'Fear of God',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0cqqqt001gt90znrja79j29_2467543__YH1hblEHU',
    name: 'Nike Calm flat slides',
    price: 190,
    description:
      'Imported\nHighlights\nkhaki\nlightweight construction\nsignature Swoosh logo detail\nopen toe\nslip-on style\nrubber sole\nComposition\nSole: Rubber 100%\nOuter: Rubber 100%\nLining: Rubber 100%',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllk8rsim000kln16b4x0qmaj_2896381__XKut1rwVQ',
    name: 'Fear of God Essentials Hoodie (2022) Dark Oatmeal',
    price: 190,
    description:
      '\nSeason\nSS22\n\nColor\nDARK OATMEAL\n\nRelease Date\n06/15/2022\n\nRetail Price\n$90\n\nProduct Description\nAs a part of their Spring/Summer 2022 collection, Fear of God Essentials issued more than 150 different articles of clothing, including this Fear of God Essentials Relaxed Hoodie in a dark oatmeal.\n\nThe hoodie comes in normal size and is cut with a looser silhouette. This hoodie has been a new style that is roomier and more voluminous, and it also has the Essentials brand emblem on the breast. This release included a sweatshirt that was created from heavyweight cotton and polyester fleece material.\n\nOn June 15, 2022, Fear of God introduced their Essentials Hoodie (SS22), which had a suggested retail price of $90.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clml509ld0000ld16enzv018g_1269713__54em7VWr7',
    name: 'Scuf x OVO x Faze Clan Gaming Mousepad Black/Camo',
    price: 190,
    description:
      'Color\nBLACK/CAMO\n\nRelease Date\n12/21/2022\n\nRetail Price\n$68\n\nDimensions\n15.75 X 35.25 IN\n\nProduct Description\nSpecifications:\n\nNon-Slip Bottom\nRubber',
    brand: 'Scuf x OVO x Faze Clan',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnb1u3kx0046l4177h0c5wxj_8926581__Ylo0RtxN1',
    name: "BAPE Halloween Jack O' Lantern College Tee White",
    price: 190,
    description:
      'Season\nFW22\n\nColor\nWHITE\n\nRelease Date\n10/14/2022\n\nStyle\n1I70-110-012\n\nRetail Price\n$55',
    brand: 'BAPE',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllwqgddv001ql41478xabg40_6106971__p08JEG-P-',
    name: 'mascot t-shirt black',
    price: 179,
    description:
      'Season\nFW21\n\nColor\nBLACK\n\nRelease Date\n12/10/2021\n\nRetail Price\n$65\n\nProduct Description\ndrew house released this drew house mascot t-shirt as a part of their December 2021 mascot logo drop. This drew house mascot logo t-shirt features a large mascot logo on its chest.\n\nThis black drew house mascot t-shirt was released at the retail price of $65 on December 10th, 2021.',
    brand: 'drew house',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv1dqyni03v01214vcrwxuem_6527455__RYB8O7vaF',
    name: 'Kith x Wilson for New York Knicks Basketball Black',
    price: 179,
    description:
      'Color\nBLACK\nRelease Date\n02/21/2022\nRetail Price\n$95\nDimensions\n29.5"',
    brand: 'Kith x Wilson',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0xenfk200041315v6hjkx8n_9774634__BrDUabuLu',
    name: 'AirPods 4',
    price: 179,
    description:
      '**Experience the next evolution of sound with AirPods 4.** Enjoy immersive audio with personalized Spatial Audio, crystal-clear calls with Voice Isolation, and the convenience of hands-free Siri. The AirPods 4 feature a comfortable fit, sweat and water resistance, and up to 30 hours of listening time with the charging case. With USB-C charging and a built-in speaker for Find My, AirPods 4 offer the ultimate wireless listening experience.',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls9fn2mv001ul618bxg4bykg_9065609__RdgvHf6zc',
    name: 'Magic Trackpad - White Multi-Touch Surface',
    price: 179,
    description:
      '\nMagic Trackpad is wireless and rechargeable, and it includes the full range of Multi-Touch gestures and Force Touch technology. Sensors underneath the trackpad surface detect subtle differences in the amount of pressure you apply, bringing more functionality to your fingertips and enabling a deeper connection to your content. It features a large edge-to-edge glass surface area, making scrolling and swiping through your favorite content more productive and comfortable than ever.\n\nMagic Trackpad pairs automatically with your Mac, so you can get to work right away. The rechargeable battery will power it for about a month or more between charges, and it also includes a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac.\n\nMagic Trackpad works great with Apple Vision Pro for activities like complex spreadsheets and works seamlessly together with your hands, eyes, and voice when navigating Apple Vision Pro.',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv1kk2zc05s3o8lrharp8phs_2998847__jkIKEQDf_',
    name: 'Kith x Disney Large Mickey Plush Plaid',
    price: 179,
    description:
      "Color\nPLAID\nRelease Date\n11/18/2019\nRetail Price\n$55\nProduct Description\nKith once again came through with another huge collaboration on November 18th, 2019, this time working with Disney for dozens of sneakers, apparel items, and collectibles. One of the most popular items from the capsule was this plush Mickey figure, which features a plaid design and Kith's classic logo on the foot. The plush retailed for $55 and sold out quickly. Secure this nostalgic Mickey plush today by placing a Bid.",
    brand: 'Kith x Disney',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmp5vork000elf162medx7jq_8162452__VpshcO3q2',
    name: 'Flower Emoji Plush 2 30CM Rainbow/Yellow',
    price: 178,
    description:
      'Season\nFW21\n\nColor\nRAINBOW/YELLOW\n\nRelease Date\n12/16/2021\n\nRetail Price\n$85\n\nDimensions\n12 IN / 30 CM',
    brand: 'Takashi Murakami',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrqojatt004yl41746yj09je_3490004__YwtBljipw3',
    name: 'POC Spine VPD Air Vest With Back Protector, Mountain Biking Armor',
    price: 178,
    description:
      'FULLY PROTECTED: The Spine VPD Air Vest adapts to the shape of your body, but when exposed to impact, the material stiffens and has extreme impact absorption properties\nCOMFORT IS KEY: Lightweight and ventilated 3-layer back protector with removable elastic waist strap\nBREATHE EASILY: Durable and highly breathable mesh fabric\nCERTIFIED AND RACE READY: Level 1 (EN 1621-2) certified back protector',
    brand: 'POC',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmds89hu0000l5179zymha0g_2537225__uvK_cRwMc',
    name: 'Ray-Ban Wayfarer Sunglasses',
    price: 178,
    description:
      'Color\nBLACK/GREEN (RB2140)\n\nStyle\nRB2140\n\nRetail Price\n$210',
    brand: 'Ray-Ban',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqpguqii00pkl816aql53y2z_9653628___zFPQTniq',
    name: 'Lululemon New Crew Backpack',
    price: 178,
    description:
      'Lululemon made this backpack with dedicated compartments for your laptop, workout gear, and water bottle for an organized state of mind. Whether you\'re hitting the books or booking it to class, this functional backpack makes it easy with plenty of storage and a convenient exterior-access laptop pocket. Fabric is water-repellent and easy to wipe clean Interior padded pocket fits a 15" laptop Multiple pockets for all your essentials Side pockets for quick access to water bottle and small items 29.0cm x 18.0cm x 42cm (11.5" x 7.0" x 16.5"), 22L',
    brand: 'Lululemon ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv0dxdry010drgssdmh0wipy_9211855__ZgXBm3kap',
    name: 'Kith x TaylorMade Hat Clip Ball Marker Silver',
    price: 178,
    description: 'Color\nSILVER\nRelease Date\n07/01/2022\nRetail Price\n$15',
    brand: 'Kith x TaylorMade',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqprqda40012l81698y0ftve_3084143__tnSZkTeJ6',
    name: 'Therabody Portable Hands Free Cryotherapy Machine',
    price: 178,
    description:
      'Replace Messy Ice Packs and Inconsistent Heating Pads: Introducing RecoveryTherm Cube, our portable, compact device that seamlessly combines cold therapy, heat therapy and contrast therapy. Choose between 3 optimized presets for fast and precise temperature control and targeted pain relief. ',
    brand: 'Therabody ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluodeviz01exjs157s3pexau_5172424__0hjRd_qs1',
    name: 'Supreme Ceramic Ashtray White',
    price: 177,
    description: 'Season\nFW15\nColor\nWHITE',
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv1ktww707hbo8lrk5t9mpxk_4909149__5xOlEjALJ',
    name: 'Kith Kithmas Serif Deck Stadium',
    price: 177,
    description:
      'Season\nFW22\nColor\nSTADIUM\nRelease Date\n12/11/2022\nRetail Price\n$81\nDimensions\n8.0 X 31.75 IN',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv1dnqf303o112149lsh2ejl_6911406__mareQzD-s',
    name: 'Kith x Spider-Man Timeline Skateboard Deck',
    price: 177,
    description:
      'Season\nSS22\nRelease Date\n07/15/2022\nRetail Price\n$80\nDimensions\n8.0" X 31.75" IN',
    brand: 'Kith x Spider-Man',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsl8cx5601wyle17bw3hs1p7_6144507__0VWZUwq-R',
    name: 'Palace Teddy Beanie Black',
    price: 176,
    description:
      'Season\n\nMultiple\nColor\n\nBlack\nRelease Date\n\n11/03/2023\nRetail Price\n\n$50',
    brand: 'Palace',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp1p4yub000kjo18n96b9c7k_9796451__SKkogUj0x',
    name: 'Nike Big Swoosh Reversible Boa Jacket Hemp White',
    price: 176,
    description:
      'Season\nFW22\n\nColor\nHEMP WHITE\n\nStyle\nBQ6546-200\n\nRetail Price\n$112\n\nProduct Description\nThe Nike Big Swoosh Reversible Boa Jacket (Asia Sizing) Hemp White was made available in a hemp white colorway.\n\nThis Reversible Boa Jacket has an insulating layer made of fleece material, and a front zip. It also features a large Nike emblem in a white color that contrasts with the hemp color of the garment. The interior is built of 100% nylon fabric, while the exterior is made of a blend of 17% acrylic and 83% polyester.\n\nThe Nike Big Swoosh Reversible Boa Jacket (Asia Sizing) Hemp White was first released on October 23rd, 2020, with a initial retail price set at $112.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpg14z0x00exk018g7x6jb2c_4220530__wgePfZLPb',
    name: 'adidas Mexico 22 Away Authentic Soccer Jersey',
    price: 176,
    description:
      'Season\n\nFW22\nColor\n\nWonder White\nStyle\n\nHD9313\nRetail Price\n\n$150',
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m0bg17h9oo5cx80swgh1_2688041__Ljz6Bop7X',
    name: 'Apple TV 4K Wi‑Fi + Ethernet with 128GB storage',
    price: 175,
    description:
      '4K Dolby Vision and HDR10+ for vivid picture quality\n\nDolby Atmos for three-dimensional, theater-like sound\n\nIncredible power with the A15 Bionic chip\n\nSiri Remote brings precise control with a touch-enabled clickpad\n\nWi-Fi and Ethernet for high-speed data transfer\n\nThe latest shows, movies, sports, and live TV, all in one place\n\nMore ways to enjoy your TV with Apple Arcade, Apple Fitness+, and Apple Music\n\nUse AirPlay to share photos, videos, and more from your iPhone, iPad, and Mac on your TV\n\nPair with HomePod mini for hands-free control with Siri\n\nActs as a home hub to connect and control smart home accessories',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m44w17q8oo5ca8jsqfmv_6046545__D1O7xLWRE',
    name: 'Elgato Stream Deck MK.2',
    price: 175,
    description:
      '15 Customizable LCD Keys: instantly control your apps, tools and platforms.\nOne-Touch Operation: trigger single or multiple actions, launch social posts, adjust audio, mute mic, turn on lights, and much more.\nVisual Feedback: know that your command has been executed.\nPowerful Plugins: Elgato 4KCU, OBS, Twitch, YouTube, Twitter, Discord, Spotify, Philips Hue, and many more.\nHotkey Actions: streamline your film editing, music production, photography workflow, etc.',
    brand: 'Elgato ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv1e13g904qf1214so8k75r9_3710712__sfDbXKbFA',
    name: 'Kith x Disney Mickey & Friends Plush Set (6 Pack) Multi',
    price: 175,
    description:
      'Season\nFW23\nColor\nMULTI\nRelease Date\n11/24/2023\nRetail Price\n$125',
    brand: 'Kith x Disney Mickey & Friends',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvvtuqur0ip65op4643x31si_550024__jX8Ydhm6g',
    name: 'Tory Burch Miller hinge stud bangle',
    price: 175,
    description:
      'This gold-tone piece really puts "time" in timeless. With all-over double T emblem, this Tory Burch bracelet was made for you to wear every day. \nImported\nComposition\nBrass',
    brand: 'Tory Burch',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clot2pu340000jr16sc75je9c_3391791__fG6-LBsap',
    name: 'Starbucks eGift Card',
    price: 175,
    description:
      'There’s always a Starbucks in reach, so a Starbucks Card is the perfect gift for everyone. You can easily send Starbucks eGifts with relevant designs for any occasion you’re celebrating, whether it’s saying thanks, recognizing an achievement, or simply letting someone know you are thinking of them.',
    brand: 'Starbucks',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq6ic9ft00cckz17nzuciozq_9742000__rt2KjqxFtz',
    name: 'Amazon Gift Card in a Birthday Pop-Up Box ',
    price: 175,
    description:
      '\n    Gift Card is affixed inside a box\n    Gift amount may not be printed on Gift Cards\n    Gift Card has no fees and no expiration date\n    No returns and no refunds on Gift Cards\n    Gift Card is redeemable towards millions of items storewide at Amazon.com\n    Scan and redeem any Gift Card with a mobile or tablet device via the Amazon App\n    Free One-Day Shipping (where available)\n    Customized gift message, if chosen at check-out, only appears on packing slip and not on the actual gift card or carrier\n',
    brand: 'Amazon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0zqmzof000xqaexsdvl16px_5837407__d4I4TMFR1',
    name: 'Razer Aether Lamp Pro',
    price: 175,
    description:
      "The Razer Aether Lamp Pro is a versatile desk lamp designed for gamers, featuring Razer Chroma RGB for full-spectrum lighting customization. It allows for dynamic lighting that syncs with your gaming setup, providing both ambient and task lighting. With smart control options, including app integration and voice commands, you can easily adjust brightness and color settings. The lamp is designed to enhance your room's atmosphere while reducing eye strain during long sessions.",
    brand: 'Razer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cly11uwtv01kgxjmvv7cioiqn_1387321__41_JOjJA1',
    name: 'G-Shock Beach Time Lapse Series',
    price: 175,
    description:
      'The Casio DW-5600TLS-8JF G-SHOCK BEACH TIME LAPSE Series is a stylish and robust timepiece, imported from Japan and part of the 2024 collection. This watch features a durable grey resin case and strap, embodying the iconic G-SHOCK toughness with a sleek, beach-inspired design. It boasts superior shock resistance and water resistance, making it ideal for active and adventurous lifestyles. Key features include a stopwatch, countdown timer, and alarm, all displayed on a clear digital screen. Combining functionality with modern aesthetics, the DW-5600TLS-8JF is an excellent choice for those seeking a reliable and fashionable accessory.',
    brand: 'Casio',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m44y17qwoo5cj1pkh9yp_5563380__bwC4lBeOP',
    name: 'Facecam 1080p60 True Full HD Webcam',
    price: 175,
    description:
      'Elgato Prime Lens: f/2.4 24 mm* all-glass studio quality optics\nSony STARVIS CMOS Sensor: optimized for indoor use\nAdvanced Image Engine: uncompressed video without artifacts\nTrue Full HD: stunning 1080p resolution at a fluid sixty frames per second\nHigh-Speed Circuitry: USB 3.0 interface transfers image data with lowest latency\nSystem Requirements: Windows 10 (64-bit), Intel or AMD CPU, macOS 11.0, Intel or Apple CPU, USB 3.0 or higher',
    brand: 'Elgato',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2c49g0e3ooo5cxytp37um_8010565__4uM8FyEWo',
    name: 'Razer Nommo Chroma',
    price: 175,
    description:
      'Full Range 2.0 Gaming Speakers: Optimized drivers built for full range sound and extreme clarity.Waterproof : No\n\nCustom 3" Woven Glass Fiber Drivers: Producting a tighter sound with higher frequencies, allowing you to hear disinct layers and audio details\n\nRear-Facing Bass Ports: Deliver increased bass output for a fuller, richer range of audio\n\nBass Knob With Automatic Gain Control: Fine-tune the output perfectly from ground-shaking bass to a low hum for late night sessions',
    brand: 'Razer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwtzsue001qjr17o5ssjv70_3442340__eqqHrNPr6',
    name: '1-800-Flowers.com eGift Card',
    price: 175,
    description:
      'From truly original designs to exclusive signature collections, as well as beautiful plants for every occasion, 1-800-Flowers.com delivers smiles in every imaginable way. The world\'s leading florist offers the best of both worlds: exquisite, florist-designed arrangements individually created by some of the nation\'s top floral artists and hand-delivered the same day, and spectacular flowers shipped overnight "Fresh From Our Growers." This gift card can also be redeemed at any of 1800Flowers.com nine brands.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwusd6g005qjr17773uarom_857660__J3S5o_OG6i',
    name: 'Ruth’s Chris Steak House eGift Card',
    price: 175,
    description:
      'At Ruth’s Chris Steak House, your last bite is just as good as your first. Each ofour USDA Prime steaks is seared to perfection, finished with butter and freshlychopped parsley, and served sizzling on a 500-degree plate–just the way Ruthliked it. Enjoy steakhouse favorites and more alongside an award-winning,world-class wine list, signature handcrafted cocktails and house-prepareddesserts.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2jqdw10ozoo5c7oww6axz_2093844__CGW06fwdK',
    name: 'Wired Gaming Pro Controller',
    price: 175,
    description:
      'Power by Razer Chroma RGB: Enjoy greater immersion and customize with 16.8 million colors and lighting effects via the Razer Controller Setup for Xbox app\n6 Additional Remappable Buttons: Unleash greater control and a more personalized play style with 4 extra triggers and 2 remappable bumpers that can be customized via the Razer Controller Setup for Xbox app\nHair Trigger Mode with Trigger Stop-Switches: For a competitive edge, activate Hair Trigger Mode via two slide-locks on the underside of the controller that greatly reduce travel distance to the main triggers, enabling an ultra-fast rate of fire\nMecha-Tactile Action Buttons and D-Pad: Wield hyper-responsive actuation with a cushioned touch and greater tactility when executing moves\nInterchangeable Thumbstick Caps: Includes a set of short and extended grips for a more natural and precise analog motion to fit your play style\nImproved Ergonomics: The controller’s modified L-shaped handgrips come with non-slip rubber grips for a secure yet agile hold—natural, effortless control for all-day gaming',
    brand: 'Razer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmftet800000mo175xrh6hvh_4523135__ssf_Fm-Od',
    name: 'Takashi Murakami NFT Holder Flower T-Shirt White',
    price: 175,
    description: 'Season\nFW22\n\nColor\nWHITE',
    brand: 'Takashi Murakami',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm05rcp4l00kb13yao36us1yt_9806983__zaTdnNnGw',
    name: 'LEGO Corvette',
    price: 175,
    description:
      'The LEGO Corvette set is a dynamic and detailed model that captures the iconic design and performance of the legendary American sports car. Featuring sleek curves, a bold color scheme, and realistic details like a detailed interior and engine, this set is perfect for car enthusiasts and LEGO fans alike. Whether displayed as a striking centerpiece or enjoyed for imaginative play, the LEGO Corvette offers a thrilling building experience that celebrates the spirit of one of the most famous sports cars in automotive history.',
    brand: 'LEGO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwtemq900c1le15fa9nkc2o_6489578__Ds1sXOhRI',
    name: '1-800-Baskets.com eGift Card',
    price: 175,
    description:
      '1-800-Baskets.com® has a large selection of expertly designed and thoughtfully crafted gift baskets including fruits, gourmet foods, snacks, candies, and spa and wellness gifts perfect for such occasions as anniversaries, birthdays, housewarmings, new babies, career achievements, sympathy sentiments, and get well wishes. This gift card can also be redeemed at any of 1800Flowers.com nine brands.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvoebcze16lxahl5df6tv41z_9740405__lS89ANO_c',
    name: 'Longchamp medium Le Pliage tote bag',
    price: 175,
    description:
      'black\nfoldover top\ntop zip fastening\nembossed logo to the front\nmain compartment\ntwo rounded top handles\nConscious: This item is made from at least 50% recycled or upcycled materials. For recycled synthetic clothing products we highly recommend using a microfibre-catching washing bag to ensure that no microplastics that can pollute water are released in the process.\nComposition\nOuter: Recycled Polyamide 100%',
    brand: 'Longchamp',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsfmf8oy003ujv1785zzaz1y_8174809__KjYAANa3Z',
    name: 'Amazon Fire TV Cube',
    price: 174,
    description:
      'Our fastest-ever streaming media player - Brings lightning-fast app starts with an octa-core processor and is 2X as powerful as Fire TV Stick 4K Max.\nHands-free Alexa with built-in mic and speakers - Control your compatible TV, soundbar, and receivers with your voice, even from across the room.\nSeamlessly navigate between your entertainment - Connect compatible devices and easily go from streaming to your cable box, game console, or webcam.\nSmoother streaming with the latest in wifi tech - The first-ever streaming media player that features Wi-Fi 6E support.\nPicture quality that puts on a show - Feel every scene with true-to-life, cinematic 4K and support for Dolby Vision, HDR, and Dolby Atmos audio.\nEndless entertainment - Stream more than 1.5 million movies and TV episodes. Watch favorites from Netflix, Prime Video, Disney+, Peacock, and more, plus listen to millions of songs. Subscription fees may apply.\nDesigned to protect your privacy - Built with privacy protections and controls, including an off button that electronically disconnects the microphones.\nManage your smart home right on screen - Use Alexa to start video calls, check the weather, get a live view of your Ring cameras, and more.',
    brand: 'Amazon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluogpoke03r9js15izajsige_162444__-qMFRfhyv',
    name: 'BAPE x OVO Ashtray White',
    price: 174,
    description: 'Season\nFW21\nColor\nWHITE\nRelease Date\n10/30/2021',
    brand: 'BAPE x OVO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqh176e6005xju17ya39w74z_77775__JqzBzWmGZ',
    name: 'adidas Forum 84 LowTrap Kitchen',
    price: 174,
    description:
      'Style\n\nFZ6565\nColorway\n\nCloud White/Cloud White/Vivid Red\nRetail Price\n\n$120\nRelease Date\n\n09/30/2022',
    brand: 'adidas ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpg0y2sd002gjr170xwsyfws_2468221__TMCtQ8SFq',
    name: 'Patta x Barcelona FC Culers del Món Pre-Match JerseyBlack/White',
    price: 174,
    description:
      'Season\n\nFW23\nColor\n\nBlack/White\nRelease Date\n\n10/16/2023\nRetail Price\n\n$75',
    brand: 'Patta x Barcelona FC',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsm5b3oe0015ky16edry6mza_3538089__lA7M0SQBM',
    name: 'Soap Studio Tom and Jerry Plush Teddy Bear Version 2 Figure',
    price: 174,
    description:
      'Season\nFW21\n\nRelease Date\n11/09/2019\n\nRetail Price\n$190\n\nProduct Description\nThis item is a blind box, the color will be shipped randomly.\nFour different colors: Charcoal Grey, Cobalt Turquoise, Honey Suckle, and Chocolate.',
    brand: 'Soap Studio x Tom and Jerry Plush',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsl4rcj600x0lc1886syf4e1_1561839__qPDoa0mhV',
    name: 'Palace Teddy Beanie Grey',
    price: 174,
    description:
      'Season\nFW23\n\nColor\nGREY\n\nRelease Date\n11/03/2023\n\nRetail Price\n$48',
    brand: 'Palace',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmp54mav001cmo1697jb4kbu_5097146__8Tc388h1U',
    name: 'Flower Plush 30CM Yellow',
    price: 174,
    description:
      'Season\nFW18\n\nColor\nYELLOW\n\nRelease Date\n11/03/2018\n\nRetail Price\n$100',
    brand: 'Takashi Murakami ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv0bkrlz013i4rqjo2vwn84l_8389549___C3vcnTPD',
    name: 'Kith x Spider-Man City Scene Skateboard Deck',
    price: 174,
    description:
      'Season\nSS22\nRelease Date\n07/15/2022\nRetail Price\n$80\nDimensions\n8.0" X 31.75" IN',
    brand: 'Kith x Spider-Man',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63dd9a664888eee56d8f4df8.png',
    name: 'Anti Social Social Club Kkoch Hoodie Black',
    price: 174,
    description:
      'The hoodie features Anti Social Social Club’s unmissable logo beneath a growth of flowers and two butterflies on the back of the garment. This hoodie does an excellent job capturing the sensitive yet unapproachable spirit of Anti Social Social Club which has undoubtedly played into the piece’s popularity. \n\nThis Anti Social Social Club Hoodie released at a retail price of $69 USD on March 28th, 2020.',
    brand: 'Anti Social Social Club',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnayom0x000qlf16xs1gwv5e_605239__ZfXh-UjDI',
    name: 'OVO Longsleeve T-Shirt Black',
    price: 174,
    description:
      'Season\nFW22\n\nColor\nBLACK\n\nRelease Date\n10/21/2022\n\nRetail Price\n$68',
    brand: 'OVO Halloween Gang ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0h5czif0000120uxp4zm6d6_9736250__PpJE_BGDN',
    name: 'adidas Handball Spezial Navy Gum',
    price: 173,
    description:
      'Style\nBD7633\nColorway\nNAVY/CLEAR SKY/GUM\nRetail Price\n$100\nRelease Date\n08/26/2020\nProduct Description\nThe adidas Handball Spezial Navy Gum takes its inspiration from a 1980s handball shoe.\n\nDressed in a Navy, Sky Blue, White, and Gum color scheme, this sneaker features a nubuck suede upper. Other details include adidas branding on the tongue, the trademark 3-Stripes on the sides, the "Spezial" Trefoil logo on the lateral in gold foil, and a branded OrthoLite insole. This shoe has a round toe and a lace-up closure system with Navy Blue laces that match the overall theme. A gum rubber outsole completes the vintage look.\n\nThe adidas Handball Spezial Navy Gum was first released on 26th August 2020, retailing at $100.',
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0imxzu90000bvmqpe6fo19t_2250619__ufRFluFX9p',
    name: "Nike Dunk Low Photon Dust (Women's)",
    price: 173,
    description:
      "Style\nDD1503-103\nColorway\nWHITE/PHOTON DUST-WHITE\nRetail Price\n$100\nRelease Date\n05/19/2021\nProduct Description\nThe women's Nike Dunk Low Photon Dust (W) is made of white leather with Photon Dust leather overlays and Swooshes. A woven Nike label on the tongue and embroidered Nike branding completes the design. The women's Nike Dunk Low Photon Dust (W) released in May of 2021 and retailed for $100.",
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmp3yxfq0018jt17t1k6sauv_6769524__CooOyWDGs',
    name: 'Flower Plush 30CM Black/White',
    price: 173,
    description:
      'Color\nBLACK/WHITE\n\nRelease Date\n11/04/2017\n\nRetail Price\n$90',
    brand: 'Takashi Murakami',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmp5xmpm002tla19el0sdofm_5756034__UOp6tmN6m',
    name: 'Flower Emoji Plush 4 30CM Rainbow/Yellow',
    price: 173,
    description:
      'Season\nFW21\n\nColor\nRAINBOW/YELLOW\n\nRelease Date\n12/16/2021\n\nRetail Price\n$85\n\nDimensions\n12 IN / 30 CM',
    brand: 'Takashi Murakami',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnauqm61005amo15to57wk2n_6643505__wjH_6DvKv',
    name: 'Nike Dunk Low Retro PRM Halloween (2022)',
    price: 172,
    description:
      'Style\nDQ7681-001\n\nColorway\nIRON GREY/PHANTOM/GHOST GREEN\n\nRetail Price\n$120\n\nRelease Date\n10/27/2022\n\nProduct Description\nThe Nike Dunk Low Swoosh Shadow Iron Grey is made out of a mix of canvas, suede, and leather materials, coated in an iron grey, phantom and scream green color palette.\n\nThe sneaker has a gray leather base that is highlighted by gray suede inserts on the mudguard, quarter panel, eyelets and side Swoosh. It has a tonal Nike branding on the tongue and heel tab. This upper of the Low Nike Dunk is supported by a green outsole and a contrasting off-white midsole.\n\nThe Nike Dunk Low Swoosh Shadow Iron Grey was released on the 27th of October 2022 and originally retailed for $120.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq7baz3b005ilc184djked02_1052800__sJrnebWaC',
    name: 'Dr. Pen M8S Microneedling Pen with 20 Replacement Cartridges',
    price: 172,
    description:
      'Original Dr.pen Brand Microneedling Kit: The new upgraded DR PEN M8S in 2023 is safer, more efficient, and more convenient.\nCost Effective And Time-saving: This microneedling machine saves money and time by providing salon-quality facials at home. Simply recharge and replace the sterile cartridge before use.\nEasy To Use: Dr.pen M8S can be used wirelessly with rechargeable batteries or with the included 2m cord, making it easy to use.\nCome With 20 Cartridges: 8 x 36 pins, 8 x 18 pins, 2 x 42 pins, 2 x Nano, all max length of the microneedle is 0.25mm, safe and reliable.\nTips: Before using the pen, remove the white cover on the cartridge. Use each cartridge only once and dispose of it after use. Reusing a cartridge may cause skin irritation and other adverse side effects.',
    brand: 'Rhyzoray',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2c49k0e4zoo5c44lfu49c_1231844__4_sm4xtjR',
    name: 'Razer Viper Gaming Mouse',
    price: 172,
    description:
      '25% Quicker Than Competing Wireless Mice: Razer HyperSpeed wireless technology brings together extreme low-latency and interference reduction for true wireless freedom\n\nLightweight, Zero-Compromise Wireless Esports Gaming Mouse at 74g: The Razer Viper Ultimate includes a 20K DPI optical sensor befitting the most serious gamers and achieves its weight without the need for drilled holes\n\nFaster Than Traditional Mechanical Switches: New Razer optical mouse switches uses light beam-based actuation, registering button presses at the speed of light\nAmbidextrous Design: Created for left and right-handed users with accessible, programmable buttons on both sides\n\nMaximum Speed(IPS):650,On-board Memory Profiles:5. Dock Compatible',
    brand: 'Razer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllr44zfn0014mm158ebcv98s_7973991__ecGc3f0qz',
    name: 'T-shirt Black',
    price: 172,
    description:
      "Season\nFW21\n\nColor\nBLACK\n\nRelease Date\n10/20/2021\n\nRetail Price\n$58\n\nProduct Description\nThis KAWS T-shirt was released in collaboration with streetwear brand, Cactus Plant Flea Market, in October of 2021.\n\nThis KAWS x Cactus Plant Flea Market T-shirt was released in two different colors as a part of a larger collaboration in honor of the artist's October 2021 Fortnite collaboration. The t-shirt features a purple KAWS Companion Skeleton with a Cactus Plant Flea Market smiley face covering the face of the skeleton.\n\nThis KAWS x Cactus Plant Flea Market T-shirt was made available at the retail price of $58 on October 20th, 2021.",
    brand: 'KAWS x Cactus Plant Flea Market',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllmmkj96002jlb17bs0e84mb_5814750__Prsqo0hWI_',
    name: "G-Shock GWM5610-1 Men's Solar Black Resin Sport Watch",
    price: 172,
    description:
      'Made in the USA or Imported\nCasual solar-powered watch with multiple functions including multi-band atomic timekeeping, shock resistance, LED backlight, world time (29 time zones, 48 cities), city code display, five daily alarms, 1/100-second stopwatch, countdown timer, full auto-calendar, battery indicator, and power-saving function\nApproximate battery life: 10 months on full charge (without further exposure to light)\nWater resistant to 200 m (660 ft): In general, suitable for professional marine activity and serious surface water sports, but not scuba diving',
    brand: 'Casio',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clkx4xxzy0000jf184dux9nbm_9108874__CE5iW-9kJ',
    name: 'Keenray Bucket Towel Warmers, Fits Up to Two 40"X70"',
    price: 172,
    description:
      'Extra Large Capacity - Ultra large Bucket towel warmers for bathroom, accommodates up to two 40" X 70" oversized bath towels, bathrobes, blankets, PJ\'s and more. Dimensions: 13" (L) x 13" (W) x 19" (H) , total 20 L capacity. Meet a whole family use!\nQuickly Heating up - Offers rapid heat up in just 1 minute and reaches high temperature in just 6 minutes. This Luxury Bucket Towel Warmer is single button control, up to 60 minutes heating time. Decent design, easy operation like a breeze! Keep the towels warm and cozy around the clock. Whether you\'re taking a quick shower or long, relaxing soak, the warmer suits all your need, use it with more confidence!\nHeat Evenly - This bath towel warmer will heat towels all the way through! No cold spot anymore. Enter a whole new world when you step out of the shower and turn your bathroom into a spa-like experience!\nCompact and Safe - Safe to use, compact for easy storage. The towel warmer is lightweight enough to move around the home; the bucket and lid separate for quick cleaning, while the round-shaped base is stylish and attractive; operates efficiently and quietly.\nA Warm and Sweet Gift - This versatile Bucket towel warmer is a well thought-out gift for housewarming, wedding, shower or birthday, anniversary and mother’s day etc. Perfect Accessory for Home, Pool House, Shower, Salon, Hotel, Spa, Massage, Baby Care, Elders and people getting bed bath & More. Once you have experienced the comfort of a warm towel, that will become your daily pleasant surprise after a bath. Pamper your friends & family with this incredible present!',
    brand: 'Keenray',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxtr1esd039611nute9b28lf_286009__TbPkBx3ol',
    name: 'AMIRI logo-embroidered striped crew socks',
    price: 172,
    description:
      'Made in Italy\nHighlights\nbeige/multicolour\nribbed knit\nstripe detailing\nembroidered logo to the side\nlogo at the sole\nmid-calf length\nBe sure before opening, as socks and hosiery can only be returned in their original, unopened packaging.\nComposition\nWool 38%, Viscose 28%, Polyamide 22%, Cashmere 10%, Elastane 2%',
    brand: 'AMIRI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltav7jlo001el516avmjdtxo_914887__yPCE2s25C',
    name: 'Nike Air Max 1 SC Cacao Wow',
    price: 171,
    description:
      'Style\nFB9660-200\nColorway\nHEMP/CACAO WOW-DUSTED CLAY-LIGHT OREWOOD BROWN-BLACK\nRetail Price\n$150\nRelease Date\n03/01/2024',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clml5dfeo002umq17e0iccdl0_2298525__2Xb1II39f',
    name: 'GUNDAM EDITION Mouse Pad',
    price: 171,
    description: '90MP0250-BPUA00 Red/White/Blue',
    brand: 'ASUS ROG x Sheath',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyi4qpx400tkwxx2cp8ky0oh_9433024__YpenCOa4o',
    name: 'Casio G-Shock Two tone utility colors',
    price: 170,
    description:
      'The Casio G-SHOCK GA-100TU-1A3JF is a robust and stylish timepiece, part of the new 2024 collection imported from Japan. This watch features a striking two-tone design with utility colors, combining durability with modern aesthetics. Built to withstand tough conditions, it offers superior shock resistance and 200-meter water resistance. The analog-digital display includes essential functions such as a stopwatch, countdown timer, world time, and multiple alarms, all with an LED backlight for easy readability. Perfect for both everyday wear and adventurous activities, the GA-100TU-1A3JF embodies the reliability and innovative design that G-SHOCK is known for.',
    brand: 'Casio',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllol36780011mt18al54tcvq_925909__2WTWjKkCQ',
    name: 'Kraken Kitty Cat Ears Gaming Headset Green',
    price: 170,
    description:
      "Kitty Ears Powered by Razer Chroma: With 16.8 million colors, a suite of effects, and glowing earcups in addition to kitty ear lighting, you can customize to your heart’s content and land on a unique look for every occasion.\n\nStream Responsive Lighting: Take your showmanship to new heights with lighting that can respond to your audience's emotes, alerts, and shout outs, personalize exactly which colors and effects are used with the Streamer Companion App.\n\nActive Noise Cancellation Microphone: Sound as good as you look and improve your stream production with a retractable high-quality microphone that’s tuned to block out all background noise.\n\nTHX Spatial Audio: Experience THX Spatial 7.1 surround sound for accurate positional audio and superior audio immersion across any form of entertainment—from intense games to epic movies, Only available on Windows 10, 64bit.\n\nDesigned for Comfort and Durability: Cooling-gel ear cushions keep your head cool while a bauxite aluminum frame ensures durability and reduced weight as you light up the stream or a friend’s party.",
    brand: 'Razer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllol4mbd0000mn18ki3si027_1375975__yXKzO65lI',
    name: 'Kraken Kitty Cat Ears Gaming Headset Pink',
    price: 170,
    description:
      "Kitty Ears Powered by Razer Chroma: With 16.8 million colors, a suite of effects, and glowing earcups in addition to kitty ear lighting, you can customize to your heart’s content and land on a unique look for every occasion.\n\nStream Responsive Lighting: Take your showmanship to new heights with lighting that can respond to your audience's emotes, alerts, and shout outs, personalize exactly which colors and effects are used with the Streamer Companion App.\n\nActive Noise Cancellation Microphone: Sound as good as you look and improve your stream production with a retractable high-quality microphone that’s tuned to block out all background noise.\n\nTHX Spatial Audio: Experience THX Spatial 7.1 surround sound for accurate positional audio and superior audio immersion across any form of entertainment—from intense games to epic movies, Only available on Windows 10, 64bit.\n\nDesigned for Comfort and Durability: Cooling-gel ear cushions keep your head cool while a bauxite aluminum frame ensures durability and reduced weight as you light up the stream or a friend’s party.",
    brand: 'Razer',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvvbmz060ctv8mufi0obas2n_8052834__7UfoXRHKx',
    name: 'Tory Burch Kira logo-plaque card holder',
    price: 169,
    description:
      'black\ncalf leather\nquilted\nsignature Double T motif\nlogo plaque\ncrystal embellishment\ncard slots\nComposition\nOuter: Calf Leather 100%',
    brand: 'Tory Burch',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp1psdo3000kjw1768jitf7i_693233__ykFChrtr6',
    name: 'Fear of God Essentials 1977 T-shirt Iron',
    price: 168,
    description:
      "Season\nSS22\n\nColor\nIRON\n\nRelease Date\n03/10/2022\n\nRetail Price\n$45\n\nProduct Description\nThis Iron-colored Fear of God Essentials 1977 T-shirt was released in March of 2022 as a part of Fear of God Essentials’ Spring/Summer 2022 collection.\n\nThe t-shirt is made with an iron-colored cotton material and features a velvet 1977 logo on its chest and a rubberized logo on its back. The t-shirt's shape is inspired by a vintage athletic fit.\n\nThe Fear of God Essentials 1977 T-shirt in Iron was released at the retail price of $45.",
    brand: 'Fear of God',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp1opu730000l816oprasy4g_6748774__iTOqxOeBQ',
    name: 'Fear of God Essentials Hoodie Egg Shell',
    price: 168,
    description:
      'Season\nFW22\n\nColor\nEGG SHELL\n\nRelease Date\n08/24/2022\n\nRetail Price\n$100\n\nProduct Description\nThe hoodie is made from cotton and has an "eggshell" color that resembles a shade of cream.\n\nIt has long sleeves with ribbed cuffs and also features the Essentials branding in toned velvet on the chest area and on the collar as well as the attached hoodie. The Fear of God Essentials Hoodie Egg Shell is in new condition and available in all sizes.\n\nThe Fear Of God Essentials Hoodie Egg Shell was first released to the public in August of 2022 at the retail price of $100. It was part of a massive release of Fear of God Essentials apparel that had t-shirts, shorts, and hoodies.',
    brand: 'Fear of God',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clr6qgoku000ijx16jx9j1aox_5946102__7p_-_GgTT',
    name: 'Stanley x Magnolia Quencher 40oz TumblerNavy Voyage',
    price: 168,
    description:
      'Material\n\nStainless Steel\nRetail Price\n\n$45\nColor\n\nNavy Voyage',
    brand: 'Stanley x Magnolia',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltc02f2g015sjo161vdjik46_3386635__tT-bYkJR2',
    name: 'Supreme The North Face Split 6-Panel Camo',
    price: 168,
    description:
      'Season\nSS24\nColor\nCAMO\nRelease Date\n02/29/2024\nRetail Price\n$54',
    brand: 'Supreme x The North Face',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv1gqctt0jfs1214j8x2qbs7_1568471__MeCqAGN4H',
    name: 'Kith Monogram Dice Set Opulence',
    price: 167,
    description:
      'Season\nSS23\nColor\nOPULENCE\nRelease Date\n05/22/2023\nRetail Price\n$65\nProduct Description\nThe Kith Monogram Dice Set is crafted from mixed horn resin with an all-over debossed monogram print, and encased in premium Saffiano leather. Includes five dice and the leather case.',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvvb7hos06z18mufzk16mmwg_791862__g2Dl0eaXB',
    name: 'Tory Burch T monogram-pattern leather wallet',
    price: 167,
    description:
      'jet black\ncalf leather\nsmooth grain\nmatte finish\ntonal design\nsignature Double T motif\nall-over embossed logo print\nopen top\nmultiple card slots\nfull lining\nComposition\nOuter: CALFSKIN 100%',
    brand: 'Tory Burch',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp0skkec0000kx18fsi29qzs_6043051__AyAwamEqv',
    name: 'Fear of God Essentials Hoodie Off Black',
    price: 166,
    description:
      'Season\nFW22\n\nColor\nOFF BLACK\n\nRelease Date\n09/28/2022\n\nRetail Price\n$100\n\nProduct Description\nThe Fear of God Essentials Hoodie Off Black is a drop-shoulder garment made of 80% cotton and 20% polyester mix.\n\nThis solid color clothing apparel features an oversized fit, a kangaroo front pouch, an attached hood, long sleeves, ribbed cuffs, and a ribbed hem. On its chest, it features an imprinted Fear of God Essentials graphic inscription, while on its hood, it boasts a rubberized branding. For care, this off-black-colored hoodie should be hand-washed and then flat or line dried.\n\nThe Fear of God Essentials Hoodie Off Black was first released on 28th September 2022. Originally, it retailed at $100.',
    brand: 'Fear of God',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2laik15ceoo5cwjx4wtsd_3044329__1-PPAMgYp',
    name: 'Vans Vault Sk8-Hi Reissue LX Palm Angels PAXVAULT Chili Pepper',
    price: 166,
    description:
      'Style\nVN0A3MV777W\n\nColorway\nCHILI PEPPER/CHIPMUNK\n\nRetail Price\n$155\n\nRelease Date\n10/01/2022',
    brand: 'Vans',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp03v0pt0000l418kvvi0p42_5532104__XvMuCrJsDj',
    name: 'adidas Campus 00s Core Black',
    price: 166,
    description:
      'Style\nHQ8708\n\nColorway\nCORE BLACK/FOOTWEAR WHITE/OFF WHITE\n\nRetail Price\n$110\n\nRelease Date\n02/17/2023\n\nIncluded Accessories\nBLACK EXTRA LACES\n\nProduct Description\nThe adidas Campus 00s Core Black was launched as part of the sports collection sneakers in the adidas brand.\n\nThe adidas Campus 00s Core Black is covered in core black and white colorways at the upper, footwear white midsole, and brown outsole. This sneaker is a product of suede, rubber, and leather materials that completes the texture. The adidas Campus 00s Core Black features the adidas logo on the tongue and the heel with campus branding at its quarter.\n\nThe adidas Campus 00s Core Black got released at a suggested retail price of $100 on February 17, 2023.',
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltbwdq4j005hjw16881abx1d_684346__P297en0WE',
    name: "BAPE Women's Baby Milo Mini Fur Backpack Ivory",
    price: 166,
    description:
      'Season\nSS24\nColor\nIVORY\nRelease Date\n02/10/2024\nStyle\nAJ70-489-006\nRetail Price\n$85',
    brand: 'BAPE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2lpl116gmoo5c84uel56l_1280409__z6JQtOqT8',
    name: 'Supreme Yashica MF-1 Camera Red',
    price: 166,
    description:
      "The Supreme Yashica MF-1 Camera was made available alongside a The North Face collaboration for the brand's Spring/Summer 2021 Week 5 release.\n\nWhen this reusable 35mm film camera was featured in Supreme's Spring/Summer 2021 preview, it was expected to be one of the biggest accessories of the season. This camera features a 31mm fixed lens with a built in flash and a Supreme logo across the front of it.\n\nSupreme's red Yashica Mf-1 Camera was released on March 25th, 2021, at the retail price of $68 USD.",
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvmlfofz0um78x6m91f1rk6p_8637216__7pu5yToJZ',
    name: 'Coach logo slip-on slides',
    price: 166,
    description:
      'brown fabric/rubber logo print to the front open toe flat sole\nImported\nComposition\nLining: Rubber 100%, Fabric 100%\nSole: Rubber 100%\nOuter: PVC 100%',
    brand: 'Coach',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmp50iux0000mo164sav2yti_1797125__URTgoffw4',
    name: 'Collaboration Flower Plush 30CM Black/Gold',
    price: 165,
    description:
      'Season\nSS21\n\nColor\nBLACK/GOLD\n\nRelease Date\n08/27/2020\n\nRetail Price\n$105',
    brand: 'Takashi Murakami x HIKARU ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvvbk9v60c3g8mufh40o9lsz_6314202__mWDjV5Imm',
    name: 'Tory Burch Miller rhinestone ring',
    price: 165,
    description:
      'gold-tone\n18kt gold plated\npolished finish\nrhinestone embellishment\nlogo plaque\nflat court band\nComposition\n18kt Gold Plated Brass, glass',
    brand: 'Tory Burch',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpus8qkp000hjv17kk735pqv_6792323__BVrxZPu-A',
    name: 'BAPE A Bathing Ape 29th Anniversary Ape Head Ornament Clear',
    price: 165,
    description:
      'Season\nSS22\n\nColor\nCLEAR\n\nRelease Date\n04/09/2022\n\nRetail Price\n$70',
    brand: 'BAPE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluofson302xrlb14u23fviqs_1886565__myE-TSV5u',
    name: 'Supreme Small Ashtray Blue',
    price: 165,
    description:
      'Season\nFW22\nColor\nBLUE\nRelease Date\n12/29/2022\nRetail Price\n$68',
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpg362ve00mzid1625oj1wtg_8350980__1dsIkKg3b',
    name: 'Windоws 11 Pro ',
    price: 165,
    description:
      'We reimagined Windows for a new era of the digital workplace, helping companies unlock the full potential of every employee, giving them powerful tools to collaborate and create in a secure and trusted environment. Powerful for employees. Consistent for IT. Secure for all.',
    brand: 'Microsoft',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1vmx4wb0000tjv542108yrk_626538__hl7jKl4jU',
    name: 'Dior Sauvage Eau de Toilette Spray for Men, 3.4 Ounce',
    price: 165,
    description:
      'Dior Sauvage Eau de Toilette Spray for Men is a bold and timeless fragrance that embodies strength and sophistication. With its 3.4-ounce size, this scent is perfect for daily wear, featuring an invigorating blend of spicy pepper, fresh bergamot, and woody undertones that create a powerful and captivating aroma. Inspired by wide-open landscapes, Dior Sauvage captures the essence of rugged masculinity and refined elegance, making it ideal for the modern man who values confidence and style. Its long-lasting formula ensures a fresh and unforgettable impression, suitable for both casual and formal occasions.',
    brand: 'Dior',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmfft5010002me18tosnfg4j_448767__dSt-68iLD',
    name: 'New Era x Takashi Murakami Flower Allover 9Forty Cloth Strap Hat Black Multi',
    price: 165,
    description:
      'Season\nSS22\n\nColor\nBLACK MULTI\n\nStyle\n13082214\n\nDimensions\n56.8 - 60.6CM',
    brand: 'New Era x Takashi Murakami Flower',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsl4xhmt007hl81684potvgc_7771648__8FE3QvXch',
    name: 'FTP Allover Print Teddy Bear Black',
    price: 165,
    description:
      'Season\nSS19\n\nColor\nBLACK\n\nRelease Date\n03/30/2019\n\nRetail Price\n$24\n\nDimensions\n11 IN / 28 CM',
    brand: 'FTP',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0zqiy0f000vqaexubftw9dj_8759425__ytblNx2I3N',
    name: 'Razer Aether Monitor Light Bar',
    price: 165,
    description:
      'The Razer Aether Monitor Light Bar is designed to reduce eye strain during long gaming or work sessions by providing soft, ambient lighting for your monitor setup. It features Razer Chroma RGB, allowing for customizable lighting effects to sync with your gaming environment. The light bar is easy to install and adjusts to fit most monitor sizes, offering an ergonomic and aesthetic solution for improved visibility and atmosphere.',
    brand: 'Razer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv0dkus1001okujm3htzq6re_4313764__7-km_LwF7',
    name: 'Kith Metal Dreidel Silver',
    price: 165,
    description:
      'Season\nFW21\nColor\nSILVER\nRelease Date\n11/22/2021\nRetail Price\n$35',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cly0z2hdo02yak2bsdvdlnad7_7308014__VQYtUfVBm',
    name: 'G-Shock Beach Time Lapse Series',
    price: 165,
    description:
      'The Casio DW-5600TL-7JF G-SHOCK BEACH TIME LAPSE Series is a stylish and durable timepiece, imported from Japan and set for 2024. Featuring a sleek white resin case and strap, this watch embodies the iconic G-SHOCK toughness with a beach-inspired design. It offers superior shock resistance and water resistance, making it perfect for active lifestyles. Key features include a stopwatch, countdown timer, and alarm, all displayed on a clear digital screen. With its blend of functionality and modern aesthetics, the DW-5600TL-7JF is an excellent choice for those seeking a reliable and fashionable accessory.',
    brand: 'Casio',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw05yjq70imr52lcns50tk8c_9687209__2bG4vnZKY',
    name: 'Apple Pencil Pro',
    price: 165,
    description:
      'Introducing Apple Pencil Pro—a powerful tool that enhances creativity and productivity. With new advanced features, it offers intuitive marking up, note-taking, and drawing experiences.\n\n- Squeeze: Apple Pencil Pro responds to your touch, bringing up a palette for quick tool, line weight, and color adjustments.\n- Barrel roll: Its gyroscope enables precise control of shaped pen and brush tools with rotation.\n- Haptic feedback: Feel precise feedback with every squeeze or double-tap, confirming your actions.\n- Hover preview: Preview where Apple Pencil Pro will touch down on your display for enhanced precision.\n- Double tap: Easily switch between tools like a pen and eraser with a simple double tap.\n- Find My: Never lose your Apple Pencil Pro with easy tracking in the Find My app. It attaches, pairs, and charges magnetically on your iPad.',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnl9vcd6001dlb16zn85d6r9_4232874__cv9WVcpwDp',
    name: 'Lucky Golden Golf Club Wedge',
    price: 165,
    description:
      'Size: 60 Degree\nColor: Gold, 60 Degrees\nGolf Club Flex: Regular\nHand Orientation: Right\nGolf Club Loft: 60 Degrees\nMaterial: Carbon Steel\nBrand: Lucky Wedges\nShaft Material: Alloy Steel\nItem Weight: 300 Grams\nGolf Putter Lie Angle: 63 Degrees\nMaterial: 1020 Forged Soft Carbon Steel\nLoft: 60 degrees, Lie: 63 degrees, Bounce: 10 degrees\nFinished Weight: 300 grams\nShaft: 35" Regular Flex\nTour approved and tournament legal grooves - great spin!',
    brand: 'Lucky Wedges',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxt44g38002iliudr44vqmyh_2390396__JnAkTqRpM',
    name: 'AMIRI striped jacquard socks',
    price: 165,
    description:
      'white\ncotton blend\nribbed knit\nstripe detailing\nlogo print to the side\nlogo at the sole\nmid-calf length\nBe sure before opening, as socks and hosiery can only be returned in their original, unopened packaging.\nComposition\nCotton 78%, Polyester 20%, Spandex/Elastane 2%',
    brand: 'AMIRI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltw1z65v00bxl514ig8lkov9_9919078__DR47x4m8Q',
    name: "adidas D Rose 1.5 St. Patrick's Day (2022)",
    price: 164,
    description:
      'Style\nGY0247\nColorway\nGREEN/WHITE\nRetail Price\n$140\nRelease Date\n03/05/2022',
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltavb84t00ilju18nn80jrav_9760316__7bJxKq5St',
    name: "Nike Air Force 1 Low '07 Bronzine Saturn Gold",
    price: 164,
    description:
      'Style\nFZ4034-716\nColorway\nBRONZINE/COCONUT MILK/SATURN GOLD/SAIL\nRetail Price\n$125\nRelease Date\n03/01/2024',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvvbemis0a1r8muf81rvh0cx_6526658__nen69dRSm',
    name: 'Tory Burch Eleanor pavé hinged cuff bracelet',
    price: 164,
    description:
      'gold-tone\n18kt gold plated brass\ncuff design\npavé setting\ncrystal embellishment\nsignature T-shaped hinge detail\nhook fastening\npolished finish\nComposition\n18kt Gold Plated Brass',
    brand: 'Tory Burch',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhc0tn000uejc21t4pn13dw_8600265__XBZw-cvYF',
    name: 'IKEA HUVUDSPELARE Gaming desk, black, 55 1/8x31 1/2 "',
    price: 163,
    description:
      'It should be comfortable to play, especially when a match drags on. That’s why the table top is deep – so you can position screens at a comfortable distance from your eyes.\n\nDurable desk surface that is easy on your eyes since the light reflection is low.\n\nIt is easy to keep the desk neat and tidy by using the cable trunking under the table top.\n\nYou can always have your headphones close at hand thanks to the included hook.\n\nThe large table top holds two 24-inch screens.\n\nIf you want to create a complete gaming station, you can add HUVUDSPELARE gaming chair. It matches perfectly.',
    brand: 'IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpa7kbnq005blb15hi6afjy8_5844875__OBMiFnIwK',
    name: 'Nike Air Monarch IV Snow Day',
    price: 163,
    description:
      'Style\nAV6676-100\n\nColorway\nWHITE/TOTAL ORANGE-METALLIC SILVER\n\nRetail Price\n$120\n\nRelease Date\n01/03/2018',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmp362u0002jl917vkyils6a_5039120__wuqOwTv9r',
    name: 'Flower Plush 30cm Silver',
    price: 163,
    description:
      "Color\nSILVER\n\nRelease Date\n11/02/2019\n\nRetail Price\n$100\n\nProduct Description\nTakashi Murakami has become known for his large collection of adorable plushies, many of which feature his iconic smiling flower motif. This particular Takashi Murakami Flower Plush measures 30 cm in diameter and features the artist's smiling flower in a reflective silver colorway.\n\nThe Takashi Murakami Flower Plush 30 cm Flower Plush in silver was first released on November 2nd, 2019.",
    brand: 'Takashi Murakami ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmp3279c0000jr16gf9zhgk4_4739335__R_H4ROCtd',
    name: 'Flower Plush 30CM Blue/Turquoise/Yellow',
    price: 163,
    description:
      "Color\nBLUE/TURQUOISE/YELLOW\n\nRelease Date\n11/04/2017\n\nRetail Price\n$90\n\nDimensions\n30CM\n\nProduct Description\nTakashi Murakami has a longstanding tradition of producing some of the cutest plush collectibles out there. His iconic flower character has been seen in galleries and homes all over the world, and this 30cm Blue & Turquoise Flower Plush is an affordable way to own a piece from the masterful Japanese artist. This particular plush features Murakami's classic smiling face surrounded by a rainbow of colors, and measures 30cm in diamater. Cop one today to brighten up any room.",
    brand: 'Takashi Murakami ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltbwbzly008blc166k53j0ew_202552__hEUHF4zTX',
    name: 'BAPE Baby Milo Mini Fur Check Backpack Multicolor',
    price: 163,
    description:
      'Season\nSS24\nColor\nMULTICOLOR\nRelease Date\n02/10/2024\nStyle\nAJ70-489-002',
    brand: 'BAPE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvvb2gkr05ef8mufkwurpdf2_6623765__NCWCzdkCy',
    name: 'Tory Burch Kira leather cardholder',
    price: 163,
    description:
      'light green\nnappa leather\ndiamond quilting\nsignature Double T motif\ncard slots\nsilver-tone hardware\nComposition\nOuter: Nappa Leather 100%',
    brand: 'Tory Burch',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltc0z8z800usig17882a9wv5_3441090__A2ff6FpVc',
    name: 'Supreme Tag Beanie Navy',
    price: 163,
    description:
      'Season\nSS24\nColor\nNAVY\nRelease Date\n02/29/2024\nRetail Price\n$40',
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2khs112ncoo5c2jshve3j_1366562__jD76HPinFg',
    name: 'Fear of God Essentials Hoodie (FW22) Light Oatmeal',
    price: 162,
    description:
      "The Fear of God Essentials Hoodie FW22 Light Oatmeal is a collaboratively designed hoodie that was included in the brand's fall collection.\n\nThe Fear of God Essential Hoodie is a long-sleeved garment made of cotton fabric. Other details include a crew neckline, two kangaroo pockets on the front, and a stretched over-size fit. Rounding out the design is the Essential signature applique logo on top of the Fear Of God branding embroidered on the hest.\n\nThe Fear of God Essentials Hoodie FW22 Light Oatmeal was made available at the retail price of $90 on November 16th, 2022.",
    brand: 'Fear of God',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsidoa4200d1l116fadg1rqm_5582884__APFbkBSvu',
    name: 'Hot Wheels x Tesla Cybertruck 1:10 Scale RC Car',
    price: 162,
    description:
      'Season\nSS21\n\nRelease Date\n05/21/2020\n\nRetail Price\n$100\n\nProduct Description\nThe Hot Wheels x Tesla Cybertruck 1:10 Scale R/C Car 2021 Version with Cyberquad is the third time Mattel and Elon Musk’s electric vehicle and clean energy company have collaborated on an R/C version of the Cybertruck by Tesla. The R/C Cybertruck includes working lights, realistic wheels modeled off of the actual vehicle, an R/C controller inspired by the Cybertruck’s steering wheel, and a 1:10 scale Hot Wheels Cyberquad that was made to fit in the bed of the truck. The Hot Wheels x Tesla Cybertruck 1:10 Scale R/C Car can hit speeds up to 12 MPH.\n\nThis iteration of the Hot Wheels x Tesla R/C Car with Cyberquad released on May 21, 2021 and sold for a retail price of $100 USD.',
    brand: 'Hot Wheels x Tesla',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllstaefn000omg15nehd9pc7_1111939__Hz2CLbm-e',
    name: 'Off-White Alarm Clock Orange',
    price: 162,
    description:
      'Color\nORANGE\n\nRelease Date\n02/23/2021\n\nRetail Price\n$70\n\nDimensions\n57MM\n\nProduct Description\nOff-White and Braun collaborated in SS21 to put a contemporary sophistication on a classic timepiece. The alarm clock was released in 2 colors, bright orange and pale blue. Off-White founder Virgil Abloh chose these colors to stand out in an interior setting design. Braun and Off-White branding are featured on the iconic clock face in a similar color scheme. The Virgil Abloh Braun Off-White Alarm Clock had a retail price of $70.',
    brand: 'Virgil Abloh x Braun',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluofkjo8027cjx14mvmf9b98_7070804__bc7_HTPcn',
    name: 'Supreme Small Ashtray Red',
    price: 162,
    description:
      'Season\nFW22\nColor\nRED\nRelease Date\n12/29/2022\nRetail Price\n$68',
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv1pfwgo08z6xgevv4jme805_9281839__FUG2T4t31X',
    name: 'Supreme Sake Set White',
    price: 162,
    description:
      'Season\nFW17\nColor\nWHITE\nRelease Date\n08/31/2017\nRetail Price\n$48\nProduct Description\nThe White Supreme Sake Set has three items, a jar, and two cups.\n\nThe Supreme Sake Set White is made of a ceramic material. The jar is constricted on the neck with a broader and open head. There’s a louvered protrusion to channel content when pouring. The pot has a wider base with a red Supreme branding. The two cups also have a similar Supreme branding towards the bottom. The base is smaller compared to the body. The cups’ walls are thinner towards the top.\n\nThis Supreme Sake Set White was featured on the market on 31st August 2017. The retail price was $48.',
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2d8520h3hoo5c3x4jg0x4_9504204__w_VZqKju-',
    name: 'Kith Nike for New York Knicks Tee (FW21) Black',
    price: 162,
    description:
      "Season\nFW21\n\nColor\nBLACK\n\nRelease Date\n12/25/2021\n\nRetail Price\n$65\n\nProduct Description\nNike and Kith join hands again to represent and celebrate the New York Knicks basketball team through the Kith Nike for New York Knicks Tee FW21 Men's Black release. The arrival comes in black for versatility and sleek style.\n\nThe Kith Nike for New York Knicks Tee FW21 Men's Black is known for its high-quality delivered by sturdy cotton fabric, offering durability and comfort. The cotton fabric is also known to be soft, enabling comfort wearing feel. In terms of design, the t-shirt features distinctive signatures of both Kith and Nike, integrated with the New York Knicks basketball team’s elements to pay homage to the team.\n\nWhat we love about this tee is the design that combines distinctive elements of Nike, Kith, and the New York Knicks basketball team, giving the otherwise all-black t-shirt a contrasting scheme. The Kith Nike for New York Knicks Tee FW21 Men's Black was released at a retail price of $65 on December 25th, 2021.",
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clow2vxbh001gjq1852tqte2s_1580881__QRUxBd0tp',
    name: 'Human Made Rabbit Coffee Mug White',
    price: 161,
    description:
      'Season\nFW22\n\nColor\nWHITE\n\nRelease Date\n10/08/2022\n\nRetail Price\n$20',
    brand: 'Human Made',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clo6htsdl002llc18x3jkym98_8276636__mkXe63mvT',
    name: 'Nike x Drake NOCTA Golf Visor White',
    price: 161,
    description:
      'Season\nFW21\n\nColor\nWHITE\n\nRelease Date\n09/23/2021\n\nRetail Price\n$32\n\n',
    brand: 'Nike x Drake',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cloze23tm000gjz166io78i0p_6263307__1LeDa5Bsy',
    name: "Nike Air Force 1 Low '07 White",
    price: 160,
    description:
      'Style\n315122-111/CW2288-111\n\nColorway\nWHITE/WHITE\n\nRetail Price\n$110\n\nRelease Date\n12/09/2020\n\nIncluded Accessories\n2X AF1 BRANDED LACE DUBRAE (ATTACHED)\n\nProduct Description\nThe Nike Air Force 1 Low White ‘07 features an all-white leather upper with a perforated toe box and Swoosh overlays. A Nike heel embroidery and white sole completes the design.\n\nThe Nike Air Force 1 Low White ‘07 originally released in 2007, but since it is an essential colorway to the brand, it consistently restocks.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvmreznc02zirbycc5rzijpb_9978471__IxgBcF_hic',
    name: 'Coach Womens Florence Sandal',
    price: 160,
    description:
      'Editor\'s Notes: An elevated, every day sandal. The outsole on these pink slide sandals offers great traction on city streets\nSignature Canvas: These slip on sandals are crafted of our signature canvas & finished with our signature C\nAll Day Comfort: Casual 1/4" pink sandals with a man-made leather lining and footbed for all day comfort\nIt\'s All in the Details: Signature coated canvas upper, man-made leather lining and footbed, EVA outsole, slip on, 1/4" heel\nThis is COACH: Having the courage to be real since 1941. COACH is the Original American House of Leather - with a legacy of craft and a community that champions the courage to live authentically',
    brand: 'Coach',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp07n4a3000ljx161jikme1z_44620__LXxmlfXhQ',
    name: 'Fear of God Essentials Hoodie Black',
    price: 160,
    description:
      'Season\nSS23\n\nColor\nBLACK\n\nRelease Date\n06/07/2023\n\nRetail Price\n$100\n\nProduct Description\nThe Essentials hoodie has been redesigned with increased volume in the body and sleeves, creating a soft, round, cropped silhouette. New details include a mock neckline and side seam pockets to provide functionality. The curved Essentials Fear of God logo is vintage-inspired but updated in a rubberized soft-touch applique. A new Fear of God rubberized label is on the hood.',
    brand: 'Fear of God ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllmnxhek000dmc17x77pcyxa_9015164__w-H4zcjFt',
    name: 'G-Shock GW6900-1 Tough Solar Sport Watch',
    price: 160,
    description:
      'Shock-resistant watch featuring LED backlight with day, date, and time display\nAdditional features include multi-band six atomic timekeeping, world time, daily alarm with snooze, 12 and 24-hour formats, and solar power battery\n41 mm stainless steel case with mineral dial window.Size of case / total weight 53.2 x 50.0 x 17.7mm / 63g\nJapanese quartz movement with digital display\nSilicone band with buckle closure',
    brand: 'Casio',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m44y17qzoo5c65a7uc9n_481777__uUqvb62jL',
    name: 'JOYFLY Gaming Chair',
    price: 160,
    description:
      'Brand\tJOYFLY\nColor\tBlue\nProduct Dimensions\t21"D x 25"W x 43"H\nSize\t21D x 25W x 43H Inch\nBack Style\tSolid Back',
    brand: 'JOYFLY',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt0nmvev00l4l016famczlyj_2348568__VXnZVy1o9',
    name: 'Fragment x Pokemon Bulbasaur Thunderbolt Project x Sequence Miyashita Park Cushion',
    price: 160,
    description: 'Season\nSS22\nColor\nGREY\nRetail Price\n$45',
    brand: 'Fragment x Pokemon ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw9bkvfy0ibsze59ajwgve5w_1326657__4Z82ev-Qa',
    name: 'Sennheiser HD 25 Monitor Headphones',
    price: 160,
    description:
      'High sensitivity due to lightweight aluminium voice coils\nCapable of handling very high sound pressure levels\nVery lightweight and comfortable, even if used for long periods of time\nTough, detachable, single-sided cable\nRotatable capsule for single-ear listening',
    brand: 'Sennheiser',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxtr8txu01nymbxrlcknxdba_2800975__XoJX7IvnT',
    name: 'AMIRI logo-waistband cotton boxers',
    price: 160,
    description:
      'black\ncotton\nelasticated logo waistband\nmini logo tag\nsuper-skinny cut\nthigh-length\nJust a reminder that this piece must be tried on over your own garments.\nComposition\nCotton 100%',
    brand: 'AMIRI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2a09g07ihoo5cnkyussmo_2839991__CMsM-eXjo',
    name: 'Microsoft Xbox Series X Mini Fridge',
    price: 160,
    description:
      'Introducing the Xbox Series X Replica Mini Fridge Thermoelectric Cooler made by Ukonic! The sleek matte-black tower holds up to 12 cans of your favorite beverage and with two door shelves you’ll be sure to have your favorite snacks at the ready. With LEDs and surface-features made to resemble the Xbox Series X, your friends will be amazed! Power your dreams – includes both AC and DC power cables and has a USB port for charging devices. This product is a fan-driven thermo-electric cooler not a traditional fridge. This product is not designed for continuous use and should be switched off at least every other day to help prevent condensation and frost buildup. The product cools 20 degrees below the ambient room temperature. Operating the Xbox Mini Fridge Thermoelectric Cooler in humid or cold rooms increases the likelihood of condensation and frost. Following these instructions will ensure that your Xbox Mini Fridge Thermoelectric Cooler will operate properly for a long time.',
    brand: 'Microsoft',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cluofijqt02pnjq136qhehp1m_9331760__pog-k7NON',
    name: 'Supreme Gold Trim Ceramic Ashtray White',
    price: 160,
    description:
      "Season\nFW17\nColor\nWHITE\nRelease Date\n08/17/2017\nRetail Price\n$34\nProduct Description\nThe Supreme Gold Trim Ceramic Ashtray White is a sleek and stylish addition to any smoking setup. Made from high-quality ceramic, this ashtray features a glossy white finish with gold trim accents that add a touch of luxury to the design. The Supreme logo is prominently displayed in the center of the ashtray, making it a must-have for fans of the brand. Released on August 17, 2017, this ashtray is a limited edition item that is sure to become a collector's item. At a retail price of $34, it is an affordable way to add a touch of Supreme style to your smoking accessories. One of the standout features of the Supreme Gold Trim Ceramic Ashtray White is its durability. Made from high-quality materials, it is built to last and can withstand regular use. The glossy finish also makes it easy to clean, ensuring that it always looks its best. Something we love about the Supreme Gold Trim Ceramic Ashtray White is its versatility. While it is designed for use as an ashtray, it can also be used as a decorative piece or even as a catch-all for small items. Our experts think that its stylish design and high-quality construction make it a must-have for any Supreme fan or smoking enthusiast.",
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltartoxb00fhjy179lqjr8io_5263909__s0LbVV6X8',
    name: 'Nike Dunk Low Retro Summit White Light Smoke Grey',
    price: 159,
    description:
      'Style\nDV0831-106\nColorway\nSUMMIT WHITE/LIGHT SMOKE GREY-PLATINUM TINT\nRetail Price\n$115\nRelease Date\n03/01/2024',
    brand: 'Nike',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls9i4r530017jp167jzk10qy_3544794__Y7qZ1DViB',
    name: '20W USB-C Power Adapter',
    price: 59,
    description:
      '\nThe Apple 20W USB‑C Power Adapter offers fast, efficient charging at home, in the office, or on the go. Pair it with iPhone 8 or later for fast charging — 50 percent battery in around 30 minutes.¹ Or pair it with the iPad Pro and iPad Air for optimal charging performance. Compatible with any USB-C enabled device.',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqoc7h5c003yl716fmvyq0lw_2497274__BchfuvcB7',
    name: 'Stanley Insulated Tumbler 40 oz - Black',
    price: 59,
    description:
      'Whichever way your day flows, the H2.0 FlowState tumbler keeps you refreshed with fewer refills. Double wall vacuum insulation means drinks stay cold, iced or hot for hours. The narrow base on all sizes (except 64oz) fits just about any car cup holder, keeping it right by your side. ',
    brand: 'Stanley ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv1ofbmq03d7xgev23ygfh3w_6793307__Dr71n3ujO',
    name: 'Supreme x Hav-A-Hank Bandanas (3 Pack) Multicolor',
    price: 59,
    description:
      'Season\nSS24\nColor\nMULTICOLOR\nRelease Date\n02/15/2024\nRetail Price\n$22',
    brand: 'Supreme x Hav-A-Hank',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cls9gw1kr00eok218frgw9k29_460374__NZixJ--gS',
    name: '60W USB-C Charge Cable (1 m)',
    price: 59,
    description:
      '\nThis 1-meter charge cable is made with a woven design — with USB-C connectors on both ends — and is ideal for charging, syncing, and transferring data between USB-C devices. It supports charging of up to 60 watts and transfers data at USB 2 rates. Pair the USB-C Charge Cable with a compatible USB-C power adapter to conveniently charge your devices from a wall outlet and take advantage of fast-charging capabilities. ',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyi4fuw8002ndr2kn4ss2f9r_1517746__SFKZfGUIB',
    name: 'Casio Digital Quartz Green',
    price: 58,
    description:
      "The Casio Men's Digital Quartz Watch WS-1700H-5AVEF is a versatile and durable timepiece perfect for everyday wear. Featuring a green plastic strap and a rugged design, this watch combines style with functionality. It offers a variety of useful features including a digital display, stopwatch, countdown timer, alarm, and backlight for easy readability in any condition. The WS-1700H-5AVEF is water-resistant, making it suitable for various activities. With its reliable quartz movement and practical design, this Casio watch is an excellent choice for those seeking a dependable and stylish accessory.",
    brand: 'Casio',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqogdy77001qjw164gd0ijju_2085915__SrzfrDvdQ',
    name: 'Stanley Insulated Tumbler Fog',
    price: 58,
    description:
      'Whichever way your day flows, the H2.0 FlowState tumbler keeps you refreshed with fewer refills. Double wall vacuum insulation means drinks stay cold, iced or hot for hours. The narrow base on all sizes (except 64oz) fits just about any car cup holder, keeping it right by your side. ',
    brand: 'Stanley ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clr6pxvwc000wjr17ukg37bw3_7471937__h3xRvYOEC',
    name: 'Blue Snowball iCE USB Microphone',
    price: 58,
    description:
      'Brand \tLogitech\nConnectivity Technology \tUSB\nConnector Type \tUSB Type-A\nSpecial Feature \tStand\nCompatible Devices \tPersonal Computer\nColor \tBlack\nIncluded Components \tSnowball iCE USB mic, adjustable stand, USB cable, user guide\nPolar Pattern \tUnidirectional\nAudio Sensitivity \t10 dB',
    brand: 'Blue',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyf68ztp00fppj07738ehzpd_9453317__LEk7VrsIq',
    name: 'Casio Watch Classic',
    price: 58,
    description:
      'The Casio Watch Classic AQ-800E-3AJF is a timeless piece imported from Japan, offering a perfect blend of vintage style and modern functionality. This watch features a sleek stainless steel case and bracelet, complemented by a green dial that adds a unique touch. Key features include an analog-digital display, ensuring easy readability and versatile use. The AQ-800E-3AJF also offers essential functions such as a stopwatch, alarm, and dual time display, making it a practical choice for everyday wear. With its classic design and reliable performance, this Casio watch is an excellent addition to any collection.',
    brand: 'Casio',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnlb1jtv000ml417j25s636q_2018035__VlyP30JX9',
    name: 'Propane Torch Kit',
    price: 58,
    description:
      "MULTI-PURPOSE PROPANE TORCH: More than just a WEED BURNER; it is also great for melting snow and ice, removing parking lot markings and paint, thawing frozen pipes and equipment, melting tar and asphalt, repairing roof and various woodworking projects\nERGONOMIC DESIGN: The easy grip handle allows you to have precise control and comfort during extended use minimizing the risk of slipping or dropping the torch; also comes with a safety lever valve for added control and protection\nSELF-IGNITING with 340,000 BTU HEAT OUTPUT: Quickly and safely starts the flame with the PIEZO IGNITOR; emits a powerful heat output of 340,000 BTU making this torch well-suited for heavy-duty jobs around the home and beyond\nCOMPATIBILITY: Works with standard liquid propane cylinders including 5lbs, 10lbs, 20lbs, 30lbs, 40lbs, 60lbs and 100lbs\nEXTENDED REACH: The torch includes a 6-foot hose, allowing you to access hard-to-reach areas and cover more ground without constantly moving the propane cylinder\nARRIVES FULLY ASSEMBLED: Ready to use right out of the box.\nSAFETY FIRST: Before using the torch, ensure you have the recommended safety gear, including goggles and heavy work gloves; wear close-fitting long-sleeved shirts and pants to protect your limbs; face the torch downwind when igniting it\nONE-YEAR WARRANTY: 1-Year Manufacturer's Defect Warranty",
    brand: 'Flame King',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m7gc17xroo5c4a16husr_8639174__WBFWWkYFI',
    name: 'JBL Go 3',
    price: 57,
    description:
      'JBL pro sound delivers surprisingly big audio and punchy bass from go 3’s ultra-compact size.\nJBL go 3’s ultra-portable design goes great with the latest styles, and its design make it look as great as it sounds.\nJBL go 3 is ip67 waterproof and dustproof, so you can bring your speaker anywhere.\nWirelessly stream music from your phone, tablet, or any other Bluetooth-enabled device.\nJBL go 3 gives you up to 5 hours of playtime on a single charge.\nIncluded components: JBL Go 3, Type C USB Cable, Quick Start Guide, Warranty Card, Safety Sheet\nOutput wattage: 4.2 watts\nPower source type: Battery-Powered',
    brand: 'JBL',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2h1s30s4aoo5ckrf58rk8_8464430__QEG2puPJL',
    name: 'Mechanical Keyboard',
    price: 57,
    description:
      'Brand\tHavit\nCompatible Devices\tWindows XP, Windows VISTA, Windows 8, Windows 7, Windows 10\nConnectivity Technology\tUSB Wired\nKeyboard Description\tMechanical, Gaming\nRecommended Uses For Product\tDesk\nSpecial Feature\tMechanical Red Switches, Compact Size Keyboard with Numpad, For Office Work and PC Gaming\nColor\tBlack\nOperating System\tLinux, Windows 8, Windows 7, Windows 2000, Windows 10\nNumber of Keys\t89\nKeyboard backlighting color support\tSingle Color',
    brand: 'Havit ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw5gvta21i0t1056zija5zva_6582177__5AzsrLb9j',
    name: 'Belle Delphine P1 Kitty Cat RGB Mousepad - XL',
    price: 56,
    description:
      'Introducing our Belle Delphine P1 Kitty Cat XL RGB Mousepad featuring an exclusive artwork of Belle Delphine, adorned in her playful kitty cat costume. This extra-large mousepad ensures you never run out of space while gaming. This mousepad includes Full RGB and a 10-Watt Qi wireless charger. Dimensions: 36x16 inches.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqobqenj0027jn16698btufx_756402__EdiBcLisI',
    name: 'Lululemon Athletica Everywhere Belt Bag',
    price: 56,
    description:
      'This functional belt bag can hold your phone, wallet, and keys during all your urban outings. Fabric is water-resistant and easy to wipe clean.',
    brand: 'Lululemon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnb0827m002rl116q6bg4mfn_7128105__GjHTAj0nU',
    name: 'LEGO Brick Headz Halloween Cat & Mouse Set',
    price: 56,
    description:
      'Release Date\n08/01/2022\n\nRetail Price\n$13\n\nPiece Count\n328',
    brand: 'LEGO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsflasae0063l517p5fpm0o5_7484999__7zEOp2vTh',
    name: 'Football Party Disposable Cups 12 oz',
    price: 56,
    description:
      'Football Disposable Cups: you will get 300 pieces of football disposable clear cups, they are designed in 2 styles, ideal for football party, ample quantities can easily meet your football party usage demands, making your party more cheerful and enhance party atmosphere\nDetailed Size: with a capacity of 12 ounces, and measures approx. 4.3 x 3.5 x 2.2 inches, the football clear cups are ideal for kids and adults to hold, and the proper capacity can accommodate most kinds of drinks or snacks, providing more convenient to your football party\nNovel and Distinctive Design: football transparent clear plastic cups are designed and printed with 2 theme colors of football and stadium, brown and green combination, fits well with the football party theme, the overall look is vivid and colorful, it is a nice helper on the football party event, can impress the guests\nSafe to Use: our football cups are made of quality PET material, safe and reliable, sturdy and odorless, ideal for hot or cold drinks, not easy to shrink or deform, and the strong body can hold drinks for a long time without leaking; They are disposable design, save your cleanup time, and you will have more time to enjoy the party\nWidely Applicable: football cups are ideal for football celebrations, drinking games, football themed parties, holidays, tailgate parties, anniversaries, bars, family gatherings, friend get together, etc.; Use them not only to entertain your guests well, but also to make your drinks or desserts sophisticated and beautiful, and make your various events a hit',
    brand: 'Layhit ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv8dmsop0khm3h6b13q8yoo2_2702249__qmlV-3Apv',
    name: 'Elgato Master Mount L',
    price: 56,
    description:
      'Essential Component: core of the Multi Mount Modular Rigging System.\nHeight Adjustable: 55 cm / 22 in up to 125 cm / 49 in.\nCompatible with Popular Gear: 1/4-inch screw attaches to most cameras and lights.\nIntuitive Control: steel ball head enables tilting at almost any angle.\nQuick Adjustment: rubber twist locks make it easy to adjust height.',
    brand: 'Elgato',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1zeu9uw0000lgn2750kecng_7280428__nZT4IiDuZ',
    name: 'Hanging Shaking Spider',
    price: 56,
    description:
      'Hanging spider bounces and shakes with spooky red glowing eyes and creepy sounds! Features include spider shaking and bouncing poseable legs glowing eyes and motion and sound activation. Requires 4 AAA batteries not included.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2nd0f1bq4oo5cqjedhm0b_8975628__ZuvMkXWlA',
    name: '5 Slot Watch Box Wood',
    price: 55,
    description:
      'Color \tEspresso Brown\nBrand \tTech Swiss\nMaterial \tWood, Faux Suede\nStyle \tModern\nSpecial Feature \tmens christmas gift, watch box wood, extra large watch case\nProduct Dimensions \t5"D x 12.25"W x 3.25"H',
    brand: 'Tech Swiss',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clzbyu8dg01icyr2upgvysfk7_4351570__iZ_Cjq7Is',
    name: 'TaylorMade TP5x Golf Balls',
    price: 55,
    description:
      "The TaylorMade TP5x Golf Balls are designed for golfers seeking maximum performance and distance. Featuring a unique 5-layer construction, these golf balls deliver exceptional speed, control, and spin. The high-flex material and Tri-Fast Core ensure maximum energy transfer and low drag, providing longer carry and more distance. The Dual-Spin Cover offers superior control and a soft feel around the greens, making them perfect for both long and short game performance. Whether you're a professional or an avid golfer, the TaylorMade TP5x Golf Balls are engineered to enhance your game and help you achieve optimal performance on the course.",
    brand: 'TaylorMade',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwt5zx000hnjh16ytgxlc2x_5714847__BLsuXVn1o',
    name: '1-800-Baskets.com eGift Card',
    price: 55,
    description:
      '1-800-Baskets.com® has a large selection of expertly designed and thoughtfully crafted gift baskets including fruits, gourmet foods, snacks, candies, and spa and wellness gifts perfect for such occasions as anniversaries, birthdays, housewarmings, new babies, career achievements, sympathy sentiments, and get well wishes. This gift card can also be redeemed at any of 1800Flowers.com nine brands.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll6zw5vq0004mg17cak2tq4n_8793710__BxmxhAgD6',
    name: 'PlayStation Store Gift Card [Digital Code]',
    price: 55,
    description:
      "May be redeemed for anything on PlayStation Store. Choose from thousands of games, add-ons, subscriptions and more.\n\nPre-order. Pre-load. Play. Can't wait for a game? Pre-load it to your console and play as soon as it's available.\n\nFind exclusive deals on top games. With regular deals and discounts, there’s always something to play at a price you’ll love.\n\nDownload purchases remotely. Add your purchases to your download queue from anywhere online – and start playing sooner.",
    brand: 'PlayStation 4 | DRM: PlayStation Network',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllfsedtp0004la18h7yfnzrn_2746174__mTWz7G7fS',
    name: 'Gran Turismo 7',
    price: 55,
    description:
      "With the return of classic cars, iconic tracks, and fan-favourite modes like GT Simulation and Sport Mode - Gran Turismo 7 is the complete Real Driving Simulator, 25 years in the making.\n\nFind your line. Whether you're a racer, collector, tuner, designer, photographer or arcade fan - immerse yourself in the facets of automotive culture that matter most to you.\n\nConnect and compete. Join an international community of drivers to share race strategies, tuning tips, livery designs and photos, before taking to the track to go head-to-head.",
    brand: 'Sony',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2h1s60s5loo5ceb9ws58m_7498615__VfU2vweLEC',
    name: 'S101 Wired Gaming Keyboard',
    price: 55,
    description:
      'Brand: Redragon\nColor: Black\nConnectivity Technology: Wired\nSpecial Feature: Backlit\nCompatible Devices: Personal Computer',
    brand: 'Redragon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq7bhvvi001rjx17lf9twa5d_7110581__gxQsfxcqK',
    name: 'Anastasia Beverly Hills - Eyeshadow Palette',
    price: 55,
    description:
      'Color\tSoft Glam\nBrand\tAnastasia Beverly Hills\nItem Form\tPowder\nFinish Type\tMetallic\nProduct Benefits\tContains 14 eye shadow shades from soft neutrals to bright sparkly tones',
    brand: 'Anastasia',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m7gb17xdoo5c4pn69im0_6148986__XhzpmKm2i7',
    name: 'JBL Clip 3',
    price: 55,
    description:
      'SOUND TO GO - Never leave awesome sound at home again. This ultra-portable, waterproof Bluetooth speaker is small in size but with surprisingly big sound. Clip it on with the built-in carabiner, press play, and make the moment pop.\n\nUP TO 10 HOURS OF PLAYTIME - The JBL Clip 3 features a built-in rechargeable Li-ion battery with up to 10 hours of battery life, plus a metal carabiner so you can easily hook it to your clothes, backpack, or belt loop.\n\nNOISE CANCELLING & WIRELESS STREAMING - Wirelessly stream high-quality sound from your smartphone or tablet. Plus, take crystal-clear calls from your speaker with the touch of a button, thanks to the noise and echo-cancelling speakerphone.\n\nWATERPROOF & DURABLE - No more worrying about rain or spills: JBL Clip 3 is completely waterproof—you can even immerse it in water. Plus, the improved, durable fabric material and rugged rubber housing protects it on all of your outdoor adventures.',
    brand: 'JBL',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllfne81s002skv16n368s6ve_9472592__AIjmZkbcm',
    name: 'G435 LIGHTSPEED and Bluetooth Wireless Gaming Headset',
    price: 55,
    description:
      "Total comfort: Breathable fabric earcups keep your ears cool during long play sessions, and the comfortable memory foam padding helps absorb sound waves to improve overall sound\n\nVersatile: Logitech G435 is the first headset with LIGHTSPEED wireless and low latency Bluetooth connectivity, providing more freedom of play on PC, smartphones, PlayStation and Nintendo Switch gaming devices.\n\nLightweight: With a lightweight construction, this wireless gaming headset weighs only 5.8 oz (165 g), making it comfortable to wear all day long.\n\nSuperior voice quality: Be heard loud and clear thanks to the built-in dual beamforming microphones that eliminate the need for a mic arm and reduce background noise.\n\nImmersive sound: This cool and colorful headset delivers carefully balanced, high-fidelity audio with 40 mm drivers; compatibility with Dolby Atmos, Windows Sonic for a true surround sound experience.\n\nLong battery life: No need to stop the game to recharge thanks to G435's 18 hours of battery life, allowing you to keep playing, talking to friends, and listening to music all day.\n\nMore sustainable: The plastic parts are made from a minimum 22% post-consumer recycled plastic, paper packaging comes from FSC-certified forests, G435 is certified CarbonNeutral.\n\nSafer: An optional max volume limiter at less than 85 decibel can be activated to protect eardrums during extended use.",
    brand: 'Logitech',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clot1xpy2000il816yqscgj0z_9389185__hFm47DZi_',
    name: 'Starbucks eGift Card',
    price: 55,
    description:
      'There’s always a Starbucks in reach, so a Starbucks Card is the perfect gift for everyone. You can easily send Starbucks eGifts with relevant designs for any occasion you’re celebrating, whether it’s saying thanks, recognizing an achievement, or simply letting someone know you are thinking of them.',
    brand: 'Starbucks',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqydzyh2006fl716famphdsw_8195978__rCIcxVJcw',
    name: "McDonald's x Kerwin Frost McNugget Buddies Figures Set of 6",
    price: 54,
    description: 'Release Date\n\n12/11/2023',
    brand: "McDonald's x Kerwin",
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhfn1mr004vywwgj0xot3uk_6090566__Q-2XV7au6',
    name: 'IKEA LÅNESPELARE Multi-functional cushion/blanket',
    price: 54,
    description:
      'You can quickly transform this cushion into a comfortable blanket or soft singlet– and just as quickly fold it up again when you need a cushion.\n\nEasy to keep clean since it can be washed in the washing machine.',
    brand: 'IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cly0quikt0101oniqag9dm6f8_5047430__ndbEG4YEl8',
    name: 'Bobble Head',
    price: 54,
    description:
      "C'mon man! Haven't you heard? I'm the President now, so why am I the one sitting on your desk? \n\nThe Biden Bobblehead is a great gift for anyone wanting to support the new President at their job or office. He can help you make executive decisions by shaking his head no or yes! A great gift and souvenir for family and friends. ",
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq5ocmj90000l716dsmqhh62_8773753__a8Uq9jnTO',
    name: 'Crock-Pot Small 2 Quart',
    price: 53,
    description:
      '\n    2-QT Round Manual Slow Cooker serves 3+ people\n    High/Low cook settings, and convenient Warm setting\n    Crock-Pot features removable, dishwasher-safe stoneware insert, and dishwasher-safe glass lid\n    Compact slow cooker with purple polka-dot design.Recipes included\n    Dimension(inch):9 H x 8.9 W x 7.4 D\n',
    brand: 'Crock-Pot',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrogvh3k006kjn17hc8q6e4i_6080336__d5jYqQBaP',
    name: 'UPPAbaby Carry-All Parent Organizer',
    price: 52,
    description:
      'Made of neoprene fabric with Velcro attachments\nKeeps essentials easily accessible and conceals valuables in zippered pocket\nConvenient pockets hold various size beverages and bottles\nCompatible with all UPPAbaby strollers',
    brand: 'UPPAbaby',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrqphk5r0022l917czhl17zu_2202255__6UQdDkF-X',
    name: 'Full Send Shotgun Tool Red',
    price: 52,
    description:
      'Season\nSS21\n\nColor\nRED\n\nRelease Date\n03/15/2021\n\nRetail Price\n$20',
    brand: 'Supreme',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhm37oq01duqjj50h52qo8w_2717694__DQotTc-DL',
    name: 'IKEA LÅNESPELARE Floor protector, 43 1/4x39 3/8 "',
    price: 52,
    description:
      "Creates the right gaming feeling and protects the floor against scratches and dirt from the gaming chair's casters.\n\nThe rubber-covered underside ensures that the floor protector stays firmly in place and allows the gaming chair’s casters to roll quietly and smoothly.\n\nThe floor protector also dampens sound, which is certainly appreciated by others in the gamer’s surroundings.\n\nThe durable surface is easy to wipe dry when spills happen, even when the game is at its most intense.",
    brand: 'IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm00icosc01nj9yq72m13v8an_7289470__AoPFy29qi',
    name: 'Kith for Corkcicle Canteen Marble',
    price: 52,
    description:
      'Stainless steel construction with triple insulation\n\nSlip-proof design\n\nScrew-on cap\n\nKeeps cold up to 25 hours\n\nKeeps hot up to 12 hours\n\n16oz\n\n \n\nStyle: khl150307-101\n\nColor: White\n\nMaterial: Stainless Steel / Silicone',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz95tppo02h28zz41gzdz904_6654487__Urg2hKyAd',
    name: 'Cotton Poplin Sleep Mens Olympic Boxer',
    price: 52,
    description:
      'Elastic Waistband, Functional Fly Opening With Hidden Button Closure, Center Back Panel, Inseam: 4”\nMikey Is 6’ 2" (188 Cm), Wearing Skims M\n100% Cotton\nMachine Wash Cold With Like Colors, Delicate Cycle, Only Non-Chlorine Bleach When Needed, Line Dry, Cool Iron On Reverse\nImported',
    brand: 'Skims',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clr8drfjg000ekw16cm5uqbdw_2143005__THP8pjwgD',
    name: 'Starbucks 24oz Tumbler Cup - Rose Gold ',
    price: 52,
    description:
      'Brand \tStarbucks\nColor \tRose Gold\nSpecial Feature \tLightweight\nStyle \tModern\nTheme \tHoliday',
    brand: 'Starbucks',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm20nmuqf000011e3a4rqqgbx_1917526__BWnth3AlX',
    name: 'Cyberpunk 2077: Ultimate Edition Xbox Live (Xbox X|S) Key UNITED STATES',
    price: 52,
    description:
      'Cyberpunk 2077: Ultimate Edition for Xbox Series X|S is an expansive open-world RPG set in the neon-lit, dystopian future of Night City, where players experience a rich narrative full of complex characters and impactful choices. Available as an Xbox Live key for the United States, this edition includes the base game along with all major expansions and exclusive content, offering the complete Cyberpunk experience. With its stunning graphics, deep character customization, and immersive gameplay, Cyberpunk 2077: Ultimate Edition allows players to explore a sprawling cyberpunk world filled with high-tech weaponry, fast-paced combat, and gripping stories, making it a must-have for RPG enthusiasts.',
    brand: 'Cyberpunk 2077',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq6ggy3d004hjn16u553dqih_7919303__2V10Ps3v8',
    name: 'Amazon Gift Card in a Birthday Pop-Up Box ',
    price: 50,
    description:
      '\n    Gift Card is affixed inside a box\n    Gift amount may not be printed on Gift Cards\n    Gift Card has no fees and no expiration date\n    No returns and no refunds on Gift Cards\n    Gift Card is redeemable towards millions of items storewide at Amazon.com\n    Scan and redeem any Gift Card with a mobile or tablet device via the Amazon App\n    Free One-Day Shipping (where available)\n    Customized gift message, if chosen at check-out, only appears on packing slip and not on the actual gift card or carrier\n',
    brand: 'Amazon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2h1s70s69oo5c1vqscf75_3090432__LfrnZsVns',
    name: 'Typewriter Style Mechanical Gaming',
    price: 50,
    description:
      'Brand\tCamiysn\nCompatible Devices\tLaptop/PC\nConnectivity Technology\tUSB-A\nKeyboard Description\tMechanical, Gaming\nRecommended Uses For Product\tBusiness/Gaming/Office/Home\nSpecial Feature\tRetro punk keyboard with rgb backlit\nColor\tBlack\nOperating System\tWin 2000/ 7/ 8/ 10/ XP, Vista, Linux, Mac, etc\nNumber of Keys\t104\nKeyboard backlighting color support\tRGB',
    brand: 'Camiysn',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwt3r87000sl717vxwhjd46_6718385__OBig3mi6uk',
    name: '1-800-Baskets.com eGift Card',
    price: 50,
    description:
      '1-800-Baskets.com® has a large selection of expertly designed and thoughtfully crafted gift baskets including fruits, gourmet foods, snacks, candies, and spa and wellness gifts perfect for such occasions as anniversaries, birthdays, housewarmings, new babies, career achievements, sympathy sentiments, and get well wishes. This gift card can also be redeemed at any of 1800Flowers.com nine brands.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsmfqma6008ojr19mzke7eh2_6896864__n921U1STZ',
    name: 'Big Teddy Bear 4Ft',
    price: 50,
    description:
      "Size:4 feet from head to toes.Color:as the picture shown.The giant teddy bear is so good for hugging and snuggling because of its beautiful color and perfect size.\nMaterial:Stuffed with high quailty polyester|Age:Appropriate for 3+ years\nSuitable for Valentines day,Christmas,Birthday,Children's day,Thanksgiving day,Graduation party,baby shower or party decorations etc.\nPerfect gift for Girlfriend,Boyfriend,Women,Girls,Boys,Kids,Adults,Wife,Children or friends\nGreat design and valuable price.You will never regret choosing this big teddy bear.",
    brand: 'Poutmac',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll6zv9oh0002jw186vec85kb_7528979__-xfgyiw-Z',
    name: 'PlayStation Store Gift Card [Digital Code]',
    price: 50,
    description:
      "May be redeemed for anything on PlayStation Store. Choose from thousands of games, add-ons, subscriptions and more.\n\nPre-order. Pre-load. Play. Can't wait for a game? Pre-load it to your console and play as soon as it's available.\n\nFind exclusive deals on top games. With regular deals and discounts, there’s always something to play at a price you’ll love.\n\nDownload purchases remotely. Add your purchases to your download queue from anywhere online – and start playing sooner.",
    brand: 'PlayStation 4 | DRM: PlayStation Network',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm00idywg008b11h5xfxt3vzh_4951356__ecx3URYtK',
    name: 'Kith Classic Half Crew 3-Pack Socks',
    price: 50,
    description:
      'Cotton blend fabric\n\nMid-crew sock height \n\nRibbed construction \n\nKith Classic Logo embroidered on interior ankle \n\n3-pack belly band packaging\n\n \n\nStyle: khm220041-906\n\nColor: Multi\n\nMaterial: 83% Cotton / 14% Polyester / 3% Spandex',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm20npksu0000uwnyzyc8iyj2_6203515__wGCpdIUFh',
    name: "Marvel's Spider-Man 2 (PS5) PSN Key UNITED STATES",
    price: 50,
    description:
      'Marvel’s Spider-Man 2 for PS5 is the latest installment in the critically acclaimed series by Insomniac Games, featuring both Peter Parker and Miles Morales as playable characters. The game introduces new villains, including Venom, Kraven the Hunter, and the Lizard, alongside expanded gameplay mechanics, enhanced combat, and a larger New York City map with additional boroughs like Queens and Brooklyn. With improved graphics and more dynamic traversal abilities, it offers an immersive superhero experience. Available as a PSN key for the United States. ',
    brand: 'Marvel',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxggnlnv08kt13mtyxdwf84h_1727631__2FXT7T9yO',
    name: 'Casablanca Casa Sport ribbed socks',
    price: 50,
    description:
      'Made in Italy\nHighlights\nwhite/multicolour\ncotton blend\nstretch-design\nribbed knit\nintarsia-knit logo\nstripe detailing\npull-on style\nBe sure before opening, as socks and hosiery can only be returned in their original, unopened packaging.\nComposition\nCotton 80%, Polyamide 17%, Spandex/Elastane 3%',
    brand: 'Casablanca',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll74tgst0000l217jkwag580_4867649__9_9YGhHRP',
    name: 'Nintendo eShop Gift Card [Digital Code]',
    price: 50,
    description:
      "Give the gift of fun with a Nintendo eShop gift code\nIt's easy—apply it to your Nintendo eShop account in seconds.\nIt ensures that you’ll always have funds on hand to help with purchases of new games and applications\nIt’s designed for your Nintendo eShop purchases—no credit card required.\nThe perfect gift for anyone who loves to play—including you. Choose from over 1,000 new, classic and indie games – delivered directly to your Nintendo Switch system.",
    brand: 'Nintendo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clxttgkej00oycl54hxx28ayc_7016841__KIQS7Ba9G',
    name: 'Watch Box',
    price: 50,
    description:
      'Watch box organizer is expertly crafted from high-quality, pure solid wood with a unique and natural pattern. Known for their durability and timeless appeal, wood product is a classic match for rustic style and make this watch box a beautiful and long-lasting investment',
    brand: 'Exper City Store',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1zewzbw0000e7q35ntofyq9_4699014__sa2Yb59Mg',
    name: 'Bloody Small Mallet - Fake Weapon Halloween Prop',
    price: 50,
    description:
      'The small mallet is made of foam with a dowel rod inside for structure.  It is painted and has special effects blood applied.  Perfect for a professional haunter or someone looking for a finishing touch on a Halloween costume.  These bloody, gory fake weapons will not disappoint!   \n\n \n\n 10.5 in x  4.5 in',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllzu93rv001gl517gx8t85n0_885178__kJ2N_Fs9q',
    name: 'Rocket League Ultimate Edition',
    price: 50,
    description:
      "Rocket League is a high-octane sports video game that combines soccer with rocket-powered cars. Players control customizable vehicles on an arena and compete in fast-paced matches to score goals by hitting a giant ball into their opponents' net. With its blend of skillful driving, physics-based gameplay, and multiplayer excitement, Rocket League offers a unique and thrilling experience for players of all ages.",
    brand: 'WARNER BROS',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll8hpslk0004mq167l13lp1f_6236052__skpfXv4NB',
    name: 'Apple Gift Card',
    price: 50,
    description:
      'For all things Apple — iPad, AirPods, Apple Watch, iPhone, MacBook, iCloud, accessories, and more\n\nPerfect for App Store purchases and subscriptions — get apps, games, music, movies, TV shows, and more\n\nThe ideal gift to say happy birthday, thank you, congratulations, and more.',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyz4ih6n01es13zb7wlf0cv7_7248982__xLei26Ul_',
    name: 'Versace Baroque Nero plate (10 cm)',
    price: 50,
    description:
      'The new Versace homeware collection is all about sophisticated chic pieces. Like this Baroque Nero plate, adorned with a golden Medusa head in the center.\nImported\nComposition\nPorcelain 100%',
    brand: 'Versace',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clkxf4kpf0002l81779n2mbit_4326659__RfCC1CwxX',
    name: 'Steam Gift Card',
    price: 50,
    description:
      'Steam Gift Cards work just like a gift certificate, while Steam Wallet Codes work just like a game activation code. Can be redeemed on Steam for the purchase of games, software, wallet credit, and any other item you can purchase on Steam.',
    brand: 'Steam',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwtxic700eele15wgjbzir5_3538769__PqfKM3sQO',
    name: '1-800-Baskets.com eGift Card',
    price: 50,
    description:
      'From truly original designs to exclusive signature collections, as well as beautiful plants for every occasion, 1-800-Flowers.com delivers smiles in every imaginable way. The world\'s leading florist offers the best of both worlds: exquisite, florist-designed arrangements individually created by some of the nation\'s top floral artists and hand-delivered the same day, and spectacular flowers shipped overnight "Fresh From Our Growers." This gift card can also be redeemed at any of 1800Flowers.com nine brands.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clot1ghl3002kju17htrsy0k6_4640250__MsqMIkCJNK',
    name: 'Starbucks eGift Card',
    price: 50,
    description:
      'There’s always a Starbucks in reach, so a Starbucks Card is the perfect gift for everyone. You can easily send Starbucks eGifts with relevant designs for any occasion you’re celebrating, whether it’s saying thanks, recognizing an achievement, or simply letting someone know you are thinking of them.',
    brand: 'Starbucks',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm04g96d0007a1172e16tgex8_5482822__pq8VYR9Rk',
    name: 'LEGO eGift Card',
    price: 50,
    description:
      "The LEGO eGift Card is the perfect gift for any LEGO enthusiast, offering the flexibility to choose from a wide range of sets, accessories, and more. Whether for a birthday, holiday, or special occasion, this eGift card allows recipients to explore their creativity and build their dream LEGO creations. Easy to redeem online, it's a thoughtful and convenient present for fans of all ages.",
    brand: 'LEGO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clznh38ap01a1bjdy7t09u2nm_5688702__xti0dM8_o',
    name: 'Japanese Chef Knife',
    price: 50,
    description:
      'This 7-Inch Japanese Chef Knife is a top-tier Santoku knife, made from ultra-sharp high carbon stainless steel AUS-10 for exceptional sharpness and durability. Its precision-engineered blade is perfect for slicing, dicing, and chopping with ease. The knife features an ergonomic Pakkawood handle, designed for a comfortable and secure grip, reducing hand fatigue during prolonged use. Ideal for both professional chefs and home cooks, this knife combines traditional Japanese craftsmanship with modern functionality, making it an essential tool in any kitchen.',
    brand: 'HOSHANHO Store',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyz4ih6n01es13zb7wlf0cv7_7248982__xLei26Ul_',
    name: 'Versace Baroque Nero plate (10 cm)',
    price: 50,
    description:
      'The new Versace homeware collection is all about sophisticated chic pieces. Like this Baroque Nero plate, adorned with a golden Medusa head in the center.\nImported\nComposition\nPorcelain 100%',
    brand: 'Versace',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwvutco0000jv17xj0lkzgj_3554707__HbsEb10aq',
    name: 'Morton’s The Steakhouse eGift Card',
    price: 50,
    description:
      "What began in Chicago in 1978 is now one of the most award-winning steakhouses around. For over 30 years, Morton's Steakhouse has been on a mission to provide \"The Best Steak… Anywhere.\" Focusing on quality, consistency and genuine hospitality, Morton's seeks to provide not only memorable cuisine, but a memorable experience as well. With fresh, succulent seafood and their famed USDA prime-aged steak, it's no surprise that Morton's has thrilled diners all over the world. www.mortons.com",
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0zq3yww0000a64ioxjk8q4o_2928869__zXP3er0KZ',
    name: 'Razer Thunderbolt 4 Cable - 0.8 m',
    price: 50,
    description:
      'The Razer Thunderbolt 4 Cable is a high-speed data transfer cable supporting up to 40Gbps speeds and 100W charging. It offers dual 4K video output or a single 8K output, making it ideal for connecting external displays and devices. The 0.8-meter cable is compatible with Thunderbolt 4, USB4, USB 3.2, and USB-C devices, providing versatility across various setups.',
    brand: 'Razer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll8hpslk0004mq167l13lp1f_6236052__skpfXv4NB',
    name: 'Apple Gift Card',
    price: 50,
    description:
      'For all things Apple — iPad, AirPods, Apple Watch, iPhone, MacBook, iCloud, accessories, and more\n\nPerfect for App Store purchases and subscriptions — get apps, games, music, movies, TV shows, and more\n\nThe ideal gift to say happy birthday, thank you, congratulations, and more.',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1zewzbw0000e7q35ntofyq9_4699014__sa2Yb59Mg',
    name: 'Bloody Small Mallet - Fake Weapon Halloween Prop',
    price: 50,
    description:
      'The small mallet is made of foam with a dowel rod inside for structure.  It is painted and has special effects blood applied.  Perfect for a professional haunter or someone looking for a finishing touch on a Halloween costume.  These bloody, gory fake weapons will not disappoint!   \n\n \n\n 10.5 in x  4.5 in',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwt3r87000sl717vxwhjd46_6718385__OBig3mi6uk',
    name: '1-800-Baskets.com eGift Card',
    price: 50,
    description:
      '1-800-Baskets.com® has a large selection of expertly designed and thoughtfully crafted gift baskets including fruits, gourmet foods, snacks, candies, and spa and wellness gifts perfect for such occasions as anniversaries, birthdays, housewarmings, new babies, career achievements, sympathy sentiments, and get well wishes. This gift card can also be redeemed at any of 1800Flowers.com nine brands.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsmfqma6008ojr19mzke7eh2_6896864__n921U1STZ',
    name: 'Big Teddy Bear 4Ft',
    price: 50,
    description:
      "Size:4 feet from head to toes.Color:as the picture shown.The giant teddy bear is so good for hugging and snuggling because of its beautiful color and perfect size.\nMaterial:Stuffed with high quailty polyester|Age:Appropriate for 3+ years\nSuitable for Valentines day,Christmas,Birthday,Children's day,Thanksgiving day,Graduation party,baby shower or party decorations etc.\nPerfect gift for Girlfriend,Boyfriend,Women,Girls,Boys,Kids,Adults,Wife,Children or friends\nGreat design and valuable price.You will never regret choosing this big teddy bear.",
    brand: 'Poutmac',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv8l176x0apbvo3k6rcql4tp_630180__FJLwZ4td9',
    name: 'Hand Warmers Rechargeable 2 Pack',
    price: 50,
    description:
      'Magnetic Attraction, Beyond Imagination. The twins hand warmers are attached together by strong magnets, yet they may be easily separated when necessary. You may combine them to create a single palm-sized hand warmer, or separate them to slide them into the pockets, hold one in each hand, share one heater with your family.',
    brand: 'OCOOPA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clot1ghl3002kju17htrsy0k6_4640250__MsqMIkCJNK',
    name: 'Starbucks eGift Card',
    price: 50,
    description:
      'There’s always a Starbucks in reach, so a Starbucks Card is the perfect gift for everyone. You can easily send Starbucks eGifts with relevant designs for any occasion you’re celebrating, whether it’s saying thanks, recognizing an achievement, or simply letting someone know you are thinking of them.',
    brand: 'Starbucks',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2gwir0rrwoo5cmy6pgcl8_2217640__-PHoT2N2_',
    name: 'Advantage Wired Controller',
    price: 49,
    description:
      '\n    Multi-Zone RGB Lighting – Customize you controller with 4 individual lighting zones and 3 lighting modes for thousands of color combinations\n    Built-In IR Transmitter –Allows you to control compatible Lumectra Zone RGB lighting accessories from your gamepad\n    Advanced Gaming Buttons – Get an edge over the competition with two mappable buttons you can program on-the-fly, mid-game—no system settings to configure\n    3-Way Trigger Locks – Set the travel distance of the triggers with three different positions to pull off quicker actions in your favorite FPS games or go full throttle in a high-end race car\n    Dual Rumble Motors - Take your gaming experience to the next level, providing tactile feedback and sensations that bring your virtual worlds to life\n    Immersive Impulse Triggers – Provides reactive rumble sensations using built-in motors so you can feel the action of the game*\n    Smooth Controls – Precision-tuned analog sticks and embedded anti-friction rings for superior controls\n\n    Headset Compatible – Plug in your favorite 3.5 mm headset through the stereo headset jack\n    Officially Licensed - for Xbox Series X|S and works on Xbox One and Windows 10/11\n    PowerA Gamer HQ App – Test and calibrate your controller with the free official app\n\n',
    brand: 'PowerA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhfhn2d0135h3ut0jrdfx0s_2363791__nU8h4dpSM',
    name: 'IKEA LÅNESPELARE Floor protector, 43 1/4x39 3/8 "',
    price: 49,
    description:
      "Creates the right gaming feeling and protects the floor against scratches and dirt from the gaming chair's casters.\n\nThe rubber-covered underside ensures that the floor protector stays firmly in place and allows the gaming chair’s casters to roll quietly and smoothly.\n\nThe floor protector also dampens sound, which is certainly appreciated by others in the gamer’s surroundings.\n\nThe durable surface is easy to wipe dry when spills happen, even when the game is at its most intense.",
    brand: 'IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1zeyyy50000aag2d26wnmf5_1570625__UnejxfLyy',
    name: 'Rat Attack',
    price: 48,
    description: null,
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpfsp9i10004jw16pijv7g4a_4462499__v31xfZvik',
    name: 'Tokaido Board Game',
    price: 48,
    description:
      ' TRAVEL THE FAMED TOKAIDO ROAD: Welcome to the Tokaido, the legendary East Sea Road connecting Kyoto to Edo, in Japan. In Tokaido, each player is a traveler crossing the "East Sea Road", one of the most magnificent roads of Japan. Here you will begin an extraordinary journey during which you will discover a thousand marvels.\nADVENTURE GAME: While traveling, you will meet people, taste fine meals, collect beautiful items, discover great panoramas and visit temples and wild places but at the end of the day, when everyone has arrived at the end of the road you\'ll have to be the most initiated traveler – which means that you\'ll have to be the one who discovered the most interesting and varied things. ',
    brand: 'Funforge',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2jdpn0zawoo5c23fvhf61_3196001__F105esc3B',
    name: 'USB Streaming Gaming Microphone',
    price: 48,
    description: '',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllb52io10000jj1631kdnlta_7005435__H2Uz7Nl_C',
    name: 'Supreme Hanes Crew Socks Crew Socks (4 Pack) White',
    price: 47,
    description:
      'Looking for a new subtle flex? Supreme has been collaborating with Hanes on branded basics for years, delivering boxer briefs, tagless tee shirts, and socks for anyone looking to upgrade their basics in a major way. The Supreme Hanes Crew Sock 4 Pack features a Supreme Logo along the band of the sock. \n\nThe four pack of white socks has released numerous times throughout the years and retailed for $20 USD.',
    brand: 'Supreme x Hanes',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2jdpn0zapoo5ck33j5fk5_5798122__hYkO3uUWA',
    name: 'Ultimate Wired Controller Ultimate Pastel Pink',
    price: 47,
    description:
      '\n    Officially Licensed by Xbox. Compatible with Xbox Series X, Xbox Series S, Xbox One & Windows 10 and above.\n    Ultimate Software wirelessly with iOS and Android & wired on Xbox and PC\n    Custom Profile switch button, 3 profiles, switch on the fly\n    Customize button mapping, adjust stick & trigger sensitivity, vibration control and more\n    Two extra Pro-level Back Buttons and 3.5mm Audio Jack to directly connect your headphones\n    Perfect classic d-pad, trigger vibration, enhanced grip & a 3 meter cable\n',
    brand: '8Bitdo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq7cn9yf0000lc18k4chg2k2_5467640__hQhLG-IXS',
    name: "Women's High Waist Casual Wide Palazzo Pants",
    price: 47,
    description:
      'abric type100% Polyester\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nCountry of OriginChina',
    brand: 'Kocowoo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm00ihocl01dg10zx01hql8en_8934312__fa4q8EBZB',
    name: 'Kith for Ca Et La Clear Monogram Umbrella',
    price: 47,
    description:
      'Plastic construction\n\nTransparent design\n\nAll-over printed Kith Monogram\n\nFlat tip\n\n\n\nStyle: khl150125-101\n\nColor: White\n\nMaterial: 100% Plastic ',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq7cyx2u001ll715eijykr6x_5025256__6S823dQ7L',
    name: "Women's Ruched Bikini Set Criss Cross Back",
    price: 46,
    description:
      'Fabric typePolyester/Spandex\nCare instructionsMachine Wash\nOriginImported\nClosure typeSelf Tie',
    brand: 'Hilinker ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2c1c80dwyoo5c546pfe86_9718492__sT_ZZTI1A',
    name: 'SONGMICS 8-Slot Watch Box',
    price: 46,
    description:
      '[2 Layers, Large Capacity] Store your watches in the 8 slots of the top layer and organize your watchbands, rings, and cufflinks in the various compartments of the bottom drawer—this 2-tier watch box keeps your treasures in one convenient place.\n\n[Style Your Watch Collections] Featuring rustic solid wood with rich grain and a large, clear glass lid, this watch holder not only meets your storage needs, but also accentuates your watch collection and adorns your space.\n\n[Quality Materials, All-Around Protection] Crafted with a sturdy wood frame outside and soft velvet inside, this watch box offers all-around protection for your watches from accidents and scratches. The soft-yet-supportive pillows keep them in good shape.\n\n[Large Glass Lid] This watch case comes with a large, clear glass top, so you can show off your watch collection, keep them away from dust, and find your fave instantly to save time on hectic mornings.',
    brand: 'SONGMICS',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1zf0uk6000011pckg8otk20_2415996__6lHsuSYFk',
    name: 'Skeleton Kitty Bonez',
    price: 46,
    description:
      'Realistic-looking skeleton prop made from heavy-duty molded plastic. Cat skeleton has a moveable jaw and bendable tail. Measures 18 inches x 5.5 inches x 10.25 inches.\nMaterial : Plastic',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m44w17q1oo5co63y2ae8_4723083__97d5SwdPg',
    name: 'GIM Wireless Charging RGB Gaming Mouse Pad',
    price: 46,
    description:
      'Brand\tGIM\nColor\tBlack-15W\nSpecial Feature\tNon-slip, Waterproof\nRecommended Uses For Product\tOffice, Gaming\nMaterial\tRubber',
    brand: 'GIM',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwt3e4n003wle15odh9jie1_3835028__bWQRdflr_',
    name: '1-800-Baskets.com eGift Card',
    price: 45,
    description:
      '1-800-Baskets.com® has a large selection of expertly designed and thoughtfully crafted gift baskets including fruits, gourmet foods, snacks, candies, and spa and wellness gifts perfect for such occasions as anniversaries, birthdays, housewarmings, new babies, career achievements, sympathy sentiments, and get well wishes. This gift card can also be redeemed at any of 1800Flowers.com nine brands.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clot1fxs00010lb162n56m1an_1183081__r9g2V9UKE',
    name: 'Starbucks eGift Card',
    price: 45,
    description:
      'There’s always a Starbucks in reach, so a Starbucks Card is the perfect gift for everyone. You can easily send Starbucks eGifts with relevant designs for any occasion you’re celebrating, whether it’s saying thanks, recognizing an achievement, or simply letting someone know you are thinking of them.',
    brand: 'Starbucks',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clw9ba3uj0e8nze59ajznshd6_6720749__KXej9f4ma',
    name: '2020 Chevy Corvette Diecast Model',
    price: 45,
    description:
      'Brand new box. Real rubber tires. Has steerable wheels. Officially licensed product. Made of diecast with some plastic parts. Detailed interior, exterior, engine compartment. Opening frunk, doors and engine compartment. Dimensions approximately L-10.5, W-4.75, H-2.5 inches.',
    brand: 'Maisto',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq6shvqq00fdjt16f4f96kea_5162675__Wm88Dvcb8',
    name: "Women's Bikini Two Piece Swimsuit Deep Green",
    price: 45,
    description:
      '\nFabric type\nNylon,Spandex\nOrigin\nImported\nClosure type\nTie\nTop style\nCutout\n',
    brand: 'ZAFUL',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll74ss0b0006l7175lmvibpn_7040402__3Bp8pnH8w',
    name: 'Nintendo eShop Gift Card [Digital Code]',
    price: 45,
    description:
      "Give the gift of fun with a Nintendo eShop gift code\nIt's easy—apply it to your Nintendo eShop account in seconds.\nIt ensures that you’ll always have funds on hand to help with purchases of new games and applications\nIt’s designed for your Nintendo eShop purchases—no credit card required.\nThe perfect gift for anyone who loves to play—including you. Choose from over 1,000 new, classic and indie games – delivered directly to your Nintendo Switch system.",
    brand: 'Nintendo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0crng75001kqb7j2riyg4ut_5418179___y3MJE4_O',
    name: 'Nike mens Benassi Just Do It Slides',
    price: 45,
    description:
      'The Nike Men\'s Benassi Just Do It Slides are a perfect blend of comfort and style, ideal for casual wear or post-workout relaxation. These slides feature a soft, padded strap with the iconic "Just Do It" logo, providing a secure and comfortable fit. The cushioned footbed offers excellent support and comfort, while the textured sole ensures traction on various surfaces. Whether you\'re lounging at home, heading to the beach, or running errands, the Nike Benassi Just Do It Slides offer effortless style and all-day comfort.',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsapdryd00iaji1cabmcawqc_3842431__1WhZxrUAk',
    name: 'Zippo Year of The Dragon 2024 Red Matte Pocket Lighter',
    price: 45,
    description:
      'Genuine Zippo windproof lighter with distinctive Zippo "click"\nAll metal construction; Windproof design works virtually anywhere\nRefillable for a lifetime of use; For optimum performance, we recommend genuine Zippo premium fuel, flints, and wicks\nMade in USA; Lifetime guarantee that "it works or we fix it free"\nFuel: Zippo lighter fuel (sold separately)',
    brand: 'Zippo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllfpjctt0000ia16niq80owr_8790233__bosc9FVKw',
    name: "Marvel's Spider-Man: Miles Morales Ultimate Edition",
    price: 45,
    description:
      "Miles morales discovers explosive powers that set him apart from his mentor, peter parker. Master his unique, bio-electric venom Blast attacks and covert camouflage power alongside spectacular web-slinging acrobatics, gadgets and skills.\n\nA war for control of Marvel's new York has broken out between a devious Energy Corporation and a high-tech criminal army. With his new home at the heart of the battle, miles must learn the cost of becoming a hero.\n\nTraverse the snowy streets of his new, vibrant and bustling Neighborhood as miles searches for a sense of belonging. When the lines blur between his personal and crime-fighting lives, he discovers who he can trust, and what it feels like to truly be home.",
    brand: 'Sony',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhbqdal0039tp07es8c3gnq_4355346__Q-sPtznau',
    name: 'IKEA UPPSPEL Pegboard, black, 30x22 "',
    price: 45,
    description:
      'Here you can organize, store and display your gaming gear while having it all close at hand. Complete with UPPSPEL accessories to create a cool atmosphere and a professional impression.',
    brand: 'IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv8ynfdv02g89ft7z0ienseu_8645666__p59zGcDJE',
    name: 'Kith x Spider-Man 60th Anniversary Comic Book',
    price: 45,
    description:
      "Season\nFW22\nRelease Date\n07/11/2022\nRetail Price\n$10\nProduct Description\nPlease note: this is an ungraded comic book and may have minor creases or other condition imperfections.\n\nKith has teamed up with Marvel for yet another highly coveted collaboration. The Kith x Spider-Man collection included apparel, accessories, collectibles and more. This Kith Spider-Man 60th Anniversary Comic Book was available in-store only, and was also included as a free gift with all apparel purchases during the online drop. The cover features Spider-Man flying through a city with the KITH logo sign in the background on one of the buildings. This comic is sure to be a sought after collector's items for Kith enthusiasts and comic collectors alike.\n\nThe Kith Spider-Man 60th Anniversary Comic Book released on July 15th, 2022, for a retail price of $10.",
    brand: 'Kith x Spider-Man',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2h1s00s3eoo5c5xvywr0k_6102841__ib8g_vene',
    name: 'Logitech MK345 Wireless Keyboard and Mouse',
    price: 45,
    description:
      '\n    Full-size Keyboard Layout: Comfortable, quiet typing on a familiar keyboard layout with generous palm rest, spill-resistant design (2), and easy-access media keys like mute, volume, and play\n    Comfortable Right-handed Mouse: This wireless USB mouse features a hand-friendly contoured shape for all-day comfort, plus smooth, precise tracking and scrolling for easier navigation\n    Reliable Connection: Advanced 2.4 GHz wireless connection delivers the reliability and speed of a corded connection with wireless convenience and freedom up to 33 ft away (3), at home or at work\n    Extended Battery: Say goodbye to the hassle of charging cables and changing batteries and get up to 3 years of battery life for the keyboard and 18 months for the mouse (1) with MK345\n    Compatibility: This keyboard mouse set works with PCs using Windows or Chrome operating systems; simply plug in to your laptop or desktop computer and begin using\n    Upgrade to Logitech MK540 Combo: For increased comfort try MK540 wireless keyboard and mouse combo, with scooped keys, a palm rest, a full-size mouse with soft rubber grips, and customizable shortcuts\n    “Keyboard has sturdy tilt legs with adjustable height\n',
    brand: 'Logitech',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqg5k0gs000il3186f11fk3y_414861__6KcnZXMY-',
    name: 'Kitchen Oven Mitt Navy Blue ',
    price: 45,
    description:
      'A must in every kitchen, Williams Sonoma signature oven mitt protects the hand and forearm from high heat. To shield hands from heat, our sturdy oven mitt is quilted with heavyweight striped-cotton twill on the outside and thick protective cotton terry inside.',
    brand: 'Williams-Sonoma ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllqvku9y000kjk170f3euls5_8093662__CtQy0L3vN',
    name: "KAWS x Reese's Puffs Cereal (Not Fit For Human Consumption)",
    price: 45,
    description:
      'Release Date\n11/08/2021\n\nRetail Price\n$4\n\nDimensions\n2 X 7.75 X 11.25 IN / 5.1 X 19.7 X 28.6 CM\n\nProduct Description\nKAWS followed up Travis Scott and Lil Yachty as the next artist to collaborate with Reese’s Puffs Cereal. The KAWS Reese’s Puffs Cereal features a brown KAWS Companion character floating inside a Reese’s Cup full of Reese’s Puffs. The Reese’s Puffs are made of real peanut butter and have only 160 calories per serving.\n\nThe KAWS x Reese’s Puffs Cereal (Not Fit For Human Consumption) released November 8, 2021.',
    brand: "KAWS x Reese's",
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0zqpw8a000012mv9qnpfpf8_3581364__hi53pEFdm',
    name: 'Razer Ergonomic Wrist Rest Pro',
    price: 45,
    description:
      'The Razer Ergonomic Wrist Rest Pro is designed to provide comfort and support during long gaming or work sessions. It features memory foam cushioning that adapts to the natural alignment of your wrists, reducing pressure and strain. The wrist rest is equipped with Razer Chroma RGB lighting, allowing for customizable effects to match your setup. It has an anti-slip rubber base to ensure stability during intense use, making it an ideal accessory for gamers seeking both comfort and aesthetics.',
    brand: 'Razer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2h1s70s5zoo5cij6e6wxy_50512__amZQ45VxC',
    name: 'K10 Wired Gaming Keyboard',
    price: 45,
    description:
      'Brand: RedThunder\nColor: Black\nConnectivity Technology: Usb, Radio Frequency\nSpecial Feature: Numeric Keypad\nCompatible Devices: Personal Computer',
    brand: 'RedThunder ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpw476wo0050l317ww8m403k_4577695__gOrDvQpaR',
    name: 'PackDraw Present',
    price: 45,
    description:
      'This item cannot be redeemed and serves as an alternative to a $45 voucher for the Limited Time Holidays Event.',
    brand: 'N/A',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhbic6z009io5lpmnq2xos3_6094264__MBloX_WvdJ',
    name: 'IKEA LÅNESPELARE Accessories stand',
    price: 44,
    description:
      'Need a helping hand to keep your desk tidy? This accessory stand is happy to come to the rescue and takes care of cables, headsets and other gadgets that you want tidied away, yet still have within reach.',
    brand: 'IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpacqkdx00djl116zd8ziy1b_7882947__RVtq_nYyBy',
    name: 'Snow Shovel',
    price: 43,
    description:
      '\nMaterial\tStainless Steel, Resin\nColor\tGrey, Black\nBrand\tSuncast\nItem Dimensions LxWxH\t5 x 19.75 x 50.75 inches\nStyle\tKnock Down\nHandle Material\tAlloy Steel',
    brand: 'Suncast',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2gifr0qhaoo5c7sqrn924_959810__NJYr96l9Z',
    name: 'Jurassic World Evolution 2',
    price: 43,
    description:
      'Immerse yourself in a compelling and original Jurassic World narrative set after the Earth-shattering events of Jurassic World: Fallen Kingdom.\nTake control with deeper management tools and creative options. Construct and customise new buildings and flex your managerial muscle across never-before-seen locations ranging from dense forests to rocky deserts.\nChaos Theory mode lets you play through key moments of your favourite films - with a twist. Experience "what-if" scenarios from iconic Jurassic World and Jurassic Park films, with each level set across eras and locations from all five movies.',
    brand: 'Sold Out Sales',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv8dkhde0kcx3h6bv1lnvkko_629163__qOId3Jss8',
    name: 'Elgato Heavy Clamp',
    price: 43,
    description:
      'Padded Jaws, Pole Grooves: Attach to tables, shelves, doors, random objects, mount on crossbars, light stands, tubular structures.\nFour ¼" Threads: Reposition the ball head or add additional gear, easily set angles for lights, overhead cameras, etc.\nHeavy-Duty: 10-12 mm-thick aluminum frame, steel torque screw.\nPremium Finish: High-quality black powder coating.\nGreat With: Elgato Key Light Mini, Master Mount, Flex Arm, and more.',
    brand: 'Elgato',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm00ix4ii00jccxzgoz26emex_4160511__3zamFd_U5',
    name: 'Kith for Lexon Pen',
    price: 43,
    description:
      'Kith for Lexon pen\n\nTwo-in-one pen and phone\n\nTablet stylus\n\nEngraved Kith logo\n\nKith for Lexon custom packaging\n\n \n\nStyle: KH9409-103\n\nColor: Silver',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsi2f3vs004yl615mwe94yi7_554770__09OE026ln',
    name: 'Pickle Necklace',
    price: 43,
    description:
      'Pickle Necklace is a nice gift for Pickle Lovers, Pickle is a very common role in our daily life.\nThis Pickle necklace is made of 925 Sterling Silver which is Nickel-free, Lead-free, Cadmium-free and Hypoallergenic. Long Time Wearing Keeps You at Good Health.\nThe size of Pickle pendant is 10 mm*21 mm(0.39 inches*0.82 inches), the length of 1.2mm O chain is 18inches.\nCome in a exquisite necklace box.',
    brand: 'UCADRIT',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqg5aohd00agl617iyhwfkxl_8119557__q-uP6hHbS',
    name: 'Classic Striped Towels',
    price: 43,
    description:
      'Williams Sonoma\'s highly absorbent basketweave designer striped kitchen towels are made of Turkish cotton in contrasting colors, with a loop for hanging.\nTurkish cotton is premium cotton that has extra long fibers. Using longer fiber cotton in spinning yarn means fewer joins. Fewer joins results in stronger and smoother cotton threads. These kitchen towels become even softer, fluffier, and more absorbent with successive washings.\n\nMachine wash. 30" x 20". Made in Turkey. Set of four.',
    brand: 'Williams-Sonoma',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2h1s90s6uoo5cmnjn1gg2_5600102__gcI_7-eQO',
    name: 'K552 Mechanical Gaming Keyboard',
    price: 42,
    description:
      'Brand\tRedragon\nCompatible Devices\tGaming Console\nConnectivity Technology\tUSB\nKeyboard Description\tGaming\nSpecial Feature\tErgonomic, Backlit\nColor\tBlack\nOperating System\tWindows\nNumber of Keys\t87\nKeyboard backlighting color support\tRGB\nStyle\tModern',
    brand: 'Redragon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllb583wv000sl016wecwmbys_4250602__Cq_7GHq8O',
    name: 'Supreme Plastic Box Logo Sticker Set',
    price: 42,
    description: null,
    brand: 'Supreme',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwdzpi9d02pmn7r6klleb04p_2382619__NXjwxnurE',
    name: 'Skullcandy Dime 2 In-Ear Wireless Earbuds',
    price: 30,
    description:
      "Supreme Audio - workout, relax, skate listening favorite tunes. Hear every beat of your music and let the bass blow UP. We put a mic in each bud allowing you to have 1 bud in and leave the other in the case, call and hear outside sound at the same time\nHours of Power - We built Dime 2 with a small, efficient battery that cuts its carbon footprint to less than half that of other earbuds. It delivers 3.5 hours of listening time in the bud and 2 full charges in the case for a full 12 hours of battery life\nNever lost with Tile - With Tile technology, Skullcandy makes it super easy to track down either earbud and keep your gadgets safe. Download the Tile app and follow the instructions to activate\nSick Fit - The way we engineered the Dime 2 means that no matter how hard you're running, shredding in the snow or sleeping the Dime 2 will stay in your ear. We have also included 3 different rubber tips to fit everyone's ear",
    brand: 'Skullcandy',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv8z9e2l059o9ft7yxu0rnbe_3879180__PrKjr5bH2',
    name: 'Kith x Lucky Charms Luck Kithmas Cereal Box',
    price: 30,
    description: '(Not Fit For Human Consumption)',
    brand: 'Kith x Lucky Charms',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv8mzyy70am76w9zcy3mj931_5766388__WiabBN_j8',
    name: 'HyperX Pudding Keycaps',
    price: 30,
    description:
      'Shine-through design enhances RGB lighting: The dual-layer design of these keycaps is designed to let more light through, making your keyboard’s RGB lighting even more stunning. Available in 3 colors!\nDurable Double Shot PBT keycaps: These PBT keycaps are made with thick walls and are resistant to wear, friction, and the dreaded keycap shine.\nAdditional Customization Options: With 2 special space bar designs and 3 different color options, you’ll have even more ways to personalize your keyboard.\nSignature HyperX font: Our bold, wide font gives more space for light to shine through, enhancing the visibility and legibility of the individual keys.\nIncluded HyperX keycap removal tool: Our keycap removal tool is specially designed to precisely fit HyperX keycaps.',
    brand: 'HyperX',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0cqyjwr00rcyfjkcuysigng_6865283__XvQI76oJA',
    name: 'Pillow Slippers for Women and Men',
    price: 30,
    description:
      "The BRONAX Pillow Slippers for Women and Men are the ultimate comfort footwear, perfect for both indoor and outdoor use. These house slides and shower sandals feature a cushioned thick sole that provides exceptional support and softness, making every step feel like walking on clouds. Designed with a sleek, minimalist style, they are ideal for lounging at home, using in the shower, or even stepping out for a quick errand. The non-slip sole ensures safety on wet surfaces, while the durable material offers long-lasting wear. Whether you're relaxing after a long day or starting your morning routine, the BRONAX Pillow Slippers offer the perfect blend of comfort and functionality.",
    brand: 'BRONAX',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll6zu9hh0002mg179nziw4hu_1879929__y00qcfyB9',
    name: 'PlayStation Store Gift Card [Digital Code]',
    price: 30,
    description:
      "May be redeemed for anything on PlayStation Store. Choose from thousands of games, add-ons, subscriptions and more.\n\nPre-order. Pre-load. Play. Can't wait for a game? Pre-load it to your console and play as soon as it's available.\n\nFind exclusive deals on top games. With regular deals and discounts, there’s always something to play at a price you’ll love.\n\nDownload purchases remotely. Add your purchases to your download queue from anywhere online – and start playing sooner.",
    brand: 'PlayStation 4 | DRM: PlayStation Network',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1ssivss0002epj64n6kye85_8101154__xygkIMAJ2',
    name: 'Lattafa Yara for Women Eau de Parfum Spray 100 ml',
    price: 30,
    description:
      'Lattafa Yara for Women Eau de Parfum is a 100ml (3.4 oz) fragrance with an Amber Vanilla profile, launched in 2020. It features top notes of orchid, heliotrope, and tangerine, leading into a heart of gourmand accords and tropical fruits. The base notes include a warm blend of vanilla, musk, and sandalwood, creating a rich and long-lasting scent. This fragrance is designed for those seeking a balance of sweetness and elegance, making it a versatile choice for various occasions.',
    brand: 'Lattafa Yara',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0zrdmpi00022kp1tp0tunhi_8216504__krA-MRALu',
    name: 'Razer Gold eGift Card',
    price: 30,
    description:
      "The Razer Gold Gift Card offers a convenient way to top up your Razer Gold account, which can be used to purchase games, in-game content, and other digital goods. It's available in multiple denominations and provides access to exclusive rewards and promotions within the Razer Gold ecosystem. Ideal for gamers looking to enhance their gaming experience across various platforms.",
    brand: 'Razer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll774o670000la158vnj36ui_3491763__JIOZ6S9n8',
    name: 'Minecraft - Nintendo Switch [Digital Code]',
    price: 30,
    description:
      'Minecraft is a game about placing blocks and going on adventures\nExplore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles\nPlay in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off the dangerous mobs\nPlay on the go in handheld or tabletop modes\nIncludes Super Mario Mash-Up, Natural Texture Pack, Biome Settlers Skin Pack, Battle & Beasts Skin Pack, Campfire Tales Skin Pack; Compatible with Nintendo Switch only',
    brand: 'Microsoft',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwwcqfg002ql6183fjnv6jb_9774686__iweceG4Ic',
    name: "Fleming's Prime Steakhouse & Wine Bar eGift Card",
    price: 30,
    description:
      'Fleming’s Prime Steakhouse & Wine Bar is an ongoing celebration of exceptional food and wine. Enjoy the finest aged prime steaks and discover new tastes with our award-winning wine list. Known for its warm, inviting ambiance Fleming’s features an open dining room built around an exhibition kitchen and expansive bar. Adjacent to the main dining area are private dining rooms that can accommodate small or large groups. Fleming’s lively atmosphere, gracious service and dedication to excellence turns evenings out into memorable moments. The Fleming’s Prime Steakhouse & Wine Bar Gift Card is also valid for use at all U.S. Outback Steakhouse, Bonefish Grill and Carrabba’s Italian Grill locations. For more information and sample menus, visit www.FlemingsSteakhouse.com',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL',
    name: 'LED Candles',
    price: 30,
    description:
      'Brand\t‎LED Lytes\nManufacturer\t‎LED Lytes\nPart Number\t‎LLS6\nItem Weight\t‎1.83 pounds\nProduct Dimensions\t‎2 x 2 x 9 inches\nBatteries\t‎6 CR2 batteries required.\nIs Discontinued By Manufacturer\t‎No\nAssembled Height\t‎9 inches\nAssembled Length\t‎2 inches\nAssembled Width\t‎2 inches\nItem Package Quantity\t‎6\nStyle\t‎Contemporary\nColor\t‎Dripping Ivory Wax with Amber Flame\nShape\t‎Round\nMaterial\t‎Wax\nFinish types\t‎Ivory Wax\nNumber of Lights\t‎6\nIncluded Components\t‎Battery Powered\nVoltage\t‎0.3 Volts\nSpecific Uses\t‎Wedding decorations for reception\nSpecial Features\t‎Dripping wax affect, Real wax, Battery candles, Timer, Set of 6, Flameless candles, LED candles\nShade Material\t‎Wax\nLight Direction\t‎Uplight\nPower Source\t‎Battery Powered\nSwitch Style\t‎Toggles\nSwitch Installation Type\t‎Tabletop\nBatteries Included?\t‎No\nBatteries Required?\t‎No\nType of Bulb\t‎LED\nWattage\t‎1 watts',
    brand: 'LED Lytes',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqh0ivli008cl617qghxnh7e_7101508__fXX87ixCw',
    name: 'Glass Measuring Cup Set',
    price: 30,
    description:
      "This handy trio of measuring cups ensures you'll always have the right size on hand. Each has easy-to-read measurement markings in red for at-a-glance precision, easy-grip handles, and spouts designed for controlled pouring. And because they're made of durable Pyrex glass, you can melt ingredients like butter or chocolate right in the cup – and then pop it in the dishwasher for easy cleanup. This set includes: (1) 1-cup Measuring Cup, (1) 2-cup Measuring Cup and (1) 4-cup Measuring Cup.",
    brand: 'Pyrex ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clot1en6u0000la168w5y3duc_3605595__tMfjvRsO4',
    name: 'Starbucks eGift Card',
    price: 30,
    description:
      'There’s always a Starbucks in reach, so a Starbucks Card is the perfect gift for everyone. You can easily send Starbucks eGifts with relevant designs for any occasion you’re celebrating, whether it’s saying thanks, recognizing an achievement, or simply letting someone know you are thinking of them.',
    brand: 'Starbucks',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnlalaac0000lc17zohb0wvg_5946988__oAN40IfqU',
    name: 'Discord Nitro 3-Month Subscription',
    price: 30,
    description:
      'Unleash more fun chatting and hanging out with friends on Discord with Nitro!\nGet access to all Nitro perks, including HD streaming, custom emojis, bigger file uploads, and more.\nA great gift for yourself and your favorite folks on Discord. Nitro gift card codes are easy to use and never expire.',
    brand: 'Discord',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhlvla6004ilj672jvfa4lb_1959461__XLGERXNSY',
    name: 'IKEA LÅNESPELARE Neck pillow',
    price: 29,
    description:
      'You easily shape the pillow around your neck by using the adjustable band.\n\nEasy to attach to your favorite chair by using the buckle fastening.\n\nSimple to keep clean since the fabric cover can be removed and machine washed.\n\nThe fabric is woven from cotton and feels soft against your skin.',
    brand: 'IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m7gb17x3oo5cxhe5rn30_1547035__aCjP8Uu6Bl',
    name: 'Tile Mate',
    price: 29,
    description:
      'VERSATILE TRACKER - Tile helps you keep track of your things. Attach the Tile Mate to everyday things like keys, backpacks or purses. Use our free app to find them.\n\nFIND NEARBY - Use the Tile app to ring your Tile when it’s within Bluetooth range, or ask your Smart Home device to find it for you.\n\nFIND FAR AWAY - When outside of Bluetooth range, use the Tile app to view your Tile’s most recent location on a map.\n\nFIND YOUR PHONE - Double press the button on your Tile to make your phone ring, even when it’s on silent.\n\nNOTIFY WHEN FOUND - Enlist the secure and anonymous help of the Tile Network to help find your things. If your lost Tile is found, If your Tile is lost, add your contact information so you can be reached when someone scans the QR code on your lost Tile.',
    brand: 'Tile',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrqie7pj004cl2177ux37yd3_1299622__0MIjLfB81',
    name: 'Bike Repair Workstand with Adjustable Clamp',
    price: 29,
    description:
      'The bicycle maintenance rack is made of steel and plastic,mounting flange has 4 holes,sturdy and stable to hold up to 45lbs (20kg),so it is sturdy enough to support your bike.',
    brand: 'DASBET',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clkx50b1q0006mp17dsdthtsd_7083157__Wt0e8X1rf',
    name: 'Barbie The Movie Ken Doll',
    price: 29,
    description:
      'Take home a part of Barbie The Movie with this Ken doll! Dressed in a surf-casual outfit, he is having the best day ever in Barbie Land!\nKen doll rocks a pastel pink and mint green striped top. The matching shorts even feature working pockets!\nHe looks as easy and breezy as film Ken with his surfboard, platinum blond hair, unbuttoned top, and white sneakers.\nFeaturing a posable body and displayable packaging, this Ken doll makes a great gift for fans and collectors alike!',
    brand: 'Barbie',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clkx5gqds000bjf16y2ar8fwb_9130366__Fpnu6yS6c',
    name: 'Get Naked Bath Mat Pink',
    price: 28.75,
    description:
      'LOOKING FOR A FUN BATH MAT TO DRESS UP YOUR BATHROOM? Our bathroom mats have style and are the perfect shower decor that will definitely get noticed. Made from soft and absorbent materials, these cute bathroom rugs will add a touch of style to any modern, rustic, minimalist, boho, or preppy bathroom decor.\nSUPER SOFT RAISED LETTER DESIGN - Our tufted microfiber Get Naked rug is densely woven with raised plush letters making it super cozy on your feet. Are you looking for College apartment decor? Our mats also work with your Urban Outfitters inspired bath decor or pink bathroom set.\nNON SLIP LATEX BACKING & ULTRA ABSORBENT - All of our cute bathroom mats use an environmentally friendly, non slip latex backing for your safety. Our mats are also extremely absorbent and designed to help keep water off your floor while still going with your light pink decor.\nQUICK DRYING & MACHINE WASHABLE - This funny bath mat not only looks awesome but is also quick drying. On top of that, it\'s machine washable and very easy to care for.\nMATERIALS & SIZE - Made of tufted polyester microfiber with a non slip latex backing. 20" x 31"\n',
    brand: 'New Mungo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq6ry76t000pju17tm8ludbg_5191403__YCElV2eOj',
    name: "Women's Short Sleeve T Shirt Distressed Crop Top ",
    price: 28,
    description:
      '\nCare instructions\nMachine Wash, Do Not Bleach\nClosure type\nPull On\nNeck style\nCrew Neck\nSleeve type\nShort Sleeve\n',
    brand: 'SweatyRocks',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln6m9zzt0000l817v18u9txd_6892243__Ho8Taihi-',
    name: 'Branding Iron Heart',
    price: 28,
    description:
      '12" long\nIron is 1 1/2" wide x 1 1/2" tall\nMade of iron. Thoroughly dry and apply cooking oil to avoid rusting\nEasily heated on an open flame or ideally, a small propane torch\nWorks great on leather, wood and large cuts of meat',
    brand: 'BBQ Fans',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1tvdi8e0000i0o6a51u5piu_292617__JoHJNj4eb',
    name: "Elizabeth Taylor Women's Perfume, White Diamonds, Eau De Toilette EDT Spray, 3.3 fl oz",
    price: 28,
    description:
      'Elizabeth Taylor’s White Diamonds Eau de Toilette Spray is a classic, timeless fragrance known for its elegance and sophistication. With a blend of floral and green notes, this perfume opens with a combination of neroli, lily, and bergamot, while its heart reveals jasmine and rose. The base is enriched with a warm combination of amber and musk, providing a rich and long-lasting scent. This 3.3 fl oz perfume has been a symbol of glamour and luxury, making it one of the best-selling celebrity fragrances of all time ￼.',
    brand: 'Elizabeth Taylor',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhl07ar00gj7zci9gvhwqr1_4810704__eg90rI4rf',
    name: 'IKEA LÅNESPELARE Gaming mouse pad, patterned, 35 ½x15 ¾ "',
    price: 28,
    description:
      'Big enough to fit both a keyboard and a mouse.\n\nSmooth surface that allows the mouse to glide quickly over the entire mouse pad without hindrance – perfect for games that demand fast reactions.\n\nThe fabric is chosen with extra care so that you can control the mouse with pixel-precise tracking, regardless of sensor.\n\nSo that you can play at the top of your game, match after match, the surface is both durable and easy to clean.\n\nThe gaming mouse pad stays firmly in place thanks to the rubber-covered underside.\n\nEasy to roll up and take with you or store away in a box.',
    brand: 'IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2h1s60s5soo5cnef9udkt_4276638__k9TsAjcJv',
    name: 'Wired Gaming Keyboard',
    price: 28,
    description:
      'Brand\nSnpurdiri\n\nCompatible Devices\nGaming Console, PC\n\nConnectivity Technology\nUSB\n\nKeyboard Description\nMembrane, Gaming, Mechanical\n\nRecommended Uses For Product\nGaming, Business\n\nSpecial Feature\nErgonomic, Waterproof, Backlit, Transparent Base\n\nColor\nBlack and White\n\nOperating System\nWindows ME, Windows Vista, Windows 8, Windows 7, Windows 10\n\nNumber of Keys\n61\n\nKeyboard backlighting color support\t',
    brand: 'Snpurdiri ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2jqe010quoo5cdz44ugv6_6950051__AMLOM-9QT',
    name: 'Pink RGB LED Gaming Mouse Pad',
    price: 28,
    description:
      'Brand\tMytrix\nColor\tPink\nSpecial Feature\tWaterproof\nRecommended Uses For Product\tOffice, Gaming\nMaterial\tRubber',
    brand: 'Mytrix',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2woo5ch08q063n_2036507__9lXOci93N',
    name: 'HyperX Pudding Keycaps',
    price: 28,
    description:
      'Translucent design: The dual-layer design of these keycaps is designed to let more light through, making your keyboard’s RGB lighting even more stunning.\nDurable double shot PBT material: These PBT keycaps are made with thick walls and are resistant to wear, friction, and solvents.\nSignature HyperX font: Our bold, wide font allows for more light to shine through, enhancing the visibility and legibility of the individual keys.\nStylish keycap removal tool included: Our keycap removal tool is specially-designed to precisely fit HyperX keycaps.\nCompatibility: The full key set is compatible with HyperX and most mechanical gaming keyboards. They complement the exposed LED design of HyperX mechanical key switches.',
    brand: 'HyperX ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllfo75av001ijq1602cey5ce_1474322__02jQOtKiK',
    name: 'Recon 50 Xbox Gaming Headset',
    price: 28,
    description:
      'Take gaming audio and comfort to the next level with the Turtle Beach Recon 50X officially licensed gaming headset for Xbox. The Recon 50X features a lightweight and comfortable design, with high-quality 40mm over-ear speakers that let you hear every crisp high and thundering low. For even more immersive audio, the Recon 50X supports spatial sound technologies like Windows Sonic, Dolby Atmos and DTS Headphone: X. Quickly and easily adjust master volume and mic mute with convenient in-line controls. The Recon 50X also includes Turtle Beach’s renowned high-sensitivity mic, which can be removed when watching movies and listening to music. The versatile multiplatform connection makes it perfect for using with Xbox Series X, Xbox Series S & Xbox One, as well as with PS5, PS4 & PS4 Pro, Nintendo Switch and PC & Mobile devices with 3.5mm connection.',
    brand: 'Turtle Beach',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqpqigmh003djs161ysnwl9s_5941547__k13GAM5o1',
    name: 'Under Armour No Show Socks',
    price: 28,
    description:
      'Pair of 6. \n    Shoe Size: Men 4-8, Women: 6-9\n\n    Medium cushioning throughout foot for all-day comfort and protection\n\n    Mesh panels for added breathability\n\n    Embedded arch support helps reduce foot fatigue\n\n    Fitted heel contours around foot for a better fit\n\n    Material wicks sweat and dries fast\n',
    brand: 'Under Armour',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm05nzdge02km69aq5ziqwe6e_770334__lczGDA84_',
    name: 'LEGO Money Tree',
    price: 28,
    description:
      'The LEGO Money Tree set lets you build a charming and symbolic model of a money tree, often associated with good luck and prosperity. Featuring detailed branches adorned with vibrant green leaves and golden "coins," this set is perfect for display in your home or office as a decorative piece. The LEGO Money Tree makes an ideal gift for LEGO enthusiasts or anyone looking to add a touch of fortune and creativity to their surroundings.',
    brand: 'LEGO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clzsrrjd800ebdtev4lvyv6do_5915328__E3DerXuN0',
    name: "adidas Men's Squadra 21 Shorts",
    price: 28,
    description:
      "Men's moisture-absorbing shorts for soccer\nMoisture-absorbing AEROREADY helps you stay dry\nDrawcord on elastic waist for adjustable fit\nThis product is made with Primegreen, a series of high-performance recycled materials",
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clloeszdq0004mr19bmuf6u70_8158295__rq_DWUdxF',
    name: 'Djungelskog Bear',
    price: 28,
    description:
      'Product Dimensions\n3 x 3 x 23 inches\n\nItem Weight\n14 ounces\n\nASIN\nB0B8DPHMF6\n\nItem model number\nAK-18\n\nManufacturer\nDjungelskog',
    brand: 'Djungelskog',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvbag61104j2em7pld3xl1ju_289002__d-UbI5VWP',
    name: 'Tech Deck DLX Pro 10-Pack',
    price: 28,
    description:
      '10 FULLY ASSEMBLED BOARDS: Build an epic collection of pro decks with the Tech Deck DLX Pro 10-Pack. Don’t choose between Element, Primitive, and Flip Skateboards – collect them all!\nAUTHENTIC BOARD GRAPHICS: Tech Deck fingerboards feature real graphics from the biggest skate brands like Element, Plan B, Almost, and more!\nOFFICIAL: These decks are the real deal! Ride, flip, and grind with an official finger board from real skate companies! From grip tape to bushings, these decks have been recreated down to the smallest detail.',
    brand: 'Tech Deck',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllyofr560002mf16q0u8dy28_1879434__TVYQDjrPT',
    name: 'Clothing Rack',
    price: 27,
    description:
      '\nBrand\tJIUYOTREE\nColor\tGold\nMaterial\tMetal\nRecommended Uses For Product\tCoat,Garment\nProduct Dimensions\t43.31"D x 15.75"W x 59.06"H',
    brand: 'JIUYOTREE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrpte3lx007uld1610v3efm6_3888701__LzAK-W7aW',
    name: 'Bicycle Phone Front Frame Bag',
    price: 27,
    description:
      'LARGE SPACE: Bike bag has enough inside room for long rides, holds a lot of stuff like iphone X, battery, energy gel, small tire pump, repair kits, keys, wallet etc. Perfect compatible with cellphones below 6.5 inches, iPhone XR XS MAX X 8 7 6s 6 plus 5s / Samsung Galaxy s8 s7 note 7, shake-proof bike front frame bag',
    brand: 'ROCKBROS',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ',
    name: 'USB Gaming Mic',
    price: 27,
    description:
      'Recommended Uses For Product\tGaming, Streaming, Singing, Podcasting, Recording, Video Creation\nBrand\tNJSJ\nModel Name\tME6S Gaming Mic\nConnectivity Technology\tUSB A and USB C\nConnector Type\tUSB A and USB C\nSpecial Feature\tTap-to-Mute, Mic Gain, RGB Lights, Zero Latency Monitoring, Play and Plug, Shock Mount\nCompatible Devices\tPC, Laptop, PS4, PS5, Phone, Tablet, Macbook\nColor\tBlack\nIncluded Components\t1x USB C to USB adpter, 1 x User Manual, 1 x Mic with Shock Mount & Round Base Stand, 1x Pop Filter, 1x USB Cable(6 feet)1x USB C to USB adpter, 1 x User Manual\nPolar Pattern\tUnidirectional\n',
    brand: 'NJSJ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1zfcxg70001h5buga726bmu_7945395__9WB7JbyZf',
    name: 'Spider Web with Spider',
    price: 27,
    description: 'WOW! Gigantic spider takes up all of web! 8 feet diameter.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpg4fii70000l117yvlimh7d_3795629__-YuDxymzm',
    name: 'Minecraft Diamond Pickaxe',
    price: 27,
    description:
      '\nFabric Type\nPlastic\nOrigin\nImported\nCountry of Origin\nChina\nAbout this item\n\n    Product includes: one toy axe\n\n    Minecraft (mojang)\n\n    Officially licensed product\n\n    Easy to use, durable and high quality costume accessory\n',
    brand: 'Disguise ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnje8bjo000gl216ljrowqzn_4032689__pCH_oHNv1',
    name: 'Cute Body Pillow',
    price: 27,
    description:
      'The cartoon animal long plush pillow toy is multi-purpose. It can be used as a pillow/sleeping pillow/flat pillow, or as a car doll. It is a perfect choice for going out and playing. The smooth zipper design is easy to remove and wash, and it is clean and hygienic.',
    brand: 'MUPI',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq7ca2kt0012jv16rbly2os2_8017664__RwbDkoV2B',
    name: 'Sparkling Cinnamon Scented Holiday Candle',
    price: 27,
    description:
      'Just a hint of clove added to the spicy warmth of real imported stick cinnamon brings you the season\'s most sparkling fragrance\nParaffin-grade wax delivers a clear, consistent burn\n110-150 hours burn time\nMeasures 6.6"H x 4"D\n22 ounce\nCountry of Origin: USA\nLabel graphics may vary\n100% recyclable in partnership with TerraCycle',
    brand: 'Yankee Candle',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63ec29b88e54e1c321152d03.png',
    name: 'Deran WWE 2K22',
    price: 26,
    description:
      'Get ripped out of the stands and hit with complete control of the WWE Universe. Hitting this hard has never been so easy.\n\nEverything from the controls to the graphics have been redesigned, and feels as real as being ringside at WrestleMania.',
    brand: '2K',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm20nz4s80000i1vfiw6740qf_9341946__c4Yg28aJ8',
    name: 'Mortal Kombat 11 Ultimate (PC) Steam Key UNITED STATES',
    price: 26,
    description:
      'Mortal Kombat 11 Ultimate for PC is the definitive edition of the iconic fighting game, featuring the full base game, all previously released DLCs, and new characters like Rambo, Mileena, and Rain. Available as a Steam Key for the United States, it offers a robust roster of fighters, stunning graphics, and intense gameplay with cinematic story modes and classic 1v1 battles. With enhanced content and additional skins, it provides the ultimate experience for fans of brutal, high-energy combat and competitive fighting.',
    brand: 'Mortal Kombat',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpg4bzip0020jr17s9f37wn2_2015883__E47Q6meLm',
    name: 'Minecraft Diamond Sword',
    price: 26,
    description:
      '\n    100% Injection Molded Plastic Costume Accessory\n    Imported\n    Product includes: one toy sword\n    Minecraft (mojang)\n    Officially licensed product\n',
    brand: 'Disguise',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqogxdgm004gjw18gk3kn3lm_3690332__hTYZXG0Fa',
    name: 'Stanley Insulated Tumbler 14 oz - Black',
    price: 26,
    description:
      'Whichever way your day flows, the H2.0 FlowState tumbler keeps you refreshed with fewer refills. Double wall vacuum insulation means drinks stay cold, iced or hot for hours. The narrow base on all sizes (except 64oz) fits just about any car cup holder, keeping it right by your side. ',
    brand: 'Stanley ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhfuyvo0218jn6tik78wbot_8367931__feIU2xl5m',
    name: 'IKEA LÅNESPELARE Microphone arm, with screw mount/anthracite',
    price: 25,
    description:
      'You can place the microphone exactly where you like to sit comfortably, even during long gaming matches or recordings since the arm can be rotated 360°.\n\nThe arm\'s sturdy dual suspension springs keep your microphone firmly in place in all positions, preventing it from shaking while making your recording better.\n\nIf the microphone is heavy, you can adjust the knobs on both sides of the arm to get exactly the angle you want.\n\nThe arm is simple to clamp to your gaming table or other horizontal surfaces with a thickness of max. 6 cm.\n\nThe practical cable holder means that you avoid a cluttered table with tangled cables, which frees up space.\n\nYou can also fix the microphone arm to the wall if you like.\n\nSuitable for most standard microphones with a 5/8", 3/8" or 1/4" thread size.\n\nEasy to angle and rotate as needed, and just as simple to fold up and bring on trips.',
    brand: 'IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnak626i000kjp17e6snmetu_3982342__eOxKV7Ve2',
    name: 'Albanian Flag',
    price: 25,
    description:
      'Theme: Occasion\nColor: Albania Flag 3x5\nBrand: AJJSUE\nOccasion: Outdoor\nMaterial: Nylon\nSpecial Feature: Double Sided,Heavy Duty\nProduct Dimensions: 10"L x 8"W\nFabric Type: Nylon\nProduct Care Instructions: Hand Wash Only',
    brand: 'AJJSUE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clkxf3s4w0000l81735trhsfw_4608688__Gavt_-E1D',
    name: 'Steam Gift Card',
    price: 25,
    description:
      'Steam Gift Cards work just like a gift certificate, while Steam Wallet Codes work just like a game activation code. Can be redeemed on Steam for the purchase of games, software, wallet credit, and any other item you can purchase on Steam.',
    brand: 'Steam',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltuii14e009nl415899v5011_2613516__DbUFwQhcpb',
    name: 'FC24 - 2800 Points',
    price: 25,
    description:
      'EA Sports FC24 is an exhilarating virtual gaming experience where players compete as part of the EA Sports FC team in intense matches. With skillful gameplay, strategic moves, and thrilling action, earn points to dominate the leaderboard and showcase your prowess on the field.',
    brand: 'EA SPorts',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63ec2726e42b40533597d1c6.png',
    name: "Assassin's Creed Valhalla",
    price: 25,
    description: '',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsmebivz002vl917rop53jf7_2505758__zQPGbDy9Q',
    name: 'Teddy Bear',
    price: 25,
    description:
      'GUND is proud to introduce Philbin, one of our most popular character bears, in a 12” and 18” seated teddy bear format, in creamy vanilla beige and chocolate brown hues. Philbin features a classic design with oversized paws, featuring cute paw pad accents, and a curious expression that’s impossible not to love! Philbin is surface washable for easy cleaning and ships in a protective poly bag. Do not attempt to machine-wash or apply harsh chemical cleaners. Appropriate for ages one and up.\n\nAt the heart of GUND is our collection of stuffed animals and plush toys, including our vast array of cuddly teddy bears, bursting with unique personalities. Building upon our award-winning and beloved plush designs, we continue to practice innovation by constantly developing new original and licensed designs to appeal to the next generation of customers. To that end, each one of our plush toys is constructed with pride from premium materials for unparalleled softness and sustained huggability through the years. From established classic favorites to brand-new modern pals, there’s a GUND teddy bear plush for everyone!\n\nFrom the Manufacturer\nOur 1" understuffed chocolate bear has a sweet personality that makes him impossible to resist. The world\'s most huggable since 1898. Surface washable.',
    brand: 'GUND Philbin',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll6zt9560000jw185y82ywlc_922439__ahA6rpRsR',
    name: 'PlayStation Store Gift Card [Digital Code]',
    price: 25,
    description:
      "May be redeemed for anything on PlayStation Store. Choose from thousands of games, add-ons, subscriptions and more.\n\nPre-order. Pre-load. Play. Can't wait for a game? Pre-load it to your console and play as soon as it's available.\n\nFind exclusive deals on top games. With regular deals and discounts, there’s always something to play at a price you’ll love.\n\nDownload purchases remotely. Add your purchases to your download queue from anywhere online – and start playing sooner.",
    brand: 'PlayStation 4 | DRM: PlayStation Network',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2gwil0rqjoo5ci6exzkai_1720687__HgFANUSiP',
    name: 'Lego Marvel Super Heroes',
    price: 25,
    description:
      'Lego Marvel Super Heroes" for Xbox One is a captivating action-adventure game that transports players into the imaginative world of Lego bricks and the iconic Marvel Universe. Developed by TT Games, this family-friendly title allows players to take control of a vast array of Marvel superheroes, each with their unique abilities, as they embark on a quest to thwart the nefarious plans of the villainous Loki and other iconic Marvel foes. With a blend of humor, puzzle-solving, and action-packed gameplay, the game offers an entertaining and visually appealing experience for players of all ages, all within the whimsical Lego interpretation of the Marvel universe.',
    brand: 'Warner Home Video',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cloomxvj8001yl418ibwobydn_6117032__o9bfbDhFsx',
    name: 'Call of Duty: Black Ops - Rezurrection',
    price: 20,
    description:
      'Lift off into the latest Zombies epic with “Rezurrection,” the new downloadable content pack for “Call of Duty: Black Ops,” and the first to launch players into space for a new dimension of undead action!\nOld school Zombies strategies get blown out the airlock in “Moon,” where the Call of Duty: Zombies saga comes full circle',
    brand: 'Activision',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnw5d39y000cmm16i3zpe8xi_7357975__n-RozWqY4j',
    name: 'Jenga Wooden Blocks Tower',
    price: 20,
    description:
      'THE ORIGINAL WOOD BLOCK GAME: The Jenga game is the original wood block game that has been loved for generations.\nBLOCK BALANCING GAME: Pull out a block, place it on top, but don\'t let the tower fall!\nGAME FOR 1 OR MORE PLAYERS: No friends around? No problem. Play Jenga solo! Practice stacking skills, building the tower and trying not to let it come tumbling down.\nTUBE SHAPED BOX: Includes 54 wood blocks and easy-to-use stacking sleeve to help players build the tower. Comes in an easy "put away" tube-shaped package with a handle for carrying and easy clean up.\nGREAT PARTY GAME: Liven up a party by bringing out the Jenga game! This classic block stacking game is simple, easy to learn, and makes a great birthday or holiday gift.',
    brand: 'Hasbro',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/63ec29fd62a85aa39534c69c.png',
    name: 'Crazy Chicken Xtreme',
    price: 20,
    description:
      '3 exciting new locations\nNumerous treacherous weapons\nBeautifully drawn graphics\n2 offline multiplayer modes for up to 4 players',
    brand: 'GS2 Games',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln6k2jl6000lmi16owt44x2i_9660105__PrMf7sPFC',
    name: 'Celeste',
    price: 20,
    description:
      'A narrative-driven, single-player adventure like mom used to make, with a charming cast of characters and a touching story of self-discovery\nA massive mountain teeming with 600+ screens of hardcore platforming challenges and devious secrets\nBrutal B-side chapters to unlock, built for only the bravest mountaineers',
    brand: 'Nintendo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrwstp0600jsjr17xhkbrngx_6580305__h5xui3dGY',
    name: '1-800-Baskets.com eGift Card',
    price: 20,
    description:
      '1-800-Baskets.com® has a large selection of expertly designed and thoughtfully crafted gift baskets including fruits, gourmet foods, snacks, candies, and spa and wellness gifts perfect for such occasions as anniversaries, birthdays, housewarmings, new babies, career achievements, sympathy sentiments, and get well wishes. This gift card can also be redeemed at any of 1800Flowers.com nine brands.',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv8k6cza059gvo3ktiz1js7g_9674445___T55t2vRy',
    name: 'Basic Table Lamp Brown',
    price: 20,
    description:
      'Sand nickel metal mini base\nFabric Shade\nPerfect for living room, bedroom, office, kids room, or college dorm\nHeight: 10.50" Shade diameter: 4.92"\nUses 1 x 60W Type B Candelabra Base Bulb (not included)',
    brand: 'Simple Designs',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllb81o9o0000mf16o7rbk6i2_9704241__AE2jR2CaJ',
    name: 'Nike Dry Wide Headband with Dri-Fit Technology',
    price: 20,
    description:
      'Silicone\nSilicone,Polyester,Spandex\nDri-FIT fabric to wick sweat away and help keep you dry and comfortable.\nAdded silicone holds hair in place for secure fit.\nOne size fits most\nSold as single',
    brand: 'Nike',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cludpjiew002ljw144ku2lr0z_6348031__ACl2B-kY_',
    name: 'Festive Egg',
    price: 20,
    description: null,
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln8dhrsl0000mj16uq3umz26_7544588__5xYCl6Afp',
    name: 'Rubber Dog Toy Large',
    price: 20,
    description:
      'Size: Large Dogs\nBrand: KONG\nItem Form: Stick\nUnit Count: 1.00 Count\nNumber of Items: 1\nPackage Information: Can',
    brand: 'KONG',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm04aiayf002d8tq50q99cl1z_7089815__IaaWzRVlX',
    name: 'LEGO eGift Card',
    price: 20,
    description:
      "The LEGO eGift Card is the perfect gift for any LEGO enthusiast, offering the flexibility to choose from a wide range of sets, accessories, and more. Whether for a birthday, holiday, or special occasion, this eGift card allows recipients to explore their creativity and build their dream LEGO creations. Easy to redeem online, it's a thoughtful and convenient present for fans of all ages.",
    brand: 'LEGO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm00j47xp001sgoxjbltkrmib_7484659__k5y1EAr1C',
    name: 'Kith Classics for Stance 2.0 Classic Crew Sock',
    price: 20,
    description:
      'Combed cotton-spandex blend\n\nEmbroidered Kith logo at outer sides\n\nCustom packaging\n\n \n\nStyle: STM556A19KIT-BLK\n\nColor: Black\n\nMaterial: 79% Combed Cotton / 14% Polyester / 4% Nylon / 3% Elastane',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wtoo5c22w6hvng_2264596__f9J-06KQo',
    name: 'Sleep Headphones Wireless',
    price: 20,
    description:
      '\nBrand\tPerytong\nModel Name\tPerytong Sports Headband\nColor\tGrey\nForm Factor\tOver Ear\nConnectivity Technology\tBluetooth',
    brand: 'Perytong ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clkxf2u3m0002l717riecasiu_2789672__H5UCDjnwi',
    name: 'Steam Gift Card',
    price: 20,
    description:
      'Steam Gift Cards work just like a gift certificate, while Steam Wallet Codes work just like a game activation code. Can be redeemed on Steam for the purchase of games, software, wallet credit, and any other item you can purchase on Steam.',
    brand: 'Steam',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll74p8y60004l717ccoltlhg_4303993__ikMS21hIM',
    name: 'Nintendo eShop Gift Card [Digital Code]',
    price: 20,
    description:
      "Give the gift of fun with a Nintendo eShop gift code\nIt's easy—apply it to your Nintendo eShop account in seconds.\nIt ensures that you’ll always have funds on hand to help with purchases of new games and applications\nIt’s designed for your Nintendo eShop purchases—no credit card required.\nThe perfect gift for anyone who loves to play—including you. Choose from over 1,000 new, classic and indie games – delivered directly to your Nintendo Switch system.",
    brand: 'Nintendo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsmf9uiw001kjv17j3oijplo_7479787__MFN2V8fnR',
    name: 'Cute Teddy Bear',
    price: 20,
    description:
      "15.7 inches.\n\nThe cute little teddy bear wore a small sweater of different colors. Each is a different kind of public sports. A soft little body and round hands and feet can soothe your nervous mood.\n\nWe use safe, environment-friendly and healthy plush materials to make small teddy bears. The short plush is soft, not rough, and feels delicate. The filling is soft PP cotton, which is not easy to deform when extruded.\n\nIt's also good to put the little teddy bear at home, on the sofa, in the car, and sleep with you. The cute little teddy bear is suitable for various scenes, such as family parties, birthday parties, company activities, etc.\n",
    brand: 'Galatee',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clvbkqq4u062599720xhcs9sp_5769096__U5_w2LySJ',
    name: 'Its Just a Prank Bro T-Shirt',
    price: 20,
    description:
      'Fabric type Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; All Other Heathers: 50% Cotton, 50% Polyester\nCare instructions Machine Wash\nOrigin Imported\nClosure type Pull On',
    brand: 'Funny Prankster Dude',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqh08f0y000gk216s373y95x_7943436__iQfioz1Mc',
    name: 'Countertop Spray Lemon Leaf',
    price: 20,
    description:
      ' Lemon Leaf Countertop Spray: Biodegradable cleansing agents, extracts of fennel, and parsley, effectively clean while creating a refreshing citrus touch on the surfaces of your home. \nLemon Leaf Fragrance: Sunny and sparkling, this uplifting fragrance creates a green, citrus-filled escape for the home. These Countertop Sprays scents are filled with notes of dewy leaves, crisp white wood accord, creamy lily of the valley, effervescent lemon verbena, bergamot oil, and geranium blooms. ',
    brand: 'Thymes ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clot1d4u6000al31640ecoarr_6594078__uWCA7Vcad',
    name: 'Starbucks eGift Card',
    price: 20,
    description:
      'There’s always a Starbucks in reach, so a Starbucks Card is the perfect gift for everyone. You can easily send Starbucks eGifts with relevant designs for any occasion you’re celebrating, whether it’s saying thanks, recognizing an achievement, or simply letting someone know you are thinking of them.',
    brand: 'Starbucks',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1tv9ivu000093fpn0t2x35c_9863982__rqtlveCSh',
    name: 'Pure Instinct CRAVE Roll-On Perfume 0.34 fl oz',
    price: 20,
    description:
      'The Pure Instinct CRAVE Roll-On Pheromone Perfume is a 0.34 fl oz (10.2ml) fragrance designed specifically for women. It combines the allure of lemon, orange, jasmine, and sweet marine accords with base notes of sandalwood, sweet musk, amber, tobacco, and vanilla. The pheromone-infused essential oil is formulated to blend with the wearer’s natural chemistry, creating a unique scent experience that enhances attraction and confidence. Its compact size makes it perfect for travel and easy to apply throughout the day. This roll-on is TSA-ready and a popular choice for those looking to add a subtle yet captivating scent to their collection.',
    brand: 'Pure Instinct',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clt0tyqom00eqib161lkybts3_5075571__eUpoeUQ9o',
    name: 'Ash Ketchum Trainer Hat',
    price: 20,
    description:
      'Fabric type 100% Cotton\nCare instructions Hand Wash Only\nOrigin Imported\nCountry of Origin China',
    brand: 'Popcrew',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clwdzn7pu01uxn7r6q11eptng_9282437__xngAmyv-g',
    name: 'Skullcandy In-Ear Wireless Earbuds',
    price: 20,
    description:
      'Bluetooth 5.0 offers wireless connectivity to your device, while tethered earbuds ensure nothing gets misplaced.\nNoise isolating in-ear design blocks out unwanted distractions while you enjoy your music, videos or phone calls. Additional ear gels ensure you get the best sound isolating fit.\nEnjoy up to 6 hours of continuous playback. Recharge anytime with the included Micro USB cable.\nSweat-resistant materials and design make these earbuds the perfect companion for any active lifestyle.\nBuy with Confidence - 1 year US warranty included.',
    brand: 'Skullcandy',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhfewof01lz60wp1r8x188b_2810277__PGGM9dxTy',
    name: 'IKEA LÅNESPELARE Mouse bungee, black',
    price: 20,
    description:
      'Keeps your mouse cord in order and prevents it from getting tangled.\n\nYou can easily adjust how flexibly your mouse cord follows your movements by pulling the metal spring upwards.\n\nThe black-stained mouse bungee helps you keep your desk neat and tidy.\n\nSits firmly in place since the metal base has silicone dots underneath.\n',
    brand: 'IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clncq3ron0000mo171jkffsjz_5276184__epbaCnH3d',
    name: 'Lets Bone T Shirt',
    price: 20,
    description:
      'Machine Washable Poly/Cotton Blend\nMade in USA or Imported.\nProduct Dimensions ‏ : ‎ 9 x 9 x 0.5 inches',
    brand: 'Crazy Dog T-Shirts',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmkyqgag000pmf17n7wobvdu_5253373__vdf_XwGUk',
    name: 'Giant Inflatable Alien',
    price: 19.5,
    description:
      'Package Included: 1 pcs 63 inches high alien balloon , made of PVC material, strong and reliable; Light in weight, not easy to break, deform or fade, reliable and sturdy, which is long lasting, and can serve you for a long time.',
    brand: 'HONGFENG',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clq6s1fcs000qie161yx6zk5m_1311175__QsLpQuK4n',
    name: 'The Home Edit Life Hardcover',
    price: 19,
    description:
      "#1 NEW YORK TIMES BESTSELLER • The authors of The Home Edit and stars of the Netflix series Get Organized with The Home Edit teach you how to apply their genius, holistic approach to your work life, on-the-go necessities, and technology.\n\nAt home or on the go, you don't have to live like a minimalist to feel happy and calm. The Home Edit mentality is all about embracing your life—whether you’re a busy mom, a roommate living with three, or someone who’s always traveling for work. You just need to know how to set up a system that works for you.\n\nIn the next phase of the home organizing craze, Clea Shearer and Joanna Teplin go beyond the pantry and bookshelf to show you how to contain the chaos in all aspects of your life, from office space and holiday storage to luggage and pet supplies. Get to know your organizing style, tailor it to your family’s lifestyle, and lead the low-guilt life as you apply more genius ideas to every aspect of your life.",
    brand: ' Clea Shearer (Author), Joanna Teplin (Author) ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllfnzeq4000qjq16z4g4foqu_5257597__f2HzFw5Ro',
    name: 'FPS Freek Galaxy Black for Playstation',
    price: 19,
    description:
      'INCREASED ACCURACY - Mixed height combo for faster target acquisition and increased precision on the right, as well as better control and maneuvering on the left.\n\nIMPROVES COMFORT & GRIP - Non-slip, proprietary rubber compound offers exceptional grip and requires less force which reduces wrist, hand and thumb fatigue.\n\nONE HIGH-RISE (CONCAVE) THUMBSTICK - That adds 10.0 mm for increased accuracy on right analog.\n\nONE MID-RISE (CONCAVE) THUMBSTICK - On the left analog for enhanced control with in-game movement while adding a nominal height of 6.5 mm.\n\nVERSATILE - The added grip and comfort works well across your entire library of games and protects stock thumbsticks from wear and tear *Packaging May Not Reflect Updated Compatibility.',
    brand: 'KontrolFreek',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cly6s2zx900xrm4bvs9r47d7v_4599368__Aes_6Z2H6',
    name: 'Small American Flags',
    price: 19,
    description:
      'Premium Quality: Made of polyester with full-color print for durability and vibrancy.\nVersatile Uses: Perfect for 4th of July celebrations, patriotic parties, concerts, sporting events, and more.\nCustomizable Decorations: Use as table centerpieces, party favors, or handheld decorations.\nSafe and Durable: Non-toxic and made to meet US toy safety standards.',
    brand: 'JOYIN',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqyo5sob005uib165438bswq_2081444__HzQOM2LY2',
    name: 'Apple USB-C Charge Cable',
    price: 19,
    description:
      ' This 1-meter charge cable is made with a woven design—with USB-C connectors on both ends—and is ideal for charging, syncing, and transferring data between USB-C devices.\nIt supports charging of up to 60 watts and transfers data at USB 2 rates.\nPair the USB-C Charge Cable with a compatible USB-C power adapter to conveniently charge your devices from a wall outlet and take advantage of fast-charging capabilities. ',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqh0m7l60053ju17nvwv0rnv_8386893__Oo2PfWcFd',
    name: 'Kitchen Shears',
    price: 19,
    description:
      'Kitchen Scissors, Heavy Duty Kitchen Shears, 2-Pack 8.5 Inch Dishwasher Safe Come Apart Food Scissors, Multipurpose Stainless Steel Sharp Cooking Scissors for Chicken, Poultry, Fish, Meat, Herbs',
    brand: 'iBayam ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2h1s00s37oo5clzq4385x_4681847__Xv03RgBq-',
    name: 'Basic Wired USB Keyboard',
    price: 19,
    description:
      'Keyboard with low-profile keys for a comfortable, quiet typing experience\nIncludes a matte black keyboard with US layout (QWERTY) and a simple wired USB connection\nHotkeys enable easy access to Media, My Computer, Mute, Volume up/down, and Calculator\n4 function keys control Previous Track, Stop, Play/Pause, and Next Track on a media player\nCompatible with Windows 2000, XP, Vista, 7, 8, and 10\nShips in Certified Frustration-Free Packaging\nProduct dimensions: 17.4 x 5 x 1.1 inches (LxWxH)',
    brand: 'Amazon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm08omh5x00bq118wkhyjep1o_896142__kJazsdW7o',
    name: 'adidas Unisex Adilette Aqua Slides',
    price: 18,
    description:
      'The adidas unisex-adult Adilette Aqua Slides are a comfortable and stylish choice for casual wear, perfect for the pool, beach, or everyday use. These slides feature a lightweight design with a soft, cushioned footbed for maximum comfort. The single-band upper is adorned with the iconic adidas three-stripe branding, adding a classic touch to the modern look. Designed for quick-drying, these slides are ideal for post-swim wear or lounging in comfort, making them a versatile addition to your footwear collection.',
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhloeel0042mbuog3ei3ena_4500558__KTCEk-fcj',
    name: 'BLÅSKATA Gaming mouse pad, black/gray patterned, 15 3/4x31 1/2 "',
    price: 18,
    description:
      "Game on! With its cool grey-black check pattern, this wide gaming mouse pad is great for those who want both a mouse and keyboard on the same firm surface when it's time for a match.",
    brand: 'IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsfbpa2x000dju1553isinuw_2802965__xDdffeQd5',
    name: 'Solo Plastic Party Cups, Red - 9 oz - 50 ct',
    price: 18,
    description:
      'Squared Base - Less Spills\nMore Grip - Less Slip\nGreat for All Cold Beverages\nEasily Recyclable - Light weight\nPerfect for Parties or Office Use',
    brand: 'Solo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllvs8ubz0000l8172r4o3krf_8773083__lOBgV5vdt',
    name: 'Super Cleaner',
    price: 18,
    description:
      'Brand\nCAR GUYS\n\nItem Form\nSpray\n\nSpecific Uses For Product\nUpholstery, Carpet\n\nMaterial Feature\nNon-Toxic\n\nItem Volume\n18 Fluid Ounces',
    brand: 'CAR GUYS',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnl9qgxd000alb16iigf5dm9_630342__glpIfd5-w',
    name: 'Golden Golf Balls',
    price: 18,
    description:
      'High Visibility Golf Balls--Lightweight and portable, easy to carry and use.\nMetallic Golf Balls--Wonderful accessory for golf practicing.\nGold Golf Balls--Number of bee holes 392, high performance.',
    brand: 'Simlug',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm00j60ip0077hvb3r239raoz_9917383__d8c4rpm-I',
    name: 'Kith Willet Marled Crew Socks Light Leather Grey',
    price: 18,
    description:
      'Crew height socks\n\nMarled design\n\nCustom bellyband packaging\n\nOne size fits most\n\n \n\nStyle: khm220014-002\n\nColor: Light Heather Grey',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz95ismw017esbqicv7lb5hd_8078253__s9HDAOSEZ',
    name: 'Mens Olympic Sport Crew Sock',
    price: 18,
    description:
      'Hits At Lower Calf, Mid-Weight Cotton Elastic Blend, Seamed Toe, Ribbed Knit Cuff, Cushioned Sole, Stripe Detail At Leg Opening, Team Usa Logo Knitted On Calf, Official Olympics Logo Knitted At Top Of Foot\nIkce Is 6\'1" (185 Cm), Wearing Skims M\n78% Cotton / 16% Polyamide / 6% Elastic\nMachine Wash Separately In Cold Water, Wash Inside Out, Do Not Bleach, Tumble Dry Low, Warm Iron If Needed\nImported',
    brand: 'Skims',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpfsrm1h004gjt17y8yomgfb_9381694__FJU_NRbdQ',
    name: 'Sriracha: The Game - A Spicy Slapping Card Game',
    price: 18,
    description:
      "\n    A spicy, fast-paced card game for the whole family\n    Deck includes 52 cards with all original Sriracha and Food themed illustrations\n    Divvy up the cards evenly between players and get ready to slap the deck for pairs and sandwiches. Or play Sriracha Cards to stay alive! The first player to collect all the cards wins.\n    Each round lasts 10-15 minutes which means there's time for lots of rematches\n    Under official license from Huy Fong Foods\n    For 2-4 players ages 7+\n",
    brand: 'DSS Games',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll7ahdh00002la16j58yx257_4476233__7YMV_7Df0',
    name: 'Charger for Nintendo Switch and Switch Lite and Switch OLED',
    price: 17.25,
    description:
      'Connectivity Technology\nUSB\n\nConnector Type\nUSB Type C\n\nCompatible Devices\nGame Consoles, Tablets, Cellular Phones\n\nIncluded Components\nCharging cable\n\nSpecial Feature\nCharging port, Fast charging, Storage\n\nColor\nSilver, Black\n\nInput Voltage\n240 Volts\n\nMounting Type\nWall Mount\n\nAmperage\n2.6 Amps',
    brand: 'pdobq',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnjkonek000eky16vx0jjlnq_3076563__uPqZIxHNR',
    name: 'Pokémon TCG: 3 Booster Packs',
    price: 17,
    description:
      'Brand: Pokemon\nGrade Rating: Ungraded\nTheme: Anime\nIs Autographed: No\nIncluded Components: Trading Card, Booster Pack, Code card\nAbout this item\nCOLLECT THEM ALL | Each pack comes with 10 cards for the Pokemon Trading Card Game. Play, collect, or trade your cards, the choice is yours!\nLATEST & GREATEST | All of your packs will be from the Sword & Shield era OR NEWER! This means you have a chance to get the latest & greatest cards.\n100% AUTHENTIC | Coming from verified vendors, these packs are 100% authentic from The Pokemon Company. No need to worry about fake cards or resealed packs!\nONLINE CODE CARD | Each booster pack comes with one Pokemon Trading Card Game Online (Live) Code Card!\nPOKEMON TRADING CARD GAME ONLINE (LIVE) | Free to download, free to play, online version of the Pokémon Trading Card Game. An easy way to learn how to play the Pokemon Trading Card Game!',
    brand: 'Pokémon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8',
    name: 'Snowflake Shape Rimless Sunglasses',
    price: 17,
    description:
      'Stylish personality snowflake shape lens and exquisite metal frame design increase the fashion sense of glasses, which will make you more eye-catching at Christmas and any parties.',
    brand: 'YAMEIZE',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm1zfr51q0000y9egdralx6hg_6487526__8Kw0cN9h9',
    name: 'Mermaid Skeleton 21"',
    price: 17,
    description:
      'Skeleton Mermaid will add unique flair to your skeleton menagerie! Hanging loop on head. Measures 21 inches tall. ',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpex66t0001rjw170n4og301_551095__M0_FrZTHA',
    name: 'Shiba Inu Plushie',
    price: 17,
    description:
      'Materials: Feather PP cotton filler\nLength: 11.8"(30cm), 15.7 "(40cm), 19.6"(50cm).',
    brand: 'Auspicious beginning',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllfux9ju0000l816m2cujsmp_6507056__n4gLLQZdw',
    name: 'Headset Headphone Hook Holder',
    price: 17,
    description:
      'Color\nBlack\n\nForm Factor\nOn ear\n\nCompatible Devices\nFit all size of music headphone and gaming headset.\n\nCompatible Phone Models\nHeadphones',
    brand: 'EURPMASK',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m44u17phoo5cz4n540ig_6644644__To_PaduVP',
    name: 'Gaming Headset ',
    price: 17,
    description:
      'HIGH-QUALITY MATERIALS：Earmuffs used with the new second-generation skin-friendly material, reduce heat sweat, more suitable for long wear.\n\nHIGH COMPATIBILITY: Work with 32-bit and 64-bit Win 7/Win8/Win8.1/Win 10/XP.\n\nCOMFORTABLE FEELING: High grade wearable TPE, soft texture, delicate and comfortable touch,it has an elegant appearance.\n\nPRACTICAL DESIGN: Decompressing belt make your headset has a better extensibility. Concise structure, light weight when playing games, high grade material let it keep strongly practicality Soft design tell you how is unbreakable.\n\nEASY INSTALL: Plug and play, 3.5mm plugs for mic and headset + USB plug for lights , more fully ensure the stability of the sound.\n\nLED LIGHT: Highlight the game atmosphere (USB interface only for power supply to LED lights).',
    brand: 'Odaban',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv8k2eiq049zvo3ks5a061y5_7035485__bpxHr5aFt',
    name: 'Mini Desktop Vacuum Cleaner',
    price: 17,
    description:
      'Are you fed up with your dirty and messy desk?\nFind it hard to clean the dust on the keyboard?\nWell, then get this super mini desk vacuum cleaner and your tablewill be refreshed!\nSuper mini size, you can carry it anywhere and anywhere.',
    brand: 'ODISTAR',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm00j7lzv01f2vsshz5wcsu4g_2594229__pcBDbKzUl',
    name: 'Kith for Stance Classic Super Invisible Sock',
    price: 17,
    description:
      'Combed cotton-spandex blend\n\nMarled fabric\n\nColor-blocked heel and toe\n\nKith logo patch on inner ankles\n\nGel non-slip ankle pads\n\nCustom packaging\n\n\n\nStyle: STM1000KCL-BLK\n\nColor: Black\n\nMaterial: 100% Combed Cotton',
    brand: 'Kith',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll7cd0yc000ak2169jr5auv4_2254444__cyzp1ugTQ',
    name: 'Joy Con Comfort Grips for Nintendo Switch - Black',
    price: 17,
    description:
      'Lightweight, ergonomic design for comfortable gameplay anywhere\nDouble injected rubber grips for added comfort\nEasy slide in design secures each Joy Con\nVisible player indicator lights; Protective Qualities: Shock resistant\nOfficially licensed by Nintendo for Nintendo Switch',
    brand: 'PowerA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cljq2m7gb17x0oo5cy4vj6ihu_3922140__5ns5ajAN0',
    name: 'Ear Pods Headphones',
    price: 17,
    description:
      'Model Name\nEarPods with 3.5mm Headphones Plug\n\nColor\nWhite\n\nForm Factor\nIn Ear\n\nConnectivity Technology\nWired',
    brand: 'Apple',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnjkhkxt0000ky160hcxolfw_8963849__Ot0xbryLb',
    name: 'Pokémon TCG: 3 Booster Packs',
    price: 16,
    description:
      'Brand: Pokémon\nGrade Rating: Ungraded\nSport: Pokémon\nGraded By: TCG\nUnit Count: 1.0 Count\nAbout this item\n100% Authentic Pokemon Trading Card Game Booster Packs\nEach Booster Pack Includes 10 Random Game Cards\nTotal of 30 Cards - 3 Booster Packs\nChance to Find Rare, Legendary & Foil Cards',
    brand: 'Pokémon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpfsma0k001xjx1701xy0tjs_9518632__FWvnE512S',
    name: 'Sushi Go! - The Pick and Pass Card Game',
    price: 16,
    description:
      '\n    Includes 108 cards\n    Rules of play\n    Reinforces probability, visual discrimination and strategic thinking\n    2 to 5 players\n    Playing time: 15 minutes\n',
    brand: 'Gamewright',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clqpq3wly003vl917v3xr29e7_8167814__uNF57_ZKU',
    name: 'Resistance Exercise Bands',
    price: 16,
    description:
      'Resistance Bands - 5 Loop Fitness Bands Set - Loop Exercise Resistance Bands - Exercise Bands For Legs And Arms - Carry Bag',
    brand: 'Fit Simplify',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll7at83k0000l617umz6ur1c_3017174__A3qiNtRee',
    name: 'Wrist Strap for Switch Joycon – 2 Pack Lanyard',
    price: 16,
    description:
      'Brand\tMOSAHOLL\nCompatible Devices\tNintendo Switch\nColor\tBlack\nSpecial Feature\tWireless\nNumber of Buttons\t16',
    brand: 'MOSAHOLL',
    isAvailableForDeal: true,
  },

  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpfsma0k001xjx1701xy0tjs_9518632__FWvnE512S',
    name: 'Sushi Go! - The Pick and Pass Card Game',
    price: 16,
    description:
      '\n    Includes 108 cards\n    Rules of play\n    Reinforces probability, visual discrimination and strategic thinking\n    2 to 5 players\n    Playing time: 15 minutes\n',
    brand: 'Gamewright',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cll7at83k0000l617umz6ur1c_3017174__A3qiNtRee',
    name: 'Wrist Strap for Switch Joycon – 2 Pack Lanyard',
    price: 16,
    description:
      'Brand\tMOSAHOLL\nCompatible Devices\tNintendo Switch\nColor\tBlack\nSpecial Feature\tWireless\nNumber of Buttons\t16',
    brand: 'MOSAHOLL',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clkx52tc9000ajf18uu6fjna4_6629296__4TzOchI_V',
    name: 'Heart Shaped, Dual-Sided Kitchen Sponge and Scrubber',
    price: 16,
    description:
      'VALUE: 6 Pack\nSPECIALLY DESIGNED: The ergonomic "HEART" shape fits comfortably in your hand allowing you to put pressure where you need it most.\nDUAL SIDED: Each sponge has a scourer on one side and a soft sponge on the other.\nDIMENSIONS: Each Sponge Measures 3.5" x 4" x 1.1" inch.\nCOUNTLESS USES: These fun and sturdy sponges are great for cleaning dishes, pots, pans and general household cleaning.\nCARE INSTRUCTIONS: Rinse thoroughly before and after each use and squeeze dry. Top rack dishwasher safe. Not for use on stainless steel appliances or plastic surfaces. Test first in an inconspicuous area.\n',
    brand: 'GMIcréatifs',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clzsrkyrw00mi84ovy5g91cms_4265188__5G8ccrZS7',
    name: 'adidas Basic No Show Socks',
    price: 15,
    description:
      'No-show length\n64% cotton, 31% recycled polyester, 4% elastane, 1% recycled nylon\nMesh on top of foot\nCompression instep\nSilicon grip on heel for no slip fit',
    brand: 'adidas',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clml7hdlk000ml617x8iu9pxt_8213760__KSlETMoJ_',
    name: 'Cyan Blue Marble Mouse Pad',
    price: 15,
    description:
      'Brand\tArmanza\nColor\t01 Marble\nSpecial Feature\tWaterproof, Non-slip, Washable\nRecommended Uses For Product\tOffice\nMaterial\tLycra, Rubber, Fabric',
    brand: 'Armanza',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsghaolj0011jj15sjzhbs4i_1106472__37iHaV3Yq',
    name: 'Football Napkins',
    price: 15,
    description:
      'QUANTITY AND DIMENSION:Totally 80 pack, assorted 40 pack football field design and 40 pack of football pattern. Each pcs size 5"X5"(folded).\nPREMIUM QUALITY: The napkin is 3-ply and made of virgin wood pulp paper. It’s thick and absorbent.\nDISPOSABLE AND CONVENIENT: This disposable beverage napkins are all printed with food grade water-based ink which is suitable for food contact. It’s convenient and save you from washing fabric napkins.\nFOOTBALL DESIGN: The design was inspired from the football field and the football. It perfectly create a gaming atmosphere for your party.\nPERFECT DECORATIONS: Prepare your Football party by using these disposable napkins. A little simple decoration can make your Tailgate party more attracive.',
    brand: 'Gatherfun',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clv8jm1ka03gqvo3k5azx4jfk_9368071__5VlTA-Utm',
    name: 'Surge Protector Power Strip 6 Ft',
    price: 15,
    description:
      'The 3-side power strip with 8AC widely outlets and 4 USB charging ports total 4.2A, each USB A port features 5V/2.4A Max output. USB C charging port features 5V/3A MAX. can power up to 12 devices simultaneously.Wide range voltage design, can be used on 120v to 240v circuit',
    brand: 'YISHU',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnjkbk8f0014jp17nz2qodfr_3239073__gOHNF65M9',
    name: 'Pokémon TCG: 50 Random Cards from Every Series',
    price: 15,
    description:
      'Brand: Pokémon\nGrade Rating: Ungraded\nSport: Pokémon\nUnit Count: 50.0 Count\nAthlete: Pokemon',
    brand: 'Pokémon',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clly8th6q0008k216drg31i41_4317445__J16DuDzA1',
    name: 'Cap',
    price: 15,
    description:
      '100% Cotton\nBuckle closure\nHand Wash Only\nMATERIAL: Made with 100% cotton to ensuring lightweight, durable and comfortable. Vintage and classic style never be out of style.\nADJUSTABLE METAL BUCKLE: Greatly convenient to adjust the size of the baseball cap to fit your head.The unique and adjustable design also makes the caps suitable for both men&women.\nDESIGN: Simple but elegant design. Structured floppy and twill low profile design for a casual look.\nSUITABILITY IN DIFFERENT SCENARIOS: Great choice for regular daily use and outdoor activities especially like bush walking, fishing, running, hitch-hike travel, baseball, cycling, golf, tennis.\nSUN PROTECTION: Protect your skin, eyes, and hair from harmful UV rays by wearing this comfortable baseball cap during all your outdoor activities.',
    brand: 'LANGZHEN ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllqaeymj0000ic165hz3eccw_1987518__C7uAhKMkB',
    name: 'Classic Ice Cream Scoop',
    price: 15,
    description:
      'Modern take on a classic design\nDurable stainless steel won’t chip, pit or rust\nEasy-to-use lever releases rounded scoops with a squeeze\nSoft, comfortable handle for a non-slip grip while scooping\nDishwasher safe\nBPA Free',
    brand: 'OXO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cltuihizb0000l614tl8dkwja_5829513__u_ovKonoE',
    name: 'FC24 - 1600 Points',
    price: 15,
    description:
      'EA Sports FC24 is an exhilarating virtual gaming experience where players compete as part of the EA Sports FC team in intense matches. With skillful gameplay, strategic moves, and thrilling action, earn points to dominate the leaderboard and showcase your prowess on the field.',
    brand: 'EA Sports',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clr8ovuxs0061l61719liuho5_7535588__1THxNfYNO',
    name: 'Fidget Spinner',
    price: 15,
    description:
      ' Fidget spinner: 4-10 minute average spins greatly fit for fidgety hands, ADD or ADHD sufferers helps relieve stress.(The actual spin time will be affected by age and strength of users)\nNo big noise: Easy to carry, small, simple, discrete and fun, also effective for focus and deep thought with using this hand spinner ',
    brand: 'ATESSON',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clncq6twf0000mh17y7r7zes8_1461206__LYM6U4oyj',
    name: 'Skeleton Decorate Tin Sign',
    price: 15,
    description:
      'DIMENSIONS: 8-Inches by 12-Inches, making it the perfect size for many different places.\nTIN SIGN DESIGNS: Classic Vintage Decor...These Retro Collectible Tin Signs Are A Fun And Attractive Decoration For Your Home, Office, Bar, Restaurant, Dorm, Man Cave Or Garage!\nPRE-DRILLED HOLES: Makes for easy hanging using finishing nails (NAILS NOT INCLUDED)\nUNIQUE DESIGNS: Classic Tin Signs for Many Uses\nEYE CATCHING: Sure to catch your house guests eye when they are in the room that you put this sign up!!',
    brand: 'Aowotu',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyhm8sbx01bfb42n4bheqznm_8571270__0usjqIfyX',
    name: 'IKEA LÅNESPELARE Gaming mouse pad, patterned, 14 ¼x17 ¼ "',
    price: 15,
    description:
      'Smooth surface that allows the mouse to glide quickly over the entire mouse pad without hindrance – perfect for games that demand fast reactions.\n\nThe fabric is chosen with extra care so that you can control the mouse with pixel-precise tracking, regardless of sensor.\n\nSo that you can play at the top of your game, match after match, the surface is both durable and easy to clean.\n\nThe gaming mouse pad stays firmly in place thanks to the rubber-covered underside.\n\nEasy to roll up and take with you or store away in a box.',
    brand: 'IKEA',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clyz5xbse026a14ocy2htasnp_944858__8I3OmiS0e',
    name: "Versace Bright Crystal Absolu Women's Fragrance",
    price: 15,
    description:
      'Versace Bright Crystal Absolu for Women is a luxurious and captivating fragrance available in a convenient 5 ml EDP splash mini bottle. This exquisite scent combines fresh floral and fruity notes, creating a sophisticated and long-lasting aroma. Perfect for travel or on-the-go use, the mini size allows you to carry the elegance of Versace Bright Crystal Absolu with you wherever you go.',
    brand: 'Versace',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllwqw7no001vl816jmsk9way_40586__HynF_sP6o',
    name: 'Plastic Bananas',
    price: 15,
    description:
      "ARTIFICIAL BANANAS: This set of 6, separated artificial bananas will work great as a realistic prop on your film set, or as inspiration for a decorative still life painting!\nUSEFUL: Ideal for home decoration, storefront adornment or for use as photography props\nEYE-CATCHING: Super realistic detail ensures these bananas won't look out of place on a film set or as an artistic prop\nDURABLE FOAM MATERIAL: These artificial bananas have been constructed using a durable Polyurethane foam material for a sturdier approach to artificial fruit decorations\nDIMENSIONS: 8 x 3.7 x 1.5 Inches",
    brand: 'Juvale ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0cr99eb00fz6civ7fg9cbrn_2630162__2CBRwO94H',
    name: "KuaiLu Men's Leather Flip Flops",
    price: 15,
    description:
      'Cushy Footbed: Made from real TPE foam yoga mats, offering a lightweight, cushy and comfortable feel when walking\nSoft Strap: Skin-friendly thong with inner fabric lining,soft,comfortable and water-friendly\nArch Support: Add a extra layer yoga mat sole between outsole and footbed,give you a comfortable feel every time you slip your feet into the sandals\nCushioned Sole: Shock absorbing sole provides cushioning and flexibility. High bounce back sole to maintain the original shap\nFlip Flops for men shower traction: The grip of the shoes is quite good on walking.The slippers are not slippery even when your feet sweat',
    brand: 'KuaiLu',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz7ujflg00cmzdbch3nwel7z_9959376__W_UrgR06O',
    name: 'WinCraft Team USA Three-Pack Car Decal Set',
    price: 15,
    description:
      'Show off your love for Team USA with this Three-Pack car decal set from WinCraft. These multi-use decals are safe on any surface, making them perfect for showing off your loyalty to the red, white and blue.',
    brand: 'Olympics',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln6goxcq0008mj17nw7yf1aj_9025692__O7M3V-pep',
    name: 'Stardew Valley',
    price: 15,
    description:
      'You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life.\nNow with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build relationships with townspeople or each other.\nNew Single Player Content! Including the new Winter Market Festival, more collectibles, added character cut-scenes and even hats for your horse!',
    brand: 'Nintendo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cloomjdt6002sjs17nsw4znxb_8457465__MfGu3NNGi',
    name: 'Crying Banana Cat Plush',
    price: 15,
    description:
      "Mini Crying Cat Plushie with Sound\nMaterial: pp cotton and short soft plush\nDemension: about 17x10x7cm (6.7''x3.9''x3''), please refer to our pictures\nFunction: Squeeze can make the banana cat plush crying like a baby. you can check it in our video.\nOccation: It can be use as keychain, hang on bags, toys for dogs and cats or use it to make a prank.",
    brand: 'COSWHO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cm0zrcar30000ztqi7f97mtcl_1893882__jVGLUUdYq',
    name: 'Razer Gold eGift Card',
    price: 15,
    description:
      "The Razer Gold Gift Card offers a convenient way to top up your Razer Gold account, which can be used to purchase games, in-game content, and other digital goods. It's available in multiple denominations and provides access to exclusive rewards and promotions within the Razer Gold ecosystem. Ideal for gamers looking to enhance their gaming experience across various platforms.",
    brand: 'Razer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cln8dfg5p0002l01828oyv4wy_4583734__dqDgEzdGr',
    name: 'Rubber Dog Toy Medium',
    price: 15,
    description:
      'Size: Medium Dogs\nBrand: KONG\nItem Form: Stick\nUnit Count: 1.00 Count\nNumber of Items: 1\nPackage Information: Can',
    brand: 'KONG',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsamkvns004gl216i667x5n3_4026703__jU3xF0KE3',
    name: 'Year of The Dragon Beaded Bracelet',
    price: 15,
    description:
      '1. Product name: 2024 Dragon Year Beads Bracelet\n2. Product size: chain length about 17cm(6.69in),Beads diameter 8mm(0.31in)\n3. Product style: bracelet\n4. Product color: as shown in the figure\n5. Product material: crystal,alloy',
    brand: 'LIU JUN',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmci72390017lc16okoeikzq_2885637__eYZRrjz3s',
    name: 'Tiny Violin',
    price: 14.8,
    description:
      'Plays music: plays a sad tune when the strings button is pressed down\nViolin replica: Includes a 3 4/5" replica of a real violin with mini bow and chinrest\nDisplay stand: An elegant vinyl stand included to store and display your violin\nIllustrated mini book: Includes a 32-page mini book about the origins of "tiniest violin" \nPerfect gift: humorous gag gift or stocking stuffer',
    brand: null,
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpg2rhuw00kyl717100fdnbd_8308168__pxWC4RERo',
    name: 'The Way of the Househusband, Vol. 1',
    price: 14,
    description:
      'A former yakuza legend leaves it all behind to become your everyday househusband. But it’s not easy to walk away from the gangster life, and what should be mundane household tasks are anything but!',
    brand: 'Kousuke Oono',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clnb4ds2s000rl618kzwaa7dx_7839926__8SjnKc1p_',
    name: 'Spooky Rubber Hanging Bats',
    price: 14,
    description: "It's spooky looking right?",
    brand: 'LUOEM ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllofr1zt001rl8173i818tmv_7642942__OC7MP0pzc',
    name: 'Charger Stand for Apple Watch',
    price: 14,
    description:
      'Just place your Apple Watch on the stand to charge.Insert the charge cable into the stand cable slot and keep the cable tidy.convenient to use and perfect for your home,bedroom,office and easy to pack for traveling.',
    brand: 'ELETIUO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz7v4l7e00uygfp1gxda16s7_7488706__2x9h94N6q',
    name: 'Paris 2024 Olympics Mascot Mug',
    price: 13,
    description:
      'Discover the Paris 2024 Olympic Games Mascot range! This pretty blue, white and red Phrygian cap is part of the Phryges tribe. He came to help the French make their revolution through sport! ',
    brand: 'Olympics',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clr8dfk2g00nnl916ao80er29_5054367__7U8O6G23Z',
    name: 'Starbucks 16oz Travel Mug',
    price: 13,
    description:
      '\n    Starbucks White Reusable Travel Mug/Cup/Tumbler\n    Grande Medium, 16oz 473ml\n    Color: White\n    Premium finish\n',
    brand: 'Starbucks',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clp80sf6m005nl317dymkbfd6_9713041__15JCQqACI',
    name: 'Snowball Maker',
    price: 13,
    description:
      'Makes 5 perfect snowballs at once\nLightweight and easy to use\nHeavy duty plastic construction\nCoated with Slippery Racer exclusive icevex cold-resistant treatment\nPerfect for endless hours of fun in the snow',
    brand: 'Slippery Racer',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsapav2j0013l115hf8hwxbl_2613716__LtfX3lNUR',
    name: 'LEGO 3 in 1 Red Dragon',
    price: 13,
    description:
      '3 magical animal toys in 1 set – Boys and girls ages 6 and up can build and rebuild 3 different colorful models with the same set of bricks in this LEGO Creator Red Dragon toy set\nEndless play possibilities – Kids can enjoy fun stories with 3 different animal toys: flying with a dragon, more sky-high adventures with a phoenix, or swimming with a fish toy\nPosable animal figures – Each model has posable body parts: the dragon can move its arms, hands, wings, legs, feet, head and mouth, the phoenix can move its wings and the fish can move its fins\nDisplay models – Which ever animal toy they choose to build, it can stand alone to be displayed by kids in their bedrooms after playtime\nGift for kids – This 3 in 1 toy provides a fun build-and-play experience for little builders and can be given as an unexpected treat, birthday present, Chinese New Year gift, or any-time gift idea\nMore 3 in 1 fun – Expand the 3 in 1 fun with other sets (sold separately) from the LEGO Creator range, including amazing animals, cool vehicles and detailed city scenes\nLEGO Creator toys – Every 3 in 1 set lets kids choose between 3 different build models inspired by some of their biggest passions, including animals, vehicles and detailed city scenes',
    brand: 'LEGO',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clmkyhbbp001xkz1721iqd9ab_7777180__NwV0r3Ztj',
    name: 'Alien Neon Sign',
    price: 13,
    description:
      'Color\tGreen\nBrand\tJYWJ\nMaterial\tPlastic\nTheme\tAlien\nMounting Type\tBattery-powered&USB',
    brand: 'JYWJ',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpex9lap00dgl517k77qoppv_2350055__oGFKwCh5z',
    name: 'Reversible Octopus Plushie Angry/Cute',
    price: 13,
    description:
      'This award-winning, good best-selling plushie is super soft, portable, and satisfying to flip!\nFinally, an easy (and cuddly) tool for effective emotional communication. Relieve stress by letting the Reversible Plushie tell friends, family, or coworkers how you are feeling.\nThe perfect work-from-home tool to let friends and family know when not to bother you! Happy= come on in, and Angry= come back later!\nCollect all the Reversible Plushie stuffed animals, including unicorns, narwhals, cats, dogs, pandas, turtles, and more, in tons of different colors!\nTeeTurtle Reversible Plushies are a viral TikTok sensation! Your favorite creators have them, and now you can too!\n',
    brand: 'TeeTurtle',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrqio2530032l416vxsnuys2_9151265__NZe8xjyZH',
    name: 'Ultra Strong Bike Tire Levers',
    price: 13,
    description:
      'Super STRONG levers won’t leave you stranded with a flat tire and a broken lever\nCOMFORTABLE to grip and makes removal of bicycle tires a breeze\nLevers snap together for convenient storage in your bike tire repair tool kit\nSELF LUBRICATING plastic slides easily and won’t scratch your rims\nFREE replacements with the Gorilla Force™ Lifetime Guarantee',
    brand: 'Gorilla Force',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllfnoxni000wl2154hy1yj2c_5217310__F8RePCxfM',
    name: 'Precision Rings Aim Assist Motion Control for Playstation',
    price: 12.5,
    description:
      'IMPROVES AIM: Our Precision Rings are made from a unique material that adds resistance to your stock thumbsticks so you can take more accurate shots, even at max in-game sensitivities.\n\nINCREASE CONTROL: Precision Rings compact to cushion your stick, adding resistance and preventing you from over-shooting your target. Increase your in-game sensitivity to turn on your opponents and snap to targets faster, helping you win more gun battles.\n\nMIXED RESISTANCE LEVEL: Includes six (6) universal rings in soft, medium and hard strengths.\n\nHIGH QUALITY HIGH QUALITY MATERIAL: Flexible, moisture wicking material is resistant to hand and finger oils, dampens sound and quickly recovers its original shape so you can use it over and over again.\n\nCOMPATIBLE WITH PERFORMANCE THUMBSTICKS: Similar to weighted sports gear, try adding them to your setup for training to build muscle in your thumbs and fine tune your aim.',
    brand: 'KontrolFreek',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clsaoy24o00coju17hwe3cyqr_3079964__C7yAO7vN-',
    name: 'Golden Dragon Lucky Coin',
    price: 12,
    description:
      'This 1.57-inch diameter golden lucky coin showcases a beautifully engraved Chinese golden dragon on both sides, symbolizing power, wealth, and good fortune.\nThe coin features traditional Chinese blessings "迎祥纳福" (Welcoming Prosperity and Fortune) and "招财进宝" (Attracting Wealth and Treasure) on the front side, while "龍腾聚瑞" (Dragon Soaring and Gathering Auspiciousness) is engraved on the back side, enhancing its charm and significance.',
    brand: 'Gimilang',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/cllftlj2y0002l016kj3co3xv_9000559__RoGNAE-nD',
    name: 'Leather Slim Wallet',
    price: 12,
    description:
      'Color\nCoffee\n\nMaterial\nLeather\n\nStyle\nRfid Wallet\n\nPattern\nSolid',
    brand: 'Travelambo',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P',
    name: 'Mini Stuffed Penguin ',
    price: 12,
    description:
      'Amazing little mini-size, his tiny little shape and form makes sure he offers a friendly and wonderful little companion to help really build up your growing collection\nUses lock-washer eyes, which are bolted, glued, and then heat sealed into place, no threads to come undone; safe for all ages\nAdorable, chunky proportions\nSuper-soft fabric has a frosted look, creating a soft depth of colour',
    brand: 'Aurora',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clz7uzei600o7zdbckgw0rt74_5945477__pXXc9CBRn',
    name: 'Paris 2024 Olympics Mascot Pool Bag',
    price: 12,
    description:
      'Store multiple belongings securely. Spacious and easy to carry, this Olympic bag is the perfect accessory for travel and trips to the gym.',
    brand: 'Olympics',
    isAvailableForDeal: true,
  },
  {
    image:
      'https://ik.imagekit.io/hr727kunx/products/clrmf0vgp00ffl2176bk1jq30_4794578__8Xutb0GzA',
    name: 'Car Rearview Mirror',
    price: 12,
    description:
      'This panoramic rearview mirror is designed to provide you with a wider viewing range and drive safer. 8sanlione rearview mirror are made of high quality ABS plastic material and convex HD glass, which could make clear image, no double reflections to ensure your safety when driving',
    brand: '8sanlione',
    isAvailableForDeal: true,
  },
];

module.exports = { items };
