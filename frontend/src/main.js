
import './styles/base.css';
import { getSettings, getPage } from "./api.js";
// import { hero } from './blocks/hero.js'
import { renderBlocks } from './renderBlocks.js';

async function start() {
  const app = document.querySelector("#app")
  try {
    const [setting, page] = await Promise.all([
      getSettings(),
      getPage(location.pathname)
    ])
    document.title = `${page.title} - ${setting.siteName}`

    // const heroBlock = page.blocks.find((bl) => bl.type === 'hero')
    // app.innerHTML = hero(heroBlock)

    app.innerHTML = `<main>${renderBlocks(page.blocks)}</main>`

  } catch (error) {
    app.textContent = `Error ${error.message}`
  }
}

start()