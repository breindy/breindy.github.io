var currentCompany = document.getElementById('csforall')
var pastCompany1 = document.getElementById('codepath')
var pastCompany2 = document.getElementById('ctp')
var pastCompany3 = document.getElementById('win2learn')

var csforallExpBox = document.getElementById('csforallExpBox')
var codepathExpBox = document.getElementById('codepathExpBox')
var ctpExpBox = document.getElementById('ctpExpBox')
var win2learnExpBox = document.getElementById('win2learnExpBox')

var currentExpBox = document.querySelector('.currentExpBox')

pastCompany1.onclick = (function(){
    currentExpBox.classList.add('hideExpBox')
    currentExpBox.classList.remove('currentExpBox')
    console.log(currentExpBox.classList)
    
    codepathExpBox.classList.remove('hideExpBox')
    codepathExpBox.classList.add('currentExpBox')
    console.log(codepathExpBox.classList)
})

pastCompany2.onclick = (function(){
    currentExpBox.classList.add('hideExpBox')
    currentExpBox.classList.remove('currentExpBox')
    console.log(currentExpBox.classList)

    ctpExpBox.classList.remove('hideExpBox')
    ctpExpBox.classList.add('currentExpBox')
    console.log(ctpExpBox.classList)

})

pastCompany3.onclick = (function(){
    currentExpBox.classList.add('hideExpBox')
    currentExpBox.classList.remove('currentExpBox')
    console.log(currentExpBox.classList)

    win2learnExpBox.classList.remove('hideExpBox')
    win2learnExpBox.classList.add('currentExpBox')
    console.log(win2learnExpBox.classList)
})


