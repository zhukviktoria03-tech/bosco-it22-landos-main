
import {hero} from "./blocks/hero.js";

const renders = {hero};

export function renderBlocks(blocks){
    return blocks.map((block)=>{
        const render = renderers[block.type]

        if (!render){
            console.warn(`no block ${block.type}`);
            return '';
        }
        return render

    })
}