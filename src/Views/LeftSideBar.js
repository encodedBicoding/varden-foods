import React, { Component } from 'react'
import Footer from './Footer'
class LeftSideBar extends Component {
	state = {
		search: '',
		stocks: [
				{
						product: 'laps',
						type: 'major'
				},
				{
						product: 'wings',
						type: 'major'
				},
				{
						product: 'breasts',
						type: 'major'
				},
				{
						product: 'whole chicken',
						type: 'major'
				},
				{
						product: 'rosted chicken (big)',
						type: 'major'
				},
				{
						product: 'rosted chicken (small)',
						type: 'major'
	}
	]
}
    createSearch = (e) => {
      return this.setState({search: e.target.value})
    }
    formSearch =(e) => {
      e.preventDefault();
      const value = this.state.search;
      if(!value) alert('Form can\'t be empty')
      alert('form searching '+ value)
    }
  
    render() {
          const productsTable = this.state.stocks.map( stock => 
              (
                  <tr key={stock.product}>
                          <td> { stock.product.toUpperCase()} </td>
                          <td> { stock.type.toUpperCase() }</td>
                  </tr>
              )
      )
      return (
        <div className="container-fluid">
          <div className="left-side-bar">
            <div className="left-side-body shadow-lg p-3 mb-5 bg-white rounded">
                          <div className="round-knob"></div>
              <form id="left-bar-form" onSubmit={this.formSearch}> 
                <label htmlFor='search'></label>
                <input type="text" value={this.state.search} onChange={this.createSearch} placeholder="search products..."/>
                <button value="Submit">Search</button>
              </form>
            </div>
            <div className="stock-available-container" >
              <p className="stock-header">Available Stocks</p>
                <div className="stock-available">
										<table className="table table-striped table-bordered">
											<thead>
												<tr>
														<td>PRODUCT</td>
														<td>TYPE OF PRODUCT</td>
												</tr>
											</thead>
											<tbody>
														{ productsTable }
											</tbody>
										</table>
						</div>
            </div>
            <Footer/> 
          </div>
         
        </div>
      )
    }
	}
	
	export default LeftSideBar;