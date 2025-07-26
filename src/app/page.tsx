'use client';

import { useState, useEffect } from 'react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    // Set dynamic page title
    document.title = "Vše Pro Stavby - Váš Partner ve Stavebnictví";

    // Generate SVG favicon with a gradient and convert to Base64 Data URL
    const color1 = "#2a4b87"; // Darker blue
    const color2 = "#4a61ab"; // Lighter blue

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${color1}" /><stop offset="100%" stop-color="${color2}" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute('href', faviconUrl);
    faviconLink.setAttribute('type', 'image/svg+xml');
  }, []);

  return (
    <div className="font-sans text-gray-800 antialiased bg-gray-50">
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-4 shadow-lg fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold flex items-center">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21h8.25M17.25 6.75L22.5 12l-5.25 5.25M17.25 6.75L12 1.5l-5.25 5.25M17.25 6.75H6.75l-5.25 5.25L6.75 17.25h10.5l5.25-5.25L17.25 6.75z" />
              </svg>
            </span>
            Vše Pro Stavby
          </a>

          <nav className="hidden md:flex space-x-6">
            <a href="#hero" className="hover:text-blue-200 transition-colors duration-200">Domů</a>
            <a href="#o-nas" className="hover:text-blue-200 transition-colors duration-200">O nás</a>
            <a href="#sluzby" className="hover:text-blue-200 transition-colors duration-200">Služby</a>
            <a href="#reference" className="hover:text-blue-200 transition-colors duration-200">Reference</a>
            <a href="#kontakt" className="hover:text-blue-200 transition-colors duration-200">Kontakt</a>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gradient-to-r from-blue-700 to-indigo-800 p-4 mt-2 rounded-lg shadow-md`}>
          <div className="flex flex-col space-y-3">
            <a href="#hero" onClick={closeMenu} className="block text-white hover:text-blue-200 transition-colors duration-200">Domů</a>
            <a href="#o-nas" onClick={closeMenu} className="block text-white hover:text-blue-200 transition-colors duration-200">O nás</a>
            <a href="#sluzby" onClick={closeMenu} className="block text-white hover:text-blue-200 transition-colors duration-200">Služby</a>
            <a href="#reference" onClick={closeMenu} className="block text-white hover:text-blue-200 transition-colors duration-200">Reference</a>
            <a href="#kontakt" onClick={closeMenu} className="block text-white hover:text-blue-200 transition-colors duration-200">Kontakt</a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="hero" className="relative bg-cover bg-center h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white px-4"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542382257252-87ed0d71a6e")' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Vše Pro Stavby:
              <br />
              Váš Spolehlivý Partner ve Stavebnictví
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
              Komplexní stavební a renovační služby pro vaše projekty, od základů až po finální úpravy. Kvalita a preciznost jsou naší prioritou.
            </p>
            <a href="#sluzby" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Zjistit Více O Našich Službách
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section id="o-nas" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">O Nás</h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 flex justify-center">
                <img src="https://plus.unsplash.com/photos/17698G6v2K0" alt="Team working" className="rounded-lg shadow-xl w-full max-w-md object-cover h-64 md:h-auto" />
              </div>
              <div className="md:w-1/2 text-left">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Vše Pro Stavby s.r.o. je dynamická stavební společnost s bohatými zkušenostmi v oblasti generálních dodávek staveb, rekonstrukcí a revitalizací. Naším cílem je poskytovat klientům kompletní a profesionální služby na klíč, s důrazem na kvalitu, efektivitu a individuální přístup.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Zakládáme si na poctivé práci, transparentní komunikaci a dodržování termínů. Disponujeme týmem zkušených odborníků, kteří se neustále vzdělávají a drží krok s nejnovějšími technologiemi a trendy v oboru. Vaše spokojenost je pro nás nejvyšší prioritou.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Naše Služby</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-blue-600 text-white rounded-full p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM12.207 14.183A6.678 6.678 0 0013.5 12h-1c-.51 0-1.002.322-1.229.803L8.76 17.5C7.99 19.167 6 20.25 6 20.25h12c-1.105 0-2.164-.265-3.111-.75L12.207 14.183z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Stavební Práce</h3>
                <p className="text-gray-600 text-center">Generální dodávky staveb, od základů po střechu, s důrazem na kvalitu a termíny.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-blue-600 text-white rounded-full p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.932zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Rekonstrukce a Renovace</h3>
                <p className="text-gray-600 text-center">Kompletní rekonstrukce bytů, domů a komerčních prostor s moderním designem.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-blue-600 text-white rounded-full p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.719c0-.404.125-.802.357-1.135l1.543-2.315A1.86 1.86 0 0110.5 12.375V7.5M10.5 12.375c0-.447.157-.88.441-1.223M10.5 12.375a1.875 1.875 0 001.892-1.892.75.75 0 01.782-.782 1.875 1.875 0 000-3.75 1.875 1.875 0 00-1.892-1.892 2.25 2.25 0 01-2.247-2.247A1.5 1.5 0 009 1c-.828 0-1.5.672-1.5 1.5A1.5 1.5 0 009 4h.007a.75.75 0 01.737.608 2.25 2.25 0 002.246 2.247 1.875 1.875 0 011.892 1.892c0 .265.105.52.293.707l1.543 2.315c.232.333.357.731.357 1.135V21M12 4.5l3 3m-3-3l-3 3M12 4.5V1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Zateplování a Fasády</h3>
                <p className="text-gray-600 text-center">Efektivní zateplovací systémy pro úsporu energií a prodloužení životnosti budov.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-blue-600 text-white rounded-full p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8.25V6.25a2.25 2.25 0 00-2.25-2.25H11.25a2.25 2.25 0 00-2.25 2.25v2.25M15 12H9m12 0a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v6m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Sádrokartony a Omítky</h3>
                <p className="text-gray-600 text-center">Profesionální montáž sádrokartonových systémů a aplikace vnitřních i vnějších omítek.</p>
              </div>

            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="reference" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Naše Reference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <img src="https://source.unsplash.com/random/400x300?building-exterior" alt="Projekt 1" className="rounded-md mb-4 w-full h-48 object-cover" />
                <h3 className="text-2xl font-semibold mb-3 text-blue-800">Rodinný Dům Praha</h3>
                <p className="text-gray-700">Kompletní výstavba moderního rodinného domu, včetně interiérových úprav a fasády. Projekt dokončen v termínu a rozpočtu.</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <img src="https://source.unsplash.com/random/400x300?office-renovation" alt="Projekt 2" className="rounded-md mb-4 w-full h-48 object-cover" />
                <h3 className="text-2xl font-semibold mb-3 text-blue-800">Rekonstrukce Kanceláří Brno</h3>
                <p className="text-gray-700">Rozsáhlá rekonstrukce kancelářských prostor s důrazem na funkčnost a moderní design. Nové rozvody, podlahy a příčky.</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <img src="https://source.unsplash.com/random/400x300?apartment-insulation" alt="Projekt 3" className="rounded-md mb-4 w-full h-48 object-cover" />
                <h3 className="text-2xl font-semibold mb-3 text-blue-800">Zateplení Bytového Domu</h3>
                <p className="text-gray-700">Kompletní zateplení fasády a střechy panelového domu, vedoucí k výrazným úsporám energií pro všechny obyvatele.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 py-16 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Máte Stavební Projekt?</h2>
            <p className="text-xl mb-8 opacity-90">Nezávazně nás kontaktujte a proberte s námi vaše představy a požadavky.</p>
            <a href="#kontakt" className="inline-block bg-white text-blue-800 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Kontaktujte Nás Již Dnes
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Kontaktujte Nás</h2>
            <div className="space-y-6 text-lg text-gray-700 max-w-2xl mx-auto">
              <p className="flex items-center justify-center">
                <span className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.25V6.75m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6.75m18 0v-.825a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 5.925v.825m18 0zM12 10.5h.008v.008H12v-.008zM15.75 10.5h.008v.008h-.008v-.008zM21.75 10.5h.008v.008h-.008v-.008z" />
                  </svg>
                </span>
                Email: <a href="mailto:info@vseprostavby.cz" className="text-blue-600 hover:underline ml-2">info@vseprostavby.cz</a>
              </p>
              <p className="flex items-center justify-center">
                <span className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.334a4.5 4.5 0 00-.918-2.674l-1.44-1.44a3.75 3.75 0 00-5.304 0l-.75.75a.75.75 0 01-1.06 0l-.75-.75a3.75 3.75 0 00-5.304 0l-1.44 1.44A4.5 4.5 0 002.25 18.084V15.75m15-9H9.75Z" />
                  </svg>
                </span>
                Telefon: <a href="tel:+420777500500" className="text-blue-600 hover:underline ml-2">+420 777 500 500</a>
              </p>
              <p className="flex items-center justify-center">
                <span className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                Adresa: U Libavského potoka 1572/2, Praha 4 - Braník, 147 00
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Vše Pro Stavby s.r.o. Všechna práva vyhrazena.
          <p className="mt-2">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-200 transition-colors duration-200">DigitalFusion</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
