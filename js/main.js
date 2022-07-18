let textOne = "Uwielbiam JavaScript";
let textTwo = "Jestem świetnym programistą";


function action(par1, par2) {
    if (par1.lenght < par2.lenght) {
        return par1;
    } else {
        return par2;
    }
}


console.log(action("Uwielbiam JavaScript", "Jestem świetnym programistą"));
