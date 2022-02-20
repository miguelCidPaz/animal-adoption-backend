class AdoptersManager {
  createAdopter() {
    sql_adopter =
      /*name, id...*/
      adopter = adoptionClient.query(
        `INSERT INTO Adopters VALUES (${sql_adopter});`
      );
    return new Adopter(adopter);
  }

  getByCriteria(criteria = {}) {
    adopters = adoptionClient.query(
      `SELECT * FROM Adopters WHERE ${myCriteria};`
    );
    return adopters.map((adopter) => new Adopter(adopter));
  }

  getbyId(id) {
    adopter = fjsdñfls;
    return new Adopter(adopter);
  }

  /* 
    Ejemplo de Miguel

    createAdopter(adopter){
        sql="pepe, pepe1, 54365"
        adoptionClient.query(`INSERT INTO ....... (${sql});`)
    }
    */
}
module.exports = AdoptersManager;
