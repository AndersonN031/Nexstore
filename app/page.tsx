"use client"

import Header from "./components/HeaderComponent";
import "@fontsource/montserrat"
import "@fontsource/roboto"
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { ProductTypes } from "./hooks/useProducts";
import { register } from 'swiper/element/bundle'
import imageboys from '../image/two-mens.jpg'
import Image from 'next/image'

register()
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {

  const [productImages, setProductImages] = useState<ProductTypes[]>([]);
  const [navigations, setNavigation] = useState(true)
  const [slidePerView, setSliderPerView] = useState(1)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=5");
        const data: ProductTypes[] = await response.json();
        setProductImages(data);
      } catch (error) {
        console.error(error);
      }
    }

    const handleResize = () => {
      if (window.innerWidth < 560) {
        setNavigation(false)
        setSliderPerView(1.5)

      } else {
        setNavigation(true)
        setSliderPerView(1)
      }
    }
    handleResize()
    fetchData();

    window.addEventListener('resize', handleResize)

    // desmontando Resize para não perder performance
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);




  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <main className="main-container">
        <div className="container">
          <h1>O melhor jeito de comprar que você ama!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet veritatis amet ad blanditiis, quia rerum nulla maxime est incidunt omnis mollitia perferendis architecto pariatur possimus nobis, quis, voluptatum facilis?</p>
          <Link href="/products/">
            <button className="btn-home">Conheça nossos produtos!</button>
          </Link>
        </div>
        <div className="container-image">
          <Image
            src={imageboys}
            alt="Descrição da imagem"
            className="image-boys"
            layout="responsive"
          />
        </div>
      </main>

      <main className="main-scrollImage">
        <div className="product-images-container">
          <Swiper
            slidesPerView={slidePerView}
            pagination={true}
            navigation={navigations}
          >
            {productImages.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="card-scrollImage">
                  <div className="product-item">
                    <Link href={`/products/${product.id}`} legacyBehavior>
                      <a>
                        <img src={product.image} alt={product.title} />
                      </a>
                    </Link>
                  </div>
                  <p>{product.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>

    </>
  );
}

