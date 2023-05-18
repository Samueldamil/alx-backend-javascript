const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalcost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalcost}`);
};

module.exports = sendPaymentRequestToApi;
