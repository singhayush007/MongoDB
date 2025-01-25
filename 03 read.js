db.inventory.find() // - Fetch all documents 
db.inventory.find({}) // - Fetch all documents 
db.inventory.find({qty:90})

db.inventory.find( { status: { $in: ["A" , "D"] } } )

// AND 
db.inventory.find({ status: "A" , qty: {$lt:30}})

//OR
db.inventory.find({ $or: [{ status: "A"}, { qty: { $lt:30}}]})
db.inventory.findone( { status: { $in: ["A" , "D"] } } )