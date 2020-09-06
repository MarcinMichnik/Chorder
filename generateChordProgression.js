function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}
function getUsableNotesInAScale(root, scale) {

    const originalNotes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#",
                           "A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];

    // A general algorythm needed. This below is placeholder data.
    if (scale==='minor') {
        if (root==='A') {
            let usableNotes = ["A","B","C","D","E","F","G",
                               "A","B","C","D","E","F","G"];
            return usableNotes;
        }
    }
}
function generateTriad(usableNotes) {

    // Randomise the root notes
    let randomNumber = randomInt(0, 7);

    // Create a minor triad
    let triadElement = document.createTextNode(`${usableNotes[randomNumber]},
    ${usableNotes[randomNumber+2]},
    ${usableNotes[randomNumber+4]}`);
    
    return triadElement;
}

function generateChordProgression(root, scale) {

    // get the element by id
    const outputField = document.getElementById("output");

    // Clear the field
    outputField.innerHTML = '';

    // get a note list
    const usableNotes = getUsableNotesInAScale(root, scale);
    console.log(usableNotes);

    for (i=0; i<4; i++) {

        // Chord number
        outputField.appendChild(document.createTextNode(`${i+1}.`));

        // Generate and append a triad in <root, scale>
        let element = generateTriad(usableNotes);
        outputField.appendChild(element);

        // Break line
        outputField.appendChild(document.createElement("br"));
    }
}