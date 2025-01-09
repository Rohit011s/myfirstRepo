export interface card{
        title:String;
        productName:string;
        oldPrice: number;
        url:string;
        finalPrice:number;
};
let cardData :card[]=[
        {
title:"BestSeller",
productName:"don't believe",
oldPrice: 100,
url:"https://books.google.co.in/books/publisher/content?id=_ZOvEAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U07Nf7ty1PqB-A6wPoezpNnQj-27w&w=1280",
finalPrice: 80,
},
{
title:"BestSeller",
productName:"think and grow",
oldPrice: 3000,
url:"https://m.media-amazon.com/images/I/71AdHA+qqwL._AC_UF1000,1000_QL80_.jpg",
finalPrice: 1500,
},
        {
title:"BestSeller",
productName:"mindset",
oldPrice: 2999,
url:"https://m.media-amazon.com/images/I/715LM2CAhGL._UF1000,1000_QL80_.jpg",
finalPrice: 999,
},
        {
title:"BestSeller",
productName:"the power of now",
oldPrice: 1000,
url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvMA3OqQvYyuDgB_18kDYuz3Z5E1FQdtE_g&s",
finalPrice: 799,
},
];
export default cardData;