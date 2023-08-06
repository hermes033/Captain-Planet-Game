/* MOVE CONTROLS */
var yuxari = 0
var sol = 0
var img = document.querySelector('img')
var btnyux = document.querySelector('.yux')
var btnasg = document.querySelector('.asg')
var btnsol = document.querySelector('.sol')
var btnsag = document.querySelector('.sag')
var goplnt = document.querySelector('.goplnt')

window.onkeypress = function (e) {
    if (e.key == 'w') {
        yuxari -= 20
        img.style.top = `${yuxari}px`
    }
    else if (e.key == 's') {
        yuxari += 20
        img.style.top = `${yuxari}px`
    }
    else if (e.key == 'd') {
        sol += 20
        img.style.left = `${sol}px`
    }
    else if (e.key == 'a') {
        sol -= 20
        img.style.left = `${sol}px`
    }
}

btnyux.onclick = () => {
    yuxari -= 20
    img.style.top = `${yuxari}px`
}

btnasg.onclick = () => {
    yuxari += 20
    img.style.top = `${yuxari}px`
}

btnsag.onclick = () => {
    sol += 20
    img.style.left = `${sol}px`
}

btnsol.onclick = () => {
    sol -= 20
    img.style.left = `${sol}px`
}

goplnt.onclick = () => {
    location.reload()
}

/* INVINSIBILTY */

var btnvsb = document.querySelector('.visible')
var btnivsb = document.querySelector('.invisible')

btnivsb.onclick = () => {
    img.style.opacity = 0.2
}

btnvsb.onclick = () => {
    img.style.opacity = 1
}

/* change sizes */

btnNormal = document.querySelector('.normal')
btnGrow = document.querySelector('.grow')
btnShrink = document.querySelector('.shrink')

btnNormal.onclick = () => {
    img.style.scale = 1
}

btnGrow.onclick = () => {
    img.style.scale = 2
}

btnShrink.onclick = () => {
    img.style.scale = 0.5
}

/* stretch */

btnNormal1 = document.querySelector('.normal1')
btnStretch = document.querySelector('.stretch')

btnNormal1.onclick = () => {
    img.style.height = '56vh'
}

btnStretch.onclick = () => {
    img.style.height = '110vh'
}