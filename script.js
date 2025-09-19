function firstWord(s) {
  // your code here
	let ans=''
	let i=0;
	while (i<s.length&&s[i]===' ') {
		i++
	}
	while (i<s.length&&s[i]!==' ') {
		ans+=s[i];
		i++;
	}
	return ans
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
