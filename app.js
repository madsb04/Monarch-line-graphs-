const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify();

const App = {
  setup() {
    const MonarchPopulation = [
      {
        title: 'Annual Monarch Populations',
        subtitle: 'Records from 2021 to 2023',
        trend: [200000, 222000, 350000]
      },
      {
        title: 'Monitored Sites',
        subtitle: 'Monitored Monarch roosting sites',
        trend: [60, 50, 80]
      }
        ];

 const EcologicalFactors = [
    {
        title: 'Pesticide Use',
        description: 'Reducing pesticide use through new municipal bylaws, normally disributed to grasslands and forests to target weeds and invasive species, helps increase Monarch butterfly poplations. Pesticides and weed spray often kills vital breeding and food sources for this species, and by limiting these chemicals, municipalities foster healthier ecosystems where Monarchs can reproduce and thrive. Such policies also encourage pollinator-friendly gardening and land management, creating larger areas for Monarchs to roost on their migration',
    },

    {
        title: 'Milkweed Planted', 
        description: 'Whether you activly plant native milkweed, or support organizations who do, you are supporting the growth of crucial breeding grounds for Monarchs. Being the only plant that nourishes Monarch caterpillars, they are keystone components of the Monarch migration. By restoring milkweed on roadsides, parks and conservation lands, communities can create vital stepping stones that support Monarch helath.',
    },

    {
        title: 'Habitat Restoration',
        description: 'Pressuring our municipal and provincial government to invest in greater resources and education regarding the importance of supporting Monarch migration routes will help preserve vital feeding, breeding and migration grounds for this species. Educational programs raise public awareness about the importance of Monarchs and encourage community participation in planting pollinator-friendly and native milkweed. Together, these efforts have and will continue to reduce habitat loss and improve the flourishing lands that make it easier for Monarchs to find the resources they needs when reproducing and migrating.',
    }
]; 

const RoostingPopulation = [
  {region: 'Eastern USA', Monarchs: '61500000'},
  {region: 'Westrn USA', Monarchs: '250000'},
  {region: 'Mexico Overwintering Sites', Monarchs: '61500000'},
  {region: 'Southern Florida', Monarchs: '10000'},
  {region: 'Midwesterrn USA (Milkweed Habitat Impact)', Monarchs: '0'}
];

function step(index){
    let stepNumber = index + 1
    return "item." + stepNumber
}

    return {
      MonarchPopulation,
      EcologicalFactors, 
      step,
      RoostingPopulation
    };
  }
};

createApp(App)
.use(vuetify)
  .mount('#app');

