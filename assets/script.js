document.getElementById("loading").innerHTML = "Ejecutando JavaScript...<br>Cargando archivo JSON..."
fetch("https://raw.githubusercontent.com/OptiJuegos/OptiJuegos.github.io/main/elements.json")
    .then(response => response.json())
    .then(data => {
        elementsData = data
        document.getElementById("loading").style.display = "none"
        document.getElementById("header").style.display = "block"
        document.getElementById("mainContainer").style.display = "block"
        main()
    }
)



// This is the only way I found to make it so the code wouldn't execute until the JSON file was loaded
// I don't know if it's efficient, but it's definetly easy and doesn't make the code any more complex
function main() {

// ------------------------ Defaults ------------------------ //

tab = {}
tab.selected = "t3"
entry = {}
entry.selected = "e1"

window.addEventListener("resize", compactMode)



// ------------------------ Tabs ------------------------ //

tab.amount = Object.keys(elementsData).length

// Creates the tabs themselves with the info of the JSON
for (let i = 1; i <= tab.amount; i++) {
    let newElement = document.createElement("a")
    newElement.id = "t" + i
    newElement.className = "tabButton"
    newElement.innerHTML = elementsData["t" + i].title
    document.getElementById("tabContainer").appendChild(newElement)
}

// Expands the tab container width depending how many tabs there are
document.getElementById("tabContainer").style.width = tab.amount * 140 + "px"

// Event listeners to change tabs
document.getElementById("tabContainer").addEventListener("mousedown", function(event) {
    if (event.button === 0 && event.target.getAttribute("id") !== "tabContainer") {
        changeTab(event.target.getAttribute("id"))
    }
})

changeTab(tab.selected)



// ------------------------ Entries ------------------------ //

// Event listeners to change entry selection
document.getElementById("entryContainer").addEventListener("mousedown", function(event) {
    if (event.button === 0 && event.target.getAttribute("id") !== "entryContainer") {
        selectEntry(event.target.getAttribute("id"))
    }
})

selectEntry(entry.selected)



// ------------------------ Functions ------------------------ //

// Change tab
function changeTab(id) {
    document.getElementById(tab.selected).style.backgroundColor = null
    document.getElementById(tab.selected).style.cursor = null
    tab.selected = id
    document.getElementById(tab.selected).style.backgroundColor = "#FFFFFF12"
    document.getElementById(tab.selected).style.cursor = "default"

    // Label/Subtitle of tab
    document.getElementById("tabSubtitle").innerHTML = elementsData[tab.selected].subtitle

    updateEntries()
    entry.selected = "e1"
    selectEntry("e1")
}


// Update entries
function updateEntries() {
    // Deletes old entries
    for (let i = 1; i <= entry.amount; i++) {
        document.getElementById("e" + i).remove()
    }

    // Creates the new ones
    entry.amount = Object.keys(elementsData[tab.selected]).length - 2

    for (let i = 1; i <= entry.amount; i++) {
        let newElement = document.createElement("span")
        newElement.id = "e" + i
        newElement.className = "listEntry"
        newElement.innerHTML = elementsData[tab.selected]["e" + i].name
        document.getElementById("entryContainer").appendChild(newElement)
    }
}


// Change selected entry
function selectEntry(id) {
    document.getElementById(entry.selected).style = null
    entry.selected = id
    document.getElementById(entry.selected).style.backgroundColor = "#454545"

    updateButtons()
}


// Update buttons label and links
function updateButtons() {
    // Change button links
    document.getElementById("download1").setAttribute("href", elementsData[tab.selected][entry.selected].l1)
    document.getElementById("download1").innerHTML = elementsData[tab.selected][entry.selected].b1

    // Checks if the first button has specified text in the JSON, and if not, sets a generic "Descargar" label
    if (elementsData[tab.selected][entry.selected].b1 === undefined) {
        document.getElementById("download1").innerHTML = "Descargar"
    } else {
        document.getElementById("download1").innerHTML = elementsData[tab.selected][entry.selected].b1
    }

    // Checks if there is a second link, and if so, it enables the second button
    if (elementsData[tab.selected][entry.selected].l2 === undefined) {
        document.getElementById("download1").style.width = "408px"
    } else {
        document.getElementById("download2").style.display = null
        document.getElementById("download1").style.width = null
        document.getElementById("download2").setAttribute("href", elementsData[tab.selected][entry.selected].l2)
        document.getElementById("download2").innerHTML = elementsData[tab.selected][entry.selected].b2
    }
}


// Enable/disable compact mode
function compactMode() {
    if (window.innerHeight < 730 || window.innerWidth - 580 < tab.amount * 140) {
        document.getElementById("header").style.borderBottom = "none"
        document.getElementById("header").style.borderRight = "2px solid #00000040"
        document.getElementById("header").style.width = "296px"
        document.getElementById("header").style.height = "100%"
        document.getElementById("tabContainer").style.display = "block"
        document.getElementById("tabContainer").style.left = "59px"
        document.getElementById("tabContainer").style.transform = "none"
        document.getElementById("tabContainer").style.marginTop = "96px"
        document.getElementById("mainContainer").style.left = "calc(50% + 149px)"
        document.getElementById("socialContainer").style.right = "auto"
        document.getElementById("socialContainer").style.top = "auto"
        document.getElementById("socialContainer").style.bottom = "20px"
        document.getElementById("socialContainer").style.left = "84px"

        // This changes a CSS variable which is used for the tab buttons width
        document.documentElement.style.setProperty("--tabWidth", "180px")
    } else {
        document.getElementById("header").style = null
        document.getElementById("tabContainer").style = null
        document.getElementById("tabContainer").style.width = tab.amount * 140 + "px"
        document.getElementById("mainContainer").style.left = null
        document.getElementById("socialContainer").style = null
        document.documentElement.style.setProperty("--tabWidth", "140px")
    }
    if (window.innerHeight < 583) {
        document.getElementById("mainContainer").style.height = window.innerHeight + "px"
        document.getElementById("mainBox").style.height = window.innerHeight - 127 + "px"
        document.getElementById("listBox").style.height = window.innerHeight - 199 + "px"
    } else {
        document.getElementById("mainContainer").style.height = null
        document.getElementById("mainBox").style.height = null
        document.getElementById("listBox").style.height = null
    }
}

compactMode()
}
