import Link from "next/link";

import useLocalStorage from "@/hooks/useLocalStorage";

// --- Types ---
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  calories: number;
  image: string;
  imageAlt: string;
}

interface CartItem extends Product {
  quantity: number;
}

// --- Data ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Green Detox",
    price: 8.5,
    description: "Kale, spinach, green apple, lemon, organic ginger root.",
    calories: 120,
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHf-Ne6Dmjlys1ISZTvefdhTUHqshBh8-IQ8YCJHjei7e-MXKUrkDMfsJENvDtu3QUQ9pF5GOKRSuphWFxYuT1p1j7YQsTLr_0SKIBChXG1RAjW1Kssx3W2Mu0Mh6YewEEmQCL8VenVzMOoyDsK4A3Y0ZCmeS8GS-71_f0O9dpPXHOTV37KeQeMYhyXLuztW_A7l6akPOzMpmSEtJfFLPZGv6nrMt0_FFpSrNpZjiqtdlrNj4sma92xXeLU9y9teXWE6Omd6vgDg4')",
    imageAlt: "Green smoothie with spinach and apple",
  },
  {
    id: 2,
    name: "Berry Blast",
    price: 9.0,
    description: "Strawberries, blueberries, raspberries, greek yogurt, honey.",
    calories: 180,
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxuTDepafrmwEvallTztPs7xYuYwth7J4tYWhm0LIoKvJC05Sdtr_BsnxMKKXgPT2vp8wdzBBd_c8qwTM8btZwam-jvDMrwhkf7ocBR2JauqvSpyrtHOpyWqmsN24RvurkDTrXCJcGncPXYe4r6R4peZkK93Pmms8AU4KpNVDPg821DRk6f0ewB3RIKxcfcN4MgzMV3RCKvQ0hVB76GoloTemyOgeVVUEI3trBW6h-UaNLjCuf5m4JkkOV85tbGIRmUHD_Jd9d9-w')",
    imageAlt: "Purple berry smoothie in glass",
  },
  {
    id: 3,
    name: "Tropical Sunrise",
    price: 8.0,
    description: "Mango, pineapple, passion fruit, coconut milk.",
    calories: 210,
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcRb-t-9ooHurKnWnx2fP7KcmP21h9-Gm8f_xgjPYl_nYO3sUevpFupGT4UE7dUUuT_9HUaF2UvX1_xHkjdVOYzhqGKe0kD8E6_XWqok5J9y5neku9e9VaEB-OtvWhjpzFdsS1jYOJ3TZDr5YiUfHS4FG_QIScL6OOCJJFXl33YMj1JcRMSr_3nVDPFx06eezDGpUYA-JafV9pb7ERV4QgUMaj-__Yzw27lvdRr19rhWNoCJ-i82uU4pfADlPyazGocM37UJXCILw')",
    imageAlt: "Orange mango smoothie with mint",
  },
  {
    id: 4,
    name: "Choco Protein",
    price: 10.5,
    description:
      "Whey protein, banana, peanut butter, almond milk, cocoa nibs.",
    calories: 320,
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQHxUw_TUsVVn7PodYSlplFPHnqatvtU7-muEitCKlAPSDpeRXVDeUYMTtDhlmLr4lPjj4OkWmAXUoUgQm3nm2IBUT7eWjZPF_Dh_OSmJ0ItDKD64L11KdMyA5gQrtnCOp0g249Kjzyl0t_FH4s7NGw2J5RonzW38TAUh0Bjt6S5tqaUZDa2sNwUbOLCQlCZDU9YLYiiQ2BsYJHpd9CLsgDMPqhd0VgvZzqXj-ptRJ5f75iRH_4vH3UkrqtvxPW3r7VAHCvktDmCQ')",
    imageAlt: "Chocolate peanut butter smoothie",
  },
];

export default function Smothies() {
  const [cart, setCart] = useLocalStorage<CartItem[]>("freshBlendsCart", []);

  // --- Handlers ---
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (productId: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prev) => {
      return prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const getQuantity = (productId: number) => {
    return cart.find((item) => item.id === productId)?.quantity || 0;
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24">
      <div className="sticky top-0 z-20">
        <div className="flex items-center px-4 py-4 justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Welcome back,
            </p>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight mt-0.5">
              Fresh Blends 🥤
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center rounded-full w-10 h-10  shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span
                className="material-symbols-outlined "
                style={{ fontSize: "24px" }}
              >
                notifications
              </span>
            </button>
            <Link href="/orderDetail">
              <button className="relative flex items-center justify-center rounded-full w-10 h-10  shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <span
                  className="material-symbols-outlined "
                  style={{ fontSize: "24px" }}
                >
                  shopping_bag
                </span>
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-primary border-2 border-white dark:border-background-dark"></span>
                )}
              </button>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-2">
          <label className="flex flex-col w-full">
            <div className="relative flex w-full items-center rounded-xl shadow-sm h-12 transition-all focus-within:ring-2 focus-within:ring-primary/50">
              <div className="absolute left-4 flex items-center justify-center text-gray-400">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "24px" }}
                >
                  search
                </span>
              </div>
              <input
                className="w-full bg-transparent border-none py-3 pl-12 pr-4 text-base  placeholder:text-gray-400 focus:ring-0 rounded-xl"
                placeholder="Search for smoothies, bowls..."
                defaultValue=""
              />
            </div>
          </label>
        </div>

        {/* Categories Chips */}
        <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar scroll-smooth w-full">
          {/* Active Chip */}
          <Link href="/">
            <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full bg-primary text-black transition-transform active:scale-95 shadow-lg shadow-primary/20">
              <p className="text-sm font-bold leading-normal">All</p>
            </button>
          </Link>
          {/* Inactive Chips */}
          <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full border border-transparent dark:border-gray-700 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="mr-1 text-lg">🥬</span>
            <p className="text-sm font-medium leading-normal">Detox</p>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full border border-transparent dark:border-gray-700 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="mr-1 text-lg">💪</span>
            <p className="text-sm font-medium leading-normal">Protein</p>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full border border-transparent dark:border-gray-700 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="mr-1 text-lg">🍓</span>
            <p className="text-sm font-medium leading-normal">Fruity</p>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full border border-transparent dark:border-gray-700 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="mr-1 text-lg">🥣</span>
            <p className="text-sm font-medium leading-normal">Bowls</p>
          </button>
        </div>
      </div>

      {/* Scrollable Content: Product List */}
      <div className="flex flex-col gap-4 p-4">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-1">
          <h3 className="text-lg font-bold">Recommended</h3>
          <a
            className="text-sm font-medium text-primary hover:opacity-80"
            href="#"
          >
            See all
          </a>
        </div>

        {PRODUCTS.map((product) => {
          const qty = getQuantity(product.id);
          return (
            <div
              key={product.id}
              className="group relative flex flex-col sm:flex-row items-stretch gap-4 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Container */}
              <div className="w-full sm:w-32 aspect-[4/3] sm:aspect-square shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt={product.imageAlt}
                  style={{
                    backgroundImage: product.image,
                  }}
                ></div>
              </div>
              {/* Content */}
              <div className="flex flex-1 flex-col justify-between py-1">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold  leading-tight">
                      {product.name}
                    </h3>
                    <span className="text-lg font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md">
                    <span className="material-symbols-outlined text-[16px]">
                      bolt
                    </span>
                    {product.calories} kcal
                  </div>

                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(product)}
                      className="flex hover:bg-gray-50 bg-primary h-9 items-center gap-1.5 rounded-full px-4 text-sm font-bold text-white dark:text-black transition-transform active:scale-95"
                    >
                      <span>Add</span>
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  ) : (
                    <div className="flex items-center bg-primary rounded-full h-9">
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="w-8 h-full flex items-center justify-center hover:text-black dark:hover:text-white"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          remove
                        </span>
                      </button>
                      <span className="w-6 text-center text-sm font-bold">
                        {qty}
                      </span>
                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="w-8 h-full flex items-center justify-center hover:text-black dark:hover:text-white"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          add
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky Floating Cart Summary */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 left-4 right-4 z-50">
          <button className="w-full group bg-black dark:bg-primary text-white dark:text-black rounded-[2rem] p-2 pr-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all active:scale-[0.98]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 dark:bg-black/10 flex h-12 w-12 items-center justify-center rounded-full text-white dark:text-black">
                  <span className="text-base font-bold">{totalItems}</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold leading-none mb-0.5">
                    ${totalPrice.toFixed(2)}
                  </span>
                  <span className="text-xs opacity-70 font-medium">
                    View detailed cart
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">Checkout</span>
                <span
                  className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                  style={{ fontSize: "20px" }}
                >
                  arrow_forward
                </span>
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
