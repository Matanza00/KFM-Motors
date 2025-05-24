
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Fuel, Users, Settings, Star } from 'lucide-react';

const Inventory = () => {
  const [filters, setFilters] = useState({
    make: '',
    priceRange: '',
    fuelType: '',
    transmission: ''
  });

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
      image: 'https://images.unsplash.com/photo-1549399497-517b5d2bfcb2',
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
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
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
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-automotive-blue to-automotive-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Vehicle
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Quality pre-owned vehicles with financing available
            </p>
            <p className="text-lg leading-relaxed">
              Every vehicle in our inventory undergoes a comprehensive 100-point inspection 
              and comes with our quality guarantee.
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
              <Select onValueChange={(value) => setFilters({...filters, make: value})}>
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

              <Select onValueChange={(value) => setFilters({...filters, priceRange: value})}>
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

              <Select onValueChange={(value) => setFilters({...filters, fuelType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Fuel Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gasoline">Gasoline</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-automotive-blue hover:bg-automotive-blue/90">
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
            <p className="text-gray-600">{vehicles.length} vehicles found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
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
                  <CardDescription className="text-lg font-semibold text-automotive-blue">
                    {formatPrice(vehicle.price)}
                  </CardDescription>
                  <p className="text-sm text-gray-600">
                    From {formatPrice(vehicle.monthlyPayment)}/month
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Settings className="w-4 h-4 mr-2" />
                      {vehicle.mileage.toLocaleString()} km
                    </div>
                    <div className="flex items-center text-gray-600">
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
                    <Button variant="outline" className="border-automotive-blue text-automotive-blue hover:bg-automotive-blue hover:text-white">
                      Finance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
