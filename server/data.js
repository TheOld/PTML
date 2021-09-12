const data = [
  { PartNumber: '1111-Invoice', Description: 'Invoice line' },
  { PartNumber: '1234-abcd', Description: 'Test Part Number' },
  { PartNumber: '9999-charge', Description: 'Stealth charge added for rude customers' },
];

function getData() {
  return data;
}

function getMatchingParts() {
  return [
    { PartNumber: '1234-asdf', Description: 'Discombobulator' },
    { PartNumber: '9876-1234', Description: 'Piston return springs ' },
    { PartNumber: '3142-q1w2e3', Description: 'Dipstick Extender' },
  ];
}

module.exports = {
  getData,
  getMatchingParts,
};
