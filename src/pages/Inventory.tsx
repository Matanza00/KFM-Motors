
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useMemo, useState } from 'react';
import { Fuel, Users, Settings, Star } from 'lucide-react';

const Inventory = () => {
  const vehicles = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2023,
      price: 28500,
      monthlyPayment: 425,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb',
      mileage: 12000,
      fuelType: 'Hybrid',
      transmission: 'Automatic',
      features: ['Navigation', 'Heated Seats', 'Backup Camera'],
      status: 'Available',
      type: 'sedan'
    },
    {
      id: 2,
      make: 'Honda',
      model: 'CR-V',
      year: 2022,
      price: 32000,
      monthlyPayment: 485,
      image: 'https://honda.com.pk/images/2017/09/crv-720x420.jpg',
      mileage: 18500,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      features: ['AWD', 'Sunroof', 'Apple CarPlay'],
      status: 'Available',
      type: 'suv'
    },
    {
      id: 3,
      make: 'BMW',
      model: '3 Series',
      year: 2023,
      price: 45000,
      monthlyPayment: 650,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      mileage: 8000,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      features: ['Leather', 'Premium Audio', 'Sport Package'],
      status: 'Available',
      type: 'luxury'
    },
    {
      id: 4,
      make: 'Ford',
      model: 'F-150',
      year: 2022,
      price: 38500,
      monthlyPayment: 575,
      image: 'https://media.ed.edmunds-media.com/ford/f-150/2025/oem/2025_ford_f-150_crew-cab-pickup_lariat_fq_oem_1_1600.jpg',
      mileage: 22000,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      features: ['4WD', 'Towing Package', 'Crew Cab'],
      status: 'Pending',
      type: 'truck'
    },
    {
      id: 5,
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: 52000,
      monthlyPayment: 720,
      image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771',
      mileage: 5000,
      fuelType: 'Electric',
      transmission: 'Automatic',
      features: ['Autopilot', 'Supercharging', 'Premium Interior'],
      status: 'Available',
      type: 'electric'
    },
    {
      id: 6,
      make: 'Subaru',
      model: 'Outback',
      year: 2022,
      price: 29500,
      monthlyPayment: 440,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6',
      mileage: 15000,
      fuelType: 'Gasoline',
      transmission: 'CVT',
      features: ['AWD', 'EyeSight Safety', 'Roof Rails'],
      status: 'Available',
      type: 'wagon'
    },
    {
    id: 7,
    make: 'Jeep',
    model: 'Wrangler',
    year: 2023,
    price: 34500,
    monthlyPayment: 530,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiMi4KF2FDDjSz2PCVCuMhzocb2hbc_Yl_g&s',
    mileage: 8000,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    features: ['4x4', 'Removable Doors', 'Bluetooth'],
    status: 'Available',
    type: 'off-road'
  },
  {
    id: 8,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2023,
    price: 48000,
    monthlyPayment: 695,
    image: 'https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/mercedes-benz-c-class-2.jpg',
    mileage: 6000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    features: ['Leather Seats', 'Panoramic Sunroof', 'Burmeister Audio'],
    status: 'Available',
    type: 'luxury'
  },
  {
    id: 9,
    make: 'Chevrolet',
    model: 'Bolt EV',
    year: 2022,
    price: 29000,
    monthlyPayment: 445,
    image: 'https://imageio.forbes.com/specials-images/imageserve/644a7f7107ad88c0b255c171/Chevrolet-Bolt-EV-electric-car/960x0.jpg?format=jpg&width=960',
    mileage: 12000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    features: ['Long-Range Battery', 'Regenerative Braking', 'Wi-Fi Hotspot'],
    status: 'Available',
    type: 'electric'
  },
  {
    id: 10,
    make: 'Volvo',
    model: 'XC90',
    year: 2023,
    price: 55000,
    monthlyPayment: 800,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/2018_Volvo_XC90_2.0.jpg',
    mileage: 7000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    features: ['Pilot Assist', 'Heated Steering Wheel', 'Third-Row Seating'],
    status: 'Available',
    type: 'suv'
  },
  // Newly added vehicles
  {
    id: 11,
    make: 'Porsche',
    model: '911 Carrera',
    year: 2023,
    price: 120000,
    monthlyPayment: 1800,
    image: 'https://img.autocarindia.com/ExtraImages/20250109033754_Porsche_911_Carrera_S_2025_front.jpg',
    mileage: 3000,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    features: ['Sport Chrono Package', 'Leather Interior', 'Turbocharged'],
    status: 'Available',
    type: 'sports'
  },
  {
    id: 12,
    make: 'Toyota',
    model: 'Sienna',
    year: 2022,
    price: 35000,
    monthlyPayment: 600,
    image: 'https://images.cars.com/cldstatic/wp-content/uploads/toyota-sienna-xse-2024-01-exterior-front-angle-scaled.jpg',
    mileage: 20000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    features: ['7-Passenger Seating', 'Rear Entertainment', 'Blind-Spot Monitor'],
    status: 'Available',
    type: 'minivan'
  },
  {
    id: 13,
    make: 'Volkswagen',
    model: 'Golf GTI',
    year: 2021,
    price: 23000,
    monthlyPayment: 360,
    image: 'https://images.carexpert.com.au/resize/3000/-/app/uploads/owner-reviews/2022/10/volkswagen-golf-ryjpyhv2r6-1.jpg',
    mileage: 25000,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    features: ['GTI Sport Package', 'Heated Seats', 'Bluetooth'],
    status: 'Available',
    type: 'hatchback'
  },
  {
    id: 14,
    make: 'Nissan',
    model: 'Leaf',
    year: 2023,
    price: 29000,
    monthlyPayment: 440,
    image: 'https://soyacincau.com/wp-content/uploads/2023/03/230306-nissan-leaf-2023-malaysia-10-1024x596.jpg',
    mileage: 10000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    features: ['e-Pedal', 'Integrated Navigation', 'Rearview Camera'],
    status: 'Available',
    type: 'electric'
  },
  {
    id: 15,
    make: 'Mercedes-Benz',
    model: 'Sprinter Van',
    year: 2022,
    price: 42000,
    monthlyPayment: 700,
    image: 'https://assets.newatlas.com/dims4/default/0bb1bee/2147483647/strip/true/crop/6000x4000+0+0/resize/2880x1920!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fb0%2Fe1%2F27aa0a2c4e6dbc64154e2570cd46%2F2022-mercedes-benz-sprinter-2500-1.JPG',
    mileage: 30000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    features: ['Cargo Van', 'High Roof', 'Cruise Control'],
    status: 'Available',
    type: 'van'
  },
  {
    id: 16,
    make: 'Ford',
    model: 'Mustang GT',
    year: 2023,
    price: 55000,
    monthlyPayment: 830,
    image: 'https://images.dealersync.com/2255/Photos/1208332/wm_9686196d49924967bbd950832835c87d_1208332.jpg?_=0476b8f95bb2639388f6a00c7a4464f3bea83ac4',
    mileage: 5000,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    features: ['Convertible', 'GT Performance Package', 'Brembo Brakes'],
    status: 'Pending',
    type: 'coupe'
  },
  {
      id: 17,
      make: 'Subaru',
      model: 'Outback',
      year: 2023,
      price: 38500,
      monthlyPayment: 540,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6',
      mileage: 12000,
      fuelType: 'Gasoline',
      transmission: 'CVT',
      features: ['AWD', 'EyeSight Safety', 'Roof Rails'],
      status: 'Available',
      type: 'wagon'
    },
    {
    id: 18,
    make: 'Porsche',
    model: '911 Carrera',
    year: 2021,
    price: 100000,
    monthlyPayment: 1500,
    image: 'https://img.autocarindia.com/ExtraImages/20250109033754_Porsche_911_Carrera_S_2025_front.jpg',
    mileage: 8000,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    features: ['Sport Chrono Package', 'Leather Interior', 'Turbocharged'],
    status: 'Available',
    type: 'sports'
  },
  {
    id: 19,
    make: 'Chevrolet',
    model: 'Bolt EV',
    year: 2024,
    price: 44000,
    monthlyPayment: 850,
    image: 'https://imageio.forbes.com/specials-images/imageserve/644a7f7107ad88c0b255c171/Chevrolet-Bolt-EV-electric-car/960x0.jpg?format=jpg&width=960',
    mileage: 7000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    features: ['Long-Range Battery', 'Regenerative Braking', 'Wi-Fi Hotspot'],
    status: 'Available',
    type: 'electric'
  },
  {
      id: 20,
      make: 'BMW',
      model: '3 Series',
      year: 2024,
      price: 51000,
      monthlyPayment: 750,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      mileage: 4000,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      features: ['Leather', 'Premium Audio', 'Sport Package'],
      status: 'Available',
      type: 'luxury'
    },
  ];
  const [filters, setFilters] = useState({ make: '', priceRange: '', fuelType: '' });
  const [appliedFilters, setAppliedFilters] = useState(filters);
  const [visibleCount, setVisibleCount] = useState(9);

  // Trigger filtering
  const handleSearch = () => {
    setAppliedFilters(filters);
    setVisibleCount(9);
  };

  // Compute filtered vehicles
  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      if (appliedFilters.make && vehicle.make.toLowerCase() !== appliedFilters.make) return false;
      if (appliedFilters.fuelType && vehicle.fuelType.toLowerCase() !== appliedFilters.fuelType) return false;

      if (appliedFilters.priceRange) {
        const range = appliedFilters.priceRange;
        let min = 0;
        let max = Infinity;
        if (range.includes('+')) {
          [min] = range.split('+').map(Number);
        } else {
          [min, max] = range.split('-').map(Number);
        }
        if (vehicle.price < min || vehicle.price > max) return false;
      }

      return true;
    });
  }, [appliedFilters]);

  // Slice based on visibleCount
  const visibleVehicles = filteredVehicles.slice(0, visibleCount);

  // Format CAD price
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 0 }).format(price);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-automotive-blue to-automotive-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Perfect Vehicle</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Quality pre-owned vehicles with financing available
            </p>
            <p className="text-lg leading-relaxed">
              Every vehicle in our inventory undergoes a comprehensive 100-point inspection and comes with our quality guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-automotive-charcoal mb-6">Search Our Inventory</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select onValueChange={value => setFilters({ ...filters, make: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="tesla">Tesla</SelectItem>
                  <SelectItem value="subaru">Subaru</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={value => setFilters({ ...filters, priceRange: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-25000">Under $25,000</SelectItem>
                  <SelectItem value="25000-35000">$25,000 - $35,000</SelectItem>
                  <SelectItem value="35000-50000">$35,000 - $50,000</SelectItem>
                  <SelectItem value="50000+">$50,000+</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={value => setFilters({ ...filters, fuelType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Fuel Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gasoline">Gasoline</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                </SelectContent>
              </Select>

              <Button onClick={handleSearch} className="bg-automotive-blue hover:bg-automotive-blue/90">
                Search Vehicles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-automotive-charcoal">Available Vehicles</h2>
            <p className="text-gray-600">{filteredVehicles.length} vehicles found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleVehicles.map(vehicle => (
              <Card key={vehicle.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className={`absolute top-4 right-4 ${
                      vehicle.status === 'Available' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                  >
                    {vehicle.status}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-automotive-charcoal">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </CardTitle>
                  <p className="text-lg font-semibold text-automotive-blue">
                    {formatPrice(vehicle.price)}
                  </p>
                  <p className="text-sm text-gray-600">
                    From {formatPrice(vehicle.monthlyPayment)}/month
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      {vehicle.mileage.toLocaleString()} km
                    </div>
                    <div className="flex items-center">
                      <Fuel className="w-4 h-4 mr-2" />
                      {vehicle.fuelType}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-automotive-blue hover:bg-automotive-blue/90">
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      className="border-automotive-blue text-automotive-blue hover:bg-automotive-blue hover:text-white"
                    >
                      Finance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVehicles.length > visibleCount && (
            <div className="text-center mt-8">
              <Button onClick={() => setVisibleCount(prev => prev + 9)}>
                See More
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Financing CTA */}
      <section className="py-16 bg-automotive-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Found Your Perfect Vehicle?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get pre-approved for financing in just 3 minutes and drive home today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-automotive-blue">
              Schedule Test Drive
            </Button>
            <Button size="lg" className="bg-automotive-gold hover:bg-automotive-gold/90 text-automotive-charcoal">
              Get Pre-Approved
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Inventory;