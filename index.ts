import express, { Express, Response, Request } from "express";

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send('hello')
})

app.listen(3000, () => console.log('Connected to 3000'))