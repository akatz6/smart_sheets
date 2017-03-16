app.factory('sheetFactory', ['$http', function($http){
	function sheetFactory(){
		this.post_sheet =  function(item, callback){
			$http.post('/post_sheet', item).then(function(retuned_data){
				callback(retuned_data)
			})
		}
		this.get_sheet =  function(callback){
			$http.get('/get_sheet').then(function(retuned_data){
				callback(retuned_data)
			})
		}
		this.delete_sheet = function(id, callback){
			var object = {id:id}
			$http.post('/delete_sheet', object).then(function(retuned_data){
				callback(retuned_data)
			})
		}
	}
	return new sheetFactory();
}]);