document.querySelector('#botaocopiar1')
    .addEventListener('click', function(){ 
        document.querySelector('#urlacopiar').select();
        document.execCommand('copy')
})

document.querySelector('#botaocopiar2')
    .addEventListener('click', async function(){ 
        let url = document.querySelector('#urlacopiar').value;
        await navigator.clipboard.writeText(url)
})