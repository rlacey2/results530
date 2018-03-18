 
 angularnodeApp.service('nameService', [function () {	
 
    var storedName = "";
	
	function setName(n){  storedName = n;}
	function getName(){return   storedName;}
	
	return {
		setName :  setName,
		getName : getName
	}
}]); 


angularnodeApp.service('jsonModels', [function () {	
 
  var data  = [  // two separate models in this array
	
  [
    {
      "subject": "Enterprise Development",
      "when": "201718_S2",
	  
	  assessment_details : { list : [ {"aName" : "ass1", "aWeight" : 20, "date" :""},
									 {"aName" : "ass2", "aWeight" : 30, "date" :""},
									 {"aName" : "ass3", "aWeight" : 50, "date" :""}
								  ]
		  
	  },
	  
	  
	  
      "students": [
        {
          "name": "Bloggs, Joe",
          "assessments": [
            {
              "type": "ass1",
              "mark": 45
            },
            {
              "type": "ass2",
              "mark": null,
              "comment": "missing"
            },
            {
              "type": "ass3",
              "mark": 65
            }
          ]
        },
       {
          "name": "Omega, Beta",
          "assessments": [
            {
              "type": "ass1",
              "mark": 10
            },
            {
              "type": "ass2",
              "mark": 20 
            },
            {
              "type": "ass3",
              "mark": 30
            }
          ]
        },
        {
          "name": "Daoine, Eile",
          "assessments": [
            {
              "type": "ass1",
              "mark": 50
            },
            {
              "type": "ass2",
              "mark": 60
            },
            {
              "type": "ass3",
              "mark": 25,
              "comment": "arrived 30min late"
            }
          ]
        }
      ]
    },
    {
      "subject": "Web Development",
      "when": "201718_S2",
	  
	  assessment_details : { list : [ {"aName" : "ass1", "aWeight" : 20, "date" :""},
									 {"aName" : "ass2", "aWeight" : 80, "date" :""} 
								  ]
		  
	  },	  
	  
      "students": [
	  
       {
          "name": "Omega, Beta",
          "assessments": [
            {
              "type": "ass1",
              "mark": 11
            },
            {
              "type": "ass2",
              "mark": 22 
            } 
          ]
        },	  
        {
          "name": "Another, Alpha",
          "assessments": [
            {
              "type": "ass1",
              "mark": 45
            },
            {
              "type": "ass2",
              "mark": 0,
              "comment": "missing"
            } 
          ]
        },
        {
          "name": "Smith, Paddy",
          "assessments": [
            {
              "type": "ass1",
              "mark": 56
            },
            {
              "type": "ass2",
              "mark": 66
            } 
          ]
        }
      ]
    }	
  ]	
	,
	// model 2 data,
 [
 	 { "name": "Omega, Beta", 
	   "subjects" :
	   [
	   { "subject": "Web Development", 
      "when": "201718_S2",           "assessments": [
            {
              "type": "ass1",
              "mark": 11
            },
            {
              "type": "ass2",
              "mark": 22 
            } 
          ]},
	   { "subject": "Enterprise Development", 
      "when": "201718_S2",           "assessments": [
{
              "type": "ass1",
              "mark": 10
            },
            {
              "type": "ass2",
              "mark": 20 
            },
            {
              "type": "ass3",
              "mark": 30
            }
          ]} 
		]
	},
 
 
	 { "name": "Bloggs, Joe", 
	   "subjects" :
	   [
	   { "subject": "Enterprise Development", 
      "when": "201718_S2",           "assessments": [
            {
              "type": "ass1",
              "mark": 45
            },
            {
              "type": "ass2",
              "mark": null,
              "comment": "missing"
            },
            {
              "type": "ass3",
              "mark": 65
            }
          ]}
		]
	},
	 { "name": "Daoine, Eile",
	   "subjects" :
	   [
	   { "subject": "Enterprise Development", 
      "when": "201718_S2",           "assessments": [
{
              "type": "ass1",
              "mark": 50
            },
            {
              "type": "ass2",
              "mark": 60
            },
            {
              "type": "ass3",
              "mark": 25,
              "comment": "arrived 30min late"
            }
          ]}
		]
	} 	,
	 { "name": "Another, Alpha",
	   "subjects" :
	   [
	   { "subject": "Web Development",
      "when": "201718_S2",         "assessments": [
            {
              "type": "ass1",
              "mark": 45
            },
            {
              "type": "ass2",
              "mark": null,
              "comment": "missing"
            } 
          ]}
		]
	}, 	
  { "name": "Smith, Paddy",
	   "subjects" :
	   [
	   { "subject": "Web Development",
      "when": "201718_S2",         "assessments": [
            {
              "type": "ass1",
              "mark": 56
            },
            {
              "type": "ass2",
              "mark": 66
            } 
          ]}
		]
	} 
 ]	
	
	];
   
  
	function get(dataSet){  
	
		return data[dataSet-1];
	
	}
 
	return {
		get :  get 
	}
}]);