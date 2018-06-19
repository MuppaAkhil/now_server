//this is the endpoint to fetch the cards
export const fetchCards = async (req, res) => {
    const { page = 0, itemCount = 10 } = req.query;
    if(page == 0){
        res.json({data,page,itemCount});
    }else{
        res.json({data:filterItems(itemCount),page,itemCount});
    }
}

//This will give random cards from the data available, @itemcount:take the number of random items required
const filterItems = (itemcount) => {
  let filteredArray = [];  
  for(let i=0;i<itemcount;i++){
    let randomNumber = Math.floor(Math.random() * 13) + 0;
    filteredArray.push(data[randomNumber]);
  }  
  return filteredArray;
}


let data = [
    {
        name:'Rajesh',
        Place:'Hyderabad',
        Address:'Jubilee hills road'
    },
    {
        name:'Suresh',
        Place:'Mumbai',
        Address:'flat 20, hanging gardens'
    },
    {
        name:'Ramesh',
        Place:'Secunderabad',
        Address:'station road'
    },
    {
        name:'Arjun',
        Place:'Hyderabad',
        Address:'Madhapur'
    },
    {
        name:'Karun',
        Place:'bengaluru',
        Address:'Marthali road 13, 14-9394, near vegetable market'
    },
    {
        name:'Arun',
        Place:'chennai',
        Address:'MK road'
    },
    {
        name:'Giri',
        Place:'Pune',
        Address:'shivaji road'
    },
    {
        name:'alekya',
        Place:'Pune',
        Address:'near bus station, second lane'
    },
    {
        name:'manoj',
        Place:'Secunderabad',
        Address:'Near paradise'
    },
    {
        name:'John',
        Place:'Boston',
        Address:'17Y,Bay area'
    },
    {
        name:'Paul',
        Place:'CA',
        Address:'20CA,houston house'
    },
    {
        name:'Kristen',
        Place:'New York',
        Address:'NY,james street'
    },
    {
        name:'Anne Buck',
        Place:'New Jersey',
        Address:'NJ,13 street'
    }
];