/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  //If the environment is production, then listen on port 80 
  if(sails.config.environment === "production") {
    http.createServer( sails.hooks.http.app ).listen( 80 );        
  }
  cb();

};
