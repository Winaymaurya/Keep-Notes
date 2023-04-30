

const addnote=document.getElementById('add');


const addnewnote=(text='')=>{
    const note=document.createElement('div')
    note.classList.add('no');

    const htmlData=`
   
    <div class="opr">
        <button id="edit"><img src="img/edit.png" alt="edit"></button>
        <button id="del"><img src="img/bin.png" alt=""></button>
    </div>

    <div id="main" class= "${text?"":"hide"} font "></div>
        <textarea name="" id="textarea" cols="22" rows="8" placeholder="Write-Your-Notes" class=" ${text?"hide":" "}"></textarea>

    `
    //  cols="22" rows="8"
    note.insertAdjacentHTML("afterbegin",htmlData);
    
    const editbutton=note.querySelector('#edit')
    const delbutton=note.querySelector('#del')
    const textbutton=note.querySelector('#textarea')
    const divc=note.querySelector('#main')



    // updation
    const updatelsdata=()=>{
        const data=document.querySelectorAll('textarea')
        const arr=[]

        data.forEach((val)=>{
            return arr.push(val.value);
            
        })
        console.log(arr)
        localStorage.setItem('arr', JSON.stringify(arr))
    }


    // deleting the node
    delbutton.addEventListener('click',()=>{
        note.remove();
        updatelsdata()
    })

    textbutton.value=text;
    divc.innerHTML=text;

    editbutton.addEventListener('click',()=>{
        divc.classList.toggle('hide');
        textbutton.classList.toggle('hide');
    })
    textbutton.addEventListener('change',(event)=>{
      const value=event.target.value;
    divc.innerHTML=value

    updatelsdata();
    })

    document.body.appendChild(note);
}

// getting data back form ls
const arr= JSON.parse(localStorage.getItem('arr'))
if(arr){
    arr.forEach((note)=>  addnewnote(note))
}

addnote.addEventListener('click',()=>{
    addnewnote();
})