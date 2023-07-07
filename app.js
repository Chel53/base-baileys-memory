const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

//-------------INICIO RESPUESTA A FLUJO DE CONSULTA DE PRIMERA VEZ-------------------
const flowResConsPrimVez= addKeyword(' 1. Consulta de primera vez 🧑🏻‍⚕️👩🏻‍⚕️')
.addAnswer(' 👩🏻‍⚕👨🏻‍⚕🧑🏻‍⚕La consulta de valoración tiene un precio de $900, si se realiza algún procedimiento ese mismo día, sólo se cobra el valor del procedimiento.Toda consulta debe ser agendada y requiere un deposito previo de $200 pesos, mismos que se irán recorriendo conforme a tus citas o cuando se termine tu procedimiento.¿Tendrás alguna fecha o horario para agendar tu cita?')
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
    console.log('Mensaje entrante: ',ctx.body)
})
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE CONSULTA DE PRIMERA VEZ-----------------------


//-------------INICIO RESPUESTA A FLUJO DE CONSULTA DE NUTRICIÓN----------------------
const flowResNutricion= addKeyword('2. Consulta de nutrición 🥗 ')
.addAnswer('La consulta de nutrición incluye una valoración clínica y antropométrica, un plan de alimentación personalizado, adaptado a enfermedades de base y estilos de vida. Asesoría a distancia todos los días en caso de dudas. El costo por consulta es de $750La consulta de soporte nutricional incluye la valoración clínica y antropométrica, el cálculo de requerimientos vía enteral (por sonda) o parenteral (por acceso venoso), las indicaciones de administración de las soluciones y monitoreo constante a distancia. El costo por consulta es de $1150')
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
    console.log('Mensaje entrante: ',ctx.body)
})
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE CONSULTA DE NUTRICIÓN----------------------


//-------------INICIO RESPUESTA A FLUJO DE CONSULTA DE SEGUIMINETO----------------------
const flowResSeguimiento= addKeyword(['3. Consulta de seguimiento 🩺 '])
.addAnswer('Por favor, mencióname el procedimiento por el que nos visitas🤗',{capture: true},(ctx)=> {
    console.log('Mensaje entrante: ',ctx.body)
})
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
            console.log('Mensaje entrante: ',ctx.body)
        })
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE CONSULTA DE SEGUIMIENTO----------------------


//-------------INICIO RESPUESTA A FLUJO DE DATO NARIZ----------------------
const flowResNariz= addKeyword('1. Nariz 👃')
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
const flowResLabios= addKeyword('2. Labios 👄')
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
const flowResArmonizacion= addKeyword('3. Armonización facial 💆‍♂️💆‍♀️' )
.addAnswer(['El Perfilamiento o armonización facial implica reducir o aumentar volúmenes en algunas zonas del rostro, con el objetivo de lograr una armonía en el conjunto de las facciones. El procedimiento es personalizado y depende de las necesidades individuales de la nariz, mentón, pómulos y labios de cada paciente. 👃👄',

    '\n💉 Se realiza con ácido hialurónico, bioestimulantes o cirugía.',
    
    '\n💵 El costo es depende de la cantidad de producto que necesite cada paciente. El precio por jeringa de ácido hialurónico o bioestimulante es de $6500 a $7500.',
    
    '👨‍⚕👩‍⚕👩‍⚕ Se requiere una valoración médica'])
.addAnswer('¿Tienes alguna fecha 🗓️y horario🕐 ideal, para agendar tu cita?',{capture: true},(ctx)=> {
            console.log('Mensaje entrante: ',ctx.body)
        })
.addAnswer( 'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊')
//-------------FIN RESPUESTA A FLUJO DE DATO ARMONIZACIÓN FACIAL----------------------


const flowResFinal= addKeyword(['3. Tarjeta Credito 💳','2. Tarjeta Debito  💳','1. Efectivo 💵','5. Enfermedades de la Piel 🤦🏻‍♀️🤦🏻‍♂️','4. Manchas 😳','3. Rejuvenecimiento 👵🏻','3. Proc. estéticos corporales🧑🏻‍⚕️','2. Reducción de Medidas 🙆🏻‍♀️🙆🏻‍♂️','1. Depilación 🪒','3. Otras Enfermedades','2. Alopecia','1. Cabina Lazartigue','1. Hydrafacial','2. Genneo','3. Préime']).addAnswer(
    [
        'Hemos recibido tu respuesta 🤗en un momento te atendera alguien del equipo de Perfect Skin😊'
    ],
    null,
    null,

)
const flowResFinalFac= addKeyword(['2.Aclaración de Factura 🤗']).addAnswer(
    [
        'Escribenos tu duda 🤗 y en un momento te atendera alguien del equipo de Perfect Skin😊'
    ],
    null,
    null,

)

const flowFiller = addKeyword ('1. Rellenos 💉').addAnswer('En que le gustaria  trabajarlo:',{
    buttons:[
        {
            body:'1. Nariz 👃'
        },
        {
            body:'2. Labios 👄'
        },
        {
            body:'3. Armonización facial 💆‍♂️💆‍♀️'
        },
    ]
})


const flowGradoMedico = addKeyword ('2. Limpieza facial grado médico 💆🏻‍♀️🧑🏻‍⚕️').addAnswer('Estas interesado en:',{
    buttons:[
        {
            body:'1. Hydrafacial'
        },
        {
            body:'2. Genneo'
        },
        {
            body:'3. Préime'
        },
    ]
})








const flowCapilar= addKeyword('3. Procedimientos Capilares 🧑‍🦲').addAnswer('Enfoncándonos en:',
    {
        buttons:[
            {
                body:'1. Cabina Lazartigue'
            },
            {
                body:'2. Alopecia'
            },
            {
                body: '3. Otras Enfermedades'
            },
        ]
    }
    
)

const flowCorporal= addKeyword(['2. Procedimientos Corporales 👩🏻‍🤝‍👨🏻']).addAnswer('Enfocándonos en:',
    {
        buttons:[
            {
                body:'1. Depilación 🪒'
            },
            {
                body:'2. Reducción de Medidas 🙆🏻‍♀️🙆🏻‍♂️'
            },
            {
                body:'3. Proc. estéticos corporales🧑🏻‍⚕️'
            },
        ]
    }
    
)

const flowFacial= addKeyword(['1. Procedimientos Faciales 💆🏻‍♀️']).addAnswer('Zona a trabajar:',
    {
        buttons:[
            {
                body: '1. Rellenos 💉'
            },
            {
                body:'2. Limpieza facial grado médico 💆🏻‍♀️🧑🏻‍⚕️'
            },
            {
                body:'3. Rejuvenecimiento 👵🏻'
            },
            {
                body:'4. Manchas 😳'
            },
            {
                body:'5. Enfermedades de la Piel 🤦🏻‍♀️🤦🏻‍♂️'
            },
            ]
            
    }
 
)
const flowSolFac = addKeyword('1. Solicitar Factura 📄','1').addAnswer('Me puedes apoyar con tu metodo de pago:',
    {
        buttons:[
            {
                body:'1. Efectivo 💵'
            },
            {
                body:'2. Tarjeta Debito  💳'
            },
            {
                body:'3. Tarjeta Credito 💳'
            },
        ]

    }
)



const flowUrgencia= addKeyword(['4. Urgencia 🚩']).addAnswer(
    [' Cuentanos que sucede📢 y compartenos una foto📷'],
    null,
    null,
)
const flowFactura = addKeyword('3. Facturas 📄','3').addAnswer('Necesitas:',
    {
        buttons:[
            {
                body:'1. Solicitar Factura 📄'
            },
            {
                body:'2.Aclaración de Factura 🤗'
            },
        ]

    }
)
const flowInformacion = addKeyword('2. Solicitar información 📑','2').addAnswer('Tipo de procedimiento',
    {
        buttons:[
            {
                body:'1. Procedimientos Faciales 💆🏻‍♀️'
            },
            {
                body:'2. Procedimientos Corporales 👩🏻‍🤝‍👨🏻'
            },
            {
                body:'3. Procedimientos Capilares 🧑‍🦲'
            },
        ]

    }

  
    )

    const flowCita= addKeyword('1. Agendar cita 📅').addAnswer('Tipo de consulta',
        {
            buttons:[
                {
                    body: ' 1. Consulta de primera vez 🧑🏻‍⚕️👩🏻‍⚕️'
                },
                {
                    body:'2. Consulta de nutrición 🥗 '
                },
                {
                    body: '3. Consulta de seguimiento 🩺 '
                },
            ]
        }
    
    )

const flowPrincipal = addKeyword(['hola', 'buenas tardes', 'buenos dias', 'buenos días','buena tarde','buen día','buen dia']).addAnswer(
        
            ['Hola☀️ en Perfect Skin, nos encanta que nos escribas😊 ,soy Ski tu asistente virtual, ¿Cómo podemos  ayudarte? ',
            '\n (Seleciona el botón de tu preferencia)'],
           {
            buttons:[
                {
                    body:'1. Agendar cita 📅'
                },
                {
                    body:'2. Solicitar información 📑'
                    
                },
                {
                    body:'3. Facturas 📄'
                },
                {
                    body:'4. Urgencia 🚩'
                },
            ]
           }
        
    )



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