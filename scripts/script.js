const tableHead = [
    {code:1,text: "Наименование"},
    {code:2,text: "Цена, BYN"},
    {code:3,text: "Фотография комплекта"},
    {code:4,text: "Остаток на складе, шт."}
];

const productData = [
    {
        code: 1,
        name: "Гравер пневматический TOPTUL KAKA0822",
        price: 240.60,
        url: "images/KAKA0822.jpg",
        count: 14
    },
    {
        code: 2,
        name: "Гравер электрический WORTEX MG3214E0011",
        price: 133.80,
        url: "images/MG3214E0011.jpg",
        count: 10
    },
    {
        code: 3,
        name: "Гравер электрический DREMEL Engraver 290-1 F0130290JZ",
        price: 108.22,
        url: "images/F0130290JZ.jpg",
        count: 21
    },
    {
        code: 4,
        name: "Гравер электрический WORTEX MG3218E11411А9)",
        price: 161.20,
        url: "images/MG3218E11411А9.jpg",
        count: 28
    },
    {
        code: 5,
        name: "Гравер электрический WORTEX MG3218E11411",
        price: 161.20,
        url: "images/MG3218E11411.jpg",
        count: 14
    },
    {
        code: 6,
        name: "Гравер электрический MOLOT MMG3215E11424",
        price: 106.40,
        url: "images/MMG3215E11424.jpg",
        count: 87
    }
];


ReactDOM.render(
    React.createElement(Product, {thead: tableHead, data: productData}),
    document.getElementById('container')
);