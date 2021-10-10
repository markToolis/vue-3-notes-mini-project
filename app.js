const App = {
    data() {
        return{
            placeholder:"Введите название заметки (макс. 100 симв.)",
            title: "Список заметок",
            inputValue: '',
            notes: []

        }
    },
    methods: {
        addNewNote(){
            if(this.inputValue !== ''){
                this.notes.unshift(this.inputValue)
                this.inputValue=''
            }
        },
        deleteNote(e){
            this.notes.shift(e.target)
        },
        toUpperCase(i){
            return i.toUpperCase()
        }

    },
    computed: {

    },
    watch:{
        inputValue(value){
            if(value.length > 100){
                this.inputValue = 0
            }
            console.log(value)
        }
        
    } 
}

Vue.createApp(App).mount('#appp')

