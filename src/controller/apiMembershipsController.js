const { restart } = require('nodemon');
const db = require('../database/models');
const Op = db.Sequelize.Op;

const apiMembershipsController = {
    list: (req, res) =>{
        db.Membership.findAll()
            .then(membership => {
                let response = {
                    info: {
                        status: 200,
                        total: membership.length,
                        url: 'api/membership/list'
                    },
                    data: membership,
                }
                res.json(response)
            })
            .catch(e => {
                let response = {
                    info: {
                        status: 404,
                        url: 'api/mmbership/list',
                        error: e
                    },
                }
                res.json(response)
            })
    },

    detail: (req, res) => {
        db.Membership.findByPk(req.params.id)
            .then(membership => {
                let response = {
                    info: {
                        status: 200,
                        url: 'api/membership/detail' + req.params.id
                    },
                    data: membership,
                }
                if (data !== null){
                res.json(response)
            }
            })
            .catch(e => {
                let response = {
                    info: {
                        status: 404,
                        url: 'api/memberhsip/detail' + req.params.id,
                        error: e
                    },
                }
                res.json(response)
            })
    },
/*
    categories: (req, res) =>{
        db.Category.findAll()
            .then(categories => {
                let response = {
                    info: {
                        status: 200,
                        total: categories.length,
                        url: 'api/products/categories'
                    },
                    data: categories

                }
                res.json(response)
            })
            .catch(e => {
                let response = {
                    info: {
                        status: 404,
                        url: 'api/products/categories',
                        error: e
                    },
                }
                res.json(response)
            })
    }, */


    search: (req, res) => {
        db.Membership.findAll({
            where: {
                name: { [Op.like]: "%" + req.query.keyword + "%"},
            },
        })
        .then (memberships => {
            return res.json(memberships);
        })
    },
    
    
    index: (req, res) =>{
        db.Membership.findAll()
            .then(memberships => {
                const reducer = (map, val) => {
                    if(map[val] == null) {
                        map[val] = 1;
                    } else {
                        ++map[val];
                    }
                    return map
                    };
                let response = {
                    meta: {
                        status: 200,
                        total: memberships.length,
                        url: 'api/memberships/index'
                    },
                    data: {
                        count: memberships.length,
                        countByCategory: memberships.map(el => el.categoria.name).reduce(reducer, {}),
                        products,
                    }
                }
                res.json(response)
            })
            .catch(e => {
                let response = {
                    meta: {
                        status: 404,
                        url: 'api/memberships/index',
                        error: e
                    },
                }
                res.json(response)
            })
    },

    edit: (req, res) =>{
        let productId = req.params.id;
        db.Membership.update(
            {
                active: req.body.active,
            },
            {
                where: {id: id_memberships}
            })
            .then(confirmacion => {
            let response;
            if(confirmacion){
                response = {
                    meta: {
                        status: 201,
                        message: "Membership actualizado",
                        url: 'api/memberships/edit'
                    },
                    data: confirmacion
                }
            } else {
                response = {
                    info: {
                        status: 500 ,
                        url: 'api/membership/edit'
                    },
                    data: confirmacion 
                }
            }
            res.json(response)
        })
        .catch(error => res.send(error))
    },







}

module.exports = apiMembershipsController;