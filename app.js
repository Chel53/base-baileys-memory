const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

//-------------INICIO RESPUESTA A FLUJO DE CONSULTA DE PRIMERA VEZ-------------------
const flowResConsPrimVez= addKeyword(['1. Consulta de primera vez 🧑🏻‍⚕️👩🏻‍⚕️','consulta de primera vez'])
.addAnswer(' 👩🏻‍⚕👨🏻‍⚕🧑🏻‍⚕La consulta de valoración tiene un precio de $900, si se realiza algún procedimiento ese mismo día, sólo se cobra el valor del procedimiento.Toda consulta debe ser agendada y requiere un deposito previo de $200 pesos, mismos que se irán recorriendo conforme a tus citas o cuando se termine tu procedimiento.¿Tendrás alguna fecha o horario para agendar tu cita?')
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
    console.log('Mensaje entrante: ',ctx.body)
})
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE CONSULTA DE PRIMERA VEZ-----------------------


//-------------INICIO RESPUESTA A FLUJO DE CONSULTA DE NUTRICIÓN----------------------
const flowResNutricion= addKeyword(['2. Consulta de nutrición 🥗 ', 'consulta de nutrición','consulta de nutricion'])
.addAnswer('La consulta de nutrición incluye una valoración clínica y antropométrica, un plan de alimentación personalizado, adaptado a enfermedades de base y estilos de vida. Asesoría a distancia todos los días en caso de dudas. El costo por consulta es de $750La consulta de soporte nutricional incluye la valoración clínica y antropométrica, el cálculo de requerimientos vía enteral (por sonda) o parenteral (por acceso venoso), las indicaciones de administración de las soluciones y monitoreo constante a distancia. El costo por consulta es de $1150')
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
    console.log('Mensaje entrante: ',ctx.body)
})
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE CONSULTA DE NUTRICIÓN----------------------


//-------------INICIO RESPUESTA A FLUJO DE CONSULTA DE SEGUIMINETO----------------------
const flowResSeguimiento= addKeyword(['3. Consulta de seguimiento 🩺 ','consulta de seguimiento'])
.addAnswer('Por favor, mencióname el procedimiento por el que nos visitas🤗',{capture: true},(ctx)=> {
    console.log('Mensaje entrante: ',ctx.body)
})
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
            console.log('Mensaje entrante: ',ctx.body)
        })
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE CONSULTA DE SEGUIMIENTO----------------------


//-------------INICIO RESPUESTA A FLUJO DE DATO NARIZ----------------------
const flowResNariz= addKeyword(['1. Nariz 👃','nariz'])
.addAnswer(['ℹ👃 La Rinomodelación se realiza con ácido hialuronico.',
'\n📅 Su duración es de 1 a 2 años dependiendo del metabolismo de cada persona.',
'\n💶 Precio: $7, 500MXN ',
'Dependiendo el ácido Hialurónico ideal a tu tipo de nariz.' ,
'\n❗⚠❗El procedimiento no está indicado para todas las personas, ya que algunos tipos de nariz impiden resultados óptimos. Requiere valoración médica previa.'])
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
            console.log('Mensaje entrante: ',ctx.body)
        })
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE DATO NARIZ----------------------


//-------------INICIO RESPUESTA A FLUJO DE DATO LABIOS----------------------
const flowResLabios= addKeyword(['2. Labios 👄', 'labios'])
.addAnswer(['ℹ El aumento de labios se realiza con ácido hialurónico. 👄👄',
'\n📅 Tiene una duración de entre 1 y año y medio.',
'\n🧍‍♀🧍‍♂ Indicado para hombres y mujeres.',
'\n⿡⿨ Solo mayores de edad.',
'\n💉💤 Se utiliza anestesia local.',
'\n⏰ El tiempo del procedimiento es de 15 a 30 minutos..',
'\n💵 El costo promedio es de $7500.',
'🤳 Para más información y/ó agendar cita por medio de WhatsAp'])
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
            console.log('Mensaje entrante: ',ctx.body)
        })
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE DATO LABIOS----------------------

//-------------INICIO RESPUESTA A FLUJO DE DATO ARMONIZACIÓN FACIAL----------------------
const flowResArmonizacion= addKeyword(['3. Armonización facial 💆‍♂️💆‍♀️' , 'armonización facial', 'armonizacion facial'])
.addAnswer(['El Perfilamiento o armonización facial implica reducir o aumentar volúmenes en algunas zonas del rostro, con el objetivo de lograr una armonía en el conjunto de las facciones. El procedimiento es personalizado y depende de las necesidades individuales de la nariz, mentón, pómulos y labios de cada paciente. 👃👄',

    '\n💉 Se realiza con ácido hialurónico, bioestimulantes o cirugía.',
    
    '\n💵 El costo es depende de la cantidad de producto que necesite cada paciente. El precio por jeringa de ácido hialurónico o bioestimulante es de $6500 a $7500.',
    
    '👨‍⚕👩‍⚕👩‍⚕ Se requiere una valoración médica'])
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
            console.log('Mensaje entrante: ',ctx.body)
        })
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE DATO ARMONIZACIÓN FACIAL----------------------


const flowResFinal= addKeyword(['3. Tarjeta Credito 💳','tarjeta de credito','tarjeta credito','2. Tarjeta Debito  💳','tarjeta de debito','tarjeta debito','1. Efectivo 💵','efectivo','5. Enfermedades de la Piel 🤦🏻‍♀️🤦🏻‍♂️','enfermedades de la piel','4. Manchas 😳','manchas','3. Rejuvenecimiento 👵🏻','rejuvenecimiento','3. Proc. estéticos corporales🧑🏻‍⚕️','procedimientos esteticos corporales','proc. estéticos corporales','2. Reducción de Medidas 🙆🏻‍♀️🙆🏻‍♂️','reduccion de medidas', '1. Depilación 🪒','depilación','depilacion','3. Otras Enfermedades','otras enfermedades','2. Alopecia','alopecia','1. Cabina Lazartigue','cabina lazartigue','1. Hydrafacial','hydrafacial','2. Genneo','genneo','3. Préime']).addAnswer(
    [
        'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊'
    ],
    null,
    null,

)
const flowResFinalFac= addKeyword(['2.Aclaración de Factura 🤗', 'acalaración', 'aclaracion','aclaración de factura ']).addAnswer(
    [
        'Escribenos tu duda 🤗 y en un momento te atendera alguien del equipo de Perfect Skin😊'
    ],
    null,
    null,

)

const flowFiller = addKeyword (['1. Rellenos 💉', 'rellenos']).addAnswer('En que le gustaria  trabajarlo:')
.addAnswer( '1. Nariz 👃')
.addAnswer( '2. Labios 👄')
.addAnswer( '3. Armonización facial 💆‍♂️💆‍♀️')

const flowGradoMedico = addKeyword (['2. Limpieza facial grado médico 💆🏻‍♀️🧑🏻‍⚕️', 'limpieza facial','Limpieza facial grado médico','limpieza facial grado medico']).addAnswer('Estas interesado en:')
.addAnswer('1. Hydrafacial')
.addAnswer( '2. Genneo')
.addAnswer( '3. Préime')








const flowCapilar= addKeyword(['3. Procedimientos Capilares 🧑‍🦲','procedimientos capilares']).addAnswer('Enfoncándonos en:')
.addAnswer( '1. Cabina Lazartigue')
.addAnswer( '2. Alopecia')
.addAnswer( '3. Otras Enfermedades')


const flowCorporal= addKeyword(['2. Procedimientos Corporales 👩🏻‍🤝‍👨🏻','procedimientos corporales']).addAnswer('Enfocándonos en:')
.addAnswer('1. Depilación 🪒')
.addAnswer( '2. Reducción de Medidas 🙆🏻‍♀️🙆🏻‍♂️')
.addAnswer( '3. Proc. estéticos corporales🧑🏻‍⚕️')

const flowFacial= addKeyword(['1. Procedimientos Faciales 💆🏻‍♀️', 'procedimientos faciales', 'faciales']).addAnswer('Zona a trabajar:')
.addAnswer( '1. Rellenos 💉')
.addAnswer('2. Limpieza facial grado médico 💆🏻‍♀️🧑🏻‍⚕️')
.addAnswer('3. Rejuvenecimiento 👵🏻')
.addAnswer('4. Manchas 😳')
.addAnswer('5. Enfermedades de la Piel 🤦🏻‍♀️🤦🏻‍♂️')
  
const flowSolFac = addKeyword(['1. Solicitar Factura 📄',' Solicitar Factura']).addAnswer('Me puedes apoyar con tu metodo de pago:')
.addAnswer('1. Efectivo 💵')
.addAnswer('2. Tarjeta Debito  💳')
.addAnswer('3. Tarjeta Credito 💳')



const flowUrgencia= addKeyword(['4. Urgencia 🚩','urgencia']).addAnswer(
    [' Cuentanos que sucede📢 y compartenos una foto📷'],
    null,
    null,
)

const flowFactura = addKeyword(['3. Facturas 📄','facturas']).addAnswer('Necesitas:')
.addAnswer('1. Solicitar Factura 📄')
.addAnswer('2.Aclaración de Factura 🤗')
 
const flowInformacion = addKeyword(['2. Solicitar información 📑','Solicitar información','Solicitar informacion','información','informacion','info']).addAnswer('Tipo de procedimiento')
.addAnswer('1. Procedimientos Faciales 💆🏻‍♀️')
.addAnswer('2. Procedimientos Corporales 👩🏻‍🤝‍👨🏻')
.addAnswer('3. Procedimientos Capilares 🧑‍🦲')

const flowCita= addKeyword(['1. Agendar cita 📅','agendar cita']).addAnswer('Tipo de consulta')
    .addAnswer(' 1. Consulta de primera vez 🧑🏻‍⚕️👩🏻‍⚕️')
    .addAnswer('2. Consulta de nutrición 🥗 ')
    .addAnswer( '3. Consulta de seguimiento 🩺 ')
        


const flowPrincipal = addKeyword(['hola', 'buenas tardes', 'buenos dias', 'buenos días','buena tarde','buen día','buen dia'])
    .addAnswer( ['Hola☀️ en Perfect Skin, nos encanta que nos escribas😊 ,soy Ski tu asistente virtual, ¿Cómo podemos  ayudarte? ',
    '\n (Escribe la opción de tu preferencia)'])
    .addAnswer('1. Agendar cita 📅')
    .addAnswer('2. Solicitar información 📑')
    .addAnswer('3. Facturas 📄')
    .addAnswer('4. Urgencia 🚩')
    


    

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal,flowInformacion,flowUrgencia,flowResArmonizacion,flowResLabios,flowCita,flowResConsPrimVez, flowResNariz,flowGradoMedico,flowFacial,flowCorporal,flowCapilar,flowFiller, flowResFinal,flowResSeguimiento,flowResNutricion,flowFactura,flowSolFac,flowResFinalFac])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
