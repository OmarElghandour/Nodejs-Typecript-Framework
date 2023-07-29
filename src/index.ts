// src/index.ts
import express, {Application} from 'express';
import App from './App';

// import morgan
const port = 3000;

const app = new App(port);


