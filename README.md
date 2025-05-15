<div style="display: flex; justify-content: center; align-items: center">
    <img alt="2IES icon" src="./public/Logo2ies.svg" width=50%>
</div>

---

# 2IES-Web

**Web de 2IES**, creada con [Astro](https://astro.build/).

## 🚀 ¿Cómo empezar?

⚠️ **Requisito importante**  
Este proyecto requiere Node.js v22+. Instálalo desde [nodejs.org](https://nodejs.org/) antes de continuar.

1. **Clona el repositorio**:
   ```bash
    git clone https://github.com/2IES-BO/2IES-Web.git
   ```
2. **Instala dependencias**:
   ```bash
    npm install
   ```
3. **Ejecuta localmente el servidor de desarrollo**:
   ```bash
    npm run dev
   ```
4. **Abre en tu navegador**:
   `http://localhost:4321`

## 🧞 Comandos

Comandos útiles del proyecto:

| Comando                   | Acción                                               |
| :------------------------ | :--------------------------------------------------- |
| `npm install`             | Instala las dependencias                             |
| `npm run dev`             | Inicia el servidor local en `localhost:4321`         |
| `npm run build`           | Construye el sitio para producción en `./dist/`      |
| `npm run preview`         | Previsualiza el build localmente antes de desplegar  |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Muestra ayuda para la CLI de Astro                   |

## 🚀 Estructura del Projecto

Dentro del proyecto 2IES-Web, existen las siguientes carpetas y archivos:

```text
📦2IES-Web
 ┣ 📂.astro
 ┃ ┣ 📂collections
 ┃ ┣ 📄content-assets.mjs
 ┃ ┣ 📄content-modules.mjs
 ┃ ┣ 📄data-store.json
 ┃ ┣ 📄settings.json
 ┃ ┗ 📄types.d.ts
 ┣ 📂.vscode
 ┃ ┣ 📄extensions.json
 ┃ ┗ 📄launch.json
 ┣ 📂public
 ┃ ┣ 📄favicon.svg
 ┃ ┗ 📄Logo2ies.svg
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📄astro.svg
 ┃ ┃ ┣ 📄background.svg
 ┃ ┃ ┗ 📄circuitpathsinkscape.svg
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂vectors
 ┃ ┃ ┃ ┣ 📄BottomCircuit.astro
 ┃ ┃ ┃ ┗ 📄Logo2ies.astro
 ┃ ┃ ┣ 📄AboutUs.astro
 ┃ ┃ ┣ 📄Buttons.astro
 ┃ ┃ ┣ 📄Clients.astro
 ┃ ┃ ┣ 📄Contact.astro
 ┃ ┃ ┣ 📄Footer.astro
 ┃ ┃ ┣ 📄Header.astro
 ┃ ┃ ┣ 📄Hero.astro
 ┃ ┃ ┣ 📄Portfolio.astro
 ┃ ┃ ┣ 📄Services.astro
 ┃ ┃ ┣ 📄UnderConstruction.astro
 ┃ ┃ ┣ 📄UnderConstructionCircuit.astro
 ┃ ┃ ┣ 📄UnderConstructionMessage.astro
 ┃ ┃ ┗ 📄Welcome.astro
 ┃ ┣ 📂layouts
 ┃ ┃ ┗ 📄Layout.astro
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📄404.astro
 ┃ ┃ ┗ 📄index.astro
 ┃ ┗ 📂styles
 ┃ ┃ ┗ 📄global.css
 ┣ 📄.gitignore
 ┣ 📄astro.config.mjs
 ┣ 📄package-lock.json
 ┣ 📄package.json
 ┣ 📄README.md
 ┣ 📄tailwind.config.mjs
 ┗ 📄tsconfig.json
```
