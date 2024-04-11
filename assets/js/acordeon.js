const acordeonTrigger = document.querySelectorAll('.acordeon .trigger')

acordeonTrigger.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')
        
        if (isOpen) {
            acordeon.classList.remove('open')
            acordeon.classList= Array.of(acordeon.classList).filter(className => className !== 'open')
        } else {
            acordeon.classList.add('open')
        }
    })
})