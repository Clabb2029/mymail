var messageNumber = document.getElementsByClassName('card').length
document.getElementById('count').textContent = messageNumber

for(var i=0; i<document.getElementsByClassName('trash').length; i++) {
    document.getElementsByClassName('trash')[i].addEventListener("click",
      function(){
        this.parentNode.remove()
        var messageNumber = document.getElementsByClassName('card').length
        document.getElementById('count').textContent = messageNumber
        // document.getElementById('count').textContent --
      });}
  

      
var namearea = document.getElementById('namearea')
var textarea = document.getElementById('textarea')

document.getElementById('addbutton').addEventListener("click", function(){
  console.log("namearea value : " + namearea.value)
  console.log("textarea value : " + textarea.value);

  // main div creation
  let newMessage = document.createElement("div");
  let body = document.body;
  body.append(newMessage);
  newMessage.classList = 'card';

  // avatar pic adding
  let avatarIcon = document.createElement("img");
  avatarIcon.src = "/images/grey-avatar.jpg";
  newMessage.appendChild(avatarIcon);
  avatarIcon.classList = "avatar";

  // div creation for name and message content
  let message = document.createElement('div');
  newMessage.appendChild(message);
  message.classList = "message";

  // name adding
  let name = document.createElement('h6');
  message.appendChild(name);
  name.classList = "name";
  name.textContent = namearea.value;

  // message content adding
  let text = document.createElement('p');
  message.appendChild(text);
  text.classList = 'text';
  text.textContent = textarea.value;

  //trash adding
  let trashIcon = document.createElement('img');
  newMessage.appendChild(trashIcon);
  trashIcon.classList = 'trash';
  trashIcon.src = '/images/trash.png'

  textarea.value = ''
  namearea.value= ''

  // newMessage.insertBefore(document.getElementsByClassName('card'))

  var messageNumber = document.getElementsByClassName('card').length
  document.getElementById('count').textContent = messageNumber

  trashIcon.addEventListener('click', function(){
    this.parentNode.remove()
    var messageNumber = document.getElementsByClassName('card').length
    document.getElementById('count').textContent = messageNumber
  })

});
