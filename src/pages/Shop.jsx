import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css"

import products from "../assets/data/products";
import ProdutsList from "../components/UI/ProductsList"

const Shop = () =>{

    const [productsData, setProductsData] = useState(products)

    const handleFilter = (e) => {
        const filterValue = e.target.value
         if(filterValue === "t-shirt"){
            const filteredProducts = products.filter(item => item.category === "t-shirt")
            setProductsData(filteredProducts)
         }

         if(filterValue === "pillow"){
            const filteredProducts = products.filter(item => item.category === "pillow")
            setProductsData(filteredProducts)
         }

         if(filterValue === "sweter"){
            const filteredProducts = products.filter(item => item.category === "sweter")
            setProductsData(filteredProducts)
         }

         if(filterValue === "cup"){
            const filteredProducts = products.filter(item => item.category === "cup")
            setProductsData(filteredProducts)
         }

         if(filterValue === "backpack"){
            const filteredProducts = products.filter(item => item.category === "backpack")
            setProductsData(filteredProducts)
         }
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value

        const serchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        setProductsData(serchedProducts)
    }

    return <Helmet title='Shop'>
        <CommonSection title='Products'/>

        <section>
            <Container>
                <Row>
                    <Col lg="3" md="6">
                        <div className="filter__widget">
                            <select onChange={handleFilter}>
                                <option>Filter By Category</option>
                                <option value="t-shirt">T-shirt</option>
                                <option value="pillow">Pillow</option>
                                <option value="sweter">Sweter</option>
                                <option value="cup">Cup</option>
                                <option value="backpack">Backpack</option>

                            </select>
                        </div>
                    </Col>
                    <Col lg="3" md="6" className="text-end">
                    <div className="filter__widget">
                            <select>
                                <option>Sort By</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                               

                            </select>
                        </div>
                    </Col>
                    <Col lg="6" md="12">
                        <div className="search__box">
                            <input type="text" placeholder="Search..." onChange={handleSearch}/>
                            <span>
                             <i class="ri-search-line"></i>
                            </span>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>

        <section className="pt-0">
            <Container>
                <Row>
                    {
                        productsData.length === 0 ? <h1 className="text-center fs-4">No products are found!</h1> : <ProdutsList data={productsData}/>
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Shop;