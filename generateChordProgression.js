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
        let usableNotes;
        switch(root) {
            case "A": 
                usableNotes = ["A","B","C#/Db","D","E","F#/Gb","G#/Ab",
                               "A","B","C#/Db","D","E","F#/Gb","G#/Ab"];
                break;
            case "A#/Bb":
                usableNotes = ["A#/Bb","C","D","D#/Eb","F","G","A",
                               "A#/Bb","C","D","D#/Eb","F","G","A"];
                break;
            case "B": 
                usableNotes = ["B","C#/Db","D#/Eb","E","F#/Gb","G#/Ab","A#/Bb",
                               "B","C#/Db","D#/Eb","E","F#/Gb","G#/Ab","A#/Bb"];
                break;
            case "C": 
                usableNotes = ["C","D","E","F","G","A","B",
                               "C","D","E","F","G","A","B"];
                break;
            case "C#/Db": 
                usableNotes = ["C#/Db","D#/Eb","F","F#/Gb","G#/Ab","A#/Bb","C",
                               "C#/Db","D#/Eb","F","F#/Gb","G#/Ab","A#/Bb","C"];
                break;
            case "D": 
                usableNotes = ["D","E","F#/Gb","G","A","B","C#/Db",
                               "D","E","F#/Gb","G","A","B","C#/Db"];
                break;
            case "D#/Eb": 
                usableNotes = ["D#/Eb","F","G","G#/Ab","A#/Bb","C","D",
                               "D#/Eb","F","G","G#/Ab","A#/Bb","C","D"];
                break;
            case "E": 
                usableNotes = ["E","F#/Gb","G#/Ab","A","B","C#/Db","D#/Eb",
                               "E","F#/Gb","G#/Ab","A","B","C#/Db","D#/Eb"];
                break;
            case "F": 
                usableNotes = ["F","G","A","A#/Bb","C","D","E",
                               "F","G","A","A#/Bb","C","D","E"];
                break;
            case "F#/Gb": 
                usableNotes = ["F#/Gb","G#/Ab","A#/Bb","B","C#/Db","D#/Eb","F",
                               "F#/Gb","G#/Ab","A#/Bb","B","C#/Db","D#/Eb","F"];
                break;
            case "G": 
                usableNotes = ["G","A","B","C","D","E","F#/Gb",
                               "G","A","B","C","D","E","F#/Gb"];
                break;
            case "G#/Ab": 
                usableNotes = ["G#/Ab","A#/Bb","C","C#/Db","D#/Eb","F","G",
                               "G#/Ab","A#/Bb","C","C#/Db","D#/Eb","F","G"];
                break;                        
        }
        return usableNotes;
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

    if (1) {
        if (scaleName==="Aminor-melodic") {
            switch(firstElement) {
                case "A":
                    chordName = "Am";
                    break;
                case "B":
                    chordName = "Bm";
                    break;
                case "C":
                    chordName = "C";
                    break;
                case "D":
                    chordName = "Dm";
                    break;
                case "E":
                    chordName = "Em";
                    break;
                case "F":
                    chordName = "F";
                    break;
                case "G":
                    chordName = "G";
                    break;
            }
        }   else if (scaleName==="A#/Bbminor-melodic") {
            switch(firstElement) {
                case "A#/Bb":
                    chordName = "A#/Bbm";
                    break;
                case "C":
                    chordName = "Cm";
                    break;
                case "C#/Db":
                    chordName = "C#/Db";
                    break;
                case "D#/Eb":
                    chordName = "D#/Ebm";
                    break;
                case "F":
                    chordName = "Fm";
                    break;
                case "F#/Gb":
                    chordName = "F#/Gb";
                    break;
                case "G#/Ab":
                    chordName = "G#/Ab";
                    break;
            }
        }   else if (scaleName==="Bminor-melodic") {
            switch(firstElement) {
                case "B": 
                    chordName = "Bm";
                    break;
                case "C#/Db":  
                    chordName = "C#/Dbm";
                    break;
                case "D": 
                    chordName = "D";
                    break;
                case "E": 
                    chordName = "Em";
                    break;
                case "F#/Gb":
                    chordName = "F#/Gbm";
                    break;
                case "G": 
                    chordName = "G";
                    break;
                case "A": 
                    chordName = "A";
                    break;
            }   
        }   else if (scaleName==="Cminor-melodic") {
            switch(firstElement) {
                case "C": 
                    chordName = "Cm";
                    break;
                case "D": 
                    chordName = "Dm";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Eb";
                    break;
                case "F":  
                    chordName = "Fm";
                    break;
                case "G":  
                    chordName = "Gm";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Ab";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bb";
                    break;
        }   
        }   else if (scaleName==="C#/Dbminor-melodic") {
            switch(firstElement) {
                case "C#/Db": 
                    chordName = "C#/Dbm";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Ebm";
                    break;
                case "E":  
                    chordName = "E";
                    break;
                case "F#/Gb": 
                    chordName = "F#/Gbm";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Abm";
                    break;
                case "A": 
                    chordName = "A";
                    break;
                case "B": 
                    chordName = "B";
                    break;
        }
        }   else if (scaleName==="Dminor-melodic") {
            switch(firstElement) {
                case "D": 
                    chordName = "Dm";
                    break;
                case "E": 
                    chordName = "Em";
                    break;
                case "F": 
                    chordName = "F";
                    break;
                case "G": 
                    chordName = "Gm";
                    break;
                case "A": 
                    chordName = "Am";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bb";
                    break;
                case "C": 
                    chordName = "C";
                    break;
        }
        }   else if (scaleName==="D#/Ebminor-melodic") {
            switch(firstElement) {
                case "D#/Eb": 
                    chordName = "D#/Ebm";
                    break;
                case "F": 
                    chordName = "Fm";
                    break;
                case "F#/Gb": 
                    chordName = "F#/Gb";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Abm";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bbm";
                    break;
                case "B": 
                    chordName = "B";
                    break;
                case "C#/Db": 
                    chordName = "C#/Db";
                    break;
        }
        }   else if (scaleName==="Eminor-melodic") {
            switch(firstElement) {
                case "E": 
                    chordName = "Em";
                    break;
                case "F#/Gb": 
                    chordName = "F#/Gbm";
                    break;
                case "G": 
                    chordName = "G";
                    break;
                case "A": 
                    chordName = "Am";
                    break;
                case "B": 
                    chordName = "Bm";
                    break;
                case "C": 
                    chordName = "C";
                    break;
                case "D": 
                    chordName = "D";
                    break;
        }
    }       else if (scaleName==="Fminor-melodic") {
            switch(firstElement) {
                case "F": 
                    chordName = "Fm";
                    break;
                case "G": 
                    chordName = "Gm";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Ab";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bbm";
                    break;
                case "C": 
                    chordName = "Cm";
                    break;
                case "C#/Db": 
                    chordName = "C#/Db";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Eb";
                    break;
        }
    }       else if (scaleName==="F#/Gbminor-melodic") {
            switch(firstElement) {
                case "F#/Gb": 
                    chordName = "F#/Gbm";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Abm";
                    break;
                case "A": 
                    chordName = "A";
                    break;
                case "B": 
                    chordName = "Bm";
                    break;
                case "C#/Db": 
                    chordName = "C#/Dbm";
                    break;
                case "D": 
                    chordName = "D";
                    break;
                case "E": 
                    chordName = "E";
                    break;
        }
    }       else if (scaleName==="Gminor-melodic") {
            switch(firstElement) {
                case "G": 
                    chordName = "Gm";
                    break;
                case "A": 
                    chordName = "Am";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bb";
                    break;
                case "C": 
                    chordName = "Cm";
                    break;
                case "D": 
                    chordName = "Dm";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Eb";
                    break;
                case "F": 
                    chordName = "F";
                    break;
        }
    }       else if (scaleName==="G#/Abminor-melodic") {
            switch(firstElement) {
                case "G#/Ab": 
                    chordName = "G#/Abm";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bbm";
                    break;
                case "B": 
                    chordName = "B";
                    break;
                case "C#/Db": 
                    chordName = "C#/Dbm";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Ebm";
                    break;
                case "E": 
                    chordName = "E";
                    break;
                case "F#/Gb": 
                    chordName = "F#/Gb";
                    break;
        }
    
    }
    }
    if (1) {
        if (scaleName==="Aminor-harmonic") {
            switch(firstElement) {
                case "A":
                    chordName = "Am";
                    break;
                case "B":
                    chordName = "Bm";
                    break;
                case "C":
                    chordName = "C";
                    break;
                case "D":
                    chordName = "Dm";
                    break;
                case "E":
                    chordName = "Em";
                    break;
                case "F":
                    chordName = "F";
                    break;
                case "G#/Ab":
                    chordName = "G#/Ab";
                    break;
            }
        }   else if (scaleName==="A#/Bbminor-harmonic") {
            switch(firstElement) {
                case "A#/Bb":
                    chordName = "A#/Bbm";
                    break;
                case "C":
                    chordName = "Cm";
                    break;
                case "C#/Db":
                    chordName = "C#/Db";
                    break;
                case "D#/Eb":
                    chordName = "D#/Ebm";
                    break;
                case "F":
                    chordName = "Fm";
                    break;
                case "F#/Gb":
                    chordName = "F#/Gb";
                    break;
                case "A":
                    chordName = "A";
                    break;
            }
        }   else if (scaleName==="Bminor-harmonic") {
            switch(firstElement) {
                case "B": 
                    chordName = "Bm";
                    break;
                case "C#/Db":  
                    chordName = "C#/Dbm";
                    break;
                case "D": 
                    chordName = "D";
                    break;
                case "E": 
                    chordName = "Em";
                    break;
                case "F#/Gb":
                    chordName = "F#/Gbm";
                    break;
                case "G": 
                    chordName = "G";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bb";
                    break;
            }   
        }   else if (scaleName==="Cminor-harmonic") {
            switch(firstElement) {
                case "C": 
                    chordName = "Cm";
                    break;
                case "D": 
                    chordName = "Dm";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Eb";
                    break;
                case "F":  
                    chordName = "Fm";
                    break;
                case "G":  
                    chordName = "Gm";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Ab";
                    break;
                case "B": 
                    chordName = "B";
                    break;
        }   
        }   else if (scaleName==="C#/Dbminor-harmonic") {
            switch(firstElement) {
                case "C#/Db": 
                    chordName = "C#/Dbm";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Ebm";
                    break;
                case "E":  
                    chordName = "E";
                    break;
                case "F#/Gb": 
                    chordName = "F#/Gbm";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Abm";
                    break;
                case "A": 
                    chordName = "A";
                    break;
                case "C": 
                    chordName = "C";
                    break;
        }
        }   else if (scaleName==="Dminor-harmonic") {
            switch(firstElement) {
                case "D": 
                    chordName = "Dm";
                    break;
                case "E": 
                    chordName = "Em";
                    break;
                case "F": 
                    chordName = "F";
                    break;
                case "G": 
                    chordName = "Gm";
                    break;
                case "A": 
                    chordName = "Am";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bb";
                    break;
                case "C#/Db": 
                    chordName = "C#/Db";
                    break;
        }
        }   else if (scaleName==="D#/Ebminor-harmonic") {
            switch(firstElement) {
                case "D#/Eb": 
                    chordName = "D#/Ebm";
                    break;
                case "F": 
                    chordName = "Fm";
                    break;
                case "F#/Gb": 
                    chordName = "F#/Gb";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Abm";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bbm";
                    break;
                case "B": 
                    chordName = "B";
                    break;
                case "D": 
                    chordName = "D";
                    break;
        }
        }   else if (scaleName==="Eminor-harmonic") {
            switch(firstElement) {
                case "E": 
                    chordName = "Em";
                    break;
                case "F#/Gb": 
                    chordName = "F#/Gbm";
                    break;
                case "G": 
                    chordName = "G";
                    break;
                case "A": 
                    chordName = "Am";
                    break;
                case "B": 
                    chordName = "Bm";
                    break;
                case "C": 
                    chordName = "C";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Eb";
                    break;
        }
    }       else if (scaleName==="Fminor-harmonic") {
            switch(firstElement) {
                case "F": 
                    chordName = "Fm";
                    break;
                case "G": 
                    chordName = "Gm";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Ab";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bbm";
                    break;
                case "C": 
                    chordName = "Cm";
                    break;
                case "C#/Db": 
                    chordName = "C#/Db";
                    break;
                case "E": 
                    chordName = "E";
                    break;
        }
    }       else if (scaleName==="F#/Gbminor-harmonic") {
            switch(firstElement) {
                case "F#/Gb": 
                    chordName = "F#/Gbm";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Abm";
                    break;
                case "A": 
                    chordName = "A";
                    break;
                case "B": 
                    chordName = "Bm";
                    break;
                case "C#/Db": 
                    chordName = "C#/Dbm";
                    break;
                case "D": 
                    chordName = "D";
                    break;
                case "F": 
                    chordName = "F";
                    break;
        }
    }       else if (scaleName==="Gminor-harmonic") {
            switch(firstElement) {
                case "G": 
                    chordName = "Gm";
                    break;
                case "A": 
                    chordName = "Am";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bb";
                    break;
                case "C": 
                    chordName = "Cm";
                    break;
                case "D": 
                    chordName = "Dm";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Eb";
                    break;
                case "F#/Gb": 
                    chordName = "F#/Gb";
                    break;
        }
    }       else if (scaleName==="G#/Abminor-harmonic") {
            switch(firstElement) {
                case "G#/Ab": 
                    chordName = "G#/Abm";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bbm";
                    break;
                case "B": 
                    chordName = "B";
                    break;
                case "C#/Db": 
                    chordName = "C#/Dbm";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Ebm";
                    break;
                case "E": 
                    chordName = "E";
                    break;
                case "G": 
                    chordName = "G";
                    break;
        }
    
    }
    }
    if (1) {
        if (scaleName==="Amajor") {
            switch(firstElement) {
                case "A":
                    chordName = "A";
                    break;
                case "B":
                    chordName = "Bm";
                    break;
                case "C#/Db":
                    chordName = "C#/Dbm";
                    break;
                case "D":
                    chordName = "D";
                    break;
                case "E":
                    chordName = "E";
                    break;
                case "F#/Gb":
                    chordName = "F#/Gbm";
                    break;
                case "G#/Ab":
                    chordName = "G#/Abm";
                    break;
            }
        }   else if (scaleName==="A#/Bbmajor") {
            switch(firstElement) {
                case "A#/Bb":
                    chordName = "A#/Bb";
                    break;
                case "C":
                    chordName = "Cm";
                    break;
                case "D":
                    chordName = "Dm";
                    break;
                case "D#/Eb":
                    chordName = "D#/Eb";
                    break;
                case "F":
                    chordName = "F";
                    break;
                case "G":
                    chordName = "Gm";
                    break;
                case "A":
                    chordName = "Am";
                    break;
            }
        }   else if (scaleName==="Bmajor") {
            switch(firstElement) {
                case "B": 
                    chordName = "Bm";
                    break;
                case "C#/Db":  
                    chordName = "C#/Dbm";
                    break;
                case "D": 
                    chordName = "D";
                    break;
                case "E": 
                    chordName = "Em";
                    break;
                case "F#/Gb":
                    chordName = "F#/Gbm";
                    break;
                case "G": 
                    chordName = "G";
                    break;
                case "A": 
                    chordName = "A";
                    break;
            }   
        }   else if (scaleName==="Cmajor") {
            switch(firstElement) {
                case "C": 
                    chordName = "Cm";
                    break;
                case "D": 
                    chordName = "Dm";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Eb";
                    break;
                case "F":  
                    chordName = "Fm";
                    break;
                case "G":  
                    chordName = "Gm";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Ab";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bb";
                    break;
        }   
        }   else if (scaleName==="C#/Dbmajor") {
            switch(firstElement) {
                case "C#/Db": 
                    chordName = "C#/Dbm";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Ebm";
                    break;
                case "E":  
                    chordName = "E";
                    break;
                case "F#/Gb": 
                    chordName = "F#/Gbm";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Abm";
                    break;
                case "A": 
                    chordName = "A";
                    break;
                case "B": 
                    chordName = "B";
                    break;
        }
        }   else if (scaleName==="Dmajor") {
            switch(firstElement) {
                case "D": 
                    chordName = "Dm";
                    break;
                case "E": 
                    chordName = "Em";
                    break;
                case "F": 
                    chordName = "F";
                    break;
                case "G": 
                    chordName = "Gm";
                    break;
                case "A": 
                    chordName = "Am";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bb";
                    break;
                case "C": 
                    chordName = "C";
                    break;
        }
        }   else if (scaleName==="D#/Ebmajor") {
            switch(firstElement) {
                case "D#/Eb": 
                    chordName = "D#/Ebm";
                    break;
                case "F": 
                    chordName = "Fm";
                    break;
                case "F#/Gb": 
                    chordName = "F#/Gb";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Abm";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bbm";
                    break;
                case "B": 
                    chordName = "B";
                    break;
                case "C#/Db": 
                    chordName = "C#/Db";
                    break;
        }
        }   else if (scaleName==="Emajor") {
            switch(firstElement) {
                case "E": 
                    chordName = "Em";
                    break;
                case "F#/Gb": 
                    chordName = "F#/Gbm";
                    break;
                case "G": 
                    chordName = "G";
                    break;
                case "A": 
                    chordName = "Am";
                    break;
                case "B": 
                    chordName = "Bm";
                    break;
                case "C": 
                    chordName = "C";
                    break;
                case "D": 
                    chordName = "D";
                    break;
        }
    }       else if (scaleName==="Fmajor") {
            switch(firstElement) {
                case "F": 
                    chordName = "Fm";
                    break;
                case "G": 
                    chordName = "Gm";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Ab";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bbm";
                    break;
                case "C": 
                    chordName = "Cm";
                    break;
                case "C#/Db": 
                    chordName = "C#/Db";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Eb";
                    break;
        }
    }       else if (scaleName==="F#/Gbmajor") {
            switch(firstElement) {
                case "F#/Gb": 
                    chordName = "F#/Gbm";
                    break;
                case "G#/Ab": 
                    chordName = "G#/Abm";
                    break;
                case "A": 
                    chordName = "A";
                    break;
                case "B": 
                    chordName = "Bm";
                    break;
                case "C#/Db": 
                    chordName = "C#/Dbm";
                    break;
                case "D": 
                    chordName = "D";
                    break;
                case "E": 
                    chordName = "E";
                    break;
        }
    }       else if (scaleName==="Gmajor") {
            switch(firstElement) {
                case "G": 
                    chordName = "Gm";
                    break;
                case "A": 
                    chordName = "Am";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bb";
                    break;
                case "C": 
                    chordName = "Cm";
                    break;
                case "D": 
                    chordName = "Dm";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Eb";
                    break;
                case "F": 
                    chordName = "F";
                    break;
        }
    }       else if (scaleName==="G#/Abmajor") {
            switch(firstElement) {
                case "G#/Ab": 
                    chordName = "G#/Abm";
                    break;
                case "A#/Bb": 
                    chordName = "A#/Bbm";
                    break;
                case "B": 
                    chordName = "B";
                    break;
                case "C#/Db": 
                    chordName = "C#/Dbm";
                    break;
                case "D#/Eb": 
                    chordName = "D#/Ebm";
                    break;
                case "E": 
                    chordName = "E";
                    break;
                case "F#/Gb": 
                    chordName = "F#/Gb";
                    break;
        }
    
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