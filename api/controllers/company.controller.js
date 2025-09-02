const db = require("../models");
const Company = db.company;
const Op = db.Sequelize.Op;

// Create contact
exports.create = (req, res) => {
    const  company= {
        company_name: req.body.company_name,
        company_address: req.body.company_address,
        contactId:  parseInt(req.params.contactId)
    };

    Company.create(company)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred"
            });
        });
};

// Get all company
exports.findAll = (req, res) => {
    Company.findAll({where: {
            contactId: parseInt(req.params.contactId)
        }})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one contact by id
exports.findOne = (req, res) => {
    const id = req.params.contactId;

    Company.findOne({where: {
            contactId: req.params.contactId,
            id: req.params.companyId
        }})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Company with id=" + id
            });
        }
    );
};

// Update one contact by id
exports.update = (req, res) => {
    const id = req.params.companyId;

    Company.update(req.body, {
        where: { id: id, contactId: req.params.contactId }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Company was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Company`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Company with id=" + id
        });
    });
};

// Delete one contact by id
exports.delete = (req, res) => {
    const id = req.params.companyId;

    Company.destroy({
        where: { id: id, contactId: req.params.contactId }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Company was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Company`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Company with id=" + id
        });
    });

};