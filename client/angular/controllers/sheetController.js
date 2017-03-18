app.controller('sheetController', ['$scope', '$location', 'sheetFactory',function($scope, $location, sheetFactory){
	index = function(){
		sheetFactory.get_sheet(function(returned_data){
			$scope.lists = returned_data.data.data.data;
		})
	}

	$scope.submit = function(){
		var object = { item:$scope.item};
		sheetFactory.post_sheet(object , function(sendUser){
			index();
		})
	}
	$scope.delete = function(id){
		sheetFactory.delete_sheet(id, function(returned_data){
			index();
		})
	}
	index();
}]);