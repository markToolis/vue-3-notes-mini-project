const App = {
    data() {
        return{
            placeholder:"Введите название заметки",
            title: "Список заметок",
            inputValue: '',
            notes: []

        }
    },
    methods: {
        inputChengeHadler(e){
            this.inputValue = e.target.value
        },
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

    } 
}

Vue.createApp(App).mount('#appp')

