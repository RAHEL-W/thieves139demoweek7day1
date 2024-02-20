//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/

let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string){
   

    for (let dog_name of dog_names){
        let dog_names_lower =  dog_name.toLowerCase();
        let dog_string_lower = dog_string.toLowerCase();
        if (  dog_string_lower.includes( dog_names_lower)){
            console.log(`Matched ${dog_name}`)
         
        }
        else{
            console.log(`No Match ${dog_name}`)
        }
    }
       
    }
       
//Call method here with parameters
    findWords("Hello Max, my name is Dog, and I have purple eyes!")






//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// array == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(array){
        for(let i =0; i<array.length; i++ ){
        if (i %2 == 0){
            console.log("even index")
        }
        else{
            console.log(array[i])
        }
    }
}

replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]);


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



            // ================codewars========================

// Remove First and Last Character
function remove_1st_lst(str){
    
    let slice_str = str.slice(1, str.length - 1)
    console.log(slice_str)
}

remove_1st_lst('rahel')



// Opposites Attract

function opp_attract(f1,f2){
    let n = f1 + f2;
    if(n % 2 == 0){
        console.log('FALSE')
    }
    else{
        console.log('TRUE')
    }

   
    
}

opp_attract(5,2)

