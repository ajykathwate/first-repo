 
 async function foo1(things) {
   const results = []; 
   for (const thing of things) { 
     //  Bad: each loop iteration is delayed until the entire asynchronous operation completes
     results.push(await bar(thing));
   } 
   return baz(results); 
 } 
 
