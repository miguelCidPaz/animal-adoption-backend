

class AdoptersManager{

    getByCriteria(criteria={}){
        adopters = adoptionClient.query(`SELECT * FROM Adopters WHERE ${myCriteria};`)
        return adopters.map((adopter) => new Adopter(adopter))
    }

    getbyId(id){
      adopter = fjsdñfls
      return new Adopter(adopter)
    }
    
    addAdopter(){
      adopter = adoptionClient.query(`INSERT INTO Adopters VALUES(id,name,adress,age,personalId,state_adoption_id
      )`)
      new Adopter(adopter)
    }
    
    addReservation(){

      reservation = adoptionClient.query(`INSERT INTO state_adoption VALUES(id, idPets, idAdopter, adoptionStatus)`)
      new state_adoption(reservation)
    }
}

