let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')
let keyCodeElem = $.querySelector('#keyCode')
let keyElem = $.querySelector('#key')
let locationElem = $.querySelector('#location')
let whichElem = $.querySelector('#which')
let codeElem = $.querySelector('#code')

document.body.addEventListener('keydown', function (event) {
	event.preventDefault();

	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
    var eventkeyCode = event.keyCode
	var eventkey = event.key
	var eventlocation = event.location
	var eventwhich =event.which
	var eventcode = event.code



    keyCodeElem.innerHTML = eventkeyCode
	keyElem.innerHTML = eventkey
	locationElem.innerHTML = eventlocation
	whichElem.innerHTML = eventwhich
	codeElem.innerHTML = eventcode
})