import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Task = new Schema({
  title: { type: String, required: true },
  creatorEmail: { type: String, required: true },
  //  boardId: { type: ObjectId, ref: 'Board', required: true },
  listId: { type: ObjectId, ref: 'List', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })


Task.virtual("creator",
  {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true
  })

//CASCADE ON DELETE
Task.pre('deleteMany', function (next) {
  //lets find all the lists and remove them
  Promise.all([
    //something like...
    //dbContext.Task.deleteMany({ listId: this._conditions_id }),
  ])
    .then(() => next())
    .catch(err => next(err))
})


export default Task