angular.module('1110App').controller('yi', function ($scope,$http) {
    $http({
		method:"get",
		url:"http://www.somenote.cn:1602/list1"
	}).success(function (e){
		$scope.mgf=e[0].content;
	})
});

