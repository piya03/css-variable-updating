const inputs = document.querySelectorAll('.controls input')
function update(){
  console.log(this.value)
  const suffex = this.dataset.sizing || '';
  //console.log(suffex)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffex)
 // console.log(this.dataset)
}
inputs.forEach((eachinput)=>{
  eachinput.addEventListener('change', update)
    eachinput.addEventListener('mousemove', update)

})




