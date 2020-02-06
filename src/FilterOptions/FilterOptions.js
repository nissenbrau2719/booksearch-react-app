import React from 'react';
import './FilterOptions.css';

class FilterOptions extends React.Component {
  render() {
    return (
      <div className="filterOptions">
        <label className="filterLabel" htmlFor="printType">Print Type: </label>
        <select 
          className="filterSelect"
          id="printType" 
          name="printType" 
          onChange={e => this.props.updatePrintType(e.target.value)}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label className="filterLabel" htmlFor="bookType">Book Type: </label>
        <select 
          className="filterSelect"
          id="bookType" 
          name="bookType"
          onChange={e => this.props.updateBookType(e.target.value)}>
          <option value="">No Filter</option>
          <option value="free-ebooks">Free Ebooks</option>
        </select>
      </div>
    )
  }
}

export default FilterOptions;