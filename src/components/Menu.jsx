import { useState } from 'react';
import './Menu.css';
import signatureCoffee from '../assets/images/signature-coffee.jpg';
import pastries from '../assets/images/pastries.jpg';
import brunchDish from '../assets/images/brunch-dish.jpg';

const menuCategories = [
  {
    id: 'coffee',
    name: 'Signature Coffees',
    icon: '☕',
    image: signatureCoffee,
    items: [
      { name: 'Olive Oil Latte', price: '$7.50', desc: 'Espresso, steamed milk, house-infused olive oil, hint of vanilla', tag: 'Signature' },
      { name: 'Mediterranean Mocha', price: '$8.00', desc: 'Dark chocolate, espresso, cardamom, orange zest foam' },
      { name: 'Golden Hour Cappuccino', price: '$6.50', desc: 'Double shot, turmeric-infused milk, honey drizzle' },
      { name: 'Cold Brew Reserve', price: '$7.00', desc: '24-hour steeped single origin, served on ice with citrus', tag: 'Popular' },
    ],
  },
  {
    id: 'pastries',
    name: 'Artisan Pastries',
    icon: '🥐',
    image: pastries,
    items: [
      { name: 'Pistachio Croissant', price: '$5.50', desc: 'Flaky butter croissant, pistachio cream, crushed pistachios', tag: 'Best Seller' },
      { name: 'Olive Oil Cake', price: '$6.00', desc: 'Moist citrus cake, Arbequina olive oil, powdered sugar' },
      { name: 'Za\'atar Focaccia', price: '$4.50', desc: 'Fresh-baked with herbs, sea salt, and premium olive oil' },
      { name: 'Lavender Scone', price: '$4.00', desc: 'Delicate French lavender, lemon glaze, cream on the side' },
    ],
  },
  {
    id: 'brunch',
    name: 'Brunch Collection',
    icon: '🍳',
    image: brunchDish,
    items: [
      { name: 'The Olive Garden Bowl', price: '$16.00', desc: 'Poached eggs, avocado, halloumi, olive tapenade, sourdough', tag: 'Chef\'s Pick' },
      { name: 'Shakshuka Royale', price: '$14.50', desc: 'Heritage tomatoes, eggs, feta, herbs, grilled bread' },
      { name: 'Smoked Salmon Benedict', price: '$17.00', desc: 'House-cured salmon, hollandaise, capers, brioche' },
      { name: 'Truffle Scramble', price: '$15.00', desc: 'Free-range eggs, truffle oil, gruyère, micro herbs' },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const active = menuCategories.find((c) => c.id === activeCategory);

  return (
    <section id="menu" className="menu">
      <div className="menu__bg-accent"></div>
      <div className="menu__bg-mesh"></div>
      <div className="section-container">
        <div className="menu__header">
          <span className="menu__label">Curated Selection</span>
          <h2 className="menu__title">Our Menu</h2>
          <p className="menu__subtitle">
            Each dish and drink is a testament to our commitment to quality,
            crafted from locally-sourced organic ingredients.
          </p>
        </div>

        <div className="menu__tabs">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              className={`menu__tab ${activeCategory === cat.id ? 'menu__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="menu__tab-icon">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="menu__content">
          <div className="menu__image-wrapper">
            <div className="menu__image-frame glass">
              <img src={active.image} alt={active.name} className="menu__image" />
              <div className="menu__image-overlay">
                <span className="menu__image-label">{active.name}</span>
              </div>
              {/* Decorative corner accents */}
              <div className="menu__image-corner menu__image-corner--tl"></div>
              <div className="menu__image-corner menu__image-corner--br"></div>
            </div>
          </div>

          <div className="menu__items">
            {active.items.map((item, index) => (
              <div
                key={item.name}
                className="menu__item glass"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="menu__item-accent"></div>
                <div className="menu__item-header">
                  <div className="menu__item-info">
                    <h3 className="menu__item-name">
                      {item.name}
                      {item.tag && <span className="menu__item-tag">{item.tag}</span>}
                    </h3>
                    <p className="menu__item-desc">{item.desc}</p>
                  </div>
                  <span className="menu__item-price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
