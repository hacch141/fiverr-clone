import User from "../models/user.model.js"
import createError from "../utils/createError.js"

export const deleteUser = async (req, res, next) => {

    const user = await User.findById(req.params.id)

    if (user._id.toString() !== req.userId) {
        return next(createError(401, "You can delete your account only :)"))
    }

    await User.findByIdAndDelete(req.params.id)
    res.status(200).send("Your account is successfully deleted... ")
}

export const getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);

    res.status(200).send(user);
};