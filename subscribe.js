const subscription = await client.subscribe({
    topic: 'my-topic',
    subscription: 'my-subscription'
  });
  
  subscription.on('message', (msg) => {
    console.log(`Received message: ${msg.getData()}`);
    subscription.acknowledge(msg);
  });
  