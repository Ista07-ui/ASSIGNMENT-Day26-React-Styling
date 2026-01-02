import ProductCard from "./header/ProductCard";

const products = [
  {
    name: "Green Detox",
    price: 8.5,
    image: "/assets/green_detox.png",
  },
  {
    name: "Berry Blast",
    price: 7.5,
    image: "/assets/Berry_Blast.png",
  },
];

const ProductSection = () => {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold mb-4">Popular Smoothies</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
