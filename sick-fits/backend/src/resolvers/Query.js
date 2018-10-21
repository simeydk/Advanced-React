const Query = {
    dogs(parent, args, ctx, info) {
        global.dogs = global.dogs || [{name:'Snickers'},{name:'Snoopy'},{name:'Dobby'}]  
        return global.dogs
    }
};

module.exports = Query;
