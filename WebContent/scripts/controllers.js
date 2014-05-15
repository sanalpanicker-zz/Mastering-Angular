function HelloController($scope){
	
	$scope.greeting = {
			text : 'Hello'
	};
	
}

function CartController($scope){	
$scope.items = [{title:'iMac',quantity :8,price :1400},{title:'iPad',quantity :18,price :400},{title:'ipod',quantity :28,price :140}];	
$scope.remove =  function(index){$scope.items.splice(index,1);};
};

var message = {
		
		firstText : "Hai how are you",
		
};
function messageController($scope){	
	$scope.message = message;
	};