import React from 'react'
import komi from './../img/komi.png'
const Home = () => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner__wrap">
                        <div className="banner__add">
                            <h1 className="banner__add-title">
                                Добро пожаловать в NipponWeBshop
                            </h1>
                        </div>
                        <div className="banner__info">
                            <p className="banner__info-p">
                                NipponWeBshop — это современный интернет-магазин,
                                созданный для удобных, быстрых и безопасных покупок.
                                Мы предлагаем широкий ассортимент качественных товаров
                                по доступным ценам, тщательно отбирая продукцию для наших покупателей.
                            </p>
                            <p className="banner__info-p">
                                На нашем сайте вы найдете только надежные и проверенные
                                товары, которые соответствуют высоким стандартам качества.
                                Мы постоянно обновляем каталог, чтобы предоставлять актуальные
                                новинки и популярные товары для повседневной жизни.
                            </p>
                        </div>
                        <div className="banner__text">
                            <h2 className="banner__text-title">
                                Преимущества NipponWeBshop:
                            </h2>
                            <ul className="banner__text-list">
                                <li className="banner__text-list_item">
                                    <p className="banner__text-list_item-p">
                                        Большой выбор качественных товаров;
                                    </p>
                                </li>
                                <li className="banner__text-list_item">
                                    <p className="banner__text-list_item-p">
                                        Быстрый поиск нужной продукции;
                                    </p>
                                </li>
                                <li className="banner__text-list_item">
                                    <p className="banner__text-list_item-p">
                                        Безопасная система оформления заказов;
                                    </p>
                                </li>
                                <li className="banner__text-list_item">
                                    <p className="banner__text-list_item-p">
                                        Регулярные акции и выгодные предложения;
                                    </p>
                                </li>
                                <li className="banner__text-list_item-p">
                                    <p className="banner__text-list_item">
                                        Оперативная поддержка клиентов.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="banner__end">
                            <p className="banner__end-text">
                                NipponWeBshop — качество, надежность и удобство в одном месте!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home