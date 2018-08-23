export const inRangeBoxes = (clickedBoxNumber) =>{
    let tempArray = [];
    let myArray = [];
    for(let i = 0; i<=100; i++){
        myArray.push(i);
    }
    // console.log(this.state.inRange);
    myArray.forEach(number=>{
        let test = Math.abs(clickedBoxNumber - number);
        if((clickedBoxNumber + 10) - 7 === number && Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10) ) {
            // console.log(`the number is ${number} therefore it is not included`)
        }
        else if((clickedBoxNumber - 10) + 7 === number &&
            Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10)

        ) {
            // console.log(`the number is ${number} therefore it is not included`)
        }
        else if((clickedBoxNumber - 10) - 8 === number
            &&
            Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10) &&
            Math.ceil((clickedBoxNumber - 20) / 10) !== Math.ceil(number / 10)
        ) {
            // console.log(`the number is ${number} therefore it is not included`)
        }
        else if((clickedBoxNumber + 30) - 8 === number &&
            Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10) &&
            Math.ceil((clickedBoxNumber + 20) / 10) !== Math.ceil(number / 10)
        ) {
            // console.log(`the number is ${number} therefore it is not included`)
        }
        //Not completed
        else if((clickedBoxNumber + 10) + 8 === number &&
            Math.ceil((clickedBoxNumber + 20) / 10) !== Math.ceil(number / 10)
        ) {
            // console.log(`the number is ${number} therefore it is not included`)
        }
        else if((clickedBoxNumber - 30) + 8 === number &&
            Math.ceil((clickedBoxNumber - 20) / 10) !== Math.ceil(number / 10)
        ) {
            // console.log(`the number is ${number} therefore it is not included`)
        }
        else if( test === 3 || test === 30 || test === 18 || test === 22){
            tempArray.push(number);
        }
    });
    return tempArray;
};


export class Level {
    constructor(numberToCheck, levelNumber){
        this.numberToCheck = numberToCheck;
        this.levelNumber  = levelNumber;
        this.possibilityArray = [numberToCheck];
    }

    inRangeBoxes (clickedBoxNumber){
        let tempArray = [];
        let myArray = [];
        for(let i = 0; i<=100; i++){
            myArray.push(i);
        }
        // console.log(this.state.inRange);
        myArray.forEach(number=>{
            let test = Math.abs(clickedBoxNumber - number);
            if((clickedBoxNumber + 10) - 7 === number && Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10) ) {
                // console.log(`the number is ${number} therefore it is not included`)
            }
            else if((clickedBoxNumber - 10) + 7 === number &&
                Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10)

            ) {
                // console.log(`the number is ${number} therefore it is not included`)
            }
            else if((clickedBoxNumber - 10) - 8 === number
                &&
                Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10) &&
                Math.ceil((clickedBoxNumber - 20) / 10) !== Math.ceil(number / 10)
            ) {
                // console.log(`the number is ${number} therefore it is not included`)
            }
            else if((clickedBoxNumber + 30) - 8 === number &&
                Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10) &&
                Math.ceil((clickedBoxNumber + 20) / 10) !== Math.ceil(number / 10)
            ) {
                // console.log(`the number is ${number} therefore it is not included`)
            }
            //Not completed
            else if((clickedBoxNumber + 10) + 8 === number &&
                Math.ceil((clickedBoxNumber + 20) / 10) !== Math.ceil(number / 10)
            ) {
                // console.log(`the number is ${number} therefore it is not included`)
            }
            else if((clickedBoxNumber - 30) + 8 === number &&
                Math.ceil((clickedBoxNumber - 20) / 10) !== Math.ceil(number / 10)
            ) {
                // console.log(`the number is ${number} therefore it is not included`)
            }
            else if( test === 3 || test === 30 || test === 18 || test === 22){
                tempArray.push(number);
            }
        });
        return tempArray;
    };

    generatePossibilities(){
        let errorsCorrected = 4;
        if(this.levelNumber > 90){

        }
        while (this.possibilityArray.length <= this.levelNumber){
            let availableBoxes = this.inRangeBoxes(this.numberToCheck);
            //All this junk here, I am trying to randomise the out come :)
            for(let i = 0; i<= errorsCorrected; i++){
                let lastNum = availableBoxes.pop();
                availableBoxes.unshift(lastNum);
            }


            for (let i = 0; i<= availableBoxes.length; i++){
                let test = availableBoxes[i];
                let test1 = availableBoxes[i+1];
                if(this.possibilityArray.indexOf(test) === -1){
                    if(this.possibilityArray.indexOf(test1) === -1){
                        this.possibilityArray.push(test);
                        this.numberToCheck = test;
                        break;
                    }
                    this.possibilityArray.push(test);
                    this.numberToCheck = test;
                    break;
                }

            }
            if(this.possibilityArray.indexOf(undefined) >= 0){
                errorsCorrected++;
                this.possibilityArray = [this.possibilityArray[0]];
                this.numberToCheck = this.possibilityArray[0]
            }
        }
        return this.possibilityArray;
    }
}
