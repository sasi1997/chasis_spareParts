
const sparePartModel = require('../model/sparePart');


const data = {
    sparePart: async (req, res) => {
        let location = "mumbai";
        if (location == req.body.location) {
          if (req.body.year && req.body.model) {
            console.log(req.body, 'body');
            let data = sparePartModel.find({ year: req.body.year, sparePartModel: req.body.model })
            if (data) {
              res.send(" spare part found !")
            } else {
              res.send(" not found.. ")
            }
          } else {
            res.send("please provide basic details")
          }
        } else {
          res.send("Location not valid")
        }
    }
}

module.exports = data