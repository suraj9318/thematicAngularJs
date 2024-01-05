// var thematicDashboardModule = angular.module('thematicDashboardModule', []);
// thematicDashboardModule.controller("thematicDashboardController", [ '$scope', 'thematicDashboardService', '$sce', function($scope, thematicDashboardService, $sce) {
// 	$scope.themeName = {};
// 	$scope.uploadType = {};
// 	$scope.uploadedData = {};
// 	$scope.languageData = {};
// 	$scope.themeIdValue = 6;
// 	$scope.docType = 1;
// 	$scope.keyword = "";
// 	$scope.languageId = "0";
// 	$scope.limit = "0";
// 	$scope.loader = true;
// 	$scope.themeLoader = true;
// 	uploadedDetails();
	
// 	thematicDashboardService.findLanguage().then(function(response) {
// 		$scope.languageData = response.data;
// 	});
	
// 	thematicDashboardService.findThemeName().then(function(response) {
// 		$scope.themeName = response.data;
// 		$scope.themeLoader = false;
// 	});
	
// 	thematicDashboardService.findUploadType().then(function(response) {
// 		$scope.uploadType = response.data;
// 	});
	
// 	function uploadedDetails() {
// 		$scope.uploadedDataLength = "";
// 		thematicDashboardService.findUploadedDetails($scope.themeIdValue, $scope.docType, $scope.keyword, $scope.limit, $scope.languageId).then(function(response) {
// 			$scope.uploadedData = response.data;
// 			$scope.uploadedDataLength = Object.keys(response.data).length;
// 			$scope.loader = false;
// 		});
// 	}
// 	$scope.changeDocTab = function(docType) {
// 		$scope.uploadedData = {};
// 		$scope.docType = docType;
// 		$scope.resetSearch(docType);
// 	}
    
// 	$scope.changeThemeTab = function(themeId) {
//         debugger
// 		$scope.uploadedData = {};
// 		$scope.themeIdValue = themeId;
// 		$scope.docType = 1;
// 		$(".uploadLi"+themeId).find('.active').attr('aria-selected', false).removeClass('active');
// 		$("#uploadLi"+themeId+1).find('button').addClass('active').attr('aria-selected', true);
// 		$scope.resetSearch($scope.docType);
// 		uploadedDetails();
// 	}


// 	$scope.openModal = function openModal(contentId, docType) {
// 		var id = "#contentImage"+contentId+docType;
// 		var imageUrl = $(id).attr('src');
// 		$('#modalImage').attr('src', imageUrl);
// 		$('#imageModal').modal('show');
// 	}
// 	$scope.closeModal = function closeModal() {
// 		$('#imageModal').modal('hide');
// 	}
	
// 	$scope.searchContent = function searchContent() {
// 		$scope.uploadedData = {};
// 		$scope.keyword = $("#search"+$scope.themeIdValue).val();
// 		$scope.languageId = $("#language"+$scope.themeIdValue).val();
// 		$scope.limit = $("#num"+$scope.themeIdValue).val();
// 		$scope.loader = true;
// 		var regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
// 	    if (regex.test($scope.keyword)) {
// 	    	$("#search"+$scope.themeIdValue).val('');
// 	    	$scope.keyword = "";
// 	    }
// 		uploadedDetails();
// 	}
// 	$scope.resetSearch = function resetSearch() {
// 		$scope.keyword = "";
// 		$scope.languageId = "0";
// 		$scope.limit = "0";
// 		$scope.loader = true;
// 		$("#search"+$scope.themeIdValue).val('');
// 		$("#language"+$scope.themeIdValue).val('0');
// 		$("#num"+$scope.themeIdValue).val('0');
// 		uploadedDetails();
// 	}

    
// }]);
