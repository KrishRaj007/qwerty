//const button=document.querySelector('button')

//button.classList.add('btn')
//button.classList.remove('btn')
//button.classList.toggle('btn')

//function message(){
   // alert("You have clicked the button")}
//button.addEventListener('click', message)
//button.removeEventListener('click', message)

//const button1=document.querySelector('#Click Here')
//button1.addEventListener('keyup', function(event){
  //  console.log(event.key)})


  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log("Form Submitted")
  }
const form=document.addEventListener('form')
form.addEventListener('submit', handleSubmit)