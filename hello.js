const express = require('express');
const pulsar = require('pulsar-client');
const app = express();

const client = new pulsar.Client({
    serviceUrl: 'pulsar://pulsar-proxy:6650',
});

const producer = await client.createProducer({
    topic: 'my-topic',
});


app.get('/', (req, res) => {
    producer.send({
        data: 'Producer to the rescue!',
    });
    res.send('Hello, DevOps Engineer!');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});