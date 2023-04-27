const express = require('express');
const pulsar = require('pulsar-client');
const app = express();

const client = new pulsar.Client({
    serviceUrl: 'pulsar://pulsar-proxy:6650',
});

async function createProducer() {
    const producer = await client.createProducer({
        topic: 'my-topic',
    });
    return producer;
}

app.get('/', async (req, res) => {
    try {
        const producer = await createProducer();
        await producer.send({
            data: 'Producer to the Rescue!',
        });
        res.send('Hello, Devops Engineer!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to send message.');
    }
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
