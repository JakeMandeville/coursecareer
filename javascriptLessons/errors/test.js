const x = 2

/*try { 
    console.log("try");
    // x.touppercase();
    console.log("success")
} catch(err) {
    console.log(err.message, err.name);
} finally {
    console.log("finally");
}*/

/*try { 
    console.log("try");
    // x.touppercase();
    throw "this is an error";
    console.log("success")
} catch(err) {
    console.log(err);
} finally {
    console.log("finally");
}*/

try { 
    console.log("try");
    // x.touppercase();
    console.log("success")
    throw Error("This is an error gay")
    
} catch(err) {
    console.log(err.message, err.name);
} finally {
    console.log("finally");
}