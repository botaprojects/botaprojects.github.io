function changeSelection(elementID) {
    if (elementID !== "itemsContainer") {
        document.getElementById(selectedVariable).style.backgroundColor = null
        document.getElementById(elementID).style.backgroundColor = "#454545"
        switch (elementID) {
            case "a1":
                changeLinks("https://www.mediafire.com/file/fr7o960s1c792an/OptiCraft+1.7.10.7z/file", "https://www.mediafire.com/file/wuot9zxm5u35saa/OptiCraft_1.7.3.1_By_OptiJuegos.7z/file")
                disableButtons(3)
                break;
            case "a2":
                changeLinks("https://www.mediafire.com/file/4x7fqpb6h7g6bi5/OptiCraft_JAVA_CLIENTS_1.8.9.7z/file", "")
                disableButtons(1)
                break;
            case "a3":
                changeLinks("", "https://www.mediafire.com/file/8iu191nzq2obe9q/OptiCraft+1.9.1.0+By+OptiJuegos.7z/file")
                disableButtons(2)
                break;
            case "a4":
                changeLinks("https://www.mediafire.com/file/gc4eon4umkcoqzo/OptiCraft_JAVA_1.12.2_FORGE.7z/file", "https://www.mediafire.com/file/zijx9jtni7rf9pf/OptiCraft+1.12.0+By+OptiJuegos.7z/file")
                disableButtons(3)
                break;
            case "a5":
                changeLinks("", "https://www.mediafire.com/file/lhucputck9z8vst/OptiCraft_1.14.31_By_OptiJuegos.7z/file")
                disableButtons(2)
                break;
            case "a6":
                changeLinks("https://www.mediafire.com/file/xlfoayglwoinlgy/OptiCraft+Java+1.16.5.7z/file", "https://www.mediafire.com/file/y9cq2460i7ta155/OptiCraft_1.16.12_By_OptiJuegos_OpenGL_4.1.7z/file")
                disableButtons(3)
                break;
            case "a7":
                changeLinks("", "https://www.mediafire.com/file/4eb3vj1duts6jqb/OptiCraft+1.17.30+By+OptiJuegos.7z/file")
                disableButtons(2)
                break;
            case "a8":
                changeLinks("", "https://www.mediafire.com/file/snrlqprwhucgwzm/OptiCraft_1.18.31_By_OptiJuegos.7z/file")
                disableButtons(2)
                break;
            case "a9":
                changeLinks("", "https://www.mediafire.com/file/r2hiodz1ki74ohr/OptiCraft+1.19.60+64+BITS.7z/file")
                disableButtons(2)
                break;
            case "a10":
                changeLinks("https://drive.google.com/file/d/1Yg6TZy0q3eypCk4rl0VTOyyAtQx7rE7y/view", "https://www.mediafire.com/file/if7vo48hlkun1rd/OptiCraft+1.20.10+By+OptiJuegos.7z/file")
                disableButtons(3)
                break;

            case "b1":
                changeLinks("", "https://www.mediafire.com/file/q73d6mgmhi7nmmr")
                disableButtons(4)
                break;
            case "b2":
                changeLinks("", "https://www.mediafire.com/file/ag28b7eumf10go2")
                disableButtons(4)
                break;
            case "b3":
                changeLinks("", "https://drive.google.com/file/d/1pmDJWXwDQ3-mVwVlYCiD08XE3rte0lbg/view")
                disableButtons(4)
                break;
            case "b4":
                changeLinks("", "https://drive.google.com/file/d/1BvhlN4H1ND87_HlpCjSrwZlDz8NlQctQ/view")
                disableButtons(4)
                break;
            case "b5":
                changeLinks("", "https://cdn.discordapp.com/attachments/1065489877497548861/1141132649067458690/Craftsman_MOD_PC_PORT_By_OptiJuegos.7z")
                disableButtons(4)
                break;
            case "b6":
                changeLinks("", "https://www.mediafire.com/file/rbgcvay4vo6yx4l")
                disableButtons(4)
                break;
            case "b7":
                changeLinks("", "https://github.com/OptiJuegos/Friday-Night-Funkin-Lite/releases/download/v1.1/Friday.Night.Funkin.Lite.zip")
                disableButtons(4)
                break;
            case "b8":
                changeLinks("", "https://www.mediafire.com/file/u5d6hn6y14v2uzj")
                disableButtons(4)
                break;
            case "b9":
                changeLinks("", "https://archive.org/download/opti-juegos-projects/GTA%20San%20Andreas%20OptiProjects.iso")
                disableButtons(4)
                break;
            case "b10":
                changeLinks("", "https://drive.google.com/file/d/1ypgjMaO9qeCTt3VMYTQo7x7ml55tkNIa/view")
                disableButtons(4)
                break;
            case "b11":
                changeLinks("", "https://archive.org/download/opti-juegos-projects/Grand%20Theft%20Auto%20V%20RIP-LITE.7z")
                disableButtons(4)
                break;
            case "b12":
                changeLinks("", "https://drive.google.com/file/d/19zNGxNp-4eLGj2k-rgIXJZduVioBvJtp/view?usp=share_link")
                disableButtons(4)
                break;
            case "b13":
                changeLinks("", "https://www.mediafire.com/file/sc2p8zytkbh49jh")
                disableButtons(4)
                break;
            case "b14":
                changeLinks("", "https://www.mediafire.com/file/fs7bpb5l5zyv5ro/")
                disableButtons(4)
                break;
            case "b15":
                changeLinks("", "https://drive.google.com/file/d/1M42mZ3yXoCnhZ7cVYkl0ABi_5UsYZbcS/view?usp=share_link")
                disableButtons(4)
                break;
            case "b16":
                changeLinks("", "https://www.mediafire.com/file/t8po4mzanx9hwol")
                disableButtons(4)
                break;
            case "b17":
                changeLinks("", "https://cdn.discordapp.com/attachments/1065489877497548861/1128792447783284928/Plants_vs_Zombies.7z")
                disableButtons(4)
                break;
            case "b18":
                changeLinks("", "https://www.mediafire.com/file/7vjv1m3cyt1iwvl/")
                disableButtons(4)
                break;
            case "b19":
                changeLinks("", "https://www.mediafire.com/file/li3ftumyprfpcfy")
                disableButtons(4)
                break;
            case "b20":
                changeLinks("", "https://cdn.discordapp.com/attachments/1065489877497548861/1167666961245798420/Subway_Surfers.7z")
                disableButtons(4)
                break;
            case "b21":
                changeLinks("", "https://cdn.discordapp.com/attachments/1065489877497548861/1113672795302412338/Super_Mario_64.zip")
                disableButtons(4)
                break;
            case "b22":
                changeLinks("", "https://www.mediafire.com/file/2rzvfdy2nossuw0")
                disableButtons(4)
                break;
            case "b23":
                changeLinks("", "https://www.mediafire.com/file/umcmdzestj6bthp")
                disableButtons(4)
                break;
            case "b24":
                changeLinks("", "https://www.mediafire.com/file/76ff84p7904jygq")
                disableButtons(4)
                break;
            
            case "c1":
                changeLinks("", "https://cdn.discordapp.com/attachments/1069748073955348550/1165862996849999922/LighterOBS_No_Browser_By_OptiJuegos.7z")
                disableButtons(4)
                break;
            case "c2":
                changeLinks("", "https://www.mediafire.com/file/tefl9904n0gnx4l/")
                disableButtons(4)
                break;
            case "c3":
                changeLinks("", "https://cdn.discordapp.com/attachments/1069748073955348550/1167912564848595034/Optimizar_PC_V5.4.zip")
                disableButtons(4)
                break;
            case "c4":
                changeLinks("", "https://cdn.discordapp.com/attachments/1153879925682614302/1154971396858982450/RobLauncher_Release_V1.4.zip")
                disableButtons(4)
                break;

            case "d1":
                changeLinks("", "https://www.mediafire.com/file/u03w1u1rxgya2jt/")
                disableButtons(4)
                break;
            case "d2":
                changeLinks("", "https://cdn.discordapp.com/attachments/1065487041611186196/1166925656131645540/Dolphin_Lite_V3.5.7z")
                disableButtons(4)
                break;
            case "d3":
                changeLinks("", "https://www.mediafire.com/file/ops98l93qtpu9js/")
                disableButtons(4)
                break;
            case "d4":
                changeLinks("https://www.mediafire.com/file/ebus0codydv7a01/", "https://www.mediafire.com/file/le2mlf2rtq0qksd/")
                disableButtons(5, "v1.1", "v1.2")
                break;
            case "d5":
                changeLinks("", "https://www.mediafire.com/file/jeajc4wmbpmfi8d/")
                disableButtons(4)
                break;      
            case "d6":
                changeLinks("", "https://www.mediafire.com/file/rwfjkya21jxii3x")
                disableButtons(4)
                break;      
            case "d7":
                changeLinks("", "https://www.mediafire.com/file/xz6iz1k4twpkptt/")
                disableButtons(4)
                break;   
            case "d8":
                changeLinks("", "https://cdn.discordapp.com/attachments/1065487041611186196/1131014766635257867/PPSSPP_LITE_V1.1.7z")
                disableButtons(4)
                break;      
            case "d9":
                changeLinks("", "https://cdn.discordapp.com/attachments/1065487041611186196/1114768795865722990/pSXFIN_V1.1.7z")
                disableButtons(4)
                break;  				
            case "d10":
                changeLinks("", "https://www.mediafire.com/file/8kk9gmx2u351101/")
                disableButtons(4)
                break;
        }
        selectedVariable = elementID
    }
}

document.getElementById("itemsContainer").addEventListener("click", function(event) {changeSelection(event.target.getAttribute("id"))})

function changeLinks(linkJava, linkBedrock) {
    document.getElementById("downloadJava").setAttribute("href", linkJava)
    document.getElementById("downloadBedrock").setAttribute("href", linkBedrock)
}
function disableButtons(available, textButton1, textButton2) {
    switch (available) {
        case 1:
            document.getElementById("downloadBedrock").style.display = "none"
            document.getElementById("downloadJava").style.display = "flex"
            document.getElementById("downloadJava").style.width = "408px"
            document.getElementById("downloadJava").style.left = "0px"
            document.getElementById("downloadJava").style.right = "auto"
            break;
        case 2:
            document.getElementById("downloadBedrock").style.display = "flex"
            document.getElementById("downloadBedrock").style.width = "408px"
            document.getElementById("downloadJava").style.display = "none"
            break;
        case 3:
            document.getElementById("downloadBedrock").style.display = "flex"
            document.getElementById("downloadJava").style.display = "flex"
            document.getElementById("downloadBedrock").style.width = "190px"
            document.getElementById("downloadJava").style.width = "190px"
            document.getElementById("downloadJava").style.left = "0px"
            document.getElementById("downloadJava").style.right = "auto"
            break;
        case 4:
            document.getElementById("downloadBedrock").style.display = "flex"
            document.getElementById("downloadBedrock").style.width = "408px"
            document.getElementById("downloadJava").style.display = "none"
            document.getElementById("downloadBedrock").innerHTML = "Descargar"
            break;
        case 5:
            document.getElementById("downloadBedrock").style.display = "flex"
            document.getElementById("downloadJava").style.display = "flex"
            document.getElementById("downloadBedrock").style.width = "190px"
            document.getElementById("downloadJava").style.width = "190px"
            document.getElementById("downloadJava").style.left = "0px"
            document.getElementById("downloadJava").style.right = "auto"
            document.getElementById("downloadJava").innerHTML = textButton1
            document.getElementById("downloadBedrock").innerHTML = textButton2
            break;
    }
}
function changeTab(tabID, tabLetter, itemAmount, listText) {
    document.getElementById("boxText").innerHTML = listText
    document.getElementById("tabOpti").style.backgroundColor = null
    document.getElementById("tabOpti").style.cursor = null
    document.getElementById("tabGames").style.backgroundColor = null
    document.getElementById("tabGames").style.cursor = null
    document.getElementById("tabPrograms").style.backgroundColor = null
    document.getElementById("tabPrograms").style.cursor = null
    document.getElementById("tabEmulators").style.backgroundColor = null
    document.getElementById("tabEmulators").style.cursor = null
    document.getElementById(tabID).style.backgroundColor = "#FFFFFF12"
    document.getElementById(tabID).style.cursor = "default"
    document.getElementById(tabLetter + itemAmount).style.marginBottom = "11px"
    if (tabID === "tabOpti") {
        document.getElementById("downloadBedrock").innerHTML = "Bedrock"
        document.getElementById("downloadJava").innerHTML = "Java"
    } else {document.getElementById("downloadBedrock").innerHTML = "Descargar"}
    for (let i = 1; i <= prevItemAmount; i++) {
        document.getElementById(currentTab + i).style.display = "none"
    }
    for (let i = 1; i <= itemAmount; i++) {
        document.getElementById(tabLetter + i).style.display = "block"
    }
    prevItemAmount = itemAmount
    currentTab = tabLetter
    changeSelection(tabLetter + "1")
}

selectedVariable = "a1"
currentTab = "a"
prevItemAmount = 10
changeTab("tabOpti", "a", 10, "Versiones")

document.getElementById("tabOpti").addEventListener("click", function() {
    changeTab("tabOpti", "a", 10, "Versiones")
})
document.getElementById("tabEmulators").addEventListener("click", function() {
    changeTab("tabEmulators", "d", 10, "Emuladores optimizados")
})
document.getElementById("tabGames").addEventListener("click", function() {
    changeTab("tabGames", "b", 24, "Juegos optimizados")
})
document.getElementById("tabPrograms").addEventListener("click", function() {
    changeTab("tabPrograms", "c", 4, "Programas optimizados")
})



window.addEventListener("resize", compactModes);
compactModes();

function compactModes() {
    if (window.innerHeight < 743 || window.innerWidth < 1128) {
        document.getElementById("header").style.borderBottom = "none"
        document.getElementById("header").style.borderRight = "2px solid #00000040"
        document.getElementById("header").style.width = "296px"
        document.getElementById("header").style.height = "100%"
        document.getElementById("buttonContainer").style.display = "block"
        document.getElementById("buttonContainer").style.left = "78px"
        document.getElementById("buttonContainer").style.left = "68px"
        document.getElementById("buttonContainer").style.transform = "none"
        document.getElementById("buttonContainer").style.marginTop = "96px"
        document.getElementById("mainContainer").style.left = "calc(50% + 149px)"
        document.getElementById("socialButtonContainer").style.right = "auto"
        document.getElementById("socialButtonContainer").style.top = "auto"
        document.getElementById("socialButtonContainer").style.bottom = "20px"
        document.getElementById("socialButtonContainer").style.left = "84px"
        document.getElementById("tabOpti").style.width = "180px"
        document.getElementById("tabEmulators").style.width = "180px"
        document.getElementById("tabGames").style.width = "180px"
        document.getElementById("tabPrograms").style.width = "180px"
    } else {
        document.getElementById("header").style = null
        document.getElementById("buttonContainer").style = null
        document.getElementById("mainContainer").style.left = null
        document.getElementById("socialButtonContainer").style = null
    }
    if (window.innerHeight < 583) {
        document.getElementById("mainContainer").style.height = window.innerHeight + "px"
        document.getElementById("versionBox").style.height = window.innerHeight - 127 + "px"
        document.getElementById("listBox").style.height = window.innerHeight - 203 + "px"
    } else {
        document.getElementById("mainContainer").style.height = null
        document.getElementById("versionBox").style.height = null
        document.getElementById("listBox").style.height = null
    }
}
