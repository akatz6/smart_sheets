var user = require('../controllers/users.js');

module.exports = function(app){
	app.get('/get_sheet', user.get_sheet)
	app.post('/post_sheet', user.post_sheet)
	app.post('/delete_sheet', user.delete_sheet)
}