

class PetsManager{
    /*{name:pepe, dni:123} */
    /*name=pepe AND */
    /*dni=123 AND */
    getAllPets(){
        pets = adoptionClient.query(`SELECT * FROM Pets;`)
        return pets.map((pet) => new Pet(pet))
    }
    
    getByCriteria(criteria={}){ 
        const stringifiedObj = Object.entries(criteria).map(x=>x.join(":")).join("AND");
          
        pets = adoptionClient.query(`SELECT * FROM Adopters WHERE ${criteria};`)
        return pets.map((pet) => new Pet(pet))
    }

    getbyId(id){
        pet = adoptionClient.query(`SELECT * FROM Pets WHERE id =${id};`)
        console.log(pet);
        //return pet.map((pet) => new Pet(pet))
    }
}