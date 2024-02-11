const fs = require('fs')

fs.readFile("./OriginalSubtitles.txt", "utf8", (err, data) => {
    if(err) throw err

    const lines = data.split('\r\n').filter((line) => line !== '')

    let subtitlesInRequiredFormat = ""
    
    lines.forEach((line) => {
        if(line.indexOf("today we're") != -1)
            subtitlesInRequiredFormat += "\n\n" + line + " "
        else 
            subtitlesInRequiredFormat += line + " "
    })
    
    fs.writeFile("./FormattedSubtitles", subtitlesInRequiredFormat, (err) => {
        if(err) throw err;
    })
})