const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


//-------------INICIO RESPUESTA A FLUJO DE CONSULTA DE PRIMERA VEZ-------------------
const flowResConsPrimVez = addKeyword([' 1. Consulta de primera vez 🧑🏻‍⚕️👩🏻‍⚕️','consulta de priemera vez','1' ])
.addAnswer(' 👩🏻‍⚕👨🏻‍⚕🧑🏻‍⚕La consulta de valoración tiene un precio de $900, si se realiza algún procedimiento ese mismo día, sólo se cobra el valor del procedimiento.Toda consulta debe ser agendada y requiere un deposito previo de $200 pesos, mismos que se irán recorriendo conforme a tus citas o cuando se termine tu procedimiento.¿Tendrás alguna fecha o horario para agendar tu cita?')
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
    console.log('Mensaje entrante: ',ctx.body)
})
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')

//-------------FIN RESPUESTA A FLUJO DE CONSULTA DE PRIMERA VEZ-----------------------


//-------------INICIO RESPUESTA A FLUJO DE CONSULTA DE NUTRICIÓN----------------------
const flowResNutricion = addKeyword(['2. Consulta de nutrición 🥗','consulta de nutrición','consulta de nutricion','' ])
.addAnswer('La consulta de nutrición incluye una valoración clínica y antropométrica, un plan de alimentación personalizado, adaptado a enfermedades de base y estilos de vida. Asesoría a distancia todos los días en caso de dudas. El costo por consulta es de $750La consulta de soporte nutricional incluye la valoración clínica y antropométrica, el cálculo de requerimientos vía enteral (por sonda) o parenteral (por acceso venoso), las indicaciones de administración de las soluciones y monitoreo constante a distancia. El costo por consulta es de $1150')
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
    console.log('Mensaje entrante: ',ctx.body)
})
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE CONSULTA DE NUTRICIÓN----------------------


//-------------INICIO RESPUESTA A FLUJO DE CONSULTA DE SEGUIMINETO----------------------
const flowResSeguimiento = addKeyword(['3. Consulta de seguimiento 🩺','consulta de seguimiento','3' ]) 
.addAnswer('Por favor, mencióname el procedimiento por el que nos visitas🤗',{capture: true},(ctx)=> {
    console.log('Mensaje entrante: ',ctx.body)
})
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
            console.log('Mensaje entrante: ',ctx.body)
        })
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE CONSULTA DE SEGUIMIENTO----------------------


//-------------INICIO RESPUESTA A FLUJO DE DATO NARIZ----------------------
const flowResNariz = addKeyword(['1. Nariz 👃','nariz','1' ])
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
const flowResLabios= addKeyword(['2. Labios 👄','labios','2' ])
.addAnswer(['ℹ El aumento de labios se realiza con ácido hialurónico. 👄👄',
'\n📅 Tiene una duración de entre 1 y año y medio.',
'\n🧍‍♀🧍‍♂ Indicado para hombres y mujeres.',
'\n⿡⿨ Solo mayores de edad.',
'\n💉💤 Se utiliza anestesia local.',
'\n⏰ El tiempo del procedimiento es de 15 a 30 minutos..',
'\n💵 El costo promedio es de $6000.',
'🤳 Para más información y/ó agendar cita por medio de WhatsAp'])
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
            console.log('Mensaje entrante: ',ctx.body)
        })
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE DATO LABIOS----------------------

//-------------INICIO RESPUESTA A FLUJO DE DATO ARMONIZACIÓN FACIAL----------------------
const flowResArmonizacion = addKeyword(['3. Armonización facial 💆‍♂️','armonización facial','armonizacion facial','3' ])
.addAnswer(['El Perfilamiento o armonización facial implica reducir o aumentar volúmenes en algunas zonas del rostro, con el objetivo de lograr una armonía en el conjunto de las facciones. El procedimiento es personalizado y depende de las necesidades individuales de la nariz, mentón, pómulos y labios de cada paciente. 👃👄',

    '\n💉 Se realiza con ácido hialurónico, bioestimulantes o cirugía.',
    
    '\n💵 El costo es depende de la cantidad de producto que necesite cada paciente. El precio por jeringa de ácido hialurónico o bioestimulante es de $6500 a $7500.',
    
    '👨‍⚕👩‍⚕👩‍⚕ Se requiere una valoración médica'])
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
            console.log('Mensaje entrante: ',ctx.body)
        })
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE DATO ARMONIZACIÓN FACIAL----------------------




const flowResFinal= addKeyword(['3. Tarjeta Credito 💳','tarjeta de credito','2. Tarjeta Debito  💳','tarjeta de debito','1. Efectivo 💵','efectivo','5. Enfermedades de la Piel 🤦🏻‍♀️🤦🏻‍♂️','enfermedades de la piel','4. Manchas 😳','manchas','3. Rejuvenecimiento 👵🏻','rejuvenecimiento','Procedimientos estéticos corporales','procedimientos esteticos corporales','2. Reducción de Medidas 🙆🏻‍♀️🙆🏻‍♂️','reducción de medidas','reduccion de medidas','1. Depilación 🪒','depilación','depilacion','3. Otras Enfermedades','otras enfermedades','2. Alopecia','alopecia','1. Cabina Lazartigue','cabina lazartigue','1. Hydrafacial','hydrafacial','2. Genneo','genneo','3. Préime','preime','préime']).addAnswer(
    [
        'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊'
    ],
    null,
    null,

)


const flowResFinalFac= addKeyword(['2.Aclaración de Factura 🤗','aclaración factura','aclaracion factura']).addAnswer(
    [
        'Escribenos tu duda 🤗 y en un momento te atendera alguien del equipo de Perfect Skin😊'
    ],
    null,
    null,

)


const flowFiller = addKeyword(['1. Rellenos 💉','rellenos','1' ])
    .addAnswer('En que le gustaria  trabajarlo:')
    .addAnswer(
        [
            'Escribe la opción de tu preferencia',
            '1. Nariz 👃',
            '2. Labios 👄',
            '3. Armonización facial 💆‍♂️💆‍♀️'
        ],
        null,
        null,
        [flowResLabios, flowResNariz, flowResArmonizacion ]
    )



const flowGradoMedico = addKeyword(['2. Limpieza facial grado médico 💆🏻‍♀️🧑🏻‍⚕️','limpieza','2','limpieza facial grado medico' ])
    .addAnswer('Estas interesado en:')
    .addAnswer(
        [
            'Escribe la opción de tu preferencia',
            '1. Hydrafacial',
            '2. Genneo',
            '3. Préime'
        ],
        null,
        null,
        [flowResFinal ]
    )




const flowCapilar = addKeyword(['3. Procedimientos Capilares 🧑‍🦲📄','procedimientos capilares','3' ])
    .addAnswer('Enfoncándonos en:')
    .addAnswer(
        [
            'Escribe la opción de tu preferencia',
            '1. Cabina Lazartigue',
            '2. Alopecia',
            '3. Otras Enfermedades'
        ],
        null,
        null,
        [flowResFinal]
    )
 



const flowCorporal = addKeyword(['2. Procedimientos Corporales 👩🏻‍🤝‍👨🏻','procedimientos corporales', '2'])
    .addAnswer('Enfocándonos en:')
    .addAnswer(
        [
            'Escribe la opción de tu preferencia',
            '1. Depilación 🪒',
            '2. Reducción de Medidas 🙆🏻‍♀️🙆🏻‍♂️',
            '3. Proc. estéticos corporales🧑🏻‍⚕️'
        ],
        null,
        null,
        [flowResFinal]
    )


const flowFacial= addKeyword(['1. Procedimientos Faciales 💆🏻‍♀️','procedimientos faciales','1' ])
    .addAnswer('Necesitas:')
    .addAnswer(
        [
            'Escribe la opción de tu preferencia',
            '1. Rellenos 💉',
            '2. Limpieza facial grado médico 💆🏻‍♀️🧑🏻‍⚕️',
            '3. Rejuvenecimiento 👵🏻',
            '4. Manchas 😳',
            '5. Enfermedades de la Piel 🤦🏻‍♀️🤦🏻‍♂️'
        ],
        null,
        null,
        [flowResFinal,flowFiller,flowGradoMedico]
    )

const  flowSolFac = addKeyword(['1. Solicitar Factura ','solicitar factura','1' ])
    .addAnswer('Me puedes apoyar con tu metodo de pago:')
    .addAnswer(
        [
            'Escribe la opción de tu preferencia',
            '1. Efectivo 💵',
            '2. Tarjeta Debito  💳',
            '3. Tarjeta Credito 💳'
        ],
        null,
        null,
        [flowResFinal ]
    )


const flowUrgencia = addKeyword(['4. Urgencia 🚩','urgencia','4' ])
    .addAnswer(
        [
            ' Cuentanos que sucede📢 y compartenos una foto📷'
        ],
        null,
        null,
        [ ]
    )


const flowFactura = addKeyword(['3. Facturas 📄','facturas','3' ])
    .addAnswer('Necesitas:')
    .addAnswer(
        [
            'Escribe la opción de tu preferencia',
            '1. Solicitar Factura 📄',
            '2.Aclaración de Factura 🤗'
        ],
        null,
        null,
        [flowSolFac,flowResFinalFac]
    )



const flowInformacion = addKeyword(['2. Solicitar información 📑','solicitar información','2' ])
    .addAnswer('Tipo de procedimiento')
    .addAnswer(
        [
            'Escribe la opción de tu preferencia',
            '1. Procedimientos Faciales 💆🏻‍♀️',
            '2. Procedimientos Corporales 👩🏻‍🤝‍👨🏻',
            '3. Procedimientos Capilares 🧑‍🦲'
        ],
        null,
        null,
        [flowFacial,flowCorporal, flowCapilar ]
    )




    const flowCita = addKeyword(['1. Agendar cita 📅','agendar cita','1' ])
    .addAnswer('Tipo de consulta')
    .addAnswer(
        [
            'Escribe la opción de tu preferencia',
            ' 1. Consulta de primera vez 🧑🏻‍⚕️👩🏻‍⚕️',
            '2. Consulta de nutrición 🥗 ',
            '3. Consulta de seguimiento 🩺 '
        ],
        null,
        null,
        [flowResConsPrimVez,flowResNutricion, flowResSeguimiento]
)

const flowPrincipal = addKeyword(['hola', 'buenas tardes', 'buenos dias', 'buenos días','buena tarde','buen día','buen dia'])
    .addAnswer('Hola☀️ en Perfect Skin, nos encanta que nos escribas😊 ,soy Ski tu asistente virtual, ¿Cómo podemos  ayudarte? ')
    .addAnswer(
        [
            'Escribe la opción de tu preferencia',
            '1. Agendar cita 📅',
            '2. Solicitar información 📑',
            '3. Facturas 📄',
            '4. Urgencia 🚩'
        ],
        null,
        null,
        [flowCita,flowInformacion,flowFactura,flowUrgencia]
)

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()