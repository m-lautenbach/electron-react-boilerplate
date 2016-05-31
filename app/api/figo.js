import Promise from 'bluebird'
import figo from 'figo'
import curry from 'lodash/fp/curry'
import bind from 'lodash/bind'

var aquireAccessToken = curry(function(client_id, client_secret, username, password) {
    var connection = new figo.Connection(client_id, client_secret);
    return new Promise(function (resolve, reject) {
        connection.credential_login(username, password, null, null, null, null, function(error, token) {
            if (error) {
                reject(error);
            } else {
                resolve(token);
            }
        });
    })
})

var get_accounts = curry(function(access_token) {
    var session = new figo.Session(access_token);
    return new Promise(function(resolve, reject) {
        session.get_accounts(function(error, accounts) {
            if(error) reject(error)
            else resolve(accounts)
        });
    });
})

var get_account = curry(function(access_token, account_id) {
    var session = new figo.Session(access_token);
    return new Promise(function(resolve, reject) {
        session.get_account(account_id, function(error, account) {
            if(error) reject(error)
            else resolve(account)
        });
    });
})

var get_transactions = curry(function(access_token, account_id, options) {
    return get_account(access_token, account_id)
        .then(function(account) {
            return new Promise(function(resolve, reject) {
                account.get_transactions(options, function(error, transactions) {
                    if(error) reject(error)
                    else resolve(transactions)
                });
            });
        })
})

export default {
    aquireAccessToken,
    get_accounts,
    get_transactions
};

