const app = new Vue({
    el: '#app',
    data: {
        darkMode: false,
        arrowSearch: false,
        activeIndex: null,
        messageText: '',
        inputSearch: '',
        contacts: [
            {
                name: 'Mamma',
                last_name: '',
                avatar: 'assets/img/av_1.jpeg',
                visible: true,
                access: 'ultimo accesso ieri alle 18:05',
                messages: [
                    {
                        date: '10/01/2020 10:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'received',
                        check: 0
                    },
                    {
                        date: '10/01/2020 10:31:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'received',
                        check: 0
                    },
                    {
                        date: '10/01/2020 11:02:22',
                        text: 'Tutto fatto! 👍🏽',
                        status: 'sent',
                        check: 3
                    }
                ],
            },
            {
                name: 'Enzo',
                last_name: 'Millarte',
                avatar: 'assets/img/av_2.jpeg',
                visible: true,
                access: 'ultimo accesso ieri alle 22:51',
                messages: [
                    {
                        date: '20/03/2020 11:30:00',
                        text: 'Ciao Angelo, come stai?',
                        status: 'received',
                        check: 0
                    },
                    {
                        date: '20/03/2020 11:30:55',
                        text: 'Bene grazie! Stasera ci vediamo? 🙃',
                        status: 'sent',
                        check: 3
                    },
                    {
                        date: '20/03/2020 11:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa 😔',
                        status: 'received',
                        check: 0
                    },
                    {
                        date: '20/03/2020 11:38:00',
                        text: 'Dai ci vediamo nel weekend!',
                        status: 'received',
                        check: 0
                    }
                ],
            },
            {
                name: 'Roberta',
                last_name: 'S.',
                avatar: 'assets/img/av_3.jpeg',
                visible: true,
                access: 'ultimo accesso ieri alle 21:10',
                messages: [
                    {
                        date: '28/03/2020 08:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        check: 0
                    },
                    {
                        date: '28/03/2020 08:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        check: 3
                    },
                    {
                        date: '28/03/2020 08:45:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        check: 0
                    },
                    {
                        date: '28/03/2020 08:58:22',
                        text: '😂😂😂',
                        status: 'sent',
                        check: 3
                    }
                ],
            },
            {
                name: 'Donato',
                last_name: 'Palmisano',
                avatar: 'assets/img/av_4.jpeg',
                visible: true,
                access: 'ultimo accesso ieri alle 20:42',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria? 🍕 ',
                        status: 'sent',
                        check: 3
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma andiamo al cinema 💃🏼',
                        status: 'received',
                        check: 0
                    }
                ],
            },
            {
                name: 'Ale',
                last_name: 'Bro',
                avatar: 'assets/img/av_5.jpeg',
                visible: true,
                access: 'ultimo accesso ieri alle 20:42',
                messages: [
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma andiamo al cinema 💃🏼',
                        status: 'received',
                        check: 0
                        
                    }
                    
                ],
            }
        ],
        answer:[
            'Ciao 👋🏽',
            'Ciao, come stai?',
            'Vuoi fare la baldoria stasera? 🎉 ',
            'Andiamo al sushi? 🍣',
            'Ma dici a me?! 🤔',
            'Sai cosa fanno due api sulla luna? La Luna di miele! 😂',
            'Cosa dice la chiappa destra alla chiappa sinistra? Che puzza in corridoio 💩',
            'Alcuni portano la felicità ovunque vadano. Altri quando se ne vanno 😂',
            'Ricordati i LIMONIIIIIIIIII! 🍋',
            'Cosa facciamo a ferragosto?',
            'Prenotiamo un viaggio? ✈️',
            'Cosa facciamo questo weekend?',
            'Lavori domani?',
            'Ho bisogno del tuo aiuto  🙏🏼',
            'Preparati vengo a prenderti!',
            `Tra mezz'ora sono da te!`,
            '😂😂😂',
            '👍🏽'
        ]
    },
    methods: {
        //choose mode
        colorMode: function(){
            const cssLink = document.getElementById("color_mode");
            this.darkMode = !this.darkMode;
            if(this.darkMode){
                cssLink.setAttribute("href", 'assets/css/dark-mode.css');
            }else{
                cssLink.setAttribute("href", 'assets/css/light-mode.css');
            }            
        },


        //active contact
        selectContact: function (index){
            this.activeIndex = index;
        },
        

        //last msg view in sidebar
        lastMsg: function(index){
            const msg = this.contacts[index].messages;
            const indexLast = msg.length - 1;

            return msg[indexLast];
        },


        //time for msg
        getHours: function(date){
            const ora = date.split(' ')[1];
            return ora.substring(0,5);
        },

        //numero random
        getRandom: function(min, max){
            return Math.round(Math.random() * (max - min - 1) + min);
        },


        //sent msg
        sentMessage: function(){

            const index = this.activeIndex;
            const msg = this.contacts[index].messages;
            const msgIndex = msg.length;       

            if(this.messageText.trim() != ''){
                
                const newMessage = this.createMsg(this.messageText, 'sent', 1);
                msg.push(newMessage);

                this.messageText = '';
                
                setTimeout(() => {
                    msg[msgIndex].check = 2;                    
                }, 1000);

                setTimeout(() => {
                    this.reply(index, msg, msgIndex);
                }, 2000);              
            }
        },
        

        //reply
        reply: function(index, msg, msgIndex){

            const contact = this.contacts[index];

            contact.access = 'online';
            const answerIndex = this.getRandom(0, this.answer.length);
            const newAnswer = this.createMsg(this.answer[answerIndex], 'received', 0);

            setTimeout(() => {
                msg[msgIndex].check = 3;
            }, 500);

            setTimeout(() => {
                contact.access = 'sta scrivendo...';
            }, 1000);

            setTimeout(() => {
                contact.access = 'online';
                msg.push(newAnswer);
            }, 2000);

            setTimeout(() => {
                contact.access = `ultimo accesso oggi alle ${this.getHours(newAnswer.date)}`;
            }, 3000);
        },


        //create msg object
        createMsg: function(text, status, check){
            //msg complete
            const messageComplete = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text,
                status,
                check
            }            
            return messageComplete;
        }
    }
})