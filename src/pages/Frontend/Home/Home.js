import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import AdsByCategory from "../AdsRoutes/byCategory";
import { useNavigate } from "react-router-dom";
const { Panel } = Collapse;

const navItems = [
  "All categories ▼",
  "Mobile Phones",
  "Cars",
  "Motorcycles",
  "Houses",
  "Video-Audios",
  "Tablets",
  "Land & Plots"
];

export default function HomePage() {
  const categories = [
    {
      image: "https://w7.pngwing.com/pngs/448/578/png-transparent-pizza-margherita-italian-cuisine-chicago-style-pizza-pepperoni-pizza-thumbnail.png",
      caption: "Pizza",
      url: "Pizza"
    },
    {
      image: "https://img.freepik.com/free-photo/delicious-burguer-isolated-white-background_125540-3368.jpg",
      caption: "Burger",
      url: "Burger"
    },
    {
      image: "https://thumbs.dreamstime.com/b/chocolate-logo-design-vector-illustration-chocolate-logo-design-vector-illustration-creative-chocolate-logo-design-concept-245526497.jpg",
      caption: "Chocolate",
      url: "Chocolate"
    },
    {
      image: "https://png.pngtree.com/png-clipart/20230411/original/pngtree-ice-cream-dessert-realistic-white-background-transparent-png-image_9047252.png",
      caption: "Ice Cream",
      url: "IceCream"
    },
    {
      image: "https://e7.pngegg.com/pngimages/54/394/png-clipart-variety-of-fruits-in-basket-basket-of-fruit-food-gift-baskets-hamper-fruit-miscellaneous-natural-foods.png",
      caption: "Fruits",
      url: "Fruits"
    },
    {
      image: "https://img.freepik.com/free-psd/fresh-groceries-vegetables-isolated-transparent-background_84443-1275.jpg",
      caption: "Vegetables",
      url: "Vegetables"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrG3_HT4Jlv-azo3ZiMbn3eUUFwM0t9pVPWg&s",
      caption: "Seafood",
      url: "Seafood"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5g1gt61rs0hc9QFUQ5c9GeBlCBHAHEJePg&s",
      caption: "Desserts",
      url: "Desserts"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNPZNy9KneA1AN4gjTlDfHO0XVs9cIzw9NAQ&s",
      caption: "Drinks",
      url: "Drinks"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_o3uizv8gNRyp-YgoRL3z_EWDA3U5MHPVw&s",
      caption: "Snacks",
      url: "Snacks"
    },
    {
      image: "https://img.freepik.com/free-psd/top-view-keto-diet-dish-still-life_23-2150634215.jpg",
      caption: "Healthy Meals",
      url: "HealthyMeals"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBZswgyPtSPH-UsJaoinuqjv-nMxEQObuaA&s",
      caption: "Sandwiches",
      url: "Sandwiches"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdegxthcQytVVzjXDkS6oNJbczfxcSzSu9kg&s",
      caption: "Salads",
      url: "Salads"
    },
  ];
  

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 600);

  // Function to calculate and update screen width state
  const calculateWidth = () => {
      setIsLargeScreen(window.innerWidth > 600);
  };

  const navigate = useNavigate()

  // Effect to add event listener for window resize
  useEffect(() => {
      window.addEventListener('resize', calculateWidth);
      return () => {
          window.removeEventListener('resize', calculateWidth); // Cleanup on unmount
      };
  }, []);

  return (
    <main>
      <hr className="mt-0 pt-0"/>
      <div className="container">
      {isLargeScreen ? (
                <ul className="horizontal-list mb-4" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {navItems.map((item, index) => (
                        <li key={index} style={{ fontSize:"13px", marginRight: '25px', display: 'inline' }} className="hov my-2">
                            {item}
                        </li>
                    ))}
                </ul>
            ) : (
                <Collapse defaultActiveKey={['1']} style={{ marginBottom: '20px' }}>
                    <Panel header="Categories" key="1">
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            {navItems.map((item, index) => (
                                <li key={index} style={{ marginBottom: '10px' }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Panel>
                </Collapse>
            )}
      </div>
      {/*END OF 2nd NAVBAR */}
      <div className="my-3 container">
        {/*Carousel section*/}
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://res.cloudinary.com/dobrs3wqw/image/upload/v1730625601/CHICKEN_WRAP_khvi3y.png"
                className="d-block w-100"
                alt="..."
                height={200}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://res.cloudinary.com/dobrs3wqw/image/upload/v1730625601/CHICKEN_WRAP_khvi3y.png"
                className="d-block w-100"
                height={200}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/*Carousel END*/}
      </div>
      <div className="container">
        <section className="categories">
          <h5>All Categories</h5>
          <div className="categories-container">
            {categories.map((category, index) => (
              <div className="category-item" key={index}>
                <img
                  style={{cursor:"pointer"}}
                  src={category.image}
                  alt={category.caption}
                  className="category-image"
                  onClick={()=>{navigate(`/all/${category.url}`)}}
                />
                <p className="category-caption">{category.caption}</p>
              </div>
            ))}
          </div>
        </section>
        <AdsByCategory category="Burger" />
        <AdsByCategory category="Desserts" />
      </div>
    </main>
  );
}
