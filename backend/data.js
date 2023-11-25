//define data as an object & products as an array
import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
          name: 'Basir',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
products : [
    {
        _id: '1',
        name: 'Wigs', 
        slug: 'wigs',
        category: 'Apparel & Accessories',
        image: '/images/wig1.jpg',
        price: 7000,
        countInStock: 10,
        brand:'Jon Renau',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality wig' ,

    },
    {
        _id: '2',
        name: 'Color cosmetics combo set', 
        slug: 'Color cosmetics combo set',
        category: 'Cosmetics',
        image:  '/images/image3.jpg',
        price: 7000,
        countInStock: 5,
        brand:'MAC',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality makeup' ,
    },
    {
      _id: '3',
        name: 'Acrylic Nails 500pc', 
        slug: 'Acrylic Nails 500pc',
        category: 'Beauty products',
        image: '/images/image4.jpg',
        price: 500,
        countInStock: 20,
        brand:'Fashion',
        rating: 4.5,
        numReviews: 10,
        description: 'Fashion Fake Nails' 
    }
    
]    

}

export default data;