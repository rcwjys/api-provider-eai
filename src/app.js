import { getPetByStatus } from './ProvideData/ProvideData.js';
import { router } from './routes/routes.js';
import { notFound } from './ErorrHandler/NotFound.js';

import express from 'express';

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);

app.use(notFound);


app.listen(3000);