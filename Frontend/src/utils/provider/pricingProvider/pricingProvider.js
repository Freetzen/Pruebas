import axios from "axios"

const pricingProvider = {
    async createPreference(project) {
        try {
            console.log('prov1', project)
            const response = await axios.post('/createpreference', project)
            console.log('prov2')
            const {id} = response.data
            return id
        }catch (error) {
            console.log(error.message)
        }
    }


}



export default pricingProvider