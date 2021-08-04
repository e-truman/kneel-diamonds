import { getSizes, setSize, getOrderBuilder } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size" && event.target.checked === true) {
            setSize(parseInt(event.target.value ))
        }
    }
)

export const DiamondSizes = () => {
const orderBuilder = getOrderBuilder()

    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input ${ (size.id === orderBuilder.sizeId) ? "checked" : "" } type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

