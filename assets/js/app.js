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
                avatar: 'assets/img/av_1.jpeg',
                visible: true,
                access: 'ultimo accesso ieri alle 18:05',
                messages: [
                    {
                        date: '18/01/2022 10:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'received',
                        check: 0,
                        optionMsg: false
                    },
                    {
                        date: '18/01/2022 10:31:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'received',
                        check: 0,
                        optionMsg: false
                    },
                    {
                        date: '18/01/2022 11:02:22',
                        text: 'Tutto fatto! 👍🏽',
                        status: 'sent',
                        check: 3,
                        optionMsg: false
                    }
                ],
            },
            {
                name: 'Enzo',
                avatar: 'assets/img/av_2.jpeg',
                visible: true,
                access: 'ultimo accesso ieri alle 22:51',
                messages: [
                    {
                        date: '20/02/2022 11:30:00',
                        text: 'Ciao Angelo, come stai?',
                        status: 'received',
                        check: 0,
                        optionMsg: false
                    },
                    {
                        date: '20/02/2022 11:30:55',
                        text: 'Bene grazie! Stasera ci vediamo? 🙃',
                        status: 'sent',
                        check: 3,
                        optionMsg: false
                    },
                    {
                        date: '20/02/2022 11:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa 😔',
                        status: 'received',
                        check: 0,
                        optionMsg: false
                    },
                    {
                        date: '20/02/2022 11:38:05',
                        text: 'Dai ci vediamo nel weekend!',
                        status: 'received',
                        check: 0,
                        optionMsg: false
                    }
                ],
            },
            {
                name: 'Roberta',
                avatar: 'assets/img/av_3.jpeg',
                visible: true,
                access: 'ultimo accesso ieri alle 21:10',
                messages: [
                    {
                        date: '01/03/2022 08:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        check: 0,
                        optionMsg: false
                    },
                    {
                        date: '01/03/2022 08:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        check: 3,
                        optionMsg: false
                    },
                    {
                        date: '01/03/2022 08:45:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        check: 0,
                        optionMsg: false
                    },
                    {
                        date: '01/03/2022 08:58:22',
                        text: '😂😂😂',
                        status: 'sent',
                        check: 3,
                        optionMsg: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'assets/img/av_4.jpeg',
                visible: true,
                access: 'ultimo accesso ieri alle 20:42',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria? 🍕 ',
                        status: 'sent',
                        check: 3,
                        optionMsg: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma andiamo al cinema 💃🏼',
                        status: 'received',
                        check: 0,
                        optionMsg: false
                    }
                ],
            },
            {
                name: 'Massimo',
                avatar: 'assets/img/av_5.jpeg',
                visible: true,
                access: 'ultimo accesso ieri alle 20:42',
                messages: [
                    {
                        date: '15/02/2022 18:50:10',
                        text: 'Quando torni a casa?',
                        status: 'received',
                        check: 0,
                        optionMsg: false
                    },
                    {
                        date: '15/02/2022 18:51:25',
                        text: 'Tra un oretta',
                        status: 'sent',
                        check: 3,
                        optionMsg: false
                    },
                    {
                        date: '15/02/2022 18:52:04',
                        text: 'Chiamami appena puoi',
                        status: 'received',
                        check: 0,
                        optionMsg: false
                    },
                    {
                        date: '15/02/2022 18:55:45',
                        text: '👍🏽👍🏽👍🏽',
                        status: 'sent',
                        check: 3,
                        optionMsg: false
                    },   
                ]
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

            if(msg.length === 0 ){
                return '';
            }
            const indexLast = msg.length - 1;
            return msg[indexLast];
        },


        //time for msg
        getHours: function(date){
            if(date === undefined){
                return '';
            }
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
            //choose answer
            const answerIndex = this.getRandom(0, this.answer.length);
            //crete msg
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
                check,
                optionMsg: false
            }            
            return messageComplete;
        },


        //filter contacts
        filtracontatti: function(){
            const inputSearch = this.inputSearch.trim().toLowerCase();

            this.contacts.forEach(el => {
                if(el.name.toLowerCase().includes(inputSearch)){
                    el.visible = true;
                }else{
                    el.visible = false;
                }
            })
        },


        //delete msg
        deleteMessage: function (index){
            this.contacts[this.activeIndex].messages.splice(index, 1);
        },









        //ordinamento chat
        compare: function ( a, b ) {
            if ( a.ordinaryDate > b.ordinaryDate ){
                return 1;
            }
            return -1;
        }
    },
})