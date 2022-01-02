const btns = document.querySelectorAll('.divbtn')
let elemIndex= 1;
console.log(btns)
btns.forEach((btnElem, key)=>{
    elemIndex = key + 1;
    console.log(`.qcm-${elemIndex} .divbtn button`)
    document.querySelector(`.qcm-${elemIndex} .divbtn button`).addEventListener('click',(event)=>{
      console.log(event.target.closest('.qcm'))
        const elemIndexQuestion =Number.parseInt(event.target.closest('.qcm').classList[1].split('-')[1])
        if(elemIndexQuestion!==btns.length){
            document.querySelector(`.qcm.qcm-${elemIndexQuestion}`).classList.remove('active')
            document.querySelector(`.qcm.qcm-${elemIndexQuestion+1}`).classList.add('active')
        }
    })
})