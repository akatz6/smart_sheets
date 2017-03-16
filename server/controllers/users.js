var client = require('smartsheet');
var smartsheet = client.createClient({accessToken:'2obk3sxdg9ghp3nhm242fya21'});

module.exports = (function(){
  return {
  	post_sheet:function(req, res){
      console.log(req.body);
  		var sheet = {
      "name": req.body.item,
      "columns": [
        {
            "title": req.body.item,
            "type": "CHECKBOX",
        },
        {
            "title": "Primary Column",
            "primary": true,
            "type": "TEXT_NUMBER"
        },
        {
            "title": "Status",
            "type": "PICKLIST",
            "options": [
                "Not Started",
                "Started",
                "Completed"
            ]
          }
        ]
      };
      
      var options = {
          body: sheet
      };

      smartsheet.sheets.createSheet(options)
      .then(function(data) {
          console.log(data);
          res.json({"success": true});
      })
      .catch(function(error) {
          console.log(error);
          res.json({"error": true});
      });
    }, //end of post sheet method

    get_sheet:function(req, res){
      smartsheet.sheets.listSheets()
      .then(function(data) {
        console.log(data);
        res.json({data: data});
      })
      .catch(function(error) {
        console.log(error);
        res.json({"error": true});
      });
    }, // end of get sheet method

    delete_sheet:function(req, res){
      console.log(req.body);
      var options = {
        id: req.body.id // ID of Sheet
      };
    smartsheet.sheets.deleteSheet(options)
      .then(function (data) {
          console.log(data);
          res.json({"error": true});
      })
      .catch(function (error) {
          console.log(error);
          res.json({"success": true});
      });
    }, // end of delete sheet method
  } 
})();