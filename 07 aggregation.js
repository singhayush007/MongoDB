db .orders.aggregates([
    // Stage 1 :Filter-Pizza order document by pizza size 
{
    $match: { size: "medium" }
}, 
// Stage 2: Group reminding documents by pizza name and calculate total quantity 
{
    $group: { _id: "$name" , totalQuantity: { $sum: "$quantity"}}
}
])