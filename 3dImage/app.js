let wrapper = document.querySelector('.wrapper')
let sides = document.querySelectorAll('.box')

sides.forEach((side, i) =>{
    side.addEventListener('click', () =>{
        wrapper.style.transform = `rotateX(-15deg) rotateY(-${i*60}deg)`
    })
})