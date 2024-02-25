const { findPreferenceById } = require("../services/preferenceService")


const getPreferenceByEmailBD = async (req, res) => {
try {
    const {_id} = req.query
    const search = await findPreferenceById(_id)

    res.status(200).json(search)
} catch (error) {
    res.status(500).json(error.message)
}
  
}

module.exports = getPreferenceByEmailBD