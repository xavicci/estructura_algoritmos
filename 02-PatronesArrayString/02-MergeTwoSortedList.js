const nums1 = [1, 2, 3, 0, 0, 0, 0];
const m = 3;
const nums2 = [-4, 2, 3, 9];
const n = 4;

const min_value = (nums1, nums2) => {
  if (nums1[0] < nums2[0]) {
    return nums1[0];
  } else {
    return nums2[0];
  }
};

const max_value = (nums1, nums2) => {
  max_leng_value1 = nums1.length - nums2.length - 1;
  max_leng_value2 = nums2.length - 1;

  if (nums1[max_leng_value1] > nums2[max_leng_value2]) {
    return nums1[max_leng_value1];
  } else {
    return nums2[max_leng_value2];
  }
};

function addMerge(array, value, merge) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value && value != 0) {
      merge.push(value);
    }
  }
  return merge;
}

function mergeTwoSorted(nums1, nums2) {
  const min = min_value(nums1, nums2);
  const max = max_value(nums1, nums2);

  let array_merged = [];

  for (let value = min; value <= max; value++) {
    addMerge(nums1, value, array_merged);
    addMerge(nums2, value, array_merged);
  }
  return array_merged;
}

console.log(mergeTwoSorted(nums1, nums2));
