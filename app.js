
$(() => {
    $('.next').on('click', () => {
        let currentImgIndex = 0;
        .css('display', 'none')
        currentImgIndex++
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
        if(currentImgIndex < numOfImages) {
            currentImgIndex ++
           } else {
            currentImgIndex = 0
           }
       }
    
// })
// $((numOfImages) => {

//     $('.carousel-images').children().length - 1
// })

















// if(currentImgIndex < numOfImages) {
//     currentImgIndex ++
//    } else {
//     currentImgIndex = 0
//    }








//    $('.previous').on('click', () => {
//     // stuff will go here 
//    }

// const div= [
//     "homeTile",
//     "bioTile",
//     "resumeTile",
//     "projectsTile",
//     "linksTile"


// 
//     display: block;
// })

   
    
   
    // $('#resumeTile').hide()
    // $('#projectsTile').hide()
    // $('#linksTile').hide()   
// $(() => {  
//     $('#hometile').hide()
//     $('#biotile').hide()
//     $('#hometile').hide()
//     $('#resumetile').hide()
//     $('#projectstile').hide()

// }
// const showText = () => {
        
//     $('#biotile').slideDown(1000);

//     }

//     $('#bioButton').on('click',showText);

    // $('#bioButton').slideDown(1000);
    // $('#resumeButton').slideDown(1000);
    // $('#projectsButton').slideDown(1000);
    // $('#linksButton').slideDown(1000)
    


