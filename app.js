// const div= [
//     "homeTile",
//     "bioTile",
//     "resumeTile",
//     "projectsTile",
//     "linksTile"



const body= (() => {     
    $('homeTile').hide()
    $('#bioTile').hide()
    $('#resumeTile').hide()
    $('#projectsTile').hide()
    $('#linksTile').hide()  



    $('#homeButton').on('click', {css.'homeTile'.display: block});
    $('#bioButton').on('click', {display: block});
    $('#resumeButton').on('click', {display: block});
    $('#projectsButton').on('click', {display: block});
    $('#linksButton').on('click', {display: block});
})