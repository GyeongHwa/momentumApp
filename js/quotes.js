const quotes = [
    {quote: "전하! 사대의 명분을 저버리고 오랑캐에게 손을 내밀다뇨", author: "광해"},
    {quote: "경의 뜻대로 하시오.", author: "광해"},
    {quote: "중구가 시키드나", author: "신세계"},
    {quote: "어디지금무슨 파병가요?", author: "신세계"},
    {quote: "적당히들 하시오, 적당히들! 대체 이 나라가 누구 나라요?", author: "광해"},
    {quote: "말해봐요. 저한테 왜 그랬어요?", author: "달콤한 인생"},
    {quote: "홍문관은 적으라", author: "광해"},
    {quote: "거 중구형 이거 장난이 너무 심한 거 아니요!", author: "신세계"},
    {quote: "헌데, 관상가 양반. 생각해보니 영 이상하구만. 이미 나는 왕이 되었는데 왕이 될 상이라니, 이거 순 엉터리 아닌가. 왕이 되기 전에 했어야 용한 것이지. 이제와서 하는 소리야 누군들 못하겠는가.", author: "관상"},
    {quote: "I love you 3thousand.", author: "Avengers Endgame"},
    {quote: "Why so serious?", author: "the Dark Knight"},
    {quote: "Run Forrest, run!", author: "Forrest Gump"},
    {quote: "To infinity and beyond!", author: "Toy Story"},
    {quote: "This isn't flying. This is falling with style!", author: "Toy Story"},
    {quote: "발루, 난 아기곰이야!", author: "정글북"},
    {quote: "좀 비슷한 상대를 골라서 괴롭혀라! / 너같은? / 이런!", author: "라이온킹"},
    {quote: "You, you don't understand...", author: "Harry Potter and the Chamber of Secrets"},
    {quote: "Dobby is free!", author: "Harry Potter and the Prisoner of Azkaban"},
    {quote: "Good to see you, Wallenby.", author: "Harry Potter and the Half-Blood Prince"}
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
