export class LoremIpsumService {
  palavras = [
      'Jelly',
      'beans',
      'toffee',
      'soufflé',
      'donut',
      'cotton',
      'candy',
      'bear',
      'claw',
      'powder',
      'croissant',
      'jelly-o.',
      'Gingerbread',
      'jujubes',
      'canes',
      'jelly-o',
      'gummi',
      'bears',
      'muffin',
      'cheesecake.',
      'Candy',
      'wafer',
      'cupcake',
      'pudding',
      'candy.',
      'Toffee',
      'biscuit',
      'tootsie',
      'roll',
      'dessert',
      'jelly',
      'beans.',
      'Cupcake',
      'tart',
      'chocolate',
      'lollipop',
      'dragée.',
      'Biscuit',
      'fruitcake',
      'dragée',
      'pie.',
      'tiramisu',
      'marzipan',
      'cake',
      'sesame',
      'snaps',
      'oat',
      'cake.',
      'Pastry',
      'bonbon',
      'danish.',
      'macaroon',
      'ice',
      'cream',
      'sugar',
      'plum',
      'biscuit.',
      'Apple',
      'pie',
      'canes.',
      'Lemon',
      'drops',
      'gummies',
      'carrot',
      'gingerbread',
      'apple',
      'toffee.',
      'Shortbread',
      'chupa',
      'chups',
      'jelly.Cheesecake',
      'pastry',
      'sweet',
      'cookie.',
      'Caramels',
      'danish',
      'Ice',
      'halvah',
      'gingerbread.',
      'Oat',
      'bar',
      'liquorice',
      'Dessert',
      'topping',
      'icing',
      'croissant.',
      'Marzipan',
      'halvah.',
      'Croissant',
      'lemon',
      'brownie.',
      'Cookie',
      'fruitcake.',
      'Chocolate',
      'donut.',
      'Pudding',
      'brownie',
      'tiramisu.',
      'Dragée',
      'drops.',
      'macaroon.',
      'Tart'
  ]
  getLoremIpsum = (
    numeroDePalavras : number
    ) => {
      if (numeroDePalavras> 0){
          let j 
          j = 1
          var lorem
          lorem = ''
          while (j <= numeroDePalavras){
              var aleatorio = Math.floor(Math.random() * this.palavras.length);
              lorem += this.palavras[aleatorio]
              if (j!= numeroDePalavras){
              lorem += " "
          }
              j+=1
          }
      return lorem;
      }
      return "invalido"
  };
}
