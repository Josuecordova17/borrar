const express=require('express')
const app=express()
const Telegraf = require('telegraf')
const bot = new Telegraf('1418775488:AAFQPPL2tzlHo0Ba7ZynGbBNs3fiqCVXhOs');
bot.start((ctx)=>{
    ctx.reply(`Hola ${ctx.from.first_name} yo te estare diciendo cuando entrar a tus clases`);
    console.log(ctx.from)
})
bot.command(['Clase','clase','Clases','clases','misclase','MisClases'],(ctx)=>{
    ctx.replyWithPhoto({source: 'img/1.jpeg'});
    ctx.reply("Esas son tus clases")
})
bot.hears(['Clase','clase','Clases','clases','misclase','MisClases'],(ctx)=>{
    ctx.replyWithPhoto({source: '1.jpeg'});
    ctx.reply("Esas son tus clases")
})
bot.command(['siguienteClase','SiguienteClase','siguienteclase','Siguienteclase'],(ctx)=>{
    let c= clase()
ctx.reply(c)
})
bot.hears(['Siguiente clase','Siguiente Clase','siguiente clase'],(ctx)=>{
    let c= clase()
ctx.reply(c)
})
function mandarMensaje() {
    bot.telegram.sendMessage(1207906186,'Vas a clase')   
}
bot.launch()
clase()
function clase() {
    function rel() {
        D = new Date();
        d=D.getDay()
        h=D.getHours()
        m=D.getMinutes()
        s=D.getSeconds()
    }
    rel()
    setInterval(() => {
        rel()
        proximaClase(D)
    }, 1000);
    function orale(h,m) {
        hm=D
        var hm = new Date(hm);
        hm=hm.setHours(h)
        var hm = new Date(hm);
        hm.setMinutes(m)
        var hm =new Date(hm);
        D= Date()
        var hm = Date.parse(hm);
        var papa = hm.toString()
        console.log(papa)
        return hm
    }
    o()
    function o() {
        p1=orale(8,5)
        p2=orale(9,50)
        p3=orale(11,10)
        p4=orale(13,10)
        p5=orale(13,50)
    }
    return proximaClase(D)
    function proximaClase(D) {
        let sf,mf,hf;
        //console.log(D)
        let Da =Date.parse(D)
        if (Da<=p1) {
            console.log('j')
           remainTime=(p1-Da+1000)/1000
           sf = ('0' + Math.floor(remainTime % 60)).slice(-2),
           mf = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
           hf =  Math.floor(remainTime / 3600 % 24)
           if (hf==0 && mf==0 && sf==01) {
            mandarMensaje()
        }
           console.log(hf,mf,sf)
        } else if(Da<=p2){
           remainTime=(p2-Da+1000)/1000
            sf = ('0' + Math.floor(remainTime % 60)).slice(-2),
            mf = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
            hf =  Math.floor(remainTime / 3600 % 24)
            if (hf==0 && mf==0 && sf==01) {
                mandarMensaje()
            }
        }else if (Da<=p3) {
           remainTime=(p3-Da+1000)/1000
           sf = ('0' + Math.floor(remainTime % 60)).slice(-2),
           mf = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
           hf =  Math.floor(remainTime / 3600 % 24)
           if (hf==0 && mf==0 && sf==01) {
            mandarMensaje()
        }
        } else if (Da<=p4) {
           remainTime=(p4-Da+1000)/1000
            sf = ('0' + Math.floor(remainTime % 60)).slice(-2),
            mf = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
            hf =  Math.floor(remainTime / 3600 % 24)
            if (hf==0 && mf==0 && sf==01) {
                mandarMensaje()
            }   
        }else if(Da<=p5){
           remainTime=(p5-Da+1000)/1000
            sf = ('0' + Math.floor(remainTime % 60)).slice(-2),
            mf = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
            hf =  Math.floor(remainTime / 3600 % 24)
            if (hf==0 && mf==0 && sf==01) {
                mandarMensaje()
            }
           }else{
               return 'No tienes clases'
           }
        return `La sigiente es en ${hf}:${mf}:${sf}`
        }    
}