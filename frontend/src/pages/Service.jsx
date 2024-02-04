import React, { useContext, useState } from "react";
import { AppContext } from "../context/AuthContext";

export const Service = () => {
  const { services } = useContext(AppContext);
  console.log(services);
  const [expandedDescriptions, setExpandedDescriptions] = useState([]);

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>
      <div className="container grid grid-three-cols">
        {services.map((currElem, index) => {
          const descriptionToShow =
            expandedDescriptions[index] || currElem.description.length <= 30
              ? currElem.description
              : currElem.description.slice(0, 30) + "...";

          return (
            <div className="card" key={index}>
              <div className="card-img my-2">
                <img
                  src={currElem.imageUrl}
                  alt="designer"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{currElem.provider}</p>
                  <p>{'$' + currElem.price}</p>
                </div>
                <h2>{currElem.service}</h2>
                <p>{descriptionToShow}</p>
                {currElem.description.length > 30 && (
                  <button onClick={() => toggleDescription(index)}>
                    {expandedDescriptions[index] ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// export default Service
