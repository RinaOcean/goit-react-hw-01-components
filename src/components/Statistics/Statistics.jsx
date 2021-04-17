import React from "react";
import PropTypes from "prop-types";
import "./Statistic.css"

// const colorize = ()=>{
//   const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
//   return "#" + randomColor
// }

function colorize(ranges) {
  if (!ranges) {
      ranges = [
          [150,256],
          [0, 190],
          [0, 30]
      ];
  }
  const g = function() {
           const range = ranges.splice(Math.floor(Math.random()*ranges.length), 1)[0];
            return Math.floor(Math.random() * (range[1] - range[0])) + range[0];
  }

  const randomColor ="rgb(" + g() + "," + g() + "," + g()+ ","+ 0.3 +")";
  return randomColor
};

const Statistics = ({ title, stats }) => {
  

  return <section className="statistics">
    {title && <h2 className="statistics__title">{title}</h2>}

    <ul className="statistics__list">
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className="statistics__item" style={{backgroundColor: colorize([
          [100,150],
          [0, 150],
          [0,30]
      ])}}>
          <span className="statistics__label">{label}</span>
          <span className="statistics__percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
