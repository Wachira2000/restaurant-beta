import Image from "next/image";

const JapaneseMenu = () => {
    const menuItems = [
      { id: 1, name: 'Sushi Roll', description: 'Fresh sushi rolls with a variety of fillings.', price: '$12', image: '/grid__1.png' },
      { id: 1, name: 'Soba', description: 'Fresh soba with a variety of fillings.', price: '$17', image: '/food3.png' },
      { id: 1, name: 'Unagi', description: 'Fresh unagi with a variety of fillings.', price: '$18', image: '/food4.png' },
      { id: 1, name: 'Tempura', description: 'Fresh tempura with a variety of fillings.', price: '$9', image: '/food5.png' },
      // Add more menu items here
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
  
  export default JapaneseMenu;
  