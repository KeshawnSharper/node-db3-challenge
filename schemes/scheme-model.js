const db = require('../data/dbConfig');

function find(){
    return db("schemes")
}
function findById(id){
    return db("schemes").where({id})
}
function findSteps(id){
    return db("steps").select("id","instructions","step_number").where({"scheme_id":id})
}
function addStep(step,id){
    const findScheme = db("schemes").where({id})
    return db("steps").where({id} = findScheme).insert(step)
}
const add = scheme =>{
    return db('schemes', 'id')
    .insert(scheme)
    .then(id => findById(...id));
};
const update = (changes, id) =>{
    return db('schemes')
    .where('id', id)
    .update(changes, '*')
    .then(count => findById(id));
};
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

