function getUniqueUsers(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);

  const uniqueInList1 = new Set([...set1].filter(user => !set2.has(user)));
  const uniqueInList2 = new Set([...set2].filter(user => !set1.has(user)));
  const intersection = new Set([...set1].filter(user => set2.has(user)));

  return {
    uniqueInList1: Array.from(uniqueInList1),
    uniqueInList2: Array.from(uniqueInList2),
    intersection: Array.from(intersection),
  };
}

const List1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const List2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

const result = getUniqueUsers(List1, List2);
console.log('Unique users in List1 but not in List2:', result.uniqueInList1);
console.log('Unique users in List2 but not in List1:', result.uniqueInList2);
console.log('Users present in both List1 and List2:', result.intersection);
