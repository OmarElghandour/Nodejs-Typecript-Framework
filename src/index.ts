// src/index.ts
import express, {Application} from 'express';
import App from './App';

// import morgan
const port = 3000;

const app = new App(port);


// app.get('/', (req, res) => {
//   res.send('Hello from Express with TypeScript!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
