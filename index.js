class bookmark{
    constructor(link, name){
        this.link = link;
        this.name = name;
    }
}
class user_input{
    constructor(){
        this.libary = []
    }
    book_mark1(){
        const book_mark = document.getElementById('book-mark')
        book_mark.addEventListener('click',(event)=>{
            event.preventDefault();
            const link_input= document.getElementById('link-input').value;
            const name_input = document.getElementById('name-input').value;
            let newobj = {link:link_input, name:name_input}
            this.libary.push(newobj)
            this.render();
        });
    }
    render(){
        const ul = document.querySelector('#book-marks');
            this.libary.forEach((element, index) => {
            if(index === this.libary.length-1){
            const createLi = document.createElement('li');
            ul.appendChild(createLi);
            createLi.innerHTML = `name: ${element.name}, link: ${element.link}`;
            // assign id of count to li
            createLi.setAttribute("id", element.name);
            //ul.removeChild(createLi)

            const remove_mark = document.getElementById('remove-mark')
            remove_mark.addEventListener('click',(event)=>{
                event.preventDefault();
                const remove_name_input = document.getElementById('remove-name-input').value;
                const newArray = this.libary.filter((removeMe) => removeMe.name !== remove_name_input);
                this.libary = newArray;
                if(remove_name_input === element.name){
                    ul.removeChild(createLi);
                }
                console.log(this.libary);
            });
            
            }
        });
        console.log(this.libary);
  
    }
    // remove_mark(){
        
    //     const remove_mark = document.getElementById('remove-mark')
    //     remove_mark.addEventListener('click',(event)=>{
    //         event.preventDefault();
    //         const remove_name_input = document.getElementById('remove-name-input').value;
    //         const newArray = this.libary.filter((removeMe) => removeMe.name !== remove_name_input);
    //         this.libary = newArray;
    //         console.log(newArray);
    //         this.render();
    //     });
    // }
}
let call_user_input = new user_input;
call_user_input.book_mark1();
call_user_input.render();
//call_user_input.remove_mark();
let call_book_mark = new bookmark;