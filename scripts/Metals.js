import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {

            setMetal(parseInt(event.target.value), parseInt(event.target.price))
            // event.target.checked = true
            // document.dispatchedEvent( new CustomEvent("state changed"))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {



        // if(metal.id === ordeBuilder.metalId())
        html += `<li>
            <input type="radio" name="metal" price = "${metal.price}" value="${metal.id}" /> ${metal.metal}
        </li>`
            
//     } else {
//         html += `<li>
//         <input type = "radio" name = "metal" value="${metal.id}
//         </li>`
//     }
}

    html += "</ul>"
    // console.log(orderBuilder.matalId)
    return html
}

