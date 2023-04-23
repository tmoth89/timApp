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
    const producer = await createProducer();
    producer.send({
        data: 'Producer to the rescue!',
    });
    res.send('Hello, DevOps Engineer.');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});