// 1. Tugma bosilganda rangni o'zgartirish

// Vazifa: HTML sahifasida bir nechta matn yozilgan bo‘lsin. "Matn rangini o'zgartirish" tugmasi bosilganda, barcha matnning rangi tasodifiy rangga o‘zgartirilsin.
// Ko‘rsatma:
// getElementById yoki querySelectorAll yordamida matnni olish.
// Tugma bosilganda rangni o‘zgartirish uchun style.colordan foydalanish.
// Rangni tasodifiy olish uchun Math.random()ni ishlatish.

alert("1-vazifa")
const word = document.getElementById('word')
const btn = document.getElementById('btn')

btn.addEventListener('click', function() { // domla o'rganib kelaslar degandi tushunib oldim
    const randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ', '
    + Math.floor(Math.random() * 256) + ', ' 
    + Math.floor(Math.random() * 256) + ')';
    word.style.color = randomColor
})

// 2. Inputdagi qiymatni clipboardga nusxalash

// Vazifa: Foydalanuvchi input maydoniga matn yozadi. "Nusxa olish" tugmasi bosilganda, inputdagi qiymat clipboardga nusxalanadi va sahifada xabar ("Matn nusxalandi!") chiqariladi.
// Ko‘rsatma:
// querySelector orqali input va tugmani olish.
// Tugma bosilganda navigator.clipboard.writeText yordamida clipboardga yozib olish.
// Xabar chiqarish uchun DOM element yaratish va qo‘shish.

alert("2-vazifa")
const input = document.querySelector('#input')
const btn_2 = document.querySelector('#btn_2')

btn_2.addEventListener('click', function() {
    navigator.clipboard.writeText(input.value)
    alert("matn nusxalandi")
})

// 3. Qidiruv natijasini belgilash

// Vazifa: Sahifada matn yozilgan bo‘lsin. Foydalanuvchi qidiruv maydoniga so‘z kiritadi va "Qidirish" tugmasini bosadi. Sahifada shu so‘z bo‘lsa, uning orqa foni sariq rangga bo‘yaladi.

alert("3-vazifa")
const word_2 = document.querySelector('#word_2')
const input_2 = document.querySelector('#input_2')
const btn_3 = document.querySelector('#btn_3')

btn_3.addEventListener('click', function() {
    const search = input_2.value

    if (search) {
        const regex = new RegExp(search, 'gi') // global qidiruv uchun g ishlatilarkan katta kichik ajratmaslik uchun i
        word_2.innerHTML = word_2.innerHTML.replace(regex, function(match) {
            return `<span style="background-color: yellow">${match}</span>`
        })
    }
})

// 4. Elementni yashirish va ko‘rsatish

// Vazifa: Sahifada bir nechta paragraflar bo‘lsin. "Yashirish" tugmasi bosilganda, barcha paragraflar yashiriladi. "Ko‘rsatish" tugmasi bosilganda, ular qayta ko‘rinadigan bo‘lsin.

alert("4-vazifa")
const paragraph = document.querySelectorAll('.paragraph')

const btn_4 = document.getElementById('btn_4')
const btn_5 = document.getElementById('btn_5')

btn_4.addEventListener('click', function() {
    paragraph.forEach(value => {
        value.style.display = 'none'
    })
})

btn_5.addEventListener('click', function() {
    paragraph.forEach(value => {
        value.style.display = 'block'
    })
})

// 5. Tugma bosilganda fon rangini o'zgartirish

// Vazifa: Sahifada bir nechta tugma joylashtirilgan bo‘lsin. Har bir tugma bosilganda butun sahifaning fon rangi o‘zgaradi. Tugmalar har xil ranglar uchun javob beradi (masalan: qizil, yashil, ko‘k).

alert("5-vazifa")
const btn_6 = document.querySelector('.btn_6')
const btn_7 = document.querySelector('.btn_7')
const btn_8 = document.querySelector('.btn_8')
const btn_9 = document.querySelector('.btn_9')
const body = document.querySelector('body')

btn_6.addEventListener('click', function() {
    body.style.backgroundColor = 'red'
})

btn_7.addEventListener('click', function() {
    body.style.backgroundColor = 'green'
})

btn_8.addEventListener('click', function() {
    body.style.backgroundColor = 'blue'
})

btn_9.addEventListener('click', function() {
    body.style.backgroundColor = 'transparent'
})

// 6. Belgilangan matnni kattalashtirish

// Vazifa: Sahifada matnlar yozilgan bo‘lsin. Foydalanuvchi matn ustiga bosganda uning shrift o‘lchami kattalashadi.

alert("6-vazifa")
const paragraph_2 = document.querySelector('.paragraph_2')

paragraph_2.addEventListener('click', function() {
    paragraph_2.style.fontSize = '25px'
})

// 7. Ko‘zgu (mirror) effekti

// Vazifa: Sahifada bir input maydoni va bir matn ko‘rsatiladigan bo‘sh joy bo‘lsin. Foydalanuvchi inputga nimadir yozganda, yozilgan matn real vaqt rejimida bo‘sh joyga ko‘chib ko‘rsatiladi.

alert("7-vazifa") // ?
// const input_3 = document.querySelector('.input_3')

// input_3.addEventListener('click', function() {
//     input_3.textContent()
// })

// 8. Parolni ko‘rsatish/yashirish

// Vazifa: Foydalanuvchiga parol maydoni va "Ko‘rsatish/Yashirish" tugmasi ko‘rsatiladi. Tugma bosilganda parol ko‘rinadigan yoki yashirin holatga o‘tadi.
alert("8-vazifa")
const input_4 = document.querySelector('.input_4')
const btn_10 = document.querySelector('.btn_10')
const btn_11 = document.querySelector('.btn_11')

btn_10.addEventListener('click', function() {
    input_4.style.type = 'password'
    input_4.style.display = 'none'
})

btn_11.addEventListener('click', function() {
    input_4.style.type = 'text'
    input_4.style.display = 'block'
})

// 9. Elementni boshqarish

// Vazifa: Sahifada bitta kvadrat shakl bo‘lsin. Foydalanuvchi kvadratni yuqoriga, pastga, chapga yoki o‘ngga ko‘chirish uchun tugmalardan foydalanadi.
alert("9-vazifa")
const div = document.querySelector('.div')
const btn_12 = document.querySelector('.btn_12')
const btn_13 = document.querySelector('.btn_13')
const btn_14 = document.querySelector('.btn_14')
const btn_15 = document.querySelector('.btn_15')

btn_12.addEventListener('click', function() {
    div.style.marginTop = '15px'
})

btn_13.addEventListener('click', function() {
    div.style.marginBottom = '15px'
})

btn_14.addEventListener('click', function() {
    div.style.marginLeft = '15px'
})

btn_15.addEventListener('click', function() {
    div.style.marginRight = '15px'
})

// 10. Tasodifiy rasm ko'rsatish

// Vazifa: Sahifada "Tasodifiy rasm ko‘rsatish" tugmasi bo‘lsin. Tugma bosilganda tasodifiy rasm (oldindan berilgan URL ro‘yxatidan) sahifada ko‘rsatiladi.

alert("10-vazifa") // ?
let massiv = ['https://media.istockphoto.com/id/518356812/photo/tropical-sea-and-rocks.jpg?s=2048x2048&w=is&k=20&c=8WdTWZm8JeUC0ig-dyJx4GOqllyb00eGFBMUQBuyky8=', 'https://media.istockphoto.com/id/157834378/photo/tropical-beach.jpg?s=2048x2048&w=is&k=20&c=tKdki7LkilHwEuXOi-fa_icRccAXIO5dy5D4-8D31Nk=', 'https://media.istockphoto.com/id/1353245759/photo/aerial-view-of-cala-dhort-ibiza.jpg?s=2048x2048&w=is&k=20&c=BTusOU5lExB8KKMvyQWEZh3ODh3RqijiVb0e_qpRhHE=']

const rasm = document.querySelector('.rasm')
const btn_16 = document.querySelector('.btn_16')

btn_16.addEventListener('click', function() {
    Math.random() * massiv.length
})

// Paragraflarni yashirish va ko‘rsatish

// Vazifa: Sahifada bir nechta paragraflar bo‘lsin. Har bir paragraf yonida "Yashirish" tugmasi bo‘lsin. Tugma bosilganda faqat o‘sha paragraf yashiriladi.

alert("11-vazifa") // ustoz SelectorAll da qanday qilishni bilmadim unaqada hammasini belgilab oladiku ?
const paragraph_3 = document.querySelector('.paragraph_3')
const paragraph_4 = document.querySelector('.paragraph_4')
const paragraph_5 = document.querySelector('.paragraph_5')
const paragraph_6 = document.querySelector('.paragraph_6')
const btn_17 = document.querySelector('.btn_17')
const btn_18 = document.querySelector('.btn_18')
const btn_19 = document.querySelector('.btn_19')
const btn_20 = document.querySelector('.btn_20')
const btn_21 = document.querySelector('.btn_21')
const btn_22 = document.querySelector('.btn_22')
const btn_23 = document.querySelector('.btn_23')
const btn_24 = document.querySelector('.btn_24')

btn_17.addEventListener('click', function() {
    paragraph_3.style.display = 'none'
})

btn_18.addEventListener('click', function() {
    paragraph_4.style.display = 'none'
})

btn_19.addEventListener('click', function() {
    paragraph_5.style.display = 'none'
})

btn_20.addEventListener('click', function() {
    paragraph_6.style.display = 'none'
})

btn_21.addEventListener('click', function() {
    paragraph_3.style.display = 'block'
})

btn_22.addEventListener('click', function() {
    paragraph_4.style.display = 'block'
})

btn_23.addEventListener('click', function() {
    paragraph_5.style.display = 'block'
})

btn_24.addEventListener('click', function() {
    paragraph_6.style.display = 'block'
})

// 12. Matnni almashtirish

// Vazifa: Sahifada bir nechta paragraflar yozilgan bo‘lsin. Foydalanuvchi har bir paragrafga bosganda, o‘sha matn "Salom, dunyo!" ga almashtiriladi.

alert("12-vazifa")
const paragraph_7 = document.querySelector('.paragraph_7')
const paragraph_8 = document.querySelector('.paragraph_8')
const paragraph_9 = document.querySelector('.paragraph_9')

paragraph_7.addEventListener('click', function() {
    paragraph_7.innerText = 'Salom, Dunyo!'
})

paragraph_8.addEventListener('click', function() {
    paragraph_8.innerText = 'Salom, Dunyo!'
})

paragraph_9.addEventListener('click', function() {
    paragraph_9.innerText = 'Salom, Dunyo!'
})