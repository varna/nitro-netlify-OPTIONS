export default eventHandler((event) => {
  return ['/any', event.req.method];
});
