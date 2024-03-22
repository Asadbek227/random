function random(min = 1, max = 100) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function randomSymb(min = 1, max = 4) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

for (let i = 0; i < 3; i++) {
  const num1 = random();
  const num2 = random();
  const symMdl = randomSymb();

  let userResponse;
  let userCorrect;

  if (symMdl === 1) {
      userResponse = +prompt(`Решите: ${num1} + ${num2} = `);
      userCorrect = userResponse === (num1 + num2);
  } else if (symMdl === 2) {
      userResponse = +prompt(`Решите: ${num1} - ${num2} = `);
      userCorrect = userResponse === (num1 - num2);
  } else if (symMdl === 3) {
      userResponse = +prompt(`Решите: ${num1} / ${num2} = `);
      userCorrect = userResponse === (num1 / num2);
  } else if (symMdl === 4) {
      userResponse = +prompt(`Решите: ${num1} * ${num2} = `);
      userCorrect = userResponse === (num1 * num2);
  }

  console.log(`Решите: ${num1} ${symMdl === 1 ? '+' : symMdl === 2 ? '-' : symMdl === 3 ? '/' : '*'} ${num2} = ${symMdl === 1 ? (num1 + num2) : symMdl === 2 ? (num1 - num2) : symMdl === 3 ? (num1 / num2) : (num1 * num2)}. Ваш ответ: ${userResponse}. Правильный ответ: ${userCorrect}.`);
}