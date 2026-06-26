import React, { useEffect, useState } from 'react'
import merc1 from '../img/merc-benz-e-class_vi.png'
import merc2 from '../img/merc2.png'
import merc3 from '../img/merc3.png'
import merc4 from '../img/merc4.png'
import merc5 from '../img/merc5.png'
import merc6 from '../img/merc6.png'
import nissan1 from '../img/nissan1.png'
import nissan2 from '../img/nissan2.png'
import nissan3 from '../img/nissan3.png'
import toyota from '../img/toyota.png'
import toyota1 from '../img/toyota1.png'
import strelka from '../img/strelka.svg'
import ReactPaginateRaw from 'react-paginate'


const SafeReactPaginate = (props) => {
    const Component = ReactPaginateRaw.default || ReactPaginateRaw;
    return React.createElement(Component, props);
};

const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^0-9]/g, '')) || 0;
};

const cars = [
    {
        id: 1,
        name: 'Mercedes-Benz E-Класс VI (W214, S214)',
        info: ' Седан Long E-класса, задний и полный привод. Автомат. Дизельные, бензиновые и гибридные двигатели мощностью от 170 до 381 лошадиных сил.',
        cost: '9.990.000 ₽',
        img: merc1,
        country: 'ger',
    },
    {
        id: 2,
        name: 'Mercedes-Benz E-Класс V (W213, S213, C238) Рестайлинг',
        info: ' Универсал 5 дв. E-класса, задний и полный привод. Автомат. Бензиновые, дизельные и гибридные двигатели мощностью от 160 до 367 лошадиных сил.',
        cost: '8.550.000 ₽',
        img: merc2,
        country: 'ger',
    },
    {
        id: 3,
        name: 'Mercedes-Benz E-Класс V (W213, S213, C238)',
        info: 'Универсал 5 дв. E-класса, задний и полный привод. Автомат и механика. Бензиновые, дизельные и гибридные двигатели мощностью от 150 до 367 лошадиных сил.',
        cost: '4.799.000 ₽',
        img: merc3,
        country: 'ger',
    },
    {
        id: 4,
        name: 'Mercedes-Benz S-Класс VII (W223) Рестайлинг)',
        info: 'Седан F-класса, полный и задний привод. Автомат. Бензиновые, дизельные и гибридные двигатели мощностью от 313 до 612 лошадиных сил.',
        cost: '37.821.000 ₽',
        img: merc4,
        country: 'ger',
    },
    {
        id: 5,
        name: 'Mercedes-Benz V-Класс III (W447) Рестайлинг 2',
        info: 'Минивэн Long M-класса, задний и полный привод. Автомат. Дизельные и бензиновые двигатели мощностью от 163 до 237 лошадиных сил.',
        cost: '31.200.000 ₽',
        img: merc5,
        country: 'ger',
    },
    {
        id: 6,
        name: 'Mercedes-Benz B-Класс III (W247) Рестайлинг',
        info: 'Хэтчбек 5 дв. C-класса, передний и полный привод. Робот. Бензиновые, дизельные и гибридные двигатели мощностью от 116 до 224 лошадиных сил.',
        cost: '3.853.000 ₽',
        img: merc6,
        country: 'ger',
    },
    {
        id: 7,
        name: '2017 NISSAN AD VAN DBF-VY12г',
        info: 'Универсал 5 дв. B-класса (коммерческий), передний и полный привод. Автомат (АКПП) и вариатор (CVT). Бензиновые двигатели объемом 1.5 и 1.6 литра мощностью от 109 до 111 лошадиных сил.',
        cost: '1.150.000 ₽',
        img: nissan1,
        country: 'jp',
    },
    {
        id: 8,
        name: '2021 NISSAN DAYZ 4AA-B45W',
        info: 'Хэтчбек 5 дв. A-класса (кей-кар), передний привод. Вариатор (CVT). Бензиновый гибридный двигатель (мягкий гибрид c турбонаддувом) объемом 0.7 литра мощностью 64 лошадиные силы.',
        cost: '980.000 ₽',
        img: nissan2,
        country: 'jp',
    },
    {
        id: 9,
        name: '2014 NISSAN DAYZ ROOX DBA-B21A 4WD',
        info: 'Хэтчбек 5 дв. A-класса (микровэн / кей-кар), полный привод. Вариатор (CVT). Бензиновые двигатели (атмосферные и с турбонаддувом) объемом 0.7 литра мощностью от 49 до 64 лошадиных сил.',
        cost: '1.000.000 ₽',
        img: nissan3,
        country: 'jp',
    },
    {
        id: 10,
        name: '2025 TOYOTA ALPHARD 3BA-AGH40W',
        info: 'Минивэн 5 дв. M-класса (люкс), передний привод. Вариатор (Direct Shift-CVT). Бензиновый двигатель объемом 2.5 литра мощностью 182 лошадиные силы.',
        cost: '11.800.000 ₽',
        img: toyota,
        country: 'jp',
    },
    {
        id: 11,
        name: '2025 TOYOTA VELLFIRE 5BA-TAHA40W',
        info: 'Минивэн 5 дв. M-класса (люкс), передний привод. Автомат (8-ступенчатый Direct Shift-8AT). Бензиновый двигатель с турбонаддувом объемом 2.4 литра мощностью 279 лошадиных сил.',
        cost: '12.500.000 ₽',
        img: toyota1,
        country: 'jp',
    },
]

const Shop = () => {

    // Стейты для фильтров и сортировки
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [sortOrder, setSortOrder] = useState(''); // '' (по умолчанию), 'low-to-high', 'high-to-low'

    // Стейт для пагинации
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    // Функция переключения стран
    const handleCountryChange = (countryCode) => {
        setItemOffset(0); // Сброс пагинации
        setSelectedCountries((prevSelected) => {
            if (prevSelected.includes(countryCode)) {
                return prevSelected.filter(c => c !== countryCode);
            } else {
                return [...prevSelected, countryCode];
            }
        });
    };

    // Функция изменения сортировки цен
    const handleSortChange = (e) => {
        setItemOffset(0); // Сброс пагинации
        setSortOrder(e.target.value);
    };

    // === 1. СНАЧАЛА ФИЛЬТРУЕМ ПО СТРАНЕ ===
    let processedCars = selectedCountries.length === 0
        ? [...cars]
        : cars.filter(car => selectedCountries.includes(car.country));

    // === 2. ЗАТЕМ СОРТИРУЕМ ПО ЦЕНЕ ===
    if (sortOrder === 'low-to-high') {
        processedCars.sort((a, b) => parsePrice(a.cost) - parsePrice(b.cost));
    } else if (sortOrder === 'high-to-low') {
        processedCars.sort((a, b) => parsePrice(b.cost) - parsePrice(a.cost));
    }

    // === 3. РЕЖЕМ НА СТРАНИЦЫ ===
    const endOffset = itemOffset + itemsPerPage;
    const currentCars = processedCars.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(processedCars.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage;
        setItemOffset(newOffset);
    };

    return (
        <div className="shop">
            <div className="container">
                <div className="shop__wrap">
                    <div className="shop__content">
                        <div className="shop__content-cards">
                            {currentCars.map((car) => (
                                <a href="#" className="shop__content-cards_item" key={car.id}>
                                    <div className="shop__content-cards_item-img">
                                        <img src={car.img} alt="" />
                                    </div>
                                    <div className="shop__content-cards_item-info">
                                        <h3 className="shop__content-cards_item-info_title">
                                            {car.name}
                                        </h3>
                                        <p className="shop__content-cards_item-info_p">
                                            {car.info}
                                        </p>
                                        <p className="shop__content-cards_item-info_cost">
                                            {car.cost}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>

                    </div>
                    <div className="shop__sidebar">
                        <div className="shop__sidebar-country">
                            <h3 className="shop__sidebar-title">
                                Страна производства
                            </h3>
                            <form action="" className='shop__sidebar-form'>
                                <div className="shop__sidebar-form_item">
                                    <input
                                        type="checkbox"
                                        className='shop__sidebar-form_item-input'
                                        checked={selectedCountries.includes('ger')}
                                        onChange={() => handleCountryChange('ger')}
                                    />
                                    <p className="shop__sidebar-form_item-p">
                                        Германия
                                    </p>
                                </div>
                                <div className="shop__sidebar-form_item">
                                    <input
                                        type="checkbox"
                                        className='shop__sidebar-form_item-input'
                                        checked={selectedCountries.includes('jp')}
                                        onChange={() => handleCountryChange('jp')}
                                    />
                                    <p className="shop__sidebar-form_item-p">
                                        Япония
                                    </p>
                                </div>
                            </form>
                        </div>
                        <div className="shop__sidebar-section">
                            <h3 className="shop__sidebar-section_title">
                                Сортировка по цене
                            </h3>
                            <select
                                value={sortOrder}
                                onChange={handleSortChange}
                                className="shop__sidebar-section_select"
                            >
                                <option value="" className='shop__sidebar-section_select-item'>По умолчанию</option>
                                <option value="low-to-high" className='shop__sidebar-section_select-item'>От меньшего к большему</option>
                                <option value="high-to-low" className='shop__sidebar-section_select-item'>От большего к меньшему</option>
                            </select>
                        </div>
                        
                    </div>
                </div>
                <div className="pagination__block">
                    <SafeReactPaginate
                        breakLabel="..."
                        nextLabel='>'
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={10}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        breakClassName="Pagination__block-list"
                    />
                </div>

            </div>

        </div>

    )
}


export default Shop