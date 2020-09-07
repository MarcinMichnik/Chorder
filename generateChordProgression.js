const randomInt = (min, max) => {
	return min + Math.floor((max - min) * Math.random());
}
const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
const getUsableNotesInAScale = (root, scale) => {

    // const originalNotes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#",
    //                        "A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];

    // A general algorythm needed. This below is placeholder data.

    if (scale==="minor-melodic") {
        if (root==="A") {
            let usableNotes = ["A","B","C","D","E","F","G",
                                "A","B","C","D","E","F","G"];
            return usableNotes;
        } else if (root==="A#/Bb") {
            let usableNotes = ["A#/Bb","C","C#/Db","D#/Eb","F","F#/Gb","G#/Ab",
                               "A#/Bb","C","C#/Db","D#/Eb","F","F#/Gb","G#/Ab"];
            return usableNotes;
        } else if (root==="B") {
            let usableNotes = ["B","C#/Db","D","E","F#/Gb","G","A",
                               "B","C#/Db","D","E","F#/Gb","G","A"];
            return usableNotes;
        } else if (root==="C") {
            let usableNotes = ["C","D","D#/Eb","F","G","G#/Ab","A#/Bb",
                               "C","D","D#/Eb","F","G","G#/Ab","A#/Bb"];
            return usableNotes;
        } else if (root==="C#/Db") {
            let usableNotes = ["C#/Db","D#/Eb","E","F#/Gb","G#/Ab","A","B",
                               "C#/Db","D#/Eb","E","F#/Gb","G#/Ab","A","B"];
            return usableNotes;
        } else if (root==="D") {
            let usableNotes = ["D","E","F","G","A","A#/Bb","C",
                                "D","E","F","G","A","A#/Bb","C"];
            return usableNotes;
        } else if (root==="D#/Eb") {
            let usableNotes = ["D#/Eb","F","F#/Gb","G#/Ab","A#/Bb","B","C#/Db",
                               "D#/Eb","F","F#/Gb","G#/Ab","A#/Bb","B","C#/Db"];
            return usableNotes;
        } else if (root==="E") {
            let usableNotes = ["E","F#/Gb","G","A","B","C","D",
                               "E","F#/Gb","G","A","B","C","D"];
            return usableNotes;
        } else if (root==="F") {
            let usableNotes = ["F","G","G#/Ab","A#/Bb","C","C#/Db","D#/Eb",
                               "F","G","G#/Ab","A#/Bb","C","C#/Db","D#/Eb"];
            return usableNotes;
        } else if (root==="F#/Gb") {
            let usableNotes = ["F#/Gb","G#/Ab","A","B","C#/Db","D","E",
                               "F#/Gb","G#/Ab","A","B","C#/Db","D","E"];
            return usableNotes;
        } else if (root==="G") {
            let usableNotes = ["G","A","A#/Bb","C","D","D#/Eb","F",
                               "G","A","A#/Bb","C","D","D#/Eb","F"];
            return usableNotes;
        } else if (root==="G#/Ab") {
            let usableNotes = ["G#/Ab","A#/Bb","B","C#/Db","D#/Eb","E","F#/Gb",
                               "G#/Ab","A#/Bb","B","C#/Db","D#/Eb","E","F#/Gb"];
            return usableNotes;
        }
    } else if (scale==="minor-harmonic") {
        if (root==="A") {
            let usableNotes = ["A","B","C","D","E","F","G#/Ab",
                                "A","B","C","D","E","F","G#/Ab"];
            return usableNotes;
        } else if (root==="A#/Bb") {
            let usableNotes = ["A#/Bb","C","C#/Db","D#/Eb","F","F#/Gb","A",
                               "A#/Bb","C","C#/Db","D#/Eb","F","F#/Gb","A"];
            return usableNotes;
        } else if (root==="B") {
            let usableNotes = ["B","C#/Db","D","E","F#/Gb","G","A#/Bb",
                               "B","C#/Db","D","E","F#/Gb","G","A#/Bb"];
            return usableNotes;
        } else if (root==="C") {
            let usableNotes = ["C","D","D#/Eb","F","G","G#/Ab","B",
                               "C","D","D#/Eb","F","G","G#/Ab","B"];
            return usableNotes;
        } else if (root==="C#/Db") {
            let usableNotes = ["C#/Db","D#/Eb","E","F#/Gb","G#/Ab","A","C",
                               "C#/Db","D#/Eb","E","F#/Gb","G#/Ab","A","C"];
            return usableNotes;
        } else if (root==="D") {
            let usableNotes = ["D","E","F","G","A","A#/Bb","C#/Db",
                                "D","E","F","G","A","A#/Bb","C#/Db"];
            return usableNotes;
        } else if (root==="D#/Eb") {
            let usableNotes = ["D#/Eb","F","F#/Gb","G#/Ab","A#/Bb","B","D",
                               "D#/Eb","F","F#/Gb","G#/Ab","A#/Bb","B","D"];
            return usableNotes;
        } else if (root==="E") {
            let usableNotes = ["E","F#/Gb","G","A","B","C","D#/Eb",
                               "E","F#/Gb","G","A","B","C","D#/Eb"];
            return usableNotes;
        } else if (root==="F") {
            let usableNotes = ["F","G","G#/Ab","A#/Bb","C","C#/Db","E",
                               "F","G","G#/Ab","A#/Bb","C","C#/Db","E"];
            return usableNotes;
        } else if (root==="F#/Gb") {
            let usableNotes = ["F#/Gb","G#/Ab","A","B","C#/Db","D","F",
                               "F#/Gb","G#/Ab","A","B","C#/Db","D","F"];
            return usableNotes;
        } else if (root==="G") {
            let usableNotes = ["G","A","A#/Bb","C","D","D#/Eb","F#/Gb",
                               "G","A","A#/Bb","C","D","D#/Eb","F#/Gb"];
            return usableNotes;
        } else if (root==="G#/Ab") {
            let usableNotes = ["G#/Ab","A#/Bb","B","C#/Db","D#/Eb","E","G",
                               "G#/Ab","A#/Bb","B","C#/Db","D#/Eb","E","G"];
            return usableNotes;
        }
    } else if (scale==="major") {
        
    }
}
const generateTriad = (usableNotes, scaleName) => {

    // Randomise the root notes
    const randomNumber = randomInt(0, 7);

    // Create a triad
    // This implementation will automatically make proper triads (major or minor )
    // because we operate based upon a usableNotes list
    const firstElement = `${usableNotes[randomNumber]}`;
    const secondElement = `${usableNotes[randomNumber+2]}`;
    const thirdElement = `${usableNotes[randomNumber+4]}`;

    const listOfElements = [firstElement, secondElement, thirdElement];
    
    // Randomise the note order
    shuffleArray(listOfElements);

    // Attach a chord name to a triad (for example 'Am' as in 'A minor' or 'C' as in 'C major')
    let chordName = "";
    if (scaleName==="Aminor-melodic") {
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
    }   else if (scaleName==="Dminor-melodic") {
        if (firstElement==="D") {
            chordName = "Dm";
        } else if (firstElement==="E") {
            chordName = "Em";
        } else if (firstElement==="F") {
            chordName = "F";
        } else if (firstElement==="G") {
            chordName = "Gm";
        } else if (firstElement==="A") {
            chordName = "Am";
        } else if (firstElement==="A#/Bb") {
            chordName = "A#/Bb";
        } else if (firstElement==="C") {
            chordName = "C";
        }
    }

    const triadElement = document.createTextNode(`${listOfElements[0]},
    ${listOfElements[1]},
    ${listOfElements[2]}
    ---(${chordName})`);

    return triadElement;
}
const generateChordProgression = () => {

    // get the element by id
    const outputField = document.getElementById("output");

    // Clear the field
    outputField.innerHTML = "";

    // get a note list
    const root = document.getElementById("root").value;
    const scale = document.getElementById("scale").value;
    const usableNotes = getUsableNotesInAScale(root, scale);

    const scaleName = `${root}${scale}`;
    console.log(scaleName);

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