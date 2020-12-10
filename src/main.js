import Select from "svelte-select"

const el = document.getElementById('log')
if (typeof Select === 'string') {
    el.textContent = 'Not an SvelteComponent, but a string:' + Select
    import('https://cdn.skypack.dev/svelte-select').then(module=> {
        if (typeof module.default !== 'string') {
            console.log('Expecting:', module.default)
        }
    })
}