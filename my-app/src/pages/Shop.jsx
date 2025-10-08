import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { useCart } from '@/store/CartContext.jsx';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast.js';
import { products } from '@/data/products.js';

function ProductCard({ product }) {
  const { addItem } = useCart();

  const defaultImage =
    product.media && typeof product.media === 'object'
      ? Object.values(product.media)[0]?.find((m) => m.type === 'image')?.src
      : '';

  if (!product.media) {
    console.warn('Product missing media:', product);
  }

  // ✅ Handle stock calculation based on product.colors[0]
  const firstColor = product.colors?.[0];
  const totalSizes = firstColor?.sizes?.length || 0;
  const soldCount = firstColor?.soldSizes?.length || 0;
  const remaining = totalSizes - soldCount;

  let stockText = '';
  let stockColor = '';

  if (remaining <= 0) {
    stockText = 'Out of Stock';
    stockColor = 'text-red-500';
  } else if (remaining < 4) {
    stockText = `Only ${remaining} left in stock`;
    stockColor = 'text-orange-400';
  } else {
    stockText = 'In Stock';
    stockColor = 'text-green-400';
  }

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-3 shadow-lg hover:shadow-cyan-400/10 transition-shadow flex flex-col"
    >
      <Link
        to={`/product/${product.id}`}
        className="block rounded-xl overflow-hidden aspect-[4/3] border border-white/10"
      >
        <img
          src={defaultImage}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </Link>

      <div className="flex items-center justify-between mt-3">
        <div>
          <p className="font-semibold">{product.name}</p>

          {/* ✅ Stock status below product name */}
          <p className={`text-xs font-medium mt-1 ${stockColor}`}>{stockText}</p>

          <p className="text-sm text-white/70">
            ₹
            {Number.isInteger(product.price)
              ? product.price.toLocaleString('en-IN')
              : product.price.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
          </p>
        </div>

        <Button
  onClick={() => {
    if (remaining > 0) {
      // ✅ Pick the first color safely
      const firstColor = product.colors?.[0] || {};

      // ✅ Safe arrays
      const allSizes = Array.isArray(firstColor.sizes) ? firstColor.sizes : [];
      const soldSizes = Array.isArray(firstColor.soldSizes) ? firstColor.soldSizes : [];

      // ✅ Filter available sizes
      const availableSizes = allSizes.filter((size) => !soldSizes.includes(size));
      const defaultAvailableSize = availableSizes[0] || null;

      const itemToAdd = {
        ...product,
        image: defaultImage,
        color: firstColor.name || "Default",
        size: defaultAvailableSize || "Default", // ✅ fallback
      };

      addItem(itemToAdd);

      toast({
        title: "Added to Cart 🛒",
        description: `${product.name} (Size: ${itemToAdd.size}, Color: ${itemToAdd.color}) has been added.`,
      });
    }
  }}
  className={`font-semibold ${
    remaining <= 0
      ? 'bg-gray-600 text-white cursor-not-allowed opacity-70'
      : 'bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black'
  }`}
  disabled={remaining <= 0}
>
  {remaining <= 0 ? 'Out of Stock' : 'Add to cart'}
</Button>

      </div>
    </motion.article>
  );
}

export default function Shop() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get('q')?.toLowerCase().trim() || '';

  const filteredProducts = React.useMemo(() => {
    if (!q) return products;
    return products.filter((p) => p.name.toLowerCase().includes(q));
  }, [q]);

  return (
    <>
      <Helmet>
        <title>SHOES CABIN | Shop</title>
        <meta
          name="description"
          content="Shop the latest sneakers at SHOES CABIN. Premium materials, standout designs, everyday comfort."
        />
        <meta property="og:title" content="SHOES CABIN | Shop" />
        <meta
          property="og:description"
          content="Shop the latest sneakers at SHOES CABIN. Premium materials, standout designs, everyday comfort."
        />
      </Helmet>

      <section className="container mx-auto pt-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Shop
        </h1>
        <div className="flex items-center justify-between mt-4">
          <p className="text-white/70 text-sm">
            {q ? `Results for "${q}"` : 'Fresh arrivals and all-time favorites.'}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="border-white/15 bg-white/5 text-white hover:bg-white/10"
              onClick={() =>
                toast({
                  title: 'Filters',
                  description:
                    "🚧 This feature isn't implemented yet—but don't worry! It will be updated soon! 🚀",
                })
              }
            >
              Filters
            </Button>
            <Button
              variant="outline"
              className="border-white/15 bg-white/5 text-white hover:bg-white/10"
              onClick={() =>
                toast({
                  title: 'Sort',
                  description:
                    "🚧 This feature isn't implemented yet—but don't worry! It will be updated soon! 🚀",
                })
              }
            >
              Sort
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-white/60 py-10">
              No products found.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
