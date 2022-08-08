var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    return head.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};

removeNthFromEnd(new ListNode(1, [2, 3, 4, 5]), 2);
