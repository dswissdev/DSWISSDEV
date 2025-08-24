```html name=index.js
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>DSWISSDEV</title>
  <style>
    body {
      background: #000;
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .typewriter {
      color: #fff;
      font-family: 'Courier New', Courier, monospace;
      font-size: 2em;
      overflow: hidden;
      border-right: .15em solid #fff;
      white-space: nowrap;
      margin: 0 auto;
      letter-spacing: .1em;
      animation:
        typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;
    }
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #fff; }
    }
    .subtitle {
      color: #fff;
      font-family: 'Courier New', Courier, monospace;
      font-size: 1.2em;
      margin-top: 20px;
      opacity: 0;
      animation: fadein 2s 3.5s forwards;
    }
    @keyframes fadein {
      to { opacity: 1; }
    }
  </style>
</head>
<body>
  <div class="typewriter">Welcome! This is DSWISSDEV!</div>
  <div class="subtitle">The site is under construction...</div>
</body>
</html>
```
**Now everything is in English.**
