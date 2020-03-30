const Culturestake = artifacts.require('Culturestake');
const Question = artifacts.require('Question');

module.exports = function (deployer) {
  const answer1 = web3.utils.sha3('an answer');
  const answer2 = web3.utils.sha3('another answer');
  const answer3 = web3.utils.sha3('third answer');
  Culturestake.deployed()
    .then(async (culturestake) => {
      const logs = await culturestake.getPastEvents('InitQuestion', { fromBlock: 0, toBlock: 'latest' });
      const question = new Question.at(logs[0].returnValues.questionAddress);
      await question.initAnswer(answer1);
      await question.initAnswer(answer2);
      await question.initAnswer(answer3);
    });
};
