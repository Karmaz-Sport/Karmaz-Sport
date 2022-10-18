import React from "react";
import IMG from "D:/Camilo/Fourth Cicle/Karmaz-Sport/karmazSport/src/styles/assets/001.png";

export const ProductsList = () => {
    return (
        <>
            <h1 className="title">Productos en inventario</h1>
            <div className="products">
                <div className="product">
                    <a href="#">
                        <div className="product__img">
                            <img src={IMG} width="380" alt="" />
                        </div>
                    </a>
                    <div className="product__footer">
                        <h1> Title </h1>
                        <p> Categoria </p>
                        <p className="price">$100</p>
                        <a href="#" className="btn">Informacion</a>
                    </div>
                </div>
                <div className="product">
                    <a href="#">
                        <div className="product__img">
                            <img src={IMG} width="380" alt="" />
                        </div>
                    </a>
                    <div className="product__footer">
                        <h1> Title </h1>
                        <p> Categoria </p>
                        <p className="price">$100</p>
                        <a href="#" className="btn">Informacion</a>
                    </div>
                </div>
                <div className="product">
                    <a href="#">
                        <div className="product__img">
                            <img src={IMG} width="380" alt="" />
                        </div>
                    </a>
                    <div className="product__footer">
                        <h1> Title </h1>
                        <p> Categoria </p>
                        <p className="price">$100</p>
                        <a href="#" className="btn">Informacion</a>
                    </div>
                </div>
                <div className="product">
                    <a href="#">
                        <div className="product__img">
                            <img src={IMG} width="380" alt="" />
                        </div>
                    </a>
                    <div className="product__footer">
                        <h1> Title </h1>
                        <p> Categoria </p>
                        <p className="price">$100</p>
                        <a href="#" className="btn">Informacion</a>
                    </div>
                </div>
            </div>
        </>
    )
}