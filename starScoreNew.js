const getStar = (type = 'Active') => `<img src="https://www.zenloop.com/user/themes/zenloop/img/reviews-portal/star-${type}.svg" />`;

const getScoreHTML = (score) => {
	const maxScore = 5;
	const activeStar = getStar();
	const emptyStar = getStar('grey');
	
	let scoreHTML = '';
	let i = 0;

	while ( i < score ) {
		scoreHTML += activeStar;
		i += 1;
	}

	while ( i < maxScore ) {
		scoreHTML += emptyStar;
		i += 1;
	}

	return scoreHTML;
}

const renderStarScores = () => {
	const scoresHTML = document.querySelectorAll('.score-text > b');
	
  scoresHTML.forEach((scoreHTML) => {
		const score = Math.round( scoreHTML.innerText );
		const parentTag = scoreHTML.parentElement.parentElement;

		let scoreDiv = document.createElement('div');
		scoreDiv.setAttribute('class','review-stars');
		scoreDiv.innerHTML = getScoreHTML(score);
		
		parentTag.append(scoreDiv);
	});
}

renderStarScores();