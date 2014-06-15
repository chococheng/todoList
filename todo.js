Parse.initialize("HcMQktFiJrF1lR9Wb2ytqJN61YOGpYDYfziAzuyW", "3O4msQwmTAN1JzOGZSmitcC7MntJI560p1y5PqBt");

var Todo=Parse.Object.extend('Todo');
var query = new Parse.Query(Todo);
$(document).ready(function(){

	query.notEqualTo("title", null);
	query.find({
  		success: function(results) {
    		for (var i = 0; i < results.length; i++) { 
    		var object = results[i];
        	$('#list').append('<li><input class="cb" type="checkbox"></input>'+object.get('title')+'<div class="delete" id="'+i+'" style="width:100px;background-color:yellow">delete</div></li>');
    		}
    		
  		},
  		error: function(error) {
    		alert("Error: " + error.code + " " + error.message);
  		}
	});

	$('#add-todo').click(function(e){
		e.preventDefault();
		
		var x=fm.todotext.value;
		var todo=new Todo();

		todo.save({
			title:x,
			done:false
		});
		var addquery=new Parse.Query(Todo);
		addquery.find({
			success: function(addObj){
				$('#list').append('<li>'+x+'<div class="delete" id="'+addObj.length+1+'" style="width:50px;background-color:yellow">delete</div></li>');
			},
			error: function(){

			}

		});
		
		}
	);
	$(document).on('click','.delete',function(){
		$(this).parents('li').remove();
		var deleteQuery=new Parse.Query(Todo);
		var y=$(this).attr('id');
		deleteQuery.find({
			success: function(obj){
				var o=obj[y];
				o.destroy({
  					success: function(myObject) {
   				 		
  					},
  					error: function(myObject, error) {
    					// The delete failed.
    					// error is a Parse.Error with an error code and description.
    			
  					}
				});
			},
			error: function(error){

			}
		});
		
	});
	$(':checkbox').change(function(){
		if($(this).attr("checked"))
        {
            
        }
        else
        {

        }
	})

});


