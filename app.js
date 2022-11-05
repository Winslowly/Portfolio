
$(() => {

$('#hometile').show()

const showHome = () => {  
    $('#hometile').show()
    $('#biotile').hide()
    $('#resumetile').hide()
    $('#projectstile').hide()
}

    $('#homebutton').on('click', showHome)


$('#biotile').hide()

    const showBio = () => {  
    $('#biotile').show()
    $('#hometile').hide()
    $('#resumetile').hide()
    $('#projectstile').hide()
}
    $('#biobutton').on('click', showBio)


$('#resumetile').hide()

    const showResume = () => {  
    $('#resumetile').show()
    $('#hometile').hide()
    $('#biotile').hide()
    $('#projectstile').hide()
}
    $('#resumebutton').on('click', showResume)


$('#projectstile').hide()

    const showProjects = () => {  
    $('#projectstile').show()
    $('#hometile').hide()
    $('#biotile').hide()
    $('#resumetile').hide()
}
    $('#projectsbutton').on('click', showProjects)



    // Modal

$(() => {

        const $openBtn = $('#openModal');
        const $modal = $('#modal');
        const $closeBtn = $('#close');
        
        
        const openModal = () => {
            $modal.css('display', 'block');
        }
        const closeModal = () => {
            $modal.css('display', 'none');
        }
        
        
        $openBtn.on('click', openModal);
        $closeBtn.on('click', closeModal);
        
        
        
        }) 

})



$(() => {

    


    let currentImgIndex = 0;

    let numOfImages = $('.carousel-images').children().length - 1

    $('.right').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
        if(currentImgIndex < numOfImages) {
            currentImgIndex ++
           } else {
            currentImgIndex = 0
           }
        $('.carousel-images').children().eq(currentImgIndex).css('display','block')
       })
      

    $('.left').on('click', () => {

        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

        if(currentImgIndex > 0) {
            currentImgIndex --
          } else {
            currentImgIndex = numOfImages
          }
          

        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')

    })




});
