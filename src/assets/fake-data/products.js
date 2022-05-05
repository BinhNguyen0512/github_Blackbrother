const product_01_image_01 = require('../images/products/product-01 (1).png')
const product_01_image_02 = require('../images/products/product-01 (2).png')

const product_02_image_01 = require('../images/products/product-02 (1).png')
const product_02_image_02 = require('../images/products/product-02 (2).png')

const product_03_image_01 = require('../images/products/product-03 (1).png')
const product_03_image_02 = require('../images/products/product-03 (2).png')

const product_04_image_01 = require('../images/products/product-04 (1).png')
const product_04_image_02 = require('../images/products/product-04 (2).png')

const product_05_image_01 = require('../images/products/product-05 (1).png')
const product_05_image_02 = require('../images/products/product-05 (2).png')

const product_06_image_01 = require('../images/products/product-06 (1).png')
const product_06_image_02 = require('../images/products/product-06 (2).png')

const product_07_image_01 = require('../images/products/product-07 (1).png')
const product_07_image_02 = require('../images/products/product-07 (2).png')

const product_08_image_01 = require('../images/products/product-08 (1).png')
const product_08_image_02 = require('../images/products/product-08 (2).png')

const product_09_image_01 = require('../images/products/product-09 (1).png')
const product_09_image_02 = require('../images/products/product-09 (2).png')

const product_10_image_01 = require('../images/products/product-10 (1).png')
const product_10_image_02 = require('../images/products/product-10 (2).png')

const product_11_image_01 = require('../images/products/product-11 (1).png')
const product_11_image_02 = require('../images/products/product-11 (2).png')

const product_12_image_01 = require('../images/products/product-12 (1).png')
const product_12_image_02 = require('../images/products/product-12 (2).png')

const product_13_image_01 = require('../images/products/product-13 (1).png')
const product_13_image_02 = require('../images/products/product-13 (2).png')

const product_14_image_01 = require('../images/products/product-14 (1).png')
const product_14_image_02 = require('../images/products/product-14 (2).png')

const product_15_image_01 = require('../images/products/product-15 (1).png')
const product_15_image_02 = require('../images/products/product-15 (2).png')

// const product_16_image_01 = require('../images/products/product-16 (1).png')
// const product_16_image_02 = require('../images/products/product-16 (2).png')

// const product_17_image_01 = require('../images/products/product-17 (1).png')
// const product_17_image_02 = require('../images/products/product-17 (2).png')

const product_18_image_01 = require('../images/products/product-18 (1).png')
const product_18_image_02 = require('../images/products/product-18 (2).png')


const products = [

    {
        title: 'TEE BASIC LOGO SS4',
        price: '320000',
        image01: product_18_image_01,
        image02: product_18_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "black"],
        slug: 'tee-basic-logo-ss4',
        size: ['m','l',"xl"],
        description: 'Chiếc áo T-shirt MISSOUT với chất liệu cotton 4 chiều, thoáng mát, dễ chịu khi mặc là một sự lựa chọn hoàn hảo dành cho tủ quần áo của bạn.'
    },
    {
        title: 'FABRIC BOMBER BLACK & WHITE',
        price: '520000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "ao-khoac",
        colors: ['black'],
        slug: 'fabric-bomber-black-white',
        size: ['s', 'm', 'l', 'xl'],
        description: 'Chiếc áo khoác Bomber Jacket MISSOUT với chất liệu cotton 4 chiều, thoáng mát, dễ chịu khi mặc là một sự lựa chọn hoàn hảo dành cho tủ quần áo của bạn.'
    },
    {
        title: 'MILETONES TEE MST',
        price: '249000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ['white', 'red', 'orange'],
        slug: 'ao-thun-milestone',
        size: ['s', 'm', 'l', 'xl'],
        description: 'Chiếc áo T-shirt MISSOUT với chất liệu cotton 4 chiều, thoáng mát, dễ chịu khi mặc là một sự lựa chọn hoàn hảo dành cho tủ quần áo của bạn.'
    },
    
    {
        title: 'BASIC SS4 PHIÊN BẢN ĐẶC BIỆT',
        price: '320000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ['white', 'red', 'orange', 'yellow'],
        slug: 'basic-ss4-phien-ban-dac-biet',
        size: ['m'],
        description: 'Chiếc áo T-shirt MISSOUT với chất liệu cotton 4 chiều, thoáng mát, dễ chịu khi mặc là một sự lựa chọn hoàn hảo dành cho tủ quần áo của bạn.'
    },

    {
        title: 'FABRIC BOMBER PINK MST',
        price: '520000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "ao-khoac",
        colors: ['pink'],
        slug: 'nhan-ban-tu-fabric-bomber-gray-mst',
        size: [ 'm', 'l'],
        description: 'Chiếc áo khoác Bomber Jacket MISSOUT với chất liệu cotton 4 chiều, thoáng mát, dễ chịu khi mặc là một sự lựa chọn hoàn hảo dành cho tủ quần áo của bạn.'
    },
    {
        title: 'MST GARAGE TEE',
        price: '380000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "ao-thun",
        colors: ['black', 'blue', 'orange'],
        slug: 'mst-garage-tee',
        size: ['xl'],
        description: 'Chiếc áo T-shirt MISSOUT với chất liệu cotton 4 chiều, thoáng mát, dễ chịu khi mặc là một sự lựa chọn hoàn hảo dành cho tủ quần áo của bạn.'
    },
    {
        title: 'FABRIC BOMBER LOGO MISSOUT',
        price: '520000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "ao-khoac",
        colors: ['black', 'white', 'pink'],
        slug: 'fabric-bomber-logo-missout',
        size: ['xxl'],
        description: 'Chiếc áo khoác Bomber Jacket MISSOUT với chất liệu cotton 4 chiều, thoáng mát, dễ chịu khi mặc là một sự lựa chọn hoàn hảo dành cho tủ quần áo của bạn.'
    },
    {
        title: 'DOUBLE KNEE PANTS',
        price: '400000',
        image01: product_15_image_01,
        image02: product_15_image_02,
        categorySlug: "quan-pants",
        colors: ["white", "black"],
        slug: 'double-knee-pants',
        size: ["xl"],
        description: 'Chiếc quần pants được làm từ chất liệu nỉ cá, thoải mái thể dục thể thao mà không lo bị rách...'
    },
    {
        title: 'EDUCATION SWEATER',
        price: '460000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "ao-khoac",
        colors: ['blue','black'],
        slug: 'education-sweater',
        size: ["s", "m", "xl"],
        description: 'Chiếc áo khoác Bomber Jacket MISSOUT với chất liệu cotton 4 chiều, thoáng mát, dễ chịu khi mặc là một sự lựa chọn hoàn hảo dành cho tủ quần áo của bạn.'
    },
   
 
    {
        title: 'FABRIC BOMBER DARK GRAY MST',
        price: '520000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "ao-khoac",
        colors: ['white','red','black'],
        slug: 'fabric-bomber-gray-mst',
        size: ['s', 'm', 'xl'],
        description: 'Chiếc áo khoác Bomber Jacket MISSOUT với chất liệu cotton 4 chiều, thoáng mát, dễ chịu khi mặc là một sự lựa chọn hoàn hảo dành cho tủ quần áo của bạn.'
    },
   
  

    {
        title: 'POLO 2.0 LOGO MST',
        price: '370000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ['white', 'red', 'blue'],
        slug: 'polo-logo-mst',
        size: ['s', 'm'],
        description: 'Chiếc áo Polo MISSOUT với chất liệu cotton 4 chiều, thoáng mát, dễ chịu khi mặc là một sự lựa chọn hoàn hảo dành cho tủ quần áo của bạn.'
    },
   
 
    {
        title: 'LOGO PANTS',
        price: '440000',
        image01: product_13_image_01,
        image02: product_13_image_02,
        categorySlug: "quan-pants",
        colors: ["white", "red", 'black'],
        slug: 'logo-pants',
        size: ["s", "m", "xl"],
        description: 'Chiếc quần pants được làm từ chất liệu nỉ cá, thoải mái thể dục thể thao mà không lo bị rách...'
    },
    {
        title: 'POCKET PANTS',
        price: '400000',
        image01: product_14_image_01,
        image02: product_14_image_02,
        categorySlug: "quan-pants",
        colors: ["white", "blue"],
        slug: 'pocket-pants',
        size: ["s", "m"],
        description: 'Chiếc quần pants được làm từ chất liệu nỉ cá, thoải mái thể dục thể thao mà không lo bị rách...'
    },



    {
        title: 'SWEATPANTS',
        price: '400000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "quan-pants",
        colors: ['blue','white'],
        slug: 'sweatpants',
        size: ["s", "m", "xl"],
        description: 'Chiếc quần pants được làm từ chất liệu nỉ cá, thoải mái thể dục thể thao mà không lo bị rách...'
    },

    {
        title: 'FABRIC BOMBER GRAY MST',
        price: '520000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "ao-khoac",
        colors: ['blue','black'],
        slug: 'fabric-bomber',
        size: ['l'],
        description: 'Chiếc áo khoác Bomber Jacket MISSOUT với chất liệu cotton 4 chiều, thoáng mát, dễ chịu khi mặc là một sự lựa chọn hoàn hảo dành cho tủ quần áo của bạn.'
    },

    {
        title: 'CARDIGAN LOGO M',
        price: '440000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "ao-khoac",
        colors: ['white',"black", "blue"],
        slug: 'cardigan-logo-m',
        size: ['s', 'm', 'l'],
        description: 'Chiếc áo khoác Cardigan MISSOUT với chất liệu cotton 4 chiều, thoáng mát, dễ chịu khi mặc là một sự lựa chọn hoàn hảo dành cho tủ quần áo của bạn.'
    },
]


const getAllProducts = () => products

const getProducts = count => {
    const max = products.length - count
    const random = Math.random()
    const start = Math.floor(random * max)
    console.log(random)
    console.log(start)

    return products.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts
}

export default productData
