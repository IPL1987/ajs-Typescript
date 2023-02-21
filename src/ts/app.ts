import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Moovie from './domain/Moovie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Moovie(1012, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик','фэнтези','приключения'], '137 мин./02:17', 500));

console.log(cart.items);
