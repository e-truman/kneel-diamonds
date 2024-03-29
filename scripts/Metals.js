import { getMetals, setMetal, getOrderBuilder } from "./database.js"

const metals = getMetals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal" && event.target.checked === true) {
            setMetal(parseInt(event.target.value))
            }
        }

)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        const orderBuilder = getOrderBuilder()


        // if(metal.id === ordeBuilder.metalId())
        html += `<li>
            <input ${ (metal.id === orderBuilder.metalId) ? "checked" : "" } type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
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

