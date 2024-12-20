/* eslint-disable @next/next/no-img-element */
import ProductItem from '@/components/products/ProductItem'
import data from '@/lib/data'
import productService from '@/lib/services/productService'
import { convertDocToObj } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || '9fti',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, Server components, Next auth, daisyui, zustand',
}

export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()
  const allproducts= await productService.getAll()
  return (
    <>
      <div className="w-full carousel rounded-box mt-4">
  <div id="slide-1" className="carousel-item relative w-full">
    <img
      src="/images/banner4.jpg"
      className="w-full"
      alt="Banner 4"
    />
    <div
      className="absolute flex justify-between transform 
       -translate-y-1/2 left-5 right-5 top-1/2"
    >
      <a href="#slide-2" className="btn btn-circle">
        ❮
      </a>
      <a href="#slide-2" className="btn btn-circle">
        ❯
      </a>
    </div>
  </div>
  <div id="slide-2" className="carousel-item relative w-full">
    <img
      src="/images/banner3.webp"
      className="w-full"
      alt="Banner 3"
    />
    <div
      className="absolute flex justify-between transform 
       -translate-y-1/2 left-5 right-5 top-1/2"
    >
      <a href="#slide-1" className="btn btn-circle">
        ❮
      </a>
      <a href="#slide-1" className="btn btn-circle">
        ❯
      </a>
    </div>
  </div>
</div>

      <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {allproducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
    </>
  )
}
