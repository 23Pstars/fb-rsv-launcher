// Saves options to chrome.storage.sync.
function save_options() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var api_key = document.getElementById('api_key').value;
    chrome.storage.sync.set({
        username: username,
        password: password,
        api_key: api_key
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        username: '',
        password: '',
        api_key: ''
    }, function (items) {
        document.getElementById('username').value = items.username;
        document.getElementById('password').value = items.password;
        document.getElementById('api_key').value = items.api_key;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('options-save').addEventListener('click', save_options);