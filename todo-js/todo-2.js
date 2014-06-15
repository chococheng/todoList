
$(document).ready(function(){
	
	var items=localStorage.length;
	for(var key in localStorage){
		if(localStorage[key]!=localStorage['dCount']){
			var temp='<li>'+localStorage[key]+'<div class="delete" id="'+key+'"style="width:50px;background-color:yellow">delete</div></li>';
			$('#list').append(temp);
			}}

	
	$('#add-todo').click(function(e){
		e.preventDefault();
		var i=localStorage.length+Number(localStorage.getItem('dCount'))+1;
		var keyname='todolist'+i;

		todo={
			title: fm.todotext.value,
		};
		window.localStorage.setItem(keyname,todo.title);
		location.reload();

	});

	$('#clear-all').click(function(){
		window.localStorage.clear();
	});

	
	$(document).on('click','.delete',function(e){
		e.preventDefault();
		$(this).parents('li').remove();
		var removeStorage=$(this).attr('id');
		window.localStorage.removeItem(removeStorage);

		//計算delete這個div被點了幾次
		var elCounter=0;
		var o=$(this);
		o.count=++elCounter;
		var count={
			count:o.count
		};
		localStorage.setItem('dCount',count.count);

	})
});
