class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        if (emails.length === 0) return 0;

        let mySet = new Set();

        for (let email of emails) {
            let cleanedEmail = cleanEmail(email);
            mySet.add(cleanedEmail)
        }

        return mySet.size;
    }
}

function cleanEmail(email) {
    let j = email.indexOf('@')
    
    let local = email.slice(0, j)
    let domain = email.slice(j, email.length);
    
    // remove .
    while (local.includes('.')) {
        local = local.replace(".", "");
    }

    if (local.includes('+')) {
        local = local.slice(0, local.indexOf('+'))
    }

    return local + domain;
}
