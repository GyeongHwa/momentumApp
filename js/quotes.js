const quotes = [
    {quote: "아수라발발타", author: "타짜"},
    {quote: "전하! 사대의 명분을 저버리고 오랑캐에게 손을 내밀다뇨", author: "광해"},
    {quote: "경의 뜻대로 하시오.", author: "광해"},
    {quote: "중구가 시키드나", author: "신세계"},
    {quote: "어디지금무슨 파병가요?", author: "신세계"},
    {quote: "적당히들 하시오, 적당히들! 대체 이 나라가 누구 나라요?", author: "광해"},
    {quote: "말해봐요. 저한테 왜 그랬어요?", author: "달콤한 인생"},
    {quote: "홍문관을 적으라", author: "광해"},
    {quote: "살려는 드릴게", author: "신세계"},
    {quote: "누구냐 너", author: "올드보이"},
    {quote: "느그 서장 남천동 살제? 으이?", author: "범죄와의 전쟁"},
    {quote: "오~ 오태식이~", author: "해바라기"},
    {quote: "헌데, 관상가 양반. 생각해보니 영 이상하구만. 이미 나는 왕이 되었는데 왕이 될 상이라니, 이거 순 엉터리 아닌가. 왕이 되기 전에 했어야 용한 것이지. 이제와서 하는 소리야 누군들 못하겠는가.", author: "관상"},
    {quote: "돈 받으러 왔는데 뭐 그것까지 알아야 되니", author: "범죄도시"},
    {quote: "I love you 3thousand.", author: "Avengers Endgame"},
    {quote: "Why so serious?", author: "The Dark Knight"},
    {quote: "Run Forrest, run!", author: "Forrest Gump"}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
