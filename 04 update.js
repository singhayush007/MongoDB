db.inventory.findone({ item: "paper" },
{
    $set: { "size.uom": "cm" , status: "p"},
    $currentDate : { lastModified : true}
})

db.inventory.updateOne(
    { item: "paper" },
    {
        $set: { "size.uom": "cm", status: "p" },
        $currentDate: { lastModified: true }
    }
)  

db.inventory.find({"qty": { $lt: 50 }})