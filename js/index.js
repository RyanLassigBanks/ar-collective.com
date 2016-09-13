let events = document.getElementsByClassName('event_always_visable')

for (eventObj of events) {
   eventObj.addEventListener('click', () => {
      let description = eventObj.nextElementSibling
      let childCount = description.childrenElementCount
      console.log(description.children.length)
      if (!description.children.length) {
         let p = document.createElement("p")
         let text = document.createTextNode(`Be there <br>
                        For the rap battle! <br>
                        It's going to be <br>
                        Interspectacular <br>
                        Fantabulous <br>
                        It'll blow your socks off! <br>
                        It's one of those things <br>
                        Where machine versus man <br>
                        Man versus woman <br>
                        Woman versus your mother <br>
                        Be there! <br>
                        Intergalactic rap battle <br>
                        It's... instupituous!!`)

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
