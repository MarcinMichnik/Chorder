function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function getUsableNotesInAScale(root, scale) {

    const originalNotes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#",
                           "A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];

    // A general algorythm needed. This below is placeholder data.
    if (scale==="minor") {
        if (root==="A") {
            let usableNotes = ["A","B","C","D","E","F","G",
                               "A","B","C","D","E","F","G"];
            return usableNotes;
        }
    }
}
function generateTriad(usableNotes, scaleName) {

    // Randomise the root notes
    const randomNumber = randomInt(0, 7);

    // Create a minor triad
    const firstElement = `${usableNotes[randomNumber]}`;
    const secondElement = `${usableNotes[randomNumber+2]}`;
    const thirdElement = `${usableNotes[randomNumber+4]}`;

    const listOfElements = [firstElement, secondElement, thirdElement];
    
    // Randomise the note order
    shuffleArray(listOfElements);

    // chord name (for example 'Am' as in 'A minor')
    let chordName = "";
    if (scaleName==="Aminor") {
        if (firstElement==="A") {
            chordName = "Am";
        } else if (firstElement==="B") {
            chordName = "Bm";
        } else if (firstElement==="C") {
            chordName = "C";
        } else if (firstElement==="D") {
            chordName = "Dm";
        } else if (firstElement==="E") {
            chordName = "Em";
        } else if (firstElement==="F") {
            chordName = "F";
        } else if (firstElement==="G") {
            chordName = "G";
        }
    }

    

    const triadElement = document.createTextNode(`${listOfElements[0]},
    ${listOfElements[1]},
    ${listOfElements[2]},
    ---(${chordName})`);



    return triadElement;
}

function generateChordProgression(root, scale) {

    // get the element by id
    const outputField = document.getElementById("output");

    // Clear the field
    outputField.innerHTML = "";

    // get a note list
    const usableNotes = getUsableNotesInAScale(root, scale);
    console.log(usableNotes);

    const scaleName = `${root}${scale}`;

    for (i=0; i<4; i++) {

        // Chord number
        outputField.appendChild(document.createTextNode(`${i+1}.`));

        // Generate and append a triad in <root, scale>
        let element = generateTriad(usableNotes, scaleName);
        outputField.appendChild(element);

        // Break line
        outputField.appendChild(document.createElement("br"));
    }
}