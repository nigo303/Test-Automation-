const puppeteer = require('puppeteer');
const fs = require('fs');

async function buscarPlaystationEnMexico() {
  // 1. Abrir el navegador
  const navegador = await puppeteer.launch({ 
    headless: false, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
});
  const pagina = await navegador.newPage();

  // 2. Ir al sitio web
  await pagina.goto('https://www.mercadolibre.com', { waitUntil: 'networkidle0', timeout: 60000 });

  // 3. Seleccionar México
  await pagina.click('#MX', 'México');


  // 4. Buscar "playstation5"
  await pagina.type('#cb1-edit','playstation 5');
  await pagina.click('body > header > div > div.nav-area.nav-top-area.nav-center-area > form > button'); 
  await pagina.waitForNavigation();

  // 5. Filtrar por "Nuevos"
   await pagina.click('#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords > aside > section.ui-search-filter-groups > div:nth-child(6) > ul > li:nth-child(1) > a > span.ui-search-filter-name', { timeout: 60000 });
  
  // 6. Filtrar por "Cdmx"
  await pagina.click('#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords > aside > section.ui-search-filter-groups > div:nth-child(14) > ul > li:nth-child(1) > a > span.ui-search-filter-name', { timeout: 60000 });

  // 7. Ordenar por precio (primero mayor, luego menor -esto puede ser más complejo)
  await pagina.click('#\:Rlilie\:-menu-list-option-price_desc > div > div > span', 'Mayor precio'); 

  // 8. Obtener los primeros 5 productos
  const productos = await pagina.evaluate(() => {
    const elementos = document.querySelectorAll('.producto');
    const resultados = [];
    for (let i = 0; i < Math.min(5, elementos.length); i++) {
      const elemento = elementos[i];
      const nombre = elemento.querySelector('.nombre').innerText;
      const precio = elemento.querySelector('.precio').innerText;
      resultados.push({ nombre, precio });
    }
    return resultados;
  });

  // 9. Imprimir en la consola
  console.log(productos);

  // 10. Cerrar el navegador
  await navegador.close();
}

buscarPlaystationEnMexico();
