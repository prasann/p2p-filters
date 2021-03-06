import React, { Component } from "react";

import {
  Blur,
  MorphErode,
  MorphDilate,
  Hue,
  ColorSaturate
} from "./AppliedFilters";

const componentMapping = {
  blur: Blur,
  morphErode: MorphErode,
  morphDilate: MorphDilate,
  colorSaturate: ColorSaturate,
  hue: Hue
};

const getComponent = (filterName, filterValue) => {
  const FilterComponent = componentMapping[filterName];
  return <FilterComponent key={Math.random()} value={filterValue} />;
};

const filterComponents = filterList => {
  let filters = [];
  Object.keys(filterList).forEach(function (key) {
    filters.push(getComponent(key, filterList[key]));
  });

  return filters;
};

const styles = {
  default: {
    svgWidth: "660",
    svgHeight: "500",
  }
};

class Viewer extends Component {
  constructor() {
    super();
    this.currentStyles = styles.default;
  }

  render() {
    if (this.props.cat) {
      return (
        <div >
          <svg width={this.currentStyles.svgWidth}
               height={this.currentStyles.svgHeight} >
            <filter id="filtersPicture" >
              {filterComponents(this.props.filters)}
            </filter >
            <image
              width="100%"
              height="100%"
              xlinkHref={`https://octodex.github.com/images/${
                this.props.cat
                }.png`}
              filter={
                Object.keys(this.props.filters).length !== 0
                  ? "url(#filtersPicture)"
                  : ""
              }
            />
          </svg >
        </div >
      );
    }
    return <h1 >Select a cat!!!</h1 >;
  }
}

export default Viewer;
