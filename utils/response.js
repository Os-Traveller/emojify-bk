function response({ error, msg, data }) {
  if (error) return { okay: false, msg, data };
  return { okay: true, msg, data };
}

module.exports = response;
