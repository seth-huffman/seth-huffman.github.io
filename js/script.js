const cardData = [
////////////////////////////////////////
// Garage
////////////////////////////////////////
{ title: "Storage Cabinet", description: "VEVOR Metal Storage Cabinet, 120lbs Load Capacity per Shelf", url: "https://www.amazon.com/VEVOR-Cabinet-Metal-Storage-Mounted/dp/B0BWR5SJHV" },
{ title: "Garage Storage", description: "Easily install this Regular Duty Welded 24-Gauge Steel Freestanding Garage Cabinet in Black (31 in. W x 75 in. H x 20 in. D). ", url: "https://www.homedepot.com/p/Husky-Regular-Duty-Welded-24-Gauge-Steel-Freestanding-Garage-Cabinet-in-Black-30-5-in-W-x-75-in-H-x-19-6-in-D-G3002L-US/312050627" },
{ title: "Gorilla Ladder", description: "14-ft Reach Aluminum 2-in-1 Extension Multi-Position Ladder with Project Bucket", url: "https://www.homedepot.com/p/Gorilla-Ladders-14-ft-Reach-Aluminum-2-in-1-Extension-Multi-Position-Ladder-with-Project-Bucket-300-lbs-Capacity-Type-1A-Duty-Rating-GL2A-11/325683432" },
{ title: "Milwaukee Table Saw", description: "M18 FUEL ONE-KEY 18-Volt Lithium-Ion Brushless Cordless 8-1/4 in. Table Saw (Tool-Only)", url: "https://www.homedepot.com/p/Milwaukee-M18-FUEL-ONE-KEY-18-Volt-Lithium-Ion-Brushless-Cordless-8-1-4-in-Table-Saw-Tool-Only-2736-20/307744663" },
{ title: "Right Angle Bit", description: "SHOCKWAVE Impact Duty Right Angle Drill Adapter", url: "https://www.homedepot.com/p/Milwaukee-SHOCKWAVE-Impact-Duty-Right-Angle-Drill-Adapter-48-32-2390/309634715" },
{ title: "Heater", description: "A 60,000 BTU forced-air propane heater for warming the garage during cold-weather projects.", url: "https://www.homedepot.com/pep/Mr-Heater-Contractor-Series-60-000-BTU-Forced-Air-Propane-Torpedo-Space-Heater-with-10-ft-Hose-and-Regulator-MHC60FAV/316812709?g_store=2103&source=shoppingads&locale=en-US&fp=ggl&pla&mtc=SHOPPING-BF-CDP-GGL-D27E-027_023_PORT_HEATING-NA-NA-NA-PMAX-NA-NA-NA-NA-NBR-NA-NA-NEW-NA&cm_mmc=SHOPPING-BF-CDP-GGL-D27E-027_023_PORT_HEATING-NA-NA-NA-PMAX-NA-NA-NA-NA-NBR-NA-NA-NEW-NA-20425430792--&gclsrc=aw.ds&gad_source=1&gad_campaignid=20425433267&gbraid=0AAAAADq61Ud0O6vqlZ-hKXSfmhPWMadU9&gclid=Cj0KCQjwteTUBhD4ARIsAEYjs3o5WyjqhT2wVYaX1rhGiS-PitFF_fdtPqFBhKTPiFp05hZZsO6xCb0aAv7EEALw_wcB" },
{ title: "Fan", description: "A cordless 18-inch variable-speed fan for circulating air in the garage or workshop.", url: "https://www.homedepot.com/p/Milwaukee-M18-Brushless-Cordless-Hybrid-18-in-Variable-Speed-Fan-Tool-Only-0821-20/327694903" },
{ title: "Outlet", description: "A white 15-amp duplex outlet for adding a clean, reliable garage power point.", url: "https://www.homedepot.com/p/Leviton-Decora-15-Amp-125-V-Duplex-Outlet-Receptacle-White-1-Pack-5325-WS-R52-05325-0WS/100357024" },
{ title: "Steps", description: "concrete", url: "https://www.homedepot.com/p/Quikrete-80-lb-Concrete-Mix-110180/100318511" },
{ title: "Epoxy", description: "Epoxy coating for sealing and protecting garage surfaces.", url: "https://www.homedepot.com/p/Milwaukee-Epoxy-Coating-Kit-1-lb-2736-20/327694903" },
{ title: "Workbench", description: "72 inch Husky Workbench", url: "https://www.homedepot.com/p/Husky-72-in-W-x-24-in-D-Heavy-Duty-18-Drawer-Mobile-Workbench-Cabinet-with-Adjustable-Height-Hardwood-Top-in-Matte-Black-HOLC7218BB1MYS/302255876" },
// { title: "Small Slate Wall", description: "", url: "" }, - Wait for workbench/ Maybe get a gladiator rail to hold cabinets

////////////////////////////////////////
// Outside
////////////////////////////////////////
{ title: "Exterior Camera", description: "A wired outdoor security camera for monitoring the exterior of the home.", url: " https://store.google.com/config/nest_cam_outdoor_wired_2nd_gen?hl=en-US&selections=eyJwcm9kdWN0RmFtaWx5IjoiYm1WemRGOWpZVzFmYjNWMFpHOXZjbDkzYVhKbFpGOHlibVJmWjJWdSIsInZhcmlhbnRzIjpbWyIyIiwiTVE9PSJdXX0%3D" },
{ title: "Rail Posts", description: "Charcoal-black aluminum posts for supporting an outdoor deck railing.", url: "https://www.lowes.com/pd/Trex-2-in-x-2-in-x-3-1-2-ft-Charcoal-Black-Aluminum-Deck-Post/5017892629" },
{ title: "Stump Rot", description: "A fast-acting formula for removing stubborn stumps in outdoor areas.", url: "https://www.homedepot.com/pep/Bonide-Stump-Out-Granules-Do-it-Yourself-At-Home-Stump-Removal-Pellets-1-lb-Fast-Acting-Formula-for-Outdoor-Use-272/202022334?source=shoppingads&locale=en-US&fp=ggl&pla=&mtc=SHOPPING-BF-CDP-GGL-D28O-028_001_CHEMICALS-NA-NA-NA-PMAX-NA-NA-NA-NA-NBR-NA-NA-NA-PMAXONECLICK_JControl24&cm_mmc=SHOPPING-BF-CDP-GGL-D28O-028_001_CHEMICALS-NA-NA-NA-PMAX-NA-NA-NA-NA-NBR-NA-NA-NA-PMAXONECLICK_JControl24-20410431792--&gclsrc=aw.ds&gad_source=1&gad_campaignid=20288283055&gbraid=0AAAAADq61UffbIJyLDT0AtxQLwjUwV2ys&gclid=CjwKCAjw-rTUBhAiEiwADv8gBFnUdZ-AHBeujBPCEn4pYlB_sd16gQxjBeAt99mDz4KJzecFyrqkRxoC_iEQAvD_BwE" },
{ title: "Downspot", description: "A downspout adapter that directs roof runoff into a drainage system.", url: "https://www.homedepot.com/p/Advanced_Drainage_Systems_4-in_Singlewall-x-_in-x-_in_Downspout_Adapter_0465AA/100201025" },
{ title: "Porch Pots", description: "Decorative planters for adding greenery and seasonal color to the porch.", url: "https://www.earlmay.com/linea-conic-planter-ship-to-store-pickup-in-store-only?location=&quantity=1&custcol_em_sca_pickup_only=T" },
// { title: "Porch Pots", description: "stoneart", url: "" }, gray - 39.99, earl may, round dolce 33,29

///////////////////////////////////////
// Kitchen
///////////////////////////////////////
// { title: "Kitchen Light", description: "", url: "" }, - Figure out kitchen goal

///////////////////////////////////////
// Bedrooms Room
///////////////////////////////////////
{ title: "Fans", description: "4", url: "https://www.homedepot.com/p/TOZING-54-in-Modern-Indoor-Black-and-Wood-Low-Profile-Flush-Mount-Ceiling-Fan-Light-with-Bright-White-Integrated-LED-4-Blades-CFL-RF-YX002/327604528" },
{ title: "Interior Door", description: "81 x (18 or 28 or 24 or 24 or 24)", url: "https://www.homedepot.com/p/JELD-WEN-24-in-x-80-in-Craftsman-Primed-Smooth-Solid-Core-Molded-Composite-MDF-Interior-Door-Slab-THDJW137100008/203618129" },
{ title: "Door Hinges", description: "18 Pack", url: "https://www.homedepot.com/p/Everbilt-18-Pack-3-1-2-in-x-5-8-in-Radius-Matte-Black-Butt-Door-Hinge-44126/336670928" },

///////////////////////////////////////
// Laundry Room
///////////////////////////////////////
{ title: "Pull Out Trash", description: "A sliding cabinet organizer that keeps the kitchen garbage bin concealed and easy to access.", url: "https://www.target.com/p/lynk-professional-sliding-pull-out-for-kitchen-garbage-bin/-/A-93823979#lnk=sametab" },
{ title: "Room Rug", description: "A neutral geometric runner rug that adds comfort and texture to the room.", url: "https://www.target.com/p/2-39-x7-39-eliot-geo-runner-rug-tan-beige-gray-threshold-8482/-/A-85268142" }, 

///////////////////////////////////////
// Bathroom 
///////////////////////////////////////
{ title: "Flooring", description: "Walnut-look porcelain tile for a durable, wood-inspired bathroom floor", url: "http://homedepot.com/p/Daltile-Baker-Wood-6-in-x-24-in-Walnut-Glazed-Porcelain-Floor-and-Wall-Tile-14-55-sq-ft-Case-BK10624HD1PR/313050938" },

///////////////////////////////////////
// Entryway
///////////////////////////////////////
{ title: "Mantle", description: "One from dads shop", url: "" },
{ title: "Stone", description: "Random ledger stone panels for creating a warm natural accent around the entryway mantle.", url: "https://www.flooranddecor.com/travertine-and-limestone/alamo-sandstone-random-ledger-panel-100899772.html" },
{ title: "Smart Shades", description: "MT: Inside, Fabric: White, MT: Zigbee Motor, Valance: Standard, BB: Standard, SP: None, RC: None, RT: Reverse, MS: Right", url: "https://www.smartwingshome.com/products/smartwings-motorized-light-filtering-roller-shades-70-blackout-linen?variant=40737905279173" },
// { title: "Painting", description: "", url: "" },

///////////////////////////////////////
// Pantry
///////////////////////////////////////
{ title: "Pantry Bins", description: "Waterproof pantry bins for keeping your food items fresh and organized.", url: "https://www.target.com/p/large-ip67-waterproof-box-brightroom-8482/-/A-93251237#lnk=sametab" },
{ title: "Old Work Box", description: "3", url: "https://www.homedepot.com/p/Carlon-1-Gang-20-cu-in-Electrical-PVC-Old-Work-Electrical-Switch-and-Outlet-Box-B120R-B120R/202077323" },

///////////////////////////////////////
// Office
///////////////////////////////////////
{ title: "Shoe Rack", description: "A sturdy shoe rack for organizing your footwear in the office.", url: "https://www.homedepot.com/p/ClosetMaid-ShelfTrack-11-25-in-D-x-36-in-W-x-4-in-H-5-Pair-Ventilated-Wire-Shoe-Shelf-Steel-Closet-System-2846/100656012" },
{ title: "Treadmill", description: "A high-quality treadmill for your home fitness needs.", url: "https://www.scheels.com/p/04361965835?queryID=6dc3f4b8f5fafdd7" },
{ title: "Frames", description: "7", url: "http://hobbylobby.com/home-decor-frames/frames-framing-supplies/wall-frames/black---wood-wall-frame---12-x-16/p/81131471" },
{ title: "Slat Wall Panels", description: "8 - 8x2", url: "https://www.homedepot.com/pep/Art3dwallpanels-Walnut-0-83-in-x-2-ft-x-4-ft-Slat-MDF-Acoustic-Decorative-Wall-Paneling-3D-Sound-Absorbing-Panel-31sq-ft-Case-A31hd115/327341894?source=shoppingads&locale=en-US&fp=ggl&pla=&mtc=SHOPPING-BF-HDH-GGL-D59H-059_035_WALL_DECOR-NA-Multi-NA-PMAX-NA-RDC-NA-NA-NBR-NA-NA-NA-All_In_Subclass_PMAX&cm_mmc=SHOPPING-BF-HDH-GGL-D59H-059_035_WALL_DECOR-NA-Multi-NA-PMAX-NA-RDC-NA-NA-NBR-NA-NA-NA-All_In_Subclass_PMAX-21273643652--&gclsrc=aw.ds&gad_source=4&gad_campaignid=21277626853&gbraid=0AAAAADq61Uedmj3Imlz06GqxYp6OW4_-b&gclid=Cj0KCQjwteTUBhD4ARIsAEYjs3p_g0AA3ut9a0Z2OgtlpsgUfmD4mReaoKIHkDIGVIQ1T4hRe-QIiP0aAq2bEALw_wcB" },

///////////////////////////////////////
// Downstairs
///////////////////////////////////////
{ title: "Bathroom Plant", description: "A beautiful plant for your bathroom.", url: "https://www.target.com/p/shady-lady-tree-in-ceramic-pot-threshold-8482-designed-with-studio-mcgee/-/A-91051973" },
{ title: "Railing", description: "A sturdy railing for your staircase.", url: "https://www.boldmfg.com/collections/handrails?fbclid=PAZXh0bgNhZW0BMABhZGlkAAAGCTOrQY8BpjoF4KnOTPPWOzdZXX4fxc-cJCbeIHeR1xjlOmAR2472-bFHttQz3Jw5Aw_aem_e2nhznnhMoVch9fRcvG0gQ&utm_source=facebook&utm_medium=paid&campaign_id=6633349159575&ad_id=6636585015775" },

///////////////////////////////////////
// Technology
///////////////////////////////////////
{ title: "Smart Shades Link", description: "Control your motorized shades with one Smart Link per room, ensuring reliable performance throughout your home.", url: "https://www.smartwingshome.com/products/smart-link" },      
{ title: "Computer Monitor", description: "Computer monitor.", url: "http://bestbuy.com/product/samsung-32-odyssey-g51f-qhd-180hz-1ms-amd-freesync-gaming-monitor-with-hdr10-displayport-hdmi-black/JJGRF33JCX/sku/6618904" },
// { title: "Apple TV", description: "", url: "" }, - wait
{ title: "Dyson Air Purifier", description: "", url: "https://www.amazon.com/Dyson-PC1-Purifier-Cool/dp/B0F3FZZ5QZ/ref=mp_s_a_1_2?crid=1MU278SZF66FT&dib=eyJ2IjoiMSJ9.WfG230kHMiucq7SAVYSqqc7gS8tJLI0CU6garAImfsKEiCjmluKehN8fDpUKtAH6qPoHBNdUgqHnFPubFZVyi1xhHGYxflUrPFL0ze986jdx_5_iD5cV-UILrdV87c9e2ivhUNviRF4f5rG_UFS7Y1DD0HYYZEyM27sEfkbi9TcZNMCK691646hDVusETO_6FYzSjDXBPwJRQVFcohlR0g.zVWxCOSLSowb156hpUk-O1wlZW7ukK3hl4PprvlZ-bc&dib_tag=se&keywords=dyson%2Bair%2Bpurifier%2Bcool%2Bpc&qid=1788615776&sprefix=dyson%2Bair%2Bpurifier%2Bcool%2Bpc%2Caps%2C189&sr=8-2&th=1" }
];

const grid = document.getElementById('cardGrid');

cardData.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';
  card.onclick = () => window.open(item.url, '_blank');
  card.innerHTML = `
    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">${item.title}</h3>
      </div>
      <p class="card-description">${item.description}</p>
    </div>
  `;
  grid.appendChild(card);
});
