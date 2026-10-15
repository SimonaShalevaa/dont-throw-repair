import Atelier from "./components/atelier/Atelier";
import Catalogue from "./components/catalogue/Catalogue";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/home/Hero";
import Inquire from "./components/inquire/Inquire";
import MobileNavigation from "./components/navigation/MobileNavigation";

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        Dont-throw-repair
      </title>
      <meta
        name="description"
        content="Many people throw away things that could be fixed with a little help. In Dont-throw-repair users publish their broken or old items with a photo and a description, and other users give advice on how to repair them. If the owner does not want to repair an item, they can give it away to someone who will fix it. This way fewer things end up in the trash and people help each other."
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,500;1,500&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="template.css" />

      <Header/>
      {/* ============ MOBILE NAV ============ */}
      <MobileNavigation/>
      <main>
        {/* ============ PAGE: HOME ============ */}
        <Hero/>
        {/* ============ PAGE: CATALOGUE ============ */}
        <Catalogue/>
        {/* ============ PAGE: ATELIER ============ */}
        <Atelier/>
        {/* ============ PAGE: INQUIRE ============ */}
        <Inquire/>
      </main>
      {/* ============ FOOTER ============ */}
      <Footer/>
    </>
  );
}

export default App;
