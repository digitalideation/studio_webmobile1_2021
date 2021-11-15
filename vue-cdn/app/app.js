const app = Vue.createApp({
    data() {
        return {
            showRecipies:true,
            recipies: [
                { title: 'Berliner',
                    subtitle: 'Ich bin ein Berliner: eine Sünde wert während der Fasnachtszeit!',
                    src: 'berliner.jpeg',
                    text:'Mehl und alle Zutaten bis und mit Hefe in einer Schüssel mischen. Butter, Milch und Ei beigeben, mischen, zu einem weichen, glatten Teig kneten. Zugedeckt bei Raumtemperatur ca. 1.5 Std. aufs Doppelte aufgehen lassen.'
                }
                ]
        }
    },
    methods: {

    }
})

app.mount('#app');