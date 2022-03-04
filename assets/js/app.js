const app = new Vue({
    el: '#app',
    data: {
        darkMode: false,
        activeContact: null,
        inputActive: false,
        messageText: '',
        contacts: [
            {
                name: 'Mamma',
                last_name: '',
                avatar: 'assets/img/av_1.jpeg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        check: 2
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        check: 2
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        check: 0
                    }
                ],
            },
            {
                name: 'Luciano',
                last_name: 'Rosati',
                avatar: 'assets/img/av_2.jpeg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        check: 0
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        check: 2
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        check: 0
                    }
                ],
            },
            {
                name: 'Enzo',
                last_name: 'Millarte',
                avatar: 'assets/img/av_3.jpeg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        check: 2
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        check: 0
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        check: 2
                    }
                ],
            },
            {
                name: 'Donato',
                last_name: 'Palmisano',
                avatar: 'assets/img/av_4.jpeg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        check: 2
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        check: 0
                    }
                ],
            },
        ],
        answer:[
            'Ok'
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
        selectContact: function (contact){
            this.activeContact = contact;
        },

        //last msg view in sidebar
        lastMsgReceived: function(index){
            const msg = this.contacts[index].messages;
            const indexLast = msg.length - 1;

            return msg[indexLast];
        },

        //time for msg
        getHours: function(date){
            const ora = date.split(' ')[1];
            return ora.substring(0,5);
        },

        //sent msg
        sentMessage: function(){

            const currentIndex = this.activeContact.messages.length;
            const msg = this.activeContact.messages;

            if(this.messageText.trim() != ''){
                
                const newMessage = this.createMsg(this.messageText, 'sent');                
                this.activeContact.messages.push(newMessage);
                this.messageText = '';
                
                setTimeout(() => {
                    msg[currentIndex].check = 2;                    
                }, 1000);
            }
        },
        

        //reply
        reply: function(){
            console.log('risp')

        },

        //create msg object
        createMsg: function(text, status){
            const d = new Date();
            let ora;

            //add zero for hours < 10
            if(d.getHours() < 10){
                ora = `0${d.getHours()}`;
            }

            //msg complete
            const messageComplete = {
                date: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${ora}:${d.getMinutes()}:${d.getMilliseconds()}`,
                text,
                status,
                check: 1
            }
            
            return messageComplete;
        }
        
    }
})


