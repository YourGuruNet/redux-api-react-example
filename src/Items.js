import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from './Url';
import styled from 'styled-components';
import { FiSunrise } from 'react-icons/fi';
import { FiSunset } from 'react-icons/fi';

const Items = ({ getProducts, loading, products }) => {
  React.useEffect(() => {
    getProducts();
  }, [getProducts]);
  console.log(products);
  if (loading) {
    return <h2 className='section-title'>Loading...</h2>;
  } else {
    return (
      <React.Fragment>
        <h1>{products.location.country}</h1>
        <h6>{products.location.name}</h6>
        <h4>{products.location.localtime}</h4>
        <Section>
          {products.forecast.forecastday.map((item, id) => {
            return (
              <div className='weather_day' key={id}>
                <h6>{item.date}</h6>
                <div className='sunset_container'>
                  <h6 className='sunrise'>
                    <FiSunrise /> {item.astro.sunrise}
                  </h6>
                  <h6 className='sunrise'>
                    <FiSunset /> {item.astro.sunset}
                  </h6>
                </div>
                <div>
                  <img src={item.day.condition.icon} alt='weather' />
                  <h6 className='weather_description'>
                    {item.day.condition.text}
                  </h6>
                  <h6 className='weather_description'>
                    Max °C: {item.day.maxtemp_c}
                  </h6>
                  <h6 className='weather_description'>
                    Min °C: {item.day.mintemp_c}
                  </h6>
                </div>
              </div>
            );
          })}
        </Section>
      </React.Fragment>
    );
  }
};

const mapStateToProps = ({ productState: { products, loading } }) => {
  return { loading, products };
};

// Functions
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);

const Section = styled.section`
  width: 50rem;
  display: flex;
  padding: 2rem 0;
  margin: 0 auto;
  justify-content: space-between;
  .sunset_container {
    display: flex;
  }
  .sunrise {
    font-size: 1rem;
    padding: 0.5rem;
  }
  .weather_description {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;
