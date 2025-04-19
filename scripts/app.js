const app= Vue.CreateApp({
    data(){
        return{
            
            weather: {
                temperature: '',
                wind: '',
                description: ''
            },
            city: 'London',
            province:'ontario',
            country:'canada',
            dictionary: {
                word: '',
                phonetic: '',
                definition: ''
            },
            searchWord: ''
        }
        },
    
    methods:{
        
        getWeather() {
            fetch(`http://comp6062.liamstewart.ca/weather-information`)

                .then(response => response.json())
                .then(data => {
                    this.weather.temperature = data.temperature;
                    this.weather.wind = data.wind;
                    this.weather.description = data.description;
                });
        },
        getDefinition() {
            fetch(`https://comp6062.liamstewart.ca/define?word=Bottle`)
            
                .then(response => response.json())
                .then(data => {
                    const GetData = data[0];
                    this.dictionary.word = GetData.word;
                    this.dictionary.phonetic = GetData.phonetics[0]?.text || 'N/A';
                    this.dictionary.definition = GetData.meanings[0]?.definitions[0]?.definition || 'N/A';
                });
        }
    },
    mounted() {
        
        this.getWeather();
        this.getDefinition();
    }
}).mount('#app');
