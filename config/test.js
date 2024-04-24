module.exports = {
  test: {
    path: '/status',
    method: 'GET',
    action: (route_name, objects, req, res) => {
      res.send('alive');
    }
  }
};
