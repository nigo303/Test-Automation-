# Tecnologías
Sistema operativo: Windows/mac
Node.js >= 18.xy npm
Código de Visual Studio (recomendado)
Chrome
Selenium con drivers externos (Selenium-WedDriver)
Puppeteer

## Instalación

Clona el repositorio: git clone https://github.com/tu-usuario/tu-repo.git
Entra en la carpeta: cd tu-repo

## Instala dependencias:
npm install
npm init
npm install selenium-webdriver
npm install puppeteer


## Puppeteer — notas

Puppeteer por defecto descarga Chromium. Si quieres usar Chrome instalado: npm install puppeteer-core y en tu código especifica la ruta al ejecutable: const browser = await puppeteer.launch({ executablePath: 'C:\Program Files\Google\Chrome\Application\chrome.exe', headless: true });
Si hay problemas con permisos o versiones, indica cómo solucionarlos (p. ej. --no-sandbox).

## Ejecución

Ejecuta desde Visual Studio con F5.
oh en el cmd colocando la ruta del programa junto con node index.js: 'C:\User\Carpeta\Donde\se\encuentra> node Index.js' damos enter.

