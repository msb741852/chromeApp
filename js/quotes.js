const quotes = [
    {
        quote: "예술은 창조적인 예술가의 견딜 수 없는 충동에 의해 탄생한다.",
        author: "알버트 아인슈타인"
    },
    {
        quote: "친구를 용서하는 것보다 적을 용서하는 것이 더 쉽다.",
        author: "윌리엄 블레이크"
    },
    {
        quote: "나는 믿음이 존재함을 보여주기 위해 의구심을 보인다.",
        author: "로버트 브라우닝"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;