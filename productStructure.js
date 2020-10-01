const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]



const productStructure = () => products.reduce((previous, product) => {
  const [color, size] = product.split("-")

  if (!previous[color]) {
    previous[color] = {}
  }
  previous[color][size] = previous[color][size] + 1 || 1

  return previous
}, {})

module.exports = productStructure

console.log(productStructure())
