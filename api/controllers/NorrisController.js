/**
 * NorrisController
 *
 * @description :: Server-side logic for managing Norris
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');

var norrisDE = fs.readFileSync("assets/norrisDE", 'utf8').split("\n");

module.exports = {

  /**
   * `NorrisController.random()`
   */
  random: function (req, res) {
    
    get_line("assets/norrisDE",function(err, line) {
        if(err) return "Oh noes "+ err;
        return res.json({
          text: line
        });
    });
  }
};


function get_line(filename, callback) {
 //   var data = fs.readFileSync(filename, 'utf8');
 //   var lines = data.split("\n");

    callback(null, norrisDE[getRandomInt(0,norrisDE.length)]);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}