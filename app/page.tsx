import Header from "./components/Header";
import Image from "next/image";
import model from "../image/model.png"
import "@fontsource/montserrat"
import "@fontsource/roboto"
import Link from "next/link";

export default function Home() {


  return (
    <>
      <Header />
      <main className="main-container">
        <div className="container">
          <h1>O melhor jeito de comprar que você ama!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet veritatis amet ad blanditiis, quia rerum nulla maxime est incidunt omnis mollitia perferendis architecto pariatur possimus nobis, quis, voluptatum facilis?</p>

          <Link href="/products/">

            <button className="btn-home">Conheça nossos produtos!</button>
          </Link>
        </div>

        <div className="container-img">
          <Image src={model} alt={"modelo"} layout="responsive" width={500} height={800}></Image>
        </div>

      </main>
    </>
  );
}
