const pulsar = require('pulsar-client');

const client = new pulsar.Client({
    serviceUrl: 'pulsar://pulsar-proxy:6650',
});

const consumer = await client.subscribe({
    topic: 'my-topic',
    subscription: 'my-subscription',
    subscriptionType: 'Exclusive',
});

consumer.on('message', (msg) => {
    console.log(msg.getData().toString());
    consumer.acknowledge(msg);
});

