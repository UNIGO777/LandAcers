const FaHome = require('react-icons/fa').FaHome;
const FaTree = require('react-icons/fa').FaTree;
const FaMapMarkerAlt = require('react-icons/fa').FaMapMarkerAlt;

const PropertiesData = [
  {
    _id: '1',
    title: 'Luxurious Farmhouse with Mountain View',
    description: 'A beautiful farmhouse surrounded by nature, perfect for a peaceful getaway.',
    location: {
      state: 'California',
      district: 'Napa County',
      city: 'Napa',
      locality: 'Silverado Trail',
      pincode: '94558',
    },
    type: 'farmhouse',
    status: 'available',
    owner: 'user123',
    views: 1250,
    queries: ['query1', 'query2'],
    isUpcoming: false,
    thumbnailImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    ],
    price: 2500000,
  },
  {
    _id: '2',
    title: 'Scenic Land Plot with River Access',
    description: 'A large plot of land with beautiful views and private river access.',
    location: {
      state: 'Colorado',
      district: 'Summit County',
      city: 'Breckenridge',
      locality: 'Blue River',
      pincode: '80424',
    },
    type: 'land',
    status: 'available',
    owner: 'user456',
    views: 890,
    queries: ['query3'],
    isUpcoming: false,
    thumbnailImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    images: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1449452198679-05c7fd30f416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    ],
    price: 1200000,
  },
  {
    _id: '3',
    title: 'Prime Development Plot in Growing Neighborhood',
    description: 'A strategically located plot perfect for residential or commercial development.',
    location: {
      state: 'Texas',
      district: 'Travis County',
      city: 'Austin',
      locality: 'East Austin',
      pincode: '78702',
    },
    type: 'plot',
    status: 'upcoming',
    owner: 'user789',
    views: 1560,
    queries: [],
    isUpcoming: true,
    upcomingDetails: {
      expectedLaunchDate: '2023-09-01',
      developerName: 'Austin Developments Inc.',
      priceRange: {
        min: 750000,
        max: 1000000,
      },
      highlights: ['Prime location', 'Excellent investment opportunity', 'Flexible zoning'],
    },
    thumbnailImage: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
      'https://images.unsplash.com/photo-1542889601-399c4f3a8402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    ],
    price: 800000,
  },
  {
    _id: '4',
    title: 'Charming Farmhouse with Organic Orchard',
    description: 'A picturesque farmhouse featuring an established organic orchard and modern amenities.',
    location: {
      state: 'Oregon',
      district: 'Hood River County',
      city: 'Hood River',
      locality: 'Pine Grove',
      pincode: '97031',
    },
    type: 'farmhouse',
    status: 'pending',
    owner: 'user101',
    views: 2100,
    queries: ['query4', 'query5', 'query6'],
    isUpcoming: false,
    thumbnailImage: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    images: [
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1595275320712-2df6c511c539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    ],
    price: 1800000,
  },
  {
    _id: '5',
    title: 'Expansive Land with Mountain Views',
    description: 'A vast stretch of untouched land offering breathtaking mountain views and development potential.',
    location: {
      state: 'Montana',
      district: 'Gallatin County',
      city: 'Bozeman',
      locality: 'Bridger Canyon',
      pincode: '59715',
    },
    type: 'land',
    status: 'available',
    owner: 'user202',
    views: 1750,
    queries: ['query7'],
    isUpcoming: false,
    thumbnailImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    images: [
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=1474&q=80',
    ],
    price: 3500000,
  },
];

const getTypeIcon = (type) => {
  switch (type) {
    case 'land':
      return FaTree;
    case 'farmhouse':
      return FaHome;
    case 'plot':
      return FaMapMarkerAlt;
    default:
      return FaHome;
  }
};

export {getTypeIcon, PropertiesData}
