import Image from "next/image";

const ItalianMenu = () => {
    const menuItems = [
      { id: 1, name: 'Pizza', description: 'Fresh Pizza.', price: '$15', image: '/pizza.jpg' },
      { id: 1, name: 'Pasta', description: 'Delicious Pasta.', price: '$7', image: '/food1.png' },
      { id: 1, name: 'Ravioli', description: 'Delicious Ravioli.', price: '$25', image: '/food2.png' }, 
      { id: 1, name: 'Spaghetti ', description: 'Sumptuous Food.', price: '$29', image: '/food.webp' }, 
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
  
  export default ItalianMenu;
  