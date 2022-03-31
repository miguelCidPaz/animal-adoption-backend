const adoptionClient = require("./conection");

class sheltersManager {

    //Create shelters, comprobate sql injection and insert in table shelters
    static async createShelter(data) {
        if (!this.#comprobate(data)) return false

        const query = `INSERT INTO shelters (nameshelter, pass, phone, email) 
        VALUES('${data.name}', '${data.pass}', '${data.phone}', '${data.email}')`

        try {
            await adoptionClient.query(query);
            return true
        } catch (e) {
            console.error(e)
            return false
        }
    }

    //Return all shelters or empty arr
    static async getAllShelters() {
        const query = `SELECT * FROM shelters`;

        try {
            const shelters = await adoptionClient.query(query);
            const result = this.#securize(shelters.rows);
            return result
        } catch (e) {
            return []
        }
    }

    //Delete pass for security
    static #securize(data) {
        for (let item of data) {
            delete item.pass
        }
        return data
    }

    //Comprobate sql injection
    static #comprobate(data) {
        if (Object.values(data).length < 4) return false
        if (data.pass.length === 0 || data.name.includes("=", [0])) return false
        return true
    }

}

module.exports = sheltersManager