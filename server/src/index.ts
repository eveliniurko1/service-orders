import express from 'express';
import { Request, Response } from 'express';
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors())
const User = require('./models/users');
const Clients = require('./models/clients');
const OrderService = require('./models/orders');

app.post('/register/client', async (req, res) => {
    try {
        const client = await Clients.create(req.body);
        return res.send({ client });
    } catch (err) {
        return res.status(400).send({ error: 'Failed' });
    }
})

app.post('/register/order', async (req: Request, res: Response) => {
    try {
        const order = await OrderService.create(req.body);
        return res.send({ order });
    } catch (err) {
        return res.status(400).send({ error: 'Failed' });
    }
})

app.get('/orders', async (req: Request, res: Response) => {
    const orders = await OrderService.find();
    return res.send({ orders });
})

app.get('/orders/:id', async (req: Request, res: Response) => {
    const orders = await OrderService.find({ user: req.params.id });
    return res.send({ orders });
})

app.delete('/client/:id', async (req: Request, res: Response) => {
    try {
        await Clients.deleteOne({ _id: req.params.id });
        return res.send("ok");
    } catch (err) {
        return res.send({ error: 'Failed' });
    }
})

app.delete('/order/:id', async (req: Request, res: Response) => {
    try {
        await OrderService.deleteOne({ _id: req.params.id });
        return res.send("ok");
    } catch (err) {
        return res.send({ error: 'Failed' });
    }
})

app.put('/order/:id', async (req: Request, res: Response) => {
    try {
        await OrderService.findByIdAndUpdate({ _id: req.params.id });
        return res.send("ok");
    } catch (err) {
        return res.send({ error: 'Failed' });
    }

})
app.listen(3333);