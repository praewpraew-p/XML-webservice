'use strict';

var mongoose = require('mongoose'),
    Person = mongoose.model('Person');

exports.persons_all = function(req,res) {
    Person.find({}, function(err,person) {
        if(err)
            res.send(err);
        res.json(person);
    });
};

exports.create_persons = function(req,res) {
    var new_person = new Person(req.body);
    new_person.save(function(err,person){
        if(err)
            res.send(err);
        res.json(person);
    });
};

exports.read_persons = function(req,res) {
    Person.findById(req.params.personsId,function(err,person) {
        if(err)
            res.send(err);
        res.json(person);
    });
};

exports.update_persons = function(req,res) {
    Person.findOneAndUpdate({_id:req.params.personsId}, req.body,{new:true},
        function(err,person) {
            if(err)
                res.send(err);
            res.json(person);
        });
};

exports.delete_persons = function(req,res){ 
    Person.remove({
        _id: req.params.personsId
    },function(err,person) {
        if(err)
            res.send(err)
        res.json({message: 'person successfully deleted'});
    });
};
