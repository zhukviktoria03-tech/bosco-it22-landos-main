import express from "express"

import setting from "./data/common.json" with {type : 'json'}
import pages from "./data/pages.json" with {type : 'json'}
import cors from 'cors'; 
const app = express();

app.use(cors());                 
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/api/setting', (req,res) =>{
    res.json(setting)
})
app.get('/api/pages', (req, res) => {
    const page = pages.find((p) => p.path === req.query.path)
    if (!page) {
        return res.status(404).json({ error: 'Page not found' })
    }
    res.json(page)
})

app.listen(PORT, () =>{
  console.log(`Server work on http://localhost:${PORT}`);
    
})