const APP_DATA = {
    brand:"BIGG BASKETT",

}

const PRODUCT_CATEGORIES = [
    {
        name:"Fruits",
        id:1,
        img_url:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=320,h=410/layout-engine/2021-11/category-1_4.png?61c862ab00438"
    },
    {
        name:"Dairy",
        id:1,
        img_url:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=320,h=410/layout-engine/2021-11/category-2_0.png?61c862ab9f82b"

    },
    {
        name:"Snacks",
        id:1,
        img_url:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=320,h=410/layout-engine/2021-11/category-4_1.png?61c862ad06c2d"

    },
    {
        name:"Groceries",
        id:1,
        img_url:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=320,h=410/layout-engine/2021-11/category-5_1.png?61c862adae219"

    },
    {
        name:"Backery",
        id:1,
        img_url:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=320,h=410/layout-engine/2021-11/category-7_0.png?61c862aee712c"

    },
    {
        name:"Sweet",
        id:1,
        img_url:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=320,h=410/layout-engine/2021-11/category-8_1.png?61c862af91980"

    },
    {
        name:"Home",
        id:1,
        img_url:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=320,h=410/layout-engine/2021-11/category-13_0.png?61c862b2ce721"

    },
    {
        name:"Pet Care",
        id:1,
        img_url:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=320,h=410/layout-engine/2021-11/category-16_0.png?61c862b4bd9c8"

    },
    
    
    
]



const DASHBOARD_DATA = [
    {
        title:"Shop by Category",
        data_type:'card',
        col_size:3,
        data:PRODUCT_CATEGORIES
    },
    {
        title:"Top Categories",
        data_type:'images',
        col_size:6,
        data:[
            {
            img_url:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=567,h=353/layout-engine/2021-12/FNV-50.png?61c94b2a8025e"
            },
            {
                img_url:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=567,h=353/layout-engine/2021-12/cheese2.png?61c94b2cbd4f2'
            },
            {
                img_url:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=567,h=353/layout-engine/2021-12/washing-machine.png?61c94ad8c6346'
            },
            {
                img_url:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=567,h=353/layout-engine/2021-12/dry-fruits.png?61c94b429218e'

            }
    ]

    },{
        data_type:"images",
        col_size:12,
        data :[
            {
                img_url:'https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg'

            },
            {
                img_url:'https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg'

            }
        ]
    }
]


const ALL_PRODUCTS = [
    {
        name:'Hybrid Tomato (500gm)',
        category:"Fruits",
        price:30,
        description:"Fresh Tomato",
        img_url:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_3881.jpg'
    },
    {
        name:'Ginger (Adrak) (250gm)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_421703.jpg?ts=1639904740'


    },
    {
        name:'Cucumber (Kheera) (1kg)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_10088.jpg?ts=1639904740'


    },
    {
        name:'Hybrid Tomato (500gm)',
        category:"Fruits",
        price:30,
        description:"Fresh Tomato",
        img_url:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_3881.jpg'
    },
    {
        name:'Ginger (Adrak) (250gm)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_421703.jpg?ts=1639904740'


    },
    {
        name:'Cucumber (Kheera) (1kg)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_10088.jpg?ts=1639904740'


    },
    {
        name:'Hybrid Tomato (500gm)',
        category:"Fruits",
        price:30,
        description:"Fresh Tomato",
        img_url:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_3881.jpg'
    },
    {
        name:'Ginger (Adrak) (250gm)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_421703.jpg?ts=1639904740'


    },
    {
        name:'Cucumber (Kheera) (1kg)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_10088.jpg?ts=1639904740'


    },
    {
        name:'Hybrid Tomato (500gm)',
        category:"Fruits",
        price:30,
        description:"Fresh Tomato",
        img_url:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_3881.jpg'
    },
    {
        name:'Ginger (Adrak) (250gm)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_421703.jpg?ts=1639904740'


    },
    {
        name:'Cucumber (Kheera) (1kg)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_10088.jpg?ts=1639904740'


    },
    {
        name:'Hybrid Tomato (500gm)',
        category:"Fruits",
        price:30,
        description:"Fresh Tomato",
        img_url:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_3881.jpg'
    },
    {
        name:'Ginger (Adrak) (250gm)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_421703.jpg?ts=1639904740'


    },
    {
        name:'Cucumber (Kheera) (1kg)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_10088.jpg?ts=1639904740'


    },
    {
        name:'Hybrid Tomato (500gm)',
        category:"Fruits",
        price:30,
        description:"Fresh Tomato",
        img_url:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_3881.jpg'
    },
    {
        name:'Ginger (Adrak) (250gm)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_421703.jpg?ts=1639904740'


    },
    {
        name:'Cucumber (Kheera) (1kg)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_10088.jpg?ts=1639904740'


    },
    {
        name:'Hybrid Tomato (500gm)',
        category:"Fruits",
        price:30,
        description:"Fresh Tomato",
        img_url:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_3881.jpg'
    },
    {
        name:'Ginger (Adrak) (250gm)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_421703.jpg?ts=1639904740'


    },
    {
        name:'Cucumber (Kheera) (1kg)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_10088.jpg?ts=1639904740'


    },
    {
        name:'Hybrid Tomato (500gm)',
        category:"Fruits",
        price:30,
        description:"Fresh Tomato",
        img_url:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_3881.jpg'
    },
    {
        name:'Ginger (Adrak) (250gm)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_421703.jpg?ts=1639904740'


    },
    {
        name:'Cucumber (Kheera) (1kg)',
        category:"Fruits",
        price:20,
        description:"Test Description",
        img_url:'https://cdn.grofers.com/app/images/products/normal/pro_10088.jpg?ts=1639904740'


    },

]

 
export {DASHBOARD_DATA,APP_DATA,PRODUCT_CATEGORIES,ALL_PRODUCTS} 