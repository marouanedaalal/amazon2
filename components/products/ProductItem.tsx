import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card bg-base-300 shadow-lg rounded-xl overflow-hidden mb-6 transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
      <figure className="relative">
        <Link href={`/product/${product.slug}`}>
          <div className="group">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover h-64 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-lg font-semibold text-gray-800">{product.brand}</span>
            </div>
          </div>
        </Link>
      </figure>
      <div className="card-body p-6 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
          <span className="text-xl font-bold text-green-700">{product.price} DH / 1 Kg</span>
        </div>
        <p className="mt-2 text-sm text-gray-500 truncate">{product.description}</p>
      </div>
    </div>
  )
}
