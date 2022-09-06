const nums = document.querySelectorAll('.num span')
const counter = document.querySelector('.counter')
const finalmessage = document.querySelector('.final')
const replay = document.querySelector('.replay')

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalmessage.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    }) +

    num[0].
    classList.add('in')
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1

        num.addEventListener('animationend', (e) => {
            if (e.animationName == 'goIn' && inx !== nextToLast) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalmessage.classList.add('show')
            }
        })
    })
 }
 replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()


 })
//comands for document object model. It is a programming interface that allows to create, change, 