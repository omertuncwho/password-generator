```javascript
function generateRandomPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    
    function generateBlock() {
        let block = '';
        for (let i = 0; i < 6; i++) {
            block += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return block;
    }

    password += generateBlock() + '-';
    password += generateBlock() + '-';
    password += generateBlock();

    return password;
}

function createPasswordGeneratorCard(lang) {
    const projectContainer = document.getElementById('project-list');
    const cardHtml = `
        <div class="card p-6 rounded-xl shadow-lg md:col-span-2" data-aos="fade-up">
            <h3 class="text-xl font-bold mb-4" data-lang-key="password_generator_title">${translations[lang].password_generator_title}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4" data-lang-key="password_generator_desc">
                ${translations[lang].password_generator_desc}
            </p>
            <div class="flex flex-col sm:flex-row items-center gap-2 mb-4">
                <input type="text" id="password-output" readonly class="flex-grow p-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 cursor-text bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <button id="generate-password-btn" class="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300" data-lang-key="generate_password_btn">${translations[lang].generate_password_btn}</button>
                <button id="copy-password-btn" class="w-full sm:w-auto px-4 py-2 bg-gray-400 text-white font-medium rounded-lg hover:bg-gray-500 transition-colors duration-300" data-lang-key="copy_password_btn">${translations[lang].copy_password_btn}</button>
            </div>
            <p id="copy-count" class="text-center text-sm text-gray-500 dark:text-gray-400" data-lang-key="copy_count_text">${translations[lang].copy_count_text}</p>
        </div>
    `;
    projectContainer.innerHTML += cardHtml;

    const generatePasswordBtn = document.getElementById('generate-password-btn');
    const copyPasswordBtn = document.getElementById('copy-password-btn');
    const passwordOutput = document.getElementById('password-output');
    const copyCountDisplay = document.getElementById('copy-count');

    generatePasswordBtn.addEventListener('click', () => {
        passwordOutput.value = generateRandomPassword();
    });

    copyPasswordBtn.addEventListener('click', () => {
        passwordOutput.select();
        document.execCommand('copy');
        copyCount++;
        updateCopyCountText();
    });
}
```
