// var mongoose = require('mongoose'),
//     Schema = mongoose.Schema,
//     crypto = require('crypto');
//
// var UserSchema = new Schema({
//     firstName: {
//         type: String,
//         trim: true,
//         default: ''
//     },
//     lastName: {
//         type: String,
//         trim: true,
//         default: ''
//     },
//     email: {
//         type: String,
//         trim: true,
//         unique: 'Account aready exists with this email',
//         required: 'Please enter your email',
//         validate: {
//             validator: validateLocalStrategyProperty,
//             message: 'Please enter a valid password'
//         }
//     },
//     username: {
//         type: String,
//         trim: true,
//         unique: true,
//         required: true,
//         lowercase: true,
//         validate: {
//             validator: validateUserName,
//             message: 'Please use a valid username'
//         }
//     },
//     passwordHash: {
//         type: String,
//         default: ''
//     },
//     salt: {
//         type: String
//     },
//     lastModified: {
//         type: Date
//     },
//     created: {
//         type: Date
//     },
//     resetPasswordToken: {
//         type: String
//     },
//     token: String,
//     apiKey: {
//         type: String,
//         unique: true,
//         index: true,
//         sparse: true
//     }
// });
//
//
// UserSchema.virtual('displayName').get(() => this.firstName + ' ' + this.lastName);
// UserSchema.virtual('password').set((password) => {
//     this.passwordHash = this.hashPassword(password);
// });
// UserSchema.virtual('password').get((password) => this.passwordHash);
//
// UserSchema.methods.hashPassword = function(password) {
//     var encoding = 'base64';
//     var iterations = 10000;
//     var keyLen = 128;
//     var size = 64;
//     var digest = 'SHA1';
//
//     if (!this.salt) {
//         this.salt = crypto.randomBytes(size).toString(encoding);
//     }
//
//     if (password) {
//         return crypto.pbkdf2Sync(password, new Buffer(this.salt, encoding), iterations, keylen, digest).toString(encoding);
//     } else {
//         return password;
//     }
// }
