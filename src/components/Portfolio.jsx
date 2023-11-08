import React from "react";

const Portfolio = () => {
  const items = [
    {
      id: 1,
      title: "e-pharmacy website",
      img: "/x-log.png",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi, dolor, eveniet reiciendis natus eos quos delectus nihil dignissimos odit fugiat, corrupti sed. Sed recusandae ex doloremque commodi, perspiciatis veniam?",
    },
    {
      id: 2,
      title: "OPay clone",
      img: "/OPay.png",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi, dolor, eveniet reiciendis natus eos quos delectus nihil dignissimos odit fugiat, corrupti sed. Sed recusandae ex doloremque commodi, perspiciatis veniam?",
    },
    {
      id: 3,
      title: "getLinked web app",
      img: "/getLinked.png",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi, dolor, eveniet reiciendis natus eos quos delectus nihil dignissimos odit fugiat, corrupti sed. Sed recusandae ex doloremque commodi, perspiciatis veniam?",
    },
  ];
  const Single = ({ item }) => {
    return <section>{item.title}</section>;
  };
  return (
    <div className="">
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
