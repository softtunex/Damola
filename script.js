// const selectItem = (element) => {
//   navItem = document.querySelectorAll("#nav li");
//   navItem.forEach((item) => {
//     item.classList.remove("selected");
//   });

//   element.classList.add("selected");
// };
// document.addEventListener("DOMContentLoaded", function () {
//   const starsContainer = document.querySelector(".stars-container");
//   const numberOfStars = 50; // Adjust the number of stars

//   for (let i = 0; i < numberOfStars; i++) {
//     const star = document.createElement("div");
//     star.className = "star";
//     starsContainer.appendChild(star);

//     positionStar(star);
//   }
// });

// function positionStar(star) {
//   const leftPos = Math.random() * 100;
//   const topPos = Math.random() * 100;

//   star.style.left = `${leftPos}vw`;
//   star.style.top = `${topPos}vh`;
// }
// console.log("Happy");
const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const modal = document.getElementById("contactModal");
function openModal() {
  document.body.classList.add("modal-open");
  modal.style.display = "flex";
  // Add click event listener to modal background
  window.addEventListener("click", outsideClick);

  document.getElementById("contactModal").style.display = "flex";
  window.addEventListener("click", outsideClick);
}

function sendMessage() {
  const bodyMessage = `<p>Hello,</p>
  
  <p>Someone is trying to reach out to you through your website's contact form. Please find the details below:</p>
  
  <ul>
    <li><strong>Name:</strong> ${firstName?.value} ${lastName?.value}</li>
    <li><strong>Email:</strong> ${email?.value}</li>
    <li><strong>Message:</strong><br>${message?.value}</li>
  </ul>

  <p>Kindly address this inquiry at your earliest convenience.</p>

  <p>Best regards,<br>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "adedamolaj6@gmail.com",
    Password: "59C3F96B90E223DE0E5003FD6BAE450FF3D6",
    To: "adedamolajokee@gmail.com",
    From: "adedamolaj6@gmail.com",
    Subject: "Someone is trying to reach out to you",
    Body: bodyMessage,
  }).then((message) => alert(message));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
  closeModal();
});

function closeModal() {
  document.getElementById("contactModal").style.display = "none";
  window.removeEventListener("click", outsideClick);
  document.body.classList.remove("modal-open");
}
function outsideClick(e) {
  // Close the modal if the click is outside the modal content
  if (e.target === modal) {
    closeModal();
  }
}
// Problem: GIven a number 'n', find the first 'n' elements of the Fibonacci sequence

const Fibonacci = (n) => {
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
};

// console.log(Fibonacci(2));

// Problem: Given an integer 'n', find the factorial of that integer

const factorial = (n) => {
  let num = 1;
  for (let i = 1; i < n; i++) {
    num *= i + 1;
  }
  return num;
};

// console.log(factorial(1223326));

// Problem: Given a natural number 'n', determine if the number is prime or not

const prime = (n) => {
  if (n < 2 && n / n == 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    } else {
      return true;
    }
  }
};

// console.log(prime(8));

// Give a postive integer 'n, determine if the number is a power of 2 or not

const isPowerOfTwo = (n) => {
  if (n === 0) {
    return true;
  }
  for (let i = 0; i < n; i++) {
    if ((2 ^ i) % n == 0) {
      return true;
    } else {
      return false;
    }
  }
};

// console.log(isPowerOfTwo(8));

const FibonacciRecursive = (n) => {
  if (n <= 1) {
    return n; // Base case: return 0 for n=0, and 1 for n=1
  } else {
    return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2); // Recursive case
  }
};

// console.log(FibonacciRecursive(6));

const factorialRecursive = (n) => {
  if (n < 1) {
    return 1;
  } else {
    return factorialRecursive(n - 1) * n;
  }
};

// console.log(factorialRecursive(5));

const linearSearch = (n, t) => {
  return n.includes(t) ? n.indexOf(t) : -1;
};

// console.log(linearSearch([0, 1, 5, 4, 3], 4));

const binarylinearSearch = (n, t) => {
  // return n.sort((a, b) => a - b).includes(t) ? n.indexOf(t) : -1;
  let mid = Math.floor((0 + (n.length - 1)) / 2);
  while (0 <= n.length - 1) {
    if (n[mid] === t) {
      return mid;
    } else if (n[mid] < t) {
      return (n[0] = mid + 1);
    } else {
      return (n.length = mid - 1);
    }
  }
};

// console.log(binarylinearSearch([0, 1, 5, 4, 3, 2], 5));

const bubbleSorting = (arr) => {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
// console.log(bubbleSorting([-3, 1, 0, 7, 3, -2]));

var twoSum = function (nums, target) {
  let arr = [];
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
// console.log(twoSum([2, 11, 7, 15], 9));

var twoSum = function (nums, target) {
  const indexKey = {};

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];

    if (indexKey.hasOwnProperty(compliment)) {
      return [indexKey[compliment], i];
    }

    return nums[i];
  }

  return [];
};
// console.log(twoSum([2, 7, 11, 15], 18));

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays2 = function (nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;
  var len = len1 + len2;
  var mid = Math.floor(len / 2);
  var i = 0;
  var j = 0;
  var k = 0;
  var nums = [];
  while (k <= mid) {
    if (i < len1 && j < len2) {
      if (nums1[i] < nums2[j]) {
        nums.push(nums1[i]);
        i++;
      } else {
        nums.push(nums2[j]);
        j++;
      }
    } else if (i < len1) {
      nums.push(nums1[i]);
      i++;
    } else if (j < len2) {
      nums.push(nums2[j]);
      j++;
    }
    k++;
  }
  if (len % 2 === 0) {
    return (nums[mid] + nums[mid - 1]) / 2;
  } else {
    return nums[mid];
  }
};

var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [];

  arr.push(nums1, nums2);

  let mergedArr = arr
    .flat()
    .map((a) => parseInt(a))
    .sort((a, b) => b - a);

  if (mergedArr.length % 2 === 0) {
    let median = Math.floor(mergedArr.length / 2) - 1;
    return (mergedArr[median] + mergedArr[median + 1]) / 2;
  } else {
    let median = Math.floor(mergedArr.length / 2);

    return mergedArr[median];
  }
};

// console.log(findMedianSortedArrays([], [5]));

var addTwoNumbers = function (l1, l2) {
  let firstList = l1.reverse().join("");
  let secondList = l2.reverse().join("");
  let sum = parseInt(firstList) + parseInt(secondList);
  let sumArr = sum
    .toString()
    .split("")
    .reverse()
    .map((a) => Number(a));
  return sumArr;
};

// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charSet = new Set();
  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    while (charSet.has(currentChar)) {
      charSet.delete(s[start]);
      start++;
    }

    charSet.add(currentChar);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
// console.log(lengthOfLongestSubstring("abcabcbb")); //3
// console.log(lengthOfLongestSubstring("bbbbb")); //0
// console.log(lengthOfLongestSubstring("pwwkew")); //3

var longestPalindrome = function (s) {
  let maxLength = 0;
  let start = 0;
  let charSet = new Set();
  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    while (charSet.has(currentChar)) {
      charSet.delete(s[start]);
      start++;
    }

    charSet.add(currentChar);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
