import Header from "./components/Header";
import "@fontsource/montserrat"
import "@fontsource/roboto"
import Link from "next/link";
import Sidebar from "./components/Sidebar";

export default function Home() {


  return (
    <>
      <Header />
      <Sidebar />
      <main className="main-container">
        <div className="container">
          <h1>O melhor jeito de comprar que você ama!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet veritatis amet ad blanditiis, quia rerum nulla maxime est incidunt omnis mollitia perferendis architecto pariatur possimus nobis, quis, voluptatum facilis?</p>

          <Link href="/products/">

            <button className="btn-home">Conheça nossos produtos!</button>
          </Link>
        </div>
      </main>
    </>
  );
}
