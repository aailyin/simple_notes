var sourceArr = ['ТАРА', 'ЛИПА', 'ТУРА', 'ЛУЖА', 'ПАРК', 'ЛОЖЬ', 'ЛУПА', 
                 'ПЛОТ', 'МУРА', 'ПАУК', 'ПАУТ', 'ПЛУТ', 'ЛОЖА', 'СЛОТ', 'ПАРА'];

	function getChain(word1, word2){
		var chain = [], copyArr = sourceArr.slice(0);
		chain.push(word1);
		copyArr.reverse();
		createChain(word1, word2, copyArr);
		chain.push(word2);

		return chain.join('-');

		function createChain(currentWord, endWord, arr){
			for(var i = 0; i < arr.length; i++){
				if(diffWordsIsLetter(currentWord, arr[i])){
					chain.push(arr[i]);
					if(diffWordsIsLetter(arr[i], endWord)) {
						return;
					}
					currentWord = arr[i];
					arr.splice(i, 1);
					return createChain(currentWord, endWord, arr);
				}
			}
		}

		function diffWordsIsLetter(word1, word2){
			if(word1.length != word2.length) { return false; }
			var num = 0, i = 0, length = word1.length;
			for(i; i < length; i++){
				if(word1.charAt(i) != word2.charAt(i)){
					if(num > 0) { return false; }
					num++;
				}
			}
			return true;
		}
	}

	console.log(getChain('ЛИСА', 'ЛОСЬ'));
	console.log(getChain('МУХА', 'СЛОН'));