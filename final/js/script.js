function favSong() {
    var songReturn = document.getElementById('fav-song')
    var song = prompt('Please enter your favorite song or album in the box below:');
    if (song == '') {
        alert('Please try again.')    
    } else {
        songReturn.innerHTML = 'Wow! ' + song + ' is great!'
    }
}

function favOther() {
    var otherReturn = document.getElementById('fav-other')
    var other = prompt('Please enter your favorite audio product(other than songs or albums) in the box below:');
    if (other == '') {
        alert('Please try again.')
    } else {
        otherReturn.innerHTML = 'Wow! ' + other + ' is great!'
    }
}

function favCover() {
    var coverReturn = document.getElementById('fav-cover')
    var cover = prompt('Please enter the album with your favorite album cover) in the box below:');
    if (cover == '') {
        alert('Please try again.')
    } else {
        coverReturn.innerHTML = 'Wow! ' + cover + ' is nice!'
    }
}

function Contact() {
    var contactReturn = document.getElementById('contact')
    var contact = prompt('Will You Contact Me?');
    if (contact == '') {
        alert('Please try again.')
    } else {
        contactReturn.innerHTML = contact + '? ' + 'Ok'
    }
}