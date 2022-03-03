const app = new Vue({
    el: '#app',
    data: {
        activeContact: null,
        inputActive: false,
        newMessageText: '',
        newMessage: undefined,
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
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
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
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
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
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
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
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {
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

        //send msg
        sendMessage: function(){
            const d = new Date();
            let ora;

            //add zero for hours < 10
            if(d.getHours()< 10){
                ora = `0${d.getHours()}`;
            }

            //stamp msg
            this.newMessage = {
                date: `${d.getDay()}/${d.getMonth()}/${d.getFullYear()} ${ora}:${d.getMinutes()}:${d.getMilliseconds()}`,
                text: this.newMessageText,
                status: 'sent'
            }
            this.activeContact.messages.push(this.newMessage);
            this.newMessageText = '';
        }
    }
})