const btns = document.querySelectorAll(".btn-collapse");
btns.forEach(element =>{
    element.addEventListener('click',()=>{
        element.classList.toggle('active');
        const content = element.nextElementSibling;
        const openIcon = element.querySelector('.open');
        const closeIcon = element.querySelector('.close');
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            openIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            console.log('close');
        } else {
            console.log('open');
            content.style.maxHeight = content.scrollHeight + "px";
            openIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } 
    });
});
