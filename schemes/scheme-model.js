const db = require('../data/dbConfig');

function find(){
    return db("schemes")
}
function findById(id){
    return db("schemes").where({id})
}
function findSteps(id){
    return db("steps").where({"scheme_id":id})
}
function addStep(step,id){
    const findScheme = db("schemes").where({id})
    return db("steps").where({id} = findScheme).insert(step)
}
function add(data){
return db("schemes").insert(data)
}
function update(data,id){
    return db("schemes").where({id}).update(data)
    }
function remove(id){
    return db("schemes").where({id}).del()
}


module.exports = {
    find,
    findById,
    findSteps,
    addStep,
    add,
    update,
    remove
}

