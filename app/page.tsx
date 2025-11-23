'use client';

import { useState } from 'react';
import { Product } from '@/components/types';
import CardBalance from '@/components/CardBalance';
import PurchaseSummary from '@/components/PurchaseSummary';
import ProductForm from '@/components/ProductForm';
import ProductList from '@/components/ProductList';

export default function ShoppingCalculator() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('00,00');
  const [productQuantity, setProductQuantity] = useState(1); // Mudou para number
  const [cardBalance, setCardBalance] = useState('00,00');

  const addProduct = () => {
    if (!productName || productPrice === '00,00') return;

    const priceValue = parseFloat(productPrice.replace(',', '.'));

    const newProduct: Product = {
      id: Date.now().toString(),
      name: productName,
      price: priceValue,
      quantity: productQuantity, // Já é number
    };

    setProducts([...products, newProduct]);
    setProductName('');
    setProductPrice('00,00');
    setProductQuantity(1); // Reset para 1
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="to-white-900 safe-area-inset min-h-screen bg-gradient-to-br from-gray-900 p-3">
      <div className="mx-auto max-w-md">
        <header className="mb-6 text-center">
          <h1 className="text-white-300 mb-1 text-2xl font-bold">
            Calculadora de Mercado
          </h1>
        </header>

        <CardBalance
          cardBalance={cardBalance}
          onCardBalanceChange={setCardBalance}
        />

        <PurchaseSummary total={total} cardBalance={cardBalance} />

        <ProductForm
          productName={productName}
          productPrice={productPrice}
          productQuantity={productQuantity}
          onProductNameChange={setProductName}
          onProductPriceChange={setProductPrice}
          onProductQuantityChange={setProductQuantity}
          onAddProduct={addProduct}
        />

        <ProductList products={products} onRemoveProduct={removeProduct} />
      </div>
    </div>
  );
}
