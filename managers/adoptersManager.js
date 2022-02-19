

class AdoptersManager{
    
    addAdopter(){
        adopter = adoptionClient.query(`INSERT INTO Adopters VALUES (id,name,adress,age,personalId,state_adoption_id);`)
        return new Adopter(adopter)
    }
    
    
    getByCriteria(criteria={}){
        adopters = adoptionClient.query(`SELECT * FROM Adopters WHERE ${myCriteria};`)
        return adopters.map((adopter) => new Adopter(adopter))
    }


    getbyId(id){
      adopter = fjsdñfls
      return new Adopter(adopter)
    }

    createAdopter(adopter){
        sql="pepe, pepe1, 54365"
        adoptionClient.query(`INSERT INTO ....... (${sql});`)
    }

}