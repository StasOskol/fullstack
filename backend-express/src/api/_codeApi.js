import { createRequire } from "module";
const require = createRequire(import.meta.url);

export const dataApiCoder = (app) => {

    app.post('/api/coder', (req, res) => {
        let str = req.body;

        console.log(str);
    })
}