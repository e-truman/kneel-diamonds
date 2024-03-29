import { getStyles, setStyle, getOrderBuilder } from "./database.js"

const styles = getStyles()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style" && event.target.checked === true) {
            setStyle(parseInt(event.target.value))
        }
    }
)


export const JewelryStyles = () => {

    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        return `<li>
        <input ${ (style.id === orderBuilder.styleId) ? "checked" : "" } type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`

    })
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

