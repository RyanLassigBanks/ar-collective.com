let events = document.getElementsByClassName('event_always_visable')

for (let eventObj of events) {
   eventObj.addEventListener('click', () => {
      let description = eventObj.nextElementSibling
      if (!description.children.length) {
         let p = document.createElement("p")
         let text = document.createTextNode(
            `Be there
            For the rap battle!
            It's going to be
            Interspectacular
            Fantabulous
            It'll blow your socks off!
            It's one of those things
            Where machine versus man
            Man versus woman
            Woman versus your mother
            Be there!
            Intergalactic rap battle
            It's... instupituous!!`
         )

         p.appendChild(text)
         p.style.opacity = "0"
         description.appendChild(p)

         let pHeight = description.children[0].offsetHeight
         description.style.height = (pHeight + 20) + "px"

         setTimeout(() => p.style.opacity = "1", 2)

      } else {
         let p = description.children[0]
         p.style.opacity = "0"
         description.removeChild(description.children[0])
         description.style.height = "0px"
      }
   })
}
