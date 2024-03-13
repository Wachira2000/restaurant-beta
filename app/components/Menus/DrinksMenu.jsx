import Image from "next/image";

const DrinksMenu = () => {
    const menuItems = [
      { id: 1, name: 'Beverage 1', description: 'Resfreshing Drink', price: '$12', image: '/beverage1.jpeg' },
      { id: 1, name: 'Beverage 2', description: 'Resfreshing Drink', price: '$12', image: '/beverage2.jpeg' },
      { id: 1, name: 'Beverage 3', description: 'Resfreshing Drink', price: '$12', image: '/beverage3.jpeg' },
      { id: 1, name: 'Beverage 4', description: 'Resfreshing Drink', price: '$12', image: '/beverage4.jpeg' },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    );
  };
  
  const MenuItem = ({ item }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image src={item.image} alt={item.name} className="w-full h-64 object-cover" height={100} width={100}/>
        <div className="p-4">
          <h2 className="text-xl text-black font-semibold">{item.name}</h2>
          <h3 className="text-gray-700 mb-2">{item.description}</h3>
          <h4 className="text-gray-900 font-bold">{item.price}</h4>
        </div>
      </div>
    );
  };
  
  export default DrinksMenu;
  