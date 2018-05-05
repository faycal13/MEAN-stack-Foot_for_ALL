//import du module mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName : {type: String,  require: true, trim: true},//trim allows you to remove the blanks at the beginning and end of the String. (space, tab, unbreakable space, etc.)
    lastName : {type: String,  require: true, trim: true},
    userName : {type: String, require: true, unique: true, trim: true},
    email : {type: String, require: true, unique: true , lowercase: true, trim: true},
    password : {type: String,  require: true},
    age : {type: Number,  require: true},
    sex:{type: Number,  require: true},
    createdDate:{type: Date, default: Date.now }
  });

  // Enregistrement de l'utilisateur (toujours hasher les mots de passe en production)
UserSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});
// Comparaison des mots de passes reçus et en base
UserSchema.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, UserSchema.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
module.exports = mongoose.model('user', UserSchema, 'users');
