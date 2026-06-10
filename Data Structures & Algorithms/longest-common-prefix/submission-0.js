class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    // Start by assuming the first string is the common prefix
    let prefix = strs[0];
    console.log(prefix)

    for (let i = 1; i < strs.length; i++) {
        // While the current string does not start with the prefix
        console.log(strs[i], prefix,strs[i].indexOf(prefix))
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by one character from the end
            prefix = prefix.substring(0, prefix.length - 1);
            
            // If the prefix becomes empty, there is no common prefix
            if (prefix === "") return "";
        }
    }

    return prefix;
    }
}
