import { accessSync, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/questions.json`;



const askQuestionName = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Fill in your first name: ', (firstName) => {
            
           
            if (firstName === '') {
                reject('Please fill the field');
                return;
            };
            fulfil(firstName);
            
        })
    })
};

const askQuestionLastName = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Fill in your last name: ', (lastName) => {
            if (lastName === '') {
                reject('Please fill the field');
                return;
            }
            fulfil(lastName);
            writeFileSync(filePath, JSON.stringify(lastName));
        })
    })
};

const askQuestionEmail = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Fill in your email: ', (email) => {
            if (email === '') {
                reject('Please fill the field');
                return;
            }
            fulfil(email);
        })
    })
};

const askQuestionAge = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Fill in your age: ', (age) => {
            if (age === '' || isNaN(age) === true || age <= 0) {
                reject('Age has to be over zero and a number');
                return;
            }
            const ageNum = parseInt(age)
            fulfil(ageNum);
        })
    })
};

const askQuestionAddress = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Fill in your address: ', (address) => {
            if (address === '') {
                reject('Please fill the field');
                return;
            }
            fulfil(address);
        })
    })
};

try {
    const firstName = await askQuestionName();
    const lastName = await askQuestionLastName();
    const email = await askQuestionEmail();
    const age = await askQuestionAge();
    const address = await askQuestionAddress();
    console.log(`Your data is ${firstName}, ${lastName}, ${email}, ${age}, ${address}`);
    const NewEntry = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        address: address
    };
    
    writeFileSync(filePath, JSON.stringify(NewEntry));

} catch (e) {
    console.log(`Ooops, something wrong. Please fill the field`);
}




rl.close();