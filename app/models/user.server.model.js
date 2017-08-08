var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

var UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        default: ''
    },
    lastName: {
        type: String,
        trim: true,
        default: ''
    },
    email: {
        type: String,
        trim: true,
        unique: 'Account aready exists with this email',
        required: 'Please enter your email',
        validate: {
            validator: validateLocalStrategyProperty,
            message: 'Please enter a valid password'
        }
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase: true,
        validate: {
            validator: validateUserName,
            message: 'Please use a valid username'
        }
    },
    passwordHash: {
        type: String,
        default: ''
    },
    salt: {
        type: String
    },
    lastModified: {
        type: Date
    },
    created: {
        type: Date
    },
    resetPasswordToken: {
        type: String
    },
    token: String,
    apiKey: {
        type: String,
        unique: true,
        index: true,
        sparse: true
    }
});


UserSchema.virtual('displayName').get(() => this.firstName + ' ' + this.lastName);
UserSchema.virtual('password').set(function(password) {
    this.passwordHash = this.hashPassword(password);
});
UserSchema.virtual('password').get(function() {
    return this.passwordHash;
});

UserSchema.methods.hashPassword = function(password) {
    var encoding = 'base64';
    var iterations = 10000;
    var keyLen = 128;
    var size = 64;
    var digest = 'SHA1';

    if (!this.salt) {
        this.salt = crypto.randomBytes(size).toString(encoding);
    }

    if (password) {
        return crypto.pbkdf2Sync(password, new Buffer(this.salt, encoding), iterations, keylen, digest).toString(encoding);
    } else {
        return password;
    }
};

UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

UserSchema.statics.findUniqueUserName = function(username, suffix, callback) {
    var that = this;
    var possibleUsername = username + (suffix || '');

    that.findOne({
        username: possibleUsername
    }, function(err, user) {
        if (!err) {
            if (!user) {
                return callback(possibleUsername);
            } else {
                /// How this shit recursion works ?
                return that.findUniqueUserName(username, (suffix || 0) + 1, callback);
            }
        }

        return callback(null);
    });
};

UserSchema.methods.isAdmin = function() {
    return this.roles.indexOf('admin') >= 0;
};

module.exports = mongoose.model('User', UserSchema);
