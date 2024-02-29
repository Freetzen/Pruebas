
const putPlan = async (req, res) => {
 try {
    const { _id, price } = req.body
        const planUpdate = await updateProject(_id, {
            price
        })
        
    res.status(200).json(planUpdate)
} catch (error) {
     res.status(500).json(error.message)    
 }
}

module.exports = putPlan