import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";

const cardData = {
  forBuy: [
    {
      id: 1,
      slug: "nunc-convallis-sempre-justo-qui-tempor-forBuy",
      name: "Nunc convallis semper justo qui tempor",
      price: "$40,533",
      imgSrc: "https://i.ibb.co/1Kttxqw/Rectangle-11.png",
    },
    {
      id: 2,
      slug: "nunc-convallis-sempre-justo-qui-tempor",
      name: "Nunc convallis semper justo qui tempor",
      price: "$40,533",
      imgSrc: "https://i.ibb.co/1Kttxqw/Rectangle-11.png",
    },
    {
      id: 2,
      slug: "nunc-convallis-sempre-justo-qui-tempor",
      name: "Nunc convallis semper justo qui tempor",
      price: "$40,533",
      imgSrc: "https://i.ibb.co/1Kttxqw/Rectangle-11.png",
    },
    {
      id: 2,
      slug: "nunc-convallis-sempre-justo-qui-tempor",
      name: "Nunc convallis semper justo qui tempor",
      price: "$40,533",
      imgSrc: "https://i.ibb.co/1Kttxqw/Rectangle-11.png",
    },
    // Additional cards
  ],
  forSell: [
    {
      id: 3,
      slug: "nunc-convallis-sempre-justo-qui-tempor",
      name: "Nunc convallis semper justo qui tempor",
      price: "$40,533",
      imgSrc: "https://i.ibb.co/1Kttxqw/Rectangle-11.png",
    },
    {
      id: 4,
      slug: "nunc-convallis-sempre-justo-qui-tempor",
      name: "Nunc convallis semper justo qui tempor",
      price: "$40,533",
      imgSrc: "https://i.ibb.co/1Kttxqw/Rectangle-11.png",
    },
    {
      id: 4,
      slug: "nunc-convallis-sempre-justo-qui-tempor",
      name: "Nunc convallis semper justo qui tempor",
      price: "$40,533",
      imgSrc: "https://i.ibb.co/1Kttxqw/Rectangle-11.png",
    },
    {
      id: 4,
      slug: "nunc-convallis-sempre-justo-qui-tempor",
      name: "Nunc convallis semper justo qui tempor",
      price: "$40,533",
      imgSrc: "https://i.ibb.co/1Kttxqw/Rectangle-11.png",
    },
    {
      id: 4,
      slug: "nunc-convallis-sempre-justo-qui-tempor",
      name: "Nunc convallis semper justo qui tempor",
      price: "$40,533",
      imgSrc: "https://i.ibb.co/1Kttxqw/Rectangle-11.png",
    },
    // Additional cards
  ],
  forRent: [
    {
      id: 5,
      slug: "nunc-convallis-sempre-justo-qui-tempor",
      name: "Nunc convallis semper justo qui tempor",
      price: "$40,533",
      imgSrc: "https://i.ibb.co/1Kttxqw/Rectangle-11.png",
    },
    {
      id: 5,
      slug: "nunc-convallis-sempre-justo-qui-tempor",
      name: "Nunc convallis semper justo qui tempor",
      price: "$40,533",
      imgSrc: "https://i.ibb.co/1Kttxqw/Rectangle-11.png",
    },
    {
      id: 6,
      slug: "nunc-convallis-sempre-justo-qui-tempor",
      name: "Nunc convallis semper justo qui tempor",
      price: "$40,533",
      imgSrc: "https://i.ibb.co/1Kttxqw/Rectangle-11.png",
    },
    // Additional cards
  ],
};

const categories = [
  {
    name: "Fruits",
    bgColor: "bg-[#FFE5E5]",
    imgSrc: "https://i.ibb.co/NNGh60K/best-deal-product04-1.png",
  },
  {
    name: "Vegetable",
    bgColor: "bg-[#E5FFF5]",
    imgSrc: "https://i.ibb.co/NNGh60K/best-deal-product04-1.png",
  },
  {
    name: "Meat",
    bgColor: "bg-[#E5EDFF]",
    imgSrc: "https://i.ibb.co/NNGh60K/best-deal-product04-1.png",
  },
  {
    name: "Fruits",
    bgColor: "bg-[#F1E5FF]",
    imgSrc: "https://i.ibb.co/NNGh60K/best-deal-product04-1.png",
  },
];

const OurProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const renderCards = (cards) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {cards.slice(0, 6).map((card, index) => (
        <article
          key={card.id}
          className="rounded-2xl overflow-hidden shadow-2xl"
          data-aos="fade-up"
        >
          <img src={card.imgSrc} alt={card.name} className="w-full h-auto" />
          <div className="p-6 flex border border-[#C4C4C4] border-t-0 items-end justify-between bg-white gap-5 rounded-b-2xl">
            <div>
              <h3 className="font-medium text-xl text-[#061C3D]">
                {card.name}
              </h3>
              <p className="text-lg text-[#7A7A7A] mt-3">{card.price}</p>
            </div>
            <div className="transition-transform transform hover:scale-110">
              <Link to={`/product/${card.slug}`}>
                <img
                  src="https://i.ibb.co/Dwc9p4C/Group-499.png"
                  alt="Details"
                />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <div className="mx-auto py-24 container max-w-screen-xl px-4">
      <div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} pl-4 py-4 rounded-[100px] flex items-center gap-4`}
            >
              <div className="bg-white flex justify-center items-center h-[104px] w-[104px] rounded-full p-2 transition-transform transform hover:scale-110">
                <img src={category.imgSrc} alt={category.name} />
              </div>
              <p className="text-primary font-extrabold text-[22px]">
                {category.name}
              </p>
            </div>
          ))}
        </section>
      </div>
      <div>
        <h1 className="text-[50px] font-extrabold text-center text-primary mt-16 mb-6">
          Our Products
        </h1>
        <Tabs>
          <TabList className="flex lg:space-x-4 text-xl md:text-[28px] font-semibold text-[#42526B] mb-3 justify-center">
            <Tab
              className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-primary"
              selectedClassName="border-primary text-primary"
            >
              All
            </Tab>
            <Tab
              className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-primary"
              selectedClassName="border-primary text-primary"
            >
              New
            </Tab>
            <Tab
              className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-primary"
              selectedClassName="border-primary text-primary"
            >
              Best Selling
            </Tab>
          </TabList>
          <div className="border rounded-3xl md:p-10 p-6 mx-2 lg:p-16">
            <TabPanel>{renderCards(cardData.forBuy)}</TabPanel>
            <TabPanel>{renderCards(cardData.forSell)}</TabPanel>
            <TabPanel>{renderCards(cardData.forRent)}</TabPanel>
            <div className=" transition hover:scale-110 text-center mt-16">
              <Link
                to="/"
                className="text-lg text-white bg-primary font-semibold px-[23px] py-[10px] rounded-[5px] Lato "
              >
                See More
              </Link>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default OurProducts;
