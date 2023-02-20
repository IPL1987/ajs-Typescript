import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Moovie from '../domain/Moovie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add correct items', () => {
  const cart = new Cart();
  cart.add(new Moovie(1012, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./02:17', 500));
  const pattern = [{ id: 1012, name: 'Мстители', originName: 'The Avengers', year: 2012, counry: 'США', slogan: 'Avengers Assemble!', style: ['фантастика', 'боевик', 'фэнтези', 'приключения'], time: '137 мин./02:17', price: 500 }];
  expect(cart.items).toEqual(pattern);
});

test('correct sum without discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Moovie(1012, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./02:17', 500));
  expect(cart.sum()).toBe(3400);
});

test('correct sum with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Moovie(1012, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./02:17', 500));
  expect(cart.discountSum(10)).toBe(3060);
})

test('deleting of item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Moovie(1012, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./02:17', 500));
  cart.deleteItem(1012);

  const result = [{ id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225 },
  { id: 1012, name: 'Мстители', originName: 'The Avengers', year: 2012, counry: 'США', slogan: 'Avengers Assemble!', style: ['фантастика', 'боевик', 'фэнтези', 'приключения'], time: '137 мин./02:17', price: 500 }
  ];
  const pattern = [{ id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225 },
  { id: 1012, name: 'Мстители', originName: 'The Avengers', year: 2012, counry: 'США', slogan: 'Avengers Assemble!', style: ['фантастика', 'боевик', 'фэнтези', 'приключения'], time: '137 мин./02:17', price: 500 }
  ];
  expect(result).toEqual(pattern);
});
