// export default renderHTML = (x) => {
//     return `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>My first name is ${x.firstName}</h1>
//     <h1>My last name is ${x.lastName}</h1>
//     <p>I drive a ${x.car}</p>
// </body>
// </html>
//     `
// }

const genReadme = (x) => {
    return `
# READEME.md Generator

## my name is ${x.firstName} ${x.lastName}

### I love to enjoy my life driving a ${x.car}
    `
}

export default genReadme;
