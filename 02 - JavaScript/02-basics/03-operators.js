// DiscountPercent = ((ListingPrice - SellingPrice) / ListPrice) * 100
// D = ((L - S) / L) * 100

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log(discountPercent); // 75.09386733416771

var displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage + "% off"); // 75% off

var result = listingPrice > sellingPrice;

//typeof operator
console.log(typeof result);
