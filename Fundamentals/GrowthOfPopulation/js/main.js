function nbYear(p0, percent, aug, p) {
   let nbOfYears = 0;
   let population = p0;
   do {
      population = population+population*percent/100 + aug;
      nbOfYears++;
   }while(population<p)

   return nbOfYears;
}


console.log(nbYear(1500, 5, 100, 5000))