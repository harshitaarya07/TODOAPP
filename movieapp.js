/* Attaching Event listeners to different tags */

/* Get the element which we want to attach listener to.
   In this case the .delete class inside the li span
*/

/*var btns = document.querySelectorAll('#movie-list .delete');
btns.forEach(function(btn){
  // Each button is attached with the click event
  btn.addEventListener('click', function(e){
    /* we want to remove the li associated with which delete button we click.
    e.target will get me the element which was triggered (in this case <span class='delete'>)
    */
    //const li = e.target.parentElement;

    /*
     This will remove the li which is the target in previous line.
     the target li has the parent ul. We fetch the parent and then delete the child
     by removeChild(li) method. li beong the taget li.
    */
  /*  li.parentNode.removeChild(li)
  });
});*/
// Drawback of this method is that it will be expensive task to attach each button with event listeners
// TO check the drawback add the following code from developer console in html and try deleting the new element.
/*
<li>
  <span class="name">New Movie</span>
  <span class="delete">delete</span>
</li>
*/


/*
  --> Event Bubbling and using it in deleting the movies
      We will assign event to the ul tag and when the delete button is clicked,
      event will bubble up to the ul and then we can delete the li associated to the event
  --> We are using the concept of Event Bubbling to attach the event to UI.
      Advantage: attaching the event to <ul> will help us delete any new <li> attached to movie-list
  --> Now this is good because if we have to add another movie to the list, we can delete it unlike the previous event listener.
*/


// code for delete the movie....

 var list = document.querySelector('#movie-list ul');

 list.addEventListener('click', function(e){
   if(e.target.className === 'delete'){          // We want to get where did the click happened, so className
     //console.log(e.target);
     var li = e.target.parentElement;         // this is the li which is the parent to the delete and we want to delete it.
     //console.log(li);
     //li.parentNode.removeChild(li);
     list.removeChild(li);

   }
 })

// for hide the list:::::

var hide=document.getElementById('hide');
hide.addEventListener('click',function(e){
    if(hide.checked == true){
        list.hidden= true;
    }else if(hide.checked == false){
        list.hidden= false;
    }
});

// code below is for add a movie to list::::

var form = document.forms['add-movie'];
form.addEventListener('submit',function(e){
    
    e.preventDefault();
    
    var vall=form.querySelector('input[type="text"]').value;
    
    var li=document.createElement('li');
    
    var muvi=document.createElement('span');
    
    var del=document.createElement('span');
    
    li.appendChild(muvi);
    li.appendChild(del);
    list.appendChild(li);

    muvi.textContent = vall;
    del.textContent = 'delete';
    
    muvi.classList.add('name');
    del.classList.add('delete');
    

});

// below code is now working for searching a movie;

var searchMovie = document.querySelector('input[type="text"]');
searchMovie.addEventListener('keyup',function(e){
    var fltr = searchMovie.value.toUpperCase();
    var list= document.querySelector('#movie-list ul');
    var fullli = list.querySelectorAll('li');
    var li = list.querySelectorAll('li .name');
     for(i=0;i<li.length;i++){
        var a=li[i].textContent;
        var txtvalue = a.toUpperCase();
         if(txtvalue.indexOf(fltr) > -1){
            fullli[i].style.display = "";
        }else{
            fullli[i].style.display = "none";
        }
    }
});