
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/style/style.css";

const foods = [
  {
    name: "Smash Burger",
    category: "BURGER",
    price: 249,
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Italian Pizza",
    category: "PIZZA",
    price: 329,
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo- pizza?auto=format&fit=crop&w=700&q=85".replace(
        "images.unsplash.com/photo- pizza",
        "images.unsplash.com/photo-1513104890138-7c749659a591"
      ),
  },
  {
    name: "Creamy Pasta",
    category: "PASTA",
    price: 279,
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Fresh Salad",
    category: "HEALTHY",
    price: 199,
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85",
  },
];

function Home() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("ALL");

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });
  }, []);

  const addToCart = (food) => {
    setCart((previous) => [...previous, food]);
  };

  const filteredFoods =
    category === "ALL"
      ? foods
      : foods.filter((food) => food.category === category);

  const cartTotal = cart.reduce((sum, food) => sum + food.price, 0);

  return (
    <main>
      <nav className="navbar navbar-expand-lg mj-nav">
        <div className="container">
          <a className="navbar-brand mj-logo" href="#home">
            <span className="logo-icon">
              <i className="bi bi-fire" />
            </span>
            MJ<span>FOOD</span>
            <small>DELIVERY</small>
          </a>

          <button
            className="navbar-toggler nav-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list" />
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <div className="navbar-nav mx-auto nav-links">
              <a className="nav-link" href="#home">Home</a>
              <a className="nav-link" href="#menu">Our Menu</a>
              <a className="nav-link" href="#about">About Us</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>

            <a className="cart-button" href="#menu">
              <i className="bi bi-bag" />
              <span>Cart ({cart.length})</span>
              <b>₹{cartTotal}</b>
            </a>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=85"
        >
          <source src="/food-video.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />
        <div className="hero-grain" />

        <div className="floating-orb orb-one" />
        <div className="floating-orb orb-two" />

        <div className="container hero-container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content" data-aos="fade-up">
                <div className="hero-badge">
                  <span className="live-dot" />
                  FRESHLY MADE. QUICKLY DELIVERED.
                </div>

                <h1>
                  GOOD FOOD.
                  <br />
                  <span>GOOD MOOD.</span>
                  <br />
                  GREAT <i>TASTE.</i>
                </h1>

                <p className="hero-description">
                  Cravings don't wait. Discover bold flavours, fresh
                  ingredients and your favourite meals delivered straight
                  to your door.
                </p>

                <div className="hero-actions">
                  <a className="primary-btn" href="#menu">
                    Explore Menu
                    <i className="bi bi-arrow-up-right" />
                  </a>

                  <a className="video-link" href="#about">
                    <span><i className="bi bi-play-fill" /></span>
                    Discover MJ
                  </a>
                </div>

                <div className="hero-stats">
                  <div>
                    <strong>30<span>min</span></strong>
                    <small>Fast delivery</small>
                  </div>
                  <div className="stat-divider" />
                  <div>
                    <strong>4.9<span>/5</span></strong>
                    <small>Customer rating</small>
                  </div>
                  <div className="stat-divider" />
                  <div>
                    <strong>100<span>%</span></strong>
                    <small>Fresh ingredients</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-side" data-aos="zoom-in" data-aos-delay="250">
                <div className="side-ring" />
                <div className="hero-food-image">
                  <img
                    src={foods[0].image}
                    alt="Fresh juicy burger"
                  />
                </div>
                <div className="floating-label label-top">
                  <span>🔥</span>
                  <div>
                    <b>Chef's Special</b>
                    <small>Made with love</small>
                  </div>
                </div>
                <div className="floating-label label-bottom">
                  <span className="rating-star">★</span>
                  <div>
                    <b>4.9 / 5.0</b>
                    <small>Loved by foodies</small>
                  </div>
                </div>
                <div className="hero-circle-text">TASTE THE DIFFERENCE</div>
              </div>
            </div>
          </div>
        </div>

        <a className="scroll-indicator" href="#menu">
          <span />
          SCROLL TO DISCOVER
        </a>

        <div className="hero-bottom-line">
          <span>FRESH</span> · <span>FLAVOURFUL</span> · <span>FAST</span>
        </div>
      </section>

      <section className="features-strip">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="feature-item">
                <span><i className="bi bi-lightning-charge-fill" /></span>
                <div>
                  <h5>Lightning Fast</h5>
                  <p>Fresh food at your door in 30 minutes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-item">
                <span><i className="bi bi-heart-fill" /></span>
                <div>
                  <h5>Made With Love</h5>
                  <p>Quality ingredients in every single bite.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-item">
                <span><i className="bi bi-shield-check" /></span>
                <div>
                  <h5>Safe & Fresh</h5>
                  <p>Carefully packed, freshly prepared meals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span className="eyebrow">MADE FOR YOUR CRAVINGS</span>
            <h2>OUR <span>FAVOURITES.</span></h2>
            <p>Big flavours. Fresh ingredients. Unforgettable bites.</p>
          </div>

          <div className="category-list" data-aos="fade-up">
            {["ALL", "BURGER", "PIZZA", "PASTA", "HEALTHY"].map((item) => (
              <button
                key={item}
                className={category === item ? "category active" : "category"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {filteredFoods.map((food, index) => (
              <div
                className="col-sm-6 col-lg-3"
                key={food.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <article className="food-card">
                  <div className="food-image">
                    <img src={food.image} alt={food.name} loading="lazy" />
                    <span className="food-category">{food.category}</span>
                    <span className="food-rating">
                      <i className="bi bi-star-fill" /> {food.rating}
                    </span>
                  </div>
                  <div className="food-details">
                    <h4>{food.name}</h4>
                    <p>Freshly prepared, packed with flavour.</p>
                    <div className="food-bottom">
                      <strong>₹{food.price}</strong>
                      <button
                        className="add-button"
                        onClick={() => addToCart(food)}
                        aria-label={`Add ${food.name} to cart`}
                      >
                        <i className="bi bi-plus-lg" />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="cart-summary" data-aos="fade-up">
            <div>
              <i className="bi bi-bag-check-fill" />
              <span>{cart.length} items in your cart</span>
            </div>
            <strong>Total: ₹{cartTotal}</strong>
            <button
              className="checkout-btn"
              onClick={() =>
                alert(
                  cart.length
                    ? `Your demo cart total is ₹${cartTotal}. Connect a checkout service to accept orders.`
                    : "Add some delicious food to your cart first!"
                )
              }
            >
              Order Now <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85"
                  alt="Fresh food being prepared in a kitchen"
                  loading="lazy"
                />
                <div className="about-stamp">
                  <i className="bi bi-heart-fill" />
                  <b>MADE FRESH</b>
                  <small>EVERY SINGLE DAY</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <span className="eyebrow">MORE THAN JUST FOOD</span>
              <h2 className="about-title">
                WE MAKE
                <br />
                <span>HAPPY MOMENTS.</span>
              </h2>
              <p className="about-copy">
                At MJ Food Delivery, we believe great food brings people
                together. From comfort-food classics to exciting new
                flavours, every meal is an opportunity to make your day
                a little better.
              </p>
              <a href="#menu" className="primary-btn">
                Find Your Favourite <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact" data-aos="zoom-in">
        <div className="container">
          <span className="eyebrow">YOUR NEXT FAVOURITE MEAL AWAITS</span>
          <h2>HUNGRY? LET'S <span>FIX THAT.</span></h2>
          <p>Skip the cooking. Keep the happiness.</p>
          <a href="#menu" className="primary-btn">
            Order Something Amazing <i className="bi bi-arrow-up-right" />
          </a>
        </div>
      </section>

      <footer className="mj-footer">
        <div className="container footer-inner">
          <a className="navbar-brand mj-logo" href="#home">
            <span className="logo-icon"><i className="bi bi-fire" /></span>
            MJ<span>FOOD</span><small>DELIVERY</small>
          </a>
          <p>Good food. Good mood. © {new Date().getFullYear()} MJ Food.</p>
          <a href="#home" className="back-top">
            Back to top <i className="bi bi-arrow-up" />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default Home;
