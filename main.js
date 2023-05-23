import './style.css'

/*
{
  name: '',
  address: {
    street: '',
    city: '',
    state: '',
    zip: ''
  },
  lat: ,
  lng: ,
  dir: '',
}
*/

const locations = [
  {
    name: 'Total Wine & More',
    address: {
      street: '5050 Town Center Circle',
      city: 'Boca Raton',
      state: 'FL',
      zip: '33486'
    },
    lat: 26.3636397,
    lng: -80.1636089,
    dir: 'https://www.google.com/maps/dir/Total+Wine+%26+More,+5050+Town+Center+Cir,+Boca+Raton,+FL+33486//@26.3636397,-80.1636089,13z/data=!4m9!4m8!1m5!1m1!1s0x88d91e75aeda2751:0xf297b697c10bd1cf!2m2!1d-80.1224091!2d26.3635687!1m0!3e0'
  },
  {
    name: 'Bonita Springs Balloon Bar & Grill',
    address: {
      street: '9070 Bonita Beach Rd SE',
      city: 'Bonita Springs',
      state: 'FL',
      zip: '34135'
    },
    lat: 26.3310245,
    lng: -81.8018349,
    dir: 'https://www.google.com/maps/dir//Bonita+Beach+Balloon+Bar+%26+Grill,+9070+Bonita+Beach+Rd+SE,+Bonita+Springs,+FL+34135/@26.3310245,-81.8018349,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88db19f4b8834271:0x9c23759de6963918!2m2!1d-81.8018342!2d26.3309687!3e0'
  },
  {
    name: "Johnny Malloy's Sports Pub",
    address: {
      street: '10347 Bonita Beach Rd SE #101',
      city: 'Bonita Springs',
      state: 'FL',
      zip: '34135'
    },
    lat: 26.330221,
    lng: -81.7803886,
    dir: "https://www.google.com/maps/dir//Johnny+Malloy's+Sports+Pub,+10347+Bonita+Beach+Rd+SE+%23101,+Bonita+Springs,+FL+34135/@26.330221,-81.7803886,20z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88db1980ccd59739:0xa7fc8cdcf0a92dd1!2m2!1d-81.7801445!2d26.3305427"
  },
  {
    name: 'Village Walk Bar & Grill',
    address: {
      street: '15301 Latitude Dr #500',
      city: 'Bonita Springs',
      state: 'FL',
      zip: '34135'
    },
    lat: 26.3243229,
    lng: -81.6978025,
    dir: 'https://www.google.com/maps/dir/Village+Walk+Bar+%26+Grill,+15301+Latitude+Dr+%23500,+Bonita+Springs,+FL+34135/@26.3243229,-81.6978025,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88db1bd37c536eb1:0x78ff4b589d92c26f!2m2!1d-81.6971588!2d26.3243217'
  },
  {
    name: 'The Seaside Bar and Grill',
    address: {
      street: '24582 Old 41 Rd Unit #12',
      city: 'Bonita Springs',
      state: 'FL',
      zip: '34135'
    },
    lat: 26.3305427,
    lng: -81.7801445,
    dir: 'https://www.google.com/maps/dir/The+Seaside+Bar+and+Grill,+24850+Old+41+Rd+%23+12,+Bonita+Springs,+FL+34135/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88db17db79857667:0x7121b75a33b09db0?sa=X&ved=2ahUKEwjNvPD92In_AhUkJX0KHSJjC2kQ9Rd6BAhaEAU'
  },
  {
    name: 'Friendly Frankies Liquor',
    address: {
      street: '3300 Bonita Bch Rd #110',
      city: 'Bonita Springs',
      state: 'FL',
      zip: '34134'
    },
    lat: 26.3312759,
    lng: -81.8113253,
    dir: 'https://www.google.com/maps/dir/Friendly+Frankies+Liquor,+3300+Bonita+Bch+Rd+%23110,+Bonita+Springs,+FL+34134/@26.3312759,-81.8113253,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88db19a6ec9c96cd:0xddd07090503712ee!2m2!1d-81.8103498!2d26.3312769'
  },
  {
    name: 'The Brass Tap',
    address: {
      street: '28010 Race Track Rd',
      city: 'Bonita Springs',
      state: 'FL',
      zip: '34135'
    },
    lat: 26.3304888,
    lng: -81.7784417,
    dir: 'https://www.google.com/maps/dir//The+Brass+Tap,+28010+Race+Track+Rd,+Bonita+Springs,+FL+34135/@26.3304888,-81.7784417,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88db1b20c8e9b4d5:0x7f9ea48b36081a53!2m2!1d-81.7758644!2d26.3306842'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '850 North Congress Ave',
      city: 'Boynton Beach',
      state: 'FL',
      zip: '33426'
    },
    lat: 26.5350866,
    lng: -80.0923728,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+850+N+Congress+Ave,+Boynton+Beach,+FL+33426/@26.5350866,-80.0923728,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d8df50e526fbc1:0x8f769c3d773c703e!2m2!1d-80.0897979!2d26.5350818'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '8539 Cooper Creek Blvd',
      city: 'Bradenton',
      state: 'FL',
      zip: '34201'
    },
    lat: 27.3899795,
    lng: -82.4565622,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+8539+Cooper+Creek+Blvd,+Bradenton,+FL+34201/@27.3899795,-82.4565622,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88c338de556843f5:0x2de1d13e203ee3b7!2m2!1d-82.4539873!2d27.3899748'
  },
  {
    name: 'Sofia’s',
    address: {
      street: '8130 Lakewood Main Street #D104',
      city: 'Bradenton',
      state: 'FL',
      zip: '34202'
    },
    lat: 27.3942586,
    lng: -82.440439,
    dir: 'https://www.google.com/maps/dir//Sofia%E2%80%99s+Restaurant,+8130+Main+St+Unit+104,+Lakewood+Ranch,+FL+34202/@27.3942586,-82.440439,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88c339e91866539f:0x864e0ce282b06e35!2m2!1d-82.4355681!2d27.3942539'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '11211 Causeway Blvd',
      city: 'Brandon',
      state: 'FL',
      zip: '33511'
    },
    lat: 27.9213173,
    lng: -82.3282579,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+11211+Causeway+Blvd,+Brandon,+FL+33511/@27.9213173,-82.3282579,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88c2ce3f84fe8ebb:0x6ee6554d03e7bf7!2m2!1d-82.325683!2d27.9213126,'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '2528 State Road 580',
      city: 'Clearwater',
      state: 'FL',
      zip: '33761'
    },
    lat: 28.0210457,
    lng: -82.7351099,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+2528+580,+Clearwater,+FL+33761/@28.0210457,-82.7351099,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88c2edf8dce2570d:0xfd37e322fe3d8d3e!2m2!1d-82.732535!2d28.021041,'
  },
  {
    name: 'Jungle Bird Tiki',
    address: {
      street: '1520 Lafayette St',
      city: 'Cape Coral',
      state: 'FL',
      zip: '33904'
    },
    lat: 26.5613941,
    lng: -81.9470845,
    dir: 'https://www.google.com/maps/dir//Jungle+Bird+Tiki,+1520+Lafayette+St,+Cape+Coral,+FL+33904/@26.5613941,-81.9470845,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88db3ffb06982f6f:0xf9525ef14ca4c1e9!2m2!1d-81.9445096!2d26.5613893,'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '2500 West International Speedway Blvd',
      city: 'Daytona Beach',
      state: 'FL',
      zip: '32114'
    },
    lat: 29.1789094,
    lng: -81.0865527,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+2500+W+International+Speedway+Blvd,+Daytona+Beach,+FL+32114/@29.1789094,-81.0865527,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e6dece32c430e9:0x4cb10ff93999d643!2m2!1d-81.0839778!2d29.1789047,'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '8012 Mediterranean Dr Ste 101',
      city: 'Estero',
      state: 'FL',
      zip: '33928'
    },
    lat: 26.4088347,
    lng: -81.8110969,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+8012+Mediterranean+Drive+%23101,+Estero,+FL+33928/@26.4088347,-81.8110969,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88db171a78e83133:0xec753f82ddceaec0!2m2!1d-81.808522!2d26.4088299,'
  },
  {
    name: 'Best Buy Liquors',
    address: {
      street: '402 SE 1st Ave',
      city: 'Florida City',
      state: 'FL',
      zip: '33034'
    },
    lat: 25.4430305,
    lng: -80.4755181,
    dir: 'https://www.google.com/maps/dir//Best+Buy+Liquors,+402+SE+1st+Ave,+Florida+City,+FL+33034/@25.4430305,-80.4755181,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88d9e0b5c3ca4a81:0xd9dcaec1fa005744!2m2!1d-80.4755181!2d25.4430305!3e0'
  },
  {
    name: 'Aruba Beach Cafe',
    address: {
      street: '1 Commercial Blvd',
      city: 'Lauderdale-By-The-Sea',
      state: 'FL',
      zip: '33308'
    },
    lat: 26.1900027,
    lng: -80.0977073,
    dir: 'https://www.google.com/maps/dir//Aruba+Beach+Cafe,+1+Commercial+Blvd,+Lauderdale-By-The-Sea,+FL+33308/@26.1900027,-80.0977073,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d8fdf432886411:0xdc5e3a16197ae549!2m2!1d-80.0951324!2d26.1899979,'
  },
  {
    name: 'Even Keel Fish Shack',
    address: {
      street: '112 Commercial Blvd Ste A',
      city: 'Lauderdale-By-The-Sea',
      state: 'FL',
      zip: '33308'
    },
    lat: 26.189515,
    lng: -80.099012,
    dir: 'https://www.google.com/maps/dir//Even+Keel+Fish+Shack,+112+Commercial+Blvd+suite+a,+Lauderdale-By-The-Sea,+FL+33308/@26.189515,-80.099012,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d903c44d24489b:0x9e2940b929aeb072!2m2!1d-80.0964253!2d26.1896278,'
  },
  {
    name: 'Rocco’s Taco & Tequila Bar',
    address: {
      street: '1313 E Las Olas Blvd',
      city: 'Fort Lauderdale',
      state: 'FL',
      zip: '33301'
    },
    lat: 26.1195018,
    lng: -80.1316279,
    dir: 'https://www.google.com/maps/dir//Rocco\'s+Tacos+%26+Tequila+Bar,+1313+E+Las+Olas+Blvd,+Fort+Lauderdale,+FL+33301/@26.1195018,-80.1316279,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d9004e59212803:0xab8ad85e525dad2c!2m2!1d-80.129053!2d26.119497,'
  },
  {
    name: 'Sidecar Speakeasy',
    address: {
      street: '901 Los Olas Blvd',
      city: 'Fort Lauderdale',
      state: 'FL',
      zip: '33301'
    },
    lat: 26.1194844,
    lng: -80.1363803,
    dir: 'https://www.google.com/maps/dir//Sidecar,+901+E+Las+Olas+Blvd,+Fort+Lauderdale,+FL+33301/@26.1194844,-80.1363803,17z/data=!3m1!5s0x88d90051b000420f:0xd7eeb920b17831c7!4m8!4m7!1m0!1m5!1m1!1s0x88d901a587456c65:0xfa74e92a14855e52!2m2!1d-80.1338054!2d26.1194796,'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '1906 Cordova Rd',
      city: 'Fort Lauderdale',
      state: 'FL',
      zip: '33316'
    },
    lat: 26.0972022,
    lng: -80.1317001,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+1906+Cordova+Rd,+Fort+Lauderdale,+FL+33316/@26.0972022,-80.1317001,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d9006f2c3d992b:0xf230f718ba73a3ad!2m2!1d-80.1291252!2d26.0971974,'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '15980 Pines Blvd',
      city: 'Pembroke Pines',
      state: 'FL',
      zip: '33027'
    },
    lat: 26.0069681,
    lng: -80.3574258,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+15980+Pines+Blvd,+Pembroke+Pines,+FL+33027/@26.0069681,-80.3574258,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88d9a6abedc656a1:0xc36b58b01b83e19e!2m2!1d-80.3574258!2d26.0069681!3e0'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '801 S. University Dr Suite G100',
      city: 'Plantation',
      state: 'FL',
      zip: '33324'
    },
    lat: 26.1113099,
    lng: -80.2558249,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+801+S+University+Dr+Suite+G100,+Plantation,+FL+33324/@26.1113099,-80.2558249,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d90795740e0f33:0xe6514037f6dd3200!2m2!1d-80.25325!2d26.1113051,'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '13711 S Tamiami Trail',
      city: 'Fort Myers',
      state: 'FL',
      zip: '33912'
    },
    lat: 26.5441088,
    lng: -81.871255,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+13711+S+Tamiami+Trail,+Fort+Myers,+FL+33912/@26.5441088,-81.871255,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88db3fe0673143ab:0xcb4062cc01824228!2m2!1d-81.8686801!2d26.544104,'
  },
  {
    name: 'Skippers Liquors',
    address: {
      street: '7205 Estero Blvd',
      city: 'Fort Myers',
      state: 'FL',
      zip: '33931'
    },
    lat: 26.4143907,
    lng: -81.9022226,
    dir: 'https://www.google.com/maps/dir//Skippers+Liquors,+7205+Estero+Blvd,+Fort+Myers+Beach,+FL+33931/@26.4143907,-81.9022226,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88db3d0550392199:0x2625d7061a0a54e3!2m2!1d-81.8996477!2d26.4143859,'
  },
  {
    name: 'First Street Restaurant and Bar',
    address: {
      street: '2236 First St',
      city: 'Fort Myers',
      state: 'FL',
      zip: '33901'
    },
    lat: 26.6442558,
    lng: -81.8724139,
    dir: 'https://www.google.com/maps/dir//First+Street+Restaurant+and+Bar,+2236+First+St,+Fort+Myers,+FL+33901/@26.6442558,-81.8724139,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88db41e30e1b95c7:0x5f5abf78a101ae51!2m2!1d-81.869839!2d26.644251,'
  },
  {
    name: 'Fiddlesticks Country Club',
    address: {
      street: '15391 Canongate Dr',
      city: 'Fort Myers',
      state: 'FL',
      zip: '33912'
    },
    lat: 26.5184357,
    lng: -81.8159899,
    dir: 'https://www.google.com/maps/dir//Fiddlesticks+Country+Club,+15391+Cannongate+Dr,+Fort+Myers,+FL+33912/@26.5184357,-81.8159899,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88db14f9227b6655:0x37d558c726477497!2m2!1d-81.8134157!2d26.5184639,'
  },
  {
    name: 'Lani Kai Island Resort',
    address: {
      street: '1400 Estero Blvd',
      city: 'Fort Myers Beach',
      state: 'FL',
      zip: '33931'
    },
    lat: 26.4511793,
    lng: -81.9543312,
    dir: 'https://www.google.com/maps/dir//Lani+Kai+Island+Resort,+1400+Estero+Blvd,+Fort+Myers+Beach,+FL+33931/@26.4511793,-81.9543312,17z/data=!3m1!5s0x88db3c7537540421:0xcbe10f8a64ae7b16!4m8!4m7!1m0!1m5!1m1!1s0x88db3c752eb8642b:0xc357565a6c40ce98!2m2!1d-81.9517563!2d26.4511745,'
  },
  {
    name: 'Nick’s Beach Discount Liquor & Wine',
    address: {
      street: '1661 Estero Blvd Ste 8',
      city: 'Fort Myers Beach',
      state: 'FL',
      zip: '33931'
    },
    lat: 26.4516594,
    lng: -81.9517035,
    dir: 'https://www.google.com/maps/dir//Nick%27s+Beach+Discount+Liquor+%26+Wine,+1661+Estero+Blvd+STE+8,+Fort+Myers+Beach,+FL+33931/@26.4516594,-81.9517035,17z/data=!3m1!5s0x88db3c74b6696541:0x2e5bb916f6dd8e37!4m8!4m7!1m0!1m5!1m1!1s0x88db3bf55230f61b:0x6c523fb88f0b378b!2m2!1d-81.9491286!2d26.4516546,'
  },
  {
    name: 'Sunset Beach Tropical Grill and The Playmore Tiki Bar',
    address: {
      street: '1028 Estero Blvd',
      city: 'Fort Myers Beach',
      state: 'FL',
      zip: '33931'
    },
    lat: 26.4528003,
    lng: -81.9583269,
    dir: 'https://www.google.com/maps/dir//Sunset+Beach+Tropical+Grill+and+The+Playmore+Tiki+Bar,+1028+Estero+Blvd,+Fort+Myers+Beach,+FL+33931/@26.4528003,-81.9583269,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88db3bf52c1e7f47:0x589ace7081403ce5!2m2!1d-81.955752!2d26.4527955,'
  },
  {
    name: 'Yucatan Beach Stand Bar & Grill',
    address: {
      street: '250 Old San Carlos Blvd',
      city: 'Fort Myers Beach',
      state: 'FL',
      zip: '33931'
    },
    lat: 26.4546398,
    lng: -81.9578949,
    dir: 'https://www.google.com/maps/dir//The+Yucatan+Beach+Stand,+250+Old+San+Carlos+Blvd,+Fort+Myers+Beach,+FL+33931/@26.4546398,-81.9578949,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88db3bf51a87876d:0xe7ea813218ed5b7a!2m2!1d-81.95532!2d26.454635,'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '3965 Plaza Blvd Ste 10',
      city: 'Gainesville',
      state: 'FL',
      zip: '32608'
    },
    lat: 29.6386107,
    lng: -82.3790473,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+3965+Plaza+Blvd+Ste+10,+Gainesville,+FL+32608/@29.6386107,-82.3790473,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e8a34887d6fb19:0x4cb541e25f6ae227!2m2!1d-82.3764724!2d29.6386069,'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '5050 Town Center Circle',
      city: 'Boca Raton',
      state: 'FL',
      zip: '33486'
    },
    lat: 26.3636397,
    lng: -80.1636089,
    dir: 'https://www.google.com/maps/dir/Total+Wine+%26+More,+5050+Town+Center+Cir,+Boca+Raton,+FL+33486/@26.3636397,-80.1636089,13z/data=!4m9!4m8!1m5!1m1!1s0x88d91e75aeda2751:0xf297b697c10bd1cf!2m2!1d-80.1224091!2d26.3635687!1m0!3e0'
  },
  {
    name: "Denny's Liquors",
    address: {
      street: "99610 Overseas Hwy",
      city: "Key Largo",
      state: "FL",
      zip: "33037"
    },
    lat: 25.0952317,
    lng: -80.4431018,
    dir: "https://www.google.com/maps/dir//Denny's+Liquors,+99610+Overseas+Hwy,+Key+Largo,+FL+33037/@25.0952317,-80.4431018,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d769c25a4e10d9:0xd32062dd9689a40!2m2!1d-80.4404663!2d25.0951892,"
  },
  {
    name: "22&Co",
    address: {
      street: "504 Angela St",
      city: "Key West",
      state: "FL",
      zip: "33040"
    },
    lat: 24.5539375,
    lng: -81.8036451,
    dir: "https://www.google.com/maps/dir//22%26Co,+504+Angela+St,+Key+West,+FL+33040/@24.5539375,-81.8036451,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b6eb96786fc1:0xa771e31bb6d731fc!2m2!1d-81.8010692!2d24.5539313,"
  },
  {
    name: "Conch Town Liquor & Lounge",
    address: {
      street: "3340 N Roosevelt Blvd",
      city: "Key West",
      state: "FL",
      zip: "33040"
    },
    lat: 24.5708663,
    lng: -81.7661413,
    dir: "https://www.google.com/maps/dir//Conch+Town+Liquor+%26+Lounge,+3340+N+Roosevelt+Blvd,+Key+West,+FL+33040/@24.5708663,-81.7661413,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b144b92dd91b:0xd4f54e6482a65d23!2m2!1d-81.7635664!2d24.5708614,"
  },
  {
    name: "First Flight Island Restaurant & Brewery",
    address: {
      street: "301 Whitehead St",
      city: "Keywest",
      state: "FL",
      zip: "33040"
    },
    lat: 24.5573419,
    lng: -81.8079398,
    dir: "https://www.google.com/maps/dir//First+Flight+Island+Restaurant+%26+Brewery,+301+Whitehead+St,+Key+West,+FL+33040/@24.5573419,-81.8079398,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b6ebeffd5a67:0x4b2db929467e4e0e!2m2!1d-81.8053911!2d24.5573056,"
  },
  {
    name: "General Horseplay",
    address: {
      street: "423 Caroline St",
      city: "Key West",
      state: "FL",
      zip: "33040"
    },
    lat: 24.558001,
    lng: -81.8074394,
    dir: "https://www.google.com/maps/dir//General+Horseplay,+423+Caroline+St,+Key+West,+FL+33040/@24.558001,-81.8074394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b731de4c7359:0x8fc1f0db152f36f8!2m2!1d-81.8048344!2d24.5579561,"
  },
  {
    name: "Heroes Bar and Liberty Lounge",
    address: {
      street: "506 Southard St",
      city: "Key West",
      state: "FL",
      zip: "33040"
    },
    lat: 24.5550013,
    lng: -81.8042817,
    dir: "https://www.google.com/maps/dir//Heroes+Bar+and+Liberty+Lounge,+506+Southard+St,+Key+West,+FL+33040/@24.5550013,-81.8042817,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b7ca5469124f:0x22a2fa5c796cdedd!2m2!1d-81.8017068!2d24.5549964,"
  },
  {
    name: "Hogfish Bar & Grill",
    address: {
      street: "6810 Front St",
      city: "Stock Island",
      state: "FL",
      zip: "33040"
    },
    lat: 24.5662966,
    lng: -81.7359768,
    dir: "https://www.google.com/maps/dir//Hogfish+Bar+%26+Grill,+6810+Front+St,+Stock+Island,+FL+33040/@24.5662966,-81.7359768,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b19db99b8fd9:0x352566534c3a24f5!2m2!1d-81.7334019!2d24.5662917,"
  },
  {
    name: "KWEST Liquors",
    address: {
      street: "705 Duval St",
      city: "Key West",
      state: "FL",
      zip: "33040"
    },
    lat: 24.5536873,
    lng: -81.8036537,
    dir: "https://www.google.com/maps/dir//KWEST+Liquors,+705+Duval+St,+Key+West,+FL+33040/@24.5536873,-81.8036537,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b6e9d1774fd1:0xfd30b824c3a11ecb!2m2!1d-81.8010788!2d24.5536824,"
  },
  {
    name: "Shots & Giggles",
    address: {
      street: "201 Ann St",
      city: "Key West",
      state: "FL",
      zip: "33040"
    },
    lat: 24.559406,
    lng: -81.8069843,
    dir: "https://www.google.com/maps/dir//Shots+%26+Giggles,+201+Ann+St,+Key+West,+FL+33040/@24.559406,-81.8069843,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b6eb0aa1c13b:0x197337e50fa6b93c!2m2!1d-81.8044208!2d24.5593934,"
  },
  {
    name: "Tattoos and Scars Saloon",
    address: {
      street: "512 Green St",
      city: "Key West",
      state: "FL",
      zip: "33040"
    },
    lat: 24.5595539,
    lng: -81.8069579,
    dir: "https://www.google.com/maps/dir//Tattoos+and+Scars+Saloon,+512+Greene+St,+Key+West,+FL+33040/@24.5595539,-81.8069579,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b6eba751bcb9:0x5beb064248b08b78!2m2!1d-81.804383!2d24.559549,"
  },
  {
    name: "Willie T's",
    address: {
      street: "525 Duval St",
      city: "Key West",
      state: "FL",
      zip: "33040"
    },
    lat: 24.5553446,
    lng: -81.8047647,
    dir: "https://www.google.com/maps/dir//Willie+T's,+525+Duval+St,+Key+West,+FL+33040/@24.5553446,-81.8047647,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b6e993973af9:0x363c33d40aabbe3a!2m2!1d-81.8022064!2d24.55534,"
  },
  {
    name: "Smokin' Tuna Saloon",
    address: {
      street: '4 Charles Street Duval St 200 Block',
      city: 'Key West',
      state: 'FL',
      zip: '33040'
    },
    lat: 24.5584144,
    lng: -81.8077786,
    dir: 'https://www.google.com/maps/dir//Smokin%27+Tuna+Saloon,+4+Charles+Street,+Duval+St+200+Block,+Key+West,+FL+33040/@24.5584144,-81.8077786,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b6eb8dced833:0x73f4f3eb7d91f88a!2m2!1d-81.8052494!2d24.5584636'
  },
  {
    name: "Tipsy Rooster Liquor Store & Bar",
    address: {
      street: '1325 Simonton St',
      city: 'Key West',
      state: 'FL',
      zip: '33040'
    },
    lat: 24.5483949,
    lng: -81.7977159,
    dir: 'https://www.google.com/maps/dir//Tipsy+Rooster+Liquor+Store+%26+Bar,+1325+Simonton+St,+Key+West,+FL+33040/@24.5483949,-81.7977159,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b6db6094626d:0xc5ac38831f41e665!2m2!1d-81.795141!2d24.54839'
  },
  {
    name: "The Saint Hotel Key West, Autograph Collection",
    address: {
      street: '417 Eaton St',
      city: 'Key West',
      state: 'FL',
      zip: '33040'
    },
    lat: 24.5567975,
    lng: -81.8068032,
    dir: 'https://www.google.com/maps/dir//The+Saint+Hotel+Key+West,+Autograph+Collection,+417+Eaton+St,+Key+West,+FL+33040/@24.5567975,-81.8068032,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b6ebd8ea6265:0xfdd47a8e69aa97be!2m2!1d-81.8042283!2d24.5567926'
  },
  {
    name: "Smallest Bar",
    address: {
      street: '124 Duval St',
      city: 'Key West',
      state: 'FL',
      zip: '33040'
    },
    lat: 24.5593483,
    lng: -81.8082417,
    dir: 'https://www.google.com/maps/dir//Smallest+Bar,+124+Duval+St,+Key+West,+FL+33040/@24.5593483,-81.8082417,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d1b6eb83d3048f:0x8d3b31724dd9d721!2m2!1d-81.8055958!2d24.559415'
  },
  {
    name: "Total Wine & More",
    address: {
      street: '5050 Town Center Circle',
      city: 'Boca Raton',
      state: 'FL',
      zip: '33486'
    },
    lat: 26.3636397,
    lng: -80.1636089,
    dir: 'https://www.google.com/maps/dir/Total+Wine+%26+More,+5050+Town+Center+Cir,+Boca+Raton,+FL+33486/@26.3636397,-80.1636089,13z/data=!4m9!4m8!1m5!1m1!1s0x88d91e75aeda2751:0xf297b697c10bd1cf!2m2!1d-80.1224091!2d26.3635687!1m0!3e0'
  },
  {
    name: "Legacy Liquors & Wine Longwood",
    address: {
      street: '868 S US Hwy 17 92',
      city: 'Longwood',
      state: 'FL',
      zip: '32750'
    },
    lat: 28.692842,
    lng: -81.330852,
    dir: 'https://www.google.com/maps/dir//Legacy+Liquors+%26+Wine+Longwood,+868+S+US+Hwy+17+92,+Longwood,+FL+32750/@28.692842,-81.330852,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e76d46c608e2a5:0x556deffacf979610!2m2!1d-81.3282771!2d28.6928373'
  },
  {
    name: "Total Wine & More",
    address: {
      street: '25535 Sierra Center Blvd',
      city: 'Lutz',
      state: 'FL',
      zip: '33559'
    },
    lat: 28.1955507,
    lng: -82.3981145,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+25535+Sierra+Center+Blvd,+Lutz,+FL+33559/@28.1955507,-82.3981145,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88c2bbf588c12fdb:0x725bb347e01065ff!2m2!1d-82.3955396!2d28.195546'
  },
  {
    name: "Total Wine & More",
    address: {
      street: '2302 Harnett Dr',
      city: 'Melbourne',
      state: 'FL',
      zip: '32940'
    },
    lat: 28.2386446,
    lng: -80.7303366,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+2302+Harnett+Dr,+Melbourne,+FL+32940/@28.2386446,-80.7303366,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88de07eaaaaaaaab:0xe0bb208be57b3d0a!2m2!1d-80.7277617!2d28.2386399'
  },
  {
    name: "Total Wine & More",
    address: {
      street: '8851 SW 136th St',
      city: 'Miami',
      state: 'FL',
      zip: '33716'
    },
    lat: 25.6468788,
    lng: -80.3393979,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+8851+SW+136th+St,+Miami,+FL+33176/@25.6468788,-80.3393979,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d9c69234d1a5b9:0x4615710d361f56ea!2m2!1d-80.3368203!2d25.6468264'
  },
  {
    name: "Total Wine & More",
    address: {
      street: '1139 5th St',
      city: 'Miami Beach',
      state: 'FL',
      zip: '33139'
    },
    lat: 25.6905419,
    lng: -80.4684207,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+1139+5th+St,+Miami+Beach,+FL+33139/@25.6905419,-80.4684207,12z/data=!3m1!5s0x88d9b4f4e2ff2ce7:0xfe6faaec94af825b!4m9!4m8!1m0!1m5!1m1!1s0x88d9b4f5192fd8e7:0xa671c33e9a76c61!2m2!1d-80.140076!2d25.7751341!3e0'
  },
  {
    name: "Total Wine & More",
    address: {
      street: "11960 Mills Dr",
      city: "Miami",
      state: "FL",
      zip: "33183"
    },
    lat: 25.8015087,
    lng: -80.4367487,
    dir: "https://www.google.com/maps/dir//Total+Wine+%26+More,+11960+Mills+Dr,+Miami,+FL+33183/@25.8015087,-80.4367487,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88d9c0dd1860b981:0xe4314733096ef0eb!2m2!1d-80.3860198!2d25.6904007!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "14750 Biscayne Blvd",
      city: "North Miami",
      state: "FL",
      zip: "33181"
    },
    lat: 25.912189,
    lng: -80.1604352,
    dir: "https://www.google.com/maps/dir//Total+Wine+%26+More,+14750+Biscayne+Blvd,+North+Miami,+FL+33181/@25.912189,-80.1604352,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88d9ad912e90c0f7:0x3acc1f1c23e3aa32!2m2!1d-80.1578603!2d25.9121842!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "1635 NW 107th Ave",
      city: "Doral",
      state: "FL",
      zip: "33172"
    },
    lat: 25.789065,
    lng: -80.3702287,
    dir: "https://www.google.com/maps/dir//Total+Wine+%26+More,+1635+NW+107th+Ave,+Doral,+FL+33172/@25.789065,-80.3702287,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88d9bf1576f7e319:0xc681d611a6eee1f8!2m2!1d-80.3676538!2d25.7890602!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "19925 Biscayne Blvd",
      city: "Miami",
      state: "FL",
      zip: "33180"
    },
    lat: 25.9611849,
    lng: -80.1483857,
    dir: "https://www.google.com/maps/dir//Total+Wine+%26+More,+19925+Biscayne+Blvd,+Aventura,+FL+33180/@25.9611849,-80.1483857,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88d9ad1135e0b4cb:0x1e88ca70df863213!2m2!1d-80.1458108!2d25.9611801!3e0"
  },
  {
    name: "Jensen's Liquors #1",
    address: {
      street: "1646 SW 27th Ave",
      city: "Miami",
      state: "FL",
      zip: "33145"
    },
    lat: 25.7570927,
    lng: -80.2413771,
    dir: "https://www.google.com/maps/dir//Jensen's+Liquors+%231,+1646+SW+27th+Ave,+Miami,+FL+33145/@25.7570927,-80.2413771,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88d9b7a9761ba629:0xc0c741ded0230f2a!2m2!1d-80.2388022!2d25.7570879!3e0"
  },
  {
    name: "Jensen's Liquors #2",
    address: {
      street: "1516 NW 27th Ave",
      city: "Miami",
      state: "FL",
      zip: "33125"
    },
    lat: 25.7883102,
    lng: -80.2424822,
    dir: "https://www.google.com/maps/dir//Jensen's+Liquors+%232,+1516+NW+27th+Ave,+Miami,+FL+33125/@25.7883102,-80.2424822,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88d9b7239903296b:0x560b02983b56d73f!2m2!1d-80.2398038!2d25.7883075!3e0"
  },
  {
    name: "Jensen's Liquors #4",
    address: {
      street: "2159 NW 7th St",
      city: "Miami",
      state: "FL",
      zip: "33125"
    },
    lat: 25.7799781,
    lng: -80.2334649,
    dir: "https://www.google.com/maps/dir//Miami+Liquors+-+Jensen's+Liquors+%234,+2159+NW+7th+St,+Miami,+FL+33125/@25.7799781,-80.2334649,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88d9b6e1caf3ed69:0x35891a57b40907f7!2m2!1d-80.2308918!2d25.7799382!3e0"
  },
  {
    name: "Jensen's Liquors #6",
    address: {
      street: "1449 NW 17th Ave",
      city: "Miami",
      state: "FL",
      zip: "33125"
    },
    lat: 25.792336,
    lng: -80.2365215,
    dir: "https://www.google.com/maps/dir//Jensen's+Liquors,+1449+NW+17th+Ave,+Miami,+FL+33125/@25.792336,-80.2365215,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88d9b77e875ed0c9:0x7d79858819b9b324!2m2!1d-80.2229133!2d25.7879465!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "5048 Airport-Pulling Rd",
      city: "Naples",
      state: "FL",
      zip: "34105"
    },
    lat: 26.2174046,
    lng: -81.7726649,
    dir: "https://www.google.com/maps/dir//Total+Wine+%26+More,+Promenade+at+Naples+Centre,+6424+Naples+Blvd+Suite+601,+Naples,+FL+34109/@26.2174046,-81.7726649,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88db1de7f8858c5f:0x6bdaed8be79b677f!2m2!1d-81.77009!2d26.2173998!3e0"
  },
  {
    name: "Bone Hook Brewing Company",
    address: {
      street: "1514 Immokalee Rd, Unit 106",
      city: "Naples",
      state: "FL",
      zip: "34110"
    },
    lat: 26.2717622,
    lng: -81.7917179,
    dir: "https://www.google.com/maps/dir//Bone+Hook+Brewing+Company,+1514+Immokalee+Rd+Unit+106,+Naples,+FL+34110/@26.2717622,-81.7917179,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88dba631c9ce1035:0x53d30bda94f64e7c!2m2!1d-81.789143!2d26.2717574!3e0"
  },
  {
    name: "Brooks Burgers",
    address: {
      street: "330 9th St S",
      city: "Naples",
      state: "FL",
      zip: "34102"
    },
    lat: 26.2708175,
    lng: -81.8019121,
    dir: "https://www.google.com/maps/dir//Brooks+Burgers,+330+9th+St+S,+Naples,+FL+34102/@26.2708175,-81.8019121,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88dae19ea8e4194d:0xe4d3c577930c6e56!2m2!1d-81.7953227!2d26.1435943!3e0"
  },
  {
    name: "Brooks Grill and Tavern",
    address: {
      street: "2220 Logan Blvd N Suite 805",
      city: "Naples",
      state: "FL",
      zip: "34119"
    },
    lat: 26.2706823,
    lng: -81.7220861,
    dir: "https://www.google.com/maps/dir//Brooks+Grill+%26+Tavern,+2220+Logan+Blvd+N+Suite+805,+Naples,+FL+34119/@26.2706823,-81.7220861,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88db1b3dc3c23e1b:0x67b30996bd88ee78!2m2!1d-81.7195212!2d26.2707171!3e0"
  },
  {
    name: "The Turtle Club",
    address: {
      street: "9225 Gulf Shore Dr",
      city: "Naples",
      state: "FL",
      zip: "34108"
    },
    lat: 26.2550536,
    lng: -81.8258498,
    dir: "https://www.google.com/maps/dir//The+Turtle+Club,+9225+Gulf+Shore+Dr,+Naples,+FL+34108/@26.2550536,-81.8258498,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88db1f1fda462bd5:0x77d9f3166dbd1595!2m2!1d-81.8231263!2d26.255068!3e0"
  },
  {
    name: "The Boathouse on Naples Bay",
    address: {
      street: "990 Broad Ave S",
      city: "Naples",
      state: "FL",
      zip: "34102"
    },
    lat: 26.1338182,
    lng: -81.7948991,
    dir: "https://www.google.com/maps/dir//The+Boathouse+on+Naples+Bay,+990+Broad+Ave+S,+Naples,+FL+34102/@26.1338182,-81.7948991,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88dae176b8b99495:0x9ca88f5fedb68025!2m2!1d-81.7923242!2d26.1338134!3e0"
  },
  {
    name: "The Real Macaw",
    address: {
      street: "3275 Bayshore Dr",
      city: "Naples",
      state: "FL",
      zip: "34112"
    },
    lat: 26.1232167,
    lng: -81.7727779,
    dir: "https://www.google.com/maps/dir//The+Real+Macaw+Restaurant,+3275+Bayshore+Dr,+Naples,+FL+34112/@26.1232167,-81.7727779,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88dae3daf0d550ef:0xe52a082da3afb784!2m2!1d-81.7702397!2d26.1232115!3e0"
  },
  {
    name: "Sea Monkey Tavern & Grill",
    address: {
      street: "1100 6th Ave S",
      city: "Naples",
      state: "FL",
      zip: "34102"
    },
    lat: 26.1406466,
    lng: -81.7945623,
    dir: "https://www.google.com/maps/dir//Sea+Monkey+Tavern+%26+Grill,+1100+6th+Ave+S,+Naples,+FL+34102/@26.1406466,-81.7945623,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88dae1e3c151932f:0xd82b8035a97471e9!2m2!1d-81.7919874!2d26.1406418!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "4625 Millenia Plaza Way",
      city: "Orlando",
      state: "FL",
      zip: "32839"
    },
    lat: 28.5526705,
    lng: -81.3896099,
    dir: "https://www.google.com/maps/dir//Total+Wine+%26+More,+4625+Millenia+Plaza+Way,+Orlando,+FL+32839/@28.5526705,-81.3896099,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77eaa9907d6a1:0x44e997fb4a8e6d2f!2m2!1d-81.4275057!2d28.4964946!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "2712 East Colonial Dr",
      city: "Orlando",
      state: "FL",
      zip: "32803"
    },
    lat: 28.5526397,
    lng: -81.3492814,
    dir: "https://www.google.com/maps/dir//Total+Wine+%26+More,+2712+E+Colonial+Dr,+Orlando,+FL+32803/@28.5526397,-81.3492814,18.75z/data=!3m1!5s0x88e77acf1c69371f:0x7edf0a3a744464b5!4m9!4m8!1m0!1m5!1m1!1s0x88e77acf941ae141:0x3c77b05ad4455c2b!2m2!1d-81.3484103!2d28.552592!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "160 East Altamonte Dr",
      city: "Altamonte Springs",
      state: "FL",
      zip: "32701"
    },
    lat: 28.6612344,
    lng: -81.3854545,
    dir: "https://www.google.com/maps/dir//Total+Wine+%26+More,+160+E+Altamonte+Dr,+Altamonte+Springs,+FL+32701/@28.6612344,-81.3854545,18.75z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e771760f2c578b:0xd3b7c2fbda36f8ec!2m2!1d-81.3849981!2d28.6613112!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "11221 Legacy Ave",
      city: "Palm Beach Gardens",
      state: "FL",
      zip: "33410"
    },
    lat: 26.84614576361307,
    lng: -80.09431748456203,
    dir: "https://www.google.com/maps/dir//Total+Wine+%26+More,+11221+Legacy+Ave,+Palm+Beach+Gardens,+FL+33410/@28.6399961,-86.2906066,7z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88df2aa68597c045:0x241e8db525bab42a!2m2!1d-80.0931761!2d26.840429!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "1660 Airport Blvd, Unit 145",
      city: "Pensacola",
      state: "FL",
      zip: "32504"
    },
    lat: 30.4805528,
    lng: -87.2077821,
    dir: "https://www.google.com/maps/dir//Cordova+Commons,+1660+Airport+Blvd+Unit+145,+Pensacola,+FL+32504/@30.4805528,-87.2077821,19.75z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8890c016ab560813:0x9f0d8a65cbf0eccf!2m2!1d-87.20706!2d30.4812157!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "19400 Cochran Blvd, Ste 160",
      city: "Port Charlotte",
      state: "FL",
      zip: "33948"
    },
    lat: 27.0093616,
    lng: -82.1354103,
    dir: "https://www.google.com/maps/dir//Total+Wine+%26+More,+19400+Cochran+Blvd,+Port+Charlotte,+FL+33948/@27.0093616,-82.1354103,18.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88dcab9f45c91cbf:0x19260dfb1fa545d8!2m2!1d-82.1346015!2d27.0103209!3e0"
  },
  {
    name: "The Lake House Kitchen & Bar at Babcock Ranch",
    address: {
      street: "42860 Crescent Loop",
      city: "Punta Gorda",
      state: "FL",
      zip: "33982"
    },
    lat: 26.8272587,
    lng: -81.8595914,
    dir: "https://www.google.com/maps/dir//The+Lake+House+Kitchen+%26+Bar+at+Babcock+Ranch,+42860+Crescent+Loop,+Punta+Gorda,+FL+33982/@26.8272587,-81.8595914,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88dc75dcac75c9c1:0x2e682bd52c46875e!2m2!1d-81.8573567!2d26.8272485!3e0"
  },
  {
    name: 'Grog Shop',
    address: {
      street: '2485 Periwinkle Way',
      city: 'Sanibel',
      state: 'FL',
      zip: '33957'
    },
    lat: 26.4348921,
    lng: -82.0799773,
    dir: 'https://www.google.com/maps/dir//Grog+Shop,+2435+Periwinkle+Way,+Sanibel,+FL+33957/@26.4348921,-82.0799773,19.42z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88db3055f772a467:0x5e620dd5236864d3!2m2!1d-82.0789039!2d26.4354426!3e0'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '8280 S Tamiami Trail',
      city: 'Sarasota',
      state: 'FL',
      zip: '34238'
    },
    lat: 27.230599,
    lng: -82.4968743,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+8280+S+Tamiami+Trail,+Sarasota,+FL+34238/@27.230599,-82.4968743,20.25z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88c343eab02119e5:0x7d9d3cd41ada22eb!2m2!1d-82.4969076!2d27.2306667!3e0'
  },
  {
    name: 'Total Wine & More',
    address: {
      street: '4880 Park St N',
      city: 'St. Petersburg',
      state: 'FL',
      zip: '33709'
    },
    lat: 27.8167847,
    lng: -82.7563195,
    dir: 'https://www.google.com/maps/dir//Total+Wine+%26+More,+4880+Park+St+N,+St.+Petersburg,+FL+33709/@27.8167847,-82.7563195,20.75z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88c2fcbd5c4a8037:0x598b4db4202d2ce!2m2!1d-82.7559525!2d27.8166591!3e0'
  },
  {
    name: "Ferg's Sportsbar",
    address: {
      street: "1320 Central Ave",
      city: "St. Petersburg",
      state: "FL",
      zip: "33705"
    },
    lat: 27.770689,
    lng: -82.6523869,
    dir: "https://www.google.com/maps/dir//Ferg's+Sports+Bar+%26+Grill,+1320+Central+Ave,+St.+Petersburg,+FL+33705/@27.770689,-82.6523869,20.75z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88c2e22bde8fd927:0xd74f00354d8d90ac!2m2!1d-82.6523367!2d27.7708531!3e0"
  },
  {
    name: "Mangosteen",
    address: {
      street: "656 Central Ave",
      city: "St Petersburg",
      state: "FL",
      zip: "33701"
    },
    lat: 27.7709774,
    lng: -82.6431275,
    dir: "https://www.google.com/maps/dir//656+Central+Ave,+St.+Petersburg,+FL+33701/@27.7709774,-82.6431275,20z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88c2e183fcb560d1:0x3142fbb8f5f31652!2m2!1d-82.6426681!2d27.7708732!3e0"
  },
  {
    name: "Pappy's Liquor",
    address: {
      street: "6406 Gulf Blvd",
      city: "St. Petersburg",
      state: "FL",
      zip: "33706"
    },
    lat: 27.7353299,
    lng: -82.7473955,
    dir: "https://www.google.com/maps/dir//Pappys+Liquors+,Wine+,+Beer+And+More,+6406+Gulf+Blvd,+St+Pete+Beach,+FL+33706/@27.7353299,-82.7473955,20.75z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88c2fd5873982f0d:0xdb512bdef00e1bbf!2m2!1d-82.747181!2d27.7353477!3e0"
  },
  {
    name: "Pasadena Liquors & Fine Wines",
    address: {
      street: "1100 Pasadena Ave S",
      city: "South Pasadena",
      state: "FL",
      zip: "33707"
    },
    lat: 27.7587581,
    lng: -82.7356477,
    dir: "https://www.google.com/maps/dir//Pasadena+Liquors+%26+Fine+Wines,+Pasadena+Avenue+South,+South+Pasadena,+FL/@27.7587581,-82.7356477,19.75z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88c2fd35472ad9dd:0x81324221a13342d0!2m2!1d-82.7357856!2d27.7587972!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "2550 NW Federal Hwy",
      city: "Stuart",
      state: "FL",
      zip: "34994"
    },
    lat: 27.2358462,
    lng: -80.2730805,
    dir: "https://www.google.com/maps/dir//2550+NW+Federal+Hwy,+Stuart,+FL+34994/@27.2358462,-80.2730805,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88dee7ddc4cb1bc3:0xf8353526d3fab045!2m2!1d-80.2705056!2d27.2358415!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "1400-31 Village Square Blvd",
      city: "Tallahassee",
      state: "FL",
      zip: "32312"
    },
    lat: 30.5121152,
    lng: -84.2504574,
    dir: "https://www.google.com/maps/dir//1400+Village+Square+Blvd+%2331,+Tallahassee,+FL+32312/@30.5121152,-84.2504574,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88ec58c09500aff9:0x75ebb10cd072874b!2m2!1d-84.2478825!2d30.5121106!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "1720 N Dale Mabry Hwy",
      city: "Tampa",
      state: "FL",
      zip: "33607"
    },
    lat: 27.9582801,
    lng: -82.5068994,
    dir: "https://www.google.com/maps/dir//Total+Wine+%26+More,+1720+N+Dale+Mabry+Hwy,+Tampa,+FL+33607/@27.9582801,-82.5068994,19z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88c2c3a64ae6c54b:0x62dd5fdabc94fbd9!2m2!1d-82.506311!2d27.9581941!3e0"
  },
  {
    name: "Total Wine & More",
    address: {
      street: "960 S State Rd 7",
      city: "Village of Wellington",
      state: "FL",
      zip: "33414"
    },
    lat: 26.6641649,
    lng: -80.2010732,
    dir: "https://www.google.com/maps/dir//Total+Wine+%26+More,+960+S+State+Rd+7,+Wellington,+FL+33414/@26.6641649,-80.2010732,19.75z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88d92f389639e59b:0x63e63781c09db77b!2m2!1d-80.20104!2d26.6641334!3e0"
  },
  {
    name: "Stage Kitchen & Bar",
    address: {
      street: "2000 PGA Boulevard Ste 5502",
      city: "Palm Beach Gardens",
      state: "FL",
      zip: "3348"
    },
    lat: 26.8438159,
    lng: -80.0660805,
    dir: "https://www.google.com/maps/dir//Stage+Kitchen+%26+Bar,+2000+PGA+Boulevard+Suite+5502,+Palm+Beach+Gardens,+FL+33408/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88d91bf126f0dc25:0x22dd5f7a6627e9b8?sa=X&ved=2ahUKEwjskPqvk_7vAhUPac0KHSyAAzYQ9RcwE3oECAUQCQ"
  },
]

const mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#ffeb3b"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#3ccbda"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

let map;
let markers = [];
let infoWindows = [];

const zoom = 6;
const center = { lat: 28.3728687, lng: -81.49961773034279 };

function createLocationsList() {
  const container = document.getElementById('nauti-locations-list');
  let prevInfoWindow = false;

  locations.forEach((location, index) => {
    const locationItem = document.createElement('div');
    locationItem.classList.add('nauti__location-item');
    
    const locationTitle = document.createElement('h3');
    locationTitle.classList.add('nauti__location-title');
    locationTitle.innerText = location.name;

    const locationAddress = document.createElement('p');
    locationAddress.classList.add('nauti__location-address');
    locationAddress.innerHTML = `${location.address.street}<br>${location.address.city}, ${location.address.state} ${location.address.zip}`;

    const locationDirections = document.createElement('a');
    locationDirections.classList.add('nauti__location-directions');
    locationDirections.innerText = 'Get Directions';
    locationDirections.href = location.dir;
    locationDirections.target = '_blank';

    locationItem.appendChild(locationTitle);
    locationItem.appendChild(locationAddress);
    locationItem.appendChild(locationDirections);

    container.appendChild(locationItem);

    locationItem.addEventListener('click', () => {
      map.setZoom(zoom)
      if (prevInfoWindow) {
        prevInfoWindow.close();
      }

      prevInfoWindow = infoWindows[index];
      
      setTimeout(() => {
        map.panTo({ lat: location.lat, lng: location.lng });
        map.setZoom(10);
        infoWindows[index].open(map, markers[index]);
      }, 1000);
    })
  })
}

async function initNautiMap() {
  const container = document.getElementById('nauti-map');
  const mapId = '49aac10364cfc29c';

  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  map = new Map(container, {
    center,
    zoom,
    mapId,
  });

  let prevInfoWindow = false;

  locations.forEach((location, index) => {
    const pinIcon = document.createElement('img');
    const pinIconUrl = 'https://images.squarespace-cdn.com/content/v1/61c9f775744ede357d65ddbd/b3aa1969-cea6-414f-a75f-33123cbe4e9c/NautiBeach_M38182-Custom-Map-Assets-v3-01.png';

    pinIcon.src = pinIconUrl;
    pinIcon.classList.add('nauti__pin-icon');

    const marker = new AdvancedMarkerElement({
      position: { lat: location.lat, lng: location.lng },
      map,
      title: location.name,
      content: pinIcon,
    });

    markers.push(marker);

    let infoWindow = createInfoWindow(location);
    infoWindows.push(infoWindow);
    
    marker.addListener('gmp-click', () => {

      if (prevInfoWindow) {
        prevInfoWindow.close();
      }

      prevInfoWindow = infoWindow;
      infoWindow.open(map, marker);
    });
  })
}

function createInfoWindow(location) {
  const container = document.createElement('div');
  container.classList.add('nauti__info-window');

  const logo = document.createElement('img');
  logo.classList.add('nauti__info-window-logo');
  logo.src = 'https://images.squarespace-cdn.com/content/v1/61c9f775744ede357d65ddbd/26e030a7-53dd-4e94-b8ad-d488600792b7/Nauti_Wordmark_Red.png?format=1500w';

  const title = document.createElement('h3');
  title.classList.add('nauti__info-window-title');
  title.innerText = location.name;

  const content = document.createElement('div');
  content.classList.add('nauti__info-window-content');

  const address = document.createElement('p');
  address.classList.add('nauti__info-window-address');
  address.innerHTML = `${location.address.street}<br>${location.address.city}, ${location.address.state} ${location.address.zip}`;

  const directions = document.createElement('a');
  directions.classList.add('nauti__info-window-directions');
  directions.classList.add('nauti__info-window-button');
  directions.href = location.dir;
  directions.target = '_blank';
  directions.innerText = 'Get Directions'

  container.appendChild(logo);
  container.appendChild(title);
  container.appendChild(content);
  content.appendChild(address);
  container.appendChild(directions);

  const infoWindow = new google.maps.InfoWindow({
    content: container,
    ariaLabel: location.name,
  });

  return infoWindow;
}

createLocationsList();
initNautiMap();

