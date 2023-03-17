export default eventHandler((event) => {
  return ['/test', event.req.method];
});
