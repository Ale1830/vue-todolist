const app = new Vue ({
    el: '#app',
    data:{
        list :[
            {
                text:"biscotti",
                done:true
            }, 
            {
                text:"cioccolato",
                done:false
            }, 
             {
                text:"bicchieri",
                done:true
            }, 
        ],
        userText:""
    },
    methods:{
        remove (index){
            // console.log("cliccato",index)
            this.list.splice(index,1);
        },
        add(){
            console.log("aggiungi",this.userText);
            const newItem = {
                text:this.userText,
                done:false
            };
            this.list.push(newItem);
            this.userText="";

        }
        
    }
    
})

// versione base con solo stringhe
// const app = new Vue ({
//     el: '#app',
//     data:{
//         list :[
//             'biscotti', 'cioccolato', 'bicchieri'
//         ],
//         userText:""
//     },
//     methods:{
//         remove (index){
//             // console.log("cliccato",index)
//             this.list.splice(index,1);
//         },
//         add(){
//             console.log("aggiungi",this.userText);
//             this.list.push(this.userText);
//             this.userText="";

//         }


        
//     }
    
// })