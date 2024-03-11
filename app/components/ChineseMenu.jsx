import Image from "next/image";

const ChineseMenu = () => {
    const menuItems = [
      { id: 1, name: 'Chow Mein', description: 'Sumptuous Food.', price: '$19', image: '/item-4.png' },
      { id: 1, name: 'Spring Rolls', description: 'Sumptuous Food.', price: '$19', image: '/grid__2.png' },
      { id: 1, name: 'Kung Pao Chicken', description: 'Sumptuous Food.', price: '$19', image: '/grid__3.png' },
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
          <p className="text-gray-700 mb-2">{item.description}</p>
          <p className="text-gray-900 font-bold">{item.price}</p>
        </div>
      </div>
    );
  };
  
  export default ChineseMenu;
  