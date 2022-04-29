function acaosim() {
	var pai = document.getElementById('pai')
	const template = `
	<input class="aguardo" type="text" id="resultado" disabled placeholder="Aguardando sua resposta">
	`
	pai.innerHTML = template

	var escolhasim = document.getElementById('escolhasim').value
	console.log(escolhasim)

	if (escolhasim == 'sim') {
	document.getElementById('resultado').value = 'Reserve a sua smart bike abaixo!'
	}
}

function acaonao() {
	var pai = document.getElementById('pai')
	const template = `
	<input class="aguardo" type="text" id="resultado" disabled placeholder="Aguardando sua resposta">
	`
	pai.innerHTML = template

	var escolhanao = document.getElementById('escolhanao').value
	console.log(escolhanao)

	if (escolhanao == 'nao') {
	document.getElementById('resultado').value = 'Que pena, quem sabe na próxima :('
	}
}