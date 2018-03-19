 
angularnodeApp.controller('ResultsCtrl', ['$scope' ,  'jsonModels', 

// Navigating down through a nested structure of objects and arrays can be confusing to the human reader.
// Therefore, allocating a nested structure to a smaller variable for subequent references over the following
// lines of code can make the code a bit neater.
// applyPerStudent below demonstrates this with S (Students) and A (Assessments)


	function($scope, jsonModels  ) {  // jsonModels supplies the data for the view and is hard-coded in the service
		
		$scope.formMeta = {};
		$scope.formMeta.showMetaData = false;	
 		$scope.data = jsonModels.get(1); // store an array of different subject results => later from the cloud via service => ajax	
		
		// // some of the code here should really be in the service that stores the data => EXERCISE
		
	$scope.getForm = function(index) {  // returns an ng-form object ADVANCED
			return $scope.outerForm['form_'+index];
		}
		
	$scope.addAssessment = function(n,list) { // add a new assessment header, that will need values inputed by user and per student
		list.push({"aName" : null, "aWeight" : 0, "date" :""});
		$scope.outerForm['form_' + n].$dirty =  true;
		$scope.outerForm['form_' + n].$pristine =  false;  
		$scope.outerForm['form_' + n]['aName' + list.length-1] = {}; // this object does not exist on the view yet, so create in empty
		$scope.outerForm['form_' + n]['aName' + list.length-1].$dirty = true;
	}	 
	
	$scope.applyPerStudent = function (index,	aName, aWeight) { // ensure each student has a slot for this assessment
	
        aWeight = parseInt(aWeight); // ensure the number is an integer in case comes in as a string
		
		// Make accessing some objects easier by using an alias variable to shorten the navigation path
		var S = $scope.data[index].students;
		var sN = S.length;   // total number of students
		var A = $scope.data[index].assessment_details.list;
		var aN = A.length;  // number of assessments each student should have	
		var i,j;
		var studentResult;
 
		var tempArray = []; // used a number of times to detect lack of required object or objects presence

		tempArray = A.filter(function(itm){ // check if the assessment name matches any existing name, no duplicates
					return  itm.aName === aName; 
				});	

		if (tempArray.length > 1) // as the name change has been applied > 1 indicates a duplicate
		{
			alert("Appears to be duplicate assessment name, rejecting");
			return;
		}
		
		for(i=0;i < sN; i++) { // Ensure each student has a position for the assessment, and regenerate

			tempArray = S[i].assessments.filter(function(itm){ // detect if there is an entry for this assessment for this student
					return  itm.type === aName; 
				});
 
			if (tempArray.length === 0) { // append a missing assessment to a student
				S[i].assessments.push( {"type": aName,   "mark": 0,  "weight" : aWeight,  "contribute" : 0,   "comment" :""} );				
			}
			else {  // tempArray[0] is an alias to the assessment object
				tempArray[0].weight = aWeight; // store the weight in case it has changed or is new
				tempArray[0].contribute = (parseInt(tempArray[0].mark) * aWeight) / 100;
			}
			
			// at this stage we can calculate a student's overall result across all the current subject's assessment
			studentResult = 0;
 	
			S[i].assessments.map(function(itm){ // iterate over all of a student's assessments
				    if (itm.contribute){ 	 		
				        studentResult = studentResult + itm.contribute ;
					}					 
				});
			S[i].weightedAverage = studentResult;	 // store the overall student result	
		} // for each student	
	} // applyPerStudent
		
	$scope.recalculateSubjectAll = function(index) {  // update all the results across all assessments for one subject  
 		
		var A = $scope.data[index].assessment_details.list; // Make accessing some objects easier by using an alias variable
		var aN = A.length;  // number of assessments each student should have	
 	
		A.map(function(itm){ // iterate over each assessment to update all the students for that assessment
			if (itm.aName.length > 0 && itm.aWeight > -1) { // only calculate if the assessment has a name and weight
				$scope.applyPerStudent(index,itm.aName,itm.aWeight);
			}
		});	
	} // recalculateSubjectAll
 
	}]); // ResultsCtrl
	
 angularnodeApp.filter('percentage', ['$filter', function ($filter) { // used to format the view percentage
  return function (input, decimals) {
    return $filter('number')(input * 1, decimals) + '%';
  };
}]); 	
	
 
 	

	 
	 
	 
	 