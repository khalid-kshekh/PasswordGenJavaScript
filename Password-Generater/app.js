 const mainHanding = document.getElementById('main-handing')
 const btn = document.getElementById('btn')

 let range = document.getElementById('range')
 let rangeHanding = document.getElementById('range-handing')
  rangeHanding.innerText = range.value

  range.addEventListener('input',(e)=>{
   rangeHanding.innerText = e.target.value
  })

  let uperCase = document.getElementById('upercase')
  let lowerCase = document.getElementById('lowercase')
  let numberCase = document.getElementById('number')
  let symbolCase = document.getElementById('symbol')

 btn.addEventListener('click',(e)=>{
    e.preventDefault()

    const UperStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const LowerStr = 'abcdefghijklmnopqrstuvwxyz'
    const NumberStr = '0123456789'
    const SymbolStr = '~!@#$%^&*_-+=?><'

    let finalStr = " "
    let Result = ''

    if(uperCase.checked){
      finalStr +=UperStr   
    } 
    if(lowerCase.checked){
      finalStr +=LowerStr
    }
    if(numberCase.checked){
      finalStr += NumberStr
    }
    if(symbolCase.checked){
      finalStr += SymbolStr
    }

    if(finalStr === ' '){
      alert('Please at least one select catagery')
    }

    for(let i=0; i < range.value; i++){
      let randomValue = Math.floor(Math.random() * finalStr.length)
       Result += finalStr[randomValue]
      
    }

    mainHanding.innerText =`${Result}`
 })
 const copy = document.getElementById('copy')
 copy.addEventListener('click',()=>{
  navigator.clipboard.writeText(mainHanding.innerText)
 })