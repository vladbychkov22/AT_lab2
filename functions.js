function callFunction1() {
    const name = 'John';
    const lastname = 'Doe';
    function2({ name, lastname });
}

function function2({ name, lastname }) {
    console.log(`Hello, ${name} ${lastname}!`);
}

module.exports.function2 = ({ name, lastname }) => {
    console.log(`Hello, ${name} ${lastname}`);
};