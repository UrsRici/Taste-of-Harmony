-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gazdă: 127.0.0.1
-- Timp de generare: apr. 18, 2024 la 03:01 PM
-- Versiune server: 10.4.32-MariaDB
-- Versiune PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Bază de date: `restaurant`
--

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`) VALUES
(1, 'Breakfast', 'breakfast.jpg'),
(2, 'Soups', 'soup.jpg'),
(3, 'Drinks', 'drinks.jpg'),
(4, 'Pizza', 'pizza.jpg'),
(5, 'Meat', 'meat.jpg'),
(6, 'Pasta', 'pasta.jpg'),
(7, 'Salads', 'salads.jpg'),
(8, 'Desserts', 'desserts.jpg'),
(9, 'Sides', 'sides.jpg');

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` decimal(4,2) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `products`
--

INSERT INTO `products` (`id`, `name`, `category_id`, `price`, `description`, `image`) VALUES
(1, 'Avocado Toast ', 1, 23.00, 'toast with avocado, poached egg, smoked salmon/bacon, feta and salad mix (330 gr) ', 'avo-toast.jpg'),
(2, 'Chia Pudding ', 1, 18.00, 'chia pudding with soy milk, granola, berries, nut butter and maple syrup (220gr)', 'chia.jpg'),
(3, 'Buffalo Chicken Wrap ', 1, 20.00, 'whole wheat tortilla, with cooked chicken,  avocado, cheddar cheese, romaine lettuce and Bolthouse Ranch Dressing (350gr) ', 'chickenWrap.jpg'),
(4, 'Vegan Porridge ', 1, 15.00, 'homemade oatmeal porridge with coconut milk, Fresh fruit, Nuts and seeds, Shredded coconut and honey (220 gr)', 'porridge.jpg'),
(5, 'English Breakfast ', 1, 38.00, 'eggs , bacon, sausages, , tomatoes, mushrooms, toast and beans (400 gr)', 'englishbreakfast.jpg'),
(6, 'Tomato Bruschetta ', 1, 16.00, 'bruschetta with tomatoes, mozzarella, basil (200 gr)', 'bruscheta.jpg'),
(7, 'Goulash soup', 2, 32.00, 'Soup with beef cubes, potatoes, onions, caraway seeds and paprika, served with mayo bread (400 gr)', 'gulas.jpg'),
(8, 'Tripe soup ', 2, 34.00, 'beef belly, sour cream, peppers, carrots, spices (360 gr)', 'ciorbaburta.jpg'),
(9, 'Vegetable soup ', 2, 27.00, 'vegetables, spices (350 gr)', 'vegetablesoup.jpg'),
(10, 'Vegetable cream soup ', 2, 29.00, 'carrot, celery, mushrooms, peas, onion, croutons ( 320 gr)', 'creamyvsoup.jpg'),
(11, 'Cream of broccoli soup ', 2, 25.00, 'frozen broccoli, garlic, potatoes, smoked salmon, toasted bread (370 gr)', 'brocolicream.jpg'),
(12, 'Tomato Cream Soup', 2, 22.00, 'peeled tomatoes, vegetable cream, mozzarella, carrot, celery, onion, sugar, basil, croutons (450 gr)', 'tomatosoup.jpg'),
(13, 'Cappucino', 3, 9.00, '(75 ml)', 'capucino.jpg'),
(14, 'Flat White  ', 3, 11.00, '(160 ml)', 'flatwhite.jpg'),
(15, 'Classic  Mint Lemonade  ', 3, 16.00, 'lemon juice, sugar syrup, water,mint (400 ml)', 'mintlemonade.jpg'),
(16, 'Raspberry Lemonade ', 3, 17.00, 'lemon juice, raspberry puree, sugar, water (400 ml)', 'raspberrylemonade.jpg'),
(17, 'Fresh Orange Juice ', 3, 13.00, '(250 ml)', 'freshorange.jpg'),
(18, 'Cola', 3, 7.00, '(250 ml)', 'cola.jpg'),
(19, 'Pizza Margherita ', 4, 29.00, 'pizza dough, pizza sauce, mozzarella, spices (490 gr)', 'margherita.jpg'),
(20, 'Pizza Prosciutto Funghi ', 4, 33.00, 'pizza dough, pizza sauce, ham, mushrooms, mozzarella, spices (660 gr)', 'funghipizza.jpg'),
(21, 'Pizza Quattro Stagioni ', 4, 37.00, 'pizza dough, pizza sauce, ham, mushrooms, salami, bell pepper, mozzarella, spices (770 gr)', 'quatrostagioni.jpg'),
(22, 'Pizza Quattro Formaggi ', 4, 35.00, 'pizza dough, pizza sauce, cheese, parmesan, gorgonzola, spices (620 gr)', 'quattroformaggi.jpg'),
(23, 'Pizza Diavolla ', 4, 38.00, 'pizza dough, pizza sauce, spicy salami, hot peppers, mozzarella ( 770 gr)', 'diavolla.jpg'),
(24, 'Pizza Mexicana', 4, 37.00, 'pizza dough, pizza sauce, ham, mushrooms, hot peppers, corn, onion, mozzarella, spices (760 gr)', 'mexicanpizza.jpg'),
(25, 'Chicken breast with mushrooms and spices ', 5, 36.00, 'chicken breast, mushrooms, vegetable cream  thyme, rosemary, oregano, Dijon mustard (480 gr)', 'chickenmushrooms.jpg'),
(26, 'Crispy Chicken Burger', 5, 42.00, 'bun, cocktail sauce, crispy chicken, tomato, cucumber 50g, salad, fried potatoes (650gr)', 'crispyburger.jpg'),
(27, 'Garlic Rosemary Pork Tenderloin ', 5, 48.00, 'pork tenderloin , barbecue sauce, rosemary, garlic (550 gr)', 'rosemarypork.jpg'),
(28, 'Viennese schnitzel ', 5, 62.00, 'beef tenderloin, lemon, breadcrumbs, flour, egg, spices(280gr)', 'schnitzel.jpg'),
(29, 'Browned Duck Leg', 5, 44.00, 'duck leg, spices (250 gr)', 'duckleg.jpg'),
(30, 'Classic Steak with Creamy Mushroom Sauce and Green Beans ', 5, 70.00, 'beef tenderloin, green beans, carrots, tomato sauce, mushrooms, vegetable cream, garlic, parsley, white wine, spices (650 gr)', 'steackbeans.jpg'),
(31, 'Pasta Quattro Formaggi ', 6, 38.00, 'pasta, vegetable cream, gorgonzola, parmesan, smoked cheese (350gr)', 'pasta4formaggi.jpg'),
(32, 'Pasta Carbonara ', 6, 37.00, 'pasta, parmesan cheese, pancetta, bacon, egg (380gr)', 'carbonara.jpg'),
(33, 'Spinach Fettuccine Alfredo ', 6, 35.00, 'fettuccine pasta, heavy cream, Parmesan cheese, cups fresh spinach leaves, chopped, garlic (350gr)', 'alfredo.jpg'),
(34, 'Tagliatelle with shrimp , zucchini and cherry tomatoes ', 6, 39.00, 'tagliatelle, shrimp, zucchini, cherry tomatoes, vegetable cream, white wine (470 gr)', 'zucchini.jpg'),
(35, 'Spaghetti Nero with Seafood ', 6, 52.00, 'spaghetti with cuttlefish ink, seafood, mussels, tomato sauce, cherry tomatoes, white wine, garlic (480 gr)', 'neroseafood.jpg'),
(36, 'Lasagna', 6, 32.00, 'box lasagna noodles, ground beef, ricotta cheese, mozzarella cheese, shredded, tomato sauce, garlic, italian seasoning blend (450 gr)', 'lasagna.jpg'),
(37, 'Caesar salad ', 7, 42.00, 'green salad , chicken breast, bacon , tomatoes , egg, grana , caesar sauce , balsamic vinegar, croutons (550 gr)', 'caesarsalad.jpg'),
(38, 'Duck salad', 7, 35.00, 'A mixture of lettuce ,duck confit ,Gorgonzola ,pears and tomatoes  (350 gr)', 'ducksalad.jpg'),
(39, 'Greek salad', 7, 39.00, 'A mixture of tomatoes , cucumbers , onions , peppers, olives served with feta cheese , dressed with a specific sauce of olive oil and lemon juice and seasoned with oregano in the Mediterranean style. (300 gr)', 'greeksalad.jpg'),
(40, 'Seafood Salad ', 7, 49.00, 'seafood mix, iceberg lettuce, avocado, cherry tomatoes, arugula, butter, garlic (500 gr)', 'seafoodsalad.jpg'),
(41, 'Buffalo Bleu Salad ', 7, 37.00, 'iceberg & romaine lettuce blend, grilled buffalo chicken, diced tomatoes, banana peppers, bleu cheese, tri-color tortilla strips, dressed with creamy bleu cheese (480 gr)', 'buffalosalad.jpg'),
(42, 'Mediterranean Tuna Salad ', 7, 48.00, 'tuna , lettuce, red grape tomatoes, small red onion, Lebanese cucumber, green capsicum, feta, kalamata olives, oregano,red wine vinegar,crusty bread, to serve', 'tunasalad.jpg'),
(43, 'Lava Cake with Vanilla Ice Cream', 8, 23.00, 'chocolate, vanilla ice cream, whipped cream, sugar (250 gr)', 'lavacake.jpg'),
(44, 'Cheesecake with berries ', 8, 21.00, 'raspberries, cream cheese, biscuits, mascarpone, whipped cream, sugar, butter (160 gr)', 'cheesecake.jpg'),
(45, 'Tiramisu', 8, 25.00, 'mascarpone, Ladyfinger sponges, espresso, eggs, cocoa powder, vanilla (150 gr)', 'tiramisu.jpg'),
(46, 'Brownie', 8, 19.00, 'Negresa with cocoa powder , peanut butter\r\nand berries, served with fruit sorbet (150 gr)\r\n', 'brownie.jpg'),
(47, 'Raspberry-Filled Chocolate Mousse Cake ', 8, 24.00, 'raspberries, cocoa powder, heavy cream, powdered sugar (170 gr)', 'mousse.jpg'),
(48, 'Mini Pavlovas ', 8, 24.00, 'fresh fruits , vanilla (220 gr)', 'pavlova.jpg'),
(49, 'Potato Wedges', 9, 11.00, '(200 gr)', 'wedges.jpg'),
(50, 'Potato Dippers', 9, 12.00, '(220 gr)', 'dippers.jpg'),
(51, 'Mashed potatoes', 9, 8.00, 'garlic (220 gr)', 'mashpot.jpg'),
(52, 'Grilled vegetables', 9, 13.00, '( 220 gr)', 'grillveg.jpg'),
(53, 'Rice with vegetables', 9, 11.00, ' (220 gr)', 'ricev.jpg'),
(54, 'White rice with butter and parmesan', 9, 12.00, '( 240 gr)', 'ricebutter.jpg');

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `message` varchar(255) NOT NULL,
  `persons` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `reservations`
--

INSERT INTO `reservations` (`id`, `user_id`, `phone`, `date`, `time`, `message`, `persons`) VALUES
(1, 2, '0770115810', '2024-05-01', '17:00:00', 'YEEE', 10),
(2, 1, '0770123456', '2024-05-01', '17:00:00', 'Zi de nastere', 10),
(3, 1, '0123456789', '2024-04-19', '13:00:00', '', 6),
(4, 1, '0123456789', '2024-04-19', '12:00:00', '', 2),
(5, 1, '0123456789', '2024-04-20', '10:00:00', 'dap', 10),
(6, 27, '0770115810', '2024-05-01', '12:00:00', '', 6);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `reservations_tables`
--

CREATE TABLE `reservations_tables` (
  `id` int(11) NOT NULL,
  `reservations_id` int(11) NOT NULL,
  `tables_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `reservations_tables`
--

INSERT INTO `reservations_tables` (`id`, `reservations_id`, `tables_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 3, 1),
(12, 3, 2),
(13, 3, 3),
(14, 4, 1),
(15, 5, 1),
(16, 5, 2),
(17, 5, 3),
(18, 5, 4),
(19, 5, 5),
(20, 6, 1),
(21, 6, 2),
(22, 6, 3);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `tables`
--

CREATE TABLE `tables` (
  `id` int(11) NOT NULL,
  `capacity` int(20) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `tables`
--

INSERT INTO `tables` (`id`, `capacity`) VALUES
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(5, 2),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10, 2);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) NOT NULL DEFAULT 'basic'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'Andreea', 'andreea@gmil.com', '$2y$10$geasMt86OYfYajG5PyATK.xfyKCzrZQmC0T9AMx8FqTay9hEdLnqC', 'admin'),
(2, 'Rici', 'rici@gmail.com', '$2y$10$.iAYwfK75FVJnohe1GXsdepuUCAmqJ/EwjZFTr5q8jzTz4Jo87mkK', 'basic'),
(3, 'Geo', 'geo@email.com', '$2y$10$WV/EXHobiFWHf0Ou/vkdDuhITZL7bW49.B1PHSr8xNFYOD/LXRYXe', 'basic'),
(26, 'Bia', 'bia@gmail.com', '$2y$10$9mlFT5MqXz4Zyzqep00NQ.XfIGqPolfU5uj6yJS6l.u1GIxMOpnEG', 'basic'),
(27, 'admin', 'admin', '$2y$10$v.witPFeOq.3eVWJftp.QenJMf1HEWfmtRZWMPRqYKHs.TcivANpW', 'admin'),
(28, 'Richard', 'ursrici.ru@gmail.com', '$2y$10$2HOAeRaap1DJHdzn74cpCejTxH0c1EobE8KUg9RJBkNzAv6/NySu2', 'admin');

--
-- Indexuri pentru tabele eliminate
--

--
-- Indexuri pentru tabele `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexuri pentru tabele `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category` (`category_id`);

--
-- Indexuri pentru tabele `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reservations_user` (`user_id`);

--
-- Indexuri pentru tabele `reservations_tables`
--
ALTER TABLE `reservations_tables`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reservations` (`reservations_id`),
  ADD KEY `tables` (`tables_id`);

--
-- Indexuri pentru tabele `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`);

--
-- Indexuri pentru tabele `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pentru tabele eliminate
--

--
-- AUTO_INCREMENT pentru tabele `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pentru tabele `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT pentru tabele `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pentru tabele `reservations_tables`
--
ALTER TABLE `reservations_tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pentru tabele `tables`
--
ALTER TABLE `tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pentru tabele `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constrângeri pentru tabele eliminate
--

--
-- Constrângeri pentru tabele `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constrângeri pentru tabele `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constrângeri pentru tabele `reservations_tables`
--
ALTER TABLE `reservations_tables`
  ADD CONSTRAINT `reservations` FOREIGN KEY (`reservations_id`) REFERENCES `reservations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tables` FOREIGN KEY (`tables_id`) REFERENCES `tables` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
