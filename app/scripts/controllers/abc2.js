angular.module('1110App')
  .controller('er', function ($scope,$http) {
    $http({
		method:"get",
		url:"http://www.somenote.cn:1602/list2"
	}).success(function (e){
		$scope.mgf2=e[0].content;
	})
			
});
