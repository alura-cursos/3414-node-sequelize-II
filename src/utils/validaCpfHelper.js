module.exports = (cpf) => {
  if (cpf.length !== 11) return false;
  return true;
};
