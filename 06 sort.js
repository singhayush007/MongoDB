//Building the Database 

db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
])

db.inventory.find().sort({ qty: -1 }) //Descenfing order of Quantity
db.inventory.find().sort({ qty: 1 }) //Increasing order of qty

db.inventory.find().skip(1) //Skips first document
db.inventory.skip(2) // skips first 2 document

db .inventory.find().limit(2) //Limits the number of documents in the output 2 
db .inventory.find().limit(2) //Limits the number of documents in the output 3


// Achieving Usig Pagination mongoDB find and limit
1 to 10 
no = 8
db.blogs.find().skip((pageNo -1)*no).limit(no)
pageno = 1 db.blogs.find().skip(0).limit(8)
pageno = 2 db.blogs.find().skip(8).limit(8)