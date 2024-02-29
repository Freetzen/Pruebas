const plansModel = require("../models/plansModel");

const findAllPlans = async () => {
    try {
        return await plansModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

const createPlan = async (plan) => {
    try {
        const newPreference = await plansModel.create(plan);
        return newPreference;
    } catch (error) {
        throw new Error(error);
    }
}

const findPlanByType = async (type) => {
    try {
        const order = await plansModel.find( type );
        return order
    } catch (error) {
        throw new Error(error);
    }
}

const PutPlan = async (id, info) => {
    try {
    return await plansModel.findByIdAndUpdate(id, info);
    } catch (error) {
    throw new Error(error);
    }
    };

module.exports = {findAllPlans, createPlan, findPlanByType, PutPlan}