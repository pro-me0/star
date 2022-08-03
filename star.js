let color = require('colors'),
st = ['⭐','✨','☀'],
sm = ['☺','😀','😇','😃','😋','😹','😎'];

function title(){	
	process.title = `Twinklling ${sm[Math.floor(Math.random()*(sm.length))]} 
	Stars ${st[Math.floor(Math.random()*(st.length))]}`;
}

function m(){
	return `${st[Math.floor(Math.random()*(st.length))]}`.random
};

function star(){	
	title()
	console.clear();
	console.log(`
      ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}
   
${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}

            ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}

${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}
   
   ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}   ${m()}
   
      ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}
   
${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}

            ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}

${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}   ${m()}
   
   ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}   ${m()}
   
      ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}
   
${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}

            ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}

${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}
   
   ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}    ${m()}   ${m()}
`,`
	By MaZi ☺`.yellow);

	setTimeout(function(){
		star()
	}, 100)
}

star()