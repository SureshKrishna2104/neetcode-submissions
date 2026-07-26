class Solution {
    mergeKLists(lists) {
        if (lists.length === 0) {
            return null;
        }

        while (lists.length > 1) {
            let mergedLists = [];
            for (let i = 0; i < lists.length; i += 2) {
                let list1 = lists[i];
                let list2 = lists[i + 1] || null;
                let merged = this.mergeTwoLists(list1, list2);
                mergedLists.push(merged);
            }
            lists = mergedLists;
        }
        
        return lists[0];
    }

    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0);
        let cur = dummy;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                cur.next = list1;
                list1 = list1.next;
            } else {
                cur.next = list2;
                list2 = list2.next;
            }

            cur = cur.next;
        }

        cur.next = list1 || list2;

        return dummy.next;
    }
}