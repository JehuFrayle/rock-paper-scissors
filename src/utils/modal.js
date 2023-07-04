const modalOverlay = document.querySelector('.modal-overlay');
modalOverlay.addEventListener('click', function () {
    modal.close();
});
const modalContent = document.querySelector('.modal-content');

export const modal = {
    modal: modalOverlay,
    modalContent: modalContent,
    
    open({ messages = ['Hola desde el modal'], time = 3000, inlineImage, animation = 'tie' }) {
        // clear the modal content
        this.modalContent.innerHTML = '';

        // add the new messages
        messages.forEach((message) => {
            const messageElement = document.createElement('p');
            messageElement.innerText = message;
            this.modalContent.appendChild(messageElement);
        })

        // add the image if there is one
        if (inlineImage) {
            const image = document.createElement('img');
            image.width = 250;
            image.src = inlineImage;
            image.classList.add(animation);

            if(messages.length > 1){
                this.modalContent.insertBefore(image, this.modalContent.lastChild);
            } else {
                this.modalContent.appendChild(image);
            }
        }

        this.modal.classList.add('active');
        // close the modal after 3 seconds
        this.timer = setTimeout(() => {
            this.close();
        }, time);
    },
    close() {
        this.modalContent.innerHTML = '';
        this.modal.classList.remove('active');

        if(this.timer) clearTimeout(this.timer);
    },
    timer: null
}