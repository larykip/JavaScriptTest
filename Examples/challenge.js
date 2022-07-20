class Utility {
    constructor(name, yearOfBuild){
        this.name = name;
        this.yearOfBuild = yearOfBuild;
    }
}

class Park extends Utility{
    constructor(name, yearOfBuild, treeNumber, parkArea){
        super(name, yearOfBuild);
        this.treeNumber = treeNumber;
        this.parkArea = parkArea;
    }

    treeDensity(){
        let density = this.treeNumber / this.parkArea;
        console.log(`${this.name} park, founded in ${this.yearOfBuild}, has a tree density of ${density.toFixed(2)} per square km.`);
    }
}

class Street extends Utility{
    constructor(name, yearOfBuild, size = 3, streetlen) {
        super(name, yearOfBuild);
        this.size = size;
        this.streetlen = streetlen;
    }

    classification(){
        let category = new Map();
        category.set(1, 'tiny');
        category.set(2, 'small');
        category.set(3, 'normal');
        category.set(4, 'big');
        category.set(5, 'huge');

        console.log(`${this.name} street, built in ${this.yearOfBuild}, is a ${category.get(this.size)} street.`)
    }
}

let parks = [new Park('Amboseli', 1975, 1500, 109), new Park('Cisco Swiss', 2008, 1605, 9975)];

let streets = [new Street('Luthuli', 1996, 2, 50), new Street('Kipande', 2003, 4, 754)];


function parkReportGenerator(park){
    console.log('----PARKS REPORT----');
    //average age. We will first calculate the ages
    let age = park.map( el => new Date().getFullYear() - el.yearOfBuild);
    //to find the number of parks
    let parkNumber = park.length
    //calculates the sum of ages in the array using a reduce function
    let initVal = 0
    let sum = age.reduce((preVal, curVal) => preVal + curVal, initVal);
    let avg = sum / parkNumber;
    console.log(`Our ${parkNumber} parks have an average age of ${avg.toFixed(2)} years`);
    //tree density. Here we will loop through the array then pass the method here
    park.forEach(el => el.treeDensity());   
    //check the park that has more than 1000 trees
    // park.forEach((el, index) => {
    //     if(el.treeNumber > 999){
    //         console.log(`${park[index].name} park has more than 1000 trees`)
    //     }
    // })

    let i = park.map(el => el.treeNumber)
    let z = [];
    i.forEach(function(el){
        if(el >= 1000){
            z.push(el);

        }
    });
    let index = z.forEach(el => park.findIndex(el))
    //console.log(z)
}

function streetReportGenerator(street){
    console.log('----STREETS REPORT----');
    //total length of the streets
    let streetLength = street.map(el=> el.len);
    let val = 0;
    let total = streetLength.reduce((preVal, curVal) => preVal + curVal, val);
    let streetNumber = street.length;
    let avg = total / streetNumber
    console.log(`Our ${streetNumber} streets have a total length of ${total.toFixed(2)} km, with an average of ${avg.toFixed(2)} km.`);

    //size of the street
    street.forEach(el => el.classification());
}
parkReportGenerator(parks);
streetReportGenerator(streets);