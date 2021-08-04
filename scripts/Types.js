import { getTypes, setType, getOrderBuilder } from "./database.js"

const types = getTypes()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type" && event.target.checked === true) {
            setType(parseInt(event.target.value))
        }
    }
)

export const Types = () => {

    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = types.map(type => {
        return `<li>
            <input ${ (type.id === orderBuilder.typeId) ? "checked" : "" } type="radio" name="type" value="${type.id}" /> ${type.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}