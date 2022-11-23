
let list  = document.querySelectorAll('.list')
let itemBox  = document.querySelectorAll('.itemBox')


function remove(){
    list.forEach(item =>{
        item.classList.remove('active')
    })
}

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click' , function(){
        for(let j = 0 ;  j<list.length ; j++){
            list[j].classList.remove('active')
        }
        this.classList.add('active')
        

        filterData  = this.getAttribute('data-filter')
        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.add('hide')
            if(itemBox[k].getAttribute('data-filter') == filterData || filterData == "all" ){
                 itemBox[k].classList.remove('hide')
            }
        }
    })
}