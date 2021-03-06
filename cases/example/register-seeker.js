import registerSeeker from '../../steps/register-seeker';

describe('register-seeker-test-with-existing-email', () => {
	it('Зарегистрировать нового соискателя с существующей почтой', () => {
                registerSeeker.open('http://tripway.ru.com/signupseeker');
                registerSeeker.waitForRegisterForm();
                registerSeeker.register({
                        name: 'Abigail',
                        surname: 'Threshold',
                        login: process.env.LOGIN,
                        password: process.env.PASSWORD,
                })
	});
});